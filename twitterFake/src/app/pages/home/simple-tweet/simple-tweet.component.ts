import { Component, OnInit } from '@angular/core';
import { faComment,faRetweet,faHeart,faArrowUpFromBracket,faEllipsis} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-tweet',
  templateUrl: './simple-tweet.component.html',
  styleUrls: ['./simple-tweet.component.css']
})
export class SimpleTweetComponent implements OnInit {
  faComment=faComment;
  faRetweet=faRetweet;
  faHeart=faHeart;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faEllipsis=faEllipsis;

  siVideo:boolean=true;
  siImagen:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
