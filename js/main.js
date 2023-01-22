let election;
let totalPrice = 0;
let exit = false;
let cart = [];
let ticketsTotal = 0;
let option;
let optionChange;


// Create Travels INIT
class travels {

  constructor(travelNum, travelName, travelPrice, travelStars){
    this.travelNum = travelNum;
    this.travelName = travelName;
    this.travelPrice = travelPrice;
    this.travelStars = travelStars;
  }
}

const travel1 = new travels(1, "Buenos Aires", 1500, 2)
const travel2 = new travels(2, "Salta", 2000, 3)
const travel3 = new travels(3, "Mendoza", 3000, 4)
const travel4 = new travels(4, "Santa Cruz", 3500, 5)
const travel5 = new travels(5, "San Juan", 3500, 5)
const travel6 = new travels(6, "Cordoba", 1000, 3)
const travel7 = new travels(7, "Usuahia", 6000, 5)

const travelOptions = [travel1, travel2, travel3, travel4, travel5, travel6, travel7,];
// Create Travels FINISH


// Function to traverse array 'travelOptions'
function travelsArrayCheck(travelOptions){
  // alert("¿A dónde vas a ir para crear tus próximos recuerdos?");
  travelOptions.forEach((travel) => {
      alert(`El viaje a ${travel.travelName} tiene un precio de $${travel.travelPrice}`);
  });
}

// Function to search a travel
function travelSearch(search){
  let searchTravel = prompt("¿A qué provincia vamos?");
  let findTravel = search.find((travel)=> travel.travelName.toLowerCase() == searchTravel.toLowerCase());

  // condition
  if(findTravel === undefined){
    alert(`Todavía no tenemos vuelos hasta ${searchTravel}`);
  }else{
    alert(`Genial!! ${findTravel.travelName} es un excelente lugar para crear recuerdos.
    Éste tiene un precio por persona de $${findTravel.travelPrice}`)
  }
}

// Function of many tickets add to the travel 
const manyOfTickets = (cantidad, precio) => {
    return cantidad * precio
}

// Function of total price 
const totalPriceTravel = (ticketsTotal) => {
    return ticketsTotal 
}

// Function to add to cart
function addToCart(product){
  if(cart.includes(product.travelName)){
    alert("Ya añadiste este destino!")
  }else{
    cart.push(product.travelName);
    ticketsTotal += product.travelPrice;
    alert(`Agregaste ${option} boletos para ${product.travelName} al carro`);
  }
}



// Function to filter
// travelsFilter
// const star1 = travelOptions.filter(travel =>  travel.travelStars >= 1);
// const star2 = travelOptions.filter(travel =>  travel.travelStars >= 2);
// const star3 = travelOptions.filter(travel =>  travel.travelStars >= 3);
// const star4 = travelOptions.filter(travel =>  travel.travelStars >= 4);
// const star5 = travelOptions.filter(travel =>  travel.travelStars >= 5);
// const min0Max1000 = travelOptions.filter(travel => travel.travelPrice );
// const min1500Max4000 = travelOptions.filter(travel => travel.travelPrice );
// const min4001Max10000 = travelOptions.filter(travel => travel.travelPrice );

// Create function to ask what to filter on

// Functions to sort
function minMaxTravel(travel){
const minMax = [].concat(travel);
  minMax.sort((t1, t2) => t1.travelPrice - t2.travelPrice)
  travelsArrayCheck(minMax);
}
function maxMinTravel(travel){
const maxMin = [].concat(travel);
  maxMin.sort((t1, t2) => t2.travelPrice - t1.travelPrice)
  travelsArrayCheck(maxMin);
}

// Function to ask what to sort
function sortTravel(travel){
  let order = parseInt(prompt(`¿De qué manera le gustaría ordenar los viajes?
  1)Orden desde menor a mayor precio
  2)Ordern desde mayor a menor precio
  
  (elegir 1 o 2)`));
  switch(order){
    case 1:
      minMaxTravel(travel);
      break;
      case 2:
        maxMinTravel(travel);
        break;
      default:
        alert("Todavía no tenemos esa opcion (escriba 1 o 2)");
        break;
  }
}

