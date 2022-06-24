import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs';
import { Tweet, TweetElement } from '../interfaces/tweet.interface';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  public tweets:TweetElement[]=[];

  constructor(private http:HttpClient) { 
    
  }

  establecerTweets(tweets:TweetElement[]){
    this.tweets=tweets;
  }


  getTwwets(){
    
    this.http.get<Tweet>('./assets/json/tweets.json')
    .subscribe((resp:Tweet)=>{
        this.tweets=resp.tweets;
    });
      
  }

  getTweet(id:number):TweetElement{
    let tweetABuscar!:TweetElement;

    this.tweets.forEach(tweet => {
      if (tweet.id===id){
        tweetABuscar=tweet;
      }
    });
    return tweetABuscar;
  }
}
