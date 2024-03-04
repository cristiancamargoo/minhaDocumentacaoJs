// Existem dois valores booleanos false ou true.
var souDeMaior = true;
var souDeMenor = false;

var possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

var numero = 15;

if (numero >= 15) {
  console.log("O numero é maior ou igual  que 15");
} else {
  console.log("O numero é menor que 15");
}

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

// Exercicios

// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 22;
var idadeValentida = 3;
if (minhaIdade > idadeValentida) {
  console.log("Eu sou mais velho");
} else {
  console.log("Valentina é mais velha");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (china > brasil) {
  console.log(
    `China é maior tem ${china} milhoes de habitantes enquanto Brasil tem ${brasil} milhoes`
  );
} else {
  console.log(
    `Brasil é maior tem ${brasil} milhoes de habitantes enquanto Brasil tem ${china} milhoes`
  );
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //falso
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

// ---------------------------------------------------------------------------------------------------------

// Cria uma estrutura if que verifica a entrada de uma balada se tiver mais de 18anos pode entrar
// Armazenar a idade em uma variavel com let;
// Insira uma instrução console.log("Pode entrar") caso a pessoa tenha mais que 18anos

let entrada = 18;
let idade = 21;

if (idade >= entrada || idade >= 18) {
  console.log(`Pode entrar você tem ${idade}anos`);
} else {
  consoke.log(`Não pode  entrar você tem ${idade}anos`);
}
// ---------------------------------------------------------------------------------------------------------

// Armazene em valores em variáveis com cada um dos tipos de dados vistos;
//  STRING, NUMBER, BOOLEAN;

let nome = "Acer";
let preco = 21.9;
let possuiFaculdade = true;

console.log(typeof nome);
console.log(typeof preco);
console.log(typeof possuiFaculdade);

// Crie uma constante com o seu nome como valor;
// Depois uma estrutura IF que verifica se o seu nome é oque está na constante;
// Se estiver, emita uma mensagem de saudação com console.log

const meuNome = "Cristian";

if (meuNome == "Cristian") {
  console.log(`Seja bem vindo ${meuNome}`);
} else {
  console.log("Nome errado");
}
// ---------------------------------------------------------------------------------------------------------

// Armazene a velocidade de um carro em uma variável, com o numero que desejar;
// Faça uma estrutura if/else que verifica e ele está acima da velocidade;
// 80 é a velocidade máxima permetida;
// Se estiver acima ou abaixo exiba a mensagem com console.log

let velocidade = 120;
let maximoPermetida = 80;

if (velocidade > maximoPermetida) {
  console.log(
    `Você está acima da velocide está a ${velocidade}km/h a maxima permetida é de ${maximoPermetida}km/h`
  );
} else {
  console.log(
    `Você está acima da velocide está a ${velocidade}km/h está tudo certo conforme a via`
  );
}
// ---------------------------------------------------------------------------------------------------------

// Faça uma estrutura if/else para verificar se um usuário pode dirigir;
// Armazene em variáveis algumas informações sobre o usuário: idade, se tem cnh
// Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
// Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
// Se não tiver 18 nem CNH, exiba outra mensagem.

let idade1 = 20;
let possuiCNH = true;

if (idade1 >= 18 && possuiCNH) {
  console.log(`Você tem ${idade1}anos e possui CNH, pode dirigir`);
} else if (idade1 >= 18 && possuiCNH == false) {
  console.log(
    `Você tem ${idade1}anos e possui nao possui CNH,  não pode dirigir`
  );
} else {
  console.log("Você não tem idade pra  dirigir");
}
// ---------------------------------------------------------------------------------------------------------

// Escreva um loop while que exibe números de 0 a 10 no console;
let numero = 0;

while (numero <= 10) {
  console.log(numero);
  numero++;
}
// ---------------------------------------------------------------------------------------------------------

// Escreva um loop for que exibe números de 100 a 50 no console

for (let index = 100; index >= 50; index--) {
  console.log(index);
}
// ---------------------------------------------------------------------------------------------------------

// Escreva um loop for que exibe qual número é par e qual número é ímpar
// O contador deve iniciar em 0 e ir até 50;

for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`O número ${i} é par`);
  } else if (i % 2 == 1) {
    console.log(`O número ${i} é ímpar`);
  }
}

// ---------------------------------------------------------------------------------------------------------

// Crie uma condicional para verificar se o preço  da carne está barato ou caro, até 45 é barato;

let precoCarne = 40.3;

if (precoCarne <= 45) {
  console.log("A carne está barata");
} else {
  console.log("A carne está cara");
}
