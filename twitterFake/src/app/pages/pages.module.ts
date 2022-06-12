import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';



@NgModule({
  declarations: [HomeComponent,ExploreComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    ExploreComponent
  ]
})
export class PagesModule { }
