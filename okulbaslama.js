function okulsorgu() {

var age= document.getElementById("yas").value

if(age >=5){

document.getElementById("uyari").innerText= "Yaşınız okula başlamak için uygundur. En kısa süre içinde başvurunuz."    
}else {

document.getElementById("uyari").innerText= "Yaşınız okula başvurmak için henüz uygun değildir."    

document.getElementById("sorgula").addEventListener("click", okulsorgu)

}

}