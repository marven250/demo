const pg = require("pg");
const postgresUrl = 'postgres://localhost/demo';
const client = new pg.Client(postgresUrl);

// connecting to the `postgres` server
client.connect().then(()=>{
    console.log("successfully connected to DB")
});

// make the client available as a Node module
module.exports = client;

