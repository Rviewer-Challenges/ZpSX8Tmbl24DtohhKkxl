import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Notice } from '../interfaces/notices.interface';
import { notDeepStrictEqual } from 'assert';
import { TweetElement } from '../interfaces/tweet.interface';

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

  search(text:string):TweetElement[]{
    const resultado:TweetElement[] =[]
    this.news.find(noticia=>{
      noticia.tweets.forEach(tweet=>{
        if (tweet.tweet.includes(text)|| tweet.user.user.includes(text)){
          resultado.push(tweet);
        }
      })
    });
    return resultado
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
