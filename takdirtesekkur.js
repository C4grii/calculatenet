function ortalamahesap() {

var puan= document.getElementById("ortalama").value

if(puan <70){

document.getElementById("alert").innerText= "Hiçbir belge almaya hak kazanamıyorsunuz."    
}else if(puan >= 70 && puan <= 83){

document.getElementById("alert").innerText= "Tebrikler ! Teşekkür Belgesi Almaya Hak Kazandınız."    
}else if(puan >=84){

document.getElementById("alert").innerText= "Tebrikler ! Takdir Belgesi Almaya Hak Kazandınız."    

document.getElementById("sorgula").addEventListener("click", ortalamahesap)

}

}