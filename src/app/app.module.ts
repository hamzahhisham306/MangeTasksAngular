import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { UserComponent } from './user/user.component';
import { TasknameComponent } from './taskname/taskname.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './taskname/new-task/new-task.component';
import { TaskComponent } from './taskname/task/task.component';
// import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './taskname/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,

  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule],
})
export class AppModule {}
