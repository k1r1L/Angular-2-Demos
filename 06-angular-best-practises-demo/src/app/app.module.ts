// All Modules in App
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ServiceModule } from "./core/services/services.module";
import { AuthModule } from './components/authentication/auth.module';
import { SharedModule } from './components/shared/shared.module';
import { GuardsModule } from './core/guards/guards.module';
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { routes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes),
    ServiceModule,
    AuthModule,
    SharedModule,
    GuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
