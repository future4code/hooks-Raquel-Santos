function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let contagemArray = 0
 for (let i=0;i<array.length;i++){
if (array[i] === numeroEscolhido){
contagemArray = contagemArray++
  return `O número ${numeroEscolhido} aparece ${contagemArray}x`
} else {
  return "Número não encontrado"
}

...