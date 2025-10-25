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
while(i<=3){ //enquanto a condição for verdade, que no caso é o i<=9
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
/*let numero
let soma = 0
while(numero!==0){
    numero = Number(prompt("Digite um número."))
    soma += numero
}
console.log("O resultado é:", soma)*/
//ele vai ficar somando todos os números digitados,
//quando for colocado 0 ele encerra, mostrando o resultado final da soma dos números digitados

//===Do While primeiro executa a ação, depois testa condição
//while testa condição e fica em looping (rever em casa diferença entre do while e while)
/*let c = 1 //definição de variável e valor
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
for (let i = 0; i < 6; i++) {
    if (meusNumeros < meusNumeros[i]) {
        maiorNumero = meusNumeros[i]
    }
} 
console.log(maiorNumero)