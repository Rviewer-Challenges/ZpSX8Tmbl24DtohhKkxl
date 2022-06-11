import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    SideNavBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports:[
    HeaderComponent,
    AsideComponent,
    SideNavBarComponent
  ]
})
export class SharedModule { }
