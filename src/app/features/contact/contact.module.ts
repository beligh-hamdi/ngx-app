import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
  ],
  providers: [ContactService],
  declarations: [ContactPageComponent, ContactListComponent, ContactFormComponent, ContactDetailComponent]
})
export class ContactModule { }
