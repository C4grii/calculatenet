function kiraVergisiHesapla() {
    
var gelir = parseFloat(document.getElementById("gelirInput").value);
    
var kiraVergisiOrani = 0.2; 
    
var kiraVergisi = gelir * kiraVergisiOrani;

document.getElementById("kiraVergisiSonuc").innerText = "Ödemeniz gereken kira vergisi: " + kiraVergisi.toFixed(2) + " TL";
}