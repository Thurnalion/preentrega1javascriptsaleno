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