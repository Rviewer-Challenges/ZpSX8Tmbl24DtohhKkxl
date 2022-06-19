import { Component, Input, OnInit } from '@angular/core';
import { Notice } from '../../interfaces/notices.interface';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {

  @Input()notice!:Notice;

  constructor() { }

  ngOnInit(): void {
  }

}
