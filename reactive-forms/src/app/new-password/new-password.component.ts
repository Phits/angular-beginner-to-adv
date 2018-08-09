import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {

  formPass = new FormGroup({
    oldPassword: new FormControl('',
      Validators.required,
      PasswordValidators.checkOldPassword
    ),
    newPassword: new FormControl('', Validators.required
    ),
    confirmPassword: new FormControl('', Validators.required)
  });

  get oldPassword() {
    return this.formPass.get('oldPassword');
  }

  get newPassword() {
    return this.formPass.get('newPassword');
  }

  get confirmPassword() {
    return this.formPass.get('confirmPassword');
  }

  change() {
    this.formPass.setErrors({
      invalidLogin: true
    });
  }

}
