//1-
// Crie a função saudar(nome) que devolve o texto Olá, <nome>!.

// function saudar1 (nome){
//     console.log (`Olá, ${nome}`);
// }

// saudar1 ("Amanda");

// function saudar (nome){
//     return `Olá, ${nome}`
// }

// console.log (saudar ("Amanda"));

//---------------------------------------------------

//2-
//Crie a função `areaRetangulo(base, altura)` que devolve a área.
//**Exemplo:** `areaRetangulo(5, 3)` devolve `15`

// function areaRetangulo (base, altura){
//     return base * altura ;
// }

// console.log (areaRetangulo(5,3));

//----------------------------------------------------

//3- 
//Crie `maiorDeTres(a, b, c)` que devolve o maior dos três números, sem usar `Math.max`.
//**Exemplo:** `maiorDeTres(3, 9, 5)` devolve `9`

// function maiorDeTres(a, b, c){
//     let maior = a
//     if (b > maior) maior = b;
//     if (c > maior) maior = c;
//     return maior;    
//     }

// console.log (maiorDeTres(9,2,4));
// console.log (maiorDeTres(2,5,4));
// console.log (maiorDeTres(2,5,8));
// Ouuuuu
// Math.max(); //função pronta 
//     console.log (Math.max (3,9,5));

//--------------------------------------------

//4-
//Crie `celsiusParaFahrenheit(c)`. Fórmula: `c * 9 / 5 + 32`. Se `c` não for um número válido, devolva `null`.
//**Exemplo:** `celsiusParaFahrenheit(100)` devolve `212`; `celsiusParaFahrenheit("abc")` devolve `null`


// function celsiusParaFahrenheit (c){
//     if (typeof c !== "number" || Number.isNaN(c)){ //verificação
//         return null
//     }
//     return (c * 9) / 5 + 32;
// }
// console.log (celsiusParaFahrenheit (100));

//---------------------------------------------------

//5-
//Crie `contarVogais(texto)` que devolve quantas vogais (a, e, i, o, u) o texto tem, sem diferenciar maiúsculas de minúsculas.
//**Exemplo:** `contarVogais("JavaScript")` devolve `3`

// function contarVogais (texto){
//     const vogais = "aeiou";
//     let total = 0;

//     for (const letra of texto.toLowerCase()) { //toLowerCase -> todas as letras minusculas
//         if (vogais.includes (letra)){ //includes= o que inclui--> vogais 
//             total ++ //-> adiciona 1 quando é uma vogal ao total
//         }
//     }
//     return total;
// }

// console.log (contarVogais("Amanda"));

//6-
//Crie `inverter(texto)` que devolve o texto de trás para frente. Depois crie `ehPalindromo(texto)` que **usa** `inverter` e devolve `true` ou `false`, ignorando maiúsculas.

//**Exemplo:** ehPalindromo("Arara")` devolve `true`; `ehPalindromo("Casa")` devolve `false`

// function inverter(texto) {
//     let invertida = "";
//     for (let i = texto.length -1; i >= 0; i--) {
//         invertida += texto[i]
//     }
//     return invertida;
// }

// function ehPalindromo (texto) {
//     const normal = texto.toLowerCase();
//     return normal === inverter (normal);
// }

// console.log (ehPalindromo("Arara"));


//7- 
//Crie `depositar(saldo, valor)` e `sacar(saldo, valor)`, cada uma **devolvendo o novo saldo**. O saque deve ser recusado (mostrando uma mensagem e mantendo o saldo) se o valor for inválido ou maior que o saldo. Depois, desafie-se a encaixá-las no menu com `do...while` da aula de repetição.
//**Exemplo:** saldo `100` → depositar `50` → sacar `30` → sacar `500` → saldo final `120`

// function depositar(saldo, valor) {
//     if (valor<=0) {
//         console.log ("Valor inválido");
//         return saldo
//     }
//     return saldo + valor 
// }

// function sacar (saldo, valor){
//     if (valor<=0 || valor > saldo) {
//         console.log ("Operação não permitida");
//         return saldo
//     } 
//     return saldo - valor;
// }

// let total = 100;
// total = depositar(total,50);

// console.log ("Saldo final:", total);



//8-
//Crie um objeto (é um array) `operacoes` em que cada chave é um símbolo (`"+"`, `"-"`, `"*"`, `"/"`) e cada valor é uma arrow function. Depois crie `calcular(a, op, b)` que escolhe a função certa. Devolva `null` para operação desconhecida ou divisão por zero.

//**Exemplo:** `calcular(10, "+", 5)` devolve `15`; `calcular(10, "/", 0)` devolve `null`

const operacoes = {
    "+": (a, b ) => a + b,
    "-": (a, b ) => a - b,
    "*": (a, b ) => a * b,
    "/": (a, b ) => (b === 0 ? null : a / b ), //tern[ario]
};

function calcular (a, op, b) {
    const funcao = operacoes [op];
    if (!funcao) {
         return null
    }

    return funcao(a,b)
}

console.log(calcular(10, "+", 5));
console.log(calcular(10, "/", 0));