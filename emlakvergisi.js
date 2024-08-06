function konutvergisihesapla(){

var konutvergi= parseFloat(document.getElementById("konutvergi").value)

var vergidegeri= 1;

var toplam= (konutvergi * vergidegeri) /1000

document.getElementById("konutvergisonuc").innerText= "Ödemeniz gereken emlak vergisi tutarı: " + toplam.toFixed(2) + " TL"
}