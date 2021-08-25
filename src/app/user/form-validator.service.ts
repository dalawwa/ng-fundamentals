import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class FormValidatorService {
  requiredNamesValidator = [
    Validators.required,
    Validators.pattern('[a-zA-Z].*'),
  ];
}
