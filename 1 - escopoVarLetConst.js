/* 
Nota: Este arquivo trata sobre o escopo dos tipos de variáveis em JavaScript criadas com VAR e LET e constantes definidas com o CONST
Algumas partes do código são feitas para gerar erros de propósito, e portanto, para testar os próximos exemplos estes blocos de código foram comentados. 
Recomendo retirar os comentários, testar para verificar o erro e depois comentar novamente para executar os exemplos seguintes. 

Obs: Este código foi testado e executado pelo interpretador do JavaScript do NODE JS, mas deve funcionar em qualquer ambiente de execução do JS
*/

var disciplina = "Fundamentos de Programação"; // Escopo Global

function modificaDisciplina(){
    disciplina = "Lógica de Progrmação"; // operação permitida, pois a variável é global e 
}                                        // pode ser acessada de qualquer lugar

console.log(disciplina); // ainda não chamei a função modificaDisciplina()
// resultado = Fundamentos de Programação

modificaDisciplina(); // função que muda o valor da variável disciplina

console.log(disciplina) // resultado = Lógica de Progrmação

//Resumo: Consigo acessar a variável disciplina dentro da função, pois ele é global, 
//posso acessar de qualquer parte ou estrutura do código

/*
console.log("--- Tipo var com escopo local dentro de função ---"); 

function minhasNotas(){
    var nota01 = 9.5;  // Escopo local da função
    var nota02 = 7;     // acessível apenas dentro desta função 
}

minhasNotas(); // chamo a função e crio as notas

var media = (nota01 + nota02) / 2; // não é possível acessar nota01 e nota02, elas foram definidas dentro de uma função

console.log(media); // nota01 is not defined | nota01 não foi definida
*/

console.log("--- Tipo var possui escopo global se for definida dentro de qualquer outro bloco ou estrutra que não seja uma função ---"); 

var logica = true; 
  
if (logica == true) { // variáveis definidas dentro de uma estrutura de controle, mesmo assim possuem escopo global
    var nota01 = 9.5;
    var nota02 = 7; 
}

var media = (nota01 + nota02) / 2; // operação permitida, pois as notas são globais agora

console.log(media); // resultado = 8.25 

console.log("Possível problema de consistência/Redundância com o uso do tipo VAR - permitir redefinir a variável")

var nomeCompleto = "José Silveira"; // definição e atribuição
console.log(nomeCompleto); 
var nomeCompleto = "Maria de Oliveira"; // nova definição da mesma variável, tipo VAR permite isso 
console.log(nomeCompleto); 

/* Resumo sobre o tipo VAR
   As variáves definidas com o tipo VAR Possuem apenas dois tipos possíves de escopo, o global e o de função
   Se for definido dentro de uma função, ela terá escpo local, acessível apenas dentro da função. 
   Se a variável for criada fora de uma função o escopo é global, mesmo que seja criada dentro de IF, WHILE, FOR, etc.

   Uma particularidade do VAR é permitir ser redefinida, o que pode ser uma desvantagem de seu uso. 
   Já que se você esquecer que já criou aquela variável, poderá criar outra com o mesmo nome, podendo causar incosistência no código.
*/

console.log("Tipo LET possui três escopos possíveis: Escobo Global, Escopo de Função e Escopo de Bloco"); 

// JS existe o conceito de bloco de código criado pelo conjunto '{ }'

/*
{  // Cria um bloco simples 
    let salario = 2700;  // variável com escopo local do bloco, acessível apenas dentro do bloco 
} // finaliza o bloco 

console.log(salario); // Tentiva de acessar a variavel fora do bloco que ela foi criada
// Resultado: salario is not defined
*/
/*
let Logica = true;   // variável definida com LET fora de qualquer bloco de código ou fora de função possui escopo global
  
if (Logica == true) { // variáveis definidas com LET dentro do bloco de uma estrutura de controle são locais. 
    let not01 = 9.5;
    let not02 = 7; 
}

let Media = (not01 + not02) / 2; // operação agora não é permitida como no tipo VAR

console.log(Media); // Resultado = not01 is not defined
*/ 


console.log("Escopo de Função com LET"); 
/* 
function quadrado(num){
    let Quad = num * num; // variável Quad possui escopo local/de função, pois foi definida dentro de uma função com LET 
                          // acessível somente dentro dessa função
}

quadrado(5); // chama a função e passa o número 5 como parâmetro
console.log(Quad); // Tenta acessar Quad | Resultado = not01 is not defined | Ou seja, operação não permitida
*/ 

// Para funcionar precisa acessar a variável dentro da função

function quadrado(num){
    let Quad = num * num; // variável Quad possui escopo local/de função, pois foi definida dentro de uma função com LET 
                       // acessível somente dentro dessa função
    console.log(Quad); // estou acessando a variável dentro dunção - Permitido
}

quadrado(5); // chama a função e passa o número 5 como parâmetro | Agora funciona | Resultado = 25 

// Outra forma de fazer
function quadrado2(num2){
    let Quad2 = num2 * num2; // variável Quad possui escopo local/de função, pois foi definida dentro de uma função com LET 
                       // acessível somente dentro dessa função
   return(Quad2) // estou acessando a variável dentro dunção - Permitido
}

console.log(quadrado2(5)); // chama a função e passa o número 5 como parâmetro | Funciona | Resultado = 25 

/* Redefinição de variáveis usando o LET não é permitido */

/* let linguagem = "JavaScript"; // Cria uma varíavel Global com LET e atribui um valor
    
//     linguagem = "Python"; // atribuiçao de novo valor a variável - ok 
    
 let linguagem = "C#"; // Operação não permitida Erro: Cannot redeclare block-scoped variable 'linguagem'.
 */

/* Resumo: Sobre o tipo LET
 Possui três escopos: De Bloco(Simples ou de uma outra estrutura), de Função e Global
 Se a variável for definida com o LET fora de qualquer função ou bloco, ela possui escopo Global 
 Se for definida dentro de algum bloco, ela possui escopo daquele bloco
 Se for definida dentro de uma função, é acessível apenas dentro daquela função
 Não é possível redefinir uma variável usando o tipo LET
*/


console.log("Escopo do tipo CONST(constante)"); 

/* As contantes criadas com o CONST, além de serem constantes elas possuem regras de escopo iguais ao tipo LET, global, local e de função */

const pi = 3.14; // global 

{
    const gravity = 9.81; // escopo de bloco 
}

function mynhaFuncao(m,a){
    const pi2 = 3.1415; 
    console.log(pi2); // acesso ok 
}
console.log(pi) // Acesso ok, escopo global
console.log(gravity); // acesso não permitido
console.log(pi2); // acesso não permitido

/* Resumo sobre o tipo CONST
  Possui regras de escopo iguais ao tipo LET 
*/

/* Resumo Geral
O tipo VAR possui dois escopo, o Global e de Função
O tipo LET e CONST possuem escopo de Bloco, Função e Global

Acredito ser interessante, evitar o uso do tipo VAR por possuir regras de escopo limitada e ainda permitir ser redefinada. 
O uso do LET pode garantir a criação de variáveis mais consistentes. É bom criar o hábito de usá-la. 
*/


