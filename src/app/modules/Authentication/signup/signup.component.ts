import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  // public showPassword: boolean | undefined;
  arr =[] ;
  submitted: boolean = false;

  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
  },{
   
   
  });

  constructor(private router:Router,
    private toastr :ToastrService) {

  }
  onSubmit() :any{
    this.submitted = true;
    // console.log("this.submitted", this.submitted)
    if (this.signupForm.valid)
      this.submitted = false;

      let arr =[] ;
      let data:any =localStorage.getItem("form-data");
      if(this.signupForm.value.password==this.signupForm.value.confirmpassword && this.signupForm.value==null){
        
        if(data){
        arr =JSON.parse(data)
      }
      // for(var i=0;i<arr.length;i++){
      //   if(this.signupForm.value.email!=arr[i].email){
          arr.push(this.signupForm.value);
          localStorage.setItem('form-data',JSON.stringify(arr));
    
          console.log(this.signupForm.value);
          this.toastr.success('Thankyou for signup ')
          this.router.navigate(['/login'])
          this.signupForm.reset();
        // }
        // else{
        //   this.toastr.info("email is already exists")
        //   return;
        // } 
      }
  
      else{
        this.toastr.info(' password and confirm password are different ')
      }
   
      }
     
      // if(data){
      //   arr =JSON.parse(data)
      // }
      //  arr.push(this.signupForm.value);
      // localStorage.setItem('form-data',JSON.stringify(arr));

      // console.log(this.signupForm.value);
      // this.toastr.success('Thankyou for signup ')
      // this.router.navigate(['/login'])
      // this.signupForm.reset();
   
 
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get lastName() {
    return this.signupForm.get('firstName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
  }




  ngOnInit(): void {
  }

  // onSignup(){
  //   this.router.navigate(['/login']);
  // }

}

