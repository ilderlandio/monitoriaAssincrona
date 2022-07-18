/* 
Nota: Este arquivo trata sobre as formas de criar funções no JavaScript, usar parâmetros e novas formas de criar funções com Arrow Function
Algumas partes do código são feitas para gerar erros de propósito, portanto, para testar os próximos exemplos estes blocos de código foram comentados. 
Recomendo retirar os comentários, testar para verificar o erro e depois comentar novamente para executar os exemplos seguintes. 
Obs: Este código foi testado e executado pelo interpretador do JavaScript do NODE JS, mas deve funcionar em qualquer ambiente de execução do JS
*/

// A maneira mais básica de criar uma função é usando a sintaxe chamada de Função clássica | Literal ou Declaração de função, confira abaixo

function calDobro(a){
    return `Dobro do valor é: ${2 * a}`; // Obs: essa sintaxe é uma alternativa para concatenar (juntar) váriáveis e string, chamada de template string
    } 	
  console.log(calDobro(5)); // Output: Dobro do valor é: 10

  // Perceba o uso da palavra reservada 'return' dentro da função, sempre que usada significa que a funçao deve retornar um valor quando chamada

  // É possível escrever uma função sem ela retornar um valor, neste caso, se trata de um procedimento
  function quadrado(num){
    let Quad = num * num; 
    console.log(Quad); // Output: 25 | não retorna valor, é procedimento
 }
   quadrado(5);
// Dessa vez a função não retorna valor, quando isso ocorrer pode ser necessário imprimir o resultado das operações da função ainda dentro do bloco da função

// Os parâmetros da função, uma função pode receber vários parâmetros, e eles podem ser iniciados em um valor padrão
// Abaixo definimos os parâmetros larg = 6 e com = 25 como padrões, se a funçao for chamada e passados valores diferentes, estes substituirão os padrões, 
//caso contrário, os valores padrões serão usados no bloco da função
function calArea(larg=6,comp=25){
    let area = larg * comp; 
     return "Área:"+area; 
}
console.log("Área de casa Padrão Caixa:"+calArea()); // Output: Área de casa Padrão Caixa:Área:150
console.log("Área de uma casa fora do Padrão:"+calArea(15,30)); // Output: Área de uma casa fora do Padrão:Área:450

// Se formos usar vários parâmetros e talvez uma quantidade variável, podemos usar REST PARAMATERS, recurso novo também nas novas do JS
function FuncaoVariosParam(param1, ...maisParams){
    console.log(param1); // 10
    console.log(maisParams); // [3, 5, 6, 89, 2, 4, 23]

}
FuncaoVariosParam(10,3,5,6,89,2,4,23); 
// Output: 10 
// Output: [3, 5, 6, 89, 2, 4, 23]
// Obs: Os '...' permitirá agrupar todos os outros parâmetros em um array, ele sempre precisa ser o último parâmetro

// Podemos agrupar todos os parâmetros da função com o RES e percorrer com uma estrutura de repetição
function agrupaParam(...todosParams){
    for (const iterator of todosParams) {
        console.log(iterator); 
    }
}
agrupaParam(3,10,12,4,9,11); // Output: 3 10 12 4 9 11

// No JavaScript também temos o conceito de função anônima, abaixo temos um expressão de função, onde uma função é atribuída a uma variável
const operacaoSoma = function(a,b){
    return `Soma dos parâmetros é: ${a + b}`; // Novamente usando template string para concatenar texto com variáveis
}
console.log(operacaoSoma(3,5)); // Output: Soma dos parâmetros é: 8

// É possível passar uma outra função como parâmetro
const soma = function(x,y){ // função que executa uma soma 
    return x + y; 
} 
const mostrarResult = function(a,b,operacao = soma){ // função que recebe a função anterior através do parâmetro operação
    console.log(operacao(a,b));
}
mostrarResult(15,35); // // Output: 50


// Arrow Function (funções de seta) as novas atualizações do JavaScript permitem o uso da sintaxe abaixo para criar funções
//obs: Arrow Function é uma função anônima
let media = (n1,n2) => {
    return `Média: ${(n1+n2)/2}`;
}
console.log(media(9,8)); // Output: Média: 8.5

// Existem várias formas de definir Arrow functions

 // Se a função não tiver parâmetros os () são obrigatórios
 let semParam = () => {
    return "Olá!";
} 
console.log(semParam()); // Output: Olá! 

// Se tiver só um parâmetro, não é obrigado os parênteses () 
// Se o corpo possuir só uma linha não é obrigatório as chaves {} e o return também é implícito
let mult3 = n => `Dobro do parâmetro: ${2 * n}`;
console.log(mult3(6));  // Output: Dobro do parâmetro: 12

// Outro exemplo com apenas um parâmetro e só uma linha
let myFunction = x => x * 2
console.log(myFunction(5)); // Output: 10