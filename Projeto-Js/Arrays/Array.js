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

// const aluno = {nome: "Ana", idade: "20"};

// aluno.idade = 21 ; //alterei a idade 
// aluno.cidade = "São Paulo"; //adicionar a informação 

// console.log(aluno);

// delete aluno.cidade; //excluir a informação
// console.log (aluno); 

//--------------------------------------------------------------------------------

//Filter, Map, Find e Reduce
//3 formas de escrever a função

// function dobro (n){
//     return n*2;
// }

// const dobroArrow = (n) => { //=> função anonima 
//     return n*2;
// }

// const dobroCurto = n => n*2; //tem só 1 elemento na minha função

//----------------------------------------------------

console.log ("===FILTER==="); //FILTER -> Pega um array e te entrega um novo com filtro mas sem alterar o original

const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
const joao = { name: "João", lastName: "Silva", age: 18 };
const ana = { name: "Ana", lastName: "Santos", age: 22 };
const people = [lucas, maria, joao, ana];

const maiores = people.filter((value, index, array) => { //value, index= posição, array
    console.log ("Index",index);
    console.log ("Value",value.name);
    console.log ("-------------------");
    return value.age >=18; 
});

console.log ("Resultado filter:", maiores)

console.log ("=== MAP ==="); //te devolve um novo array mas do mesmo tamanho do original

const nome = people.map ((value, index, array)=> {
    console.log ("Index",index);
    console.log ("Value",value.name);
    console.log ("-------------------");
    return value.name;
});
 console.log ("Resultado map:", nome);

 console.log ("=== FIND ==="); //procura uma informação dentro do array, pega a primeira condição que satifaz o laço, é interessante quando precisa de algo único
const mariaEncontrada = people.find ((value, index, array) =>{
    console.log ("Index",index);
    console.log ("Value",value.name);
    console.log ("-------------------");
    return value.name === "Maria";
})

console.log ("Resultado find:", mariaEncontrada);

const pedro = people.find (p => p.name === "Pedro");
console.log (pedro);
if (pedro === undefined) {
    console.log ("Pessoa não encontrada");
}

console.log ("=== REDUCE ==="); //pega todo array e entrega um elemento
// array.reduce ((acumulador, elementoAtual, indice, arrayOriginal)=> {

// }, valorInicial) //acumulador = acc = onde ele vai acumulando 

const somaIdades = people.reduce ((acc, value, index, array)=> {
    console.log ("Index",index);
    console.log ("Value",value.name, value.age);
    console.log ("Acumulador antes:", acc); //mostrar acumulando
    return acc + value.age;
}, 0)

console.log ("Resultado reduce:", somaIdades);

//------------------------------------------------------
//Encadeamento

const nomesMaiores = people
.filter (p => p.age >= 18)
.map (p => p.name.toUpperCase());

console.log (nomesMaiores);

const somarMaiores = people
.filter (p => p.age >= 18)
.reduce ((acc,p) => acc + p.age, 0 );  //parenteses a mais por ter dois valores 
console.log (somarMaiores);
