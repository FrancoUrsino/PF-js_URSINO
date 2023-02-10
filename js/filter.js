// FILTER

const categoryButton = document.querySelectorAll('.filters__container--btn');
const minMax = document.querySelector('#minMax');
const maxMin = document.querySelector('#maxMin');

categoryButton.forEach(button => {
  button.addEventListener('click', (b) => {

    categoryButton.forEach(button => button.classList.remove("active"))
    b.currentTarget.classList.add("active");


    if (b.currentTarget.id != "all") {
      const categoryButtonChoise = travels.filter(travel => travel.stars === b.currentTarget.id);
      takeTravels(categoryButtonChoise);
    } else {
      takeTravels(travels);
    }
  });
});


for (let i = 0; i < callTravels.length; i++) {
  travels[i].price = parseInt(travels[i].price)
}
minMax.addEventListener('click', () => {
  travels.sort(function (a, b) {
    return a.price - b.price
  })
  takeTravels(travels)
})

maxMin.addEventListener('click', () => {
  travels.sort(function (a, b) {
    return b.price - a.price
  })
  takeTravels(travels)
})


// SEARCH

const searchTravelInput = document.querySelector('#searchTravelInput');
const searchTravelButton = document.querySelector('#searchTravelButton');
const searchResult = document.querySelector('#searchTravels__container');
const travelsOut = document.querySelector('#allDestinations');

const searchTravel = () => {
  searchResult.innerHTML = "";
  const searchText = searchTravelInput.value.toLowerCase();
  for (let travelSearch of travels) {
    let searchName = travelSearch.name.toLowerCase();
    if (searchName.indexOf(searchText) !== -1) {
      searchResult.innerHTML +=
        `
      <div class="searchTravels__card">
        <img src="${travelSearch.img}" class="searchTravels__card--img">
        <div class="searchTravels__card--container">
        <button class="travels__card--btn" id="btnCloseSearch"><i class="bi bi-x-lg"></i></button>
          <h3 class="searchTravels__card--container--title">${travelSearch.name}</h3>
          <p class="searchTravels__card--container--description">${travelSearch.desc}</p>
          <p class="searchTravels__card--container--price">$${travelSearch.price}</p>
        </div>
      </div>
      `

      const searchOut = document.querySelector('#btnCloseSearch');

      searchOut.addEventListener('click', () => {
        searchResult.style.display = "none"
        travelsOut.style.display = "grid"
      });
      searchResult.style.display = "grid"
    }
  }
  if (searchResult.innerHTML === '') { searchResult.innerText += `Todavía no tenemos ese destino` }
}

searchTravelButton.addEventListener('click', searchTravel)

