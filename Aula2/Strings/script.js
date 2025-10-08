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
/*const fraseNova = prompt("Escreva uma frase")
console.log(fraseNova)
//● Todas as letras maiúsculas
const fraseMaisculaNova = fraseNova.toUpperCase()
console.log(fraseMaisculaNova)
//● Na língua do i (substituindo a vogal "o" por "i");
const novaFrase1 = fraseNova.replaceAll("o", "i")
console.log(novaFrase1)
//● O tamanho da frase.
console.log(fraseNova.length)*/

/*ARRAYS
----O que são arrays?
Arrays são listas de elementos.
Será armazenado mais de uma coisa dentro de uma variável.
---Ex: lista de compras, lista de alunos, lista de números da loteria, lista
telefônica...

No javascript, usamos colchetes [] para agrupar os itens de uma lista:*/
const listaDeCompras = ["batata", "alface", "queijo"]
const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
console.log(listaDeNumerosMega)

/*Podemos colocar elementos de qualquer tipo que vimos até agora dentro de um
array como: números, strings e booleanos.
Também podemos ter elementos de tipos diferentes dentro de um mesmo array*/
const meuArray = ["banana", 15, true]
const listaDeCompra = ["Abacate", "Banana", "Tomate"]
console.log(meuArray[0])

/*----Acessando um elemento
Em um array, acessamos os elementos através da posição(índice) deles na lista!
Funciona como se fosse uma lista numerada:
Lista de Compras              
1. Abacate
2. Banana                     Qual é o item na posição 2? Resposta: Banana
3. Tomate

Mas no caso dos arrays, a numeração não começa no 1, mas sim no 0!
Para acessar um item, colocamos a sua posição (índice)
entre colchetes após o nome do array*/
const listaDeCompras2 = ["Abacate", "Banana", "Tomate"]
const segundoItem = listaDeCompras2[2] // "Tomate"
console.log(segundoItem)

//Exercicios
//1. Crie um array com pelo menos 5 raças de cachorro.
const listaCachorro = ["buldogue", "poddle", "beagle", "pug", "pinscher"]
2//. Peça para o usuário inserir um número de 0 a 4 e Imprima no console a raça 
//correspondente à posição escolhida pelo usuário.
const numero = Number(prompt("Digite um numero"))
console.log(listaCachorro[numero])

/*PRÓTOTIPO DE ARRAYS

----Propriedade length
A propriedade length nos diz qual é a quantidade de itens de um array.*/
const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length) // 3

/*----Método includes(elemento)
O método includes(elemento) determina se um array contém um determinado
elemento, retornando true ou false*/
const seriesBoas = ["Vikings", "Supernatural"]
seriesBoas.includes("Vikings") // true
seriesBoas.includes("Game of Thrones") // false
console.log(seriesBoas.includes("Vikings"), seriesBoas.includes("Game of Thrones")) //true , false

/*----Método push(elemento)
O método push(elemento) adiciona um ou mais elementos ao final de um array*/
const numeros = [1, 2, 3]
numeros.push(4, 5, 6) //vou adicionar os números 4, 5 e 6
console.log(numeros) // (1, 2, 3, 4)

numeros.push(7, 8, 9)//vou adicionar os números 7, 8 e 9
console.log(numeros) // (1, 2, 3, 4, 5, 6, 7, 8, 9)

/*----Método pop()
O método pop() remove o último elemento de um array*/
const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes) // ["palhaço", "mandarim"]

const listaClubes = ["Grêmio", "Real Madrid", "Liverpool"]
listaClubes.pop()
console.log(listaClubes) //Grêmio, Real Madrid

/*----Método splice(i(indice), n(quantidade))
O método splice(i, n) remove n (quantidade) elementos à partir da
posição i(indice) do array, ra remover um valor especifico.*/
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"] //item dentro do array é igual a n = quantidade
// índices (i)   0    1    2    3    4    5    6    7 Indice é o número de cada elemento dentro do array
letras.splice(2, 1)
//o primeiro número é o item dentro do array e o segundo número é o quanto quer apagar após esse item
//como o segundo número é um, se torna excluido apenas a letra equivalente ao primeiro número
//a partir do segundo número ser maior que 1 é onde corta as letras seguintes
//sendo a letra C o número 2, e o 1 equivale a ele mesmo, acaba por ser excluido somente a letra C
console.log(letras)//letras = ["A", "B", "D", "E", "F", "G", "H"]

//Exercícios
//Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.
const numerosArray = [1 ,2, 3, 4, 5, 6]
//1. Determine o tamanho do array.
console.log(numerosArray.lenght)
//2. Adicione o número 7.
numerosArray.push(7)
//3. Remova os números 4 e 5.
numerosArray.splice(3, 2)
//4. Determine o novo tamanho do array.
console.log(numerosArray.length, numerosArray)