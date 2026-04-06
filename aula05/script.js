// a) Crie uma função que receba dois números e retorne o maior deles
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

if (num1 > num2) {
  alert("O maior número é: " + num1);
} else if (num2 > num1) {
  alert("O maior número é: " + num2);
} else {
  alert("Os dois números são iguais.");
}



// b) Escreva uma função que receba um número e retorne true se ele for par e false caso contrário
let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
  alert("true");
} else {
  alert("false");
}

// c) Desenvolva uma função que calcule o fatorial de um número
let number = Number(prompt("Digite um número para o fatorial:"));
let fatorial = 1;

for (let i = 1; i <= number; i++) {
  fatorial *= i;
}

alert("O fatorial de " + number + " é " + fatorial);



// d) Crie uma função que receba uma lista de números e retorne a média deles
let quantidade = Number(prompt("Quantos números você quer digitar?"));
let soma = 0;

for (let i = 1; i <= quantidade; i++) {
  let valor = Number(prompt("Digite o número " + i + ":"));
  soma += valor;
}

let media = soma / quantidade;

alert("A média é: " + media);



// e) Implemente uma função que converta uma temperatura de Celsius para Fahrenheit
let celsius = Number(prompt("Digite a temperatura em Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;

alert("Temperatura em Fahrenheit: " + fahrenheit);