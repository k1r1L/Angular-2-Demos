import { Component } from '@angular/core';

import { Laptop } from '../../models/laptop';

@Component({
  selector: 'laptop-form',
  templateUrl: './laptop.form.component.html',
  styleUrls: [ './laptop.form.component.css' ]
})
export class LaptopFormComponent {
  public operatingSystems : string[];
  public model : Laptop;
  public submitted : boolean;
  public color : string = 'green';
  public leva : number = 12;

  constructor() {
    this.operatingSystems = [ 'Windows 10', 'Linux', 'Mac OS' ];
    this.model = new Laptop(12, 'Intel Core i7', '16 GB DDR4', this.operatingSystems[0], 1000);
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    // Send model to API
  }

  get diagnostics () : string {
    return JSON.stringify(this.model);
  }
}