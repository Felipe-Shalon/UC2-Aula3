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

/*Exercícios de escrita de código
1.Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
informações sobre você, como:
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante"
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
Lembrando que a função não possui entradas, apenas imprime essa mensagem. */
function sobreMim() {
    console.log("Eu sou Felipe, tenho 23 anos, moro em São Leopoldo (RS) e sou estudante")
}
sobreMim()

/*2. Escreva as funções explicadas abaixo:
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no
console o resultado. */
function doisNumeros(numero1, numero2) {
    const soma = numero1 + numero2
    return soma
}
console.log(doisNumeros(2, 4))
/*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o
primeiro número é maior ou igual ao segundo. */
function recebeNumeros(num1, num2) {
    return num1 >= num2
}
console.log(recebeNumeros(5, 2))
/*c) Escreva uma função que receba um número e devolva um booleano indicando se
ele é par ou não*/
function parOuImpar(numero) {
    return numero % 2 === 0
}
console.log(parOuImpar(10))
/*d) Faça uma função que recebe uma mensagem(string) como parâmetro e imprima o
tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/
let mensagem = "Boa noite"

function aMensagem(msg) {
    console.log(msg.length)
    console.log(msg.toUpperCase())
}
console.log(aMensagem(mensagem))

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

/*{Desafios}
1. Funções são trechos de códigos como quaisquer outros mas que
podemos acessá-los mais de uma vez ao longo do código através de
invocações/chamadas. Então, funções podem chamar/invocar outras
funções também. Sua tarefa é escrever duas funções

a) Escreva uma arrow function que recebe um parâmetro e imprime no
console esse parâmetro.
b) Escreva outra arrow function que recebe dois valores como parâmetros
mas nenhum retorno. Faça a soma entre esses valores e chame a sua
primeira função mandando este resultado da soma como entrada para

imprimi-lo

{Desafios}
2. Faça um Inventário de Personagem.
Escreva funções para adicionar, remover e listar os itens no inventário de um
personagem.
Crie uma função adicionarItem(inventario, item) que recebe um array inventario e uma
string item, adiciona o item ao inventário, se o inventário já tiver 5 itens, a função deve
exibir uma mensagem dizendo que o inventário está cheio e retorna o inventário
atualizado.
Crie uma função removerItem(inventario, item) que recebe um array inventario e uma
string item, remove o item do inventário, se o item não estiver no inventário, a função
deve exibir uma mensagem dizendo que o item não foi encontrado e retorna o inventário
atualizado.
Crie uma função listarItens(inventario) que recebe um array inventario, exibe todos os
itens do inventário e se o inventário estiver vazio, exibe uma mensagem
dizendo que o inventário está vazio. */