/*Exercícios de interpretação de código.
1) Leia o código abaixo. Indique todas as mensagens impressas no console,
SEM EXECUTAR o programa.
const bool1 = true // declara a constante bool1 que recebe o valor booleano de true
const bool2 = false // declara a constante bool2 que recebe o valor booleano false
const bool3 = !bool2 // //bool3 recebe o inverso de bool2

let resultado = bool1 && bool2 // declara a variável resultado que recebe o valor da operação lógica E: bool1 && bool2, que retornará false pois a const bool2 tem o valor de false
console("a. ", resultado) // imprime no console a letra "a." e o valor da variável resultado, que será false 

resultado = bool1 && bool2 && bool3 // determina que o novo valor da variável resultado será o valor retornado da operação lógia E: bool1 && bool2 && bool3, que retornará false, ja que bool2 tem o valor de false
console.log("b. ", resultado) // imprime no console a letra "b." e o valor da variável resultado, que será false

resultado = !resultado && (bool1 || bool2) // determina que o novo valor da variável resultado será o valor retornado pela operação lógica OU: bool1 || bool2, que retornará true, ja que || verifica se uma das variáveis é verdadeira, no caso bool1
console.log("c. ", resultado) // imprime no console a letra "c." e o valor da variável resultado, que será true

console.log("d. ", typeof resultado) // imprime no console a letra "d." e o tipo da variável resultado, que será boolean

/*Exercícios de interpretação de código.
2) Seu colega se aproxima de você falando que o código dele não funciona como
devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso
no console*/
let primeiroNumero = prompt("Digite um número!") //declara a variável primeiroNumero que recebe o valor de um prompt, no qual o valor será dado pelo usuário
let segundoNumero = prompt("Digite outro número!") //declara a variável segudoNumero que recebe também o valor de um prompt, no qual o valor será dado pelo usuário
const soma = primeiroNumero + segundoNumero // declara a constante soma que recebe o vaor resultando da soma das variáveis primeiroNumero + segundoNumero
console.log(soma) //imprime no console o valor da constante soma

/*Exercícios de escrita de código

1) Faça um programa que:

a) Pergunte a idade do usuário;
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do
seu melhor amigo?", seguido pela resposta (true ou false)
d) Imprima no console a diferença de idade (não tem problema se sair um
número negativo)*/
let idade = prompt("Qual sua idade?")
let idadeAmigo = prompt("Qual a idade do meu melhor amigo?")
console.log(idade >= idadeAmigo)
console.log(idade !== idadeAmigo)

/*2) Faça um programa que:
a) Peça ao usuário que insira um número par;
b) Imprima no console o resto da divisão desse número por 2;
c) Teste o programa com diversos números pares. Você notou um padrão?
Escreva em um comentário de código;
d) O que acontece se o usuário inserir um número ímpar? Escreva em um
comentário de código;*/
let numeroPar = prompt("Diga um número par")
console.log(numeroPar / 2)
//Sempre vai ser divisivel por 2
//Ao adicionar um número impar, ele divide da mesma maneira.

/*3) Faça um programa que pergunte ao usuário sua idade em anos. Depois,
imprima no console.
a) A idade do usuário em meses;
b) A idade do usuário em dias;
c) A idade do usuário em horas;*/

let idadeEmAnos = prompt("Diga sua idade em anos")
let idadeEmMeses = idadeEmAnos * 12
let idadeEmDias = idadeEmMeses * 365
let idadeEmHoras = idadeEmDias * 8776
console.log("Qual sua idade em anos?", idadeEmAnos)
console.log("Qual sua idade em meses?", idadeEmMeses)
console.log("Qual sua idade em dias?", idadeEmDias)
console.log("Qual sua idade em horas?", idadeEmHoras)


