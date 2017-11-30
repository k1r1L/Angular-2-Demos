import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersService } from './cusomers-service.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  exports: [CustomerListComponent, CustomerDetailsComponent],
  providers: [CustomersService]
})
export class CustomersModule {}