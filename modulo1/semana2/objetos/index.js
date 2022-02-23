
// EXECÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//1. A - Será impresso no console: Matheus Nachtergaele, Virginia Cavendish
// {canal: 'Globo', horario: '14h'}

//2. A-  Será impresso no console: nome: 'Juca', idade: 3, raca: 'SRD'} / {nome: 'Juba', idade: 3, raca: 'SRD'}/ {nome: 'Jubo', idade: 3, raca: 'SRD'}

// B. Essa sintaxe : é o para tribuir valor a algo

// 3. A- Séra impresso no console um booleando False
//B. a string "altura", não estava atribuida a nenhum objeto

 
// EXERCÍCIO DE ESCRITA DE  CÓDIGO 

/* 1. A -  Crie um objeto. Ele deve conter duas propriedades: nome (string) 
e apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:*/


    const pessoa1 = {
    nome: "Raquel",
    apelidos: ["Quel", "Quequel", "Quelzinha"]

    }

    function dadosDaPessoa(objeto) {
        const  novaPessoa1 = {
            ... objeto
    
    }

    console.log(`Eu me chamo ${novaPessoa1.nome}, mas pode me chamar de:
    ${novaPessoa1.apelidos[0]},
    ${novaPessoa1.apelidos[1]}, 
    ${novaPessoa1.apelidos[2]}`);
}
    
dadosDaPessoa(pessoa1)

 /* B - Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
  mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando
   como argumento o novo objeto*/

const novaPessoa1 = {
   ... pessoa1,
   apelidos: ["Dev", "Programadora", "hoooks"]
}
dadosDaPessoa(novaPessoa1)

/*2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
    b) Escreva uma função que receba esses objetos e retorne um array com as seguintes 
    informações:
    
    1. O valor de `nome`
    2. O numero de caracteres do valor `nome`
    3. O valor de `idade`
    4. O valor de `profissão`
    5. O numero de caracteres do valor `profissão`
   */

 const dados1 = {
    nome: "Roberto",
    idade: 30,
    profisao: "engenheiro" 

}

const dados2 = {
    nome: "camila",
    idade: 25,
    profissao: "advogada"

}

function receberArraays(objetos) {
    const arrays = {
        ... objetos 

    }
console.log(`O valor do nome é: ${arrays.nome}, 
o número de caracteres do valor do nome é: ${arrays.nome.length},
 o valor de idade é: ${arrays.idade}, o valor da profissão é: ${arrays.profisao},
  o número de caracteres o valor profisão é: ${arrays.profisao.length}.`);

}

receberArraays(dados1)
receberArraays(dados2)






/*3. Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    
    b) Crie três novos objetos que representem frutas de um sacolão.
     Eles devem ter as seguintes propriedades: nome (`string`) 
     e disponibilidade (`boolean` - devem começar como `true`)

   c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de
    carrinho.Invoque essa função passando os três objetos criado.
    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido 
    com três objetos.

*/


carrinho = [] 

const carrinho1 = {
    nome:"Banana",
    disponibilidade: "True",
 }

 const carrinho2 = {
    nome: "Melancia",
    disponibilidade: "false",
 }

 const carrinho3 = {
     nome: "Uva",
     disponibilidade: "true"
 }
   
 function receberFrustas(fruta) {
     carrinho.push(fruta)
    console.log(carrinho)
 }
  
 receberFrustas(carrinho1)
 receberFrustas(carrinho2)
 receberFrustas(carrinho3)
 console.log(carrinho)