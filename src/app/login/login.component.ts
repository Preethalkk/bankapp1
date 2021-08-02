import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim="Your banking partner"


acno="Enter account number"

pswd=""

loginForm=this.fb.group({
  acno:['' ,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pswd:['' ,[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
})

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  login(){

if(this.loginForm.valid){
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd
   var result=this.ds.login(acno,pswd)

    if(result){
      alert("login successful")
this.router.navigateByUrl("dashboard");
  }
  
  }
else{
  alert("Invalid form")
 
}
}
}
