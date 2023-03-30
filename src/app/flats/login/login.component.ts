import { Component, Input, Output } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ds: DataService, private form: FormBuilder, private route: Router) {

  }

  ngOnInit() {

  }
  loginForm = this.form.group({

    email: ['',[Validators.required,Validators.pattern("[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com")]],
    pass: ['', [Validators.required]]

  })
  login() {
    if (this.loginForm.valid) {
    var eml = this.loginForm.value.email
    var paswd = this.loginForm.value.pass
    
      this.ds.login(eml, paswd).subscribe((item: any) => {
        const user = item.find((a: any) => {
          return a.email === eml && a.password === paswd
        })
        if (user) {
          alert('Login Succesful');
          // this.loginForm.reset()
          this.route.navigateByUrl('flats/dashboard')
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong")

      })
    }
  }
}
