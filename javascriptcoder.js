function calculo(){
    
    let valorcaja = parseFloat(document.getElementById("caja").value)|| 0;
    let tf = parseFloat(document.getElementById("z").value )|| 0;
    let personal = parseFloat(document.getElementById("empleados1").value )|| 0;
    let egre = parseFloat(document.getElementById("egresos1").value )|| 0;
    let cl = parseFloat(document.getElementById("cierrelote").value )|| 0;

    document.getElementById("resultado").value = valorcaja + tf - 
    personal - egre - cl;
    
}



function calculo2(){

let efeencaja = parseFloat(document.getElementById("efectivo").value )|| 0;
let final = parseFloat(document.getElementById("resultado").value )|| 0;


if(final === efeencaja){
    alert("El cierre de caja fue exitoso");

}else if(final < efeencaja){
    let resta = final - efeencaja;
    let resta1 = resta * -1;
    alert("sobran " + resta1)

}else(final > efeencaja);{
    let resta2 = efeencaja - final;
    let restaFinal = resta2 * -1;
    alert("Faltan " + restaFinal);

}

}

function inicio(){

    let user, pass

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contrseña").value;

    if(user == "nico" && pass == "1010"){
    window.location = "presentismo.html";
    } else{
    alert("Datos incorrectos.");
    }
}


document.querySelector("#burritos").innerHTML = "1600"



/* Esto funciona pero no esta daptado 

let empleados = prompt("Cantidad de empleados");
let empleadosTotales = [];

for (i = 0; i < empleados; i ++){
    empleadosTotales[i] = [prompt("Nombre " + (i+1)),0];
}

const asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p"  presencia == "p"){
        empleadosTotales[p][1]++;
    }
}

for (i = 0; i < 5; i++){
    for (empleados in empleadosTotales){
    asistencia (empleadosTotales[empleados][0],empleados);
    }
}

for (empleados in empleadosTotales){
    let respuesta = `${empleadosTotales[empleados][0]}:
    Asistencias: ${empleadosTotales[empleados][1]}
    Ausencias: ${5 - parseInt(empleadosTotales[empleados][1])}`;

    if (5 - empleadosTotales[empleados][1] > 4){
    respuesta+= "Muchas inasistencias, pierde bono";
    }
        else{
            respuesta+= "Pocas ausencias, tiene bono"
        }
    document.write(respuesta)
}

*/

