import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  signal,
  computed,
  effect,
  TemplateRef,
  HostListener,
  NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskView } from '@core/models/Task';
import { UserModel } from '@core/models/UserModel';
import { UserAuth } from '@core/services/user-auth/user-auth';
import { PermissionKey } from '@core/models/PermissionKey';
import { TruncatePipe } from '@shared/pipes/truncate-pipe';

@Component({
  selector: 'tr[app-task-table-row]',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './task-table-row.html',
  styleUrl: './task-table-row.css',
  host: {
    class: 'hover:bg-gray-50 transition'
  }
})
export class TaskTableRow implements AfterViewInit, OnDestroy {

  /* ══════════════════════════════════════════════════════════════════════════
     VIEW CHILDREN
     ══════════════════════════════════════════════════════════════════════════ */

  @ViewChild('assigneesContainer') containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('contentWrapper') contentWrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('chipsRow') chipsRowRef!: ElementRef<HTMLDivElement>;

  /* ══════════════════════════════════════════════════════════════════════════
     INPUTS
     ══════════════════════════════════════════════════════════════════════════ */

  @Input({ required: true }) task!: TaskView;
  @Input() dragCellTemplate!: TemplateRef<any>;
  @Input() displayIndex?: number;

  @Input({ required: true })
  set assignedUsers(value: UserModel[]) {
    this.assignedUsersSig.set([...value]);
    // Recalculate after users change
    setTimeout(() => this.calculateFittingUsers(), 0);
  }

  private clearTriggerSig = signal<number>(0);

  @Input() set clearExpandedTrigger(v: number) {
    if (v > 0) this.clearTriggerSig.set(v);
  }

  /* ══════════════════════════════════════════════════════════════════════════
     SIGNALS
     ══════════════════════════════════════════════════════════════════════════ */

  assignedUsersSig = signal<UserModel[]>([]);
  expandedSig = signal(false);
  containerWidthSig = signal(168); // Default (180 - 12 padding)
  fittingCountSig = signal(2);
  hasOverflowSig = signal(false);

  statusLabels: Record<string, string> = {
    COMPLETED: 'Completed',
    IN_PROGRESS: 'In Progress',
    INCOMPLETE: 'Incomplete'
  };

  /* ══════════════════════════════════════════════════════════════════════════
     COMPUTED SIGNALS
     ══════════════════════════════════════════════════════════════════════════ */

  /**
   * Visible users based on mode:
   * - Expanded: ALL users
   * - Compact: Only users that fit (1 or 2, dynamically calculated)
   */
  visibleUsersSig = computed(() => {
    const users = this.assignedUsersSig();

    if (this.expandedSig()) {
      return users; // Show ALL in expanded mode
    }

    // Compact mode: show only fitting users
    const fittingCount = this.fittingCountSig();
    return users.slice(0, fittingCount);
  });

  /**
   * Count of hidden users (for +N more button)
   */
  hiddenCountSig = computed(() => {
    return this.assignedUsersSig().length - this.visibleUsersSig().length;
  });

  /* Permission signals */
  canEditSig = computed(() =>
    this.authService.currentUserSignal()?.permissions?.includes(PermissionKey.TASK_EDIT) ?? false
  );

  canDeleteSig = computed(() =>
    this.authService.currentUserSignal()?.permissions?.includes(PermissionKey.TASK_DELETE) ?? false
  );

  /* ══════════════════════════════════════════════════════════════════════════
     CONSTANTS
     ══════════════════════════════════════════════════════════════════════════ */

  private readonly MORE_BUTTON_WIDTH = 65; // +N more button width + gap
  private readonly CHIP_BASE_WIDTH = 34;   // avatar(18) + padding(12) + gap(4)
  private readonly GAP_BETWEEN_CHIPS = 6;

  /* ══════════════════════════════════════════════════════════════════════════
     PRIVATE
     ══════════════════════════════════════════════════════════════════════════ */

  private resizeObserver: ResizeObserver | null = null;
  private measureCanvas: CanvasRenderingContext2D | null = null;

  constructor(
    private authService: UserAuth,
    private ngZone: NgZone
  ) {
    // Effect: Collapse when triggered from parent
    effect(() => {
      if (this.clearTriggerSig() > 0) {
        this.expandedSig.set(false);
      }
    });

    // Effect: Check overflow when expanded state changes
    effect(() => {
      const expanded = this.expandedSig();
      // Delay to ensure DOM update
      setTimeout(() => this.checkOverflow(), 10);
    });
  }

