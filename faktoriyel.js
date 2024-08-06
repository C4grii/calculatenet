function faktoriyelhesapla() {

var faktoriyelsayi= document.getElementById("faktoriyelsayi").value    

var carpim= 1

for(var i= 1; i<=faktoriyelsayi; i++)

carpim *= i;

document.getElementById("notification").innerText= "Sonuç :"+ carpim+ "!"

}