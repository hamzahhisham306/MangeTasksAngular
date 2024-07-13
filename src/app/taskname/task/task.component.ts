import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: false,
  // imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
