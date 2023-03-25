import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdItem } from './show-results/ad-items';
import { AllComponent } from './show-results/all/all.component';
import { ExerciseResultComponent } from './show-results/exercise-result/exercise-result.component';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiKey: string = '873103c7e0msh5994c4ba3d50025p1243d0jsnc3102cacb28f';
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

  // To transfer data between sibling components
  part:string="";
  setPart(data:string){
    this.part = data;
  }
  getPart() {
    return this.part;
  }

  getAds() {
    let allExercise = [];
    allExercise = [{bodyPart:"chest",gifUrl:"adsf",target:"lbs"}];
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
      )
    ]
  }
}
