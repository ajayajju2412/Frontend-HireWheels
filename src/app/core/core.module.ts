import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent
  ]
})
export class CoreModule { }
