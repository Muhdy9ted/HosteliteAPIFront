import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterModule } from 'ngx-counter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, BsDropdownModule, BsDatepickerModule, TabsModule } from 'ngx-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { WelcomeToHosteliteComponent } from './Components/homepage/welcome-to-hostelite/welcome-to-hostelite.component';
import { ExploreHostelsComponent } from './Components/homepage/explore-hostels/explore-hostels.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageFooterComponent } from './Components/page-footer/page-footer.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';
import { HostelsListComponent } from './Components/hostels/hostels-list/hostels-list.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    LoginModalComponent,
    RegisterComponent,
    HomepageComponent,
    WelcomeToHosteliteComponent,
    ExploreHostelsComponent,
    DashboardComponent,
    MemberListComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    PageFooterComponent,
    HeroSectionComponent,
    HostelsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CounterModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
