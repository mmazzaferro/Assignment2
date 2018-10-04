module.exports = function(app){
    const MongoClient = require('mongodb').MongoClient
    const url = 'mongodb://localhost:27017'

    //Check username and password exists and matches in the database
    app.all('/auth', (req, res) => {
        var username = req.query.username
        var password = req.query.password
        console.log("username:" + username + "password: " + password)
        require('./retrieve/userAuth')(MongoClient, url, username, password, function(user){
            res.send({user: user})
        })
    })

    //Get list of groups a user is a member of
    app.all('/groupsList', (req, res) => {
        var user = req.query.user
        require('./retrieve/getGroups')(MongoClient, url, user, function(groups){
            res.send({groups: groups})
        })
    })

    //Get list of channels a user is a member of
    app.all('/channelsList', (req, res) => {
        var group = req.query.group
        var user = req.query.user
        require('./retrieve/getChannels')(MongoClient, url, group, user, function(channels){
            res.send({channels: channels})
        })
    })

    //Get Chat History
    app.all('/chatHistory', (req, res) => {
        var channel
        require('./retrieve/getChatHistory')(MongoClient, url, channel, function(messages){
            res.send({messages: messages})
        })
    })

    //Add User
    app.all('/addUser', (req, res) => {
        var username = req.query.user
        var email = req.query.email
        var type = req.query.type
        var password = req.query.password
        require('./add/insertUserData')(MongoClient, url, username, password, email, type, function(user){
            res.send({user: user})
        })
    })

    //Add Group
    app.all('/addGroup', (req, res) => {
        var name = req.query.name
        var users = req.query.users
        require('./add/insertGroupData')(MongoClient, url, name, users, function(group){
            res.send({group:group})
        })
    })

    //Add Channel
    app.all('/addChannel', (req, res) => {
        var name = req.query.name
        var group = req.query.group
        var users = req.query.users
        require('./add/insertChannelData')(MongoClient, url, name, group, users, function(channel){
            res.send({channel:channel})
        })
    })

}
