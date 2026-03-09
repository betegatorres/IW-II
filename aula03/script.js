//Exercicio 1
alert("Bem-vindo ao sistema!");


//Exercicio 2
let nome = prompt("Digite seu nome:");
alert("Olá, " + nome + "!");


//Exercicio 3
let idade = prompt("Digite sua idade:");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}


//Exercicio 4
let resposta = confirm("Deseja continuar?");

if (resposta == true) {
    alert("Você escolheu continuar");
} else {
    alert("Você escolheu cancelar");
}


//Exercicio 5
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let soma = num1 + num2;

alert("A soma é: " + soma);


//Exercicio 6
let numero = Number(prompt("Digite um número:"));

let dobro = numero * 2;

alert("O dobro é: " + dobro);


//Exercicio 7
let nome2 = prompt("Digite seu nome:");
let idade2 = prompt("Digite sua idade:");

alert("Olá " + nome2 + ", você tem " + idade2 + " anos!");
