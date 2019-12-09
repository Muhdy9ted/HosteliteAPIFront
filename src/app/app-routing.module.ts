import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginModalComponent},
  {path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
