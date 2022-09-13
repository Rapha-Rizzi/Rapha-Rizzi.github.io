let produto = parseInt(prompt('Digite o produto para compra'));
let quantidade = parseInt(prompt('Digite a quantidade '));


let = i;
while (true) {

    let produto = prompt('Digite um dos produtos:\n\nlaranja bergamota');
    i++;
    listaDeProdutos.push(produto);

    produto.quantidade = prompt('Digite a quantidade');

    if (produto == null) {
        break;
    }
    listaDeProdutos = []
}
//carinho vazio
if (listaDeProdutos.lenght == 0) {
}

else {

}

prompt(digite pagina 2);
let produto = prompt('Digite um dos produtos:\n\n laranja, bergamota')

let = i;
while [true]{

    let produto = prompt('Digite um dos produtos:\n\nlaranja bergamota');
    i++;
    listaDeProdutos.push(produto);

    produto.quantidade = prompt('Digite a quantidade');

    if (produto == null) {
        break;
    }
    listaDeProdutos = []
}
//carinho vazio
if (listaDeProdutos.lenght == 0) {
}

else {

}

let produto = parseInt(prompt('Digite o produto para compra'));
let quantidade = parseInt(prompt('Digite a quantidade '));

let listaCompras = [
    {
        produto: 'laranja',
        preco: 2.00
    },
    {
        produto: 'batata',
        preco: 4.50
    },
    {
        produto: 'acucar',
        preco: 2.00
    },
    {
        produto: 'arroz',
        preco: 2.00
    },
    {
        produto: 'abacate',
        preco: 2.00
    },
]
let promptListaCompra = '';
for (let i = 0; i < listaCompras.length; i++) {
    promptListaCompra += `${i + 1} : ${listaCompras[i].compras} \n`;
}
let valorTotal = 0;
for (let i = 0; i < listaCompras.length; i++) {
    valorTotal = valorTotal + (listaCompras[i].preco + listaCompras[i].quantidade);
}