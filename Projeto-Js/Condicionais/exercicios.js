//Peça a cor do semáforo ("verde", "amarelo", "vermelho") e diga a ação. 

// const semaforo = prompt("Qual a cor do semáforo (verde, amarelo ou vermelho):");

// if (semaforo === "verde"){ ///== comparação valor === comparação valor e tipo, usar sempre com 3 iguais
//     console.log ("Pode seguir!");
// } else if (semaforo === "amarelo"){
//     console.log ("Fique atento!");
// } else if (semaforo === "vermelho") {
//     console.log ("Pare agora!")
// } else {
//     console.log ("Ué, cor inválida!")
// }




//0-100 - <60 reprovado, 60-70 recuperação, 80-100 aprovado. 

// const nota = Number(prompt ("Qual a nota de 0-100:"));

// if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//     console.log ("Nota inválida, tente novamente.");
// } else if (nota <60) {
//         console.log ("Reprovado ;)");
//     } else if (nota < 80) {
//             console.log ("Recuperação ;)");
//         } else {
//     console.log ("Aprovado ;)")
//     }



/*
Login com && e || - Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`
*/

// const user = prompt ("Você é seu perfil (admin, gerente ou outro)?");
// const pass = prompt ("Qual a senha?");

// const perfilOk = (user === "admin" || user === "gerente"); //guardar na variavel se ele é admin ou gerente 
// const senhaOk = (pass === "1234")

// if (perfilOk && senhaOk) {
//     console.log ("Acesso liberado");
// } else {
//     console.log ("Acesso negado");
// }


//Nível fácil 
//1-
/*Classificador de Número
Peça um número e diga se é positivo, negativo ou zero.
**Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`*/

// const numero = Number (prompt ("Digite um número:"));

// if(Number.isNaN(numero)){
//     console.log ("Valor inválido!"); 
// } else if (numero === 0){ //não esquecer de === comparação valor e tipo, usar sempre com 3 iguais
//     console.log ("O valor é zero!");
// } else if (numero < 0) {
//     console.log ("Número negativo!");
// } else {
//     console.log ("Número positivo!");
// }



//2-
/*Se a idade for >= 18, mostrar que pode tirar carteira; senão, que ainda não pode.
**Exemplo:** `20` → `Você pode tirar a carteira de motorista.` · `15` → `Você ainda não tem idade para dirigir.` · `abc` → `Idade inválida.`*/

// const idade = Number (prompt("Qual a sua idade?")); //tudo que recebo de um prompt é texto

// if (Number.isNaN (idade) || idade < 0) {
//     console.log ("Idade inválida.");
// } else if (idade >= 18){
//     console.log ("Pode tirar a carteira de motorista, ihuuu");
// } else {
//     console.log ("Você ainda não tem idade para dirigir :( ");
// }


//3-
/*
Use o resto da divisão (`%`) para dizer se um número é par ou ímpar.
**Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.`
*/

// const num = Number (prompt ("Digite um número:"));

// if (Number.isNaN (num)) {
//     console.log ("Número inválido");
// } else if (num % 2 === 0) {  // % = resto da divisão
//     console.log ("O número é Par");
// } else {
//     console.log ("O número é Ímpar");
// }



//Nível médio


//1- 
/*Peça peso e altura, calcule o IMC e classifique: 
<18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, 
>=30 obesidade. Valide entradas inválidas.

peso ÷ [altura**2]

**Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal`*/

// const peso = Number (prompt("Qual seu peso (kg)?"));
// const altura = Number (prompt("Qual a sua altura (m)?"));


// if (Number.isNaN(peso) || Number.isNaN(altura) || (peso) <= 0 || (altura) <= 0) {
//     console.log ("Número inválido, tente novamente.");
// } else {
//     const imc = peso / (altura**2); //Imc apagado pq só aparece quando é chamado

//     console.log (`Seu IMC é: ${imc.toFixed(2)}`);

//     if (imc < 18.5) {
//         console.log ("Abaixo do peso");
//     } else if (imc < 25) {
//         console.log ("Peso Normal");
//     } else if (imc < 30){
//         console.log ("Sobrepeso");
//     } else {
//         console.log ("Obesidade");
//     }
// }


//2-
/*Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

**Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`*/

// const valor = Number (prompt ("Qual o valor da sua compra?"));

// if (Number.isNaN (valor) || valor < 0){
//     console.log ("Valor inválido, tente novamente");
// } else if (valor > 100) {
//       const desconto = valor * 0.1;
//    console.log ("Valor final com desconto: R$" +(valor - desconto));
// } else {
//      console.log ("Você não tem descontos, sua compra é de R$" + valor);
// }


//3-
/*Peça 3 números e diga qual é o maior.
**Exemplo:** `4`, `9` e `7` → `O maior número é: 9`*/

const num1 = Number (prompt ("Digite o primeiro número:"));
const num2 = Number (prompt ("Digite o segundo número:"));
const num3 = Number (prompt ("Digite o terceiro número:"));

if (Number.isNaN (num1) || Number.isNaN (num2) || Number.isNaN (num3)) {
    console.log("Valor inválido");
} else {
    let maior = num1;//let eu posso alterar o valor da minha variavel
    if (num2 > maior) maior = num2;
    if (num3 > maior) maior = num3;
    console.log ("O maior número é: " + maior);
}


















    
