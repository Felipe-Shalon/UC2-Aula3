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

https://www.w3schools.com/Jsref/jsref_obj_string.aspPropriedade 

---Propiedade length
A propriedade length nos diz qual é o tamanho de uma string, incluindo espaços.

const nome = "Prof Lucas Alves”
console.log(nome.length) // 16

---Método toLowerCase()
O método toLowerCase() transforma todas as letras da sua string em minúsculas

const frase = "OieEeEee!"
const fraseMaiuscula = frase.toLowerCase() // fraseMaiuscula = oieeeeee!

---Método toUpperCase()
O método toUpperCase() transforma todas as letras da sua string em maiúsculas.

const frase = "OieEeEee!"
const fraseMinuscula = frase.toLowerCase() // fraseMinuscula = oieeeeee!

---Método trim()
O método trim() retira os espaços que existem antes e depois da sua string.
Útil em formulários como por exemplo de login!

const email = " LGFALVES@senacrs.com.br "
console.log(email.trim())  // "LGFALVES@senacrs.com.br"

---Método includes(caracteres)
O método includes(caracteres) determina se um conjunto de caracteres pode ser
encontrado dentro de outra string, retornando true ou false.

const frase = "Hoje comi cenoura"
frase.includes("cenoura") // true
frase.includes("batata") // false

---Método replaceAll(chars1, chars2)
O método replaceAll(chars1, chars2) troca todas as ocorrências de um conjunto
de caracteres (chars1) por alguma outra coisa (chars2)

const frase = "Hoje comi cenoura, adoro cenoura"
const novaFrase = frase.replaceAll("cenoura","batata") // novaFrase = Hoje comi batata, adoro batata

---Exercícios
Peça para o usuário escrever uma frase e imprima no console a frase alterada,
com:
● Todas as letras maiúsculas;
● Na língua do i (substituindo a vogal "o" por "i");
● O tamanho da frase.

Resumo
Existem 3 Maneiras de escrever Strings:
Aspas duplas, Aspas simples e Crase;

Formando novas Strings:
Concatenação e Template Strings;

Protótipo de Strings:
length, toLowerCase(), toUpperCase(), trim(), includes(caracteres) e
replaceAll(chars1, chars2).

ARRAYS
O que são arrays?

Arrays nada mais são do que listas de elementos.
Será armazenado mais de uma coisa dentro de uma variável.
Ex: lista de compras, lista de alunos, lista de números da loteria, lista
telefônica...

No javascript, usamos colchetes [] para agrupar os itens de uma lista:
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]

Podemos colocar elementos de qualquer tipo que vimos até agora dentro de um
array!
Números, strings e booleanos.
Também podemos ter elementos de tipos diferentes dentro de um mesmo array
const meuArray = ["banana", 15, true]

---Acessando um elemento

Em um array, acessamos os elementos através da posição(índice) deles na lista!
Funciona como se fosse uma lista numerada:
Lista de Compras
1. Abacate
2. Banana
3. Tomate
Qual é o item na posição 2? Resposta: Banana

Mas no caso dos arrays, a numeração não começa no 1, mas sim no 0!
Para acessar um item, colocamos a sua posição (índice)
entre colchetes após o nome do array

Lista de Compras
0. Abacate
1. Banana
2. Tomate

const listaDeCompras = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras[2] // "Tomate"

---Exercícios
1. Crie um array com pelo menos 5 raças de cachorro.
2. Peça para o usuário inserir um número de 0 a 4 e Imprima no console a raça
correspondente à posição escolhida pelo usuário.

---Resumo
Arrays são listas que podem conter elementos de qualquer tipo (strings,
números, etc).
Para acessar um elemento de um array, utilizamos a sua posição (ou índice).

PROTÓTIPO DE ARRAYS

---Propriedade length
A propriedade length nos diz qual é a quantidade de itens de um array.

const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length) // 3

---Método includes(elemento)
O método includes(elemento) determina se um array contém um determinado
elemento, retornando true ou false

const seriesBoas = ["Vikings", "The Big Bang Theory"]
seriesBoas.includes("Vikings") // true
seriesBoas.includes("Game of Thrones") // false

---Método push(elemento)

O método push(elemento) adiciona um ou mais elementos ao final de um array
const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]
numeros.push(5, 6, 7)
console.log(numeros) // [1, 2, 3, 4, 5, 6, 7]

---Método pop()
O método pop() remove o último elemento de um array

const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes) // ["palhaço", "mandarim"]

---Método splice(i, n)
O método splice(i, n) remove n (n representa a quantidade) elementos à partir da
posição i do array.

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6 7

letras.splice(2, 1)
// letras = ["A", "B", "D", "E", "F", "G", "H"]
// índices (i) 0 1 2 3 4 5 6

letras.splice(3, 2) // letras = ["A", "B", "D", "G", "H"]

---Exercícios

Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.

1. Determine o tamanho do array.

2. Adicione o número 7.

3. Remova os números 4 e 5.

4. Determine o novo tamanho do array.

---Resumo
Arrays são listas de elementos que podem ter qualquer tipo.
Agrupamos esses itens usando colchetes [].
Acessamos um item pelo índice (ou seja, sua posição na lista)
Protótipo de Arrays:
length, includes(), push(elemento), pop() e splice(i, n);*/