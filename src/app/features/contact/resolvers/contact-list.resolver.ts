import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {ContactService} from '../services/contact.service';

@Injectable()
export class ContactListResolver implements Resolve<Observable<any>> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.contactService.fetch();
  }

}
