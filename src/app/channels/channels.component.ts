import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  username: string
  group: string
  channels
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("username")
    this.group = sessionStorage.getItem("group")

    this.getChannels(this.username, this.group)
  }

  getChannels(username, group){
    this.http.get("channelsList?user=" + username + "&group="+ group).subscribe(res =>{
      var x = JSON.parse(JSON.stringify(res))
      this.channels = x.channels
    })
  }
  
  getChat(channel){
    sessionStorage.setItem("channel", channel)
    this.router.navigateByUrl('/chat')
  }
  
  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl('/')
  }

  createChannel(){
    this.router.navigateByUrl('/createChannel')
  }


}
