import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSearchComponent } from './box-search/box-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { SimpleTweetComponent } from './simple-tweet/simple-tweet.component';



@NgModule({
  declarations: [
    BoxSearchComponent,NewTweetComponent,SimpleTweetComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule

  ],exports:[
    BoxSearchComponent,NewTweetComponent,SimpleTweetComponent
  ]
})
export class ComponentsModule { }
