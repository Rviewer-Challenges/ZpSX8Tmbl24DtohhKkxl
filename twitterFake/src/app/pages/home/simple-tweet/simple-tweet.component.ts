import { Component, Input, OnInit } from '@angular/core';
import { faComment,faRetweet,faHeart,faArrowUpFromBracket,faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { TweetElement } from '../../../interfaces/tweet.interface';

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

  @Input()tweet!:TweetElement;
  
  

  constructor() { }

  ngOnInit(): void {
  }


  darClaseContenedorImagen():string{
    const numImagenes= (this.tweet.images.length)+'';

    switch (numImagenes) {      
      case '1':
        return 'unaImagen';
        
      case '2':
        return 'dosImagenes';
        
      case '3':
        return 'tresImagenes';
        
      case '4':
        return 'cuatroImagenes';
        
      default:
        return '';
    } 
  }

}
