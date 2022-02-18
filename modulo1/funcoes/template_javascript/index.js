
/*EXERCICÍOS DE INTERPRETAÇÃO DE CÓDIGO

1. Leia o código: 

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


A) O que vai ser impresso no console?


RESPOSTA: Vai ser impresso os números 10 e 50. A váriavel foi multiplicada por 5 e o resultado foi 50. 
 Ex. A váriavel tem o valor de 2 * 5 = 10 * 5 = 50

 B)  O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? 
 O que apareceria no console?

 RESPOSTA: Não vai imprimir nada no console. 

2. LEIA O CÓDIGO 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


A. Explique o que essa função faz e qual é sua utilidade?

RESPOSTA: Essa função serve para o úsuario digitar um texto no site, retorna o valor da string como minusculo. O medoto INCLUDES 
determina se um valor encontrado na string é TRUE OR FALSE

B. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra

     RESPOSTAS:
      Eu gosto de cenoura = TRUE
      CENOURA é bom para a vista : TRUE
      Cenouras crescem na terra = FALSE


*/


/*EXERCÍCIOS DE ESCRITA DE CÓDIGO

1. Escreva as funções explicadas abaixo:

 A) função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você,
 como; */

function informacao() {

console.log(`Me chamo Raquel, tenho 25 anos, moro em PE e sou estudante`)
}

informacao()

/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string).
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:*/

function meusDados(nome, idade, cidade, profissao) {

   
    console.log(`Me chamo  ${nome}, tenho ${idade}, moro em ${cidade}, e sou ${profissao}`)
}
meusDados("Raquel", 25, "Paulista", "estudante")

/*2. Escreva as funções explicadas abaixo:

A)Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
Invoque a função e imprima no console o resultado*/

function calcular(num1, num2) {
    const resultado = num1 + num2
    return resultado 
}

//b)Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao
// segundo.

function eMaiorOuIgual(num1, num2) {
return num1 > num2 //booleano

}
console.log( eMaiorOuIgual(10, 2))

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function numeroPar(numero) {
return numero % 10 === 0 // RETORNANDO 

}
console.log(numeroPar(7)) //IMPRIMINDO

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

function stringTamanho(string) {
return `Beautiful ${string.toUpperCase()}
contem ${string.length} caracteres`
}
console.log(stringTamanho("Raquel-santos"))

//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário
// sendo o argumento. Por fim, mostre no console o resultado das operações:

const numero1 = Number(prompt(`Digite um numero, 1`));
const numero2 = Number(prompt(`Digite um nuemero, 2`));

function soma(numero1, numero2) {
    const soma = numero1 + numero2; //GLOBAL 
    return soma;
}

function subtração(numero1, numero2) {
const subtração = numero1 - numero2
return soma;
}

function multiplicação(numero1, numero2) {
    const multiplicação = numero1 * numero2
    return soma;
}

function divisão(numero1, numero2) {
    const divisão = numero1 / numero2
    return soma;
}

console.log(soma(numero1, numero2));
console.log(subtração(numero1, numero2));
console.log(multiplicação(numero1, numero2));
console.log(divisão(numero1, numero2));
console.log(soma(numero1, numero2));


