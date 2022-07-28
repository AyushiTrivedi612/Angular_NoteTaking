import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../Authentication/authentication.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  
  currentUser: any; 
  userdetails:any;
  myObj:any;

  constructor(
    private router:Router,
    private authService:AuthenticationService,
    private toastr:ToastrService
    ) {
    
    
   }

  
  ngOnInit() {
    var userdetails=localStorage.getItem("loggedIn");
    if(userdetails)
    this.userdetails = JSON.parse(userdetails);
  }  

  logout(){
    console.log("logout success")
    localStorage.removeItem("loggedIn");
    this.router.navigateByUrl('login');
    this.toastr.success("Logout Successfully...")
    this.authService.isLoggedIn=false;
 
  }
}
