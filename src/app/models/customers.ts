export class Customer {
  address: string = '';
  email: string = '';
  customerName: string = '';
  customerPassword: string = '';
  userId?: number = 0;
  constructor(address: string, email: string, customerName: string, customerPassword: string, userId?: number) {
    this.address = address;
    this.email = email;
    this.customerName = customerName;
    this.customerPassword = customerPassword;
    this.userId = userId;
  }
}
