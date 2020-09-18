import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordvalidatorDirective } from './passwordvalidator.directive';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ModalModule } from "ngx-bootstrap/modal";


@NgModule({
  declarations: [SignInComponent, SigninModalComponent, SignUpComponent, PasswordvalidatorDirective, ResetPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot(),
  ],
  exports: [
    SignInComponent,
    SigninModalComponent,
    SignUpComponent,
    PasswordvalidatorDirective,
    ResetPasswordComponent
  ]
})
export class SharedModule { }
