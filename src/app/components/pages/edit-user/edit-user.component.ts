import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit , AfterViewInit{
  editUserForm!: FormGroup;
  hide = true;

  user: User = {
    email: 'test@example.com',
    password: 'password',
    name: 'Test User',
    phone: '1234567890',
    city: 'Test City',
    zip: '12345',
    noEmails: false,
    notifyExpiry: true,
    receiveUpdates: true,
  };

  ngOnInit(): void {
    this.editUserForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, Validators.required),
      name: new FormControl(this.user.name, Validators.required),
      phone: new FormControl(this.user.phone, Validators.required),
      city: new FormControl(this.user.city, Validators.required),
      zip: new FormControl(this.user.zip, Validators.required),
      noEmails: new FormControl(this.user.noEmails),
      notifyExpiry: new FormControl(this.user.notifyExpiry),
      receiveUpdates: new FormControl(this.user.receiveUpdates),
    });
  }

  constructor() {}

  onFormSubmit() {
    if (this.editUserForm.valid) {
      console.log(this.editUserForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
