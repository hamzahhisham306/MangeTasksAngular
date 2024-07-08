import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { UserComponent } from '../app/user/user.component';
import { DUMMY_USERS } from '../dummy-user';
import { NgFor, NgIf } from '@angular/common';
import { TasknameComponent } from './taskname/taskname.component';
@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet, UserComponent, HeaderComponent,NgIf, TasknameComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  slectedUserId?:string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.slectedUserId)!;
  }

  onSelectUser(id: string) {
    this.slectedUserId = id;
  }
}
