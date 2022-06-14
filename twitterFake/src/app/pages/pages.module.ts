import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { NewTweetComponent } from './home/new-tweet/new-tweet.component';
import { SimpleTweetComponent } from './home/simple-tweet/simple-tweet.component';


@NgModule({
  declarations: [HomeComponent,ExploreComponent, NewTweetComponent, SimpleTweetComponent],
  imports: [
    CommonModule,FontAwesomeModule,SharedModule
  ],
  exports:[
    HomeComponent,
    ExploreComponent
  ]
})
export class PagesModule { }
