const mysql = require('mysql');

// Create a db Connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodeDB"

})

//Connect to mysql
con.connect(function(err){
    if(err)throw err;
    console.log('Connected to the Database!');

});
    //create DB
   /* con.query("CREATE DATABASE nodeDB", function(err,result){
        if(err) throw err;
        console.log("Databse Cereated!")
    });*/


    //create table 
    /*var sql = "CREATE TABLE customer (id INT AUTO_INCREMENT PRIMARY KEY , name VARCHAR(255), email VARCHAR(255) )";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table has been created..");
    })*/

    //Alter table
   /* var sql = "ALTER TABLE customer ADD COLUMN age VARCHAR(3)";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log("Ouer table has been alterd..");
    });*/

    //insert into
     /*var sql = "INSERT INTO customer (name, email, age) VALUES ('Akash', 'a@a.com', 23)";
   con.query(sql, function(err,result){
        if(err) throw err;
        console.log("Data insert into table..");
    });*/
/*
    var sql = "INSERT INTO customer (name, email, age) VALUES ?";
    var values = [
        ['tim', 'tim@tim.com', '15'],
        ['boss', 'b@b.com', '24'],
        ['lara', 'lara@lara.com', '30'],
    ]
   con.query(sql,[values], function(err,result){
        if(err) throw err;
        console.log("Recods insert into table.." + result.affectedRows);
    }); 

    */




