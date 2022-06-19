import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Notices } from '../interfaces/notices.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  constructor(private http:HttpClient) { }

  getNotices():Observable<Notices>{
    
    return this.http.get<Notices>('./assets/json/notices.json');
      
  }
}
