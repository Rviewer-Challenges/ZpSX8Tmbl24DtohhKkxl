import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';

import {faImage,faSquarePollVertical,faStar,
  faFaceSmile,faCalendarPlus,faLocationDot,
  faEarthAmericas,faCirclePlus} from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.css']
})
export class NewTweetComponent implements OnInit {

  @ViewChild('tweetElement') tweetElement:ElementRef | undefined;
  
  faStar=faStar;
  faImage=faImage;
  faSquarePollVertical=faSquarePollVertical;
  faFaceSmile=faFaceSmile;
  faCalendarPlus=faCalendarPlus;
  faLocationDot=faLocationDot;
  faEarthAmericas=faEarthAmericas;
  faCirclePlus=faCirclePlus;
  caracteresRestantes:number=0;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser();    
  }

  teclaPulsada(event: KeyboardEvent){    

    const tweet = this.tweetElement?.nativeElement.innerText;    
    const lenghtTweet=tweet.length;    
    const boxButtons = document.querySelector('.box-buttons-new-tweet');
    const limitElement = document.querySelector('#limit');
    this.caracteresRestantes=144-lenghtTweet;    
    if (lenghtTweet>0){      
      boxButtons?.classList.remove('noVisible');
    }
    switch (event.key) {
      case 'Backspace' || 'Delete' :
        if (lenghtTweet>0){
          boxButtons?.classList.remove('noVisible');
        }else{
          boxButtons?.classList.add('noVisible');
        }
        if (lenghtTweet<120){   

          limitElement?.classList.remove('orange');
          limitElement?.classList.add('noVisible');
        }
        if (lenghtTweet>=120 && lenghtTweet<144){      
          limitElement?.classList.remove('red');
        }
        break;
    
      default:
        break;      
      
    }
    if (lenghtTweet<120){      
      limitElement?.classList.add('noVisible');
    }else if (lenghtTweet>=120 && lenghtTweet<144){      
      limitElement?.classList.remove('noVisible');
      limitElement?.classList.add('orange');
      limitElement?.classList.remove('red');
    }else{
      document.querySelector('#limit')?.classList.add('red');      
    }
    
  }    
  
}
