/* FUNCOES
===>Calcular área de um retângulo
Para calcular a área de um retângulo, temos a seguinte equação:

area = altura x largura

Se vamos escrever um código para calcular a área de um retângulo
para a gente, podemos fazer algo assim: */
const altura = 2
const largura = 3
const area = altura * largura
console.log(area)
/*===>Calcular área de dois retângulos
Para calcular a área de dois retângulos, basta repetir a mesma
lógica para ambos
Retângulo 1 */
const altura1 = 2
const largura1 = 3
const area1 = altura1 * largura1
console.log(area1)
// Retângulo 2
const altura2 = 5
const largura2 = 2
const area2 = altura2 * largura2
console.log(area2)
/*Calcular área de seis retângulos
Para calcular a área de seis retângulos, basta repetir a mesma lógica para todos.

Problemas
● Copiar e colar código é chato;
● Código fica muito comprido e difícil de ler;
● Nomes de variáveis não podem repetir;
● Se precisarmos mudar a lógica, teremos que mudar em todos
os lugares do código;
● Solução: Funções!

O que são funções?
Uma função é um bloco de código que pode ser chamado (ou
invocado) a partir do seu nome. Permite reutilizar variáveis. */

//      nome da função
//           ↑
function calculaArea(altura, largura){

  //Bloco de código a ser executado
    const area = altura * largura
    console.log(area)
}
calculaArea(2, 3)//chamada da função

/*DECLARANDO FUNÇÕES
O primeiro passo para criar uma função é declará-la.
A declaração "atribui" um "bloco de código" à um "identificador" (ou um
nome)*/
function imprimirOlaMundo(){
    console.log("Olá Mundo!") //Todo o conjunto é o corpo da função
}
//function = Palavra especial que indica a declaração da função
//ImprimirOlaMundo = Identificador/nome da função
//() Parâmetros

/*Declaração vs. Execução
● Só declarar a função não executa o código
● Você pode chamar/invocar e executar a função quantas vezes
quiser
● O JavaScript permite executar a função antes da sua
declaração. Porém, isso deixa o código confuso
● Priorize declarar a função primeiro, e posteriamente
executa-lá

Exemplo
● Declaração
function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}
● Execução
imprimirOlaMundo()

Exercício
1. Crie uma função que imprima no console a frase “Bem vindo
Turma 25-2N!”

2. Crie uma função que dentro dela tem dois números e some os
números e imprima o resultado a frase (“A soma é:”, resultado)

3. Crie uma função que dentro dela tenha um número e dobre o
número e imprima o resultado ex.:(o dobro de 5 é 10);

PARÂMETROS E ARGUMENTOS
Funções podem receber entradas, e se receberem, devem ser
usadas no bloco do código dentro da função. */
function calculaArea(altura, largura){ //Parâmetros (altura, largura)
    const area = altura * largura //parâmetros sendo utilizados dentro do bloco de código
    cconsole.log(area)
}
consoleArea(2, 3) //Argumentos (2, 3)

