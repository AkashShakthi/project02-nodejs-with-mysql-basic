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

// Select all Data
/*var sql = "SELECT * FROM customer ";
con.query(sql,function(err,result, fields){
    if(err) throw err;
    console.log(result);
})*/

// Select row Data
  /*
   var sql = "SELECT * FROM customer ";
    con.query(sql,function(err,result, fields){
        if(err) throw err;
        console.log(result[0]);
    })*/


// Select row and column wise
/*
    var sql = "SELECT * FROM customer ";
    con.query(sql,function(err,result, fields){
        if(err) throw err;
        console.log(result[0].name);
    })
    */
// slelec column data
  /*  var sql = "SELECT id,name FROM customer ";
    con.query(sql,function(err,result, fields){
        if(err) throw err;
        console.log(result);
    })*/

    //fields
/*
    var sql = "SELECT id,name FROM customer ";
    con.query(sql,function(err,result, fields){
        if(err) throw err;
        console.log(fields);
    })*/


    
    //where clause
/*
    var sql = "SELECT name FROM customer WHERE id = 1";
    con.query(sql,function(err,result, fields){
        if(err) throw err;
        console.log(result);
    })*/

        //where clause ,AND
/*
        var sql = "SELECT * FROM customer WHERE name LIKE 'a%' AND id < 4";
        con.query(sql,function(err,result, fields){
            if(err) throw err;
            console.log(result);
        })*/

        // order by
       /* var sql = "SELECT * FROM customer ORDER BY name DESC";  //ASC
        con.query(sql,function(err,result, fields){
            if(err) throw err;
            console.log(result);
        })*/

        // DELETE
       /* var sql = "DELETE FROM customer Where id = 1";  
        con.query(sql,function(err,result, fields){
            if(err) throw err;
            console.log('deleted');
        })*/

      //update

       /* var sql = "UPDATE customer SET name = 'john.p' WHERE name  = 'lara'";  
        con.query(sql,function(err,result, fields){
            if(err) throw err;
            console.log(result);
        })*/

          //update
/*
         var sql = "DROP TABLE customer";  
          con.query(sql,function(err,result, fields){
              if(err) throw err;
              console.log(result);
          })*/