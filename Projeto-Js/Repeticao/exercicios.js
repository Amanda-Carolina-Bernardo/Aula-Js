//1-
/*
Contagem de 1 a 10 com while
Mostre no console os números de 1 a 10 usando um laço while.*/

// let i = 1
// while (i <= 10){
//     console.log ("Número: " + i);
//     i++ //não esquecer senão fica em loop
// }

//2- tabuada do 5 com for

// for (let i = 1; i<=10; i++) {
//     console.log (`5 X ${i} = ${5 * i}`);
// }

//3-  Soma de 1 a 100 com for

// let soma = 0 

// for (let i = 1; i<=100; i++){
//     soma += i 
// }

// console.log (soma);



//4- 
/*Peça 5 números ao usuário, calcule e mostre a média.

**Exemplo:** entradas `2`, `4`, `6`, `8` e `10` → saída `A média é 6`*/

// let soma = 0;

// for (let i = 1; i <= 5; i++){
//     const num = Number (prompt (`Digite o ${i} número:`));
//     soma += num
// }
// //Após acabar o laço de repetição que ele deve fazer a conta
// const media = soma / 5;

// console.log (`A média é ${media}`);


/*Peça nomes repetidamente. Só pare quando o usuário digitar "sair".

**Exemplo:** entradas `Ana`, `Bia` e `sair` → saídas `Você digitou: Ana` e `Você digitou: Bia`*/

// let nome;

// do {
//     nome = prompt ("Digite um nome ou 'sair' para encerrar");
//     if(nome !== "sair"){
//         console.log (`Você digitou: ${nome}`);
//     }
// } while (nome !== "sair")



/*Mostre no console apenas os números pares de 1 a 20.

**Exemplo de saída:** `2`, `4`, `6`, ... até `20`*/

// for (let i = 1; i <= 20 ; i++) {
//     if (i % 2 === 0) {
//      console.log (i);
//     } 
// }

/*Peça uma palavra e verifique se é um palíndromo (lê-se igual de frente para trás, ex.: "arara").

**Exemplo:** `arara` → `arara é um palíndromo!` · `casa` → `casa não é um palíndromo.`*/

// const palavra = prompt ("Digite uma palavra:");

// let invertida = "";

// for (let i = palavra.length -1; i >= 0; i--) {
//     invertida += palavra[i];
// }

// if (palavra === invertida) {
//     console.log = (`${palavra} é um palíndromo`);
// } else {
//     console.log = (`${palavra} não é um palíndromo`);
// }


/*Simule um menu de banco (1-Depositar, 2-Sacar, 3-Sair). Enquanto o usuário não digitar 3, o menu deve continuar aparecendo.

**Exemplo:** opção `1` com valor `100` → `Depósito realizado. Saldo: R$100`; 
depois opção `2` com valor `30` → `Saque realizado. Saldo: R$70`; depois opção `3` → `Programa encerrado.`*/

// let saldo = 0;
// let opcao;

// do {
//     opcao = Number(prompt("Menu: \n1-Depositar, 2-Sacar, 3-Sair"));
//     if (opcao=== "1") {
//         const valor = Number(prompt("Valor para depósito"));
//         saldo += valor;
//         console.log (`Depósito realizado. Saldo: ${saldo}`);
//     } else if (opcao === "2") {
//         const valor = Number(prompt("Valor para saque:"));
//         if (valor > saldo){
//             console.log ("Saldo insuficiente.");
//         } else{
//             saldo -= valor;
//             console.log (`Saque realizado. Saldo: ${saldo}`);
//         }
//     } else if (opcao !=="3") {
//         console.log ("Opção inválida.")
//     }
// } while (opcao !== "3"); //condição para se manter no laço
// console.log ("Programa encerrado.");


/*Mostre as tabuadas do 1 ao 10, cada uma de x1 até x10, com um título antes de cada tabuada.
Use um laço dentro de outro.*/

for (let a = 1; a<=10; a++) {
    console.log (`--- Tabuada do ${a} ----`);

    for (let b = 1; b<=10; b++) {
        console.log (`${a} X ${b} = ${a * b}`);
    }
}