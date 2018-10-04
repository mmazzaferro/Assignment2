module.exports = function(app){
    const MongoClient = require('mongodb').MongoClient
    const url = 'mongodb://localhost:27017'

    //Check username and password exists and matches in the database
    app.all('/auth', (req, res) => {
        var username = req.query.username
        var password = req.query.password
        console.log("username:" + username + "password: " + password)
        require('./retrieve/userAuth')(MongoClient, url, username, password, function(user){
            res.send({user: user.type})
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
    app.all('/channelList', (_, res) => {
        require('./retrieve/getChannels')(MongoClient, url, function(channels){
            res.send({channels: channels})
        })
    })

}
