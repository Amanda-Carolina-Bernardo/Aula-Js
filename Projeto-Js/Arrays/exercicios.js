//1-
/*Comece com uma fila vazia. Chegam Ana, Bia e Caio (nessa ordem). Atenda o primeiro da fila. Depois chega Duda com atendimento prioritário, que deve ir para o início. Mostre a fila a cada etapa.

Saída esperada: `[ 'Ana', 'Bia', 'Caio' ]`, depois `[ 'Bia', 'Caio' ]`, depois `[ 'Duda', 'Bia', 'Caio' ]`
*/

const fila = [];

 fila.push ("Ana");
 fila.push("Bia");
 fila.push ("Caio");

 console.log (fila);

fila.shift ();

console.log (fila);

fila.unshift ("Duda");
console.log (fila);

//2-
/*Crie `remover(lista, valor)` que remove o valor da lista (se existir) e devolve `true` se removeu ou `false` se não achou.

Exemplo: `remover(["a", "b", "c"], "b")` devolve `true` e a lista vira `[ 'a', 'c' ]`*/

function remover (lista, valor){
    const posicao = lista.indexOf(valor);
    if (posicao === -1){
        return false
    } 
   lista.splice(posicao, 1); //exclui 1
   return true
}

const letras = ["a","b","c"];
console.log(remover(letras, "b")); //lista=letras valor= b
console.log (letras);


//3-
/*Crie um objeto `aluno` com `nome` e `idade`. Depois: altere a idade, acrescente `curso`, remova a `idade` e mostre as chaves que sobraram.

Saída esperada: `[ 'nome', 'curso' ]`*/

const aluno = {nome:"Amanda", idade: 22};

console.log (aluno);

aluno.idade = 23;
aluno.curso = "Front";

console.log (aluno);
delete aluno.idade;

console.log (aluno);
console.log (Object.keys(aluno)); //traz as chaves dos objetos => [ 'nome', 'curso' ]

//4-
/* Dado um array de alunos `{ nome, nota }`, crie `mediaTurma(alunos)` e `melhorAluno(alunos)` (devolve o objeto do aluno com a maior nota).

Exemplo: com Ana 8, Bia 5.5 e Caio 7 → média `6.833...` e melhor aluno `{ nome: 'Ana', nota: 8 }`*/ 


function mediaTurma(alunos){
    let soma= 0; //guardar a informacao
    for (const aluno of alunos) { //of consegue pegar o objeto do array
        soma += aluno.nota;
    }
    return soma / alunos.length; //length começa com 1 não com 0
}

function melhorAluno(alunos){
    let melhor = alunos [0];
    for (const aluno of alunos){ //percorre aluno por aluno
        if (aluno.nota > melhor.nota) {
            melhor = aluno
        }
    }
    return melhor;
}
const turma = [
    { nome: "Ana" , nota: "8" },
    { nome: "Bia" , nota: "5.5" },
    { nome: "Caio" , nota: "7" },
];

console.log (mediaTurma(turma).toFixed(2));
console.log (melhorAluno(turma));
