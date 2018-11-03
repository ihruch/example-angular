import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PhoneRoutingModule } from './phones/phone-routing.module';
import { PhonesModule } from './phones/phones.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    AlertsComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PhoneRoutingModule,
    AppRoutingModule,
    MaterialModule,
    PhonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
