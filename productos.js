document.querySelector("#burritos").innerHTML = "1600"

const recetas = `
[
    {   
        "plato" : "tacos",
        "cocción": "horno",
        "duración": 20,
        "ingredientes": ["tortilla de maiz","carne","mozarella","lechuga","crema acida"],
        "valor": 1200
    },

    {
        "plato" : "quesadillas",
        "cocción": "plancha",
        "duración": 10,
        "ingredientes": ["tortilla de trigo","pollo","mozarella","guacamole","crema acida"],
        "valor": 1300
    }, 

    {   
        "plato" : "burritos",
        "cocción": "horno",
        "duración": 15,
        "ingredientes": ["tortilla de trigo","carne","mozarella","porotos","crema acida"],
        "valor": 1500
    }

]`;


console.log(typeof recetas);

const JsonData = JSON.parse(recetas);
console.log(typeof JsonData);

const recetaLarga = JsonData.filter(
    (recetas) => recetas.duración > 15);

console.log(recetaLarga);



/*
function ajax(){
    const http = new XMLHttpRequest();
    const url = "datos2.json";

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            console.log("Recibido el fichero");
            let datos = JSON.parse(this.responseText);
            console.log(datos);
        }

    }

    console.log("Se envia la peticion");

    http.open("GET", url, true);
    http.send();
  
}

window.onload = ajax;

*/



function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "datos2.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.receta}</td>
                </tr>
                `
            }
        }
    }
}
document.querySelector("#boton3").addEventListener("click", traerDatos);





/*
var receta = document.getElementById("boton3");

function cargarajax() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET","datos2.json", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log("se cargo");
        }
    }

    xhr.send(); 
}

receta.addEventListener("click", cargarajax);

*/