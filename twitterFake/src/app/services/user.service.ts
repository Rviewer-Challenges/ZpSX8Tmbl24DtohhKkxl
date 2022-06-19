import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User.interface';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:any;
  constructor(private http:HttpClient) { }

  getUser(){
     this.http.get<User>('./assets/json/user.json').subscribe((resp:User)=>{
      this.user=resp.user;
    })
  }
}
