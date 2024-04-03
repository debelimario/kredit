// prvo smo dodali u html-u za svaki input on change da 
// se pozove  sljedeca funkcija/ cim se nesto promjeni
// poziva se funkcija


function racunaj() {
    iznosKreditaValue = document.getElementById("iznos").value;
    kamataValue = document.getElementById("kamata").value;
    mjesecneotplateValue = document.getElementById("mjesecne-otplate").value;

    racunanjeKamate = (iznosKreditaValue * (kamataValue * 0.01))/
    mjesecneotplateValue ;

    mjesecneOtplate = (iznosKreditaValue / mjesecneotplateValue + 
    racunanjeKamate).toFixed(2);

    document.getElementById("rata").innerHTML =
     `rata:  ${mjesecneOtplate }  €`;
    
}