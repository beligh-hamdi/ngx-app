import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {BlogService} from '../services/blog.service';
import {Post} from '../models/post';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';



@Injectable()
export class PostResolver implements Resolve<Observable<Post>> {

  constructor(private blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    const id = +route.paramMap.get('id') as number;
    return this.blogService.fetchById(id).catch(() => {
      return Observable.of(null);
    });
  }

}
