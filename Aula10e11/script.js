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
/*let condicaoA = false
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
console.log("Entrou no ELSE")*/
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
/*let pokemon = prompt("Digite um pokemon entre Bulbasaur, Charmander e Squirtle.")
switch(pokemon.toLowerCase()){
    case "bulbasaur" :
        console.log("Planta e Veneno")
        break
    case "charmander" :
        console.log("Fogo")
        break
    case "squirtle" :
        console.log("Água")
        break
    default :
    console.log("Pokemon não encontrado.")
    break
}*/
/*Exercícios
Escreva o programa do chapéu seletor que recebe a aluna e imprima no console a
sua casa de Hogwarts:
● Hermione(Grifinória);
● Ana(Lufa-lufa);
● Luna(Corvinal);
● Narcisa(Sonserina)*/
/*let aluna = prompt("Qual aluna de Harry Potter você é?")
switch(aluna.toLowerCase()){ //Sempre ao usar toLowerCase, escrever o que estiver em case em letra minúscula
    case "hermione" :
        console.log("Você escolheu Hermione, sua casa é Grifinória.")
        break
    case "cho chang" :
        console.log("Você escolheu Cho Chang, sua casa é Corvinal")
        break
    case "ana" :
        console.log("Você escolheu Ana, sua casa é Lufa-Lufa.")
        break
    case "luna" :
        console.log("Você escolheu Luna, sua casa é Corvinal.")
        break
    case "narcisa" :
        console.log("Você escolheu Narcisa, sua casa é Sonserina.")
        break
    default :
    console.log("Aluna não encontrada.")
    break
}*/
/*Resumo
Podemos realizar condições usando no JavaScript o if + else. Além disso,
podemos usar o switch case.
● Switch case evita códigos verbosos;
● Só serve para verificar casos de igualdade;
● Permite executar bloco de código diferente baseado em cada opção;
● Break = Para a execução do código quando a condição é atendida;

CONDICIONAIS E OPERADORES LÓGICOS
Relembrando Operadores Lógicos
● && : AND - verdadeiro se ambos os operandos forem verdadeiros.
● || : OR - falso se ambos os operadores forem falsos.
● ! : NOT negação - sua função é simplesmente inverter os valores.
Como os operadores lógicos retornam booleanos, conseguimos usá-los
diretamente na condição dos blocos if/else*/
/*let condicao1 = true
let condicao2 = true
if (condicao1&&condicao2){
    console.log("Executou if do operador && AND")
}
if (!condicao1 || condicao2){
     console.log("Executou o if do operador || OR")
}
if(!condicao1){
    console.log("Executou o if do operador ! NOT")
}*/
/*Exercícios
Uma pessoa pode estudar em uma faculdade se:*/
//● Tiver concluído o ensino médio;
/*const ensino = prompt("concluiu o ensino médio?").toLowerCase() === "sim"
//● Tiver 18 anos ou mais;
const idade = Number(prompt("Digite sua idade")) >= 18
//● Não estiver cursando outra faculdade;
const faculdade = prompt("Você faz faculdade?").toLowerCase() === "sim"*/
/*Escreva um programa que receba estes parâmetros e imprima se a pessoa pode
ou não estudar nesta faculdade. Receba os dados do usuário pelo prompt.*/
/*if(ensino && !faculdade){
    console.log("Você pode estudar nessa faculdade")
}else{
    console.log("Você não pode estudar nessa faculdade")
}*/
/*Resumo

Operadores de comparação são usados para se compararem valores de mais de
uma variável. Eles sempre retornam um valor booleano.

● ===: valor e tipo iguais
● !==: valor ou tipo diferentes
● >: maior que
● >=: maior ou igual que
● <: menor que
● <=: menor ou igual que
Condicionais são estruturas que simbolizam decisões tomadas dependendo de
certas condições.

Árvore condicional é uma estrutura esquemática que pode ser usada para
facilitar nossa análise e construção de condicionais

if/else são blocos que permitem fazer uma condicional.
Eles recebem uma condição e o código:
● do if é executado se a condição for true;
● do else é executado se a condição for false;

Switch case são blocos que permitem simplificar if/else apenas no caso de
comparador de igualdade.
● lembrem-se de escrever o break;

EXERCICIOS DE FIXAÇÃO   

Exercícios de interpretação de código
1. Teste de números:
a) Explique o que o código faz. Qual o teste que ele realiza?
Testa se o numero digita é divisivel por 2
b) Para que tipos de números ele imprime no console "Passou no teste"?
Numeros divisiveis por 2.
c) Para que tipos de números a mensagem é "Não passou no teste"?
Numeros nao divisiveis por 2*/

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)
if (numero % 2 === 0){
    console.log("Passou no teste.")
} else {
    console.log("Não passou no teste.")
}

