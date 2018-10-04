import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent implements OnInit {

  name:string
  group:string
  users
  constructor(private router: Router, private http: HttpClient, private formsModule: FormsModule) { }


  ngOnInit() {
  }
  createChannel(event){
    this.http.get("addChannel?name="+this.name+"&group="+this.group+"&users="+this.users).subscribe(res => {
      alert("Channel Created!")
      this.router.navigateByUrl('/channels')
    })
  }

}
