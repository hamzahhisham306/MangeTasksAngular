import { NgModule } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasknameComponent } from './taskname.component';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TasknameComponent, NewTaskComponent, TaskComponent],
  exports: [TasknameComponent],
  imports: [SharedModule, DatePipe, FormsModule]
})
export class TasksModule {}
