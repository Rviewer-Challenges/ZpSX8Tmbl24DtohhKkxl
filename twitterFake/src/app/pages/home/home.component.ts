import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { Tweet, TweetElement } from '../../interfaces/tweet.interface';
import { faMagnifyingGlass,faImage,faSquarePollVertical,
         faFaceSmile,faCalendarPlus,faLocationDot,
         faEarthAmericas,faCirclePlus,
         faComment,faRetweet,faHeart,faArrowUpFromBracket,faEllipsis} 
         from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faStar=faMagnifyingGlass;
  faImage=faImage;
  faSquarePollVertical=faSquarePollVertical;
  faFaceSmile=faFaceSmile;
  faCalendarPlus=faCalendarPlus;
  faLocationDot=faLocationDot;
  faEarthAmericas=faEarthAmericas;
  faCirclePlus=faCirclePlus;
  faComment=faComment;
  faRetweet=faRetweet;
  faHeart=faHeart;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faEllipsis=faEllipsis;
  public tweets:TweetElement[]=[];

  constructor(private tweetService:TweetService) { }

  
  public get numberTweets() : number {
    return this.tweets.length
  }
  

  ngOnInit(): void {
    this.tweetService.getTwwets().subscribe((resp:Tweet)=>{
      this.tweets=resp.tweets;
      console.log(this.tweets);
    });
    
  }

}
