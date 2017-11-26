import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title;
  @Input() links;
  @Input() linksDropDown;

  constructor() { }

  ngOnInit() {

    this.title = 'ngx-app';

    this.links = [
      { path: '/home', title: 'Home'},
      { path: '/about', title: 'About'},
      { path: '/blog', title: 'Blog'}
    ];

    this.linksDropDown  = [
      { path: '/auth/sign-in', title: 'Sign in'},
      { path: '/auth/sign-up', title: 'Sign up'}
    ];

  }

}
