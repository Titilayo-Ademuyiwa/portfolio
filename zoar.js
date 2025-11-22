const forwardCarousel = () =>{
    let carousels = document.querySelectorAll(".eachcarousel");
    document.querySelector(".details").appendChild(carousels[0]);
};
const backwardCarousel = () =>{
    let carousels = document.querySelectorAll(".eachcarousel");
    document.querySelector(".details").prepend(carousels[carousels.length -1])
};
