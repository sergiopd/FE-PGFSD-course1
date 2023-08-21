import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customers';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent {
  public customer: Customer = {
    email: '',
    name: '',
    address: '',
    password: '',
  }
}
