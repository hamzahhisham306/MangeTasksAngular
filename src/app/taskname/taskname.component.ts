import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-taskname',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './taskname.component.html',
  styleUrl: './taskname.component.css',
})
export class TasknameComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  userID = this.userId;
  private tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u5',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompletTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancleTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId,
    });
    this.isAddingTask = false;
  }
}
