import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { TweetElement } from '../../interfaces/tweet.interface';
import { ActivatedRoute, Router } from '@angular/router';
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
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.route.params.subscribe(params=>{
      this.id=parseInt( params['id'] );
    })

    this.tweet = this.tweetService.getTweet(this.id);
    if (!this.tweet){
      this.router.navigateByUrl('/home');
    }
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
