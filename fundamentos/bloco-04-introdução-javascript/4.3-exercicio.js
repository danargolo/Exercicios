

// --- 1 ---
// Crie um algoritmo que retorne o fatorial de 10.

let num = 10
let fatorial = 1

for (let r = 1; r <= num; r += 1){
  fatorial *= r 
}

console.log(fatorial)

// --- 2 ---
// Desenvolva um algoritmo que é capaz de inverter uma palavra.

let word = "melancia"

let split = word.split("");

let invert = split.reverse();

let join = invert.join("")

console.log(join);
