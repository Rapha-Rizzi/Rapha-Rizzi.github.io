let treino = {

    dataTreino: '06/09/2022',
    distancia: '5km',
    duracao: '26m',
    passo: 4500,
    velocidadeMedia: 10.45,
    totalCalorias: '5000 cal',
    MediaFc: 176,
    tags: ['zona sul', 'campos velho'],
    fezSol: true
}

let atividade = {

    nome: 'Raphael',
    sobrenome: 'Rizzi',
    idade: 40,
    locaNascimento: 'Brasil',
    anoNascimento: 1982,
    timeFavorito: '5000 cal',
    listaDeFilmes: 'fim do mundo',
}
// document.getElementById('atividade').innerHTML += `${atividade.nome}<br>`;
// document.getElementById('atividade').innerHTML += `${atividade.sobrenome}<br>`;
// document.getElementById('atividade').innerHTML += `${atividade.idade}<br>`;
// document.getElementById('atividade').innerHTML += `${atividade.anoNascimento}<br>`;
// document.getElementById('atividade').innerHTML += `${atividade.listaDeFilmes}`;
for (let key in atividade) {
    document.getElementById('atividade').innerHTML += `${key}:${atividade[key]}<br>`
}

let listaCompras = [
    {
        produtos: 'banana',
        preco: 1.5,
        quantidade: 2.1,
    },
    {
        produto: 'laranja',
        preco: 2,
        quantidade: 1,
    },
    {
        produto: 'arroz',
        preco: 5,
        quantidade: 2,
    }
]

let valorTotal = 0;
for (let i = 0; i < listaCompras.length; i++) {
    valorTotal = valorTotal + (listaCompras[i].preco + listaCompras[i].quantidade);
}
//for 5 repeticoes
//De/ntro for um prompt pegar produto
//Testar
//quantidade

