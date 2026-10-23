//Arrays
/* lista de valores com índice que começa com 0*/

// const frutas = ["Maçã", "Banana", "Laranja"]; //posso colocar quantos arrays quiser, nesse caso maçã é 0, banana é 1 e por ai vai 

// console.log (frutas[0]);
// console.log (frutas [2]);
// console.log (frutas.length); //lenght= mostra comprimento de texgto e também de array

// frutas.push("Uva"); //coloco a uva como último indice 
// console.log(frutas);

// //Objetos - conjunto de chave e valor 

// const pessoa = [
//     {nome: "Lucas", idade: 35} //nome = chave / Lucas = valor 
// ]

// console.log (pessoa.nome);
// pessoa.cidade = "São Paulo"


//While 

// let i = 1; 

// while (i <= 5) {
//     console.log ("Número: " + i); //assim está em loop infinito, terminando de imprimir ele volta a repetir
// }

// let i = 1; 

// while (i <= 5) {
//     console.log ("Número: " + i);
//     i++ // mesmo que i = i + 1
// }


//do...while - variação do while - código roda pelo menos uma vez antes de comprovar se é verdadeiro, diferente do while que ele só roda se for verdade.

// let senha;
// do {
//     senha = prompt ("Digite a senha:");
// } while (senha !== "1234"); //!== negação



//For
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 X ${i}= ${7 * i}`);
// }


//Contagem regressiva

// for (let i=10; i>=1; i--) {
//     console.log (i);
// }
// console.log ("Feliz ano novo ;) ")

//Acumulador: somando dentro do loop

// let soma = 0;

// for (let i = 1; i <= 5; i++){
//     soma += i
// }

// console.log (soma);




//for...of - em uma lista de arrays

// const frutas = ["Maçã", "Banana", "Laranja"]; 

// for (const fruta of frutas) {
//     console.log ("Fruta:", fruta);  
// }



//for...in - pega a chave de cada objeto

// const pessoa = {nome: "Lucas", idade: 35, cidade: "Recife"};

// for (const chave in pessoa){
//     console.log(`${chave}: ${pessoa[chave]}`);
// }



//Laço dentro de laço

// for (let linha = 1; linha <=3; linha++) {
//     let texto = ""; //aspas vazia, começa com uma linha vazia
    
//     for (let coluna = 1; coluna <= 4; coluna ++) {
//         texto += "* ";
//     }
//     console.log(texto)
// }


//Pirâmide
// for (let linha =1; linha <=4; linha++) {
//     let texto = "";

//     for (let coluna=1; coluna <= linha; coluna ++) {
//         texto += "* "
//     }
//     console.log(texto);
// }

