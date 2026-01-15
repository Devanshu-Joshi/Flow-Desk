import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-state',
  imports: [CommonModule],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.css',
})
export class EmptyState {
  @Input() iconClass: string = 'bx bx-task';
  @Input() title: string = 'Nothing to show here';
  @Input() descriptionLine1: string = "Tasks will appear here when they're available";
  @Input() descriptionLine2: string = 'or match your criteria.';
}
