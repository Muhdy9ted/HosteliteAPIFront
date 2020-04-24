import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Shared/Services/alertify.service';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  clickedLogin = false;
  isCollapsed = false;

  constructor( public authService: AuthService, private router: Router, private alertify: AlertifyService) {}

  ngOnInit() {
  }

  onLoginClicked() {
    this.clickedLogin = true;
  }

   // After clearing localStorage redirect to login screen
   logout() {
    // this.authService.userToken = null;
    // this.authService.currentUser = null;
    localStorage.removeItem('token');
    // localStorage.removeItem('user');
    this.alertify.message('logged out');
    this.router.navigate(['/']);
  }

  onCloseModalClicked() {
    this.clickedLogin = false;
  }
}
