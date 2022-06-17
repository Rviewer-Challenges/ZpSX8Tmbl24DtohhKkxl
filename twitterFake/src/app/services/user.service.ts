import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/tweet.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user?:User;
  constructor(private http:HttpClient) { }

  getUser(){
     this.http.get<User>('./assets/json/user.json').subscribe((resp:User)=>{
      this.user=resp;
    })
  }
}
