import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy  {
  data: any;
  contactForm: FormGroup;
  id: number;
  contact: Contact;

  subscriptions: Array<Subscription> = [];

  constructor(private fb: FormBuilder,
              private contactService: ContactService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data;
    this.createForm();
  }

  ngOnInit() {
    if (this.data.contact) {
      this.contact =  this.data.contact;
      this.contactForm.controls['firstName'].setValue(this.contact.firstName);
      this.contactForm.controls['lastName'].setValue(this.contact.lastName);
    } else {
      this.getIdFromRoute();
    }
  }

  onSubmit() {
    const contact =  this.contactForm.value;
    if (this.id) {
      Object.assign(contact, {id: this.id});
    }
    this.save(contact);
  }

  onReset() {
    if (this.id) {
      this.fetchById(this.id);
    } else {
      this.contactForm.reset();
    }
  }

  private createForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]  ],
      lastName: ['', Validators.required ],
    });
  }

  private getIdFromRoute() {
    const subscription: Subscription = this.activatedRoute.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.id = id;
        this.fetchById(id);
      }
    });
    this.subscriptions.push(subscription);
  }

  private fetchById(id) {
    const subscription: Subscription = this.contactService.fetchById(id)
      .subscribe((data: Contact) =>  {
          this.contact = data;
          this.contactForm.controls['firstName'].setValue(this.contact.firstName);
          this.contactForm.controls['lastName'].setValue(this.contact.lastName);
        }
      );
    this.subscriptions.push(subscription);
  }

  private save(contact: Contact) {
    if (contact.id) {
      const subscription: Subscription = this.contactService.update(contact)
        .subscribe((data: any) =>  {
            this.router.navigate(['/contacts']);
          }
        );
      this.subscriptions.push(subscription);
    } else {
      const subscription: Subscription = this.contactService.save(contact)
        .subscribe((data: any) =>  {
            this.router.navigate(['/contacts']);
          }
        );
      this.subscriptions.push(subscription);
    }
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }

}
