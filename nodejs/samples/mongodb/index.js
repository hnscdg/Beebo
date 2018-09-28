var MongoClinet = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob";

MongoClinet.connect(url, function(err, db){
    if(err) throw err;
    console.log("create the database");

    // create item
    var dbase = db.db("runoob");
    dbase.createCollection('site', function(err, res){
        if(err) throw err;
        console.log("create item");
    });

    // insert one document
    var dbo = db.db("runoob");
    var myObj = [ 
        {name: "tutorial", url:"www.runoob.com"},
        {name: "google", url:"www.google.com"},
        {name: "sogou", url:"www.sogou.com"},
        {name: "baidu", url:"www.baidu.com"},
        {name: "w3cshool", url:"www.w3cschool.com"},
        {name: "bing", url:"www.bing.com"}
    ];
    // dbo.collection("site").insertMany(myObj, function(err, res){
    //     if(err) throw err;
    //     console.log(res);
    //     console.log("插入的文档数量为: " + res.insertedCount);
    // });

    // find data
    var wherestr = {"name": "tutorial"};
    dbo.collection("site").find(wherestr).toArray(function(err, res){
        if(err) throw err;
        console.log(res);
    });


    // update data
    var updatestr = {$set:{"url":"tutorial1"}};
    dbo.collection("site").updateMany(wherestr, updatestr, function(err, res){
        if(err) throw err;
        console.log("update document successfully");
    });

    // delete document
    dbo.collection("site").deleteOne(wherestr, function(err, obj){
        if(err) throw err;
        console.log("delete document successfully");
        // console.log(obj);
    });



    db.close();
});