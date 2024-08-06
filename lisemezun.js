function mezunhesapla() {

var ybp1 = parseFloat(document.getElementById("ybp1").value)

var ybp2 = parseFloat(document.getElementById("ybp2").value)
    
var ybp3 = parseFloat(document.getElementById("ybp3").value)
    
var sonuc = (ybp1 + ybp2 + ybp3) / 3

var bilgi= document.getElementById("stat").innerText= "Diploma Notunuz:"+sonuc

document.getElementById("sorgula").addEventListener("click", mezunhesapla)

}