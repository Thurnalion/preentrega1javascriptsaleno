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

let final = parseFloat(document.getElementById("resultado").value )|| 0;
let efeencaja = parseFloat(document.getElementById("efectivo").value )|| 0;


if(final === efeencaja){
    let cuenta = final - efeencaja;
   document.querySelector('#texto1').innerHTML = `Falta ${cuenta} El cierre de caja fue exitoso`;

}else if(final < efeencaja){
    let resta = efeencaja - final;
    document.querySelector('#texto1').innerHTML = `Sobra ${resta}`;

}else(final > efeencaja);{
    let resta2 =  final - efeencaja;
    document.querySelector('#texto1').innerHTML =`Falta ${resta2}`;

    }
}
//En esta funcion no encuentro el error, las cuentas me las hace bien pero no puedo lograr que el
//texto en html de las priemras 2 opciones aparezca.
// La verdad me gustaría saber que es lo que falla porque hace dias que no doy con una solucion

