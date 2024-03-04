//OPERADORES DE ATRIBUIÇÃO

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// OPERADOR TERNÁRIO
//Abreviação de condicionais com if e else

var idade = 19;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // Pode beber

// condição ? true : false

//    condição ? "valor se for verdadeiro" : "valor se for falso";

// Exemplo com if normal:
var nome = "";
if (nome) {
  var mensagem = "Olá " + nome;
} else {
  var mensagem = "Nome não informado";
}

// Exemplo com if ternário:

nome ? (mensagem = "Olá " + nome) : (mensagem = "Nome não informado");

// Ou ainda mais simples:

mensagem = nome ? "Olá " + nome : "Nome não informado";

nome = "";
idade = 32;

mensagem =
  nome && idade
    ? "Olá " + nome + ", você tem 32 anos."
    : !nome && !idade
    ? "Nome e idade não informados"
    : !idade
    ? "Idade não informada"
    : "Nome não informado";

console.log(mensagem);

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var tamanhoScroll = 1000;
tamanhoScroll += 500;
console.log(tamanhoScroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito =
  possuiCarro && possuiCasa
    ? "Pode dar o credito para o cliente"
    : "cliente não aprovado";
console.log(darCredito);
