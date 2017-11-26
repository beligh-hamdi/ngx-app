import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../../models/contact';
import {CoreService} from '../../../../core/services/core.service';
import {AuthService} from '../../../../core/services/auth.service';

import {map, concatAll} from 'rxjs/operators';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  constructor(private contactService: ContactService,
              private coreService: CoreService,
              private authService:  AuthService) { }

  ngOnInit() {
    // this.fetchContacts();
    /*
    this.coreService.fetchConfig().subscribe((data) => {
      console.log('ContactPageComponent => coreService.fetchConfig:', data);
    });

    this.authService.login('admin', 'admin').subscribe((data) => {
      console.log('ContactPageComponent => authService.login:', data);
    });

    this.authService.me().subscribe((data) => {
      console.log('ContactPageComponent => authService.me:', data);
    });
    */

    const obs1 = this.coreService.fetchConfig().pipe(
      map((data) => { console.log(`Obs1-fetchConfig`, data); })
    );

    const obs2 = this.authService.login('admin', 'admin').pipe(
      map((data) => { console.log(`Obs2-login`, data); })
    );

    const obs3 = this.authService.me().pipe(
      map((data) => { console.log(`Obs3-me`, data); })
    );

    const subscribe = Observable
      .of(obs1, obs2, obs3)
      .pipe(concatAll())
      .subscribe();
  }

  fetchContacts() {
    this.contacts = this.contactService.fetch();
  }


}
