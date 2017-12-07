import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/authentication/login-form/login-form.component';
import { RegisterFormComponent } from './components/authentication/register-form/register.form.component';
import { LogoutComponent } from './components/authentication/logout/logout.component';
import { AuthGuard } from './core/guards/authentication/auth.guard';
import { BooksListComponent } from './components/books/books-list/books.list.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';


export const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ] , component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'books', loadChildren: "app/components/books/books.module#BooksModule" }
]