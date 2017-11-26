import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { NewsComponent } from './components/news/news.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {BlogService} from './services/blog.service';
import { MediaComponent } from './components/media/media.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BlogRoutingModule,
    SharedModule
  ],
  providers: [BlogService],
  declarations: [BlogPageComponent, NewsComponent, PostDetailComponent, MediaComponent]
})
export class BlogModule { }
