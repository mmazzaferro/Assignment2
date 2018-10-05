import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  name:string
  users
  constructor(private router: Router, private http: HttpClient, private formsModule: FormsModule) { }

  ngOnInit() {
  }
  createGroup(event){
    this.http.get("addGroup?name="+this.name+"&users="+this.users).subscribe(res => {
      alert("Group Created!")
      this.router.navigateByUrl('/groups')
    })
  }

}
