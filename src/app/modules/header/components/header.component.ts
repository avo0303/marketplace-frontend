import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthorizationComponent } from './authorization.component';
import { User } from 'src/app/model/user';
import { Animations } from 'src/app/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.theming.scss'],
  animations: [Animations.menuToggle],
})
export class HeaderComponent {
  @ViewChild(ProfileComponent)
  private profileComponent?: ProfileComponent;
  @ViewChild(AuthorizationComponent)
  private authorization?: AuthorizationComponent;
  isCategoriesOpen: boolean = false;
  isAuthorized: boolean = false;
  user?: User;

  @Output() categoryEvent = new EventEmitter<string>();

  profileMenuClick(): void {
    if (this.isAuthorized) {
      this.profileComponent?.toggleMenu();
    } else {
      this.authorization?.toggle();
    }
  }

  setUser(user: User): void {
    this.user = user;
    this.isAuthorized = true;
  }

  categoriesClick(): void {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }

  categoryClick(category: string): void {
    this.categoryEvent.emit(category);
  }
}
