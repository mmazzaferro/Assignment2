import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  username: string
  password: string
  userType: string
  groups
  connection

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    this.password = sessionStorage.getItem("password")
    console.log(this.username)
    if(sessionStorage.getItem('username') == ""){
      //check valid session is available
      sessionStorage.clear()
      alert("Not a valid user")
      this.router.navigateByUrl('/')
    } else {
      this.username = sessionStorage.getItem('username')
      console.log(this.username)
    }
   
    this.getGroups(this.username)
  }

  getGroups(username){
    this.http.get("groupsList?user="+ username).subscribe(res => {
      var x = JSON.parse(JSON.stringify(res))
      this.groups = x.groups
    })
  }

  getChannels(group){
    sessionStorage.setItem("group", group)
    this.router.navigateByUrl('/channels')
  }
  ngOnDestory(){
    if(this.connection){
      this.connection.unsubscribe()
    }
  }
  login(){
    this.router.navigateByUrl('/login')
  }
  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }
  createGroup(){
    this.router.navigateByUrl('/createGroup')
  }
}
