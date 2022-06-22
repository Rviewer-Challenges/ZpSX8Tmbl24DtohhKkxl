import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notice } from '../../interfaces/notices.interface';

@Component({
  selector: 'app-titular',
  templateUrl: './titular.component.html',
  styleUrls: ['./titular.component.css']
})
export class TitularComponent implements OnInit {

  @Input()notice!:Notice;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  cargarTweets(noticia:Notice){
    if (!noticia) return;

    this.route.navigateByUrl(`explore/${noticia.id}`);
  }

}
