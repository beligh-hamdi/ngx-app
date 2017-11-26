import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private data: any;
  post: Post;

  config: {class: false};

  constructor(private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data;
  }

  ngOnInit() {
    this.post = this.data.post;
  }

}
