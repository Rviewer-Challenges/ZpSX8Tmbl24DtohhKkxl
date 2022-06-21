import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { UserService } from '../../services/user.service';
import { faArrowLeft, faL } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  faArrowLeft=faArrowLeft;
  titulo:string='';
  home:boolean=true;
  

  constructor(public userService:UserService,
              private router: Router) { 
    this.router.events
      .pipe(
        filter((event:any)=>event instanceof ActivationEnd),
        filter((event:ActivationEnd)=>event.snapshot.firstChild===null),
        map((event:ActivationEnd)=>event.snapshot.data)
      )
      .subscribe(({titulo})=>{
        this.titulo=titulo;
        if (this.titulo==='Tweet'){
          this.home=false;
        }
        document.title=`${this.titulo} / TwitterFake`
   })
    

              }

  ngOnInit(): void {
    this.userService.getUser();      
    console.log(this.userService.user)
  }

}
