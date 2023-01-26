let user = document.getElementById("usuario").value;
let pass = document.getElementById("contrseña");
let boton2 = document.getElementById("boton2").value;

boton2.addEventListener("click",inicio);

function inicio(){

    if(user == "nico" && pass == "nicolas"){
    window.location = "presentismo.html";
    } else{
    alert("Datos incorrectos.");
    }
    
}
