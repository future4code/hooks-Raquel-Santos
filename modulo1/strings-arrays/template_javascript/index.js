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

const nome = prompt ('Qual é o seu nome?')
const email = prompt ('Qual é o seu email?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja Bem-vindo(a) ${nome}`)

/*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

*/

const minhasComidasPreferidas = ['Frango', 'Arroz', 'Lasanha', 'mortadela', 'Bacon', 'Pudim']
console.log(`${minhasComidasPreferidas}`)
console.log(`Essas são minhas comidas preferidas:\n1-${minhasComidasPreferidas[0]})\n2-${minhasComidasPreferidas[1]}\n2-${minhasComidasPreferidas[2]}\n3-${minhasComidasPreferidas[3]}\n4-${minhasComidasPreferidas[4]}\n5-${minhasComidasPreferidas[5]} `)


const usuarioComida = prompt (`Qual a sua comida preferida?`)
let i = 1
minhasComidasPreferidas[i] = usuarioComida
console.log(`${usuarioComida}`)

/* 3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console
*/

const listaDeTarefas = []
const tarefas = prompt (`Insira uma tarefa`)
console.log(tarefas)
const tarefas1 = prompt (`Insira uma tarefa`)
console.log(tarefas1)
const tarefas2 = prompt (`Insira uma tarefa`)
console.log(tarefas2)
listaDeTarefas.push(tarefas, tarefas1, tarefas2)
const digiteUmaTarefa = prompt (`Quais tarefas já foram feitas?`)
listaDeTarefas.splice(Number(digiteUmaTarefa),1)
