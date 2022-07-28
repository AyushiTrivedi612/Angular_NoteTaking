import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { 
    
  }   

  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean |any
 {
    localStorage.getItem("loggedIn");
    console.log(localStorage.getItem("loggedIn"));
    // if(this.loggedIn())
    //   {
    //     return true;
    //   }
    //   else{
    //     this.router.navigate(['/dashboard']);  
    //     return false;   
    //   }       

  }

  // public loggedIn(): boolean {      
  //   let status = false;      
  //   if (localStorage.getItem('loggedIn') == "true") {      
  //      status = true;      
  //   }    
  //   else {      
  //      status = false;      
  //      }      
  //   return status;      
  //   }  
}
