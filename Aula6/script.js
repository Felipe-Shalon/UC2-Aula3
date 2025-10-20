/*OPERADORES ARITMÉTICOS
● Como vimos na aula passada, podemos ter variáveis que são do tipo número
● E quando falamos de números, lembramos da nossa querida matemática!
● À seguir vamos ver como fazer algumas operações básicas da matemática
no Javascript.
---Soma ( + )*/
const primeiroValor = 10
const segundoValor = 20
const resultado = primeiroValor + segundoValor + 4
console.log(resultado) // 34
//---Subtração ( - )
const primeiroValor = 10
const segundoValor = 20
const resultado = primeiroValor - segundoValor
console.log(resultado) // -10
//---Multiplicação ( * )
const primeiroValor = 10
const segundoValor = 25
const resultado = primeiroValor * segundoValor
console.log(resultado) // 250
//---Divisão ( / )
const primeiroValor = 345
const segundoValor = 10
const resultado = primeiroValor / segundoValor
console.log(resultado) // 34.5
/*---Resto da Divisão ( % )
● Existem casos em que a divisão não dá um número inteiro (sem vírgula)
● Quando acontece isso, dizemos que há um resto na divisão.
● Por exemplo: dividir 20 por 3:
Dá o resultado 6, pois 3x6 igual 18 com resto 2
20 = 3 x 6 + 2 
const restoDaDivisao = 11 % 4 (11 dividindo por 4)
console.log(restoDaDivisao) /resto da divisão é 3 pois 4x2=8 sobrando 3

● Às vezes, podemos querer alterar o valor de uma variável fazendo alguma
conta com ela própria
● Por exemplo: vamos supor que temos uma variável de idade e que a pessoa
fez aniversário

let minhaIdade = 26
minhaIdade = minhaIdade + 1

---Uma possivel simplificação
let resultado = 100
resultado = resultado + 20          resultado += 20
resultado = resultado - 10          resultado -= 10
resultado = resultado * 5           resultado *= 5
resultado = resultado / 10          resultado /= 10

/*Exercícios
Faça as seguintes operações usando o computador:
1. Somar 3 com 4*/
const valor1 = 3
const valor2 = 4
const resultado = valor1+valor2
console.log(resultado)
//2. Multiplicar 3 com 5 e dividir o resultado por 2
const valorA = 3
const valorB = 5
const valorC = 2
const res = valorA*valorB /2
console.log(res)
//3. Subtrair 5 de 4 e multiplicar o resultado por -1
const valor01 = 5
const valor02 = 4
const valor03 = -1
result = (valor01-valor02)*valor03
console.log(result)
//4. Determinar o resto da divisão de 234 por 5
const valor = 234
const valor0 = 5
const resultad = valor%valor0
console.log(resultad)
/*Resumo
Fixação de Operadores Aritméticos
● + SOMA
● - SUBTRAÇÃO
● * MULTIPLICAÇÃO
● / DIVISÃO
● % RESTO DA DIVISÃO

COMPARADORES
● Comparadores são operadores que permitem comparar o valor das variáveis entre si.
● São eles:
Igual: ===
Diferente: !==
Maior e maior igual: > e >=
Menor e menor igual: < e <=

● Quando fazemos uma comparação, o nosso resultado sempre vai ser
verdadeiro ou falso.
Exemplo: 1 é igual a 1? SIM ou NÃO? (verdadeiro ou falso)
● Por isso, resultado de uma comparação é sempre um booleano (true ou
false)
● Quando a comparação for correta, o resultado é true. Caso contrário, é
false.

---TIPOS DE COMPARADORES
===
Verifica se o valor e o tipo são iguais.
console.log("1"==="2") //false, são diferentes
console.log("2"==="2") //true, são iguais
console.log(2==="2") //false, tipo diferente

const condicao = 1 === 2
// o valor que sai da comparação
// pode ser guardado em uma variável
// nesse caso, condicao === false

!==
verifica se o valor e o tipo são diferentes*/
console.log("1"!=="2") //true, são diferentes
console.log("2"!=="2") // false, são iguais
console.log(2!=="2") // true, tipos diferentes
// const condicao = 1 !== 2 // true

/* > e >=
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
