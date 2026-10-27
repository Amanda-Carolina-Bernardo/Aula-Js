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

function contarVogais (texto){
    const vogais = "aeiou";
    let total = 0;

    for (const letra of texto.toLowerCase()) { //toLowerCase -> todas as letras minusculas
        if (vogais.includes (letra)){ //includes= o que inclui--> vogais 
            total ++ //-> adiciona 1 quando é uma vogal ao total
        }
    }
    return total;
}

console.log (contarVogais("Amanda"));