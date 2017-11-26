import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TutorialPageComponent} from './tutorial-page/tutorial-page.component';

const routes: Routes = [
  { path: '',  component: TutorialPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
