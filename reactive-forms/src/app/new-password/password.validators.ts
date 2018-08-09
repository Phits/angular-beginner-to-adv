import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";

export class PasswordValidators {

    static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value === '1234') {
                    resolve({ checkOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });

    }
}