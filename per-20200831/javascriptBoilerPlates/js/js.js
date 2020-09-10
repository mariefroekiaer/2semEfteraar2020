/**
 * file: js.js
 * purpose: interactivity
 **/

/**
 * Document Objekt Modellen
 **/

// tilføj html
//var element = document.getElementById("minAside");
//element.innerHTML = "<h1 class='orange'>Her er en overskrift</h1>";

// brug et sigende variabelnavn
let galleri = document.getElementById("minAside");

galleri.innerHTML = "<h2> Galleri </h2>";
galleri.style.color = "green";

//anders.style.backgroundColor = "blue";

// backgroundColor <====> i CSS skriver man background-color
var kort = [
    "../images/helloween.jpg", 
    "../images/greenman.jpg",
    "../images/marselis.jpg"
];

// loope listen ud
for (let n=0; n < kort.length; n++){
    // console.log( "<img src='" + kort[n] + "'>");
    galleri.innerHTML += "<img src='" + kort[n] + "'>";
}

/**
(ind til 13:20)

1. lav en liste med nogen billeders navne (se l. 20 - 24)
2. billederne skal du lægge i mappen ../images/
3. billedlisten loopes ud - og skriver img tags i koden
**/


// Funktioner

function regnDenUd( nero , caecar ) {
  return "<h3>" + nero * caecar + "</h3>";   // The function returns the product of p1 and p2
}

console.log( regnDenUd( 666 , 777 ));
console.log( regnDenUd( 2345 , 5678 ));

// function navn( parameter, par2, par3 ) {
function visEtBillede( filen ) {
    galleri.innerHTML += "<div>";
    galleri.innerHTML += "<img src='../images/" + filen + "'>";
    galleri.innerHTML += "</div>";
}

// funktionen kaldes
visEtBillede('helloween.jpg');
visEtBillede('marselis.jpg');

// conditionals
let a = 2;
let b = 345;

if (a < b) {
  //  block of code to be executed if the condition is true
    console.log(a + " er mindre end " + b);
}

// tilfældige tal --- spil ...
let etTalLissom = Math.floor( Math.random() * kort.length ); 
console.log( kort[etTalLissom] );


