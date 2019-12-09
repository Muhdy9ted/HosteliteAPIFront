import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './Components/hero-image/hero-image.component';
import { LoginModalComponent } from './Components/hero-image/login-modal/login-modal.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { WelcomeToHosteliteComponent } from './Components/homepage/welcome-to-hostelite/welcome-to-hostelite.component';
import { ExploreHostelsComponent } from './Components/homepage/explore-hostels/explore-hostels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    LoginModalComponent,
    RegisterComponent,
    HomepageComponent,
    WelcomeToHosteliteComponent,
    ExploreHostelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
