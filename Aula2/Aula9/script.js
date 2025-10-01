/*Operadores Lógicos

● São operadores especiais usados entre booleanos

● Retornam um valor booleano

● Existem 3 importantes:
Operador E: &&
Operador Ou: ||
Operador Não/Negação:!

Operador E (&&)

Retorna true se, e somente se, os todos booleanos envolvidos também forem true.

true && true // resultado = true
true && false // resultado = false
false && true // resultado = false
false && false // resultado = false*/

/*const interruptor1 = true
const interruptor2 = true

const resultado = interruptor1 && interruptor2
console.log(resultado)*/

//Exercícios

/*Antes de começar, crie 3 variáveis: a, b e c.
Atribua os valores true, false e true, respectivamente a = true, b = false e c = true.*/

//1. Realize a operação: a && b
/*const interrupetorA = true
const interrupetorB = false
const resultad = interrupetorA && interrupetorB
console.log(resultad)

//2. Realize a operação: b && c
const interruptorB = false
const interruptorC = true
const resul = interruptorB && interruptorC
console.log(resul)

//3. Realize a operação: a && c
const interrupitorA = true
const interrupitorC = true
const res = interrupitorA && interrupitorC
console.log(res)

//4. Realize a operação: a && b && c
const interrupA = true
const interrupC = true
const result = interrupA && interrupC
console.log(result)*/

/*Operador OU ( || )

Retorna false se, e somente se, todos booleanos envolvidos também forem false.

true || true // resultado = true
true || false // resultado = true
false || true // resultado = true
false || false // resultado = false

Exercícios

Antes de começar, crie 3 variáveis: a, b e c.
Atribua os valores true, false e true, respectivamente a= true, b = false, c = true.*/

//1. Realize a operação: a || b.
/*const variavelA = true
const variavelB = false
const resultado1 = variavelA || variavelB
console.log(resultado1)*/

//2. Realize a operação: b || c.
/*const variavelB = true
const variavelC = true
const resultado2 = variavelB || variavelC
console.log(resultado2)*/

//3. Realize a operação: a || c.
/*const variavelA = true
const variavelC = true
const resultado3 = variavelA || variavelC
console.log(resultado3)*/

//4. Realize a operação: a || b || c
/*const variavelA = true
const variavelB = true
const variavelC = true
const resultado4 = variavelA || variavelB || variavelC
console.log(resultado4)*/

/*Operador NÃO ( ! )

Sempre retorna o booleano oposto.

!true // resultado = false
!false // resultado = true*/

/*Exercícios
Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano
atual e mostre:
● O nome da pessoa
● A idade dessa pessoa
● Um true ou false que diz se ela é maior de idade
● Quantos anos ela terá em 2050
Nome: Lais ; Idade: 23 ; É maior de idade? True ; Idade em 2050: 52 */

let nome = prompt("Qual é seu nome?")
let anoNascimento = Number(prompt("Qual seu ano de nascimento"))
let idade = Number(prompt("Qual sua idade?"))


console.log("Nome", nome)



