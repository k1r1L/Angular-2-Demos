import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './authentication/logout-component/logout.component';

// Guards
import { AuthGuard } from './guards/auth.guard.service';

const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {  }
