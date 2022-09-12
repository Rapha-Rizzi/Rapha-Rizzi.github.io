
let idade = parseInt(prompt('digite sua idade para saber se vai pagar o ingresso'));
let valorIngresso = 40

if (idade <= 7 && idade < 15) {
    let porcentagem = 0.3;

    document.getElementById('sete').innerHTML = ´ Essa idade nao paga ingresso $(idade), entao voce pagara ${ porcentagem * 100 }% do valor do ingresso, que ficara R$ ${ valorIngresso * porcentagem }, 00``
}
else if (idade < 15) {
    document.getElementById('crianca7').innerHTML = 'Seu ingresso paga 30%';
}
else if (idade < 20) {
    document.getElementById('jovemmaior7menor15').innerHTML = 'Seu ingresso paga 50%';
}
else if (idade < 60) {
    document.getElementById('jovemmaiorigual15menor20s').innerHTML = 'Seu ingresso é 100%';
}
else if (idade >= 60) {
    document.getElementById('adultomaiorigua20menor65').innerHTML = 'Seu ingresso paga 40%';
}

else if (idade != NaN) {
    document.getElementById('quintus').innerHTML = 'voce nao digitou sua idade correta';
}