function arabuluculuk() {

var arabulucuucret= parseFloat(document.getElementById("arabulucuucret").value)

var anlasmazlikTuru = document.getElementById("anlasmazlikTuru").value

var oran;

if (anlasmazlikTuru === "paraKonulu") {
    
oran = 3; 

} else if (anlasmazlikTuru === "ticaretKonulu") {

oran = 5; 

}
var toplamucret= arabulucuucret * (oran / 100)

document.getElementById("arabul").innerText= "Arabuluculuk Ücreti: " + toplamucret.toFixed(2) + " TL"



}