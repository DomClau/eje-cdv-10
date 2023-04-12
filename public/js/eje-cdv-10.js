const res = require("express/lib/response");

//alert("Hola Mundo del JavaScript");
function sumaNumeros(){
    //utilizamos let y const
    const n1=document.getElementById('n1').value;
    const n2=document.getElementById('n2').value;
    const res=document.getElementById('res');
    //proceso
    const resultado = parseInt(n1)+ parseInt(n2);
    //salida
    res.innerHTML=resultado;
}

function restaNumeros(){
    //declaraciones
    const n1=document.getElementById('n1').value;
    const n2=document.getElementById('n2').value;
    const res=document.getElementById('res');
    //proceso
    const resultado = n1 -n2;
    //salida
    res.innerHTML =resultado;
}

function divideNumeros(){
    //declaraciones
    const n1=document.getElementById('n1').value;
    const n2=document.getElementById('n2').value;
    const res=document.getElementById('res');
    //proceso
    const resultado = n1/n2;
    //salida
    res.innerHTML=resultado;
}

function multiplicaNumeros(){
    //declaraciones
    const n1=document.getElementById('n1').value;
    const n2=document.getElementById('n2').value;
    const res=document.getElementById('res');
    //proceso
    const resultado = n1*n2;
    //salida
    res.innerHTML=resultado;
}