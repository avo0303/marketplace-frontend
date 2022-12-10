import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animations } from 'src/app/animations';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-authorization-menu',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  animations: [Animations.menuToggle],
})
export class AuthorizationComponent {
  isOpen: boolean = false;
  currentForm: string = 'login';
  @Output() userAuthEvent = new EventEmitter<User>();

  constructor(private authenticationService: AuthenticationService) {}

  toggle(): void {
    if (!this.isOpen) {
      this.currentForm = 'login';
    }
    this.isOpen = !this.isOpen;
    console.log('button clicked');
  }

  switchForm(target: string): void {
    console.log(target);
    if (target == 'login' || target == 'registration') {
      this.currentForm = target;
      console.log(this.currentForm);
    }
  }

  onSubmit(signInForm: NgForm): void {
    const data = new SignInData(
      signInForm.value.username,
      signInForm.value.password
    );

    this.authenticationService
      .authenticate(data)
      .subscribe((userData: User) => {
        this.userAuthEvent.emit(userData);
      });
    console.log('on submit');
  }
}
