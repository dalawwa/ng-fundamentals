import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule, // for feature module aka lazily loadable module use CommonModule, but for root app module use BrowserModule
    RouterModule.forChild(userRoutes), // for feature module use forChild vs using forRoot as in root app module. Remember to connect it in appRoutes with loadChildren
    FormsModule,
  ],
  declarations: [ProfileComponent, LoginComponent],
  providers: [
    // we added AuthService in app.module as they're available everywhere. Not the case for imports and declarations
  ],
})
export class UserModule {}
