// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

// Operações com arrays
// Push - Adiciona elementos ao final de um array
// Unshift - Adiciona elementos ao início de um array
// Pop - Remove o último elemento de um array
// Shift - Remove o primeiro elemento de um array

// ---------------------------------------------------------------------------------------------------------

var alunos = ["João", "Maria", "José"];
console.log(alunos.length); // o console mostrará 3
console.log(alunos[0]); // o console mostrará "João"

// ---------------------------------------------------------------------------------------------------------

var grupos = [
  ["João", "Maria"],
  ["Pedro", "Joana", "André", "Júlio"],
  ["Carolina", "Helena", "Marcelo"],
];

console.log(grupos.length); // o console mostrará 3
console.log(grupos[1]); // o console mostrará [ "Pedro" , "Joana", "André", "Júlio" ]
console.log(grupos[1][2]); // o console mostrará "André"

// ---------------------------------------------------------------------------------------------------------

var cursos = ["HTML", "Python", "PHP"];

cursos.push("Javascript");
console.log(cursos); // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

cursos.pop();
console.log(cursos); // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

cursos.shift();
console.log(cursos); // O console mostrará [ "HTML", "Python", "PHP" ]

cursos.unshift("Bootstrap");
console.log(cursos); // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

// ---------------------------------------------------------------------------------------------------------

// O método slice serve para extrair parte de um array. Fazemos isso informando o índice de início e fim que queremos selecionar.

var alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Elisa"];
console.log(alunos.slice(0, 3));
// O console mostrará [ "João" , "Maria", "José" ]

// É possível também usar número negativos para contar desde o final do array (o último elemento de um array é o -1).

var alunos = ["João", "Maria", "José", "Fernanda", "Pedro", "Elisa"];

console.log(alunos.slice(0, -2));
// O console mostrará [ "João" , "Maria", "José", "Fernanda" ]
/* O slice começa no primeiro elemento, e vai até o penúltimo elemento, neste caso o índice 4, 
com este elemento excluído. */

console.log(alunos.slice(-3));
// O console mostrará [ "Fernanda", "Pedro", "Elisa" ]
// O slice inclui os três últimos elementos.

console.log("os consoles abaixo é dos ultimos estudos");

// ---------------------------------------------------------------------------------------------------------
// Udemey
// ---------------------------------------------------------------------------------------------------------

// Oque são Arrays;
// Possibilidade de adicionar um conjunto de valores a uma variável;
// O array deve ser escrito entre colchetes, separando os valores por vírgulas;
// Podemos acessar um array pelo seu índice, ex: numeros[1];
// O primeiro índice sempre é o 0, numeros[0];

let numeros = [1, 2, 3, 4];
console.log(numeros[2]); //return 3
console.log(numeros[numeros.length - 1]); //return 4

let info = ["Cristian", 15, true];
console.log(info[0]); //return Cristian

// ---------------------------------------------------------------------------------------------------------

// Loops em Arrays
// Uma técnica muito utilizada  na programação é o loop nos arrays;
// Como é uma lista com muito valores, muitas vezes precisamos ver cada um deles;

let outrosNumeros = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i <= outrosNumeros.length; i++) {
  console.log(outrosNumeros[i]);
}

// ---------------------------------------------------------------------------------------------------------

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// ---------------------------------------------------------------------------------------------------------

var anos = [1959, 1962, 1970, 1994, 2002];

anos.forEach(function (ano) {
  var frase = `O brasil ganhou a copa de ${ano}`;
  console.log(frase);
});

// ---------------------------------------------------------------------------------------------------------
// Métodos e array: indexOf e lastindexOf
// indexOf: encontra o índice de um determinado elemento;
// lastindexOf: encontra o último  indice de um elemento;

let nums = [5, 4, 5, 3, 2, 1, 0, 0];
console.log(nums.indexOf(5));
console.log(nums.lastIndexOf(0));

// ---------------------------------------------------------------------------------------------------------
// Método de array: slice
// Retorna um array a partir de outro array;
// O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array

