import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from '../models/post';

import {environment} from '../../../../environments/environment';


import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Media} from '../models/media';

const ENDPOINT = environment.endpoint;

export class Pagination {
  page = 1;
  per_page = 100;
  offset = 0;
  // X-WP-Total: the total number of records in the collection
  // X-WP-TotalPages: the total number of pages encompassing all available records
}

export class Ordering {
  order = 'desc'; // asc|desc default desc
  orderby = 'date';
}

//  { page: number: 1, per_page: number :100, offset: number :  0}

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {}

  fetch(pagination: Pagination = new Pagination(), ordering: Ordering = new Ordering()):  Observable<any> {
    const paginationFilter = `page=${pagination.page}&per_page=${pagination.per_page}&offset=${pagination.offset}`;
    const orderingFilter = `order=${ordering.order}&orderby=${ordering.orderby}`;
    return this.http.get(`${ENDPOINT}/posts?${paginationFilter}&${orderingFilter}`,
      {observe: 'response'}).map((res: any) => {
      // return Contact.mapperArray(data);
      return res;
    }) as Observable<any>;
  }

  fetchById(id: number):  Observable<Post> {
    return this.http.get(`${ENDPOINT}/posts/${id}`).map((data: any) => {
     // return Contact.mapper(data);
      return data;
    }) as Observable<Post>;
  }

  fetchMediaById(id: number):  Observable<Media> {
    return this.http.get(`${ENDPOINT}/media/${id}`) as Observable<Media>;
    /*
    return this.http.get(`${ENDPOINT}/media/${id}`).map((data: any) => {
      return data;
    }) as Observable<Media>;
    */
  }

}
