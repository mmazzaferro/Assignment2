import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { GroupsComponent } from './groups/groups.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupsComponent,
    CreateUserComponent,
    CreateGroupComponent,
    CreateChannelComponent,
    ChannelsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
