import { Component } from '@angular/core';

@Component({
  template: '<h1>{{title}}</h1>'
})
export class PageNotFoundComponent {
  title : string = "404 Page Not Found!"
}