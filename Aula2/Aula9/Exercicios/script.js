//Exercicios de fixação
/*const bool1 = true // declara a constante bool1 que recebe o valor booleano de true
const bool2 = false // declara a constante bool2 que recebe o valor booleano false
const bool3 = !bool2 // declara a constante bool3 que recebe o valor da variavel !bool2 e o operador lógico ! inverte o valor da variavel de false para true

let resultado = bool1 && bool2 // declara a variável resultado que recebe o valor da operação lógica E: bool1 && bool2, que retornará false pois a const bool2 tem o valor de false
console("a. ", resultado) // imprime no console a letra "a." e o valor da variável resultado, que será false 

resultado = bool1 && bool2 && bool3 // determina que o novo valor da variável resultado será o valor retornado da operação lógia E: bool1 && bool2 && bool3, que retornará false, ja que bool2 tem o valor de false
console.log("b. ", resultado) // imprime no console a letra "b." e o valor da variável resultado, que será false

resultado = !resultado && (bool1 || bool2) // determina que o novo valor da variável resultado será o valor retornado pela operação lógica OU: bool1 || bool2, que retornará true, ja que || verifica se uma das variáveis é verdadeira, no caso bool1
console.log("c. ", resultado) // imprime no console a letra "c." e o valor da variável resultado, que será true

console.log("d. ", typeof resultado) // imprime no console a letra "d." e o tipo da variável resultado, que será boolean

/*Exercícios de interpretação de código.
2) Seu colega se aproxima de você falando que o código dele não funciona como
devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso
no console*/
/*let primeiroNumero = prompt("Digite um número!") // declara a variável primeiroNumero que recebe o valor de um prompt, no qual o valor será dado pelo usuário

let segundoNumero = prompt("Digite outro número!") // declara a variável segudoNumero que recebe também o valor de um prompt, no qual o valor será dado pelo usuário

const soma = primeiroNumero + segundoNumero // declara a constante soma que recebe o vaor resultando da soma das variáveis primeiroNumero + segundoNumero

console.log(soma) // imprime no console o valor da constante soma*/

/*Exercícios de escrita de código

1) Faça um programa que:

a) Pergunte a idade do usuário;
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do
seu melhor amigo?", seguido pela resposta (true ou false)
d) Imprima no console a diferença de idade (não tem problema se sair um
número negativo)*/
/*let idade = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade do meu melhor amigo?")
console.log(idade >= idadeAmigo)
console.log(idade !== idadeAmigo)*/

/*2) Faça um programa que:
a) Peça ao usuário que insira um número par;
b) Imprima no console o resto da divisão desse número por 2;
c) Teste o programa com diversos números pares. Você notou um padrão?
Escreva em um comentário de código;
d) O que acontece se o usuário inserir um número ímpar? Escreva em um
comentário de código;*/
//let numeroPar = prompt("Diga um número par")
//console.log(numeroPar / 2)
//Sempre vai ser divisivel por 2
//Ao adicionar um número impar, ele divide da mesma maneira.

/*3) Faça um programa que pergunte ao usuário sua idade em anos. Depois,
imprima no console.
a) A idade do usuário em meses;
b) A idade do usuário em dias;
c) A idade do usuário em horas;*/
/*let idadeEmMeses = prompt("Diga sua idade em meses")
let idadeEmDias = prompt("Diga sua idade em dias")
let idadeEmHoras = prompt("Diga sua idade em horas")
console.log("Qual sua idade em meses?", idadeEmMeses)
console.log("Qual sua idade em dias?", idadeEmDias)
console.log("Qual sua idade em horas?", idadeEmHoras)*/

/*4) Faça um programa que pergunte ao usuário dois números. Em seguida, faça as
operações e imprima no console as seguintes mensagens seguidas pelo true ou
false:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true
obs: O true ou false vai depender dos números inseridos e do resultado das
operações.*/
let primeiroNumero = prompt("Me diz o primeiro número")
let segundoNumero = prompt("Me diga o segundo número")
console.log("O primeiro número é divisível pelo segundo?",)
console.log("O segundo número é divisível pelo primeiro?",)

