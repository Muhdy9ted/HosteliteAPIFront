import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CounterModule } from 'ngx-counter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { WelcomeToHosteliteComponent } from './Components/homepage/welcome-to-hostelite/welcome-to-hostelite.component';
import { ExploreHostelsComponent } from './Components/homepage/explore-hostels/explore-hostels.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MemberListComponent } from './Components/member-list/member-list.component';
import { AboutComponent } from './Components/about/about.component';
import { HostelsComponent } from './Components/hostels/hostels.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PageFooterComponent } from './Components/page-footer/page-footer.component';
import { HeroSectionComponent } from './Components/hero-section/hero-section.component';

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
    HostelsComponent,
    NavbarComponent,
    FooterComponent,
    PageFooterComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CounterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
