import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userEmail: string;
  userPassword: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(credentials: NgForm){
  }


  @ViewChild('forgotPdModal', { static: false }) forgotPdModal: ModalDirective;
  isModalShown = false;
 
  showModal(): void {
    this.isModalShown = true;
  }
 
  hideModal(): void {
    this.forgotPdModal.hide();
  }
 
  onHidden(): void {
    this.isModalShown = false;
  }



}
