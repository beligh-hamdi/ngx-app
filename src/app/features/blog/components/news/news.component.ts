import { Component, OnInit } from '@angular/core';
import {BlogService, Ordering, Pagination} from '../../services/blog.service';
import {Observable} from 'rxjs/Observable';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Media} from '../../models/media';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private data: any;
  posts: Array<Post>;
  posts$: Observable<Array<Post>>;

  pagination: Pagination = new Pagination();
  totalPage: number;
  total: number;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data;
  }

  ngOnInit() {
    this.posts = this.data.posts;
    this.pagination.per_page = 1;
    this.pagination.page = 1;
  }

  fetch() {
    this.posts$  = this.blogService.fetch();
  }

  onScroll () {
    console.log('scrolled!!');
   // if (this.pagination.page >= this.totalPage) {
      this.pagination.page++;
      this.pagination.offset++;
      const ordering: Ordering = new Ordering();

      this.blogService.fetch(this.pagination, ordering).subscribe((resp: any) => {
        this.total = resp.headers.get('X-WP-Total');
        this.totalPage = resp.headers.get('X-WP-TotalPages');
        this.posts = [...this.posts, ...resp.body];
      });
  //  }
  }
}
