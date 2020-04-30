import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  private Customers: Customer[] = new Array<Customer>();

  constructor(private _CustomerService: CustomerService) { }

  ngOnInit() {
    this.GetCustomers();
  }

  GetCustomers(): void {
    this._CustomerService.GetCustomers().subscribe(
      success => {
        this.Customers = this._CustomerService.Customers;
      });
  }

}
