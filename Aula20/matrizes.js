/* O que é?

Uma matriz é um array bidimensional ou multidimensional, onde os elementos são
organizados em linhas e colunas.

● A linha é o índice da matriz principal.
● A coluna é o índice do array dentro da matriz.

let matriz1 = [linha]x[coluna]     let matriz2 = []x[]x[]
Array bidimensional                Array tridimensional

Exemplo de matriz 2 x 3 (2 linhas, 3 colunas):
let matriz = [
    [1, 2, 3]   ----- linha 1
    [4, 5, 6]   ----- linha 2
]    |  |  |
     |  |  |
   1°|2°|3°| colunas 
Aqui, a matriz tem duas linhas e três colunas. Podemos acessar seus elementos
usando dois índices, por exemplo, matriz[0][1] retornará 2.

DECLARANDO MATRIZES
° Inicializando 
Declarando uma matriz diretamente.
let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]
console.log(matriz)

Criando uma matriz vazia e preenchendo posteriormente:
let matriz = [0]
    matriz[0] = [1, 2, 3],
    matriz[1] = [4, 5, 6],
    matriz[2] = [7, 8, 9]
]
No primeiro colchete irá os índices das linhas.

°Acessando Elementos de uma Matriz
Para acessar um elemento específico em uma matriz, usamos dois índices: o
primeiro para a linha e o segundo para a coluna.

let matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]
console.log(matriz[0][2]) //Retorna 30
console.log(matriz[2][1]) //Retorna 80
OBS: O primeiro [] é linha e o segundo coluna.

°Exercícios
a) Crie uma matriz 3x3 que representa um tabuleiro de jogo da velha vazio, onde
todas as células são inicializadas com 0.
b) Acesse o elemento na posição da segunda linha e terceira coluna e altere o valor
para 1.
c) Exiba a matriz completa no console. */

/*let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
matriz[1][2] = 1
console.log(matriz) */

/*PERCORRENDO UMA MATRIZ
°Acessando Elementos de uma Matriz 
Para percorrer uma matriz e acessar todos os seus elementos, podemos usar dois
loops aninhados. Um loop percorre as linhas e o outro as colunas.*/
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
//loop que percorre a linha, matriz.lenght retorna 3
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}

/*OPERAÇÕES COM MATRIZES
Soma de todos os elementos da matriz */
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let soma = 0
for(let i = 0; i < matriz1.length; i++){
    for(let j = 0; j < matriz1[i].length; j++){
        soma += matriz1[i][j]
    }
}
console.log(`Soma dos elementos fica ${soma}`) //Resultado 45

/* °Alterar um valor específico:

matriz[1][2] = 99; // Alterando o valor da segunda linha, terceira coluna

°Multiplicar cada elemento por um valor: */
let matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
    matriz2[i][j]*=2
    }
    }
console.log(matriz2)
//2. Percorrendo uma Matriz
//a) Crie uma matriz 4x4 e preencha-a com números inteiros de 1 a 16.
let matriz4X4 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
//b) Crie uma função que percorre a matriz e calcula a soma de todos os elementos.
let soma1 = 0
for(let i = 0; i < matriz4X4.length; i++){
    for(let j = 0; j < matriz4X4[i].length; j++){
        soma1 += matriz4X4[i][j]
    }
}
//c) Exiba o resultado da soma no console.
console.log(`Soma dos elementos fica ${soma1}`)

/*3. Jogo de Batalha Naval
Objetivo: Afundar todos os navios.
a) Criar uma matriz bidimensional onde cada célula será inicializada como 0
(representando água).
b) Criar uma função para posicionar os navios, células com navio serão marcadas
com 1.
c) Criar uma função que permite ao jogador escolher uma célula, verificando se é um
acerto (navio), erro (água) ou posição já escolhida.
d) Criar um laço (loop) para permitir que o jogador continue atacando até que todos
os navios sejam afundados. Podemos contar quantos navios restam e encerrar o
jogo quando o jogador os afundar todos. */
let navio = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let numero = Number(prompt("Diga um número"))