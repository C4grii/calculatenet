function icramasrafhesap() {

var icra= parseFloat(document.getElementById("icra").value)

var oran= 5

var toplammasraf= icra * (oran / 100)

document.getElementById("icrasonuc").innerText= "İcra Masrafı: " + toplammasraf.toFixed(2) + " TL"

}