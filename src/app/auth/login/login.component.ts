import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

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
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    })
  });

  get emailIsInvalid() {
    return (this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid);
  }

  get passwordlIsInvalid() {
    return (this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid);
  }

  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
  }
}

//dummy validator as an example for custom validator:
function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }

  return { doesNotContainQuestionMark: true };
}

//dummy async validator as an example for custom validator, observable with async for example should send http request:
function emailIsUnique(control: AbstractControl) {
  if (control.value !== 'test@example.com') {
    return of(null); // of - produce an observable that emits a value, in this case = null
  }

  return of({ notUnique: true });
}