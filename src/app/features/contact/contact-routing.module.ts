import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactPageComponent} from './components/contact-page/contact-page.component';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';

import {ContactResolver} from './resolvers/contact.resolver';
import {ContactListResolver} from './resolvers/contact-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    children: [
      { path: '',  component: ContactListComponent, resolve: { contacts: ContactListResolver }},
      { path: 'new',  component: ContactFormComponent },
      { path: 'detail/:id',  component: ContactDetailComponent, resolve: { contact: ContactResolver } },
      { path: 'edit/:id',  component: ContactFormComponent, resolve: { contact: ContactResolver }  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ContactResolver, ContactListResolver]
})
export class ContactRoutingModule { }
