/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('Stardate 222003.34: alert level green');

// function that will fire after click

let runAnimation = function(){
  square.classList.add("animate");
  setTimeout(clearClass, 4000);
}

let sq2funct = function(){
    console.log('sq2funct ok')
  sq2.classList.add("sq2anim");
    sq2.style = "transform: rotate(45deg)";
  setTimeout(clearSq2, 4000);
}

// element.addEventListener("click", myAddClassFunction);
square.addEventListener("click", runAnimation);
sq2.addEventListener("click", sq2funct);

let clearClass = function(){
  square.classList.remove("animate");
}

let clearSq2 = function(){
  sq2.classList.remove("sq2anim");
}


