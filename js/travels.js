// // const travels = [
// //   { id: 1, name: "Buenos Aires", price: 1500, img: "img/BA.jpg", stars: "3", quan: 1, desc: "Buenos Aires es la gran capital cosmopolita de Argentina. Su centro es la Plaza de Mayo, rodeada de imponentes edificios del siglo XIX, incluida la Casa Rosada, el icónico palacio presidencial que tiene varios balcones. Entre otras atracciones importantes, se incluyen el Teatro Colón, un lujoso teatro de ópera de 1908 con cerca de 2,500 asientos, y el moderno museo MALBA, que exhibe arte latinoamericano", },
// //   { id: 2, name: "Tierra del Fuego", price: 7000, img: "img/Faro-del-Fin-del-Mundo.jpg", stars: "5", quan: 1, desc: "Está ubicada en la región patagónica, en el extremo sur de la Argentina, y ocupa un amplio territorio insular, marítimo y antártico, que se extiende desde la Isla Grande de Tierra del Fuego al polo Sur, incluyendo la isla de los Estados, las islas Malvinas, las islas del Atlántico Sur, la península Antártica", },
// //   { id: 3, name: "Salta", price: 2500, img: "img/Salta.jpg", stars: "5", quan: 1, desc: "Salta es una capital provincial del noroeste montañoso de Argentina. Se fundó en 1582 y es conocida por su arquitectura colonial española y su herencia andina. La ciudad se centra en la Plaza 9 de Julio, elegante y rodeada de cafés, en torno a la cual se ubican la Catedral de Salta y El Cabildo, un ayuntamiento del siglo XVIII transformado en museo. En las cercanías, está el Museo de Arqueología de Alta Montaña (MAAM), que alberga artefactos incas y momias", },
// //   { id: 4, name: "Santa Cruz", price: 4500, img: "img/Monte-Fitz-Roy.jpg", stars: "5", quan: 1, desc: "Santa Cruz es una provincia en la Patagonia argentina en el sur del país. Se ubica entre la cordillera de los Andes al oeste y el océano Atlántico al este. El Parque Nacional los Glaciares, donde se encuentra el glaciar Perito Moreno, es conocido por sus paisajes helados en constante cambio. Las ciudades de El Chaltén y El Calafate son centros para explorar Los Glaciares", },
// //   { id: 5, name: "Tucuman", price: 3000, img: "img/Tucuman.jpg", stars: "2", quan: 1, desc: "Fue habitada por la población nativa de la región durante varios milenios hasta la intervención de los conquistadores españoles a mediados del siglo xvii, y desde entonces ha recibido varios grupos de inmigrantes, especialmente españoles, aunque a diferencia de otras provincias argentinas, estos no han superado a la población originaria; y de la mezcla de ambos grupos surgió la actual población de la provincia, compuesta principalmente por mestizos", },
// //   { id: 6, name: "San Juan", price: 4500, img: "img/Valle-de-la-Luna.jpg", stars: "4", quan: 1, desc: "San Juan es una ciudad en el valle al este de la cordillera de los Andes, en la zona central occidental de Argentina. En el centro está la Casa Natal de Sarmiento, donde nació el presidente del siglo XIX y escritor Domingo Faustino Sarmiento. Cerca está el Museo Provincial de Bellas Artes Franklin Rawson, que exhibe pinturas de artistas argentinos y europeos. El Museo Histórico Provincial Agustín Gnecco exhibe muebles, estampillas y monedas locales", },
// //   { id: 7, name: "Mendoza", price: 2000, img: "img/Mendoza.jpg", stars: "3", quan: 1, desc: "Mendoza es una ciudad de la región de Cuyo en Argentina y es el corazón de la zona vitivinícola argentina, famosa por sus Malbecs y otros vinos tintos. Sus distintas bodegas ofrecen degustaciones y visitas guiadas. La ciudad tiene calles amplias y frondosas rodeadas de edificios modernos y art déco, y con plazas más pequeñas que rodean la Plaza Independencia, sitio del Museo Municipal de Arte Moderno subterráneo, que exhibe arte moderno y contemporáneo", },
// //   { id: 8, name: "Chaco", price: 3000, img: "img/chaco.jpg", stars: "1", quan: 1, desc: "El corazón del Chaco Húmedo. Montes, sabanas, esteros y lagunas sujetas a épocas de lluvia y sequía conforman los variados paisajes del primer parque chaqueño, que cobija más de 300 especies de aves y resguarda el quebracho colorado que fuera explotado indiscriminadamente para diferentes usos desde fines del siglo XIX", },
// //   { id: 9, name: "Corrientes", price: 5000, img: "img/corrientes.jpg", stars: "4", quan: 1, desc: "Corrientes es una provincia en el noreste subtropical de Argentina, delimitada por los ríos Paraná y Uruguay. Los Esteros del Iberá, un área inmensa de lagos y humedales que alberga yacarés, anacondas, carpinchos y más de 350 especies de aves, es un destino popular para el ecoturismo. La región es conocida por la pesca con mosca del dorado, y algunas de sus estancias", },
// //   { id: 10, name: "Entre Rios", price: 2500, img: "img/entreRios.jpg", stars: "2", quan: 1, desc: "Entre Ríos es una provincia de la región de Mesopotamia en el noreste de Argentina, entre los ríos Paraná y Uruguay. Es conocida por sus fuentes termales, como las de Federación, y su tradición de cultivar la yerba mate y beber el mate. Alberga 2 parques nacionales: Predelta, abundante en especies de aves, y El Palmar, una de las reservas que quedan de la palma yatay que alguna vez cubrió la región", },
// //   { id: 11, name: "Formosa", price: 3000, img: "img/formosa.jpg", stars: "3", quan: 1, desc: "Formosa es una provincia joven, diversa, inclusiva y alegre. La variedad de nuestros paisajes naturales está determinada por la presencia del agua: su abundancia o su escasez. Los ríos, riachos, bañados y lagunas, conforman una diversidad de ecosistemas donde viven una gran variedad de especies vegetales y animales en muy buen estado de conservación. Formosa es un mosaico de ambientes naturales", },
// //   { id: 12, name: "La Rioja", price: 5500, img: "img/laRioja.jpg", stars: "5", quan: 1, desc: "La Rioja es una provincia del noroeste de Argentina que se extiende desde las cimas nevadas de los Andes, como el Monte Pissis de 6,793 m de altura, hasta los valles llenos de viñas. El árido Parque Nacional Talampaya es conocido por sus acantilados de arenisca roja de 200 m de altura, los fósiles del período Triásico y los grabados en roca de 1,500 años de antigüedad", },
// //   { id: 13, name: "Misiones", price: 2000, img: "img/misiones.jpg", stars: "4", quan: 1, desc: "Misiones está repleta de fascinantes atracciones, desde la colorida vida silvestre hasta ruinas de siglos de antigüedad y una de las verdaderas maravillas naturales del mundo. Misiones se encuentra en el noreste de Argentina, y comparte la frontera con Brasil y Paraguay. Admira los impresionantes paisajes naturales de Misiones, formados por densos bosques y junglas intercalados con lagos, ríos y cascadas", },
// //   { id: 14, name: "Santiago del Estero", price: 3500, img: "img/SantiagodelEstero.jpg", stars: "1", quan: 1, desc: "La provincia de Santiago del Estero se ubica en el corazón del noroeste argentino y posee uno de los embalses más importantes y bellos de la región: el Dique Frontal Termas de Río Hondo. Santiago del Estero cuenta, además de con su capital provincial, con otros destinos turísticos que logran que el visitante prolongue su estadía para disfrutar de su antigua arquitectura, de costumbres centenarias y de otros atributos que sólo se dan en esta región del país", },
// //   { id: 15, name: "La Pampa", price: 4000, img: "img/laPampa.jpg", stars: "2", quan: 1, desc: "La Pampa es una provincia en el centro de Argentina, en las amplias llanuras pampeanas. Hay muchas estancias sobre los terrenos fértiles cerca de la relajada Santa Rosa, capital de la provincia. En el sudoeste, el Parque Nacional Lihué Calel alberga lagartijas, pumas y guanacos. Al sur de Santa Rosa, la reserva Parque Luro es conocida por su bosque de espinosos árboles caldenes, donde viven venados rojos, jabalíes y pájaros carpinteros", },
// //   { id: 16, name: "Jujuy", price: 4000, img: "img/jujuy..jpg", stars: "5", quan: 1, desc: "Jujuy, provincia del remoto noroeste de Argentina, se caracteriza por sus espectaculares formaciones rocosas y colinas de la Quebrada de Huamahuaca. Este valle y sus aldeas quechuas se ubican en el norte de la capital provincial y el acceso regional, San Salvador de Jujuy. En el sur del valle, las laderas rocosas del icónico Cerro de los Siete Colores sobresalen de la villa colonial Purmamarca", },
// //   { id: 17, name: "Rio Negro", price: 6000, img: "img/rioNegro.jpg", stars: "5", quan: 1, desc: "Río Negro es una provincia en el norte de la Patagonia argentina. Sus paisajes naturales incluyen desde la nevada Cordillera de los Andes en el oeste hasta el océano Atlántico en el este, y se destacan los lagos glaciales y mesetas con bosques. La ciudad de Bariloche, que se encuentra a los pies de los Andes en el Parque Nacional Nahuel Huapi, es conocida por sus playas de piedras, el chocolate casero y el área de esquí en el cerro Catedral", },
// // ]
// // const travelsData = JSON.parce('json/travelsData.json')

