// FILTER

const categoryButton = document.querySelectorAll('.filters__container--btn');

categoryButton.forEach(button =>{
  button.addEventListener('click', (b) => {

    categoryButton.forEach(button => button.classList.remove("active"))
    b.currentTarget.classList.add("active");
    

    if(b.currentTarget.id != "all"){
      const categoryButtonChoise = travels.filter( travel => travel.stars === b.currentTarget.id);
      takeTravels(categoryButtonChoise);
    }else{
      takeTravels(travels);
    }
  })
})

// SEARCH

const searchTravelInput = document.querySelector('#searchTravelInput');
const searchTravelButton = document.querySelector('#searchTravelButton');
const searchResult = document.querySelector('#travelsCard');

const searchTravel = ()=> {
  const searchText = searchTravelInput.value.toLowerCase();
  for(let travelSearch of travels){
    let searchName = travelSearch.name.toLowerCase();
    if(searchName.indexOf(searchText) !== -1){
      searchResult.innerHTML +=
      `
      <div class="travels__container--container" id="travelCard">
        <img src="${searchText.img}" class="travels__card--img">
        <div class="travels__card--container">
          <h3 class="travels__card--container--title">${searchText.name}</h3>
          <p class="travels__card--container--description">${searchText.desc}</p>
          <p class="travels__card--container--price">$${searchText.price}</p>

        </div>
      </div>
      `
    }
  }
  if(searchResult.innerHTML === ''){
    searchResult.innerText +=`Todavía no tenemos ese destino `
  }
}

searchTravelButton.addEventListener('click', searchTravel)