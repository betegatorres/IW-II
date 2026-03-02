var a = 10
var b = 20
console.log(b)
var b = 5
console.log(a,b)

var a = 10 
var b = 20
var c = a
var b = c
var a = b
console.log(a,b,c)

var a = 30 
var b = 20
var c = a+b
console.log(c)
var b = 10
console.log(b,c)
var c = a+b
console.log(a,b,c)

var a = 10
var b = a+1
var a = b+1
var b = a+1
console.log(a)
var a = b+1
console.log(a,b)




var n1 = 5*2
var n2 = 5*3
var n3 = 5*5
var mediafinal = (n1+n2+n3)/10
console.log(mediafinal)


// resposta = confirm("me de bom dia")

// if (resposta){
//     alert("voce me deu bom dia")
// }
// else{
//     alert("vc nao tem escolha, me de bom dia")
// }

msgm = prompt("Voce vai meda bom dia?")

if (msgm=="sim"){

    alert("Obrigado, bom dia pra vc tbm")
}

if (msgm=="não"){

    alert("vai fica sem bom dia tambem seu otario")
}
