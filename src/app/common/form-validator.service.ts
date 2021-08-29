import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormValidatorService {
  requiredNamesValidator = [
    Validators.required,
    Validators.pattern('[a-zA-Z].*'),
  ];

  isInvalidAndTouched(formGroup: FormGroup, formControlName: string) {
    return (
      formGroup.controls[formControlName]?.invalid &&
      formGroup.controls[formControlName]?.touched
    );
  }
}
