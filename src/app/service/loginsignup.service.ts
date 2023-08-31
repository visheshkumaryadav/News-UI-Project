import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class LoginsignupService {
  [x: string]: any;

  constructor(private http : HttpClient) { }

  public loginuserformremote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/login",user)
  }
  public signupuserformremote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/registerUser",user)
  }
  handleError(error:Response){

  }
}
