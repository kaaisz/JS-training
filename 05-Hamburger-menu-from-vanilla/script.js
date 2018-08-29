////////////////////////////////////////////////////////////////////
//This is the script for how to make Hamburger menu by Vanilla.js
////////////////////////////////////////////////////////////////////
'use strict';
//define variable
let mobileBtn = document.querySelector('.mobile-btn');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close');
let overlay = document.querySelector('.overlay');

//defining action for when menu opens
mobileBtn.addEventListener("click", function(){
  //menu.className += 'open';
  menu.classList.toggle('open');
  //overlay.className += 'open';
  overlay.classList.toggle('open');
});

//defining action for when menu closes
//for menu button
closeBtn.addEventListener('click', function(){
  menu.className = 'menu';
  overlay.className = 'overlay';
});
//for overlay
window.addEventListener('click', function(event){
  if(event.target === overlay){
    menu.className = 'menu';
    overlay.className = 'overlay';
  }
});
