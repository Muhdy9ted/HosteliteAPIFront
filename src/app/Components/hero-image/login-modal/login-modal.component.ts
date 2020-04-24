import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { LoginDTO } from 'src/app/Shared/Models/login-dto.model';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Shared/Services/alertify.service';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  @Output() closeModalClicked = new EventEmitter<void>();
  user: LoginDTO = new LoginDTO();
  spin = false;
  errorMessage: string;

  constructor(public authService: AuthService, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModalClicked.emit();
  }

  onSubmit() {
    this.spin = true;
    this.authService.loginModal().subscribe((response) => {
      if (response.state === 0) {
        this.errorMessage = response.msg;
        console.log(this.errorMessage);
      }
    }, error => {
      console.log(error);
      this.spin = false;
      if (error.status === 401) {
        this.errorMessage = 'Email and password combination doesn"t exist.';
        this.alertify.error('Email and password combination doesn"t exist.');
      } else {
        this.errorMessage = error.error;
      }
      }, () => {
        this.alertify.success('Welcome back');
        this.spin = false;
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
