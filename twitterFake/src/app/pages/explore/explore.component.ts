import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticesService } from '../../services/notices.service';
import { TweetElement } from '../../interfaces/tweet.interface';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  id:number=0;
  tweets:TweetElement[]=[];

  constructor(private route:ActivatedRoute,private noticesService:NoticesService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.tweets=[]
    this.route.params.subscribe(params=>{
      this.id=parseInt( params['id'] );
      if (this.id!=0){
        this.tweets=this.noticesService.getGroupNews(this.id).tweets;
      }else{
        
        this.noticesService.news.forEach(group => {
          group.tweets.forEach(tweet=>{
            this.tweets.push(tweet);
          })
            
        }); 
      }
      
    })
  }

}
