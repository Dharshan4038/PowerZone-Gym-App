import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowResultsComponent } from './show-results/show-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [ApiService,ShowResultsComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
