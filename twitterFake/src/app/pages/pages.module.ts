import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [HomeComponent,ExploreComponent, TweetComponent],
  imports: [
    CommonModule,FontAwesomeModule,SharedModule,ComponentsModule
  ],
  exports:[
    HomeComponent,
    ExploreComponent
  ]
})
export class PagesModule { }
