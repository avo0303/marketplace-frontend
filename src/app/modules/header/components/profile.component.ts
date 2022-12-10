import { Component, Input } from '@angular/core';
import { Animations } from 'src/app/animations';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [Animations.menuToggle],
})
export class ProfileComponent {
  isOpen: boolean = false;
  @Input('user') user?: User;
  constructor() {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
