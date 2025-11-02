/*Contador Simples:
Escreva um programa que use um loop for para contar de 1 a 10 e exibir cada número no
console. */
const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let numero of meusNumeros){
    if(numero <= 10){
        console.log(numero)
    }
}
/*Contador de Pares:
Modifique o programa anterior para contar apenas os números pares de 1 a 20. */
let meusNumeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let arrayPares = []
for(let numero of meusNumeros1){if(numero%2===0){arrayPares.push(numero)}}
console.log(arrayPares)

/*Tabuada:
Peça ao usuário um número usando prompt e exiba a tabuada desse número de 1 a 10
usando um loop for. */
/*let numero = Number(prompt("Digite um número."))
for(let i = 1; i <= 10, i++) {
    console.log(number * i)
}*/
/*Soma de Números:
Peça ao usuário para inserir 5 números. Use um loop for para somar esses números e exiba
o total.*/


/*Média de Notas:
Peça ao usuário para inserir as notas de 5 alunos e calcule a média. Use um loop for para
obter as notas e calcular a média.*/

/*Jogo da Forca:
Crie um simples jogo da forca. O programa deve escolher uma palavra aleatória de uma
lista e pedir ao usuário para adivinhar as letras. Mostre a palavra com as letras adivinhadas
e espaços para as não adivinhadas. Permita um número limitado de tentativas.*/

/*Validador de CPF:
Escreva um programa que peça ao usuário para inserir um CPF e use um loop para validar
os dígitos verificadores do CPF.*/

/*Simulador de Caixa Eletrônico:
Crie um simulador de caixa eletrônico onde o usuário pode inserir um valor para saque e o
programa deve calcular o menor número de cédulas necessárias (notas de 100, 50, 20, 10,
5, 2 e 1).*/

/*Ordenação de Array:
Peça ao usuário para inserir uma lista de números separados por vírgulas. Use um loop
para ordenar os números em ordem crescente sem usar métodos prontos de ordenação
(como sort()).*/