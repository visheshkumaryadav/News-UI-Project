import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  topheadlinenews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=bd8ce599ddcd4330ad8c9b27dceb03f0';

  techurl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bd8ce599ddcd4330ad8c9b27dceb03f0';

  bussinessurl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bd8ce599ddcd4330ad8c9b27dceb03f0';

  topheadline(): Observable<any> {
    return this.http.get(this.topheadlinenews)
  }
  tech(): Observable<any> {
    return this.http.get(this.techurl)
  }

  bussiness(): Observable<any> {
    return this.http.get(this.bussinessurl)
  }
}
