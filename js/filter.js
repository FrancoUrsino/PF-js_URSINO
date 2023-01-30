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

