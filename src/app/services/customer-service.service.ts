import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from '../models/customers';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  constructor(private http: HttpClient) { }

  private host: string = 'http://localhost:3000/';

  private urls = {
    getAllCustomers: 'getCustomers',
    getCustomer: 'getCustomer/',
    createCustomer: 'addCustomer',
    updateCustomer: 'updateCustomer',
    deleteCustomer: 'deleteCustomer/',
  }

  public getAllCustomers$(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.host}${this.urls.getAllCustomers}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getCustomer$(email: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.host}${this.urls.getCustomer}${email}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createCustomer$(customer: Customer) {
    return this.http.post(`${this.host}${this.urls.createCustomer}`, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateCustomer$(customer: Customer) {
    return this.http.put(`${this.host}${this.urls.updateCustomer}`, customer)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteCustomer$(email: string) {
    return this.http.delete(`${this.host}${this.urls.deleteCustomer}${email}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0)
      console.error('An error ocurred: ' + error.error);
    else
      console.error(`Backend returned code ${error.status} error message is: `, error.error);
    return throwError(() => new Error('An error occurred, please try again later'));
  }

}
