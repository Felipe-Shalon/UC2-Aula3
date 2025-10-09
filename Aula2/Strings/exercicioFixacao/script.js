let array // declara a váriavel array
console.log('a.', array) // imprime no console a letra 'a' e o valor da variavel array: "a. undefined"

array = null // variavel array recebe o valor null
console.log('b. ', array) // imprime no console a letra 'b' e o valor da variavel array: "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // a variavel array recebe a lista [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // imprime no console a letra 'c' e o valor do tamanho do array ficando "c. 11 "

let i = 0 // declara que a  variavel 'i' recebe o valor de 0
console.log('d. ', array[i]) // imprime no console a letra 'd' e o item de indice 'i' do array, (i = 0) portannto: d. 3

array[i+1] = 19 // define que o indice i + 1 tem valor de 19
console.log('e. ', array) // imprime no console a letra e e o valor de array: "e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]" 

const valor = array[i+6] // declara a constante valor, que recebe o valor do item de indice 6 do array
console.log('f. ', valor) // imprime no console a letra f e o valor da constante valor: 9*/

//----Exercícios de interpretação de código
//2. Leia o código abaixo com atenção
/*const frase = prompt("Digite uma frase") //declara a constante frase que recebe um prompt que irá pedir para o usuário digitar uma frase
console.log(frase.toUpperCase(). replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//SUBI NUM ÔNIBUS EM MIRROCOS - 27
//Letras minusculuas subtituidas por maiuscula (toUpperCase), subtituição da letra A por I e o tamanho da string (frase.lenght)

/*----Exercícios de escrita de código
3. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o),
`nomeDoUsuario`!*/
const nomeUsuario = prompt ("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log(" O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeUsuario)

/*Exercícios de escrita de código
4. Faça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:*/
//a) Imprima no console o array completo
/*b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, uma embaixo da outra.*/
/*c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a
segunda comida da sua lista pela inserida pelo usuário. Imprima no console a
nova lista*/
let comidas = [ "lasanha", "pizza", "xis", "hamburguer" , "churrasco" ]
console.log(comidas)
console.log("Essas são minhas comidas preferidas", "\nlasanha\nPizza\nXis\nHamburguer\nChurrasco")

const novaComida = prompt("Qual sua comida favorita?")
comidas.splice(1, 1, novaComida)
console.log(comidas)
/*5. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`.
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
uma por uma, no array.
c) Imprima o array no console.
d) Peça ao usuário que digite o índice da tarefa que ele já realizou: 0, 1 ou 2.
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console.*/
const listaDeTarefas = []
const tarefa1 = prompt("Diga sua primeira tarefa do dia")
const tarefa2 = prompt("Diga sua segunda tarefa do dia")
const tarefa3 = prompt("Diga sua terceira tarefa do dia")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

const numeroTarefa = Number(prompt("Digite o número da tarefa que você já realizou: 0, 1 ou 2"))
listaDeTarefas.splice(numeroTarefa, 1)
console.log(listaDeTarefas)

/*Desafios
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras
da frase, ignorando os espaços*/
const frase = prompt("Escreva uma frase")
const palavras = frase.split(' ')
console.log(palavras)

/*2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um
programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o
tamanho do array*/
let array1 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(array1.indexOf("Abacaxi"))
console.log(array1.length)