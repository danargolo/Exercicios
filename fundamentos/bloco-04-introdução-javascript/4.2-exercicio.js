
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// --- 1 ---
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log(numbers)

// --- 2 ---
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0

for (let index = 0; index < numbers.length; index += 1) {
    sum = sum+numbers[index];
}
console.log(sum)

// --- 3 ---
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma+numbers[index];
}
let m = soma / numbers.length;

console.log(m)

// --- 4 ---
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let adicao = 0;

for (let index = 0; index < numbers.length; index += 1) {
    adicao = adicao+numbers[index];
}
let media = adicao / numbers.length;

if (media>20){
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

// --- 5 --- 
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// console.log(Math.max.apply(null, numbers)) - Alternativa 

let maior = 0
for (let index = 0; index < numbers.length; index+= 1){
    if (numbers[index] > maior) {
        maior = numbers[index]
    }
}
console.log(maior)

// --- 6 ---
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


let impar = []

for (let index = 0; index < numbers.length; index+= 1){ 
    if (numbers[index] % 2 !== 0) {
        impar.push(numbers[index]);}
    else {
        console.log("Nenhum valor ímpar encontrado")
    }
}
console.log(impar)

// --- 7 ---
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0]

for (let index = 0; index < numbers.length; index+= 1 ) {
    if (numbers[index] < menor) {
        menor = numbers[index]
    }
}
console.log(menor)

// --- 8 --- 
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let num = []

for (let index = 1; index <= 25; index += 1 ) {
        num.push(index)
}
console.log(num)


// --- 9 ---
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.


// metade= num.map(divisor); Alternativa 

// function divisor(num)  {
//     return num / 2;
// }
// console.log(metade)

let metade = []
for (let index = 0; index < num.length; index+= 1){
    metade.push(num[index] / 2)
}
console.log(metade)