// Function to show Travels options
function choseTravel(){
  let choseOption = parseInt(prompt(`Elija la provincia a la cual desee/n viajar:
  
  1) Buenos Aires    4) Cordoba      7) San Juan
  2) Salta              5) Tucuman      8) Santa Cruz
  3) Usuahia         6) Mendoza      9) Santa Fe`));


  switch(choseOption){
    case 1:
      option = parseInt(prompt(`Que Bien, elegiste Buenos Aires con un costo de $1500 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 1500)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel1);
    break;
    case 2:
      option = parseInt(prompt(`Que Bien, elegiste Salta con un costo de $2000 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 2000)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel2)
    break;
    case 3:
      option = parseInt(prompt(`Que Bien, elegiste Usuahia con un costo de $6000 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 6000)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel7)
    break;
    case 4:
      option = parseInt(prompt(`Que Bien, elegiste Cordoba con un costo de $1000 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 1000)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel6)
      break;
    case 5:
      alert("OH! Ya no tenemos vuelos para este destino")
      break;
    case 6:
      option = parseInt(prompt(`Que Bien, elegiste Mendoza con un costo de $3000 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 3000)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel3)
    break;
    case 7:
      option = parseInt(prompt(`Que Bien, elegiste San Juan con un costo de $3500 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 3000)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel5)
    break;
    case 8:
      option = parseInt(prompt(`Que Bien, elegiste Santa Cruz con un costo de $3500 por boleto,¿Cuántos boletos desea?`));
      ticketsTotal= 0;
      ticketsTotal+= manyOfTickets(option, 3000)
      alert(`El precio de ${option} boletos es ${ticketsTotal}`)
      addToCart(travel4)
    break;
    case 9:
      alert("OH! Ya no tenemos vuelos para este destino")
    break;
    default:
      alert("No has elegido ninguna opcion (elige del 1 al 9)")
    break;
  }
}

// Function to buy travel tickets
function buyTravels(){
  agree = prompt(`¡¡FELICITACIONES!! Estar por adquirir ${option} boletos para viajar y explorar ${buyTravels.travelName}
  ¿Desea realizar la compra? (elegir si o no)`).toLowerCase();

  if(agree == "si"){
    alert("COMPRA REALIZADA");
    cart = [];
    totalPrice = 0;
  }else if(agree == "no"){
    alert("OH.. Bueno, espeamos viajar juntos pronto");
    cart = [];
  }else{
    alert("ingrese 'si' o 'no'");
  }
}


// 1st step //
const name = prompt("Bienvenid@!! ingrese su nombre");
// 2nd step //
alert(name+", "+"Elija su destino, luego indique la cantidad de boletos que quiere comprar y para finalizar esa operacion y tener reservado sus boletos aprete 0");
// 3rd step //
do{
  let election = parseInt(prompt(`¿Qué quiere hacer?
  (elija una opción de 1 al 6 o 0 si desea salir del menu)
  
  1) Destinos disponibles
  2) Información de los destinos
  3) Buscar un destino en particular
  4) Ordenar cursos (por precio ascendente o desendente)
  5) filtrar por cantidad de estrellas
  6) Ver carrito
  0) Salir del menu`));

  switch (election){
    case 0:
      alert("Gracias por visitarnos");
      exit = true
      break;
      case 1:
      choseTravel();
      break;
      case 2:
        travelsArrayCheck(travelOptions);
        break;
      case 3:
        travelSearch(travelOptions);
        break;
      case 4:
        sortTravel(travelOptions);
        break;
      case 5:
        alert("todavía no se como armar el filtro");
        break;
      case 6:
        if (cart == ""){
          alert("Todavía no has seleccionado ningun destino");
        }else{
          totalPrice= totalPriceTravel(ticketsTotal)
          alert(`Agregaste ${option} boletos para el destino ${cart} con un total de $${totalPrice}`);
          buyTravels();
        }
        break;
      default:
        alert("Ingrese una opcion valida (del 1 a 6 o 0 para salir del menu)");
        break;
  }
}while (!exit);