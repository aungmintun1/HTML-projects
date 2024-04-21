/*
Basically we make a timed carousel that goes through each of the 3 slides every 6 seconds
we also shade in green for each slide, the circle, the side link
*/

let init = () => {
  let container = document.getElementsByClassName('jumbo-slider__container')[0], //the ul that contains each li which are the slides
  slides = document.getElementsByClassName('jumbo-slider__slide'), // all 3 li's
  circles = document.getElementsByClassName('jumbo-slider__circle'), // all 3 green circles
  links = document.getElementsByClassName('jumbo-slider__link'), // all 3 links on the side 
  current = 1, // default we start with the first slide and then 2 and then 3 and then reset
  time = 6000;

  //add active class to the first slide when first opening
  slides[0].classList.add('jumbo-slider__slide--active');
  links[current-1].classList.add('jumbo-slider__link--active');
  circles[current-1].classList.add('jumbo-slider__circle--filled');
  

  //update elipsis and links
  let updateNav = (current) => {
   
    for (let index = 0; index < slides.length; index++) {
      links[index].classList.remove('jumbo-slider__link--active');
      circles[index].classList.remove('jumbo-slider__circle--filled');
      //removes green shade from previous slide 
    }

    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');
     //adds green shade to next slide 
  }

  let startSliding = () => {
    
    setInterval(() => {

      //remove from active from first and add it to the next slide so It can become the first slide with the class activated
      //eg. first iteration: 1 gets cloned, the clone is at the end, the original is then removed, which now makes slide 2 the first in the ul, and is visible
      //eg. second iteration: 2 gets cloned, the clone is at the end, the original 2 is then removed, which now makes slide 3 the first in the ul and so on and so forth

      slides[1].classList.add('jumbo-slider__slide--active')
      slides[0].classList.remove('jumbo-slider__slide--active')

      // clone the first slide and place on the last space.
      container.appendChild(slides[0].cloneNode([true]));
      // then remove the first slide after it has been cloned
      container.removeChild(slides[0]);

      if(current < slides.length){
        //if current is less than slides array length continue loop
        current++
        updateNav(current)
      } else {
         //if current is less than slides array length end loop
        current = 1
        updateNav(current)
      }
      
    }, time);
  }

  startSliding();
}

init();