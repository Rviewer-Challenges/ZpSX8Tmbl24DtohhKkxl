import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSearchComponent } from './box-search/box-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    BoxSearchComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule

  ],exports:[
    BoxSearchComponent
  ]
})
export class ComponentsModule { }
