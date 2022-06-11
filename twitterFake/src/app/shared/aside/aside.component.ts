import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  faMagnifyingGlass=faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
