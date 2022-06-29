console.log("Skripta izpildes sākums:\n"+new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>";

let text="";

for(let i=1; i < 11; i++){  
    if(1 % 2==0){text=text+i+"nepāra skaitlis<br>";}
    else{text=text+i+"nepāra skaitlis<br>"}

   
    
    //for(darbības ciklu uzsākot nosacījums cikla turpināšanai; "soļu veikšana {}"tiek_izpildīta 1 reizi;nosacījums tiek izpildīts katru reizi;)

    // sākums-> nosacījums ir spēkā->{} -> solis-> nosacījuma ārbaude->{}-> solis-> nav spēkā
    //pārejam pie nākošas darbības aiz cikla
    text = text + i + "<br>";

}

document.getElementById("for_automatic_count").innerHTML=text;

