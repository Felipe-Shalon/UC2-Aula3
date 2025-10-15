/* CONDICIONAIS
O que são?

Vocês já repararam quantas vezes ao dia temos que tomar uma decisão
dependendo de outros fatores?

Nossos cérebros são incríveis e fazem isso de forma automática!

Vamos tentar pegar alguns exemplos e quebrar o processo de raciocínio em
pedacinhos:

Eu abro as cortinas para ver o dia lá fora...
● Se está chovendo:
○ Saio correndo para recolher as roupas do varal;
● Senão:
○ Fico de boa aproveitando o dia bonito;

Testando um exercício da lista...
● Se passa no teste:
○ Fico feliz e vou pro próximo;
● Senão:
○ Choro e volto para achar o bug ;

Estou ficando com fome e resolvo abrir a geladeira...
● Se tem alguma coisa além de gelo e ketchup:
○ Fico feliz por ter sido responsável;
○ Preparo um almoço gostoso;
● Senão:
○ Peço um hambúrguer por aplicativos ;

Condicionais são estruturas de código usadas para fazer escolhas baseadas em
alguns critérios.
Em outras palavras, elas permitem realizar uma determinada ação dependendo
de uma condição.
● Exemplo: baseado na condição de estar chovendo eu vou realizar a ação de
recolher a roupa.

Até agora vimos que o javascript executa linha por linha de código, de forma síncrona
e sequencial.
Como uma escada, que descemos degrau por degrau, sem poder pular nenhum.
Inicio do código > Etapa 1 > Etapa 2 > Fim do código

As condicionais são estruturas de código que nos dão o poder
de decidir se a próxima linha de código deve ser executada ou não.
Inicio do código > Etapa 1 > Etapa 2 > ? > Possibilidade 1 > Fim do código
                                         > Possibilidade 2 > Fim do código

---- DEFINIÇÃO DE ESTRUTURA
Modo como alguma coisa é construída, organizada ou está disposta: a estrutura
de uma empresa.
Aquilo que serve de base para algo; armação ou esqueleto: a estrutura de um
edifício; a estrutura de uma linguagem de programação.

ÁRVORES CONDICIONAIS
Como representar?
Uma maneira esquemática de representar condicionais é utilizando fluxogramas:
Ação                           Condição                          Ação
coloca o casaco     sim       Esrá frio?        Não      Permanece sem casaco

Definição de estrutura

Nos fluxogramas: Um losango representa uma condição para a tomada de decisão.
Um retângulo representa a ação.
Depois de percorrer várias condições, você chega à uma conclusão e, a partir da conclusão, você pode
realizar alguma ação.
Depois de percorrer várias condições, você chega à uma conclusão
E, a partir da conclusão, você pode realizar alguma ação

Resumo: Condicional é uma estrutura que permite escolher uma ação dependendo de uma
condição.
Árvores de condicionais são uma maneira de se representar esquematicamente
os condicionais.

CONDICIONAIS EM JS
Bloco if / else

if / else é a sintaxe (estrutura) de programação utilizada para condicionais.
Se a condição for verdadeira o código dentro do if é executado.

if
Todo código da ação vai entre chaves { } 
condição simples*/
/*let condicao1 = true
if(condicao1){
    //como valor da condicao é true, o código do bloco é executado
    console.log('Entrei no if 1')
}

let condicao2 = false
if(condicao2){
    //como o valor é falso, ele não é executado(não aparece na página)
    console.log('Entrei no if 2')
}*/
//Exercícios
//1. Crie um programa que:
//a) Recebe 2 números (chamaremos de num1 e num2)
/*const num1 = Number(prompt("Digite o primeiro número"))
const num2 = Number(prompt("Digite o segundo número"))
//b) Compara esses números entre si:
const resultado = num1===num2
//c) Se os números forem iguais, imprime uma mensagem de sucesso.
if(resultado){
    console.log("Executou o if")
    console.log("Os números são iguais") //°essa frase
} //Quando os números são iguais, true no caso, vai aparecer a frase do console.log do If °
else{
console.log("Executou o else")
console.log("Os números são diferentes.")} //O else da uma resposta caso o resultado seja false*/
/*If + else
Todo código da ação vai entre chaves { }

if + else + if
Todo código da ação vai entre chaves { }*/
let condicaoA = false
let condicaoB = true
let condicaoC = true
if(condicaoA){
    console.log('Entrou no IF 1')
}else if(condicaoB){
    console.log("Entrou no ELSE IF 1")
}
else if(condicaoC){
    console.log("Entrou no ElSE IF 2")
}
else
console.log("Entrou no ELSE")
//1. Crie um programa que:
//a) Recebe 2 números (chamaremos de num1 e num2)
/*const numeroA = Number(prompt("Digite o primeiro número."))
const numeroB = Number(prompt("Digite o segundo número."))
//b) Compara esses números entre si:
const resultado = numeroA === numeroB
//c) Imprime mensagens dizendo se o primeiro número é maior/menor/igual ao segundo número.
if(numeroA > numeroB){
    console.log("O primeiro número é maior que o segundo.")
}
else if(numeroA < numeroB){
    console.log("O primeiro número é menor que o primeiro número")
}
else
console.log("Os números são iguais")*/ //PRESTE ATENÇÃO NOS SINAIS DE MAIOR > MENOR < IGUAIS ETC
/*Vimos como a gente pode pedir para o computador realizar condições usando o
JavaScript:
Condicional simples (if)
Condicional composta (if/else)
Condicional aninhada (if + else if + else)*/

//SWITCH CASE
/*let paisOrigem = prompt("Digite o seu país de origem")
switch(paisOrigem){
    case "Brasil" :
        console.log("Nacionalidade brasileira")
        console.log("Entrou no case1")
        break
    case "Estados Unidos" :
        console.log("Nacionalidade americana")
        console.log("Entrou no case2")
        break
    case "India" :
        console.log("Nacionalidade indiano")
        console.log("Entrou no case3")
        break
    default :
    console.log("Nacionalidade não encontrada")
    break
}*/
/*Exercícios
Escreva um programa que receba o Pokémon inicial escolhido pela pessoa e
imprima no console o seu tipo:
● Bulbasaur (Planta e Veneno);
● Charmander (Fogo);
● Squirtle (Água);*/
let pokemon = prompt("Digite um pokemon entre Bulbasaur, Charmander e Squirtle.")
switch(pokemon){
    case "Bulbasaur" :
        console.log("Planta e Veneno")
        break
    case "Charmander" :
        console.log("Fogo")
        break
    case "Squirtle" :
        console.log("Água")
        break
    default :
    console.log("Pokemon não encontrado.")
    break
}