import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onCloseModal() {
    this.closeModalClicked.emit();
  }

  onSubmit() {
    this.authService.login().subscribe((response) => {
      console.log(response + ' success');
    }, error => {
        console.log( error + 'failed');
      }, () => {
        this.router.navigate(['/dashboard']);
      }
      );
  }
}
