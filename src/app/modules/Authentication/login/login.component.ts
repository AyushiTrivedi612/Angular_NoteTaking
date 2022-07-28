import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  submitted: boolean = false;

  loginForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthenticationService
  ) {
  }
  public showPassword: boolean | undefined;

  onSubmit():any {
    this.submitted = true;
    if (this.loginForm.valid)
      this.submitted = false;
    let arr = []
    var data = localStorage.getItem('form-data');
    if (data)
      arr = JSON.parse(data);
    for (var i = 0; i < arr.length; i++) {

      if (this.loginForm.value.email == arr[i].email && this.loginForm.value.password == arr[i].password) {

        localStorage.setItem("loggedIn", JSON.stringify(arr[i]))
        this.loginForm.reset();
        this.toastr.success("Welcome in NoteTaking System")
        this.router.navigateByUrl('/dashboard');
        this.authService.isLoggedIn = true;

      }
     
      return   this.toastr.info("please fill correct value")
    }
  
  
  }


  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }


  ngOnInit(): void {
  }

}



