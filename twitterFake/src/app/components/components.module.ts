import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSearchComponent } from './box-search/box-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { SimpleTweetComponent } from './simple-tweet/simple-tweet.component';
import { TitularComponent } from './titular/titular.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BoxSearchComponent,NewTweetComponent,SimpleTweetComponent, TitularComponent, DashboardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule

  ],exports:[
    BoxSearchComponent,NewTweetComponent,SimpleTweetComponent,TitularComponent,DashboardComponent
  ]
})
export class ComponentsModule { }
