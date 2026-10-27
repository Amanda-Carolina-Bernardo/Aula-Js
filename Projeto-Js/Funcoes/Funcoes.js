// const precoA = 100;
// console.log ("Preço final A:", precoA - precoA * 0.1);
// const precoB= 250;
// console.log ("Preço final A:", precoB - precoB * 0.1);
// const precoC = 80;
// console.log ("Preço final A:", precoC - precoC * 0.1);

// function aplicarDesconto (preco) { //preco é um parâmetro
//     return preco - preco * 0.1;
// }

// console.log ("Preço final A:", aplicarDesconto(100));
// console.log ("Preço final B:", aplicarDesconto(250));
// console.log ("Preço final C:", aplicarDesconto(80));

// function saudar() {
//     console.log ("Olá e muito bem vindo");
// }
// saudar ();

// function saudar(nome){
//     console.log("Olá, " + nome + "!");
// }

// saudar ("Amanda");


// function apresentar (nome, idade) {
//     console.log (`${nome} tem ${idade} anos.`)
// }

// apresentar ("Amanda", 23);

// function cumprimentar (nome = "Jovem Padawan") {
//     console.log (`Bem-vindo, ${nome}`);
// }

// cumprimentar ("Amanda");
// cumprimentar ();

//---------------------------------------------


// function somar (a, b){
//     console.log (a + b);
// }

// somar (2, 3); //soma
// somar (2); //dá um erro
// somar (2, 3, 4); //soma os dois primeiros e exclui o terceiro número

// function dobroMostra (n){
//     console.log (n *2);
// }

// function dobroDevolve (n){
//     return n * 2;
// }

// dobroMostra (5);
// const b = dobroDevolve (5); //para devolver essa função, precisa de uma const
// console.log (b) 



//----------------------------------------------------
// function classificar (idade){
//     if (idade < 0){
//         return "Idade inválida" //caso seja um número negativo o return acaba com a função
//     } 
//     if (idade >= 18){
//         return "Maior de idade!";
//     }
//     return "Menor de idade!";
// }

// console.log (classificar(10));
// console.log (classificar(20));
// console.log (classificar(-2));




// //Array de objetos
// function estatisticas (a,b){
//     return {
//         soma: a + b, 
//         media: (a + b) / 2,
//     };
// }

// const resultado = estatisticas (4, 10);
// console.log (resultado.soma);
// console.log (resultado.media);




// //
// function ehPar (a){
//     return a % 2 === 0 //saber se é par %= resto da divisão, traz uma resposta positiva ou negativa
// }

// function descrever (a){
//     return ehPar (a) ? "Par" : "Ìmpar" // ? = if : = else, sendo a condição o que está no return acima
// }

// console.log (descrever (4));
// console.log (descrever (7));




//Guardar função em uma variavél

const dobro = function (n){
    return n*2;
}

console.log (dobro (4));

function quadrado1(n) {
    return n * n;
};

const  quadrado2 = function (n) {
    return n*n
};
const  quadrado3 = (n) => {
    return n*n;
};
const  quadrado4 = n => n*n;

const somar = (a, b) => a + b ;

const oi = () => "Oi!!!";

const criarAluno = nome => ({nome: nome, ativo: true});
console.log (criarAluno ("Amanda"));