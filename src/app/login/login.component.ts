import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string
  password:string
  constructor(private router:Router, private formsModule: FormsModule, private http: HttpClient) { }

  ngOnInit() {
    
  }

  login(event){
    sessionStorage.setItem("username", this.username)
    sessionStorage.setItem("password", this.password)

    this.http.get("auth?username=" + this.username +"&password=" + this.password).subscribe(res => {
      var x = JSON.parse(JSON.stringify(res))
      console.log("user type:" + x.user.type)
      if(x.user.length > 0){ //if user found x.user.length will be 1
        this.router.navigateByUrl('/groups')
      }else{
        alert("incorrect login details please try again")
      }
    })
    
  }
}
