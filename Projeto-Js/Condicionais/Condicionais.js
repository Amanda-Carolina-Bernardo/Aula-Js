// const temperatura = 25;

// if (temperatura > 30) {
//     console.log("Está calor !!!")
// }

// console.log("Fim do programa");

// const idade = Number(prompt ("Sua idade:"));

// if (Number.isNaN(idade) || idade < 0) { //isNaN (is not a number) ou numero negativo
//     console.log("Idade inválida, tente novamente")
// } else {
//     if (idade >= 18) {
//         console.log ("Maior de idade!!")
//     } else {
//         console.log ("Menor de idade:)")
//     }
// }

//else if (múltiplos caminhos)
// const temp = Number(prompt("Temperatura atual (°C):"));

// if(Number.isNaN(temp)){
//     console.log("Valor inválido!");
// } else if (temp < 0) {
//     console.log("Muito frio!!");
// } else if (temp <= 20){
//     console.log("Frio!!");
// } else if (temp <= 30){
//     console.log ("Agradável!!");
// } else {
//     console.log("Quente");
// }



// const nota = 95;

// if (nota>=60) { //essa condição já é verdadeira, logo não vai chegar na próxima
//     console.log ("Aprovado");
// }else if (nota >= 90) {
//     console.log ("Excelente")
// }



//Operadores Lógicos: && (E), || (OU)
// const temCarteira = true;
// const temCartao = false;

// console.log (temCarteira && temCartao); //os dois devem ser verdadeiros
// console.log(temCarteira || temCartao);
// console.log (!temCartao); //!-> inverte, ficando verdadeira



// const dinheiro = Number(prompt ("Dinheiro na carteira:"));

// const temCartao = prompt ("Tem cartão? (s/n)") === "s";


// if ((dinheiro >= 10 || temCartao) && dinheiro >= 0) {
//     console.log ("Você consegue comprar o lanche.")
// } else {
//     console.log ("Não vai rolar, tente depois.")
// }


//Operador Ternário (If else ternário)
//const idade = 20;

//const situacao = idade >= 18 ? "maior" : "menor" //usado quando tem apenas duas condições apenas

// let situacao2;
// if (idade>=18) { //igual ao que está acima
//     console.log ("Maior");
// } else {
//     console.log ("Menor");
// }


//Switch
// const dia = prompt ("dia da Semana (seg, ter, qua, qui, ...):");

// switch (dia) {
//     case "seg": 
//     case "ter":
//     case "qua":
//     case "qui":
//     case "sex":
//         console.log ("Dia útil"); //só para ver o que acontece 
//         break; //interrompe, caso o programa encontre o caso ele para e sai do código 
//     case "sab":
//     case "dom":
//         console.log ("Fim de Semana");
//         break;
//     default:
//         console.log ("Dia inválido");
// }