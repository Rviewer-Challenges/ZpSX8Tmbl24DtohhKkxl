import { Component, OnInit } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  faStar=faStar
  faHome=faHome
  constructor() { }

  ngOnInit(): void {
  }

}
