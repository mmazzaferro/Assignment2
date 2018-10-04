module.exports = function(MongoClient, url, username, password, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser:true}, function(err, client){
        const db = client.db('assignment2')
        var query = {username: username, password: password}
        console.log(query)
        db.collection("users").find(query).toArray(function(err, result){
            if (err) throw err
            console.log("result: " + result.type)
            client.close()
            callback(result)
        })
    })
}