import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../models/contact';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Array<Contact>;
  @Output() selectContact = new EventEmitter<any>();
  data: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data;
    this.contacts = this.data.contacts;
  }

  onSelect(id) {
    this.selectContact.emit({id: id});
    this.router.navigate(['/contacts/detail/', id]);
  }

}
