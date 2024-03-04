//UDEMY
// As funções servem basicamente para guardar um bloco de código, que é uma sequência de comandos que poderá ser executada múltiplas vezes. Guardar essa sequência de comandos em uma função significa que, além de organizar o código, vamos evitar ter que escrever os mesmos comandos repetidas vezes.

/* Criaremos dois argumentos na hora de criar a função, que funcionarão como variáveis dentro da função. 
        Podemos criar quantos argumentos quisermos, basta separá-los por vírgula. */

function soma_args(num1, num2) {
  var soma = num1 + num2;
  console.log(soma);
}
// ---------------------------------------------------------------------------------------------------------

/* Agora ao invocar a função, temos necessariamente que atribuir valores para todos os argumentos, 
        na mesma ordem em que eles foram criados: */

soma_args(10, 25); // O console mostrará 35

soma_args(1000, 375); // O console mostrará 1375

soma_args(-2, 47); // O console mostrará 45

// ---------------------------------------------------------------------------------------------------------

//function declaration
function bomDia() {
  return "bom dia";
}

// ---------------------------------------------------------------------------------------------------------

// function expression
let boaTarde = function () {
  return "boa tarde";
};

// ---------------------------------------------------------------------------------------------------------

// B7WEB
function alterar(titulo) {
  document.querySelector("titulo").innerHTML = titulo;
  document.querySelector("campo").innerHTML = titulo;
}

function somar(x, y) {
  let total = x * y;
  return total;
}

// ---------------------------------------------------------------------------------------------------------

// ORIGAMID
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(5); // 25
areaQuadrado(4); //16

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

function meuTime(time) {
  if (time == "internacional") {
    return "Você é cololarado";
  } else if (time == "gremio") {
    return "Você é gremista";
  } else {
    return "Você não torce  pra nenhum time de Porto Alegre";
  }
}

console.log(meuTime("inter")); // caiu no else

// ---------------------------------------------------------------------------------------------------------

//ARGUMENTOS PODEM SER FUNÇÕES

