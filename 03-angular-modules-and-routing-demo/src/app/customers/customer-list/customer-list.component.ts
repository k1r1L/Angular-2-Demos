import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../cusomers-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers : Object[];

  constructor(
    private customersService : CustomersService
  ) { }

  ngOnInit() {
    this.customers = this.customersService.getAllCustomers();
  }

}
