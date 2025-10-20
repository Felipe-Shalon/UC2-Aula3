/*Exercícios de interpretação de código

1. Indique todas as mensagens impressas no console, SEM EXECUTAR o
programa.*/

let array // declara a váriavel array
console.log('a.', array) // imprime no console a letra a e o valor da variavel array: "a. undefined"

array = null // a variavel array recebe o valor null
console.log('b. ', array) // imprime no console a letra b e o valor da variavel array: "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // a variavel array agora se torna um array e recebe a lista [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // imprime no console a letra c e o valor do tamanho do array chamado array: "c. 11"

let i = 0 // declara a variavel i que recebe o valor de 0
console.log('d. ', array[i]) // imprime no console a letra d e o item de indice i do array, (i = 0) portannto: d. 3

array[i+1] = 19 // define que o item de indice i + 1 agora tem o valor de 19
console.log('e. ', array) // imprime no console a letra e e o valor de array: "e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]" 

const valor = array[i+6] // declara a constante valor, que recebe o valor do item de indice 6 do array
console.log('f. ', valor) // imprime no console a letra f e o valor da constante valor: 9


// atividade 2

const frase = prompt("Digite uma frase") // declara a constante frase que recebe um prompt que irá pedir para o usuário digitar uma frase
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // primeiro, imprime no console a frase que foi armazenada na constante frase com todas letras maiusculas e com todas letras A substituidas por letras I e depois imprime no console o tamanho da frase
// se a entrada do usúario for "subi num õnibus em Marrocos" o resultado no console seria "SUBI NUM ÕNIBUS EM MIRROCOS"

/*Exercícios de escrita de código

3. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida,
Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o),
`nomeDoUsuario`! */
const nomeDoUsuario = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log("O email", email, "foi cadastrado com sucesso. Seja bem vindo", nomeDoUsuario)

/*4. Faça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, uma embaixo da outra.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a
segunda comida da sua lista pela inserida pelo usuário. Imprima no console a
nova lista*/
let comidasFavoritas = ["Pizza", "Strogonoff", "Lasanha", "churrasco", "Pudim"]
console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas favoritas:\n${comidasFavoritas[0]}\n${comidasFavoritas[1]}\n${comidasFavoritas[2]}\n${comidasFavoritas[3]}\n${comidasFavoritas[4]}`)

let comidaFavoritaUsuario = prompt("Diga a sua comida favorita:")
comidasFavoritas.splice(1, 1, comidaFavoritaUsuario)
console.log(comidasFavoritas)

/*5. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`.
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
uma por uma, no array.
c) Imprima o array no console.
d) Peça ao usuário que digite o índice da tarefa que ele já realizou: 0, 1 ou 2.
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console.*/
let listaDeTarefas = []
let tarefa1 = prompt("Diga uma tarefa que você precise realizar no dia:")
let tarefa2 = prompt("Diga mais uma tarefa que você precise realizar no dia:")
let tarefa3 = prompt("Diga uma última tarefa que você precise realizar no dia:")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

let tarefasRealizadas = prompt("Diga o índice da tarefa que você já realizou (0, 1, 2):")
listaDeTarefas.splice(tarefasRealizadas, 1)
console.log(listaDeTarefas)