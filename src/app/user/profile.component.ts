import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormValidatorService } from './form-validator.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error ::-webkit-input-placeholder {
        color: #999;
      }
      .error ::-moz-placeholder {
        color: #999;
      }
      .error :-moz-placeholder {
        color: #999;
      }
      .error :ms-input-placeholder {
        color: #999;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formValidatorService: FormValidatorService
  ) {}
  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName, [
      ...this.formValidatorService.requiredNamesValidator,
    ]);
    const lastName = new FormControl(this.authService.currentUser.lastName, [
      ...this.formValidatorService.requiredNamesValidator,
    ]);
    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }

  saveProfile(formValue: NgForm['value']) {
    if (this.profileForm.valid) {
      this.authService.updateUser(formValue);
      this.router.navigate(['events']);
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  isInvalidAndTouched(formControlName: string) {
    return (
      this.profileForm.controls[formControlName]?.invalid &&
      this.profileForm.controls[formControlName]?.touched
    );
  }
}
