// 7 TIPO DE DADOS
// Todos são primitivos exceto os objetos.
//  No Javascript e em outras linguagens de programação dados podem ser representados em diferentes formas.
// -Number = Números
// -String = Letras, textos, deve ser utilizdo com 'aspas', "aspas", `Template string`
// -Boolean = Verdadeiro ou Falso
// -Null e undefined

var nome = "Cristian"; //String
var idade = 22; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); //Symbol
var NovoObjeto = {}; // Object

let numero9 = 1234;
let string9 = "Olá, vamos estudar!";
let booleanF = false;
let booleanV = true;

var gols = 600;
var frase = `Pelé fez ${gols + 100} gols em sua carreira`;

//  Exercicios
// Declare uma variável contendo uma string
var cidade = "Jaraguá do Súl";

// Declare uma variável contendo um número dentro de uma string
var tamanho = "1.80m";

// Declare uma variável com a sua idade
var minhaIdade = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = "Cristian";
var meuSobrenome = "Camargo";
var fraseComMeuNome = `Meu nome é ${meuNome} e meu sobrenome é ${meuSobrenome}, me chamo ${meuNome} ${meuSobrenome}`;

// Coloque a seguinte frase em uma variável: It's time
var frase = `It's time`;

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
