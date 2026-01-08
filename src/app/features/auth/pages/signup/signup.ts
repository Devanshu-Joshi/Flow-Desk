import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  signupForm;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async submit() {
    if (this.signupForm.invalid) return;

    const { email, password, cpassword } = this.signupForm.value;

    if (password !== cpassword) { // Check if passwords match
      alert("Passwords do not match");
      return;
    }

    try {
      await this.authService.register(email!, password!);
      alert("Registration Successful");
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

}
