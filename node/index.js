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

connection.query(`CREATE TABLE IF NOT exists people(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)`);

app.get("/", (req, res) => {

    connection.query('SELECT * FROM nodedb.people', (err, result) => {

        if (err) {
            res.send(err)
        }
        res.send(result)

        console.log("mostrando os resultados", result)
    })
})


app.listen(port, () => {
    console.log('running in the door ' + port)
});