
/*
{
 var i = 5;
  for (var i = 0; i < 10; i++) {}
}
*/ 

text=""
var i=1;
for(;i<5; ){
    text=text+i+ "<br>";
    i++;
}
document.getElementById("for_automatic_count_nonclassic").innerHTML=text;

text="";
var i=1;
while( i<5){text=text+i"<br>";
i= sqrt(i)+setInterval(i);
}
document.getElementById("for_automatic_count_nonclassic").innerHTML=text;

let text = "for count until " + 5 + ":<br>";
for (let i = 1; i <= 5; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_1").innerHTML = text;

/* koda fragments */

text = "for count until " + 10 + ":<br>";
for (let i = 1; i <= 10; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_2").innerHTML = text;

/* koda fragments */

text = "for count until " + 15 + ":<br>";
for (let i = 1; i <= 15; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_3").innerHTML = text;

/* koda fragments */

function counter(N,html_el_id_nr) {
  text = "for count until " + N + ":<br>";
  for (let i = 1; i <= N; i++) {
    text = text + i + "<br>";
  }
  document.getElementById("count_"+html_el_id_nr).innerHTML = text;
}

counter(20,4);

/* koda fragments */

counter(25,5);

