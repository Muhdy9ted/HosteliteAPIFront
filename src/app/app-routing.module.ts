import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Shared/Services/auth.guard';
import { AboutComponent } from './Components/about/about.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { HostelsListComponent } from './Components/hostels/hostels-list/hostels-list.component';
import { MemberDetailComponent } from './Components/members/member-detail/member-detail.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginModalComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hostels', canActivate: [AuthGuard], component: HostelsListComponent},
  {path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent},
  {path: 'hostelites', canActivate: [AuthGuard], component: MemberListComponent},
  {path: 'hostelites/:id', canActivate: [AuthGuard], component: MemberDetailComponent},
  // {path: 'hostilites/:id', component: MemberDetailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
