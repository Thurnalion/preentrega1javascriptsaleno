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