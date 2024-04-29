
const initialPageAnimation = () => {

  let tl = gsap.timeline()

tl.fromTo(
  ".nexterLogo",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.3,
  }
)
.fromTo(
  ".headerText",
  {
    x: 75,
    y: 100,
  },
  {
    x: 0,
    y: 0,
    duration: 1.3,
  },
  ">-1.3"
)
.fromTo(
  ".headerBtn",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.3,
  },
  "-=1.2"
)
.fromTo(
  ".seenon-container",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.3,
  },
  "-=0.5"
)
.fromTo(
  ".header-paragraph",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1.3,
  },
  "-=.7"
)
.fromTo(
  ".erik",
  {
    x: 75,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.3,
  },
  "-=1.2"
)
.fromTo(
  ".kim",
  {
    x: 75,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.3,
  },
  "-=1.2"
)
.fromTo(
  ".toby",
  {
    x: 75,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.3,
  },
  "-=1.2"
)
.fromTo(
  ".top3-header",
  {
    y: 25,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.3,
  },
  "-=.7"
)

}

initialPageAnimation();

//start of scroll animations

//feature scene
const featureScroll = new gsap.timeline();

featureScroll.fromTo('.features', {
  opacity: 0,
}, {
  opacity: 1
})

const featureSection = document.querySelector('.features');

let homeController = new ScrollMagic.Controller();

let featureScene = new ScrollMagic.Scene({
  triggerElement: '.features',
  triggerHook: 0.5,
  reverse: true,

  duration: featureSection.offsetHeight
})
.setTween(featureScroll)
.addIndicators()
.addTo(homeController)

// story scene

const storyScroll = new gsap.timeline();

storyScroll.fromTo('.story', {
  opacity: 0,
}, {
  opacity: 1
})
.fromTo('.storyImageBox', {
  x: -200,
}, {
  x: 0,
  duration: 1
},0)
.fromTo('.storyText', {
  x: 200,
}, {
  x: 0,
  duration: 1
},0)
.fromTo('.story2-image', {
  opacity: 0,
  y:25
}, {
  opacity: 1,
  y:0
})




const storySection = document.querySelector('.story');

let storyScene = new ScrollMagic.Scene({
  triggerElement: '.story',
  triggerHook: .5,
  reverse: true,

  duration: 400
})
.setTween(storyScroll)
.addIndicators()
.addTo(homeController)










  

