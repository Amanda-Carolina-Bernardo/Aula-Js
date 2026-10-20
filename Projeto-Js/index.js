//Linguagem Interpretada 
//NodeJs
//Tipagem Fraca
/*
let minhaVariavel = 10;
console.log (minhaVariavel);

minhaVariavel= "Olá,mundo!!";
console.log(minhaVariavel);

minhaVariavel = true;
console.log (minhaVariavel);

let numero =10;
let texto = "20";
let resultado = numero + texto;
console.log (resultado);
*/

//Variável 

//variáveis não podem ter mesmo nome

//let palavra que cria a variável - posso trocar o conteudo dentro da variável
//const palavra que cria a variável - não é possível alterar o valor dentro da variável
//var palavra que cria a variável - caindo em desuso, let vem no lugar, não importa em qual lugar ele esta

/* 
let idade = 35;
//idade nome que eu dei (etiqueta) informação guardada no computador
//= atribui o valor 
//35 valor

let nome = "Lucas"; //nome da variável e o valor que estou dando pra minha variável
let idade1 = 35;

console.log (nome);
console.log (idade1);
console.log (idade1 + 1);
console.log ("Olá, " + nome + "!");

idade1 = 30; //alterar o valor da variável, é possível alterar pq com let posso trocar quando quiser o conteúdo 

const idade2 = 35;
*/


/*
//Case Sensitive
let nome = "Lucas";
let Nome = "Maria";
let NOME = "João";
console.log (nome)
console.log (Nome)
console.log (NOME)
*/


//Palavras Reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch, case

//let if = "teste" -erro 


//Regras de Nomenclatura
//Só pode começar com letra, _ ou $
//Pode conter: letras, números, _ ou $
//Não pode começar com número
//Não tem espaço usa Camel case (nomeCompleto)
//Não coloque acento, não é usado
//Nome de variável é em inglês
/* 
let idade = 20;
idade = 21;
console.log(idade);

const PI = 3.14159;

const total = 150;

if (total > 100) {
    var desconto = 10;
    let frete = 0;
}
console.log (frete); 
*/
/*
//Tipos Primitivos 
const preco = 19.9;
console.log (typeof preco);

const nome = "Amanda"
console.log (typeof nome);

const ativo = true;
console.log (typeof ativo); //boolean verdadeiro ou falso

const vazio = null;
console.log (typeof vazio); //erro Js ele é nulo mas vem como object

let indefinido; 
console.log (typeof indefinido); //variável não tem nenhum valor
*/
/*
//Strings e Templates Literals
const nome1= "Lucas";
const nome2= 'Maria';
const nome3= `João`;
const idade= 23;

const nomeCompleto= "Amanda Carolina Bernardo";

console.log(nomeCompleto.length); //length=comprimento
console.log (nomeCompleto.toUpperCase());//toUpperCase=Função -> Parenteses ativa a função
console.log (nomeCompleto.toLowerCase());
console.log (`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos.`);
*/

//Conversões e Tipos 
// console.log(Number("123"));
// console.log(parseInt("10.9"));
// console.log(parseFloat("10.9"));
// console.log(String(123));

// console.log(Boolean(0)); //0=false
// console.log(Boolean(1)); //1=true
// console.log(Boolean("")); //false

// const texto1 = prompt ("Digite um número:");
// const texto = Number (prompt ("Digite um número:"));
// console.log(texto + 5);

//Arredondamento e formatando números
// const preco = 19.987;
// Console.log é para imprimir, apenas para ver o que tá acontecendo

// console.log (preco.toFixed(2)); //colocar em quantas casas decimais eu quiser
// console.log (Math.round(preco)); //arredondar pra cima
// console.log (Math.floor(preco)); //arredondar pra baixo
// console.log (Math.ceil(preco)); //arredondar pro número mais próximo

//Operadores Aritméticos
// console.log(2 + 3); //adição 
// console.log(5 - 2); //subtração
// console.log(4 * 2); //multiplicação
// console.log(10 / 2); //divisão
// console.log(10 % 3); //resto da divisão 
// console.log(2 ** 3); //potência

//Operadores de Comparação 
// console.log(5 == "5") //igual frouxo -> Comparação entre valores
// "=" é uma atribuição
// console.log(5 == 5);
// console.log(5 === 5) //igual estrito, esse seá falso

// console.log(5!= "5") //diferente frouxo
// console.log(5!= "7") //diferente frouxo

// console.log(5!== "5") //diferente estrito
// console.log(5!== 7) //diferente estrito


//Média de duas notas
// const nota1 = Number (prompt ("Primeira nota:"));
// const nota2 = Number (prompt ("Segunda nota:"));

// const media = (nota1 + nota2) /2;
// console.log (`Média: ${media.toFixed(1)}`);

//IMC (Índice de Massa Corporal)
const peso = Number(prompt ("Digite seu peso (kg):"));
const altura = Number(prompt("Altura (m):"));

const imc = peso / (altura **2);

alert(`IMC: ${imc.toFixed(2)}`);


