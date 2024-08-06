function gelirvergisihesapla(){

var vergimatrah = parseFloat(document.getElementById("vergimatrah").value)

var vergi= 0

if(vergimatrah <=110000){

vergi = vergimatrah * 0.15    
}else if(vergimatrah <=230000){

vergi= 16500+(vergimatrah - 110000) * 0.20   
}else if(vergimatrah <=870000){

vergi= 40500+(vergimatrah - 230000) * 0.27   
}else {

vergi= 213300+(vergimatrah - 870000) * 0.35    
}

document.getElementById("tutarsonuc").innerText= "Ödemeniz Gereken Vergi: "+ vergi.toFixed(2)+ "TL"

}