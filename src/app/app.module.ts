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
import { ExerciseResultComponent } from './show-results/exercise-result/exercise-result.component';
import { AllComponent } from './show-results/all/all.component';
import { AdDirective } from './show-results/ad.directive';
import { ExerciseComponent } from './show-results/exercise/exercise.component';
import { SearchComponent } from './show-results/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowResultsComponent,
    ExerciseResultComponent,
    AllComponent,
    AdDirective,
    ExerciseComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
