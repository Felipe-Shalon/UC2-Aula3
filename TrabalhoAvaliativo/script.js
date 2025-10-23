/*DESAFIO1 - A ESCOLHA DA FERRAMENTA
Você precisa minerar um tipo de bloco, e a escolha da ferramenta correta
afeta a velocidade.
1. Crie uma variável const (ou let) para cada material, atribuindo um peso
numérico de 0 a 100 para sua velocidade de mineração (ex:
velocidadeDiamante = 80;): velocidadeMadeira, velocidadePedra,
velocidadeFerro, velocidadeDiamante.
2. Crie uma variável let (ou const) chamada blocoMinerar e atribua o tipo
de material que ela representa (ex: "Pedra", "Madeira", "Obsidiana",
"Minério de Diamante").
3. Crie uma estrutura if/else if/else que simule a melhor ferramenta a ser
escolhida com base no bloco: Se blocoMinerar for "Minério de
Diamante" ou "Obsidiana", imprima: "Use Picareta de Diamante:
Velocidade X!" (Use a variável de velocidade). Se for "Pedra", imprima:
"Picareta de Ferro ou Pedra é o ideal: Velocidade Y!". Caso contrário
(qualquer outro bloco), imprima: "Qualquer ferramenta funciona, mas a
de Madeira é a mais simples."*/
const velocidadeMadeira = 30
const velocidadePedra = 50
const velocidadeFerro = 70
const velocidadeDiamante = 90

//variavel para perguntar ao usuário a escolha de um dos minérios
let blocoMinerar = prompt("Escolha algum minério básico ou material: Madeira, Pedra, Ferro ou Diamante.")

//estrutura para definir qual a melhor ferramenta conforme escolha do usuário
if (blocoMinerar === "Diamante") {
    console.log(`Use a Picareta de Diamante: Velocidade ${velocidadeDiamante}`)
} else if (blocoMinerar === "Pedra") {
    console.log(`Picareta de Ferro ou Pedra é o ideal: Velocidade ${velocidadeFerro}`)
} else if (blocoMinerar === "Ferro") {
    console.log(`Picareta de Pedra ou Feero é o ideal: Velocidade ${velocidadeFerro}`)    
} else {
    console.log(`Qualquer ferramenta funciona, mas a de Madeira é a mais simples: Velocidade ${velocidadeMadeira}`)
}


/*DESAFIO2 - O CÁLCULO DE DANO
Você está em combate contra um Creeper e precisa calcular o dano.
1. Crie 4 variáveis let para armazenar os valores iniciais: danoEspada = 6;
(dano base), forcaEncantamento = 1.5; (multiplicador),
armaduraInimiga = 2; (redução de dano), vidaInimiga = 20; (Creeper
tem 20 pontos de vida)
2. Calcule o Dano Bruto: Dano Bruto = danoEspada * forcaEncantamento.
3. Calcule o Dano Final: Dano Final = Dano Bruto - armaduraInimiga.
4. Atualize a Vida Inimiga usando o operador de atribuição de subtração
(-=) com o Dano Final.
5. Comparação Final: Use o operador de comparação (<=) para verificar
se a vidaInimiga está menor ou igual a 0. Se for verdadeiro, imprima:
"O Creeper foi derrotado! Você sobreviveu à explosão!". Caso contrário,
imprima: "O Creeper ainda está vivo com X de vida. Corra!". (Substitua
X pela vida atual).*/
let danoEspada = 6          // let criadas confome pedido pelo enunciado
let forcaEncantamento = 1.5
let armaduraInimiga = 2
let vidaInimiga = 20

let danoBruto = danoEspada * forcaEncantamento // let danoBruto = danoEspada (6) * forcaEncantamento(1.5) = 9
let danoFinal = danoBruto - armaduraInimiga // let danoFinal = danoBruto(9) - armaduraInimiga(2) = 7
let resultado = vidaInimiga - danoFinal // let resultado = vidaInimiga(20) - danoFinal(7) = 13

if (resultado <= 0){
    console.log("O creeper foi derrotado! Você sobreviveu a explosão!")
}else{
    console.log("O Creeper ainda está vivo com", resultado, "de vida. Corra!")
} //como o resultado ficou 13, o creeper sobreviveu, pois não é um resultado menor ou igual a 0

/*DESAFIO3 - O CRAFTING
Para criar um item importante, você precisa de uma combinação específica
de recursos no seu inventário.
1. Crie as seguintes variáveis (com valores de sua escolha): const
temDiamantes = true; let nivelMesaCrafting = 2; const temGravetos =
false; let temFerro = 10;
2. Crie uma única estrutura condicional que só permite o crafting da
Picareta de Diamante se: Você NÃO tiver temGravetos OU se o
nivelMesaCrafting for menor que 3. E Você tiver temDiamantes
VERDADEIRO E a quantidade de temFerro for maior ou igual a 8.
3. Se a condição for atendida, imprima: "Picareta de Diamante criada!
Hora de buscar Obsidiana!". Caso contrário, imprima: "Faltam recursos
ou as condições de crafting não são atendidas!".*/

const temDiamantes = false
let nivelMesaCrafting = 10
const temGravetos = true
let temFerro = 15
//Se tiver temGravetos OU nivelMesaCrafting menor que 3 = permitido o crafting
//temDiamantes for True e a quantidade de temFerro for maior/igual 8 = permitido crafting

if (temGravetos || nivelMesaCrafting < 3){ // || : OR - falso se ambos os operadores forem falsos.
    (temDiamantes && temFerro >= 8) //&& : AND - verdadeiro se ambos os operandos forem verdadeiros.
    console.log("Picareta de diamante criada! Hora de buscar Obsidiana!")
}else{
    console.log("Falta recursos ou as condições de crafting não são atendidas!")
}
