let num =  Number(prompt("par ou impar? Digite um número: "));
if (isNaN(num)) {
    alert("Pô o número aí não é numero")
}
else if (num % 2 == 0) {
    alert("Pô o número aí é par")
} 
else
alert("Pô o número aí é ímpar");


alert("Exercicio 2");
let idade = Number(prompt("Digite sua idade: "));
if (idade < 18)
    alert("Menor de idade")
else
    alert("Maior de idade")

    alert("Exercício 3")
for (let i = 1; i <= 10; i++) {
    alert(i)
}


alert ("exercicio 4")
num = Number(prompt("Contagem regressiva a partir de: "))
while (num !=-1) {
    alert(num)
    num--;
}


alert ("exercício 5")
num = Number(prompt("tabuada do numero: "));
for (let i = 0; i < 11; i++) {
    alert(num + " * " + i + " = " + i*num)
} 


alert ("exercício 6")
num = Number(prompt("somatória do numero: "));
for (let i = 0; i <= num; i++) {
    alert(num + " + " + i + " = " + (i+num));
}


alert("Exercício 7")
let numerop = prompt("Digite um número:");
let primo = true;

for (let i = 2; i < numerop; i++) {
  if (numerop % i == 0) {
    primo = false;
  }
}

if (primo) {
  alert("O número é primo");
} else {
  alert("O número não é primo");
}


alert("Exercício 8")
let usuario = prompt("nome do usuário: ")
let senha = prompt("senha: ")

while (usuario != "Matheus" || senha != "1211") {

    if (usuario != "Matheus") {
        alert("Usuário errado")
    }

    if (senha != "1211") {
        alert("Senha errada")
    }

    usuario = prompt("Digite o nome do usuário denovo:")
    senha = prompt("Digite a senha dnv:")
}
alert("Login deu certo")

//9. Soma de Números Positivos

alert("Exercício 10")
let numeroa = Math.floor(Math.random() * 10) + 1
let palpite = prompt("Adivinhe o número de 1 a 10")

while(palpite != numeroa){

    if(palpite > numeroa){
        alert("O número e menor")
    }

    if(palpite < numeroa){
        alert("O número e maior")
    }

    palpite = prompt("Tente novamente")
}
alert("Você acertou")


alert("Exercício 11")
let numfa = prompt("Fatorial do numero: ")
let fatorial = 1

for(let i = 1 ; i <= numfa; i++){ 
    fatorial = fatorial * i
}
alert("O fatorial é:" + fatorial) 

// 12- Validação de Nota






alert("Exercício 13")
alert("Digite suas notas")
let nota1 = Number(prompt ("Digite a primeira nota:"))
let nota2 = Number(prompt ("Digite a segunda nota:"))
let nota3 = Number(prompt ("Digite a terceira nota:"))

let somam = (nota1 + nota2 + nota3) 
let media1 = somam / 3
alert("A sua média é: "+media1)

if(media1 >= 7){
    alert("Você foi aprovado")
}else{
    alert("Você foi reprovado")
}