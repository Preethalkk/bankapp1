import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="Your banking partner"

acNumber="Enter account number"

acno=""

pswd=""

users:any={
   1000:{acno:1000,username:"Aahil", password:"userone", balance:3000},
   1001:{acno:1001,username:"Mariya", password:"usertwo", balance:6000},
   1002:{acno:1002,usrname:"Vihan", password:"userthree", balance:5000},
   1003:{acno:1003,username:"Surya", password:"userfour", balance:8000},
   1004:{acno:1004,username:"Irin", password:"userfive", balance:4000}
  }


  constructor() { }

  ngOnInit(): void {
  }
  accNumber(event:any){
    //console.log(event.target.value);
this.acno=event.target.value
  }

  pswdChange(event:any){
    //console.log(event.target.value);
this.pswd=event.target.value
  }


  login(a:any,p:any){

    
    var acno=a.value;
    console.log(acno)

    var pswd=p.value;
    console.log(pswd)

    let accDetails=this.users
    if(acno in accDetails){
      if(pswd == accDetails[acno]["password"]){
        alert("login successful")
      }
else{
  alert("ivalid password")
}
    }
  else{
    alert("invalid account number")
  }
  
  }

}
