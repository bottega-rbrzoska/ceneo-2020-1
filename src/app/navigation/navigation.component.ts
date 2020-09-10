import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { AuthState } from '../models/authState.interface';

@Component({
  selector: 'cn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  authState$: Observable<AuthState>;
  constructor(private auth: AuthService) {
    this.authState$ = auth.authState$;
  }

  ngOnInit(): void {
  }

  handleLogin() {
    this.auth.login();
  }

  handleLogout() {
    this.auth.logout();
  }

}
