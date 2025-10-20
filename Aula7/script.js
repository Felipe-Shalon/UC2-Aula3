/*OPERADORES LÓGICOS
● São operadores especiais usados entre booleanos
● Retornam um valor booleano
● Existem 3 importantes:
Operador E: &&
Operador Ou: ||
Operador Não/Negação: !

---Operador E (&&)
Retorna true se, e somente se, os todos booleanos envolvidos também forem
true.
true && true // resultado = true
true && false // resultado = false
false && true // resultado = false
false && false // resultado = false

Exercício
Antes de começar, crie 3 variáveis: a, b e c.
Atribua os valores true, false e true, respectivamente a = true, b = false e c = true.*/
//1. Realize a operação: a && b
const interruptorA = true
const interruptorB = false
const resultado = interruptorA && interruptorB
console.log(resultado) //o resultado será false pois só um é true
//2. Realize a operação: b && c
const interrupB = false
const interrupC = true
const resultad = interrupB && interrupC
console.log(resultad) //o resultado será false pois só um é true
//3. Realize a operação: a && c
const interruptA = true
const interruptC = true
const result = interruptA && interruptC
console.log(result) //o resultado será true pois os dois são true
//4. Realize a operação: a && b && c
const rA = true
const rB = false
const rC = true
const resulta = rA && rB && rC

/*---Operador OU ( || )
Retorna false se, e somente se, todos booleanos envolvidos também forem false.
true || true // resultado = true
true || false // resultado = true
false || true // resultado = true
false || false // resultado = false
Exercícios

Antes de começar, crie 3 variáveis: a, b e c.
Atribua os valores true, false e true, respectivamente a= true, b = false, c = true.
1. Realize a operação: a || b. */
const operacaoA = true
const operacaoB = false
const resultadoAB = operacaoA ||  operacaoB
console.log(resultadoAB)//true pois só um é false
//2. Realize a operação: b || c.
const operacaoB = false
const operacaoC = true
const resultadoBC = operacaoB || operacaoC
console.log(resultadoBC)//true pois só um é false
//3. Realize a operação: a || c.
const operacaoA = true
const operacaoC = true
const resultadoAC = operacaoA || operacaoC
console.log(resultadoAC)//true pois os dois são true
//4. Realize a operação: a || b || c
const operacaoA
const operacaoB
const operacaoC
const resultadoABC = operacaoA || operacaoB || operacaoC
console.log(resultadoABC)//true pois tem true em meio ao false

/*Operador NÃO ( ! )
Sempre retorna o booleano oposto.
!true // resultado = false
!false // resultado = true

Resumo
Operadores Lógicos
● && //todos precisam ser true
● || //todos precisam ser false
● ! //retorna o oposto exemplo: !true volta false, !false volta true

Exercícios
Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano
atual e mostre:
Nome: Lais ; Idade: 23 ; É maior de idade? True ; Idade em 2050: 52
● O nome da pessoa
● A idade dessa pessoa
● Um true ou false que diz se ela é maior de idade
● Quantos anos ela terá em 2050*/
let nome = prompt("Qual é seu nome?")
let anoNascimento = Number(prompt("Qual seu ano de nascimento"))
let anoAtual = prompt("Em que ano estamos?")
let idade = anoAtual - anoNascimento
let verificarMaiorDeIdade = idade >= 25
let idadeEm2050 = 2050 - anoNascimento
console.log("Nome", nome, "idade", idade, "maior de idade?", verificarMaiorDeIdade, "idade em 2050", idadeEm2050)
/*Resumo
Numbers
● Operadores Aritméticos:
+, -, *, / e %
● Comparadores:
=== //igual
!== //diferente
> e >= //igual e igual maior
< e <= //igual e igual menor
Operador E (&&): Só devolve true se todos os booleanos forem true.
Operador Ou (||): Só devolve false se todos forem false
Operador ! : Devolve o oposto*/