//Exercícios de escrita de código
//EX.1) Construa um programa, seguindo os seguintes passos:
//1. Declare uma variável para armazenar um nome, sem atribuir um valor.
let nome
//2. Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade
//3. Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log(typeof (nome))
console.log(typeof (idade))
/*4. Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
A variavel ficou como undefined pois são váriaveis indefinidas*/
//5. Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
let nome1 = prompt("Qual seu nome?")
let idade1 = Number(prompt("Qual sua idade?"))
//6. Imprima na tela o tipo dessas variáveis. Escreva em um comentário de código.
console.log(typeof(nome1))
console.log(typeof(idade1))
/*7. Para finalizar, imprima na tela a mensagem: "Olá `nome`, você tem `idade` anos". Onde
`nome` e `idade` são os valores que o usuário inseriu.*/
console.log("Nome do usuário é", nome1, "e sua idade", idade1, "anos")

/*Exercícios de escrita de código
/*2) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma
variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:*/
let pergunta1 = prompt("Você gosta de futebol?")
let pergunta2 = prompt("Você torce para um time do RS?")
let pergunta3 = prompt("Você torce para o Grêmio?")
//a) Crie três novas variáveis, contendo as respostas.
let resposta1 = pergunta1
let resposta2 = pergunta2
let resposta3 = pergunta3
/*b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
Você está usando uma roupa azul hoje? - SIM*/
console.log("Você gosta de futebol?", resposta1, ". Você torce para um time do RS", resposta2, ". Você torce para o Grêmio?", resposta3)

/*3) Suponha que temos duas variáveis a e b, cada uma com um valor inicial.
let a = 10
let b = 25
Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b`
passe a ter o valor de `a`. Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b`
passaria a ser 10.*/