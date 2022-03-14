function koszon() {
    let nev = document.getElementById("nev").value;
    let kor = document.getElementById("kor").value;
    let kiir = document.getElementById("ide");


    if (kor < 18) {

        kiir.innerHTML = "Szia " + nev;

    }
    else {
        kiir.innerHTML = "Jó napot " + nev;
    }
    console.log(kor, nev);
}

function osztaly() {
    let nevem = document.getElementById("nevem").value;
    let jegy = document.getElementById("jegy").value;
    let kiirom = document.getElementById("idee");


    if (jegy<2){
        kiirom.innerHTML= "elégtelen " + nevem;
    }
    else{
        kiirom.innerHTML ="átmentél " + nevem;

    }
    console.log(jegy, nevem);
}

function colorchanges(){
    const szinek = document.getElementsByClassName("szinchange");
for (let i = 0; i < szinek.length; i++) {
 szinek[i].style.color = "blue";
}
}
 





