import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  data: any;
  contact: Contact;


  constructor(private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data;
  }

  ngOnInit() {
    this.contact =  this.data.contact;
  }

}
