import { Component, OnInit } from '@angular/core';
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
  
  faStar=faStar;
  faImage=faImage;
  faSquarePollVertical=faSquarePollVertical;
  faFaceSmile=faFaceSmile;
  faCalendarPlus=faCalendarPlus;
  faLocationDot=faLocationDot;
  faEarthAmericas=faEarthAmericas;
  faCirclePlus=faCirclePlus;
  

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser();
    console.log(this.userService.user)
  }

}