/*Exercícios de interpretação de código
1.Leia o código.
a) O que vai ser impresso no console?*/
function minhaFuncao(variavel) {
    return variavel * 5
}
console.log(minhaFuncao(2)) //Vai imprimir 2 * 5 resultando em 10
console.log(minhaFuncao(10))//Vai imprimir 10 * 5 resultando em 50
/*
b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2)
e minhaFuncao(10)? O que apareceria no console?
Não vai ser exibido nada.

2. Leia o código:
a. Explique o que essa função faz e qual é sua utilidade */
//Pede pro usuário digitar um texto
let textoDoUsuario = prompt("Insira um texto")
//toLowerCase converte todos os caracteres em String letras minúsculas
//includes determina se "cenoura" pode ser encontrado dentro de outra string, retornando true ou false
const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) //Traz o true ou false se "cenoura" foi encontrado dentro do string

/*b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
i. Eu gosto de cenoura //TRUE
ii. CENOURA é bom pra vista //TRUE
iii. Cenouras crescem na terra //TRUE PQ CENOURAs

/*3. Crie uma função para cada uma das operações básicas (soma, subtração,
multiplicação e divisão). Em seguida, peça para o usuário inserir dois
números e chame essas 4 funções com esses valores inputados pelo
usuário sendo o argumento. Por fim, mostre no console o resultado das
operações: 
Numeros Inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */
let num1 = Number(prompt("Digite o num1."))
let num2 = Number(prompt("Digite o num2."))
function soma(num1, num2){
    return num1+num2
}
console.log("Números inseridos:", num1, num2)
console.log("Soma:", soma(num1, num2))
console.log("Diferença:", num1 - num2)
console.log("Multiplicação:", num1 * num2)
console.log("Divisão:", num1 / num2)

/*Exercícios de escrita de código
1.Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
informações sobre você, como:
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante"

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
Lembrando que a função não possui entradas, apenas imprime essa mensagem. */