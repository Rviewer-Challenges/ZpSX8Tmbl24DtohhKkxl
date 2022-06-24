import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NoticesService } from '../../services/notices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.css']
})
export class BoxSearchComponent implements OnInit {
  faMagnifyingGlass=faMagnifyingGlass;
  textSearch:string='';

  private debounceTimer?:NodeJS.Timeout;

  constructor(private noticeService:NoticesService,
              private route:Router) { }

  ngOnInit(): void {
  }

  buscar(){
    

    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      console.log(this.textSearch);      
      this.route.navigateByUrl(`/explore/${this.textSearch}`);
    }, 500);


  }

}
