import { Injectable } from '@angular/core';

@Injectable()
export class CustomersService {

  constructor() { }

  getAllCustomers() {
    return [
      {
        id: 1, name: 'Kiro', job: 'Trainer'
      },
      {
        id: 2, name: 'Pesho', job: 'Cook'
      },
      {
        id: 3, name: 'Gosho', job: 'Plumber'
      }]
  }
}
