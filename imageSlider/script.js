const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = document.querySelector("[data-slides]"); // selects the ul tag which contains all the pictures 
    // const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset

    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

/* 

1. we have an array of photos 
2. we have 2 buttons, one goes to the next photo and the other to the previous photo
3. Now we must set up eventlisteners that activate a function that changes the current index of the array

*/