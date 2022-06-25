import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSearchComponent } from './box-search/box-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewTweetComponent } from './new-tweet/new-tweet.component';
import { SimpleTweetComponent } from './simple-tweet/simple-tweet.component';
import { TitularComponent } from './titular/titular.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { UrlLinkPipe } from './pipes/url-link.pipe';


@NgModule({
  declarations: [
    BoxSearchComponent,
    NewTweetComponent,
    SimpleTweetComponent,
    TitularComponent, 
    DashboardComponent,
    UrlLinkPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule

  ],exports:[
    BoxSearchComponent,
    NewTweetComponent,
    SimpleTweetComponent,
    TitularComponent,
    DashboardComponent
  ]
})
export class ComponentsModule { }
