/*STRINGS E ARRAYS
O que são Strings?

Como vimos anteriormente, Strings são os tipos referentes à textos.
Temos 3 maneiras de escrever uma string:
● Aspas Duplas: "Olá Mundo"
● Aspas Simples: 'Olá Mundo'
● Crase (Template String ou Template Literals): `Olá Mundo`

---Concatenação.
Também podemos juntar várias strings para formar uma nova.
Chamamos esse processo de concatenação e utilizamos o sinal de + para fazê-lo.
const nome = "Lucas"
const idade = 32                 //colocar espaço entre as palavras e crases
const frase = " Meu nome é " + nome + " e tenho " + idade + " anos " 

---Template.
Não há diferença entre usar aspas simples ou duplas!
A única diferente é a Template String, pois ela nos permite colocar variáveis
javascript no meio da string.
const nome = "Lucas"
const idade = 32
const frase = `Meu nome é ${nome} e tenho ${idade} anos`
// Meu nome é Lucas e tenho 32 anos

Exercícios
1. Crie um programa que peça ao usuário para inserir o seu nome e sua cor
favorita e imprima a mensagem:
"A cor favorita de FULANO é COR: "
2. Realize o exercícios duas vezes. Utilizando template strings e concatenação.*/
const nome = prompt("Qual seu nome?")
const cor = prompt("Qual sua cor favorita?")
console.log(" O nome do usuário é " + nome + " e sua cor favorita é " + cor )

const nome2 = prompt("Qual sua cor favorita?")
const cor2 = prompt("Qual sua cor favorita?")
console.log(`O nome do usuário é ${nome2} e a cor favorita dele é ${cor2}`)

/*PROTÓTIPO DE STRINGS

O javascript nos fornece algumas informações (propriedades) e ações (métodos)
que podemos realizar sobre uma string.

Será falado algumas delas na aula, mas se quiser conhecer mais, pode visitar o
site do W3Schools que é referência em desenvolvimento web.

https://www.w3schools.com/Jsref/jsref_obj_string.asp*/