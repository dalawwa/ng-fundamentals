import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';

@NgModule({
  imports: [
    CommonModule, // for feature module aka lazily loadable module use CommonModule, but for root app module use BrowserModule
    RouterModule.forChild(userRoutes), // for feature module use forChild vs using forRoot as in root app module. Remember to connect it in appRoutes with loadChildren
  ],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule {}
