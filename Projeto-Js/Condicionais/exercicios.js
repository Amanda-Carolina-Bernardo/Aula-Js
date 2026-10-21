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

const user = prompt ("Você é seu perfil (admin, gerente ou outro)?");
const pass = prompt ("Qual a senha?");

const perfilOk = (user === "admin" || user === "gerente"); //guardar na variavel se ele é admin ou gerente 
const senhaOk = (pass === "1234")

if (perfilOk && senhaOk) {
    console.log ("Acesso liberado");
} else {
    console.log ("Acesso negado");
}

    