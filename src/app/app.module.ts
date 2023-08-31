import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechComponent } from './tech/tech.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsServiceService } from './news-service.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    BussinessComponent,
    TopheadlineComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    LoadingBarHttpClientModule,
     BrowserAnimationsModule,
     FormsModule
  ],
  providers: [ NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
