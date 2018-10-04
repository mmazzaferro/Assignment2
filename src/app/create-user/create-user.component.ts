import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  username:string
  email:string
  type:string
  password:string
  constructor(private router: Router, private http: HttpClient, private formsModule: FormsModule) { }

  ngOnInit() {
  }
  createUser(event){
    this.http.get("addUser?user="+this.username+"&email="+this.email+"&type="+this.type+"&password"+this.password).subscribe(res => {
      console.log("username" + this.username + "Email:" + this.email + "password:" + this.password + "Type" + this.type)
      alert("User Created!")
      this.router.navigateByUrl('/')
    })
  }
}
