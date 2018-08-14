import { AbstractControl } from "../../../node_modules/@angular/forms";

export class PasswordValidators {

    static checkOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== '1234') {
                    resolve({ checkOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });

    }

    static passworldsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value)
            return { passworldsShouldMatch: true };

        return null;
    }
}