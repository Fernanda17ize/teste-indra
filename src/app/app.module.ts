import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderIndraComponent } from './header-indra/header-indra.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninIndraComponent } from './signin-indra/signin-indra.component';
import { HomeComponent } from './home/home.component';
import { AccessAccountComponent } from './access-account/access-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderIndraComponent,
    SigninIndraComponent,
    HomeComponent,
    AccessAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
