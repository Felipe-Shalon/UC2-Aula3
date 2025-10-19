/*JAVA SCRIPT
---Começando um projeto.
Precisamos ter a extensão live server instalada no VSCode e criar uma pasta com dois
arquivos:
index.html ⇒ Primeiro arquivo que o navegador olha.
index.js ⇒ Arquivo onde escreveremos nosso código JS.

Começamos colocando o código padrão do HTML (se você apertar os botões ! + enter o
VSCode faz esse código pra você!)

Adicionamos uma linha de código, dentro da tag head, que vai ligar nosso arquivo index.js ao
HTML
<script src="index.js" defer></script>

Para abrir o html com o Live Server:
Clique com o botão direito em cima do arquivo index.html;
Depois clique em Open with Live Server ou Abrir com Live Server;

SINTAXES BÁSICAS
São estruturas que permitem escrevermos textos que serão ignorados para executar o
programa.

Eles devem começar com // ISSO É UM COMENTÁRIO ou estarem entre /* comentario */
/*---Imprimindo no console
O JS possui uma sintaxe específica para imprimir informações no console do navegador.*/
console.log("Olá Mundo!")//vai imprimir a mensagem Olá Mundo

/*---Pedindo informações para o usuário
Em aplicações Web, conseguimos pedir que o usuário nos passe alguma informação, assim:*/
prompt("Qual é o seu nome?")//Maneira de perguntar algo ao usuário
/*---Resumo
Para trabalhar com JS, vamos usar um arquivo index.html e um index.js.
Os dois arquivos devem estar na mesma pasta.
Para linkar o arquivo JS ao HTML, usamos a tag <script src="./index.js" defer></script>.
Comentários: de linha // e de bloco / * * /.
Imprimir uma info: console.log().
Solicitar uma info do usuário: prompt().

VARIÁVEIS
---O que sao?
Variáveis são estruturas que permitem guardar e acessar quaisquer informações no nosso
código
---Sintaxes
Antes de usarmos estas variáveis, nós precisamos declará-las (criá-las).
    const   novaVariavel    =            100 //const novaVariavel = 100
//    ^         ^           ^             ^
// declaração  nome      atribuição      valor

Devemos escolher nomes significativos.
Nomes não podem começar com números ou caracteres especiais.

Utilizamos o padrão camelCase.
● primeira letra minúscula;
● primeira letra entre uma palavra e outra é maiúscula;

const: quando uma variável é declarada usando const, nós dizemos que ela é constante.
O seu valor NÃO pode mudar ao longo do programa.
const idade = 24
idade = 24

let: quando uma variável é declarada usando let, ela PODE ter seu valor alterado.
let idade = 22
idade = 24

Podemos imprimir mais de uma coisa no console separando elas por vírgula.
Será adicionado um espaço entre as palavras.*/
const nome = "Fulana"
const idade = 21
console.log("Olá!", "Meu nome é ", nome, "e eu tenho", idade, "anos")
// Olá! Meu nome é Fulana e eu tenho 21 anos

/*TIPOS DE VARIÁVEIS

Numbers: são os tipos que representam números
const idade = 23
const altura = 1.79
const temperatura = -20

Strings: são os tipos que representam conjunto de caracteres (texto)
const nome = "Pedro"
let idade = "23"

Booleans
Esta álgebra leva em consideração que os valores assumidos são somente:
● TRUE ou 1;
● FALSE ou 0;

let souFelipe = true
souUmaMulher = false

Exercícios
Faça os seguintes itens:
1) Crie uma variável e atribua seu primeiro nome.*/
const meuNome = "Felipe"
//2) Crie uma variável e atribua seu sobrenome.
const sobrenome = "Schunk"
//3) Crie uma variável e atribua sua idade.
const minhaIdade = 26
//4) Crie uma variável que diga se você é ou não estudante.
const estudante = true
//5) Imprima o seu nome, sobrenome, idade e status de estudante no console.
console.log("Meu nome é", meuNome, sobrenome, "tenho", minhaIdade, "anos e", estudante)

/*---Resumo
Usamos let para declarar variáveis que podem ter seu valor alterado no decorrer do
programa.
const para variáveis que terão valores constantes.
Strings representam textos.
Numbers representam números.
Booleanos são tipos que recebem apenas dois valores: verdadeiro (true) ou falso (false).

---Variável typeof: comando que permite ver o tipo do valor da variável.*/
/*const got = "Game of Thrones"
const numeroTemporadas = 8
console.log(got)
console.log(numeroTemporadas)
console.log(typeof(got))//Mostra que a variável é String
console.log(typeof(numeroTemporadas))//Mostra que a variável é Number*/

/*---Undefined
Uma variável é undefined quando é declarada, mas não recebe um valor.
O valor undefined é atribuído automaticamente a variáveis não inicializadas
e também é o valor retornado por funções que não possuem um retorno explícito*/
/*let novaVariavel //A variável é declarada, mas não recebe um valor
typeof novaVariavel
console.log(novaVariavel) //Saída: undefined*/

/*---Null
Também representa a falta de valor da variável.
Undefined é atribuído pelo próprio JavaScript, e null é definido explicitamente pelo programador.*/
/*let minhaVariavel
console.log(minhaVariavel) //undefined

minhaVariavel = null
console.log(minhaVariavel) //null*/

/*Exercícios
1) Peça o nome do usuário através do prompt e guarde em uma variável.*/
//const nomeUsuario = prompt("Qual seu nome?")
//2) Peça a idade do usuário através do prompt e guarde em uma variável.
//const idadeUsuario = prompt("Qual sua idade?")
//3) Veja qual é o tipo das variáveis de nome e idade.
/*console.log("O nome do usuário é", nomeUsuario, "e ele tem", idadeUsuario, "anos")
console.log(typeof(nomeUsuario))//declara variável de tipo string
console.log(typeof(idadeUsuario))//declara variável de tipo string*/

/*---Conversão entre tipos de Strings
---toString()
toString é um método de programação que converte um valor para uma representação em texto (string).
Ele é usado para obter uma descrição textual de um objeto, como um número, data ou objeto personalizado,
facilitando sua exibição, manipulação e depuração.*/
let numero = 20 // O valor 20 é um número
let texto = numero.toString() // O método toString() converte o número para uma string
// Exibimos o valor e o tipo para comprovar a conversão
console.log(texto); // Saída: "20"
console.log(typeof texto); // Saída: "string"

//---Number()
//Converte números em String em Number
const idadeTexto = "23" //Se declara um string ("")
const idadeNumero = Number(idadeTexto)//O método Number() converte a String em Number
//Exibimos o valor e o tipo para comprovar a conversão
console.log(typeof idadeTexto)//Saída 20 (Number) invés de "20" (String)
console.log(typeof idadeNumero)//Decla váriavel Number

/*Conseguimos criar comentários usando // ou / * * /
console.log(mensagem) gera uma mensagem no console. prompt() solicita ao usuário que
insira uma informação.
Variáveis declaradas com const não mudam enquanto as criadas com let podem mudar.
Numbers: representam números.
Strings: representam texto.
Boolean: são tipos que recebem apenas dois valores: verdadeiro (true) ou falso (false).
typeof: permite ver o tipo do valor de uma variável.
Conversões entre tipos:
Número ⇒ String: toString()
String ⇒ Número: Number()*/