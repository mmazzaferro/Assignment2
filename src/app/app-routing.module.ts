import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CreateChannelComponent } from './create-channel/create-channel.component'
import { CreateGroupComponent } from './create-group/create-group.component'
import { CreateUserComponent } from './create-user/create-user.component'
import { GroupsComponent } from './groups/groups.component'
import { LoginComponent } from './login/login.component'

const routes:Routes = [
  {path:'createChannel', component:CreateChannelComponent},
  {path:'createGroup', component:CreateGroupComponent},
  {path:'createUser', component:CreateUserComponent},
  {path:'groups', component:GroupsComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
