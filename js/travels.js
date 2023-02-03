const travels = [
  { id: 1, name: "Buenos Aires", price: 1500, img: "img/BA.jpg", stars: "3", quan: 1, desc: "hola a todos", },
  { id: 2, name: "Usuahia", price: 7000, img: "img/Faro-del-Fin-del-Mundo.jpg", stars: "5", quan: 1, desc: "hola a todos", },
  { id: 3, name: "Salta", price: 2500, img: "img/Salta.jpg", stars: "5", quan: 1, desc: "hola a todos", },
  { id: 4, name: "Santa Cruz", price: 4500, img: "img/Monte-Fitz-Roy.jpg", stars: "5", quan: 1, desc: "hola a todos", },
  { id: 5, name: "Tucuman", price: 3000, img: "img/Tucuman.jpg", stars: "2", quan: 1, desc: "hola a todos", },
  { id: 6, name: "San Juan", price: 4500, img: "img/Valle-de-la-Luna.jpg", stars: "4", quan: 1, desc: "hola a todos", },
  { id: 7, name: "Mendoza", price: 2000, img: "img/Mendoza.jpg", stars: "3", quan: 1, desc: "hola a todos", },
  { id: 8, name: "Chaco", price: 3000, img: "img/chaco.jpg", stars: "1", quan: 1, desc: "hola a todos", },
  { id: 9, name: "Corrientes", price: 5000, img: "img/corrientes.jpg", stars: "4", quan: 1, desc: "hola a todos", },
  { id: 10, name: "Entre Rios", price: 2500, img: "img/entreRios.jpg", stars: "2", quan: 1, desc: "hola a todos", },
  { id: 11, name: "Formosa", price: 3000, img: "img/formosa.jpg", stars: "3", quan: 1, desc: "hola a todos", },
  { id: 12, name: "La Rioja", price: 5500, img: "img/laRioja.jpg", stars: "5", quan: 1, desc: "hola a todos", },
  { id: 13, name: "Misiones", price: 2000, img: "img/misiones.jpg", stars: "4", quan: 1, desc: "hola a todos", },
  { id: 14, name: "Santiago del Estero", price: 3500, img: "img/SantiagodelEstero.jpg", stars: "1", quan: 1, desc: "hola a todos", },
  { id: 15, name: "La Pampa", price: 4000, img: "img/laPampa.jpg", stars: "2", quan: 1, desc: "hola a todos", },
  { id: 16, name: "Jujuy", price: 4000, img: "img/jujuy..jpg", stars: "5", quan: 1, desc: "hola a todos", },
  { id: 17, name: "Rio Negro", price: 6000, img: "img/rioNegro.jpg", stars: "5", quan: 1, desc: "hola a todos", },
]

const travelsContainer = document.querySelector('#travelsContainer');
const saveLocal = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
function takeTravels(choseTravels) {

  travelsContainer.innerHTML = ""

  choseTravels.forEach((travel) => {
    let content = document.createElement("div");
    content.innerHTML =
      `
    <div class="travels__container--container" id="travelCard">
      <img src="${travel.img}" class="travels__card--img">
      <div class="travels__card--container">
        <h3 class="travels__card--container--title">${travel.name}</h3>
        <p class="travels__card--container--price">$${travel.price}</p>
      </div>
    </div>
    `;

    const mergeAll = searchTravelButton.addEventListener('click', function searchTravel() { travelsOut.style.display = "none"; });
    travelsContainer.append(content);

    let buyOption = document.createElement('button');
    buyOption.className = "travels__buyTravel"
    buyOption.innerHTML = `Agregar Destino`
    content.append(buyOption)

    buyOption.addEventListener('click', () => {


      const repeatTravel = cart.some((repeatOption) => repeatOption.id === travel.id);
      if (repeatTravel === true) {
        cart.map((option) => {
          if (option.id === travel.id) {
            option.quan++;
          }
        });
      } else {
        cart.push({
          id: travel.id,
          img: travel.img,
          name: travel.name,
          price: travel.price,
          quan: travel.quan,
          stars: travel.stars,
        });
      }
      console.log(cart);
      cartNum();
      saveLocal();
      alert(`Añadiste el destino ${travel.name} al carrito, desde ahí vas a poder elegir la cantidad de boletos o eliminarlo`);
    });
  });
}

takeTravels(travels);

