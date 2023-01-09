// const name = prompt("ingrese su nombre");
// alert ( name + ", " + "elije la opción de viaje que prefiere (1, 2, 3 o 4), luego ingrese 0");
// let choseOptions = parseInt(prompt("1) Viaje a Mendoza $1000  2) Viaje a Cordoba $1500  3) Viaje a Tucuman $2000  4) Viaje a Misiones $4000"));
// let options;
// let total = 0;

// while (choseOptions != 0) {
//   switch (choseOptions) {
//     case 1:
//       options = parseInt(prompt("Viaje a Mendoza, indique cantidad de boletos"))
//         total += tickets(options, 1000)
//       break;

//       case 2:
//         options = parseInt(prompt("Viaje a Cordoba, indique cantidad de boletos"))
//           total += tickets(options, 1500)
//       break;

//       case 3:
//         options = parseInt(prompt("Viaje a Tucuman, indique cantidad de boletos"))
//           total += tickets(options, 2000)
//       break;

//       case 4:
//         options = parseInt(prompt("Viaje a Misiones, indique cantidad de boletos"))
//           total += tickets(options, 4000)
//       break;

//       default:
//         alert("no ha seleccionado ningun viaje")
//       break
//   }
//   let choseOptions = parseInt(prompt("1) Viaje a Mendoza $1000  2) Viaje a Cordoba $1500  3) Viaje a Tucuman $2000  4) Viaje a Misiones $4000"));
// }

// alert("el total a pagar por los boletos es: " + total)

// const tickets = (cantidad, precio) => {
//   return cant * precio
// }

// choseOptions();

const name = prompt("Bienvenid@!! ingrese su nombre");
// let choseOption = parseInt(prompt("1) Viaje a Mendoza $1000  2) Viaje a Cordoba $1500  3) Viaje a Tucuman $2000  4) Viaje a Misiones $4000"));
let option;
let total;

function choseOption (){

showOptions = parseInt(prompt("1) Viaje a Mendoza $1000  2) Viaje a Cordoba $1500  3) Viaje a Tucuman $2000  4) Viaje a Misiones $4000"));

  while (showOptions != 0) {
    switch (showOptions) {
      case 1:
        option = parseInt(prompt("Genial! elegiste VIAJE A MENDOZA, ahora indique cuantos boletos va a querer comprar"))
        total += manyOfTickets(option, 1000)
        break;
        case 2:
          option = parseInt(prompt("Genail!! elegiste VIAJE A CORDOBA, ahora indique cuantos boletos va a querer comprar"))
          total += manyOfTickets(option, 1500)
        break;
        case 3:
          option = parseInt(prompt("Genail! elegiste VIAJE A TUCUMAN, ahora indique cuantos boletos va a querer comprar"))
          total += manyOfTickets(option, 2000)
        break;
        case 4:
          option = parseInt(prompt("Genail!! elegiste VIAJE A MISIONES, ahora indique cuantos boletos va a querer comprar"))
          total += manyOfTickets(option, 4000)
        break;

        default:
          alert("NO has seleccionado ninguna opción, seleccione una")
          break;
    }
  }
}

const manyOfTickets = (cantidad, precio) => {
  return cantidad * precio
}
alert("Elija su destino, luego indique la cantidad de boletos que quiere comprar y para finalizar esa operacion y tener reservado sus boletos aprete 0")
choseOption();
console.log("finalizo la compra")