  /* ══════════════════════════════════════════════════════════════════════════
     LIFECYCLE
     ══════════════════════════════════════════════════════════════════════════ */

  ngAfterViewInit(): void {
    this.setupResizeObserver();
    setTimeout(() => this.calculateFittingUsers(), 0);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  /* ══════════════════════════════════════════════════════════════════════════
     CLICK OUTSIDE DETECTION
     Collapse to compact mode when clicking outside the container
     ══════════════════════════════════════════════════════════════════════════ */

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.expandedSig()) return;

    const target = event.target as HTMLElement;
    const container = this.containerRef?.nativeElement;

    if (container && !container.contains(target)) {
      this.expandedSig.set(false);
    }
  }

  /* ══════════════════════════════════════════════════════════════════════════
     PUBLIC METHODS
     ══════════════════════════════════════════════════════════════════════════ */

  toggleExpanded(event: Event): void {
    event.stopPropagation();
    this.expandedSig.update(v => !v);
  }

  getUsersTooltip(users: UserModel[]): string {
    return users?.map(u => u.name).join(', ') || '';
  }

  /* ══════════════════════════════════════════════════════════════════════════
     MEASUREMENT LOGIC
     Dynamically calculate how many users fit in compact mode
     ══════════════════════════════════════════════════════════════════════════ */

  private setupResizeObserver(): void {
    if (!this.containerRef?.nativeElement) return;

    this.resizeObserver = new ResizeObserver(entries => {
      this.ngZone.run(() => {
        for (const entry of entries) {
          // Content width = total width - padding (6px each side)
          this.containerWidthSig.set(entry.contentRect.width);
          this.calculateFittingUsers();
        }
      });
    });

    this.resizeObserver.observe(this.containerRef.nativeElement);
  }

  /**
   * Calculate how many users fit in compact mode:
   * - First user ALWAYS visible (never truncated)
   * - Second user only if it fits FULLY
   * - If total > 2, always show +N more button
   */
  private calculateFittingUsers(): void {
    const users = this.assignedUsersSig();

    if (users.length === 0) {
      this.fittingCountSig.set(0);
      return;
    }

    if (users.length === 1) {
      this.fittingCountSig.set(1);
      return;
    }

    const containerWidth = this.containerWidthSig();
    const hasMoreThanTwo = users.length > 2;

    // Calculate available width for chips
    // If > 2 users, we ALWAYS need the +N more button
    const buttonWidth = hasMoreThanTwo ? this.MORE_BUTTON_WIDTH : 0;
    let availableWidth = containerWidth - buttonWidth;

    // First user chip width
    const firstChipWidth = this.measureChipWidth(users[0].name);

    // Second user chip width
    const secondChipWidth = this.measureChipWidth(users[1].name);

    // Total width needed for both chips
    const bothChipsWidth = firstChipWidth + this.GAP_BETWEEN_CHIPS + secondChipWidth;

    // Check if both fit
    if (bothChipsWidth <= availableWidth) {
      this.fittingCountSig.set(2);
    } else {
      // Second doesn't fit - but now we need button space even if total = 2
      // Because we'll hide the second user, creating a "hidden" user
      this.fittingCountSig.set(1);
    }
  }

  /**
   * Measure chip width using Canvas API for accuracy
   */
  private measureChipWidth(name: string): number {
    if (!this.measureCanvas) {
      const canvas = document.createElement('canvas');
      this.measureCanvas = canvas.getContext('2d');
    }

    if (this.measureCanvas) {
      // Match the CSS font
      this.measureCanvas.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const textWidth = this.measureCanvas.measureText(name).width;
      return Math.ceil(this.CHIP_BASE_WIDTH + textWidth);
    }

    // Fallback estimation
    return Math.ceil(this.CHIP_BASE_WIDTH + name.length * 7);
  }

  /**
   * Check if content overflows in expanded mode (for fade overlay)
   */
  private checkOverflow(): void {
    if (!this.contentWrapperRef?.nativeElement || !this.chipsRowRef?.nativeElement) {
      this.hasOverflowSig.set(false);
      return;
    }

    const wrapper = this.contentWrapperRef.nativeElement;
    const content = this.chipsRowRef.nativeElement;

    // Has overflow if content is wider than container
    this.hasOverflowSig.set(content.scrollWidth > wrapper.clientWidth);
  }

  /* ══════════════════════════════════════════════════════════════════════════
     OUTPUTS
     ══════════════════════════════════════════════════════════════════════════ */

  @Output() edit = new EventEmitter<TaskView>();
  @Output() delete = new EventEmitter<TaskView>();
}