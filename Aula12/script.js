/*INTRODUÇÃO
Compramos uma pizza de 6 fatias!
Queremos comer ela inteira.
condição: Tem fatia?
Ação: comer fatia

{
comerFatia
comerFatia
comerFatia
comerFatia      //Essa é a forma que ficaria em outro modo
comerFatia
comerFatia
}

Programar é 
A ----------> B

Estrutura de controle - Sequencial 
   A
(     )
   ↓
(     )
   ↓
(     )
   B

===CONDIÇÕES
Condições 
             A
verdadeiro   ↓  falso    //Isso é criar um caminho até a resposta
           Teste
             B



*/
/*let i = 0 //começo
while(i<=3){ //enquanto a condição for verdade, que no caso é o i<=3
//tem que ter em mente que o 0 conta, então se quer repetir quatro vezes tem de ser <=3, igual menor que três,
//pois fica 0<=3, 1<=3, 2<=3 e 3<=3, todos são true, então fica quatro comparações
    console.log("Loop:", i)
    i++ //incrementa o iterador, sempre colocar ele
}
console.log("Chegou ao final do código")

let estomago = 0 //começo
while(estomago < 100){
    console.log("Quero comer mais coxinhas.", estomago)
    estomago = estomago + 10 //valor do estomago vai receber o valor dele (0) + 10 até se aproximar de 100
}   //outra maneira de simplificar é estomago+= 10*/
/*Quero comer mais coxinhas. 0
Quero comer mais coxinhas. 10
Quero comer mais coxinhas. 20
Quero comer mais coxinhas. 30
Quero comer mais coxinhas. 40
Quero comer mais coxinhas. 50
Quero comer mais coxinhas. 60
Quero comer mais coxinhas. 70
Quero comer mais coxinhas. 80
Quero comer mais coxinhas. 90

{Exercícios - While}
1. Soma de números
No nosso sistema, o usuário será solicitado para inserir
vários números, um após o outro. Quando ele digitar o
número '0', devemos parar de solicitar novos inputs e
imprimir no console a soma de todos os números por ele
indicados
Ex.: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
O resultado deve ser: 70 */
let numero
let soma = 0
while(numero!==0){
    numero = Number(prompt("Digite um número."))
    soma += numero
}
console.log("O resultado é:", soma)
//ele vai ficar somando todos os números digitados,
//quando for colocado 0 ele encerra, mostrando o resultado final da soma dos números digitados

//===Do While primeiro executa a ação, depois testa condição
//while testa condição e fica em looping (rever em casa diferença entre Do While e while)
let c = 1 //definição de variável e valor
do{ //repetição do while
console.log("O valor de C é:", c)
c++ //ação
}while(c <= 6)//condição*/

/*===For (incio; teste; incr){
}                                 */
/*for (let i = 0; i<=9; i++){
    console.log("O valor de i é:", i)
}
*/ /*
let meuArray = [10, 4, 7, 8, 200, 77]
for(let i=0; i<6; i++){ //i<6 pede para conferir se todos os número são menores que 0, pois i=0
    console.log(meuArray[i]) //i é 0 então ele vai imprimir todos os valores da array
} */

/*{Exercícios - for}
Escreva um programa que receba um array com números e
devolva qual o maior dentro dele.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser:
"O maior número é 18" */
let meusNumeros = [10, 20, 30, 40, 50, 60]
let maiorNumero = 0
for (let i = 0; i < meusNumeros.length; i++) {
    if (maiorNumero < meusNumeros[i]) {
        maiorNumero = meusNumeros[i]
    }
} 
console.log(maiorNumero)
/*Escreva um programa que receba um array com números e
devolva qual a soma dos números pares.

Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "A
soma dos números pares é 44”*/
let numeros = [11, 12, 13, 14, 15, 16]
let somaPares = 0
for (let i = 0; i < numeros.length; i++){  //numeros.lenght garante que o loop percorra todo o array
    if (numeros[i] % 2 === 0){   //verifica se é par divindo por 2
        somaPares = somaPares + numeros[i] //acumula o valor dos pares
    }
}
console.log(`A soma dos números pares sé ${somaPares}`)

/*TIPOS DE REPETIÇÕES
---FOR OF FOR
Uma forma de simplificar a leitura dos elementos do array
é utilizando o loop for...of...

O loop for...of percorre arrays e objetos, alocando o valor
de cada posição do array em uma variável, permitindo
executar alguma ação para cada valor distinto.


const numeros = '["14", 67, 89, 15, 23]' Quantidade de repetições: tamanho do array (5) //pois restou 5 numeros
for (let numero"" of numeros''){ //numero requer a apenas um numero da const, e numeros aos demais
console.log(numero)

const numeros = '[14, "67", 89, 15, 23]'
for (let numero"" of numeros''){
console.log(numero)}//67
EXEMPLOS*/
const numbers = [100, 7, 4, 8, 10, 3, 20, 777,]
for(let number of numbers){
    console.log(number)
    console.log("O número é: ", number)
}
/*{Exercícios - for of}
Considere que você tem um array com várias palavras.
Nossa tarefa é criar um programa para imprimi-las em
uma só mensagem colocando um espaço entre elas.

Ex: Para este array ["Oi", "sumido", "tudo", "bem?",
"Saudades"], dar a mensagem "Oi sumido tudo bem?
Saudades"*/
const palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let frase = " "
for (let palavra of palavras){
    frase += palavra + " "
}
console.log(frase)

/*Recrie o exercício da soma de números pares utilizando
for of.
O programa recebe um array com números e devolve qual
a soma dos números pares.
Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "A
soma dos números pares é 44” */
let numerosArray = [11, 15, 18, 14, 12, 13]
let somaDosPares = 0
for (let i = 0; i <= 5; i++){ //percorre diretamente cada valor do array(sem precisar de indice i)
    if (meuArray[i] % 2 === 0){ //verifica se o número é par
        somaDosPares += meuArray[i] //soma dos pares
    }
}
console.log(`A soma dos números pares equivale a ${somaDosPares}`)
/*Encontrar as Palavras Mais Longas em um Array
Dado um array de palavras, use um loop for...of para
encontrar e armazenar as palavras que têm o maior
comprimento.
Armazene as palavras mais longas em um array chamado
palavrasMaisLongas.
Se houver mais de uma palavra com o maior comprimento,
inclua todas.*/
/*
const palavras = ["sol", "mar", "montanha", "nuvem", "floresta", "lua"]
let maiorPalavra = 0
let palavrasMaisLongas = [] //começa vazio e é atualizado conforme encontra palavras maiores.
for (let palavra of palavras){
    if (palavra.length > maiorPalavra){ //encontrou uma palavra mais longa --> atualiza
        maiorPalavra = palavra.length
        palavrasMaisLongas = [palavra]
    } else if (palavra.length === maiorPalavra){ //tem o mesmo tamanho da maior --> adiciona
        palavrasMaisLongas.push(palavra)//se outra palavra tem o mesmo comprimento, ela é adicionada com .push
    }
}
console.log("Palavras mais longas:", palavrasMaisLongas)
*/

let num = 100 // numero digitado
let somaNum = 0 // armazena o valor da zoma

while(num != 0){ // enquanto o numero digitado for diferente de zero
    num = Number(prompt("Digite um número"))// pergunta numero pro usuario
    somaNum += num; // soma o valor digitado
}//final do loop acabou

console.log(somaNum) //exibir o soma total da soma
