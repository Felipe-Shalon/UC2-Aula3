/*STRINGS
°CONCATENAÇÃO
Também podemos juntar várias strings para formar uma nova.
Chamamos esse processo de concatenação e utilizamos o sinal de + para fazê-lo.*/
const nome = "Felipe"
const idade = 26
const frase = "O meu nome é " + nome + " e tenho " + idade + " anos "//colocar espaço antes e depois das ""
console.log(frase)
console.log(typeof frase)//typeof mostra o tipo da variável

/*°TEMPLATE
Não há diferença entre usar aspas simples('') ou duplas("")!

A única diferente é a Template String, pois ela nos permite colocar variáveis
javascript no meio da string.*/
const nome2 = "Felipe"
const idade2 = 27
const frase2 = `Meu nome é ${nome2} e tenho ${idade2} anos`
console.log(frase2)
console.log(typeof frase2)
/*Exercícios
1. Crie um programa que peça ao usuário para inserir o seu nome e sua cor
favorita e imprima a mensagem "A cor favorita de FULANO é COR: "
2. Realize o exercícios duas vezes. Utilizando template strings e concatenação.*/
/*let nomeUsuario = prompt("Insira seu nome")
let corUsuario = prompt("Insira sua cor favorita")
const fraseUsuario = " A cor favorita do " + nomeUsuario + " é " + corUsuario
const fraseUsuario2 = `A cor favorita do ${nomeUsuario} é ${corUsuario}`
console.log(fraseUsuario, fraseUsuario2)

/*PROTÓTIPO DE STRINGS
O javascript nos fornece algumas informações (propriedades) e ações (métodos)
que podemos realizar sobre uma string.

°PROPIEDADE LENGTH
A propriedade length nos diz qual é o tamanho de uma string, incluindo espaços.*/
const nomee = "Felipe Shalon Pruss Schunk"
console.log(nomee.length) // 26 conta letras e espaços

/*----MÉTODO toLowerCasel()
O método toLowerCase() transforma todas as letras maiuscula da sua string em minúsculas*/
const frasee = "BOM DIA"
const fraseMaiuscula = frasee.toLowerCase() // fraseMaiuscula = bom dia 
console.log(fraseMaiuscula)//Sempre usar console.log pra imprimir a frase

/*----MÉTODO toUpperCase()
O método toUpperCase() transforma todas as letras minusculas em maiuscula.*/
const frase1 = "bom dia"
const fraseMinuscula = frase1.toUpperCase()
console.log(fraseMinuscula)// fraseMinuscula = BOM DIA

/*----MÉTODO trim()
O método trim() retira os espaços que existem antes e depois da sua string.
Útil em formulários como por exemplo de login!*/
const email = "  felipeschunkoficial@hotmail.com   "
console.log(email.trim())// Ele retirou os espaços no inicio e fim ficando "felipeschunkoficial@hotmail.com"

/*----Método includes(caracteres)
O método includes(caracteres) determina se um conjunto de caracteres pode ser
encontrado dentro de outra string, retornando true ou false.*/
const fraseEx = "Hoje comi cenoura"
console.log(fraseEx.includes("cenoura")) // true
console.log(fraseEx.includes("batata")) // false

/*----Método replaceAll(chars1, chars2)
O método replaceAll(chars1, chars2) troca todas as ocorrências de um conjunto
de caracteres (chars1) por alguma outra coisa (chars2)*/
const frase3 = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase3.replaceAll("cenoura","batata")
console.log(novaFrase)
// novaFrase = Hoje comi batata, adoro batata

//Exercícios
//Peça para o usuário escrever uma frase e imprima no console a frase alterada, com:
const fraseNova = prompt("Escreva uma frase")
console.log(fraseNova)
//● Todas as letras maiúsculas
const fraseMaisculaNova = fraseNova.toUpperCase()
console.log(fraseMaisculaNova)
//● Na língua do i (substituindo a vogal "o" por "i");
const novaFrase1 = fraseNova.replaceAll("o", "i")
console.log(novaFrase1)
//● O tamanho da frase.*/
console.log(fraseNova.length)

/*ARRAYS
----O que são arrays?
Arrays são listas de elementos.
Será armazenado mais de uma coisa dentro de uma variável.
---Ex: lista de compras, lista de alunos, lista de números da loteria, lista
telefônica...

No javascript, usamos colchetes [] para agrupar os itens de uma lista:
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]

Podemos colocar elementos de qualquer tipo que vimos até agora dentro de um
array como: números, strings e booleanos.
Também podemos ter elementos de tipos diferentes dentro de um mesmo array
const meuArray = ["banana", 15, true]*/

const listaDeCompra = ["Abacate", "Banana", "Tomate"]
console.log(listaDeCompra[0])