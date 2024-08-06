function askerliksorgu() {

var yas= document.getElementById("yazi").value

if(yas >= 20){

document.getElementById("message").innerText= "Askerlik için yaşınız uygundur. Askerlik şubesine müracaat ediniz."    
} else{

document.getElementById("message").innerText= "Yaşınız Askerlik için uygun değildir."    

document.getElementById("butonn").addEventListener("click", askerliksorgu)

}

}