//module.exports = function(MongoClient, url, callback){
    const assert = require('assert');
    const MongoClient = require('mongodb').MongoClient
    const url = 'mongodb://localhost:27017'
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        assert.equal(null, err);
        const db = client.db('assignment2')
        
        db.createCollection("users", function(err, res){
            if (err) throw err
            console.log("Users Collection created!")
            callback(res)
        })
        db.createCollection("groups", function(err, res){
            if (err) throw err
            console.log("Groups Collection created!")
            callback(res)
        })
        db.createCollection("channels", function(err, res){
            if (err) throw err
            console.log("Channels Collection created!")
            callback(res)
        })
        client.close()
    })   
//}