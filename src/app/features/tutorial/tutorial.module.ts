import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import {TutorialPageComponent} from './tutorial-page/tutorial-page.component';
import {HttpClientModule} from '@angular/common/http';
import {TutorialService} from './services/tutorial.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TutorialRoutingModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [ TutorialService],
  declarations: [TutorialPageComponent]
})
export class TutorialModule { }
