import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/tweet.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  

  constructor(public userService:UserService ) { }

  ngOnInit(): void {
    this.userService.getUser();      
    console.log(this.userService.user)
  }

}
