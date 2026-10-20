//Saudação personalizada
//Nome 

// const nome = prompt ("Diga qual seu nome?");

// alert (`Olá, ${nome}!`);



//Leia dois número, some e mostre com 2 casas decimais. 
// const n1 = Number (prompt ("Vamos fazer uma soma, qual o primeiro número?"));
// const n2 = Number (prompt ("Qual o segundo número?"))
// const soma = n1 + n2;
// alert (`A sua soma é ${soma.toFixed(2)}`);



//Converter centímetros para polegadas

// const cm = Number (prompt ("Converta centímetros para polegadas. Quantos centímetros?"));
// const polegadas = cm /2.54;
// alert (`${cm} centímetros é igual a ${polegadas.toFixed(2)} polegadas.`);


//Converter anos em meses, dias, horas e minutos (use 365 dias por ano)

const ano = Number(prompt("Me diga quantos anos você tem?"));
const meses = ano * 12;
const dias = ano * 365;
const horas = dias * 24; //ou ano * 8760
const minutos = horas * 60; //ou ano * 52.560

console.log (`Idade informada: ${ano} anos:`);
console.log (`---------------`);
console.log (`${meses} meses`);
console.log (`${dias} dias`);
console.log (`${horas} horas`);
console.log (`${minutos} minutos`);