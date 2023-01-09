let option;
let election;
let total = 0;
let allOptions = "";
let exit = false;

function choseOption (){

showOptions = parseInt(prompt("1) Viaje a Mendoza $1000  2) Viaje a Cordoba $1500  3) Viaje a Tucuman $2000  4) Viaje a Misiones $4000"));

  switch (showOptions) {
    case 1:
      option = Number(prompt("Genial! elegiste VIAJE A MENDOZA, ahora indique cuantos boletos va a querer comprar"))
      total += manyOfTickets(option, 1000)
      break;
      case 2:
        option = Number(prompt("Genail!! elegiste VIAJE A CORDOBA, ahora indique cuantos boletos va a querer comprar"))
        total += manyOfTickets(option, 1500)
      break;
      case 3:
        option = Number(prompt("Genail! elegiste VIAJE A TUCUMAN, ahora indique cuantos boletos va a querer comprar"))
        total += manyOfTickets(option, 2000)
      break;
      case 4:
        option = Number(prompt("Genail!! elegiste VIAJE A MISIONES, ahora indique cuantos boletos va a querer comprar"))
        total += manyOfTickets(option, 4000)
      break;

      default:
        alert("NO has seleccionado ninguna opción, seleccione una (del 1 al 4)")
        break;
  }
}

const manyOfTickets = (cantidad, precio) => {
  return cantidad * precio
}

function carMarket () {
election = prompt("Has seleccionado "+option+"por un total de "+total+"¿quieres abonar?"+" "+"escriba si o no")

  if(election === "si") {
    alert("BUENISIMO, ya estas a unos pasos de optener tus boletos");
    allOptions = "";
    total = 0;
    
  }else if(election === "no"){
    alert("Elegiste no, por qué? esperamos que pronto podamos viajar juntos");
    allOptions = "";
    total = 0;
  }else{
    ("ingresa si o no");
  }
}

// 1st step
const name = prompt("Bienvenid@!! ingrese su nombre");
// 2nd step
alert(name+", "+"Elija su destino, luego indique la cantidad de boletos que quiere comprar y para finalizar esa operacion y tener reservado sus boletos aprete 0");
// 3rd step
do{
  let menu = parseInt(prompt(name+" ¿Qué quiere ver?"+" "+`
  1)Viajes disponibles
  2)Compras ingresadas
  0)Salir del menú`));

  switch(menu){
    case 1:
      choseOption();
      break;
      case 2:
        if (allOptions = ""){
          alert("No has seleccionado ningun viaje");
        }else{
          alert("Agregaste: "+allOptions+" por un total de: "+total);
          carMarket();
        }
      break;
      case 0:
        alert("Gracias por visitarnos, esperamos pronto poder viajar juntos");
        exit = true;
      break;
  }
}while(!exit)