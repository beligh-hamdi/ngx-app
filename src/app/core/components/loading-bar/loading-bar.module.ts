import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingBarComponent } from './loading-bar.component';

import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  imports: [
    CommonModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule
  ],
  declarations: [LoadingBarComponent],
  exports: [ LoadingBarComponent],
  providers: []
})
export class LoadingBarModule { }
