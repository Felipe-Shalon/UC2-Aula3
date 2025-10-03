/*Aula sobre comparadores
● Comparadores são operadores que permitem comparar o valor das
variáveis entre si.

● São eles:

Igual: ===
Diferente: !==
Maior e maior igual: > e >=
Menor e menor igual: < e <=*/

/*  ===

Verifica se o valor e o tipo são iguais.*/
console.log("1"==="2")
console.log("2"==="2")
console.log(2==="2")

/*!==

verifica se o valor e o tipo são diferentes*/
console.log("1"!=="2")
console.log("2"!=="2")
console.log(2!=="2")

/*> e >=

● Pode ser usado com numbers.

● >=: retorna true se os números envolvidos forem iguais ou se o primeiro for
maior que o segundo.

● >: retorna true só se o primeiro for maior que o segundo.*/
console.log(1>2)//false, pq 1 é menor que 2
console.log(2>2)//false, pq 2 é igual a 2
console.log(3>2)//true, pq 3 é maior que 2

console.log(1>=2)//false, pq 1 é menor que 2
console.log(2>=2)//true, pq 2 é igual a 2
console.log(3>=2)//true, pq 3 é maior que 2

/*< e <=

● Também pode ser usado com numbers.

● <=: retorna true se os números envolvidos forem iguais ou se o primeiro é
menor que o segundo.

● <: retorna true só se o primeiro é menor que o segundo.*/

console.log(1<2)//true, porque 1 é menor que 2
console.log(2<2)//false, porque 2 é igual a 2
console.log(3<2)//false, porque 3 é maior que 2

console.log(1<=2)//true, porque 1 é menor que 2
console.log(2<=2)//true, porque 2 é igual a 2
console.log(3<=2)//false, porque 3 é maior que 2

/*Exercícios

Crie duas variáveis que guardem dois números. Imprima na tela as seguintes
mensagens:*/
let numero1 = 10
let numero2 = 15
//1. O primeiro número é igual ao segundo? True/False
console.log("O primeiro número é igual ao segundo?", numero1===numero2)
//2. O primeiro número é diferente do segundo? True/False
console.log("O primeiro número é diferente do segundo?", numero1!==numero2)
//3. O primeiro número é maior que o segundo? True/False
console.log("O primeiro número é maior que o segundo?,", numero1>numero2)
//4. O primeiro número é menor que o segundo? True/False
console.log("O primeiro número é menor que o segundo?", numero1<numero2)