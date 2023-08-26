import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customers';
import { CustomerService } from 'src/app/services/customer-service.service';
import { FormCustomerComponent } from '../form-customer/form-customer.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit, OnDestroy {
  @ViewChild(FormCustomerComponent) customerForm!: FormCustomerComponent;

  public customer: Customer = new Customer('', '', '', '');
  public customers: Customer[] = [];
  public message = '';
  private subscriptions = new Subscription();

  constructor(private customerService: CustomerService) { }

  public ngOnInit(): void {
    this.getCustomers();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getCustomers() {
    this.subscriptions.add(this.customerService.getAllCustomers$()
      .subscribe(
        customersReply => {
          this.customers = customersReply;
        })
    );
  }

  public getCustomer(email: string) {
    this.subscriptions.add(this.customerService.getCustomer$(email)
      .subscribe({
        next: (customerReply) => {
          this.customerForm.customer = customerReply[0];
        }
      })
    );
    this.customerForm.isEditCustomer = true;
  }

  public updateCustomer(form: NgForm) {
    this.subscriptions.add(
      this.customerService.updateCustomer$(this.customerForm.customer).subscribe({
        complete: () => {
          this.message = 'Customer updated successfully';
          setTimeout(() => {
            this.message = '';
          }, 2_000);
          this.getCustomers();
          form.reset();
        }
      })
    );
  }

  public deleteCustomer(email: string, form: NgForm) {
    this.subscriptions.add(
      this.customerService.deleteCustomer$(email).subscribe({
        complete: () => {
          this.message = 'Customer deleted successfully';
          setTimeout(() => {
            this.message = '';
          }, 2_000);
          this.getCustomers();
        }
      })
    );
    this.customerForm.customer = new Customer('', '', '', '');
    form.reset();
  }
}
