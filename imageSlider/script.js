const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 // adds to the current index whenever the prev or next button is clicked
    const slides = document.querySelector("[data-slides]"); // selects the ul tag which contains all the pictures 
    // const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]") // selects the slide that is currently viewed

    let newIndex = [...slides.children].indexOf(activeSlide) + offset // this will add or subtract the current index which then becomes the new index

    if (newIndex < 0) newIndex = slides.children.length - 1 // if new index is less than 0, it will go to the last picture 
    if (newIndex >= slides.children.length) newIndex = 0 // if new index is more than array length, then it goes to first picture

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    // sets dataset-active to the new slide in the array, and deletes it from the previous slide that had it
  })
})

/* 

1. we have an array of photos 
2. we have 2 buttons, one goes to the next photo and the other to the previous photo
3. Now we must set up eventlisteners that activate a function that changes the current index of the array

*/