let numSlice = [0, 1, 2, 3, 4, 5];

console.log(numSlice.slice(0, 4));
console.log(numSlice.slice(3));

// ---------------------------------------------------------------------------------------------------------
// Método de array: foreach
// Itera cada elemento do array;

const numeross = [1, 2, 3, 10, 20, 30];

numeross.forEach((num) => {
  console.log(num);
});

// ---------------------------------------------------------------------------------------------------------

// Método de array: includes
// Verifica se o array tem um determinado elemento

let carros = ["BMW", "FIAT", "AUDI"];
console.log(carros.includes("FIAT")); //true

// ---------------------------------------------------------------------------------------------------------

// Método de array: reverse
// Inverte um array;

let arr = [1, 2, 3];
console.log(arr.reverse()); // 3 2 1

// ---------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------

// Destructuring em arrays
// Podemos definir variáveis com os valores de um array utilizando o destructuring;

let nomes = ["Matheus", "João", "Paulo"];

let [nomeA, nomeB, nomeC] = nomes;
console.log(nomeA); //Matheus
console.log(nomeB); //João
console.log(nomeC); //Paulo

// ---------------------------------------------------------------------------------------------------------
// Exercícios
// ---------------------------------------------------------------------------------------------------------

// Crie um array com 5 itens;
// Acesse o item 1,3,4

let marcas = ["Acer", "HP", "LG", "Positivo", "Apple"];
console.log(marcas[0]); //Acer
console.log(marcas[3]); //Positivo
console.log(marcas[marcas.length - 1]); //Apple

// ---------------------------------------------------------------------------------------------------------

// Crie um array com 2 elementos e outro com 4;
// Imprima o número de elementos de cada um na tela;

let array1 = [1, 2];

let array2 = [3, 4, 5, 6];

console.log(array1.length); //2
console.log(array2.length); //4

// ---------------------------------------------------------------------------------------------------------

// Crie um array com 5 nomes, incluindo o seu;
// Verifique se o seu nome existe no array;
// Se existir imprima alguma coisa no console;

let nomesArray = ["Pedro", "Arthur", "Christopher", "Cristian", "Cesar"];

if (nomesArray.includes("Cristian") == true) {
  console.log("O meu nome está incluso na lista.");
}

// ---------------------------------------------------------------------------------------------------------

// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// Faça uma função que verifica o número de elementos;
// Se possuir menos que 5, imprima "Poucos elementos no console";
// Se tiver mais, imprima "Muitos elementos"

let arrayA = [1, 2, 3, 4, 5];

let arrayB = [1, 2, 3];

function contarTamanho(array) {
  if (array.length >= 5) {
    return "Muitos elementos";
  } else {
    return "Poucos elementos no console";
  }
}

console.log(contarTamanho(arrayA));
console.log(contarTamanho(arrayB));

// ---------------------------------------------------------------------------------------------------------
// Crie um array com 5 elementos;
// Faça uma iteração entre todos eles e imprima no consolo o valor;

let arrayC = ["a", "b", "c", "d", "e"];

arrayC.forEach(function (i) {
  console.log(i);
});

// ---------------------------------------------------------------------------------------------------------

// Crie um array a partir de uma frase;
// Imprima cada palavra do array no console por meio de um for;

let frase1 = "Inter és um bom time";

let arrayFrase = frase1.split(" ");

for (let i = 0; i < arrayFrase.length; i++) {
  console.log(arrayFrase[i]);
}

// ---------------------------------------------------------------------------------------------------------

// No array abaixo, qual o número que pega a ferrari?
let cars = ["BMW", "Ferrari", "Mercedes"];
let ferrari = cars[1];
console.log("1 " + ferrari);

// Troque a ferrari por Audi
cars[1] = "Audi";
console.log(cars[1]);

// Adicione Volvo na lista
cars.push("Volvo");
console.log(cars);

// Exiba quantos itens tem no array
console.log(cars.length);
