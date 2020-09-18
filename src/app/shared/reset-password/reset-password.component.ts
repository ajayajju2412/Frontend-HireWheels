import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  rEmailId: string;
  rMobileNumber: string;
  rPassword: string;
  rConfirmPassword: string;

  constructor() { }

  ngOnInit(): void {
  }

  resetPassword(){

  }

}
