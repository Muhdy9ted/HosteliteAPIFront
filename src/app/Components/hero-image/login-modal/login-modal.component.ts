import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { LoginDTO } from 'src/app/Shared/Models/login-dto.model';
import { Router } from '@angular/router';


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

  constructor(private authService: AuthService, private router: Router) { }

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
      }
    }, error => {
      this.errorMessage = error;
      this.spin = false;
      }, () => {
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
