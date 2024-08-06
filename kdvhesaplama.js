function kdvhesap() {
    
var kdvdeger = parseFloat(document.getElementById("kdvdeger").value);
    
var kdvRate = parseFloat(document.getElementById('kdvRate').value);
    
var tutar = (kdvdeger * kdvRate) / 100;
    
var toplamtutar = kdvdeger + tutar;
    
document.getElementById("result").innerText = "KDV Tutarı: " + tutar.toFixed(2) + " TL Toplam Tutar: " + toplamtutar.toFixed(2) + " TL";

}
