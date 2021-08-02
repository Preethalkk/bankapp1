import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""
  
  depositForm=this.fb.group({
      
      acno:['' ,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
      pswd:['' ,[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
      amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm =this.fb.group({
      
    acno:['' ,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(4)]],
    pswd:['' ,[Validators.required,Validators.pattern('[a-zA-z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

user=this.ds.currentUser

  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
deposit(){
  if(this.depositForm.valid){
var acno=this.depositForm.value.acno
var pswd=this.depositForm.value.pswd
var amount=this.depositForm.value.amount

var result=this.ds.deposit(acno,pswd,amount)
if(result){
  alert(amount+"credited successfullty and new balance is :" +result)
}
  }
  else{
    alert("invalid form")
  }
}
withdraw(){
  if(this.withdrawForm.valid){


  var acno=this.withdrawForm.value.acno
  var pswd=this.withdrawForm.value.pswd
  var amount=this.withdrawForm.value.amount

var result=this.ds.withdraw(acno,pswd,amount)

if(result){

  alert(amount+"debited successfullty and new balance is :" +result)
}

}
else{
  alert("invalid form")
}
}}