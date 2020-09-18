import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {path: 'signin',
  component: SignInComponent
  },
  {path: 'signup',
  component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
