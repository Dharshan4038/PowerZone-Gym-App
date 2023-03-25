import { HttpParams,HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  constructor(private http:HttpClient) { }

  getVideo(val:string): Observable<any>  {
    let headers = new HttpHeaders().set('x-rapidapi-key',"873103c7e0msh5994c4ba3d50025p1243d0jsnc3102cacb28f")
    .set('x-rapidapi-host',"youtube-search-results.p.rapidapi.com");
    let param1 = new HttpParams().set('q',val);
    return this.http.get("https://youtube-search-results.p.rapidapi.com/youtube-search/",{headers,params:param1});
  }


}
