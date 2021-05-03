var scelta = prompt("pari o dispari");
var sceltaNumero = parseInt(prompt("scegli un numero da 1 a 5"));

console.log(scelta);
console.log(sceltaNumero);

function numeroRaddom(min, max) {
    var numero = Math.random() * (max - min) + min;
    return numero.toFixed();
  }

var numeroPc=parseInt(numeroRaddom(1, 6));
console.log(numeroPc);
function pari(num1, num2) {
        var sommaNumeri = num1 + num2; 
        var pari= true;
        if (sommaNumeri %2 == 0) {
            var pari= true;
        }
        return pari;
}

document.getElementById("scelta_utente").innerHTML= scelta;
document.getElementById("numero_utente").innerHTML=sceltaNumero;
document.getElementById("numero_generato").innerHTML= numeroPc;

if(scelta == pari) {
    document.writeln("Hai vinto!");
} else {
    document.writeln("Hai perso!");
}
