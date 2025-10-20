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
operador de atribuição de subtração na própria variável aumentoRecompensa.
Exiba no console (console.log()) o valor de todas as variáveis calculadas.*/

let ouroTotal = 75000
let membroTripulacao = 9
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

console.log("A força da tripulação é maior ou igual a força do inimigo", podeVencer)
console.log("A chance de vitória é menor que o limite de segurança", riscoAlto)
console.log("O combate justo é igual ao combate rápido", batalhaFacil)
//console.log("Podemos vencer?" podeVencer, "o risco é alto?" riscoAlto, "a batalha é fácil?", batalhaFacil)