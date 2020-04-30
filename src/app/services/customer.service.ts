import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl: string = "/server/api/v1/customers";
  public CurrentCustomer: Customer = new Customer();
  public Customers: Customer[] = new Array<Customer>();

  constructor(private http: HttpClient) { }

  GetCustomers(): Observable<boolean> {
    return this.http.get(this.baseUrl).pipe(map((data: any[]) => {
      this.Customers = data;
      return true;
    }));
  }

  GetCustomer(id: string): Observable<boolean> {
    let params = new HttpParams();
    params.set("id", id);

    return this.http.get(this.baseUrl + '/' + id).pipe(map((data:any)=> {
      this.CurrentCustomer = data;
      return true;
    }));
  }
}
