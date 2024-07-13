import {
  Component,
  signal,
  computed,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { User } from './user.model';
// import { CardComponent } from '../shared/card/card.component';
// import { DatePipe } from '@angular/common';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter();

  // selectName = this.name;
  selectedUser = DUMMY_USERS[randomIndex];
  // imagePath = computed(() => 'assets/' + this.selectedUser().avatar);
  testButton() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }
  get fullName() {
    return this.user.name;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
