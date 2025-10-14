/* Atividade 1
1 -- Peça ao usuário que forneça três valores numéricos através de prompt:
Número de acessórios, número de cores e fator brilho (nota 1 a 10)/
const acessorios = Number(prompt("Qual o número de acessórios?"))
const cores = Number(prompt("Qual o número de cores?"))
const brilho = Number(prompt("Qual o nivel de fator brilho?"))
console.log(acessorios, cores, brilho)
/ 2 -- Cálculo de pontuação (aritmética): Crie uma fórmula de pontuação utilizando os
operadores aritméticos (* e +). Por exemplo:
Pontuação=(Acessóriosx5)+(coresX3)+(Fator Brilhox10)/
const pontuacaoTotal = Number(acessorios*5 + cores*3 + brilho*10)
console.log(pontuacaoTotal)
/ 3 -- Declare uma variável metaPontuação com o valor 80./
let metaPontuação = 80
/ 4 -- Utilize um operador comparador (=>) para verificar a pontuação. Se a pontuaçãoTotal
é maior ou igual á metaPontuação.
5 -- Resultado (console.log): Se for aprovado, exiba uma mensagem de sucesso. Se for reprovado,
utilize o operador de subtração (-) para calcular quantos pontos faltaram e exiba essa informação./
if (pontuacaoTotal >= metaPontuação) {
    console.log(" Parabéns, sua pontação foi de : " + pontuacaoTotal + ", você foi aprovado ")
} else {
    let faltaram = metaPontuação - pontuacaoTotal 
    console.log(" você fez " + pontuacaoTotal + " pontos. Faltaram " + faltaram + " pontos para ser aprovado. ")
}*/
/*Atividade 2
1 -- Peça ao usuário para inserir duas strings: descricao: Uma frase descrevendo o look.
corPrincipal: A cor de destaque do look.*/
const descricao = prompt("Escreve uma descrição do look")
const corPrincipal = prompt("Qual a cor principal do look?")
console.log("O look é", descricao, "e sua cor principal", corPrincipal)
/* 2 -- Use o protótipo lengh na variável descrição*/
console.log(descricao.length)
/*3 -- Crie uma variável booleana (temTamanhoAdequado) usando o operador comparador (>=) para checar
se a descrição tem, por exemplo, 20 caracteres ou mais.*/
let temTamanhoAdequado = 20
const descricao1 = descricao
console.log(descricao1 >= temTamanhoAdequado)
/*4 -- Busca por Palavras-Chave: Primeiro, use .toLowerCase() na descrição para garantir que a busca
não seja sensível a maiúscula/minúsculas.*/
const descricaoMaiuscula = descricao.toLowerCase()
console.log(descricaoMaiuscula)
/*Utilize o protótipo.indexOf() para verificar se a string contém as palavras-chave, por exemplo,
"brilho" e "listras". Lembre-se: indexOf retorna -1 se a palavra não for encontrada. Use o computador
!==-1 para checar se foi encontrada.*/
let brilho = possuiBrilho.indexOf("brilho") !==-1
let listras = possuiListras.indexOf("listras") !==-1
console.log("Tem a palavra brilho?", existeBrilho, "Tem a palavra listras?", possuiListras)
/*Cria a variável booleana final (lookAprovado) combinando as verificações:
  Aprovação = Tem Tamanho Adequado&&(Tem brilho || Tem Listras)*/
let aprovado = temTamanhoAdequado && (possuiBrilho || possuiListras)
console.log("Aprovado:", aprovado)
