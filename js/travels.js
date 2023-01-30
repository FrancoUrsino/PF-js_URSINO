const travels = [
  {id: 1, name: "Buenos Aires", price: 1500, img: "img/BA.jpg", stars: "3", quan: 1, desc: "hola a todos",},
  {id: 2, name: "Usuahia", price: 6000, img: "img/Faro-del-Fin-del-Mundo.jpg", stars: "5", quan: 1, desc: "hola a todos",},
  {id: 3, name: "Salta", price: 2500, img: "img/Salta.jpg", stars: "5", quan: 1, desc: "hola a todos",},
  {id: 4, name: "Santa Cruz", price: 4500, img: "img/Monte-Fitz-Roy.jpg", stars: "4", quan: 1, desc: "hola a todos",},
  {id: 5, name: "Tucuman", price: 5000, img: "img/Tucuman.jpg", stars: "2", quan: 1, desc: "hola a todos",},
  {id: 6, name: "San Juan", price: 4500, img: "img/Valle-de-la-Luna.jpg", stars: "4", quan: 1, desc: "hola a todos",},
  {id: 7, name: "Mendoza", price: 2000, img: "img/Mendoza.jpg", stars: "3", quan: 1, desc: "hola a todos",},
]

const travelsContainer = document.querySelector('#travelsContainer');
const saveLocal = () =>{
  localStorage.setItem("cart", JSON.stringify(cart));
};
function takeTravels (choseTravels){

  travelsContainer.innerHTML = "";

  choseTravels.forEach((travel) => {
    let content = document.createElement("div");
    content.innerHTML =
    `
    <div class="travels__container--container">
      <img src="${travel.img}" class="travels__card--img">
      <div class="travels__card--container">
        <h3 class="travels__card--container--title">${travel.name}</h3>
        <p class="travels__card--container--description">${travel.desc}</p>
        <p class="travels__card--container--price">$${travel.price}</p>

      </div>
    </div>
    `;
    travelsContainer.append(content);

    let buyOption = document.createElement('button');
    buyOption.innerHTML =`Agregar Destino`
    content.append(buyOption)

    buyOption.addEventListener('click', ()=>{

    
    const repeatTravel = cart.some((repeatOption)=> repeatOption.id === travel.id);
    if(repeatTravel === true){
      cart.map((option)=>{
        if(option.id === travel.id){
          option.quan++;
        }
      });
    }else{
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
      // showModalCart();
    });
  });
}

takeTravels(travels);

