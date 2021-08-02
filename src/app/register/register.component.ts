import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno=""
  pswd=""
  uname="User name please"
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  var acno=this.acno
  var pswd=this.pswd
  var uname=this.uname
var result=this.ds.register(acno,uname,pswd)
if (result){
  alert("successfully registered")
  this.router.navigateByUrl("")
}
  else{
    
    alert("user exists !!! please login")
    this.router.navigateByUrl("")
  }
}

}
