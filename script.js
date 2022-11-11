// Random price from 250 to 4000
const randomPrice = () => Math.floor(Math.random() * 3750) + 250;

const shoes = [
  {
    name: "Nike Air Force 1",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/200",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 2",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/201",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 3",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/202",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 4",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/203",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 5",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/204",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 6",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/205",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 7",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/206",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 8",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/207",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
  {
    name: "Nike Air Force 9",
    price: randomPrice(),
    unit: "$",
    image: "https://picsum.photos/208",
    description:
      "The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.",
  },
];

//create function that creates a card for each shoe in the array and appends it to the DOM in the container div .slideshow
function createCards() {
  for (let i = 0; i < shoes.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card">
            <img src="${shoes[i].image}" alt="shoe">
            <div class="card-info">
                <h2>${shoes[i].name}</h2>
                <p>${shoes[i].description}</p>
                <p>${shoes[i].price} ${shoes[i].unit}</p>
            </div>
        </div>
        `;
    document.querySelector(".slideshow").appendChild(card);
  }
}

//call the function
//createCards();

//create a function that uses jquery to create a card for each shoe in the array and appends it to the DOM in the container div .slideshow
function createCardsJquery() {
  for (let i = 0; i < shoes.length; i++) {
    const card = $(`
            <div class="card">
                <img src="${shoes[i].image}" alt="shoe">
                <div class="card-info">
                    <h2>${shoes[i].name}</h2>
                    <p>${shoes[i].description}</p>
                    <p>${shoes[i].price} ${shoes[i].unit}</
                </div>
            </div>
        `);
    $(".slideshow").append(card);
  }
}

//call the function
//createCardsJquery();

//create a function that uses jquery to create a card for each shoe in the array and appends it to the DOM in the container div .slideshow it also adds .card class to each card ands adds hover effect and border if the card is selected. it also console logs the name of the shoe when clicked and deselects the card when clicked again
function createCardsJquery2() {
  for (let i = 0; i < shoes.length; i++) {
    const card = $(`
            <div class="card">
                <img src="${shoes[i].image}" alt="shoe">
                <div class="card-info">
                    <h2>${shoes[i].name}</h2>
                    <p>${shoes[i].description}</p>
                    <p>${shoes[i].price} ${shoes[i].unit}</ 
                </div>
            </div>
        `);
    $(".slideshow").append(card);
    card.addClass("card");
    card.hover(function () {
      $(this).css("border", "2px solid black");
    });
    card.click(function () {
      $(this).toggleClass("selected");
      console.log(shoes[i].name);
    });
  }
}

//call the function
// createCardsJquery2();

//create a function that uses jquery to create a card for each shoe in the array and appends it to the DOM in the container div .slideshow it also adds .card class to each card ands adds hover effect and border if the card is selected. it also console logs the name of the shoe when clicked and removes border the card when clicked again
function createCardsJquery3() {
  for (let i = 0; i < shoes.length; i++) {
    const card = $(`
                <div class="card">
                    <img src="${shoes[i].image}" alt="shoe">
                    <div class="card-info">
                        <h2>${shoes[i].name}</h2>
                        <p>${shoes[i].description}</p>
                        <p>${shoes[i].price} ${shoes[i].unit}</
                    </div>
                </div>
            `);
    $(".slideshow").append(card);
    card.addClass("card");
    card.hover(
      function () {
        $(this).css("background-color", "pink");
      },
      function () {
        $(this).css("background-color", "white");
      }
    );
    card.click(function () {
      $(this).toggleClass("selected");
      console.log(shoes[i].name);
      if ($(this).hasClass("selected")) {
        $(this).css("border", "2px solid black");
      } else {
        $(this).css("border", "none");
      }
    });
  }
}

//call the function
createCardsJquery3();
