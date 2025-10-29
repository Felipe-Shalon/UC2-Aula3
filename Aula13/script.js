/*{Exercícios de Fixação}
Exercícios de interpretação de código
1.O que o código abaixo está fazendo? Qual o resultado
impresso no console?
O código está executando um laço de repetição (for) que itera 5 vezes, de i = 0 até i = 4.
Em cada iteração, ele soma o valor atual de i à variável valor.
O código imprime o valor final da variável valor, que é a soma de $0 + 1 + 2 + 3 + 4. */
/*let valor = 0
for (let i = 0; i < 5; i++){
    valor += i
}
console.log(valor)
//2. Leia o código:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista){
    if (numero > 18){
        console.log(numero)
    }
}*/
/*a) O que vai ser impresso no console?
Vai imprimir os números da lista maiores que 18 = 19, 21, 23, 25, 27, 30
b) Se eu quisesse acessar o índice de cada elemento dessa
lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?*/

/*3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
let quantidadeTotal = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
Exercícios de escrita de código
1.Pergunte ao usuário quantos bichinhos de estimação ele
tem e guarde esse dado em uma variável.
a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
b) Se a quantidade for maior que 0, solicite que o usuário digite
os nomes deles, um por um, e guarde esses nomes em um array.
c) Por fim, imprima o array com os nomes dos bichinhos no console.*/
let qntdBichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))
let nomeDosBichos = []
if (qntdBichosEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet.")
} else {
    for (let i = 0; i < qntdBichosEstimacao; i++){
        let nome = prompt(`Digite o nome do seu bichinho ${i + 1}`)
        nomeDosBichos.push(nome)
    }
    console.log("Os nomes dos seus pets são: ", nomeDosBichos)
}
/*Exercícios de escrita de código
2.Considere que você tenha acesso a um array (chamado de 'array original') que é
composto somente de números. Baseando-se nisso, crie um programa para cada um
dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que imprime cada um dos valores do array original.
b) Escreva um programa que imprime cada um dos valores do array original
divididos por 10
c) Escreva um programa que crie um novo array contendo, somente, os números
pares do array original e imprima esse novo array
d) Escreva um programa que crie um novo array contendo strings, da seguinte
forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
e) Escreva um programa que imprima no console o maior e o menor
números contidos no array original*/
const arrayOriginal = [5, 10, 15, 20, 25]
const novoArray = []
console.log(arrayOriginal)
for (let arrays of arrayOriginal){
    console.log(arrays / 10)
}