import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public Customer: Customer = new Customer();
  private id: string = '';

  constructor(private _activatedroute: ActivatedRoute, private _router: Router,
    private _CustomerService: CustomerService) { }

  ngOnInit() {
    this.id = this._activatedroute.snapshot.params.id;
    this.GetCustomer(this.id);
  }

  GetCustomer(id: string): void {
    this._CustomerService.GetCustomer(id).subscribe(
      success => {
        this.Customer = this._CustomerService.CurrentCustomer;
      }
    );
  }

}
