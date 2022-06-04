/* 
Nota: Este arquivo mostra como usar as principais estruturas de repetição da linguagem JavaScipt: FOR, WHILE, FOR IN, FOR OF e FOREACH
Algumas partes do código são feitas para gerar erros de propósito, e portanto, para testar os próximos exemplos estes blocos de código foram comentados. 
Recomendo retirar os comentários, testar para verificar o erro e depois comentar novamente para executar os exemplos seguintes. 
Obs: Este código foi testado e executado pelo interpretador do JavaScript o NODE JS, mas deve funcionar em qualquer ambiente de execução do JS
*/

// Estrutura de Repetição FOR em JS | Usamos o laço for quando sabemos exatamente quantas vezes queremos repetir um bloco de instruções 

/* Sintaxe Geral
 for (valor incial; condição ; incremento ou decremento){
     códigos executados enquanto a condição for verdadeira
 } 
*/
// Exemplo 
for(let i = 5; i > 0; i--){ // Decrementando
    console.log(i); 
}

// O código acima imprime o valor da variável i e a decrementa até o valor de i ser igual 0 | Output = 5 4 3 2 1 
console.log("Exemplo com Incremento da variável i"); 
 
for(let i = 0; i < 5; i++){ // Incrementando
    console.log(i); 
}
// O código acima imprime o valor da variável i e a incrementa até que o valor de i seja igual a 5 | Output = 0 1 2 3 4

console.log("Podemos usar o FOR para buscar valores em VETORES/ARRAYS"); 
// Exemplo
let marcas = ["Asus","LG","Acer","Dell"]; // Vetor simples com 4 valores
let t = marcas.length; // Pega o tamanho do vetor, ou seja, a quantidade de valores, no caso 4

for(let x = 0; x < t; x++ ) { // Lembre-se que a variável t possui o tamanho do vetor, serve exatamente para que o FOR só para quando ele imprimir o último valor/elemento do vetor
    console.log(marcas[x]);
}

console.log("--- Estrutura de Repetição While ---"); 
/*
Esta instrução é usada quando não sabemos quantas vezes um determinado bloco de instruções precisa ser repetido. 
A execução das instruções vai continuar até que uma condição seja verdadeira. 
A condição a ser analisada para a execução do laço de repetição deverá retornar um valor booleano/lógico.
*/
// Exemplo
  let control = 0;     // variavel de controle 
  while(control < 6){     // condição de repetição
   console.log(`${control} - Javascript`);    // Comandos do bloco serão executados enquanto a condição acima for verdaeira 
   console.log();    // imprime o valor atual da variável de controle | valor impresso apenas para entendimento
   control++;    // operação de incremento
  }
 // Output : 0 - Javascript 1 - Javascript ... 5 - Javascript
 // Obs: console.log(`${control} - Javascript`); -> Esta sintaxe se chama template string, é uma outra forma de juntar(concatenar) variável com string 

 // Pegando valores de Vetores usando While
 let modelos = ["LG","Samsung","Microsoft","Apple","Acer"]; 

 let cont = 0;
 // Observe que na linha abaixo em vez de criar uma variável para armazenas o tamanho do vetor, usei direto a sintaxe(modelos.length) que obtem este tamanho 
 while(cont < modelos.length){ 
  console.log(cont+ '-' +modelos[cont]);
  cont++;
 }
// Output: 0-LG 1-Samsung ... 4-Acer 
// Obs: É pouco comum usar o While para percorrer Vetores como o exemplo acima

// Se a condição do While for sempre verdadeira, a execução do programa fica presa no While
// Veja o Exemplo Abaixo mas não execute, pode causar travamentos no seu ambiente de execução 
/* 
let contador = true;   // a variável contador vai ser verdadeira sempre
while(contador == true){  // essa condição vai ser sempre verdadeira, poderia ser reescrita assim: while(contador) que daria no mesmo
   console.log("Comandos executados enquato o programa estiver em execução"); 
}
*/

