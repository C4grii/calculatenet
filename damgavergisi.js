function damgavergisihesapla(){

var brutgelir= parseFloat(document.getElementById("gelir").value);

var damga= 0.00759

var damgaver= brutgelir * damga

document.getElementById("damgavergisonuc").innerText= "Ödemeniz gereken damga vergisi tutarı: " + damgaver.toFixed(2) + " TL"



}