import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `,
  ],
})
export class NavBarComponent {
  // auth is public so we can access it in the template
  constructor(public auth: AuthService) {}
}
