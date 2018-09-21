module.exports = function(MongoClient, url, username, password, email, type, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('assignment2')
        console.log("Username: " + username + "password: " + password)
        console.log("email: "+ email, "type: " + type)
        var user = { 
         username: username,
         password: password,
         email: email,
         type: type }
        db.collection("users").insertOne(user, function(err, res){
            if (err) throw err;
            console.log("User inserted");
            client.close();
            callback();
        })
    })   
}
