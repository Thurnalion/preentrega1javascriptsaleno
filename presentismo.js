function presentismo(){
    let ausentesEmpleados = parseFloat(document.getElementById("ausente").value )|| 0;
    
    if(ausentesEmpleados >= 5){
        document.getElementById('resultado1').innerHTML = 'Muchas inasistencias, pierde presentismo';   
    }else{
        document.getElementById('resultado1').innerHTML = 'Pocas inasistencias, mantiene presentismo';   

    }
}
boton4.addEventListener("click",presentismo);



/*
let empleados = prompt("Cantidad de empleados");
let empleadosTotales = [];

for (i = 0; i < empleados; i ++){
    empleadosTotales[i] = [prompt("Nombre " + (i+1)),0];
}

const asistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p"  || presencia == "p"){
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
