let menu = [
    { 
        nombre: "Ramen", 
        precio: 30000, 
        categoria: "Plato fuerte", 
        disponible: true 
    },
    { 
        nombre: "Sushi", 
        precio: 25000, 
        categoria: "Plato fuerte", 
        disponible: true 
    },
    { 
        nombre: "Onigiris", 
        precio: 30000, 
        categoria: "Entrada", 
        disponible: false 
    },
    { 
        nombre: "Ceviche de atún", 
        precio: 40000, 
        categoria: "Entrada", 
        disponible: true 
    },
    { 
        nombre: "Spicy camarones", 
        precio: 60000, 
        categoria: "Entrada", 
        disponible: true 
    }
];

function mostrarMenu  ( listaPlatos) {
    console.log ("Menú Onigiri restaurante") 
   
    for (let i = 0; i < listaPlatos.length; i++) {
        let plato = listaPlatos[i];
    console.log("- " + plato.nombre + ": " + plato.precio + ":" + plato.categoria)
    }
}
mostrarMenu(menu);



function soloDisponibles(listaPlatos) {
    
    let platosDisponibles = []

    for (let i = 0; i < listaPlatos.length; i++) {
        let plato = listaPlatos[i];

    
        if (plato.disponible === true) {
            platosDisponibles.push(plato);
        }
    }

    
    return platosDisponibles;
}


let disponibles = soloDisponibles(menu);


console.log("  PLATOS DISPONIBLES ");
mostrarMenu(disponibles);


let pedido = [];


pedido.push(menu[0]);
pedido.push(menu[1]);
pedido.push(menu[3]); 

console.log(" Pedido #1 -");
mostrarMenu(pedido);


let platoCancelado = pedido.pop();

console.log(" El ultimo plato ha sido cancelado : " + platoCancelado.nombre);

console.log("- El pedido ha sido actualizado ");
mostrarMenu(pedido);

function calcularCuenta(listaPedido) {
    let subtotal = 0;
 for (let i = 0; i < listaPedido.length; i++) {
        subtotal = subtotal + listaPedido[i].precio;
    }

    let iva = subtotal * 0.19;

    return subtotal + iva;
}
let totalAPagar = calcularCuenta(pedido);
console.log(" Total de la cuenta  " +  "iva 19%   totalAPagar:  " + totalAPagar)


const prompt = require('prompt-sync')();



console.log("0 = Ramen");
console.log("1 = Sushi");
console.log("2 = Onigiris");
console.log("3 = Ceviche de atún");
console.log("4 = Spicy camarones");

pedido = []

let numeroElegido = prompt(" -Elija un plato : ");


let platoSeleccionado = menu[numeroElegido];


pedido.push(platoSeleccionado);
console.log(" Agregado: " + platoSeleccionado.nombre);

let cuentaTotal = calcularCuenta(pedido);
console.log("Total a pagar con IVA: $" + cuentaTotal);
