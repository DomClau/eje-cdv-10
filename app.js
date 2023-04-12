//Declaraciones para crear el servidor
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Configuraciones de las rutas del servidor
//para que busque el index.html
app.use(express.static('public'));

app.get("*", (req,res)=>{
    res.sendFile(__dirname+"/public/404.html");
})

//Proceso
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: ", port);
})