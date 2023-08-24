import { Component, ViewChild } from '@angular/core';
import { FormCustomerComponent } from '../form-customer/form-customer.component';
import { CustomerService } from 'src/app/services/customer-service.service';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customers';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  @ViewChild(FormCustomerComponent) customerForm!: FormCustomerComponent;

  constructor(private customerService: CustomerService) { }

  public addCustomer(form: NgForm) {
    this.customerService.createCustomer$(this.customerForm.customer).subscribe();
    this.customerForm.customer = new Customer('', '', '', '');
    form.reset();
  }
}
