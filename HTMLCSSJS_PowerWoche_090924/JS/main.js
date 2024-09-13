var speicherOrt = "Hallo";
let Zahl = 10;
const Satz = "Hallo Welt!";

console.log(speicherOrt);
console.log(Zahl);
console.log(Satz);

document.write(speicherOrt + "<br>");
document.write(Zahl + "<br>");
document.write(Satz);

var TestEins = 50

//              10        50
var Ergebnis = Zahl + TestEins
console.log(Ergebnis);

let N1 = 20;
let N2 = 50;

N1 += N1 // N1 = N1 + N1
console.log(N1);

//       => Falsch
let Überprüfung = N1 > N2;
console.log(Überprüfung);


let text1 = "A";
let text2 = "B";
let erg = text1 < text2;
console.log(erg);

console.log(typeof(Satz));

// Funktionsaufbau
function Addition(zahl1, zahl2) {
    var erg = zahl1 + zahl2;
    return erg;
}

// Funktionsaufruf
console.log(Addition(10,10));

// Brutto Rechner
function bruttoRechner(netto) {
    var brutto = netto * 1.19;
    return brutto
}

var nettoPreis = 125.00;
var bruttoErgebnis = bruttoRechner(nettoPreis);
console.log(bruttoErgebnis);

var zahl1 = 25;
var zahl2 = 50;

if(zahl1 < zahl2) {
    console.log("Die Bedingung ist wahr!");
}


// If-else
if(zahl1 > zahl2) {
    console.log("Die Zahl2 ist größer als die Zahl1");
} else {
    console.log("Die Bedingung war falsch!");
}


// Ternary Operator
(zahl1 > zahl2) ? console.log("Wahr!") : console.log("Falsch!");

var fahrzeug = "Boot"

if(fahrzeug == "Auto") {
    console.log("Fahr weiter!");
} 
else if (fahrzeug == "Flugzeug") {
    console.log("Flieg weiter!");
} 
else {
    console.log("Geh zu Fuß!");
}

// Switch-Case
switch(fahrzeug) {
    case "Auto":
        console.log("Fahr weiter!");
        break;
    case "Flugzeug":
        console.log("Flieg weiter!");
        break;
    case "Boot":
        console.log("Schwimm weiter");
        break;
    default:
        console.log("Geh zu Fuß");
}

var numberOne = 40;

switch(numberOne) {
    case (numberOne = 1): 
        console.log("Zahl ist 1");
        break;
    case (numberOne = 10): 
        console.log("Zahl ist 10");
        break;
    case (numberOne = 40): 
        console.log("Zahl ist 40");
        break;
    default:
        console.log("Zahl ist ungültig!");
}

// For-Schleife
for(var i = 0; i < 10; i++) {
    console.log(i);
}

// While-Schleife
var i = 0
while(i < 10) {
    console.log(i);
    i++;
}

// Do-While-Schleife
var g = 0;
do {
    console.log(g);
    g++;
} while(g < 10);


// While Übung
var zahlEins = 1;
while(zahlEins <= 6) {
    document.write(zahlEins + "<br>");
    zahlEins++;
}