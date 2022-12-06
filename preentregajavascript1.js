let efectivo = 10

let valordeZ = prompt("Ingresar valor de Z");
let cierreDeLote = prompt("Ingresar cierre de lote");
let resultado1 = valordeZ - cierreDeLote;

let egresos = prompt("Ingresar los egresos diarios");
let resultado2 = resultado1 - egresos;

let personal = prompt("Valor total de personal")
let cierreDeCaja = resultado2 - personal;

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








