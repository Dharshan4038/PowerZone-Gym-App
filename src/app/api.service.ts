import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey: string = 'bf0a898d5fmsh08afb477830d9ddp16d177jsn74851cd7c480';
  apiHost: string = 'exercisedb.p.rapidapi.com';
  constructor(private http:HttpClient) { }

  getAllParts():Observable<any>{
    let headers = new HttpHeaders().set('x-rapidapi-key',this.apiKey)
    .set('x-rapidapi-host',this.apiHost);
    let url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    return this.http.get<any>(url,{headers});
  }

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


}
