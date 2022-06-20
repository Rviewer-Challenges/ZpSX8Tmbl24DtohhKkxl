import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { TweetComponent } from './pages/tweet/tweet.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'explore', component:ExploreComponent},
  {path:'tweet/:id', component:TweetComponent},
  {path:'', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