/*Exercícios de interpretação
2. Mercado
a) Para que serve o código?
O código serve para indicar o valor da fruta escolhida pelo usuário
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
Sera indica o preco da maçã.
c) Qual seria a mensagem impressa no console se comprasse
`pera`e retirássemos o `break` que está logo acima do `default` ("BREAK PARA O ITEM c.")?
*/
/*let fruta = prompt("Escolha uma fruta")
let preco 
switch (fruta){
    case "Laranja" :
        preco = 3.5
        break;
    case "Maçã" :
        preco = 2.25
        break;
    case "Uva" :
        preco = 0.30
        break;
    case "Pêra" :
        preco = 5.5
        break //BREAL PARA O ITEM C.
    default:
        preco = 5
        break;
}
console.log("O preço da fruta", fruta, " é ", "R$", preco)*/
/*3. Mensagem Secreta
a) O que a primeira linha está fazendo?
A primeira linha esta solicitando para o usuário digitar um número.
b) Considere um usuário digitou o número 10. Qual será a mensagem do
terminal? E se fosse o número -10?
Se o número digitado for 10, ele ira passar no teste pois é maior que 0.
Se o numero digitado for -10 ele ira reprovar pois é menos que 0.
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou
escopo.
Console.log(mensagem) deve estar dentro do escopo.
*/
/*const numero = Number(prompt("Digite o primeiro número."))
if (numero > 0){
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
    
}
console.log(mensagem)*/
/*Exercícios de escrita de código
4. Faça um programa que pergunta ao usuário qual a idade dele e imprima no
console se ele/ela pode dirigir (apenas maiores de idade).*/
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
/*b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para
number para isso.*/
/*c) Agora veja se essa idade do usuário corresponde à idade mínima que permite
dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima
`"Você não pode dirigir."`*/
let idade = Number(prompt("Me diga sua idade."))
if (idade > 17){
console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}
/*5. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça
para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a
mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.*/
let turno1 = prompt("Qual turno você estuda: M (matutino), V (espertino) ou N (noturno)?").toLowerCase()
let mensagem
if (turno1 === "m") {
    mensagem = "Bom dia"
} else if (turno1 === "v") {
    mensagem = "Boa tarde."
} else if (turno1 === "n") {
    memsagem = "Boa noite"
} else {
    mensagem = "Turno inválido." }
console.log(mensagem)
//6. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
let turno = prompt("Qual turno você estuda: M (matutino), V (espertino) ou N (noturno)?")
switch (turno.toLowerCase()){
    case "m" :
        console.log("Bom dia.")
        break;
    case "v" :
        console.log("Boa tarde.") 
        break;
    case "n" :
        console.log("Boa noite.")
        break;
    default:
        console.log("Turno não encontrado.")
        break;
}
/*7. Considere a situação: você vai ao cinema com um amigo ou amiga, porém
ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o
ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o
gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo,
imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha
outro filme :("*/
let genero = prompt("Qual gênero do filme?")
let ingresso = Number(prompt("Qual preço do ingresso?"))
if (genero.toLowerCase() === "fantasia" && preco < 15) {//&& as duas condiçoes precisam ser verdadeiras
    console.log("Bom filme.")
} else {
    console.log("Escolha outro filme")
}