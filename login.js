function inicio(){

let user = document.getElementById("usuario").value;
let pass = document.getElementById("contraseña").value;

    if(user == "nico" && pass == "nicolas"){
    window.location = "presentismo.html";
    } else{
        innerHtml +=
    alert("Datos incorrectos.");
    }
    
}
boton2.addEventListener("click",inicio);


