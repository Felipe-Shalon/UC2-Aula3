//Exercícios de escrita de código AULA 5
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
let a = 10
let b = 25
let a = b
let b = a
console.log(a, b)

/*Desafio Opcional!
Faça um programa que receba dois números do usuário e faça as seguintes operações,
imprimindo os resultados no console da seguinte forma:
1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.
Dica: Se os resultados das operações não estiverem corretos, reflita sobre o tipo dos valores
recebidos pelo prompt.*/
let numero1 = Number(prompt("Digite o primeiro número."))
let numero2 = Number(prompt("Digite o segundo número."))
console.log("O primeiro número somado ao segundo número resulta em: ", numero1 + numero2, ". O primeiro número multiplado pelo segundo número resulta em:", numero1 * numero2)

//Exercícios AULA 6
/*Faça as seguintes operações usando o computador:
1. Somar 3 com 4*/
let valorA = 3
let valorB = 4
console.log("A soma dos valores fica", valorA + valorB)
//2. Multiplicar 3 com 5 e dividir o resultado por 2
let valor1 = 3
let valor2 = 4
console.log("Multiplicar 3 com 5 e dividir o resultado por 2 fica", valor1 * valor2 / 2)
//3. Subtrair 5 de 4 e multiplicar o resultado por -1
let valorX = 5
let valorY = 4
console.log("Subtrair 5 de 4 e multiplicar o resultado por -1 fica", valorX * valorY -1)
//4. Determinar o resto da divisão de 234 por 5
let valorC = 234
let valorD = 5
console.log("O resto da divisão de 234 por 5 fica", valorC % valorD)

//Crie duas variáveis que guardem dois números. Imprima na tela as seguintes mensagens:
let variavelA = 10
let variavelB = 15
//1. O primeiro número é igual ao segundo? True/False
console.log(variavelA === variavelB)
//2. O primeiro número é diferente do segundo? True/False
console.log(variavelA !== variavelB)
//3. O primeiro número é maior que o segundo? True/False
console.log(variavelA > variavelB)
//4. O primeiro número é menor que o segundo? True/False
console.log(variavelA < variavelB)

/*Crie as seguintes variáveis e atribua os valores iniciais:
ouroTotal: 75000, membrosTripulacao: 9, recompensaBaseLuffy: 3000000000 ,
aumentoRecompensa: 150000000, bonusExperiencia: 500, forcaTripulacao: 95.
Calcule e armazene em novas variáveis:
ouroPorMembro: O valor total do ouro dividido pelo número de membros da
tripulação.
restoOuro: O que sobra do ouro após a divisão para cada membro.
novaRecompensaLuffy: A recompensa base de Luffy somada ao aumento.
poderLuffy: Calcule um "poder" temporário multiplicando a recompensa base de Luffy
pelo bônus de experiência.
reducaoAumento: Reduza o valor do aumentoRecompensa em 50000000. Use um
operador de atribuição de subtração na própria variável aumentoRecompensa.*/
let ouroTotal = 75000
let membrosTripulacao = 9
let recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95

console.log(ouroPorMembro = ouroTotal / membroTripulacao)
console.log(restoOuro = ouroTotal % membroTripulacao)
console.log(novaRecompensaLuffy = recompensaBaseLuffy + aumentoRecompensa)
console.log(poderLuffy = recompensaBaseLuffy * bonusExperiencia)
console.log(reducaoAumento = aumentoRecompensa - 50000000)

/*Crie as variáveis e atribua valores:
forcaInimigo: 120, chanceVitoria: 0.7, limiteSegurança: 0.8, temAkumaNoMi: true
inimigoTemHaki: true, combateJusto: 'sim', combateRapido: 'sim'
Crie as seguintes variáveis lógicas (devem armazenar o resultado da comparação):
podeVencer: A forcaTripulacao é maior ou igual (>=) a forcaInimigo?
riscoAlto: A chanceVitoria é menor (<) que o limiteSeguranca?
batalhaFacil: O combateJusto é igual (==) ao combateRapido? Use a comparação simples, ignorando o tipo.
Exiba no console (console.log) o resultado de cada variavel logica.*/
let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSeguranca = 0.8
let temAkumaNoMi = true
let inimigoTemHaki = true
let combateJusto = 'sim'
let combateRapido = 'sim'

let podeVencer = forcaTripulacao >= forcaInimigo
let riscoAlto = chanceVitoria < limiteSeguranca
let batalhaFacil = combateJusto == combateRapido
console.log("Pode vencer?", podeVencer, ". Qual o risco?", riscoAlto, ". A batalha é fácil>", batalhaFacil)

/*Exercícios AULA 7
Antes de começar, crie 3 variáveis: a, b e c.
Atribua os valores true, false e true, respectivamente a = true, b = false e c = true.*/
let valA = true
let valB = false
let valC = true
//1. Realize a operação: a && b
console.log(valA && valB )
//2. Realize a operação: b && c
console.log(valB && valC)
//3. Realize a operação: a && c
console.log(valA && valC)
//4. Realize a operação: a && b && c
console.log(valA && valB && valC)
//5. Realize a operação: a || b.
console.log(valA || valB)
//6. Realize a operação: b || c.
console.log(valB || valC)
//7. Realize a operação: a || c.
console.log(valA || valC)
//8. Realize a operação: a || b || c
console.log(valA || valB || valC)

//Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre:
//● O nome da pessoa
let nome = prompt("Qual seu nome?")
let anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
let anoAtual = Number(prompt("Qual ano estamos?"))
console.log(nome, anoNascimento, anoAtual)
//● A idade dessa pessoa
console.log(idade = anoAtual - anoNascimento)
//● Um true ou false que diz se ela é maior de idade
console.log("Você é maior de idade?", idade >= 18)
//● Quantos anos ela terá em 2050
console.log("Idade em 2050 será", 2050 - anoNascimento)

//1) Faça um programa que:
//a) Pergunte a idade do usuário;
let idadeUsuario = Number(prompt("Digite sua idade."))
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
let idadeAmiga = Number(prompt("Digite a idade do seu amigo(a)."))
//c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
console.log(idadeUsuario, idadeAmiga)
console.log("Sua idade é maior que de seu amigo?", idadeUsuario > idadeAmiga)
//d) Imprima no console a diferença de idade (não tem problema se sair um número negativo)
console.log(idadeUsuario - idadeAmiga)