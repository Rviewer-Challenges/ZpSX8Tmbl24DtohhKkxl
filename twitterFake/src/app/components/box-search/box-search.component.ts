import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.css']
})
export class BoxSearchComponent implements OnInit {
  faMagnifyingGlass=faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
