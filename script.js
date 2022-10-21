
// Random price from 250 to 4000
const randomPrice = () => Math.floor(Math.random() * 3750) + 250;

const shoes = [
    {
        name: 'Nike Air Force 1',
        price: randomPrice(),
        unit: "$",
        image: "https://picsum.photos/200",
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 2',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/201',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 3',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/202',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 4',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/203',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 5',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/204',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 6',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/205',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 7',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/206',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 8',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/207',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
    {
        name: 'Nike Air Force 9',
        price: randomPrice(),
        unit: "$",
        image: 'https://picsum.photos/208',
        description: 'The Nike Air Force 1 is a classic basketball shoe that has been around since 1982. It was the first basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture. The shoe has been re-released in many different colorways and styles, and is still a popular choice for basketball players and sneakerheads alike.'
    },
]

let selctedIndex = 0;

$(function(){

    function addContentHoverState(slide){
        slide.hover(function(){
            $(".slide__image", this).addClass("slide__image--hover");
        }
        ,function(){
            $(".slide__image", this).removeClass("slide__image--hover");
        })
    }

    function addContentToSlideshow(){ 

        shoes.forEach((shoe,index) => {
            $('.slideshow').append(`
                <div class="slide" id="slide-${index}">
                    <div class="slide__image">
                        <img src="${shoe.image}" alt="${shoe.name}">
                    </div>
                    <div class="slide__content">
                        <h2 class="slide__content__title">${shoe.name}</h2>
                        <p class="slide__content__price">${shoe.price} ${shoe.unit}</p>
                    </div>
                </div>
            `)

            addContentHoverState($('#slide-'+index));
        })
    }

    function swapContent() {

        console.log(selctedIndex)
        $('#hero-right-img').attr('src', shoes[selctedIndex].image);
        $('.hero-right-name').text(shoes[selctedIndex].name);
        $('.hero-right-price').text(`${shoes[selctedIndex].unit} ${shoes[selctedIndex].price}`);
        $('.hero-right-description').text(shoes[selctedIndex].description);
    }

    function highlightSlide() {
        $('.slide').removeClass('active');
        $(`#slide-${selctedIndex}`).addClass('active');
    }

    addContentToSlideshow();
    swapContent()
    setInterval(() => {
        selctedIndex++;
        selctedIndex = selctedIndex % shoes.length;
        swapContent();
        highlightSlide();
    }, 5000);

    
})


