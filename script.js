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


var mypc=document.querySelector('.thispc');
var screen=document.querySelector('.mycomputer');
var close=document.querySelector('.close');
var fullscreen=document.querySelector('.ri-checkbox-blank-line');
var originalscreen=document.querySelector('.ri-checkbox-multiple-blank-line')
var opened=document.querySelector('.fmopened');
var datetile=document.querySelector('.date');
var timetile=document.querySelector('.time');
var systemtray=document.querySelector('.systemtray')
var systemtraywindow=document.querySelector('.systemtraybar')
var displaysystemtray=true;
var shutdown=document.querySelector('.shutdown');
var overlay=document.querySelector('.overlay')
var start=document.querySelector('.logo');
var windowsbar=document.querySelector('.windowsbar');
var minimize=document.querySelector('.minimize');
var date=new Date();

var currentDate=date.toJSON().slice(0, 10)

var currentTime=date.toLocaleTimeString('en-GB', { hour: "numeric", 
minute: "numeric"});

console.log(currentDate)
datetile.textContent=currentDate;
timetile.textContent=currentTime;

mypc.addEventListener('dblclick',function(){
  screen.style.display='initial'
  opened.style.display='initial'
  gsap.from('.mycomputer',{
    scale:0,
    duration:.5,
    scrub:2
  }

  )
})

close.addEventListener('click',function(){
  screen.style.display='none';
  opened.style.display='none'
})

fullscreen.addEventListener('click',function(){
  screen.style.width='100%';
  screen.style.height='100%';
  screen.style.zIndex=999;
  fullscreen.style.display='none'
  originalscreen.style.display='initial'
})

originalscreen.addEventListener('click',function(){
  screen.style.width='75%';
  screen.style.height='75%';
  fullscreen.style.display='initial';
  originalscreen.style.display='none'
})

systemtray.addEventListener('click',function(){ 
  if(displaysystemtray===false){
    displaysystemtray=!displaysystemtray;
    systemtraywindow.style.display='inherit'
    gsap.to('.systemtraybar',{
      y:200,
      duration:.5
    })

  }
  else{
    displaysystemtray=!displaysystemtray;
    systemtraywindow.style.display='inherit'
  gsap.from('.systemtraybar',{
    y:200,
    duration:.5
  })
  }
})

shutdown.addEventListener('click',function(){
  overlay.style.display='inherit';
  gsap.from('.overlay',{
    x:-400,
    duration:0.5
  })
})

start.addEventListener('click',function(){
  windowsbar.style.display='inherit';
  gsap.from('.windowsbar',{
    y:600,
    duration:.7
  })
 
})

minimize.addEventListener('click',function(){
  screen.style.display='none';
  opened.style.display='none'
})