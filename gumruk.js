function gumrukvergihesapla() {

var gonderenUlke= document.getElementById("gonderenUlke").value

var siparisTutari= parseFloat(document.getElementById("gumruk").value)

var vergiTutar= 0


if(gonderenUlke === "AB"){

vergiTutar= 0.18
}else{

vergiTutar= siparisTutari * 0.28    
}

document.getElementById("vergitutar").innerText= "Gümrük Vergisi Tutarı: " +vergiTutar.toFixed(2) + " TL"
}