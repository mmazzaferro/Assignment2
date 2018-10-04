# 3813ICT Assignment 2 Documentation

## Instructions for Running Tests

## Description of Repository
All files (expect for some dependencies) have been uploaded to the repository. No branches were needed throughout the development. Commits were made everytime a new piece of functionality was implemented.

## Data Structures
A MongoDB database was used to hold all data including, user information, group information, channel information and chat history.

|Collection|Values|Description|
|---|---|---|
|users|username, email, type, password| Here the username is the primary key. The type can be either regular, group or super.|
|groups|name, users| The users value holds an array which contains the usernames (relating to the users collection) in order to identify which users are members of the group.|
|channels|name, group_name, users| Similar to the groups collection, the users value holds an array which contains the usernames of users in order to identify which are members of the channel. Group_name relates to the groups collection name value in order to link the two together.|
|chatHistory|channel_name, message, username| The channel_name relates to the channels collection in order to link the messages to the right channel. The message value holds the message sent by the user, the username links to the users collection in order to correctly display the user who sent the message.|

## Routes
|Route|Parameters|Return Values|What it Does|
|---|---|---|---|
|createChannel|none|none| It directs a user to the create channel page form. |
|createGroup|none|none| It directs a user to the create group page form. |
|createUser|none|none| It directs a user to the create user page form. |
|channels|none|none| It directs a user to the page which lists the channels they are in. |
|groups|none|none| It directs a user to the page which lists the groups they are in. |
|login|none|none| It directs a user to the login page form. |
|chat|none|none| It directs a user to the page which displays the chat history of the channel. |
|auth|username, password|user| This route takes the username and password and checks them against the database to ensure that user exists and the password matches. It then returns the information regarding that user.|
|groupsList|username|groups| This route takes the username of the user currently logged in and queries the database to return a list of the groups that user is a member of.|
|channelsList|group, user|channels| This route takes the username of the user currently logged in and the selected group and returns a list of channels that the user is a member of.|
|chatHistory|channel|messages, users| This route takes the channel name and queries the database to return all messages and corresponding users.|
|addUser|username, email, type, password|user| This route takes the details filled in to add a new user to the database.|
|addGroup|name, users|group| This route takes the details filled in to add a new group to the database.|
|addChannel|name, group, users|channel| This route takes the details filled in to add a new channel to the database.|

## Angular Architecture
### Components
|Component|Purpose|
|---|---|
|CreateChannelComponent| This component was created to provide a form for the user to enter in details, such as name, group and users to create a new channel. (Provided the user has the correct authorization level to do this (i.e. group or super).)|
|CreateGroupComponent| This component was created to provide a form for the user to enter in details, such as name and users to create a new group. (Provided the user has the correct authorization level to do this (i.e. group or super).|
|CreateUserComponent| This component was created to provide a form for the user to enter in details, such as name, password and type, to create a new user. (Provided the user has the correct authorization level to do this (i.e. super).|
|ChannelsComponent| This component was created to provide the list of channels a user is a member of, dependent on the group they have selected.
|GroupsComponent| This component was created to provide the list of groups a user is a member of.
|LoginComponent| This component was created to provide a form for the user to fill in their details in order to log in and gain access to the other parts of the site.|
|ChatComponent| This component was created to provide the chat history dependent on the channel selected, and allow users to send messages through to the channel.|
### Services
|Service|Purpose|
|---|---|
|Socket Service| This service is used to update the channel history in real time when a user sends a message through. |
### Models
No models were used in the development of this web application.
