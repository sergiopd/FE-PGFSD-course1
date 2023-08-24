import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customers';
import { CustomerService } from 'src/app/services/customer-service.service';
import { FormCustomerComponent } from '../form-customer/form-customer.component';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  @ViewChild(FormCustomerComponent) customerForm!: FormCustomerComponent;

  public customer: Customer = new Customer('', '', '', '');
  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  public ngOnInit(): void {
    this.getCustomers();
  }

  public getCustomers() {
    this.customerService.getAllCustomers$().subscribe(customersReply => {
      this.customers = customersReply;
    })
  }

  public getCustomer(email: string) {
    this.customerService.getCustomer$(email)
      .subscribe((customerReply) => {
        this.customerForm.customer = customerReply[0];
      });
    this.customerForm.isEditCustomer = true;
  }

  public updateCustomer() {
    this.customerService.updateCustomer$(this.customerForm.customer).subscribe();
  }

  public deleteCustomer(email: string, form: NgForm) {
    this.customerService.deleteCustomer$(email).subscribe();
    this.customerForm.customer = new Customer('', '', '', '');
    form.reset();
  }
}
