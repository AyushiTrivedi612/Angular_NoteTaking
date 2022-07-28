import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './modules/Authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project';

  constructor(
    public authService:AuthenticationService,
    private router:Router
    ){
      if(localStorage.getItem('loggedIn')){
        this.router.navigateByUrl('dashboard');
      }else this.router.navigateByUrl('login');
  }
 
  ngOnInit(): void {

    
  
  }
  
  

}
