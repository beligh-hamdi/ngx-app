import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { NewsComponent } from './components/news/news.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {NewsResolver} from './resolvers/news.resolver';
import {PostResolver} from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent,
    children: [
      { path: '',  component: NewsComponent, resolve: { posts: NewsResolver }},
      { path: ':id',  component: PostDetailComponent, resolve: { post: PostResolver } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PostResolver, NewsResolver]
})
export class BlogRoutingModule { }
