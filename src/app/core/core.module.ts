import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';
import {CustomPreloadingStrategy} from './services/custom-preloading-strategy';
import {HttpClientModule} from '@angular/common/http';
import {CoreService} from './services/core.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';

import { AuthService} from './services/auth.service';
import {MessageService} from './services/message.service';
import {LoadingBarModule} from './components/loading-bar/loading-bar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LoadingBarModule
  ],
  declarations: [HomePageComponent, NotFoundPageComponent, NavbarComponent, LayoutComponent],
  exports: [ NavbarComponent, LayoutComponent],
  providers: [CustomPreloadingStrategy, CoreService, AuthService, MessageService]
})
export class CoreModule { }
