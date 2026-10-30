//1-
/*Comece com uma fila vazia. Chegam Ana, Bia e Caio (nessa ordem). Atenda o primeiro da fila. Depois chega Duda com atendimento prioritário, que deve ir para o início. Mostre a fila a cada etapa.

Saída esperada: `[ 'Ana', 'Bia', 'Caio' ]`, depois `[ 'Bia', 'Caio' ]`, depois `[ 'Duda', 'Bia', 'Caio' ]`
*/

// const fila = [];

//  fila.push ("Ana");
//  fila.push("Bia");
//  fila.push ("Caio");

//  console.log (fila);

// fila.shift ();

// console.log (fila);

// fila.unshift ("Duda");
// console.log (fila);

// //2-
// /*Crie `remover(lista, valor)` que remove o valor da lista (se existir) e devolve `true` se removeu ou `false` se não achou.

// Exemplo: `remover(["a", "b", "c"], "b")` devolve `true` e a lista vira `[ 'a', 'c' ]`*/

// function remover (lista, valor){
//     const posicao = lista.indexOf(valor);
//     if (posicao === -1){
//         return false
//     } 
//    lista.splice(posicao, 1); //exclui 1
//    return true
// }

// const letras = ["a","b","c"];
// console.log(remover(letras, "b")); //lista=letras valor= b
// console.log (letras);


// //3-
// /*Crie um objeto `aluno` com `nome` e `idade`. Depois: altere a idade, acrescente `curso`, remova a `idade` e mostre as chaves que sobraram.

// Saída esperada: `[ 'nome', 'curso' ]`*/

// const aluno = {nome:"Amanda", idade: 22};

// console.log (aluno);

// aluno.idade = 23;
// aluno.curso = "Front";

// console.log (aluno);
// delete aluno.idade;

// console.log (aluno);
// console.log (Object.keys(aluno)); //traz as chaves dos objetos => [ 'nome', 'curso' ] // => - é a função anônima 

// //4-
// /* Dado um array de alunos `{ nome, nota }`, crie `mediaTurma(alunos)` e `melhorAluno(alunos)` (devolve o objeto do aluno com a maior nota).

// Exemplo: com Ana 8, Bia 5.5 e Caio 7 → média `6.833...` e melhor aluno `{ nome: 'Ana', nota: 8 }`*/ 


// function mediaTurma(alunos){
//     let soma= 0; //guardar a informacao
//     for (const aluno of alunos) { //of consegue pegar o objeto do array
//         soma += aluno.nota;
//     }
//     return soma / alunos.length; //length começa com 1 não com 0
// }

// function melhorAluno(alunos){
//     let melhor = alunos [0];
//     for (const aluno of alunos){ //percorre aluno por aluno
//         if (aluno.nota > melhor.nota) {
//             melhor = aluno
//         }
//     }
//     return melhor;
// }
// const turma = [
//     { nome: "Ana" , nota: "8" },
//     { nome: "Bia" , nota: "5.5" },
//     { nome: "Caio" , nota: "7" },
// ];

// console.log (mediaTurma(turma).toFixed(2));
// console.log (melhorAluno(turma));


//-------------------------------------------------------------------------------


//5-
//Dado const nums = [1, 2, 3, 4, 5], use map para criar um array com o dobro de cada número

// const nums = [1, 2, 3, 4, 5];

// //versão reduzida 
// const dobros = nums.map (n => n*2);
// console.log (dobros);
// console.log (nums);


// //versão "normal"
// const dobros = nums.map ((value => {
//     return value *2
// }));


//---------------------------------------------------------------------------------
//6-
/*Dado const nomes = ["ana", "bruno", "carla"], use map para devolver todos os nomes em letras maiúsculas.*/

// const nomes = ["ana", "bruno", "carla"];
// const maiuscula = nomes.map (n => n.toUpperCase()); //não esquecer de colocar parenteses para chamar a função

// console.log (maiuscula);


//----------------------------------------------------------------------------------
//7-
/*Dado const precos = [100, 200, 50], use map para devolver os preços com 10% de aumento.*/

// const precos = [100, 200, 50]
// const novos = precos.map (preco => preco + preco * 0.1 );

// console.log (novos);


//--------------------------------------------------------------------------

//8- 
/*Dado um array de alunos com nome e nota, use map para obter só os nomes.*/
// const alunos = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bruno", nota: 5 },
//   { nome: "Carla", nota: 9 },
// ];

// const nomes = alunos.map (aluno => aluno.nome);
// console.log (nomes);

