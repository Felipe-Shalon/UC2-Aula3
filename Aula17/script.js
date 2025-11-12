/* OBJETOS
Objetos são estruturas que nos permitem representar dados mais
complexos de uma maneira mais organizada

Com os objetos conseguimos criar modelos do mundo real de
forma mais intuitiva/humanizada.

Se fizéssemos uma comparação com a cozinha, as variáveis com valores
dos tipos: string, number e boolean seriam gavetas pequenas e simples
para guardar um item.
Os objetos seriam uma gaveta maior e organizada, permitindo guardar diversos
itens e cada separação possui um identificador para os diferentes itens.

Objeto é uma estrutura análoga a um dicionário.
Buscamos a definição da palavra por meio do seu nome (identificador).
Assim como array está para listas, objeto está para um dicionário de definições.

As propriedades dos objetos podem assumir quaisquer valores.
● string, number, boolean, array, etc.
● Funções (neste caso, quando estão dentro de um objeto, são
chamadas de método).

===> Estrutura de um objeto

Declaramos uma variável com let ou const e damos um nome ao objeto:

const professor

Utilizamos chaves para representar a estrutura de um objeto:

const professor = {}

Dentro das chaves, podemos criar propriedades contendo chave e
valor.

const professor = {
nome : ‘Maria’ // Propiedade; nome(chave); ‘Maria’(valor)
}

Os valores de uma chave também podem ser arrays e funções (nesse caso, métodos).*/

/*===>Exercício
● Crie um objeto que represente um filme. Ele deve ter dados da
direção, o nome, o ano de lançamento, uma lista com o elenco e
uma propriedade que diga se você já viu ou não.*/
const filme = {
    direcao : "Quentin Tarantino",
    nome : "Bastardos Inglórios",
    lancamento : 2009,
    elenco : "Brad Pitt, Christoph Waltz e Eli Roth",
    assistido: "sim"
}
/*● Acesse e imprima no console cada uma das propriedades:
metade usando notação do ponto e a outra metade com
notação de colchetes. */
console.log("Filme", filme["nome"], "com direção de", filme["direcao"], ", lançado em", filme["lancamento"], ", contendo no elenco", filme.elenco, "sendo assistido", filme.assistido)

/*Exercício 2
● Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade, gênero musical preferido.*/
const colega = {
    nome : "Felipe",
    idade : 17,
    musica : "rock"
}
/*● Acesse e imprima no console as propriedades desse objeto, seguindo o modelo abaixo:
"O nome da pessoa é ___, ela tem ___ anos e gosta muito de ___." */
console.log(`O nome do colega é ${colega.nome}, ele tem ${colega.idade} anos e gosta muito de ${colega.musica}`)


/*const professor = {
    nome: "Lucas", //nunca esquecer da virgula , 
    idade : 33,
    email : "lucas.alves@gmail.com" 
}
console.log(professor.nome) //acessa o nome e imprimi ele
console.log(professor["idade"]) //acessa a idade e imprimi ela
console.log(professor.email) //acessa o email e imprimi ele

const laptop = {
    tela : 15,
    processador : "Ryzer",
    marca : "Lenovo" ,
    modelo : "K14",
}
console.log("A marca do Laptop é", laptop.marca, "e o modelo", laptop.modelo)*/

//array objetos

const professores = [
    {nome : "Lucas", modulo : 2}, //como é um array, cada um tem seu indice começando pelo 0
    {nome : "Dal", modulo : 1},
    {nome : "Valter", modulo : 1}
]
console.log(`O professor ${professores[0].nome} deu o módulo ${professores[0].modulo}`) //0 é o indice

/*Exercício
● Adicione ao objeto do exercício 1 uma lista com os nomes dos
personagens do filme.

● Acesse e imprima no console cada pessoa do elenco junto com
seu respectivo personagem

● Altere a primeira pessoa do elenco por "Xuxa".

● Imprima no console todas as propriedades do objeto. */
/*const filme1 = {
    direcao : "Quentin Tarantino",
    nome : "Bastardos Inglórios",
    lancamento : 2009,
    elenco : "Brad Pitt, Christoph Waltz e Eli Roth",
    personagens : "Hans Landa, Tenente Aldo Raine e Sargento Donny Donowitz",
    assistido: "sim"
}
console.log()*/
/*Crie uma função que receba um objeto de pessoa (Exercício 2) e crie
um novo objeto mantendo as propriedades originais e acrescentando:
● Uma propriedade com a lista de suas comidas preferidas;
● Uma propriedade que seja um objeto, com nome e idade, para
representar o melhor amigo da pessoa.
● Ainda na função, imprima no console as propriedades desse objeto
seguindo o modelo abaixo:
"O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. Seu
melhor amigo se chama ___ e tem ___ anos" */
function novoObjeto(objeto) {
    const colega = {
        ...objeto,
        comidasPreferidas: ["Lasanha", "Pizza", "Churrasco"],
        melhorAmigo: {
            nomeAmigo: "Gustavo",
            idadeAmigo: 15
        }
    };
  console.log(`O nome da pessoa é ${colega.nome} e  suas comidas preferidas são ${colega.comidasPreferidas}. Seu melhor amigo se chama ${colega.melhorAmigo.nomeAmigo} e tem ${colega.melhorAmigo.idadeAmigo} anos`) 
}
novoObjeto()

/*Crie um array chamado personagens que contenha pelo menos 3 objetos de
personagens. Cada objeto deve ter as propriedades nome, idade, estilo, jutsus: Uma
lista de poderes que o personagem possui.*/
const personagens =[ {
    nome: "Naruto Uzumaki",
    idade: 17,
    estilo: "ninjutsu e taijuts",
    jutsus: "Rasengan, Rasenshuriken e Modo Sennin" },
    {
        nome : "Sasuke Uchiha",
        idade : 17,
        estilo: "Ninjutsu e Genjutsu",
        jutsus: "Bola de Fogo, Susanoo e Chidori"
    }, {
        nome: "Itachi Uchiha",
        idade: 21,
        estilo: "genjutsu",
        jutsus: "Susanoo, Tsukuyomi e Amaterasu"
    }
]
/*Crie uma função chamada adicionarPersonagem que adicione um novo personagem
ao array personagens. A função deve receber um objeto com as propriedades nome,
idade, classe e poderes.*/
function adicionarPersonagem(){
    const novoPersonagem = {
        nome: "Shikamaru",
        idade: 17,
        classe: "Shinobi Jounnin",
        poderes: "Estragulamento das Sombras e Costura das Sombras"
    }
}

/*Crie uma função chamada buscarPersonagem que recebe um nome e retorna o
personagem correspondente do array personagens. Se o personagem não for
encontrado, a função deve retornar uma mensagem indicando isso.*/

/*Crie uma função chamada listarPersonagens que imprime na tela a lista de todos os
personagens com seus detalhes (nome, idade, estilo e jutsus). */



