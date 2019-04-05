$(document).ready(function() {
  //Create a variable to store a reference to the img.
  const cat = document.querySelector("img");

  //Change the style of the img to have a "left" of "0px", 
  //so that it starts at the left hand of the screens.
  cat.style.left = "0px";

  //Create a function called catWalk() that moves the cat 
  //10 pixels to the right of where it started, by changing the "left" style property.

  const catWalkRight = function() {
  cat.style.transform = "scaleX(1)"
  let boundary = window.innerWidth - cat.width -30;
  let position = parseInt(cat.style.left);

    if (position > boundary) {
      clearInterval( timerID );
      timerID = setInterval(catWalkLeft, 50)
    } else {
      cat.style.left = position + 10 + 'px';
    }
  };

  let timerID = setInterval(catWalkRight, 50);

  const catWalkLeft = function() {
  cat.style.transform = "scaleX(-1)"  
  let position = parseInt(cat.style.left);

    if ( position <= 0 ) {
      clearInterval( timerID );
      timerID = setInterval(catWalkRight, 50)
    } else {
      cat.style.left = position - 10 + 'px';
    }
  }
});

