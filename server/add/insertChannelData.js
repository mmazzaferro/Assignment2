module.exports = function(MongoClient, url, name, group, users, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('assignment2')
        console.log("Name: " + name + "group: " + group + "users: " + users)
        var channel = { 
         name: name,
         group: group,
         users: users }
        db.collection("channels").insertOne(channel, function(err, res){
            if (err) throw err;
            console.log("Channel inserted");
            client.close();
            callback();
        })
    })   
}