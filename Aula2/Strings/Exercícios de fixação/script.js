/*Exercícios de interpretação de código

1. Indique todas as mensagens impressas no console, SEM EXECUTAR o
programa.
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.lenght)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)*/

//----Exercícios de interpretação de código
//2. Leia o código abaixo com atenção
/*const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase(). replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//SUBI NUM ÔNIBUS EM MIRROCOS - 27
//Letras minusculuas subtituidas por maiuscula (toUpperCase), subtituição da letra A por I e o tamanho da string.

/*----Exercícios de escrita de código
3. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o),
`nomeDoUsuario`!*/
/*const nomeUsuario = prompt ("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log(" O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vindo(a), " + nomeUsuario)

/*Exercícios de escrita de código
4. Faça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:*/
const comidas = ["lasanha", "pizza", "xis", "hamburguer", "batata frita"]
//a) Imprima no console o array completo
console.log(comidas)
/*b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, uma embaixo da outra.*/
const frase = " Essas são as minhas comidas preferidas " + comidas
console.log(frase)
/*c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a
segunda comida da sua lista pela inserida pelo usuário. Imprima no console a
nova lista*/
const pergunta = prompt("Qual sua comidade preferida?")


/*5. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`.
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
uma por uma, no array.
c) Imprima o array no console.
d) Peça ao usuário que digite o índice da tarefa que ele já realizou: 0, 1 ou 2.
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console.*/