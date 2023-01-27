const travels = [
  {id: 1, name: "Buenos Aires", price: 1500, img: "img/BA.jpg", stars: 3, quan: 1, desc: "hola a todos",},
  {id: 2, name: "Usuahia", price: 6000, img: "img/Faro-del-Fin-del-Mundo.jpg", stars: 5, quan: 1, desc: "hola a todos",},
  {id: 3, name: "Salta", price: 2500, img: "img/Salta.jpg", stars: 4, quan: 1, desc: "hola a todos",},
  {id: 4, name: "Santa Cruz", price: 4500, img: "img/Monte-Fitz-Roy.jpg", stars: 5, quan: 1, desc: "hola a todos",},
  {id: 5, name: "Tucuman", price: 5000, img: "img/Tucuman.jpg", stars: 2, quan: 1, desc: "hola a todos",},
  {id: 6, name: "San Juan", price: 4500, img: "img/Valle-de-la-Luna.jpg", stars: 5, quan: 1, desc: "hola a todos",},
  {id: 7, name: "Mendoza", price: 2000, img: "img/Mendoza.jpg", stars: 3, quan: 1, desc: "hola a todos",},
]

const travelsContainer = document.getElementById('#travelsContainer');


// opcion 1

// travels.forEach((travel) => {
//   const{id, name, price, img, stars, quan, desc} = travel
//   container.innerHTML += 
//   `
//   <div class="travels__container--container">
//     <div class="popular__card">
//       <img src="${img}" alt="" class="popular__card--img">
//       <div class="popular__card--container">
//         <div class="popular__card--container--stars">
//           <i class="bi bi-star-fill"></i>
//           <i class="bi bi-star-fill"></i>
//           <i class="bi bi-star-fill"></i>
//           <i class="bi bi-star-fill"></i>
//           <i class="bi bi-star-fill"></i>
//         </div>
//         <h3 class="popular__card--container--title">${name}</h3>
//         <p class="popular__card--container--text">${desc}</p>
//         <h4 class="popular__card--container--site">$${price}</h4>
//       </div>
//     </div>
//     <div class="popular__card--btn">
//     <button onclick="addTravel(${id})" class="popular__card--btn--btn" id="buyButton">Agregar Viaje</button>
//     </div>
//   </div>
//   `
// });


// opcion 2
travels.forEach((travel) => {
  let content = document.createElement("div");
  content.innerHTML =
  `
    <img src="${img}" class="travels__card--img">
    <div class="travels__card--container">
      <h3 class="travels__card--container--title">${name}</h3>
      <p class="travels__card--container--description">${desc}</p>
      <p class="travels__card--container--price">${price}</p>
    </div>
  `;
  travelsContainer.append(content)
});

function addTravel(id){
  const travelOption = travels.find((travel)=> travel.id == id)

  const repeatTravel = cart.some((repeat) => repeat.id === travels.id);
  if (repeatTravel === true){
    cart.map((travel)=> {
      if(travel.id === travels.id){
        travel.quan++;
      }
    })
  }else{
    cart.push({
      id: travelOption.id,
      img: travelOption.img,
      name: travelOption.name,
      price: travelOption.price,
      quan: travelOption.quan,
    });
  }
};