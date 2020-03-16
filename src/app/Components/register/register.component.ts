import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { User } from 'src/app/Shared/Models/user.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  @ViewChild('emailError1', {static: true}) emailError1: ElementRef;
  user: User;
  spin = false;
  emailError: string;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.bsConfig = { containerClass: 'theme-orange', isAnimated: true };
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      DOB: [null, Validators.required],
      gender: ['male'],
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(formData: FormGroup) {
    return formData.get('password').value === formData.get('confirmPassword').value ? null : {mismatch: true};
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.spin = true;
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe((userCredential) => {
        console.log(userCredential);
      }, error => {
        if (error) {
          this.spin = false;
          this.emailError = error;
          // document.getElementById('emailError1').textContent = error;
        }
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      });
    }
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
