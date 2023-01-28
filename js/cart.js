let cart = [];
const showCart = document.querySelector('.cartID');
const modalContainer = document.querySelector('#modalContainer');
const modalButton = document.querySelector('#modalButton');
const cartQuant = document.querySelector('#cartQuant');



const showModalCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal__header";
  modalHeader.innerHTML = `<h2 class="modal__title"> TUS DESTINOS SELECCIONADOS</h2>
  <h2 class="modal__button" id="modalButton"><i class="bi bi-x-lg"></i></h2>`;
  modalContainer.append(modalHeader);

  modalHeader.addEventListener("click", ()=> {
    modalContainer.style.display = "none";
  })

  cart.forEach((travel) => {
    let cartContent = document.createElement("div")
    cartContent.className = "modal__cont";
    cartContent.innerHTML =
    `
      <div class="modal__cont--img">
        <img src="${travel.img}" alt="" class="modal__cont--img--img img__cart">
      </div>
      <div class="modal__cont--travel">
        <p class="modal__cont--travel--name">Destino: ${travel.name}</p>
        <p class="modal__cont--travel">Precio $${travel.price}</p>
        <p class="modal__cont--travel">Boletos: ${travel.quan}</p>
      </div>
    `
  modalContainer.append(cartContent);

  let deleteTravel = document.createElement("button");
  deleteTravel.innerHTML = `<i class="bi bi-x-lg"></i>`
  deleteTravel.className = "modal__cont--deleteTravel";
  cartContent.append(deleteTravel);
  deleteTravel.addEventListener('click', deleteTravelSelect)
  });


  const modalTotal = cart.reduce((acc, item) => acc + item.price * item.quan, 0);


  const totalPriceBuy = document.createElement("div")
  totalPriceBuy.className = "total__container";
  totalPriceBuy.innerHTML = `Total a pagar $${modalTotal}`;
  modalContainer.append(totalPriceBuy);
};

showCart.addEventListener('click', showModalCart);

const deleteTravelSelect = () =>{
  const travelId = cart.find((travel) => travel.id)

  cart = cart.filter((cartId)=>{
    return cartId != travelId;
  });
  cartNum();
  showModalCart();
};

const cartNum = () => {
  cartQuant.style.display = "block";
  cartQuant.innerText = cart.length;
}