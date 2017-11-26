import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RequiredTextModule} from './components/required-text/required-text.module';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RequiredTextModule
  ],
  declarations: [],
  exports: [RequiredTextModule, InfiniteScrollModule]
})
export class SharedModule { }
