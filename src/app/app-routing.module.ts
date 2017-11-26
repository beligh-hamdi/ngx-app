import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './core/components/home-page/home-page.component';
import {NotFoundPageComponent} from './core/components/not-found-page/not-found-page.component';
import {CustomPreloadingStrategy} from './core/services/custom-preloading-strategy';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    loadChildren: './features/about/about.module#AboutModule',
    data: { preload: true }
  },
  {
    path: 'contacts',
    loadChildren: './features/contact/contact.module#ContactModule',
    data: { preload: true }
  },
  {
    path: 'tutorials',
    loadChildren: './features/tutorial/tutorial.module#TutorialModule',
    data: { preload: true }
  },
  {
    path: 'auth',
    loadChildren: './features/auth/auth.module#AuthModule',
    data: { preload: true }
  },
  {
    path: 'blog',
    loadChildren: './features/blog/blog.module#BlogModule',
    data: { preload: true }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy, useHash: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
