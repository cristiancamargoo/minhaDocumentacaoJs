// ---------------------------------------------------------------------------------------------------------
//  OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
// ---------------------------------------------------------------------------------------------------------

var pessoa = {
  nome: "Cristian",
  idade: 22,
  prifissao: "Desenvolvedor   ",
  possuiFaculdade: false,
};
pessoa.nome; //Cristian
pessoa.possuiFaculdade; //false

// ---------------------------------------------------------------------------------------------------------

// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu.metadeHeight(); // 25
// sem o this, seria 60

// ---------------------------------------------------------------------------------------------------------

// MÉTODOS
// Métodos são propriedades que funcionam como funções;
// Strings e arrays contém métodos;

let marca = "Nike";
console.log(typeof marca.toUpperCase); //function
console.log(marca.toUpperCase); //vai deixar tudo  maiusculo
console.log(marca.toLocaleLowerCase); //vai deixar tudo minusculo

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// ---------------------------------------------------------------------------------------------------------

// EXERCÍCIO

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
let dados = {
  nome: "Cristian",
  sobrenome: "Camargo",
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// ---------------------------------------------------------------------------------------------------------

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;

// ---------------------------------------------------------------------------------------------------------

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let cachorro = {
  nome: "Lessie",
  idade: 10,
  cor: "preto",
  latir(pessoa) {
    if (pessoa == "homem") {
      return `${this.nome} está latindo para o ${pessoa}`;
    } else {
      return `${this.nome} não está latindo`;
    }
  },
};

// ---------------------------------------------------------------------------------------------------------

var cursos = [
  {
    titulo: "Aprenda programação em Python 3 com facilidade do zero",
    avaliacoes: 680,
    alunos: 2300,
    categorias: ["programacao", "tecnologia"],
  },

  {
    titulo: "Aprenda PHP e faça sites dinâmicos",
    avaliacoes: 180,
    alunos: 350,
    categorias: ["desenvolvimento web", "programacao"],
  },

  {
    titulo: "Excel do Zero ao Avançado",
    avaliacoes: 420,
    alunos: 1800,
    categorias: ["produtividade", "gestão"],
  },
];
console.log(cursos[1].categorias[0]);
cursos[2].categorias[1] = "gestão de empresa";
console.log(cursos[2].categorias[1]);
console.log(cursos[1].categorias[0]);

// ---------------------------------------------------------------------------------------------------------

//Exercicios
// nomeie 3 propriedades ou métodos de strings

var nome = "cristian";
nome.length;
nome.toLocaleLowerCase;
nome.charAt;
nome.fixed;
nome.includes;

// ---------------------------------------------------------------------------------------------------------

// nomeie 5 propriedades ou métodos de elementos do DOM

// var btn = document.querySelector('.btn');
// btn.classList.add('ativo');
// btn.addEventListener
// btn.innerHTML;
// btn.appendChild

// ---------------------------------------------------------------------------------------------------------
// Udemey
// ---------------------------------------------------------------------------------------------------------

// Objetos
// Uma coleção de propriedades, parecidos com arrays;
// Podemos acessar estas propriedades;

let objetoPessoa = {
  nome: "Cristian",
  prifissao: "Programador",
  idade: 22,
  dados: function () {
    return `Meu nome é ${this.nome}, tenho ${this.idade} anos e quero ser um ${this.prifissao}`;
  },
  possuiFaculdade: true,
};
objetoPessoa.possuiFaculdade = false; // de true foi pra false
console.log(objetoPessoa.nome); //return Cristian
console.log(objetoPessoa.prifissao); //return Programador
console.log(objetoPessoa.idade); //return 22
console.log(objetoPessoa.dados());
delete objetoPessoa.possuiFaculdade; //deletando o valor do objeto

// ---------------------------------------------------------------------------------------------------------

// Destrucuring com objetos
// Podemos definir variáveis com propriedades de objeto com uma notação diferente, chamada Destrucuring

const person = {
  name: "Jhon",
  lastName: "Silva",
};

const { name: fname, lastName: lname } = person;
console.log(fname);
console.log(lname);

// ---------------------------------------------------------------------------------------------------------
// Exercícios
// ---------------------------------------------------------------------------------------------------------

// Crie um objeto onibus;
// Com as propriedades rodas = 8;
// Limite de passageiros = 40;
// Portas = 2;
// Imprima todas as propriedades no console;

let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portaS: 2,
};

console.log(onibus.rodas); // 8
console.log(onibus.limitePassageiros); // 40
console.log(onibus.portaS); // 2

// Adicione a propriedade janelas no onibus, com o valor de 20;
// Deleta a propriedade rodas;
// Imprima a propriedade janela no console

onibus.janelas = 20;
delete onibus.rodas;

console.log(onibus.janelas); // 20
console.log(onibus.rodas); // undefined

// ---------------------------------------------------------------------------------------------------------

// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
// Os metodos só devem aceitar dois parametros;
// Utilize cada um dos métodos e imprima os valores no console

const calculadora = {
  soma: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.soma(10, 20));
console.log(calculadora.subtrair(30, 20));
console.log(calculadora.multiplicar(10, 10));
console.log(calculadora.dividir(10, 5));

// ---------------------------------------------------------------------------------------------------------
