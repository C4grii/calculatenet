function vekalethesapla() {

var vekaletucret= parseFloat(document.getElementById("vekaletucret").value)

var ucretoran= 10

var toplam= vekaletucret * (ucretoran / 100)

document.getElementById("vekaletsonuc").innerText= "Vekalet Ücreti: " + toplam.toFixed(2) + "TL"
}