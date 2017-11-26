import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {ContactService} from '../services/contact.service';
import {Contact} from '../models/contact';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';



@Injectable()
export class ContactResolver implements Resolve<Observable<Contact>> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
    const id = +route.paramMap.get('id') as number;
    return this.contactService.fetchById(id).catch(() => {
      return Observable.of(null);
    });
  }

}
