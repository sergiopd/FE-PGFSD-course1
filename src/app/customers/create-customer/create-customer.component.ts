import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormCustomerComponent } from '../form-customer/form-customer.component';
import { CustomerService } from 'src/app/services/customer-service.service';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnDestroy {
  @ViewChild(FormCustomerComponent) customerForm!: FormCustomerComponent;

  private subscription = new Subscription();

  constructor(private customerService: CustomerService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public addCustomer(form: NgForm) {
    this.subscription = this.customerService.createCustomer$(this.customerForm.customer).subscribe();
    this.customerForm.customer = new Customer('', '', '', '');
    form.reset();
  }
}
