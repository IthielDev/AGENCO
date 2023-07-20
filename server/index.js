const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "CanahuI2@",
    database: "agenco"
});


app.post("/odc", (req,res)=>{
    const origen = req.body.origen;
    const fechadecompra = req.body.fechadecompra;
    const costoporlibra = req.body.costoporlibra;
    const libraspromedio = req.body.libraspromedio;

    db.query('INSERT INTO OrdenDeCompra (origen,fechadecompra,costoporlibra,libraspromedio) VALUES(?,?,?,?)',[origen,fechadecompra,costoporlibra,libraspromedio],
    (err,result)=>{
        if(err){
            console.log(err);
    }else{
        res.send("Registro exitoso");
    }}
    );

});

app.listen(3001,()=>{
    console.log("Funciona en el puerto 3001")
})