function vizehesap() {

var vize1= document.getElementById("vize1").value

var vize2= document.getElementById("vize2").value

var vize3= document.getElementById("vize3").value

var sonuc= vize1*0.3 + vize2*0.3 + vize3*0.4

if(sonuc <50){

document.getElementById("bilgi").innerText= "Vizeden kaldınız."    

}else{

document.getElementById("bilgi").innerText= "Tebrikler ! Vizeden Geçtiniz."    

document.getElementById("sorgula").addEventListener("click", vizehesap)

}

}