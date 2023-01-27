// let totalPrice = 0;
// let exit = false;
// let cart = [];
// let ticketsTotal = 0;
// let option = 0;


// class travels {
//   constructor(travelNum, travelName, travelPrice, travelStars) {
//     this.travelNum = travelNum;
//     this.travelName = travelName;
//     this.travelPrice = travelPrice;
//     this.travelStars = travelStars;
//   }
// }

// const travel1 = new travels(1, "Buenos Aires", 1500, 2)
// const travel2 = new travels(2, "Salta", 2000, 3)
// const travel3 = new travels(3, "Mendoza", 3000, 4)
// const travel4 = new travels(4, "Santa Cruz", 3500, 5)
// const travel5 = new travels(5, "San Juan", 3500, 5)
// const travel6 = new travels(6, "Cordoba", 1000, 3)
// const travel7 = new travels(7, "Usuahia", 6000, 5)

// const travelOptions = [travel1, travel2, travel3, travel4, travel5, travel6, travel7];

// // Opción 1
// function choseTravel(){
//   let choseOption = parseInt(prompt(`Elija la provincia a la cual desee viajar:
//   1) Buenos Aires     4) Cordoba    7) San Juan
//   2) Salta                5) Tucuman    8) Santa Cruz
//   3) Usuahia            6) Mendoza    9) Santa Fe`));

//   switch(choseOption){
//     case 1:
//       alertChoseTravel(travel1);
//       break;
//     case 2:
//       alertChoseTravel(travel2);
//       break;
//     case 3:
//       alertChoseTravel(travel7);
//       break;
//     case 4:
//       alertChoseTravel(travel6);
//       break;
//     case 5:
//       alert("OH! Ya no tenemos vuelos para este destino");
//       break;
//     case 6:
//       alertChoseTravel(travel3);
//       break;
//     case 7:
//       alertChoseTravel(travel5);
//       break;
//     case 8:
//       alertChoseTravel(travel4);
//       break;
//     case 9:
//       alert("OH! Ya no tenemos vuelos para este destino");
//       break;

//     default: alert("No has elegido ninguna opcion (elige del 1 al 9).");
//     break;
//   }
// }

// function alertChoseTravel(travelNumber) {
//   let thisOption = parseInt(prompt(`Que Bien!! elegiste ${travelNumber.travelName} con un costo de $${travelNumber.travelPrice} por boleto, ¿Cuántos boletos desea?`));
//   option += thisOption;
//   let thisTicket = thisOption * travelNumber.travelPrice
//   ticketsTotal += thisTicket;

//   let answer = prompt(`El precio de ${thisOption} boletos es ${thisTicket} ¿Desea Añadirlos al carrito? (elija si o no)`).toLowerCase();
//   if (answer == "no"){
//     alert("No hay problema, elija otra provincia que le guste aun más");
//   }else if(answer == "si"){
//     addToCart(travelNumber.travelName, thisOption);
//   }else{
//     alert("escriba si o no para continuar");
//   }
// }

// function addToCart(lugar, thisOption) {
//   if(cart.includes(lugar)){
//     alert("Ya añadiste este destino!")
//   }else{
//     cart.push(lugar);
//     alert(`Agregaste ${thisOption} boletos para ${lugar} al carro.`);
//   }
// }




// // Opción 2
// function travelsArrayCheck(){
//   travelOptions.forEach((travel) => {
//       alert(`El viaje a ${travel.travelName} tiene un precio de $${travel.travelPrice}.`);
//   });
// }




// // Opción 3
// function travelSearch() {
//   let searchTravel = prompt("¿A qué provincia vamos?");
//   let findTravel = travelOptions.find((travel) => travel.travelName.toLowerCase() == searchTravel.toLowerCase());

//   if (findTravel == undefined){
//     alert(`Todavía no tenemos vuelos hasta ${searchTravel}.`);
//   } else {
//     alert(`Genial!! ${findTravel.travelName} es un excelente lugar para crear recuerdos. Éste tiene un precio por persona de $${findTravel.travelPrice}.`)
//   }
// }




// // Opción 4
// function sortTravel(){
//   let order = parseInt(prompt(`¿De qué manera le gustaría ordenar los viajes? \n 1) Orden desde menor a mayor precio. \n 2) Orden desde mayor a menor precio.`));
//   switch(order){
//     case 1:
//       travelOptions.sort((a, b) => a.travelPrice - b.travelPrice)
//       travelsArrayCheck();
//       break;
//     case 2:
//         travelOptions.sort((a, b) => b.travelPrice - a.travelPrice);
//         travelsArrayCheck();
//         break;

//     default:
//       alert("Todavía no tenemos esa opcion (escriba 1 o 2)");
//       break;
//   }
// }




// // Opción 5 (buy travel tickets)
// function buyTravels(cart) {
//   agree = prompt(`¡¡FELICITACIONES!! Estar por adquirir ${option} boletos para viajar y explorar ${cart}
//   ¿Desea realizar la compra? (elegir si o no)`).toLowerCase();

//   if (agree == "si") {
//     alert("COMPRA REALIZADA");
//     cart = [];
//     cartArray = "";
//     totalPrice = 0;
//   } else if(agree == "no") {
//     alert("OH.. Bueno, espeamos viajar juntos pronto");
//     cart.length = 0;
//     cartArray = "";
//   } else{
//     alert("ingrese 'si' o 'no'");
//   }
// }

// // 1st step //
// const name = prompt("Bienvenid@!! ingrese su nombre");
// // 2nd step //
// alert(name+", "+"Elija su destino, luego indique la cantidad de boletos que quiere comprar y para finalizar esa operacion y tener reservado sus boletos aprete 0");
// // 3rd step //
// do{
//   let election = parseInt(prompt(`¿Qué quiere hacer? (elija una opción de 1 al 6 o 0 si desea salir del menu).
//   1) Destinos disponibles
//   2) Información de los destinos
//   3) Buscar un destino en particular
//   4) Ordenar viajes
//   5) Ver carrito
//   0) Salir del menu`));

//   switch (election){
//     case 0:
//       alert("Gracias por visitarnos");
//       exit = true; 
//     break;
//     case 1: 
//       choseTravel();
//     break;
//     case 2:
//       travelsArrayCheck();
//       break;
//     case 3:
//       travelSearch();
//       break;
//     case 4:
//       sortTravel(); 
//       break;
//     case 5:
//         if (cart == ""){
//           alert("Todavía no has seleccionado ningun destino");
//         }else{
//           totalPrice = ticketsTotal;
//           let cartArray = cart.join(', ');
//           alert(`Agregaste ${option} boletos para ${cartArray} con un total de $${totalPrice}.`);
//           buyTravels(cart);
//         }; break;

//     default:
//       alert("Ingrese una opcion valida (del 1 a 6 o' 0 para salir del menu).");
//       break;
//   }
// } while (!exit);
