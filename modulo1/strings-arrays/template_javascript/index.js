// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO 

//1.
//A: UNDERFINE
//B: NULL
//C: 11
//D: 3
//E: 3, 19, 5,6,7,8,9,10,11,12,13
//F:9


 //2. 

// "SUBI NUM ÔNIBUS EM MIRROCOS"?


// EXECÍCIO DE ESCRITA DE CÓDIGO 

/*  
1. 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

*/

//const nome = prompt ('Qual é o seu nome?')
//const email = prompt ('Qual é o seu email?')

//console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja Bem-vindo(a) ${nome}`)

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

*/

//const minhasComidasPreferidas = ['Frango', 'Arroz', 'Lasanha', 'mortadela', 'Bacon', 'Pudim']
//console.log(`${minhasComidasPreferidas}`)
//console.log(`Essas são minhas comidas preferidas:\n1-${minhasComidasPreferidas[0]})\n2-${minhasComidasPreferidas[1]}\n2-${minhasComidasPreferidas[2]}\n3-${minhasComidasPreferidas[3]}\n4-${minhasComidasPreferidas[4]}\n5-${minhasComidasPreferidas[5]} `)


//const usuarioComida = prompt (`Qual a sua comida preferida?`)
//let i = 1
//minhasComidasPreferidas[i] = usuarioComida
//console.log(`${usuarioComida}`)

/* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console
*/

//const listaDeTarefas = []
//const tarefas = prompt (`Insira uma tarefa`)
//console.log(tarefas)
//const tarefas1 = prompt (`Insira uma tarefa`)
//console.log(tarefas1)
//const tarefas2 = prompt (`Insira uma tarefa`)
//console.log(tarefas2)
//listaDeTarefas.push(tarefas, tarefas1, tarefas2)
//const digiteUmaTarefa = prompt (`Quais tarefas já foram feitas?`)
//listaDeTarefas.splice(Number(digiteUmaTarefa),1)

//Testando 20/02/22

//const conta = Number(prompt(`Digite um número`))
//const divisao = Number (prompt(`Insira outro número`))
//const calculo = conta / divisao
//const multiplicando = conta * divisao
//console.log(calculo, multipicando)


// aqui foi pedido ao úsuario para digitar um número e em seguida esse número é dividido/muktiplicado 
// pelo segundo número digitado pelo úsuario 

/*const anoAtual = Number(prompt(`Insira o ano atual`))
const anoNascimentoUsuario = Number(prompt(`Insira o ano do seu nascimento`))
let calculandoIdadeDoUsuario = anoAtual - anoNascimentoUsuario
console.log(`Sua idade é`, calculandoIdadeDoUsuario)*/

//8. Escreva uma função que recebe duas strings e retorna um booleano (true ou false)
// indicando se elas possuem o mesmo tamanho.

//const stringUsuario1 = prompt(`Óla, insira seu mes de nascimento.`)
//const stringUsuario2 = prompt(`Agora insira seu signo:`)

//const resultadoUsuario = stringUsuario1 === stringUsuario2
//console.log(`O resultado do Booleando é:`, resultadoUsuario)


const listaDeComprasArray = ['Café', 'coca', 'suco', 'cha', 'cerveja', 'água']
const acessandoIndiceArray = listaDeComprasArray[4]
console.log('O índice do array é:', acessandoIndiceArray) // aqui foi acessado o índice 3 da lista (cha)

function numeros (numero1 , numero2) {
return calcularNumeros

}

const resultado1= (numero1, numero2) 