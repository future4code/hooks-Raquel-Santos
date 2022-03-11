
/* - EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1.B - RESPOSTA: 
Nome: Amanda Rangel, apelido: Mandi (índice no array [0])
Nome: Laís peta, apelido: Laura (índice no array [1])
Nome: Letícia Chico, apelido: chijo (índice no array [2])



2.  A - RESPOSTA 
   Vai ser Impresso no console: Amanda Rangel, Laís petra, Letícia Chijo.
  
3. A - RESPOSTA 
 
(2) [{…}, {…}]
0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
1: {nome: 'Laís Petra', apelido: 'Laura'}
length: 2
[[Prototype]]: Array(0)

*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 


//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens
//abaixo utilizando as funções de array *map* e *filter:

/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //A) Crie um novo array que contenha apenas o nome 
 //dos doguinhos

let nomeDoguinhos = pets.map((item) => {
return item.raca 

})
console.log(nomeDoguinhos)


//B. Crie um novo array apenas com os [cachorros salsicha]

let doguinhoSalsicha = pets.filter((item)  => {
return item.raca === 'Salsicha'

})
console.log(doguinhoSalsicha)



//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
 //A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

 const mensagemDesconto = pets.filter((item ) => {
return item.raca === 'Poodle'

 })

 const filtrandoPoodles = pets.filter((item) => {
    return item.raca === 'Podlle'
})

const promocao = filtrandoPoodles.map ((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`


})
console.logo(promocao) */

//2. Dado o seguinte array de produtos, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item

let nomeItem = produtos.map ((produto) => {
    return produto.nome
})
console.log(produtos)

 //B. Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
 //aplicando 5% de desconto em todos eles

let descontoItem = produtos.map((item) => {
    return {nome: item.nome, preco: item.preco *0.95}

})

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

let categoriaBebidas = produtos.filter ((bebida) => {
return bebida.categoria === 'Bebidas'

}) 

console.log(categoriaBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

let nomeYpe = produtos.filter((produtosYpe) => {
return produtosYpe.nome.includes('Ipê')

})

console.log(nomeYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

let fraseYpe = nomeYpe.filter((Ype) => {
return `Comprem ${Ype.nome} por ${Ype.preco}!`

})
console.log(fraseYpe)