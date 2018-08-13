import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {

  form = new FormGroup({
    oldPassword: new FormControl('',
      Validators.required,
      PasswordValidators.checkOldPassword
    ),
    newPassword: new FormControl('', Validators.required
    ),
    confirmPassword: new FormControl('', Validators.required),
    confirmedPassword: new FormControl
  });

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get confirmedPassword() {
    if (this.newPassword.value === this.confirmPassword.value) {
      return true;
    } else {
      return false;
    }
  }

  change() {
    // this.form.setErrors({
    //   invalidLogin: true
    // });
  }

}
