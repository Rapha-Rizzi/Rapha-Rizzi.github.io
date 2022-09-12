
let impares = [];
let pares = [];
let juntos = [];

for (let i = 0; i < 20; i++) {
    if ((i % 2) == 0) {
        pares.push(i);

    }
}
for (let i = 0; i < 20; i++) {
    if ((i % 2) == 1) {
        impares.push(i);

    }
}
juntos = pares.concat(impares)
console.log(juntos)

const MAX = 10

let pares = [];
let impapares = [];

for (let i = 0; i < MAX; i++)
    pares[i] = 2 + 1;
impares.push(2 + i + 1);

let terceiro = pares.concat(impares);
terceiro.pop();
terceiro.unshift();
terceiro.sort()