import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  clickedLogin = false;
  constructor( private authService: AuthService) {}

  ngOnInit() {
  }

  onLoginClicked() {
    this.clickedLogin = true;
  }

  onCloseModalClicked() {
    this.clickedLogin = false;
  }
}
