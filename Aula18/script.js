/*Exercícios de interpretação de código
1. Leia o código.

a) O que vai ser impresso no console?
Matheus Nachtergaele
3
canal: "Globo", horario: "14h" */
const filme = {
    nome: "Auto da compadecida",
    ano: 2000,
    elenco: ["Matheus Nachtergaele", "Senton Mello", "Denise Fraga", "Virginia Cavendish"],
    transmissoesHoje: [
        {canal: "Telecine", horario: "21"},
        {canal: "Canal Brasil", horario: "19h"},
        {canal: "Globo", horario: "14h"}
    ]
}
console.log(filme.elenco[0])
//filme.elenco para acessar o elenco e [0] acessa o indice 0 que corresponde ao ator Matheus Nachtergaele
console.log(filme.elenco.length - 1)
//Lenght mostra o número de elemento no array que é 4. No console vai sair 3 pois pede -1.
console.log(filme.transmissoesHoje[2])
//filme. acessa o const filme e em seguida com .transmissoesHoje ele acessa a lista de transmissões
// e por último com [2] ele acessa o indice dessa lista imprimindo canal: "Globo", horario: "14h"

/*2. Leia o código.
a) O que vai ser impresso no console?
b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
copia as informações declaradas */
const cachorro = {
    nome: "Juca",
    idade: 3,
    raca: "SRD"
}
const gato = {...cachorro, nome: "Juba"}
//...cachorro copia o const cachorro e troca o nome Juca por Juba
const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
//copia o const de gato, acessa o nome e troca as letras "a" pelo "o"
console.log(cachorro)
// imprimi as informações do cachorro ficando = nome: "Juca" idade: 3 raca: "SRD"
console.log(gato)
//Imprimi as informações do cachorro mundando o nome Juca por Juba = nome: "Juba" idade: 3 raca: "SRD"
console.log(tartaruga)
//Imprimi as informações do cachorro mudando a letra "a" pelo "o" = nome: "Juco" idade: 3 raca: "SRD"

/*3. Leia o código.
a) O que vai ser impresso no console?
b) Explique o valor impresso no console. Você sabe por que isso aconteceu? */
function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}
const pessoa = {
    nome: "Caio",
    idade: 23,
    beckender: false
}
console.log(minhaFuncao(pessoa, "beckender"))
//Acessa o objeto (pessoa) e procura pela propiedade beckender que resulta em false
console.log(minhaFuncao(pessoa, "altura"))
//Acessa o objeto (pessoa) e busca pela altura, como não tem altura, fica underfined

/*Exercícios de escrita de código
1. Resolva os passos a seguir:
a) Crie um objeto. Ele deve conter duas propriedades: nome (string)
e apelidos (um array que sempre terá exatamente três apelidos).
Depois, escreva uma função que recebe como entrada um objeto e
imprime uma mensagem no modelo abaixo:
//Exemplo de entrada
const pessoa = {
    nome: "Lucas Gabriel",
    apelidos: ["Mestre", "Prof", "Lu"]
}
//Exemplo de saída
"Eu sou Lucas, mas pode me chamar de: Mestre, Prof ou Lu" */
const pessoa1 = {
    nome: "Lionel Messi",
    apelidos: ["Gênio", "Baixinho", "GOAT"]
}
console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}`)