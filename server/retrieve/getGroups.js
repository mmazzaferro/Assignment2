module.exports = function(MongoClient, url, user, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser:true}, function(err, client){
        const db = client.db('assignment2')
        var query = {users: user}
        db.collection("groups").find(query).toArray(function(err, result){
            if (err) throw err
            console.log(result)
            client.close()
            callback(result)
        })
    })
}