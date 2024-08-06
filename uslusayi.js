function uslusayihesapla() {

var taban = parseInt(document.getElementById("taban").value)
    
var kuvvet = parseInt(document.getElementById("kuvvet").value)

var sonuc = Math.pow(taban, kuvvet);

document.getElementById("notify").innerText= "Sonuç :"+sonuc

}