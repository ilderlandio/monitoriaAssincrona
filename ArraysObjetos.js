
/* 
Nota: Este arquivo trata sobre os tipos Arrays e Objeto do JavaScript, a parte básica
Algumas partes do código são feitas para gerar erros de propósito, e portanto, para testar os próximos exemplos estes blocos de código foram comentados. 
Recomendo retirar os comentários, testar para verificar o erro e depois comentar novamente para executar os exemplos seguintes. 
Obs: Este código foi testado e executado pelo interpretador do JavaScript do NODE JS, mas deve funcionar em qualquer ambiente de execução do JS
*/ 
  
  
  // Arrays são formas de agrupar vários valores em uma estrutura associada a um identificador.
  // São variáveis compostas, Heterogênia:(string,float, interger, bool).
  // É uma estrutura indexada(possui um índice numérico para acessar o valor de uma posição do Array) 

  // sintaxe: let nameArray = [v1,v2,v3...Vn];
  console.log("--- Noções de Arrays em JS"); 
  // Exemplo: 
        let cliente = ["José",30,1.60]; 
           // indices    0    1   2 
        
        //acesso   
        console.log(cliente[0]); // Output: José
        console.log(cliente[2]); // Output: 1.60

        // posso adicionar um novo indice no array, com o seguinte comando
        cliente[3] = "Professor"; 
        // Array ficou assim: cliente = ["José",30,1.60,'Professor'];

        console.log(cliente[3]); // Output: Professor
        console.log(cliente); // Output: (4) ['José', 30, 1.6, 'Professor'] 

        // Tamanho do array, quantidade elementos dentro do Array  
        console.log(cliente.length); // // Output: 4 
        let size = cliente.length; // armazena o tamanho do vetor em uma variável
        console.log(size); // Output: 4 

        // POdemos adicionar um elemento no array com o push
        cliente.push("Masculino"); 

        console.log(cliente); //Output: (5) ['José', 30, 1.6, 'Professor', 'Masculino']
        
        // Podemos adicionar um objeto em uma posição do vetor
        cliente.push({id:3});

        console.log(cliente); //Output: (6)['José', 30, 1.6, 'Professor', 'Masculino', {…}]

        // Acesso do valor do objeto no vetor

        console.log(cliente[5].id); // Output : 3 
       
        // Podemos adicionar outros tipos no vetor
        cliente.push(true,null);
        console.log(cliente); //Output: (8) ['José', 30, 1.6, 'Professor', 'Masculino', {…}, true, null]
 
        // Importante -  Pode ser mais consistente criar arrays com valores que sejam do mesmo tipo

        let numeros = [2,5,7,9,3,32,6]; // arrays de números
        let nomes = ["João","Maria","Manoel","Carla"];  // arrais de strings

        // Podemos excluir o último elemento de um array com o pop()
        cliente.pop(); 
        console.log(cliente);  //Output: ['José', 30, 1.6, 'Professor', 'Masculino', {…}, true]

        // Deletar um elemento específico
        delete cliente[4];
        console.log(cliente[4]); //Output: undefined
        
        // Array é uma estrutura do tipo objeto, typeof diz que tipo é variável
        console.log(typeof cliente); //Output: object
        
    // Arrays definos com o tipo const pode ter os valores modificados, diferentes de variáveis que não podem ser alteradas

	const euipamento = ["Notebook", 
	                   {CPU:"i3",RAM:"4GB",AMS:"SSD"},
	                   1800];
                     
     console.log(euipamento[0]); //Output: Notebook
     console.log(euipamento[1].AMS); //Output: SSD
     console.log(euipamento[2]); //Output: 1800
     
     euipamento[2] = 1900; // Alteração do valor de uma posição do vetor, mesmo ele sendo criado com o const
     console.log(euipamento[2]); // Output:1900
   
    //Podemos percorrer e pegar os valores do vetor com as estruturas de repetição FOR, FOR IN, FOR OF e FOREACH - Exemplos em outro Arquivo 

    console.log("--- Noções de Objetos em JS"); 

    /* Tipo object no JS - É uma coleção de dados no formato - chave:valor, dentro de chaves {} */
        /* Sintaxe: 
        tipo(let/var/const) obj = {
        	chave:valor,
        	chavex:valorx, ...
        }
        
        Exemplos: 
        */

        const funcionario = {
          nome:"José Roberto", // nome é a chave, "José Roberto" é o valor 
          idade:30,   // O valor pode ser inteiro, string, float, boolean, etc. 
          altura:1.70
         }

          // Para acessar um valor de uma chave

          console.log(funcionario.nome); //Output: José Roberto

          // Podemos ter valores com outro objeto / Encadeamento de objetos
          const funcionario2 = {
            nome:"José Roberto", // nome é a chave, "José Roberto" é o valor 
            idade:30,   // O valor pode ser inteiro, string, float, boolean, etc. 
            altura:1.70, 
            endereco:{ // Esta chave armazena outro objeto 
                rua:"13 de maio",
                numero:"S/N",
                cidade:"Iguatu"}
           }
         
        //Acesso 
        console.log(funcionario2.endereco.rua); //Output: 13 de maio

        // Podemos adicionar métodos ao Objeto

        const cadastro = {
            nome:"José Roberto", // nome é a chave, "José Roberto" é o valor 
            idade:30,   // O valor pode ser inteiro, string, float, boolean, etc. 
            altura:1.70, 
            endereco:{ // Esta chave armazena outro objeto 
                rua:"13 de maio",
                numero:"S/N",
                cidade:"Iguatu"
              }, 
            salario:function(base,ajuste){ 
                   let sal = base *  ajuste;  
                   console.log(sal); // 
              } 
           }
  
          cadastro.salario(2000,1.1); //Output: 2200 
          
          // Objetos do tipo de Const podem ter seu valores alterados
          // Exemplo

          cadastro.idade = 34; 
          console.log(cadastro.idade); //Output: 34

          // Podemos adicionar novas propriedades ao Objeto

          cadastro.filhos = 3; 
          console.log(cadastro.filhos);  //Output: 3 

          // Podemos deletar uma propriedade de um Objeto

          delete cadastro.altura; 

          console.log(cadastro.altura); //Output: undefined

          // Podemos impedir que o objeto seja alterado
          
          Object.freeze(cadastro); 
          Object.freeze(cadastro.endereco); 
          
          cadastro.nome = "Lucas"; // Não consegue alterar
          cadastro.endereco.cidade = "Iguatu"; //Não consegue alterar

          console.log(cadastro.nome); //Output: José Roberto
          console.log(cadastro.endereco.cidade); //Output: Iguatu

          // Pode criar um objeto já sem a possibilidade de alteração

          // Se quiser criar um objeto inalterável
        const newObj = Object.freeze({
          nome:"Maria",
          idade:16
         }); 
         
         newObj.nome = "João"; // não serve de nada  
         console.log(newObj.nome); //Output: Maria

         // Podemos ter valors do tipo Array no Objeto

         let registro = {
          aluno:"Marcos",
          notas:[7,8,5],  // vetor com notas
          curso:"informática" 
         }
     
         // Acesso
         console.log(registro.notas[1]); //Output: 8
