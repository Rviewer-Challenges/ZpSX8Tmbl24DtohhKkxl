import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../interfaces/tweet.interface';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  

  constructor(private http:HttpClient) { 
    
  }

  getTwwets():Observable<Tweet>{
    
    return this.http.get<Tweet>('./assets/json/tweets.json');
      
  }
}
