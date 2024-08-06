function hukukiSureHesapla() {
    
var tarih = new Date(document.getElementById("tarihInput").value);
    
var sure = parseInt(document.getElementById("sureInput").value);
    
var sureTur = document.getElementById("sureTurInput").value;

if (sureTur === "gun") {
        
tarih.setDate(tarih.getDate() + sure);
    
} else if (sureTur === "hafta") {
        
tarih.setDate(tarih.getDate() + (sure * 7));
    
} else if (sureTur === "ay") {
        
tarih.setMonth(tarih.getMonth() + sure);
    
}

var simdikiTarih = new Date();

var fark = tarih.getTime() - simdikiTarih.getTime();

var kalanGun = Math.ceil(fark / (1000 * 3600 * 24)); 


document.getElementById("hukukiSureSonuc").innerText = "Sürenin bitmesine " + kalanGun + " gün kaldı.";
}