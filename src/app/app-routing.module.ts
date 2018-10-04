import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CreateChannelComponent } from './create-channel/create-channel.component'
import { CreateGroupComponent } from './create-group/create-group.component'
import { CreateUserComponent } from './create-user/create-user.component'
import { ChannelsComponent } from './channels/channels.component'
import { GroupsComponent } from './groups/groups.component'
import { LoginComponent } from './login/login.component'
import { ChatComponent } from './chat/chat.component'

const routes:Routes = [
  {path:'createChannel', component:CreateChannelComponent},
  {path:'createGroup', component:CreateGroupComponent},
  {path:'createUser', component:CreateUserComponent},
  {path:'channels', component:ChannelsComponent},
  {path:'groups', component:GroupsComponent},
  {path:'login', component:LoginComponent},
  {path:'chat', component:ChatComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