console.log("--- Estrutura de Repetição DO WHILE ---"); 
/* 
 O do/while tem quase o mesmo funcionamento que o while, a diferença é que com o uso dele teremos os comandos executados ao menos uma única vez.
*/

do {
  console.log("Executado pelo menos uma vez"); 
}while(false) 
// Output: Executado pelo menos uma vez
// Veja que a condição do While vai ser falsa sempre, mesmo assim a frase foi impressa uma vez.

console.log("--- Estrutura de Repetição FOR IN ---"); 
/*
  O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção/criação do elemento 

  Saber mais sobre propriedades enumeradas: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Enumerability_and_ownership_of_properties 
 */

let objeto = {1:"C", 2:"Python", 3:"C++", 4: "C#", 5:"PHP"};

   for(let prop in objeto) {
      console.log("Linguagem: "+ prop +" - "+objeto[prop]);
   } 
   // Output: Linguagem: 1 - C Linguagem: 2 - Python ... Linguagem: 5 - PHP 
/*
A função acima toma como argumento um objeto. O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus respectivos valores.
*/

// Outro Exemplo com Objetos comuns do JS
console.log("--- Percorrer Objetos ---"); 
  const pessoa = { 
		nome:"Maria",
		idade:20,
		peso:65,
		altura:1.7
	   } 
  
  //console.log(pessoa.idade); // acesso manualmente
   for(let atributo in pessoa){ // 
    	console.log(pessoa[atributo]);
    }
// Output: Maria 20 65 1.7

console.log("--- For In para Interar Vetores ---"); 

let marcas2 = ["LG","Samsung","Microsoft","Apple","Acer"];

   for(let element in marcas2) {
      console.log("Index: "+element+" - "+marcas2[element]);
   } // Output: Index: 0 - LG Index: 1 - Samsung ... Index: 4 - Acer

// Vantagem de uso do FOR IN é que ele percorre as estruturas até o final automaticamente sem precisar que a gente se preocupe em quantos elementos existem
// Nota: o Laço For In como visto, pode ser usado em Arrays/Vetores, mas existem umas ressalvas que podem ser consultadas neste no link abaixo
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in 

console.log("--- Estrutura de reptição For Of ---"); 
/* 
  O loop FOR...OF percorre objetos iterativos (incluindo Array, Map, Set, etc) 
  Exemplos abaixo
 */

let cursos = ["Sistemas de Informação","Ciências da Computação","Análise de Sistemas","Engenharia de Software"];

for(let curso of cursos){
    console.log("Faculdade: - "+ curso);
}
// Output : Faculdade: - Ciências da Computação Faculdade: - Análise de Sistemas ... Faculdade: - Engenharia de Software 

// Ao invés de let para a variável do FOR OF, você pode usar const se não for modificar a variável dentro do bloco. Veja um exemplo abaixo
let valoresFixos = [10, 20, 30];

for (const value of valoresFixos) {
  console.log(value); // valores da variável value não podem ser modificados  
}
// Output: 10 20 30

console.log("--- Usando FOR OF para Arrays de Objetos ---"); 

  const infoPessoa = [  // Sintaxe de como criar um Array de Objetos em JS 
		   {nome: "Robinson", idade: 18, altura:1.8},
		   {nome: "William", idade: 28, altura:1.6},
		   {nome: "Janaina", idade: 19, altura:1.5},
		   {nome: "Carla", idade: 25, altura:1.9},
		   {nome: "Maíra", idade: 32, altura:1.4},
         ];

    for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);
} // Output : Robinson-18-1.8 William-28-1.6 ...  Maíra-32-1.4

// Considerações sobre FOR IN e FOR OF, são laços de repetições com sintaxes agradáveis de usar, sendo o FOR IN mais recomendado para percorrer Objetos 
// Enquanto o FOR OF mais versável, indicado para Arrays, Maps e Conjuntos(Set) 

