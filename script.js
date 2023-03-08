gsap.registerPlugin(ScrollTrigger);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".imageBoard",
      pin: true,
      start: "top top",
      end: "+=300%",
      scrub: 1,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(
    document.body,
    {
      backgroundColor: "#ffffff",
    },
    "start"
  )
  .to(
    ".upper-container h2",
    {
        delay: 1.5,
        opacity: 1,
        scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h2",
    {
        delay: 1.5,
        opacity: 0,
    },
    "start"
  )
  .to(
    ".upper-container h3",
    {
        delay: 1.5,
        opacity: 1,
        scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h3",
    {
        delay: 1.5,
        opacity: 0,
    },
    "start"
  )

  .to(
    ".upper-container h5",
    {
      delay: 1.5,
      opacity: 1,
      scale: 5,
    },
    "start"
  )
  .to(
    ".upper-container h5",
    {
        delay: 1.5,
        opacity: 0,
    },
    "start"
  )

  .to(
    "#scaleableImg1",
    {
      scale: 10,
      x: -1500,
    },
    "start"
  )
  .to(
    "#scaleableImg2",
    {
      scale: 10,
      x: -2500,
    },
    "start"
  )
  .to(
    "#scaleableImg3",
    {
      scale: 10,
      x: -2000,
    },
    "start"
  )
  .to(
    "#scaleableImg4",
    {
      scale: 10,
      x: 3000,
    },
    "start"
  )
  .to(
    "#scaleableImg5",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    "#scaleableImg6",
    {
      scale: 10,
      x: -2000,
    },
    "start"
  )
  .to(
    "#scaleableImg7",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    "#scaleableImg8",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    "#scaleableImg9",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    "#scaleableImg10",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    "#scaleableImg11",
    {
      scale: 10,
      x: 2000,
    },
    "start"
  )
  .to(
    "#scaleableImg12",
    {
      scale: 10,
      x: 4000,
    },
    "start"
  )

  .to(
    ".cardImage",
    {
      delay: 1.5,
      scale: 1,
    },
    "start"
  )
  .to(
    ".cardImage",
    {
      delay: 1.5,
      opacity: 1,
    },
    "start"
  )
  .to(".scaleableImg", {
    opacity: 0,
  });
       