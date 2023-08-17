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


app.post("/odc1", (req,res)=>{
    const idordendecompra = req.body.orden;
    const origen = req.body.origen;
    const fechadecompra = req.body.fechadecompra;

    db.query('INSERT INTO OrdenDeCompra (ID_OrdenDeCompra, Origen, FechaDeCompra) VALUES(?,?,?)',[idordendecompra,origen,fechadecompra],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Registro exitoso");
        }}
    );

});

app.post("/odc2", (req,res)=>{
    const origen = req.body.origen;
    const fechadecompra = req.body.fechadecompra;

    db.query('INSERT INTO OrdenDeCompra (Origen, FechaDeCompra) VALUES(?,?)',[origen,fechadecompra],
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