//-----------------------------------------------------------------------------
//9-

/*Com o mesmo array de alunos, use map para gerar textos no formato "Ana: 8".*/
// const alunos = [
//    { nome: "Ana", nota: 8 },
//    { nome: "Bruno", nota: 5 },
//    { nome: "Carla", nota: 9 },
// ];

// const linhas = alunos.map (aluno => `${aluno.nome}: ${aluno.nota}`);
// console.log (linhas);

//---------------------------------------------------------------------------------

//10- 
//Dado um array de produtos com nome e preco, devolva objetos com os mesmos campos e um novo campo precoFinal com 10% de desconto. O array original não pode mudar.

// const produtos = [
//   { nome: "Mouse", preco: 100 },
//   { nome: "Teclado", preco: 40 },
// ];

// const desconto = produtos.map (p=> {
//     return {...p, precoFinal: p.preco - p.preco *0.1} //...= quero tudo do meu objeto, todos os objetos que estão dentro do array
// });
// console.log (desconto);

//---------------------------------------------------------
//11-
/*Numerar uma lista com index

Dado const fila = ["Ana", "Bia", "Caio"], use map com o segundo parâmetro (index) para gerar "1. Ana", "2. Bia"...*/

// const fila = ["Ana", "Bia", "Caio"];

// const lista = fila.map ((nome, index)=> `${index+1}. ${nome}`);

// console.log (lista);

//---------------------------------------------------------------------

//12-
/*Filter e map encadeados
Dado um array de itens com nome, qtd e preco, devolva objetos { nome, subtotal } apenas dos itens com qtd maior que 0. O subtotal é qtd * preco. */

// const itens = [
//   { nome: "Caneta", qtd: 3, preco: 2 },
//   { nome: "Lápis", qtd: 0, preco: 1 },
//   { nome: "Caderno", qtd: 2, preco: 15 },
// ];

// const resultado = itens 
// .filter (t => t.qtd > 0 )
// .map (t => ({
//     nome: t.nome, 
//     subtotal: t.qtd * t.preco
// }))

// console.log (resultado);


//------------------------------------------------------------------
//13-
/*Dado const nums = [1, 2, 3, 4, 5, 6, 7, 8], use filter para ficar só com os números pares.*/

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const pares = nums.filter (n => n % 2 === 0); 
// console.log (pares);

//------------------------------------------------------

//14-
/*Duas condições
Dado um array de pessoas com nome, idade e ativo (true/false), devolva só as pessoas ativas e maiores de 18.*/

// const pessoas = [
//   { nome: "Ana", idade: 20, ativo: true },
//   { nome: "Bia", idade: 17, ativo: true },
//   { nome: "Caio", idade: 25, ativo: false },
//   { nome: "Duda", idade: 30, ativo: true },
// ];

// const ativas = pessoas.filter (p => p.idade >= 18 && p.ativo === true);

// console.log (ativas);
// console.log (ativas.map(p=> p.nome));  //[ 'Ana', 'Duda' ]

//-----------------------------------------------------
//15-
/*Dado um array de títulos de filmes e o termo "ar", devolva os títulos que contêm o termo, sem diferenciar maiúsculas de minúsculas.*/

// const titulos = ["Star Wars", "Matrix", "Parasita", "Avatar"];
// const termo = "ar"
// const filmes = titulos.filter (f=> f.toLocaleLowerCase().includes(termo.toLowerCase()));

// console.log (filmes);


//-------------------------------------------------------------
//16-
/*1: Remover um item pelo id
Dado um array de tarefas com id e texto, use filter para devolver a lista sem a tarefa de id 2.*/

// const tarefas = [
//   { id: 1, texto: "Estudar" },
//   { id: 2, texto: "Treinar" },
//   { id: 3, texto: "Dormir" },
// ];

// const excluir = tarefas.filter (t=> t.id !== 2) //!== - diferente de algo
// console.log (excluir);

//------------------------------------------------------------
//17-
/*Primeiro maior que 10
Dado const nums = [4, 8, 12, 15, 3], use find para achar o primeiro número maior que 10.
*/
// const nums = [4, 8, 12, 15, 3]

// const maior10 = nums.find (n=> n > 10);
// console.log (maior10);

//---------------------------------------------------------
//18-
/* Dado um array de pessoas com nome e idade, ache a pessoa chamada "Bruno".*/

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 30 },
]

const bruno = pessoas.find (p=> p.nome === "Bruno");
console.log (bruno); 