import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Shared/Services/auth.guard';
import { AboutComponent } from './Components/about/about.component';
import { HostelsComponent } from './Components/hostels/hostels.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginModalComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hostels', component: HostelsComponent},
  {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
