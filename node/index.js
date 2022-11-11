const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: '123456789',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query('SELECT * FROM nodedb.people', function (error, results, fields) {

    console.log(results)

});

connection.end();


app.get('/', (req, res) => {

    res.send('<h1> TRABALHO COM DOCKER </h1>')
});

app.listen(port, () => {
    console.log('running in the door ' + port)
});