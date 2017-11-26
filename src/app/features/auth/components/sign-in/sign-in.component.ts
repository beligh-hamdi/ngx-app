import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {User} from '../../../../core/models/user';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  user: User;
  userForm: FormGroup;
  subscriptions: Array<Subscription> = [];

  constructor(private fb: FormBuilder,
              private autService: AuthService,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  onReset() {
    this.userForm.reset();
  }

  onSubmit() {
    const user =  this.userForm.value;
    this.save(user);
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }

  private save(user: User) {
      const subscription: Subscription = this.autService.login(user.username, user.password)
        .subscribe((data: any) =>  {
           this.router.navigate(['/home']);
          }
        );
      this.subscriptions.push(subscription);
  }

  private createForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]  ],
      password: ['', [Validators.required, Validators.minLength(3)]  ]
    });
  }

}
