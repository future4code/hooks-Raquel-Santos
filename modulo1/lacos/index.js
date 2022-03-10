// **Exercícios de interpretação de código**
    
   //Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador 
   //**para analisar e pensar sobre o resultado.** 
    
   // 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        
   // Será impresso no console o valor 10

    //2.A Leia o código abaixo:

    //a) O que vai ser impresso no console?
    // Será impresso no console: 19, 21, 23, 25,27, 30
        
    // b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
        
    //3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    // Será impresso: *, **, ***, **** (Por linha)
     

    // 2. a) Escreva um programa que imprime cada um dos valores do array original.

    const arrayOriginal=[10, 18,20, 7]

      function imprimirLista(array) {
        for (let item of array) 
        console.log(item)
    }
    imprimirLista(arrayOriginal)

    //b) Escreva um programa que imprime cada um dos valores do array original divididos por 10.

    function dividirArray() {
        for(let item of arrayOriginal) {

        numeroDivido= item /10
        console.log(numeroDivido)
        }
 }
 dividirArray()

 //c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
 
 function arrayPares(){
for(let item of arrayOriginal){
    if ((item % 2)  === 0) {
        arrayOriginal.push(item)

    }
}

}
arrayPares()
console.log(arrayOriginal)

