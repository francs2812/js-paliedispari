var parola = prompt("Digita una parola");

function parolaString(str) {
    var parolaString = str.split("");
    console.log(parolaString);
    var parolaArray = parolaString.reverse();
    return parolaArray;
}

var parolaInversa = parolaString(parola);
console.log(parolaInversa);

var parolaInversaIntera="";
for(var i=0; i<parolaInversa.length; i++){
   parolaInversaIntera+= parolaInversa[i];
}
console.log(parolaInversaIntera);

if (parola == parolaInversaIntera) {
    alert("è un palindroma")
} else {
    alert("non è un palindroma")
}
