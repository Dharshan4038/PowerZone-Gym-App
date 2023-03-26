import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdItem } from './show-results/ad-items';
import { AllComponent } from './show-results/all/all.component';
import { ExerciseResultComponent } from './show-results/exercise-result/exercise-result.component';
import { SearchComponent } from './show-results/search/search.component';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiKey: string = '642cf672a2msh4bc8bbc23e727dcp1a9c37jsn4f31621d12ba';
  apiHost: string = 'exercisedb.p.rapidapi.com';
  constructor(private http:HttpClient) { }


  listOfAllExercises():Observable<any>{
    let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
    .set('x-rapidapi-host',this.apiHost);
    let url = 'https://exercisedb.p.rapidapi.com/exercises';
    return this.http.get<any>(url,{headers});
  }

  listbyBodyPart(val:string): Observable<any>{
    let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
    .set('x-rapidapi-host',this.apiHost);
    let url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/"+val;
    return this.http.get<any>(url,{headers});
  }

  listbyTargetMuscel(val:string): Observable<any>{
    let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
    .set('x-rapidapi-host',this.apiHost);
    let url = "https://exercisedb.p.rapidapi.com/exercises/target/"+val;
    return this.http.get<any>(url,{headers});
  }

  listbyName(val:string): Observable<any>{
      let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
      .set('x-rapidapi-host',this.apiHost);
      let url = "https://exercisedb.p.rapidapi.com/exercises/name/"+val;
      return this.http.get<any>(url,{headers});
  }

  listbyId(val:string): Observable<any>{
    let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
      .set('x-rapidapi-host',this.apiHost);
      let url = "https://exercisedb.p.rapidapi.com/exercises/exercise/"+val;
      return this.http.get<any>(url,{headers});
  }

  listbyEquipment(val:string):Observable<any>{
    let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
      .set('x-rapidapi-host',this.apiHost);
      let url = "https://exercisedb.p.rapidapi.com/exercises/equipment/"+val;
      return this.http.get<any>(url,{headers});
  }

  getAds() {
    return [
      new AdItem(
        AllComponent,
        {bodyPart: "all"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "back"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "cardio"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "chest"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "lower%20arms"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "lower%20legs"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "neck"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "shoulders"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "upper%20arms"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "upper%20legs"}
      ),
      new AdItem(
        ExerciseResultComponent,
        {bodyPart: "waist"}
      )
    ]
  }

  searchAds(val:string) {
    return [
      new AdItem(
        SearchComponent,
        {bodyPart: val}
      )
    ]
  }



}
