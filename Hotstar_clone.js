let movies = [
    {
       name: "falcon and winter soldier",
       des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elitError est ipsa, voluptate necessitatibus quas facilis ",
       image:"img/slider 2.PNG"
    },
    {
        
       name: "Loki",
       des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elitError est ipsa, voluptate necessitatibus quas facilis ",
       image:"img/slider 1.PNG"
    },
    {
        
       name: "wanda vision",
       des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elitError est ipsa, voluptate necessitatibus quas facilis ",
       image:"img/slider 3.PNG"
    },
    {
        
       name:"raya and the last dragon",
       des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elitError est ipsa, voluptate necessitatibus quas facilis ",
       image:"img/slider 4.PNG"
    },
    {
        
       name: "luca",
       des:
          "Lorem ipsum dolor sit amet consectetur adipisicing elitError est ipsa, voluptate necessitatibus quas facilis ",
       image:"img/slider 5.PNG"
    },
];
const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex=0; //track the current slide
const createslide = () => {
    if (slideIndex>=movies.length){
        slideIndex=0;
    }

    //create DOM Elements
let slide = document.createElement("div")
var imgElement = document.createElement("img")
let content = document.createElement("div")
let h1 = document.createElement("h1")
let p = document.createElement("p")

//attaching all elements
imgElement.appendChild(document.createTextNode(' '));
h1.appendChild(document.createTextNode(movies[slideIndex].name ));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
carousel.appendChild(slide)

//setting up images
imgElement.src=movies[slideIndex].image;
slideIndex++

// setting elemnts classnames

slide.className = "slider"
content.className = "slide-content";
h1.className = "movie-title";
p.className = "movie-des";

sliders.push(slide);

if(sliders.length )
{
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;

 }


}

for(let i=0; i<3; i++){
    createslide();

}
setInterval(()=>{
    createslide();
},3000);

// video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach(item => {
    item.addEventListener("mouseover",()=>{
        let video = item.children[1];
        video.play()
    })
    item.addEventListener("mouseleaver",()=>{
        let video = item.children[1];
        video.pause();
    });
});
//card sliders
let cardContainers = [...document.querySelectorAll(".card-container")]

let prebtns = [...document.querySelectorAll(".pre-btn")]
let nextbtns = [...document.querySelectorAll(".nxt-btn")]

cardContainers.forEach((items,i)=>{
    let containerDimensions = items.getBoundingclientRect();
    let containerWidth =containerDimensions.width;

nextbtns[i].addEventListener('click',()=>{
    items.scrollLeft += containerWidth -200 ;


})
prebtns[i].addEventListener('click',()=>{
    items.scrollLeft -= containerWidth +200 ;


}); 
});
