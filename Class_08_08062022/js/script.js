var x=60






//a=45
//console.log(a);



let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;









//'scope'-skripta bloks, nodalās ar šādām iekavām- {}
// var atslēgas vārds ļauj nodefinēt globālo mainīgo-pieejams visā koda garumā
var a=45;
console.log("a vērtība(no 'galvenā zara' pirms scope):"+a);
{
    console.log("a vērtība pirms pārdefinēšanas (no'scope'):"+a);
var a=46;
console.log("a vērtība pēc pārdefinēšanas (no'scope'):"+a);
}
console.log("a vērtība(no'galvenā zara'pēc scope:"+a);

//let atslēgas vārds ļauj nodefinētlokālo mainīgo- pieejams koda blokā norobežotā ar {}- scope vērtība var tikt mainīta

let b=60;
console.log("b vērtība(no 'galvenā zara' pirms scope):"+b);
{
    //console.log("b vērtība pirms pārdefinēšanas (no'scope'):"+b);
let b=61;
console.log("b vērtība pēc pārdefinēšanas (no'scope'):"+b);
}
console.log("b vērtība(no'galvenā zara'pēc scope:"+b);

//const atslēgas vārds ļauj nodefinēt lokālo konstanti, pieejams koda blokā norobežotā ar {}- scope vērtība nevar tikt mainīta;
const c=100
console.log("c vērtība(no 'galvenā zara' pirms scope):"+c);
{
    //console.log("c vērtība pirms pārdefinēšanas (no'scope'):"+c);
const c=100;
console.log("c vērtība pēc pārdefinēšanas (no'scope'):"+c);
}
console.log("c vērtība(no'galvenā zara'pēc scope:"+c);






/*

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
*/