// function takeTravels(choseTravels) {

//   travelsContainer.innerHTML = ""

//   choseTravels.forEach((travel) => {
//     let content = document.createElement("div");
//     content.innerHTML =
//       `
//         <div class="travels__container--card">
//           <div class="travels__container--card--container front">
//             <img src="${travel.img}" class="front__img">
//             <div class="front__container">
//               <h3 class="front__container--title">${travel.name}</h3>
//               <h3 class="front__container--price">${travel.price}</h3>
//             </div>
//           </div>
//           <div class="travels__container--card--container back">
//             <h3 class="back__title">${travel.name}</h3>
//         <p class="back__description">${travel.desc}</p>
//       </div>
//     </div>
//     `;

//     const mergeAll = searchTravelButton.addEventListener('click', function searchTravel() { travelsOut.style.display = "none"; });
//     travelsContainer.append(content);

//     let buyOption = document.createElement('button');
//     buyOption.className = "travels__buyTravel"
//     buyOption.innerHTML = `Agregar Destino`
//     content.append(buyOption)

//     buyOption.addEventListener('click', () => {


//       const repeatTravel = cart.some((repeatOption) => repeatOption.id === travel.id);
//       if (repeatTravel === true) {
//         cart.map((option) => {
//           if (option.id === travel.id) {
//             option.quan++;
//           }
//         });
//       } else {
//         cart.push({
//           id: travel.id,
//           img: travel.img,
//           name: travel.name,
//           price: travel.price,
//           quan: travel.quan,
//           stars: travel.stars,
//         });
//       }
//       console.log(cart);
//       cartNum();
//       saveLocal();
//       swal('Genial', `Añadiste al carrito el destino ${travel.name} exitosamente`, 'success')
//     });
//   });
// }

// takeTravels(travels);


const travelsContainer = document.querySelector('#travelsContainer');
const saveLocal = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

async function callTravels() {
  const res = await fetch("js/travelsData.json");
  const travels = await res.json();

  console.log(travels);
}

const travels = callTravels();

function takeTravels(travels) {
  for (travelData of travels) {
    const content = document.createElement("div");
    content.innerHTML =
      `
      <div class="travels__container--card">
        <div class="travels__container--card--container front">
          <img src="${travelData.img}" class="front__img">
          <div class="front__container">
            <h3 class="front__container--title">${travelData.name}</h3>
            <h3 class="front__container--price">${travelData.price}</h3>
          </div>
        </div>
        <div class="travels__container--card--container back">
          <h3 class="back__title">${travelData.name}</h3>
          <p class="back__description">${travelData.desc}</p>
        </div>
      </div>
      `;
      
    const mergeAll = searchTravelButton.addEventListener('click', function searchTravel() { travelsOut.style.display = "none"; });
    travelsContainer.append(content);

    let buyOption = document.createElement('button');
    buyOption.className = "travels__buyTravel"
    buyOption.innerHTML = `Agregar Destino`
    content.append(buyOption)
  }
}

takeTravels();