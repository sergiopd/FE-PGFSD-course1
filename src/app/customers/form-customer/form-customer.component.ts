import { Component, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customers';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useExisting: NgForm
  }]
})
export class FormCustomerComponent {
  public customer: Customer = {
    email: '',
    name: '',
    address: '',
    password: '',
  }
}
