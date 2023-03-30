import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
gender:any
  constructor(private form:FormBuilder,private ds:DataService,private route:Router){

  }

  ngOnInit(){

  }
  registerUserForm=this.form.group({
    name:[''],
    lname:[''],
    DOB:[''],
    gender:[''],
    email:[''],
    number:[''],
    psw:['']
  })
  changeGender(event:any) {
    this.gender= event.target.value;
 }
  registerUser(){
    let userData={
      name:this.registerUserForm.value.name,
      lastName:this.registerUserForm.value.lname,
      DOB:this.registerUserForm.value.DOB,
      gender:this.gender,
      email:this.registerUserForm.value.email,
      number:this.registerUserForm.value.number,
      password:this.registerUserForm.value.psw
    }
    if (this.registerUserForm.valid) {
      this.ds.addnewuser(userData).subscribe((user:any)=>{
        alert("user register succes fully") 
        this.route.navigateByUrl('')
      })
    }
  }
}
