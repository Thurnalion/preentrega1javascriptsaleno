function calculo1(){
    
    let valorcaja = parseFloat(document.getElementById("caja").value)|| 0;
    let valorz = parseFloat(document.getElementById("z").value )|| 0;
}


/*
let efectivo = 10

let valordeZ = prompt("Ingresar valor de Z");
let cierreDeLote = prompt("Ingresar cierre de lote");
let egresos = prompt("Ingresar los egresos diarios");
let personal = prompt("Valor total de personal");

function resta(valordeZ, cierreDeLote, egresos, personal){
return valordeZ - cierreDeLote - egresos - personal;
}

const cierreDeCaja = resta(valordeZ, cierreDeLote, egresos, personal);
*/


if(cierreDeCaja === efectivo){
    alert("El cierre de caja fue exitoso");

}else if(cierreDeCaja < efectivo){
    let resta = cierreDeCaja - efectivo;
    let resta1 = resta * -1;
    alert("sobran " + resta1)

}else(cierreDeCaja > efectivo);{
    let resta2 = efectivo - cierreDeCaja;
    let restaFinal = resta2 * -1;
    alert("Faltan " + restaFinal);

}



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



