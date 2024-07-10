import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { UserComponent } from './user/user.component';
import { TasknameComponent } from './taskname/taskname.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasknameComponent],
})
export class AppModule {}
