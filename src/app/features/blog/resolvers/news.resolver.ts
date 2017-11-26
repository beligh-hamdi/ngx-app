import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {BlogService, Ordering, Pagination} from '../services/blog.service';

@Injectable()
export class NewsResolver implements Resolve<Observable<any>> {

  constructor(private blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const pagination: Pagination = new Pagination();
    pagination.per_page = 1;

    const ordering: Ordering = new Ordering();

    return this.blogService.fetch(pagination, ordering).map(res => res.body);
  }

}
