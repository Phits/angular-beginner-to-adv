import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { formControlBinding } from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  formTwo;

  constructor(fb: FormBuilder) {
    this.formTwo = fb.group({
      nameTwo: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topicsTwo: fb.array([])
    })
  }

}
