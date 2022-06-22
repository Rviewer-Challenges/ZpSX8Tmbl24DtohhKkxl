import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Notice } from '../interfaces/notices.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  news:Notice[]=[];

  constructor(private http:HttpClient) { }

  getNotices(){
    
    this.http.get('./assets/json/notices.json').
      subscribe((resp:any)=>{
        this.news=resp.notices;
      });
      
  }

  getGroupNews(id:number):Notice{
    let group!:Notice;

    this.news.forEach(grupo => {
      if (grupo.id===id){
        group=grupo;
      }
    });
    return group;
  }
}
