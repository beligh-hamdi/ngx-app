import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import {User} from '../models/user';
import {Router} from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  user: User= new User();
  public isLoggedIn: boolean;
  public isAdmin: boolean;

  constructor(private router: Router) {
    this.login('user', 'user');
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'user') {
      this.user  = Object.assign({}, { username: username, role: 'user' });
      this.isLoggedIn = true;
      this.setStorage();
    } else if (username === 'admin' && password === 'admin') {
      this.user  = Object.assign({}, { username: username, role: 'admin' });
      this.isLoggedIn = true;
      this.isAdmin = true;
      this.setStorage();
    }
    return Observable
      .of(true)
      .do(val => this.isLoggedIn = true);
  }

  me() {
    return Observable.of(this.getStorage());
  }

  logout() {
    this.isLoggedIn = false;
    this.user = new User();
    this.clearStorage();
    this.router.navigate(['/home']);
  }

  setStorage() {
    localStorage.setItem('username', this.user.username);
    localStorage.setItem('role', this.user.role);
  }

  getStorage(): any {
    return {
      username: localStorage.getItem('username'),
      role: localStorage.getItem('role')
    };
  }

  clearStorage() {
    localStorage.clear();
  }
}
