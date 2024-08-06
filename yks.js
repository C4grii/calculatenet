function ykshesapla() {

var turkceDogru = parseInt(document.getElementById("turkcedogru").value)
    
var turkceYanlis = parseInt(document.getElementById("turkceyanlis").value)
    
var sosyalDogru = parseInt(document.getElementById("sosyaldogru").value)
    
var sosyalYanlis = parseInt(document.getElementById("sosyalyanlis").value)
    
var matematikDogru = parseInt(document.getElementById("matematikdogru").value)
    
var matematikYanlis = parseInt(document.getElementById("matematikyanlis").value)
    
var fenDogru = parseInt(document.getElementById("fendogru").value)
    
var fenYanlis = parseInt(document.getElementById("fenyanlis").value)

var toplamPuan = (turkceDogru * 1) - (turkceYanlis * 0.25) + (sosyalDogru * 1) - (sosyalYanlis * 0.25) + (matematikDogru * 1) - (matematikYanlis * 0.25) + (fenDogru * 1) - (fenYanlis * 0.25)

var mesaj= document.getElementById("mesaj").innerText= "Puanınız (Toplam Net Cinsinden): "+toplamPuan

}

