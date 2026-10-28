//Array normal --------------------------------------------------
// const notas = [7, 8.5, 6]
// console.log (notas[1]);

//Array de objetos -------------------------------------------------

//1 objeto com nome = chave / Lucas = valor 
// const aluno = {nome: "Lucas", idade: 35} //chae e valor dentro dele
// console.log (aluno.nome);


// const turma =  [
//     {nome: "Lucas", idade: 35},
//     {nome: "Ana", idade: 21},
//     {nome: "Amanda", idade: 23},
// ]
// console.log (turma[1].nome); //chamar Ana

//--------------------------------------------------------------------

// const frutas = ["Maçã", "Banana", "Laranja"];
// console.log (frutas [0]);
// console.log (frutas.length); //me dá o tamanho do arrat=y, ou seja, quantos elementos tem no array
// console.log (frutas[frutas.length -1]); //joga para o último da lista
// console.log (frutas.at (-1)); //joga para o último da lista
// console.log (frutas[10]); //erro

// frutas [1] = "Morango" //substitui
// console.log (frutas);

//--------------------------------------------------------------------

// const fila = ["Ana", "Bia"];

// fila.push ("Caio"); //Caio é adicionado
// fila.unshift ("Zeca"); //Zeca é adicionado e colocado em primeiro

// console.log (fila);

// const atendido = fila.shift (); //remove quem está em primeiro e coloca em atendido
// const saiu = fila.pop ();

// console.log (fila);
// console.log (atendido, saiu);

//------------------------------------------------------------------

// const letras = ["a", "b", "c", "d", "e"];

// letras.splice (1,2) //colocar dois elementos como atributo, inicial e quantos quero tirar 
// console.log (letras); // letras = ["a","d", "e"]

// letras.splice (1, 0, "x", "y");//inicial, remover, adicionar 
// console.log (letras); //letras = [ 'a', 'x', 'y', 'd', 'e' ]

// letras.splice (0, 1, "z")
// console.log (letras); // letras = [ 'z', 'x', 'y', 'd', 'e' ]

//---------------------------------------------------------------------------

// const nums = [1, 2, 3, 4, 5];

// console.log (nums.slice(1, 3)); //inicio, fim -> Intervalo do array -> [2,3]
// console.log (nums.slice(-2)); // Intervalo do array -> [4,5]
// console.log (nums.slice()); //[ 1, 2, 3, 4, 5 ]

// console.log(nums.includes (3)); //Vai procurar o parecido e ver se tem alguém incluso, traz true or false
// console.log(nums.includes (99));

// console.log (nums.indexOf(4)); //traz o [5]
// console.log (nums.indexOf(99)) //traz [-1] pq nao tem no array

// console.log (nums.join("--")); //1--2--3--4--5
// console.log (nums); //[ 1, 2, 3, 4, 5 ]

//--------------------------------------------------------------
// const a = [1,2];
// const b = [3,4];

// //juntar dois arrays 
// console.log (a.concat(b)); //= ([...a,...b]) -> [ 1, 2, 3, 4 ]
// console.log ([...a,...b]) //... os 3 pontos significa que quer os 3 elementos que estao lá -> [ 1, 2, 3, 4 ]
// console.log ([0, ...a, 99, ...b]) // traz [ 0, 1, 2, 99, 3, 4 ]

//---------------------------------------------------------------

const aluno = {nome: "Ana", idade: "20"};

aluno.idade = 21 ; //alterei a idade 
aluno.cidade = "São Paulo"; //adicionar a informação 

console.log(aluno);

delete aluno.cidade; //excluir a informação
console.log (aluno); 
