import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass,faImage,faSquarePollVertical,
         faFaceSmile,faCalendarPlus,faLocationDot,
         faEarthAmericas,faCirclePlus,
         faComment,faRetweet,faHeart,faArrowUpFromBracket,faEllipsis} from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
