// Números

var idade = 22;
var tamanho = 1.82; // ponto para decimal
var peso = 70;
var pi = 3.14; // ponto para decimal
var exp = 2e10; //20000000000
//precisão para até 15digitos

//Operadores Aritméticos

var soma = 100 + 100; //200
var subtracao = 200 - 100; //100
var multiplicação = 100 * 2; //200
var divisao = 100 / 2; //50
var expoente = 2 ** 4; //16
var modulo = 14 % 5; // 4

var incremento = 5;
console.log(++incremento); //6

// OPERADORES ARITMÉTICOS (STRINGS)

var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)

//  A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMÉTICOS UNÁRIOS

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// Exercicios

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35

// Crie duas expressões que retornem NaN

var nan = -"nan";
var peso = NaN;

// Somar a string '200' com o número 50 e retornar 250
var string = "200";
var numeroo = 50;
var resultadoo = +string + numeroo; //250

// Incremente o número 5 e retorne o seu valor incrementado

var x = 5;
var xIncrementado = ++x;

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)
var total = pesoPorDois + unidade;
console.log(total);
