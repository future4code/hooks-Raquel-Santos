/* - **EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador 
    **para analisar e pensar sobre o resultado.** 
    
    1. Leia o código abaixo:

     REPOSTA: Número úsuario: 4 % 2 = 0 *Passou no teste
  

a) Explique o que o código faz. Qual o teste que ele realiza? 
   R. O código pega o número digitado pelo usuario e teste o resto da divisão.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
   R. 4
    
c) Para que tipos de números a mensagem é "Não passou no teste"?
R. 5 

*/






 /*
 - **EXERCÍCIOS DE ESCRITA DE CÓDIGO**
    1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir
    (apenas maiores de idade).
        
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima
     no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
     
     
*/



const idadeUsuario = Number(prompt("Insira sua idade."))

 
if (idadeUsuario >= 18) {
 
 console.log("Você pode dirigir!")
}

else {
    console.log("Você não pode dirigir!")
}

/*
2.Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
Utilize o bloco if/else 
 */

 let turnoAluno = prompt("Olá, digite M se você estuda de manhã, V se estuda no período da tarde,  ou N para noturno.");

 const turno1 = "M"
 const turno2 = "V"
 const turno3 = "N"

if (tunoAluno = turno1) {
    console.log("Bom dia!");
}
if(turnoAluno =turno2) {
    console.log("Boa tarde!")

}
if(turnoAluno =turno3) {
    console.log("Boa noite!")
}

/* 
Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
Lembre-se que o switch case é como se fosse um if, 
mas ele verifica APENAS IGUALDADES ESTRITAS (===)

*/


let turnoAluno = prompt("Olá, digite M se você estuda de manhã, V se estuda no período da tarde,  ou N para noturno.").toUpperCase()

switch (turnoAluno){
    case `M`:
        console.log(`Bom dia!`)
        break
        case `V`:
        console.log(`Boa tarde`)
        break
        case `N`:
console.log(`Boa noite!`)
}





/*
 4. Considere a situação: você vai ao cinema com um amigo ou amiga, 
porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e
se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual
o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então
verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
imprima no console a mensagem: "Bom filme!", caso contrário,
imprima "Escolha outro filme :("

*/


     const generoFilme = prompt("Qual gênero de filme você quer assistir?").toUpperCase()
     const precoIngresso = Number(prompt("Qual o preço do ingresso"));

   if (generoFilme === "FANTASIA" && precoIngresso < 15) {
       console.log("Bom filme!")
   }

   else {
       console.log("Escolha outro filme :(")
   }


   // BYE :)

   