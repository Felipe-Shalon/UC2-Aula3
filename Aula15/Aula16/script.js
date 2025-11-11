/* 3. Crie uma função para cada uma das operações básicas (soma, subtração,
multiplicação e divisão). Em seguida, peça para o usuário inserir dois
números e chame essas 4 funções com esses valores inputados pelo
usuário sendo o argumento. Por fim, mostre no console o resultado das
operações: 
Numeros Inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */
let num1 = Number(prompt("Digite o num1."))
let num2 = Number(prompt("Digite o num2."))
function soma(num1, num2){
    return num1+num2
}
console.log("Números inseridos:", num1, num2)
console.log("Soma:", soma(num1, num2))
console.log("Diferença:", num1 - num2)
console.log("Multiplicação:", num1 * num2)
console.log("Divisão:", num1 / num2)