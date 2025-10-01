
//Interpretação de código
/*Exercicio 1*/
let a = 10 //let cria uma variável 'a' com valor de 10 que pode ser alterada ao decorrer do programa
let b = 10 //let cria uma variável 'b' com valor de 10 que pode ser alterada ao decorrer do programa
console.log(b)//console.log imprimi o valor da variável 'b'
b = 5//váriavel 'b' de valor 5
console.log(a, b)//Imprime os valores de 'a' e 'b'.

/*Exercicio 2:*/
let d = 10 //let cria uma variável 'd' de valor 10 que pode ser alterada ao decorrer do programa
let e = 10//let cria uma variável 'e' de valor 10 que pode ser alterada ao decorrer do programa
c = d//Variável 'c' de valor igual 'b'
e = c//Variável 'e' de valor igual 'c'
d = e//Variável 'd' de valor igual 'e'
console.log(d, e, c)//Imprimi os valores das variáveis 'd', 'e' e 'c'.

//Exercício 3
let p = prompt("Quantas horas você trabalha por dia?")
//let informa uma variável 'p' onde o 'p' indica quantas horas são trabalhadas por dia
let t = prompt("Quanto você recebe por dia?")
//let informa uma variável 't' onde o 't' indica quanto se recebe por dia trabalhados.
console.log("Você recebe", t, "/", p, "por hora")
//console.log imprimi quanto a pessoa recebe por dia e por hora.
//pode-se substituir 'p' por 'horasTrabalhadas' e 't' por 'diasTrabalhados'.

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let diasTrabalhados = prompt("Quanto você recebe por dia?")
console.log("Você recebe", horasTrabalhadas, "por dia e trabalha", diasTrabalhados)

//1) Construa um programa, seguindo os seguintes passos:
//1. Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome
//2. Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade
/*3. Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando
`typeof`.*/
console.log(typeof(nome), typeof(idade))
/*4. Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de
código.
Refere-se a uma variável que foi declarada, mas ainda não recebeu um valor,
ou a um valor que é inerentemente sem definição ou não pode ser determinado/*

/*5. Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis
que acabou de criar.*/
nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

//6. Imprima na tela o tipo dessas variáveis. Escreva em um comentário de código.
// Nome e idade serão tipo String
/*7. Para finalizar, imprima na tela a mensagem: "Olá `nome`, você tem `idade` anos". Onde
`nome` e `idade` são os valores que o usuário inseriu.*/
console.log("Olá", "meu nome é", nome, "e tenho", idade, "anos")

/*Exercícios de escrita de código
2) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma
variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:*/
pergunta1 = prompt("Você tem 26 anos?")
pergunta2 = prompt("Você é baixo?")
pergunta3 = prompt("Você é vegano?")
//a) Crie três novas variáveis, contendo as respostas
resposta1 = pergunta1
resposta2 = pergunta2
resposta3 = pergunta3
/*b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por
exemplo:
Você está usando uma roupa azul hoje? - SIM*/
console.log("Você tem 26 anos?", resposta1)
console.log("Você é baixo?", resposta2)
console.log("Você é vegano?", resposta3)

/*Exercícios de escrita de código
3) Suponha que temos duas variáveis a e b, cada uma com um valor inicial.
let a = 10
let b = 25
Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b`
passe a ter o valor de `a`. Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b`
passaria a ser 10.*/

let valorA = 10
let valorB = 25
let valorC = 15

console.log(let a - c)


//Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) //O novo valor de 'a' é 25
console.log("O novo valor de b é", b) //O novo valor de 'b' é 10

/*Desafio Opcional!
Faça um programa que receba dois números do usuário e faça as seguintes operações,
imprimindo os resultados no console da seguinte forma:
1. O primeiro número somado ao segundo número resulta em: x.
let numero1 = prompt("Digite o número 1")
let numero2 = prompt("Digite o número 2")
2. O primeiro número multiplicado pelo segundo número resulta em: y.

Dica: Se os resultados das operações não estiverem corretos, reflita sobre o tipo dos valores
recebidos pelo prompt.*/