/*4) Faça um programa que pergunte ao usuário dois números. Em seguida, faça as
operações e imprima no console as seguintes mensagens seguidas pelo true ou
false:
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true
obs: O true ou false vai depender dos números inseridos e do resultado das
operações.*/
let primeiroNumero = Number(prompt ("Me diz o primeiro número"))
let segundoNumero = Number(prompt ("Me diga o segundo número"))

console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo segundo?", primeiroNumero % segundoNumero === 0)
console.log("O segundo número é divisível pelo primeiro?", segundoNumero % primeiroNumero === 0)

/*1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a
unidade de temperatura entre Graus Celsius(°C), Graus Fahrenheit(°F) e Kelvin(K).
Abaixo estão duas delas:
- Graus Fahrenheit(°F) para Kelvin(K)
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
- Graus Celsius(°C) para Graus Fahrenheit (°C)
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
a) Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também;
b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também;
c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console
também;
d) Altere o último item para que o usuário insira o valor em graus Celsius que ele
deseja converter;*/
let fahrenheit = 77
let celsius = 80
let celsius2 = 30
console.log("77°F em K° é", ((KELVIN) = (fahrenheit - 32)*(5/9) + 273.15))
console.log("80° em F° é", ((GRAUS_FAHRENHEIT) = (celsius)*(9/5) + 32))
console.log("30°C em F° é", ((GRAUS_FAHRENHEIT) = (celsius2)*(9/5) + 32), "e 30 em kelvin", (Kelvin = celsius2 + 273,15))

/*2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o
consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia
custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida
por uma residência.
a) Calcule e mostre o valor a ser pago por uma residência que consuma 280
quilowatt-hora
b) Altere o programa para receber mais um valor: a porcentagem de desconto.
Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de
desconto*/
let quilowattH = 0.05
let consumo = quilowattH * 280
console.log("280 horas de consumo vai resultar em", consumo, "reais, com desconto de 15% fica em", (consumo * 15 / 100 -14))

/*3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que
existem para representar a mesma coisa. Por exemplo, para representar a Massa de
um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar
Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções:
litro (l), galão (gal), xícaras (xic). Dada essa introdução, faça o que se pede:
a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um
programa que converta 20lb para kg. Imprima a resposta no console da seguinte
forma: 20lb equivalem a X kg*/
let libra = 20
let kilogramaEmLibra = 0.453592
console.log("Vinte libras em kg equivale a", libra / kilogramaEmLibra, "kg")
/*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um
programa que converta 10.5oz para kg. Imprima a resposta no console da seguinte
forma: 10.5oz equivalem a X kg*/
let onca = 10.5
let kgEmOnca = 35.274
console.log("10.5oz equivale a", onca / kgEmOnca, "kg")
/*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa
que converta 100mi para m. Imprima a resposta no console da
seguinte forma: 100mi equivalem a X m*/
let milha = 100
let metrosEmMilha = 1609.34
console.log("100mi equivalem a", milha * metrosEmMilha, "metros")
/*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa
que converta 50ft para m. Imprima a resposta no console da seguinte forma:
50ft equivalem a X m*/
let pes = 50
let metroEmFt = 0.3048
console.log("50ft equiavale a ", pes * metroEmFt, "metros")
/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa
que converta 103.56gal para litro. Imprima a resposta no console da seguinte forma:
103.56gal equivalem a X l*/
let gal = 103.56
let litroParaGalao = 3.78541
console.log("103.56gal equivale a", gal * litroParaGalao, "litros")
/*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa
que converta 450xic para litro. Imprima a resposta no console da seguinte forma:
450 xic equivalem a X l*/
let xic = 450
let litroParaXicara = 0.24
console.log("450 xic equivalem a", xic * litroParaXicara, "litros")
/*g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele
peça ao usuário o valor da unidade original antes de converter*/
let metros = prompt("Diga quantos metros você quer converter para pés(ft)")
let metrosEmFt1 = metros * 3.281
console.log("Diga quantos metros você quer converter para pés(ft)?", metrosEmFt1)