import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../models/contact';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

const API_URL = environment.endpoint;

@Injectable()
export class ContactService {

  contacts$: Observable<Array<Contact>>;
  contacts: Array<Contact>;

  constructor(private http: HttpClient) {
    this.contacts = this.generateContacts();
    this.contacts$ = Observable.of(this.contacts);
  }

  fetch():  Observable<Array<Contact>> {
    /*
    return this.http.get(`${API_URL}/contacts`).map((data: any) => {
      return Contact.mapperArray(data);
    }) as Observable<Array<Contact>>;
    */
    return this.contacts$.delay(2000);
  }

  fetchById(id: number):  Observable<Contact> {
    /*
    return this.http.get(`${API_URL}/contacts/${id}`).map((data: any) => {
      return Contact.mapper(data);
    }) as Observable<Contact>;
    */
    return Observable.of(this.contacts.find((contact: Contact) => contact.id === id));
  }

  save(contact: Contact):  Observable<any> {
    const contactEntity: Contact = Contact.mapperDtoToEntity(contact);
    return this.http.post(`${API_URL}/contacts`, contactEntity) as Observable<any>;
  }
  remove(id: number):  Observable<any> {
    return this.http.delete(`${API_URL}/contacts/${id}`) as Observable<any>;
  }

  update(contact: Contact):  Observable<any> {
    const contactEntity: Contact = Contact.mapperDtoToEntity(contact);
    return this.http.put(`${API_URL}/contacts/${contactEntity.id}`, contactEntity) as Observable<any>;
  }

  private generateContacts() {
    const contacts: Array<Contact> = [];
    for (let i = 1; i < 1000; i++) {
      const c1: Contact = new Contact();
      c1.id = i;
      c1.firstName = 'firstName' + i;
      c1.lastName = 'lastName' + i;
      contacts.push(c1);
    }
    return contacts;
  }

}
