import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import { Notice } from '../../interfaces/notices.interface';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public notices:Notice[]=[];

  constructor(public noticesServices:NoticesService) { }

  ngOnInit(): void {

    this.noticesServices.getNotices();
    this.notices=this.noticesServices.news; 
  }

}
