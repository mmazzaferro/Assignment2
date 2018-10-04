import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string
  password:string
  constructor(private router:Router, private formsModule: FormsModule) { }

  ngOnInit() {
    
  }

  login(event){
    sessionStorage.setItem("username", this.username)
    sessionStorage.setItem("password", this.password)
    console.log(this.username)
    console.log(this.password)
    this.router.navigateByUrl('/groups')
  }
}