/*"Parâmetros são como variáveis" criadas na declaração da função,
onde podemos guardar os argumentos (valores) a serem enviados
para a função

"Argumentos são os valores (strings, numbers, booleanos)" passados
na chamada da função. Cada parâmetro recebe seu valor dos
argumentos, seguindo a mesma ordem.

Exercícios
1. Crie uma função que receba por parâmetro um nome e imprima
no console a mensagem: `Olá ${nome}` . Invoque esta função 3
vezes passando os argumentos (nomes) diferentes.

2. Crie uma função que receba por parâmetro dois números e
imprima no console a mensagem: `A soma é ${soma}` . Invoque
esta função passando 2 argumentos (números) diferentes

Resumo
Uma função é um bloco de código que é executado a partir da sua
invocação.
Podem receber entradas, que devem ser usadas no meio do código
(parâmetros e argumentos).

ESCOPO
O escopo determina quais variáveis serão acessíveis ao rodarmos o
código.
No Javascript temos dois tipos de escopo:
● Escopo Global: variáveis no escopo global podem ser
acessadas de qualquer lugar do código.
● Escopo Local: variáveis no escopo local somente podem ser
acessadas dentro do escopo em que foram declaradas.
As variáveis definidas dentro de uma função possuem escopo local.

Escopo Global
pai de todos os escopos (compartilha suas variáveis com todos)

function funcao1() {

escopo local #1
pai do escopo local #2 (compartilha suas variáveis com o filho)

function funcao2() {
escopo local #2 filho do escopo local #1

}
}
*/
//Global
const a = 1 //Declaração da variável a no -escopo global-
function imprimeVariavel () {
//Local (do const ao segundo console.log)
const b = 2 //Declaração da variável b no -escopo local-
console.log('Variável a', a)//Acessando variáveis a e b dentro do escopo local
console.log('Variável b', b)//É possivel acessar ambas variáveis
}
imprimeVariavel()
console.log('Variável a', a)//Acessando variáveis a e b dentro do escopo global
console.log('Variável b', b)//Não é possível acessar variável b
/*Mas se o escopo termina?
Como utilizar o resultado da função sem usar o console.log()?
Utilizamos o Retorno.

===>Retorno
Funções podem gerar saídas, que podem ser acessadas após a execução*/
function calculaArea(altura, largura){
    const area = altura * largura
    return area // retorno da função
}
//Atribui retorno à uma variável
// calculaArea(2, 3) = chamadas
const areaCalculada = calculaArea(2, 3)
//Imprimi no console.log
console.log(calculaArea(2, 3))
/*
● O retorno acontece usando a palavra chave return, seguida
pela variável/valor a ser retornado
● Uma função só pode retornar um valor
● Quando a função retorna algo, sua execução é interrompida
  ○ Ou seja, o código escrito após o return não é executado

 Exercícios
 1. Crie uma função que receba dois números e retorne a soma
entre eles; Guarde o retorno dessa função em uma variável e
imprima no console.

2. Crie uma função que:
● Receba um array de números;
● Retorne um novo array com dois elementos:
○ o último e o primeiro número do array recebido divididos por dois.

{Funções - modelo mental}
Funciona como uma caixa preta que pode receber valores de
entrada (input/parâmetros/argumentos) e pode devolver valores
de saída (output/resultado)

Resumo
● As variáveis definidas dentro de uma função possuem escopo
local.
● As funções podem retornar valores usando return.

EXPRESSÕES DE FUNÇÕES
Expressões de funções são uma forma diferente (mas bem
parecida) de se declarar funções.
Deve ser atribuída a uma variável e é invocada da mesma forma
que a declaração, mas usando o nome da variável atribuída. */
const areaCalculada = function(altura, largura){
    const area = altura * largura
    return area
}
const areaCalculada = calculaArea(2, 3)

/*ARROW FUNCTIONS
Tipo de expressão de função com sintaxe simplificada.
Por ser uma expressão, deve ser atribuída a uma variável para ser invocada.
Invocação continua a mesma. */
const calculaArea = (altura, largura) => {
    const area = altura * largura
    return area
}
const areaCalculada = calculaArea(2, 3)

/*COMPARAÇÃO
● Declaração de função */
function somaNumeros (num1, num2) {
    return num1 + num2
}
//● Expressões de função
let somaNumeros = function(num1, num2) {
    return num1 + num2
}

let somaNumeros = (num1, num2) => {
    return num1 + num2
}

/*● A expressão de função só pode ser invocada depois da sua
declaração (const, let)
● A declaração de função pode ser chamada de qualquer parte do
código, mesmo antes de sua declaração efetiva (function)
● Mas evite usar coisas fora da ordem! O código fica bem mais
confuso

Exercícios
Refaça o exercício 2 com a sintaxe de expressão de função

Refaça o exercício 3 com a sintaxe de Arrow Function */