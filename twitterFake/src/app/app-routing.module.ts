import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { TweetComponent } from './pages/tweet/tweet.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, data:{titulo:'Home'}},
  {path:'explore', component:ExploreComponent, data:{titulo:'Explore'}},
  {path:'tweet/:id', component:TweetComponent, data:{titulo:'Tweet'}},  
  {path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