addEventListener("click", function () {
  console.log("Clicou");
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

function mostraConsole() {
  console.log("oi");
}
addEventListener("click", mostraConsole);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

function viver(morte) {
  var nascimento = 2000;
  return ` Eu morri com ${morte - nascimento} anos.`;
}

var profissao = "Designer";

function dados() {
  var nome = "André";
  var idade = 28;

  function outrosDados() {
    var endereco = "Rio de Janeiro";
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados();  retorna um erro

// ---------------------------------------------------------------------------------------------------------

//EXERCÍCIO
// Crie uma função para verificar se um valor é Truthy

function isTrue(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function area(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return `O número ${numero} é par`;
  } else {
    return `O número ${numero} é impar`;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado) {
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function nomeClick() {
  return "Cristian Camargo";
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

// Udemey

// Oque são funções?
// Funções são estruras de códigos que são reaproveitadas durante a execução/construção de um programa;
// Principal Objetivo: Poupar repetição de código;
// Podem ser consideradas 'subprogramas';
// Oque acontece dentro de uma função fica separado do escopo global;

// ---------------------------------------------------------------------------------------------------------

// Definindo uma função
// Uma função tem uma estrutura  um pouco mais complexa;
// Devemos declarar a função sempre com a palavra 'function';
// Uma função deve ter nome;
// Pode conter argumentos/parametros, defenidos entre ();
// O corpo da função é defeido entre {};
// Geralmente uma função retorna um valor;
// É possível declarar funções em variáveis

function escreverNoConsole() {
  console.log("Escrevendo no console");
}
escreverNoConsole(); //Invocando a função

const textoNoConsole = function () {
  console.log("Texto no console");
};

textoNoConsole();

const textoPorParametro = function (texto) {
  console.log(texto);
};
textoPorParametro("Escrevendo no parametro");

function imprimirNumero(num) {
  console.log(`O número é ${num}`);
}
imprimirNumero(4);

// ---------------------------------------------------------------------------------------------------------
// Mais sobre funções
const soma = function (a, b) {
  return a + b;
};
console.log(soma(4, 5)); // return 9

const saudacao = function (nome) {
  if (nome == "Cristian") {
    return `Olá ${nome}`;
  }
};
console.log(saudacao("Cristian")); // Olá Cristian

function multiplicar3numeros(x, y, z) {
  return x * y * z;
}
console.log(multiplicar3numeros(2, 3, 4)); // 24

const mult = multiplicar3numeros(5, 4, 3);
console.log("o valor é " + mult); //60

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}
let dirigir = podeDirigir(22, true);
console.log(dirigir);
// ---------------------------------------------------------------------------------------------------------

// ARROW FUNCTION
// Uma outra forma de escrever funções;
// Bem utilizada nos frameworks modernos;
// Porém não deve substituir as functions por completo;

const parOuImpar = (n) => {
  return n * 2;
};
console.log(parOuImpar(4));

// ---------------------------------------------------------------------------------------------------------

// Argumentos opcionais
// Podemos chamar uma função em JS sem o número igual de parâmetros determinados;

function nomeComIdade(nome, idade) {
  if (idade == undefined) {
    console.log(`Seu nome é ${nome}`);
  } else {
    console.log(`Seu nome é ${nome} e voce tem ${idade}anos de idade`);
  }
}
nomeComIdade("Cristian");
nomeComIdade("Cristian", 21);

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que imprime "Hello World" no console;

function helloWord() {
  return "Hello World!";
}
console.log(helloWord());

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que recebe um parâmetro de idade;
// E imprima esta mensagem no console com template literals dizendo vc tem x anos;

function idade(anos) {
  return `Você tem ${anos} anos`;
}
console.log(idade(22));

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que some dois números e retorne eles;
// Depois imprima este retorno;

function somar(n1, n2) {
  return n1 + n2;
}
console.log(somar(10, 10));

// ---------------------------------------------------------------------------------------------------------
// Escreva uma função que retorne um número aleatório;
// O número máximo retornado deve ser passado via parâmetro;

function numeroAleatorio(num) {
  return Math.floor(Math.random() * num) + 1;
}
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(3));

// ---------------------------------------------------------------------------------------------------------
// Escreva uma função que recebe a idade de uma pessoa;
// Se ela tem mais de 18anos ela pode entrar na auto escola, imprima uma mensagem informando isso
// Se ela tem menos, ela não poode, imprima outra mensagem com este aviso;
// Execute a função nos dois casos;

function autoEscola(anos) {
  if (anos > 17) {
    return `Parabéns vc tem ${anos}anos de idade e pode fazer auto escola`;
  } else {
    return `Infelizmente vc tem ${anos}anos de idade e  não pode fazer auto escola`;
  }
}
console.log(autoEscola(17));
console.log(autoEscola(18));

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que detecta o tipo de dado passado;
// Verifique se é um: number, boolean ou string
// E retorne uma mensagem para cada tipo;
// Execute uma função para cada caso;

function dados(dado) {
  if (typeof dado == "string") {
    return `O tipo de dado é ${typeof dado}`;
  } else if (typeof dado == "number") {
    return `O tipo de dado é ${typeof dado}`;
  } else if (typeof dado == "boolean") {
    return `O tipo de dado é ${typeof dado}`;
  }
}
console.log(dados("oi"));
console.log(dados(4));
console.log(dados(true));

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que receba um número negativo e retorne um número positivo;

function numeroPositivo(nNegativo) {
  return Math.abs(nNegativo);
}
console.log(numeroPositivo(-13));
console.log(numeroPositivo(-15));

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que recebe uma string;
// Se o texto conter mais de 10 caracteres imprima "Texto muito longo"
// Se conter menos, imprima "Texto dentro do limite";

function tamanhoTexto(texto) {
  if (texto.length > 10) {
    return `Seu texto tem mais de 10 caracteres`;
  } else {
    return `Seu texto está dentro do limite`;
  }
}
console.log(tamanhoTexto("Oi me chamo Cristian e estou estudando js"));
console.log(tamanhoTexto("gosto d js"));

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência;
// Depois faça essa operação e retorne o resultado;

function potencia(a, b) {
  return Math.pow(a, b);
}
console.log(potencia(2, 2));
console.log(potencia(5, 2));

// ---------------------------------------------------------------------------------------------------------

// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
// Além disso imprima somente os números pares no console;

function numeroPar(nPar = 1) {
  for (let i = nPar; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
console.log(numeroPar(30));

// ---------------------------------------------------------------------------------------------------------
function gravidade() {
  console.log("A gravidade do planeta é: ");
  console.log(9.5);
}

gravidade();

//function com parametros

function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log(`o resutado de ${n1} + ${n2} é ${resultado}`);
}

function nomeCompleto(nome, sobrenome) {
  return `meu nome é ${nome} ${sobrenome}`;
}

somar(5, 10);

console.log(nomeCompleto("Cristian", "Camargo"));

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let idade = 65;

let verificacao = maiorDeIdade(idade);

if (verificacao) {
  console.log(`o meliante tem ${idade} anos ou seja é maior de idade`);
} else {
  console.log(`o meliante tem ${idade} anos ou seja é menor de idade`);
}

function validar(user, password) {
  if (user == "pedro" && password == "1234") {
    return "Acesso conceido.";
  } else {
    return "Acesso negado.";
  }
}

console.log(validar("pedro", "1234"));
