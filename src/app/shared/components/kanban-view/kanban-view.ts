import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'kanban-view',
  imports: [CdkDrag],
  templateUrl: './kanban-view.html',
  styleUrl: './kanban-view.css',
})
export class KanbanView {

}
