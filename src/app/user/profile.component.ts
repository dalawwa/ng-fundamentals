import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    const firstName = new FormControl(this.authService.currentUser.firstName);
    const lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName,
      lastName,
    });
  }

  saveProfile(formValue: NgForm['value']) {
    this.authService.updateUser(formValue);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
