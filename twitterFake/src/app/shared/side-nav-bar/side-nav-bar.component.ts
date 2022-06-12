import { Component, OnInit } from '@angular/core';

import { faBell, faHashtag, faStar,faHome,faEnvelope, faBookmark,
         faBars, faUser, faEllipsis  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  faStar=faStar;
  faHome=faHome;
  faBell=faBell;
  faHastag=faHashtag;
  faEnvelope=faEnvelope;
  faBookmark=faBookmark;
  faBars=faBars;
  faUser=faUser;
  faElipsis=faEllipsis;

  constructor() { }

  ngOnInit(): void {
  }

}
