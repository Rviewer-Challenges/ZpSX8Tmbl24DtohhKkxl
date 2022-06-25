import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faComment,faRetweet,faHeart,faArrowUpFromBracket,faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { TweetElement } from 'src/app/interfaces/tweet.interface';
import { Tweet } from '../../interfaces/tweet.interface';


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
  
  

  constructor(private route:Router ) { }

  ngOnInit(): void {
  }



  irATweet(tweet:TweetElement){
    if (!tweet) return;

    this.route.navigateByUrl(`tweet/${tweet.id}`);

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
