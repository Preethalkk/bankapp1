import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:any={
    1000:{acno:1000,username:"Aahil", password:"userone", balance:3000},
    1001:{acno:1001,username:"Mariya", password:"usertwo", balance:6000},
    1002:{acno:1002,username:"Vihan", password:"userthree", balance:5000},
    1003:{acno:1003,username:"Surya", password:"userfour", balance:8000},
    1004:{acno:1004,username:"Irin", password:"userfive", balance:4000}
   }
 
  constructor() { }

register(acno:any,username:any,password:any){
  let accDetails=this.users

  if(acno in accDetails){

    return false
  }
  else{
    accDetails[acno]={
      acno,
      username,
    password,
      balance:0
    }
    //console.log(accDetails);
    //console.log(this.users);
    return true
    
  }

  }

login(acno:any,pswd:any){
  let accDetails=this.users

    if(acno in accDetails){
      if(pswd == accDetails[acno]["password"]){
        return true

      }
else{
  alert("ivalid password")
  return false
}
    }
  else{
    alert("invalid account number")
    return false
  }
  
  }

deposit(acno:any,pswd:any,amount:any){
  
  let accDetails=this.users
  var amt=parseInt(amount)
  if (acno in accDetails){
    if(pswd == accDetails[acno]["password"]){
    accDetails[acno]["balance"]+=amt
    return accDetails[acno]["balance"]
  }
  else{
    alert("Invalid password")
    return false
  }
}
  else{
    alert("Invalid Account number")
    return false
}
}
withdraw(acno:any,pswd:any,amount:any){
  
  let accDetails=this.users
  var amt=parseInt(amount)
  if (acno in accDetails){
    if(pswd == accDetails[acno]["password"]){
      if(accDetails[acno]["balance"]>amt){
        accDetails[acno]["balance"]-=amt
        return accDetails[acno]["balance"]
      }
    else{
      alert("Insufficient balance")
      return false
    }
  }
  else{
    alert("Invalid password")
    return false
  }
}
  else{
    alert("Invalid Account number")
    return false
}
}

}





