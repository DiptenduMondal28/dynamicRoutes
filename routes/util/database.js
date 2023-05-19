const mysql=require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'diptendu28'
});

module.exports=pool.promise();