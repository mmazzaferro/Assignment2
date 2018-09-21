module.exports = function(MongoClient, url, name, users, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('assignment2')
        console.log("Name: " + name + "users: " + users)
        var group = { 
         name: name,
         users: users }
        db.collection("groups").insertOne(group, function(err, res){
            if (err) throw err;
            console.log("Group inserted");
            client.close();
            callback();
        })
    })   
}