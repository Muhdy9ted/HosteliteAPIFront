import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  clickedLogin = false;
  isCollapsed = false;

  constructor( private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  onLoginClicked() {
    this.clickedLogin = true;
  }

   // After clearing localStorage redirect to login screen
   logout() {
    localStorage.clear();
    console.log('logout');
    this.router.navigate(['/about']);
  }

  onCloseModalClicked() {
    this.clickedLogin = false;
  }
}
