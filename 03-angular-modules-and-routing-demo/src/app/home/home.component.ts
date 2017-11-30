import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1>{{title}}</h1>`
})
export class HomeComponent {
  title : string = "HOME PAGE";
}