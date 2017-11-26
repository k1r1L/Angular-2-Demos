import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { GitComponent } from './git/git.component';

// Services
import { BooksService } from './books/books.service';

// Modules
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ BooksService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
