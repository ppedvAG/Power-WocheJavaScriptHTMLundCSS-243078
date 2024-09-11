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
