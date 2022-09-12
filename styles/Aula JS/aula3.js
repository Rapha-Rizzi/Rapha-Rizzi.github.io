

let idade = parseInt(prompt('digite sua idade para saber se pode votar'));
//let idade = 50;

if (isNaN(idade)) {
   document.getElementById('quintus').innerHTML = 'voce nao digitou sua idade coretamente';
}
else if (idade < 16) {
   document.getElementById('primeiros').innerHTML = 'voce ainda nao pode votar';
}
else if (idade <= 18) {
   document.getElementById('segundos').innerHTML = 'o voto para voce é opcional';
}
else if (idade < 60) {
   document.getElementById('tercius').innerHTML = 'o voto para sr ou sra é opcional';
}
else if (idade >= 60) {
   document.getElementById('quartus').innerHTML = 'o voto para sr ou sra é opcional';
}
else if (idade != NaN) {
   document.getElementById('quartus').innerHTML = 'o voto para sr ou sra é opcional';
}
else if (idade != NaN) {
   document.getElementById('quintus').innerHTML = 'voce nao digitou sua idade correta';
}