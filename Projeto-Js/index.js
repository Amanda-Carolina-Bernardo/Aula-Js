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
