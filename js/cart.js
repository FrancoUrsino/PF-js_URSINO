let cart = JSON.parse(localStorage.getItem("cart")) || [];
const showCart = document.querySelector('.cartID');
const modalContainer = document.querySelector('.modal__container');
const modalButton = document.querySelector('#modalButton');
const cartQuant = document.querySelector('#cartQuant');



const showModalCart = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal__header";
  modalHeader.innerHTML = `<h2 class="modal__title"> TUS DESTINOS SELECCIONADOS</h2> <h2 class="modal__button" id="modalButton"><i class="bi bi-x-lg"></i></h2>`;
  modalContainer.append(modalHeader);

  modalHeader.addEventListener("click", () => {
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
        <p class="modal__cont--travel--price">Precio $${travel.price}</p>
        <div class="modal__cont--travel--container">
          <span class="more">+</span>
          <p class="modal__cont--travel--container--quan">Boletos: ${travel.quan}</p>
          <span class="less">-</span>
        </div>
        <div class="modal__cont--travel">
        <button class="modal__cont--deleteTravel"><i class="bi bi-x-lg"></i></button>
        </div>
      </div>
      `
    modalContainer.append(cartContent);


    // add o kick travel for the cart
    let more = cartContent.querySelector(".more")
    more.addEventListener('click', () => {
      travel.quan++;
      saveLocal();
      showModalCart();
    });
    let less = cartContent.querySelector(".less");
    less.addEventListener('click', () => {
      if (travel.quan !== 1) {
        travel.quan--;
      }
      saveLocal();
      showModalCart();
    });

    let deleteTravel = cartContent.querySelector(".modal__cont--deleteTravel");
    deleteTravel.addEventListener('click', () => {
      deleteTravelSelect(travel.id);
    });
  });


  let modalTotal = cart.reduce((acc, item) => acc + item.price * item.quan, 0);


  const totalPriceBuy = document.createElement("div")
  totalPriceBuy.className = "total__container";
  totalPriceBuy.innerHTML = `<p class="total__container--total">Total a pagar $${modalTotal}</p><button class="total__container--btn" id="finishBuyButton">COMPRAR DESTINOS</button>`;
  modalContainer.append(totalPriceBuy);

  const finishBuyButton = document.querySelector('#finishBuyButton')
  finishBuyButton.addEventListener('click', () => {
    alert("FELICIDADES!!! YA COMPRASTE TUS BOLETOS")
    let cartContent = document.querySelectorAll('.modal__cont');
    cartContent.forEach((cartC) => {
      cartC.remove();
    })

    modalTotal = 0;
    totalPriceBuy.innerHTML = `<p class="total__container--total">Total a pagar $${modalTotal}</p><button class="total__container--btn" id="finishBuyButton">COMPRAR DESTINOS</button>`;

  });
};

showCart.addEventListener('click', showModalCart);

const deleteTravelSelect = (id) => {
  const travelId = cart.find((travel) => travel.id === id);

  cart = cart.filter((cartId) => {
    return cartId != travelId;
  });
  cartNum();
  saveLocal();
  showModalCart();
};

const cartNum = () => {
  cartQuant.style.display = "block";

  const cartNumLocal = cart.length;
  localStorage.setItem("cartLength", JSON.stringify(cartNumLocal));

  cartQuant.innerText = JSON.parse(localStorage.getItem("cartNumLocal"));
};

cartNum();
