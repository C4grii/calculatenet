function dershesapla() {

var puan1= parseFloat(document.getElementById("puan1").value)

var puan2= parseFloat(document.getElementById("puan2").value)

var puan3= parseFloat(document.getElementById("puan3").value)

var puan4= parseFloat(document.getElementById("puan4").value)

var total= (puan1 + puan2 + puan3 + puan4) /4 

document.getElementById("warning").innerText= "Puanınız:"+total

}