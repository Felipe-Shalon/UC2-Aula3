/* O que é?

Uma matriz é um array bidimensional ou multidimensional, onde os elementos são
organizados em linhas e colunas.

● A linha é o índice da matriz principal.
● A coluna é o índice do array dentro da matriz.

let matriz1 = [linha]   x   [coluna] let matriz2 = []x[]x[]
Array bidimensional         Array tridimensional

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
°Acessando Elementos de uma Matriz */

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