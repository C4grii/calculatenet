function otvhesap() {

var motorHacmi = document.getElementById("motor-hacmi").value;
    
var fiyat = document.getElementById("fiyat").value;
    
var sonuc = document.getElementById("tikla");

var otvOranlari = [0.45, 0.90, 1.50];

var otvOrani = otvOranlari[motorHacmi];

var otvMiktari = fiyat * otvOrani;

document.getElementById("ide").innerText= "ÖTV Tutarı: "+ otvMiktari.toFixed(2) + " TL";
}