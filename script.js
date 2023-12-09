gsap.from('.page1',
{
  x:-1000,
  duration:2,
  scrollTrigger:{
    scroller:'body',
    trigger:'.page1',
    pin:true
  }
})

gsap.from('.page2 h3',{
  x:0,
  opacity:0,
  duration:3,
  scrollTrigger:{
    scroller:'body',
    trigger:'.page2',
    scrub:2,
    pin:true
  }
})

gsap.from('.page3',{
  scale:0,
  duration:0.1,
  scrollTrigger:{
    scroller:'body',
    trigger:'.page3',
    start:'top 240%',
    end:'top 70%',
    scrub:1
  }
})


