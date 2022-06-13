import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent,ExploreComponent],
  imports: [
    CommonModule,FontAwesomeModule,SharedModule
  ],
  exports:[
    HomeComponent,
    ExploreComponent
  ]
})
export class PagesModule { }
