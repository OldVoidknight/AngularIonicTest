import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from "../user.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  userdata={unm:'',pwd:''}
  
  constructor(
    private user: UserService,
    private router: Router
  ) {
  }

  ngOnInit(){
   
  }

  login(){
    this.user.login(this.userdata)
    .subscribe(rd=>{
      console.log(rd)
      if (rd['success']) {
        this.router.navigate(['mainmenu'])
        localStorage.setItem('loggedinStatus',JSON.stringify(true))
    }
    })
    // this.router.navigate(['mainmenu'])
  }

}
