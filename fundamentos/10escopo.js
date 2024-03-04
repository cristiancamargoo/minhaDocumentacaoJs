// Escopo
// O escopo é o que define a acessibilidade a uma variável. Existem dois tipos de escopo em Javascript: Global e Local.

// Escopo Local
// As funções em Javascript têm o seu próprio escopo. As variáveis criadas dentro de uma função são de escopo local e só podem ser acessadas dentro daquela função.

function criar_nome() {
  var nome = "Maria";
  console.log(nome); // O console mostrará 'Maria'
}
criar_nome();

console.log(nome); // Este comando gerará um erro,
// pois aqui não temos acesso às variáveis de escopo local da função criar_nome.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// Escopo Global
// Varáveis criadas fora de funções são do escopo global e são acessíveis em qualquer lugar do código, até mesmo dentro de funções.

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

var nome = "Helena";

function mostrar_nome() {
  console.log(nome);
}

mostrar_nome(); // O console mostrará 'Helena'

// CONST
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
data = "Janeiro"; // erro

// LET
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

// let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável

// EXERCÍCIO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
