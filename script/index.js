let cityItems = document.getElementById("city-menu").getElementsByTagName("li");

let hotelContainers = document.getElementsByClassName("hotel-list");

const changePage = (i = 0) => {
  for (let i = 0; i < hotelContainers.length; i++) {
    hotelContainers[i].style.display = "none";

    cityItems[i].classList.remove("active-item");
  }

  hotelContainers[i].style.display = "flex";

  cityItems[i].classList.add("active-item");

  return false;
};

const setEvent = () => {
  for (let i = 0; i < cityItems.length; i++) {
    cityItems[i].addEventListener("click", () => {
      changePage(i);
    });
  }
  return false;
};

changePage();

setEvent();

// banner 1

let sliders = document
  .getElementById("banner1")
  .getElementsByClassName("slider");
let currentSlide = 0;

const SlideNext = next => {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  sliders[next].style.display = "inline-block";
 
};

const inc = () =>{
  if (currentSlide === sliders.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
}
const dec = ()=>{
  if (currentSlide === 0) {
    currentSlide = sliders.length - 1;
  } else {
    currentSlide--;
  }
}

let arrow = document.getElementsByClassName("arrow");

for (let i = 0; i < arrow.length; i++) {

  arrow[i].addEventListener("click", e => {

    if (e.target.id === "arrow-left") {

    dec()

    } else {

    inc()

    }

   SlideNext(currentSlide)
    
    return false;
  });
}



SlideNext(currentSlide);

setInterval(()=>{
SlideNext(currentSlide)
inc()
},2500)

