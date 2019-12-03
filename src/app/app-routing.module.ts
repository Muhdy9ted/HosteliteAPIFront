import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { RegisterComponent } from './Components/register/register.component';


const routes: Routes = [
  {path: '', component: HeroImageComponent},
  {path: 'login', component: LoginModalComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
