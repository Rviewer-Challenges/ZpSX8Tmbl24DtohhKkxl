import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { TweetElement } from '../../interfaces/tweet.interface';
import { ActivatedRoute } from '@angular/router';
import { faComment,faRetweet,faHeart,faArrowUpFromBracket,faEllipsis} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  faComment=faComment;
  faRetweet=faRetweet;
  faHeart=faHeart;
  faArrowUpFromBracket=faArrowUpFromBracket;
  faEllipsis=faEllipsis;
  id:number=0;
  tweet!:TweetElement;

  constructor(private tweetService:TweetService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params=>{
      this.id=parseInt( params['id'] );
    })

    this.tweet = this.tweetService.getTweet(this.id);
    console.log(this.tweet);
  }
  darClaseContenedorImagen():string{
    const numImagenes= (this.tweet.images.length)+'';
    console.log(numImagenes)
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
