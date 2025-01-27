import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // form setup:
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  });

  get emailIsInvalid(){
    return (this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid);
  }

  get passwordlIsInvalid(){
    return (this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid);
  }

  onSubmit(){
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
  }
}
