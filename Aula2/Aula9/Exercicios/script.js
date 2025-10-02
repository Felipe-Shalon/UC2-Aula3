//Exercicios de fixação
const bool1 = true // declara a constante bool1 que recebe o valor booleano de true
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
let primeiroNumero = prompt("Digite um número!") // declara a variável primeiroNumero que recebe o valor de um prompt, no qual o valor será dado pelo usuário

let segundoNumero = prompt("Digite outro número!") // declara a variável segudoNumero que recebe também o valor de um prompt, no qual o valor será dado pelo usuário

const soma = primeiroNumero + segundoNumero // declara a constante soma que recebe o vaor resultando da soma das variáveis primeiroNumero + segundoNumero

console.log(soma) // imprime no console o valor da constante soma
