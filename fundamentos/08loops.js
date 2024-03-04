// FOR LOOP
// Fazem algo repetidamente até que uma condição seja atingida.
// O for loop possui 3 partes, início, condição e incremento

for (var numero = 0; numero < 10; numero++) {
  console.log(numero); // Retorna de 0 a 9 no console
}

var alunos = ["Pedro", "Maria", "José", "João", "Carlos"];

for (var a = 0; a < alunos.length; a++) {
  console.log(alunos[a]);
}

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// Loops while e do/while
// Os loops while e do/while têm o funcionamento parecido com o loop for, mas a forma de escrevê-los é diferente,

var count = 0;
while (count < 5) {
  console.log(count);
  count++; //0 a 4
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

var videoGames = ["Switch", "PS4", "XBox", "3DS"];
for (var i = 0; i < videoGames.length; i++) {}
console.log(videoGames[i]);

// BREAK
// O loop irá parar caso encontro e palavra break
var videoGames = ["Switch", "PS4", "XBox", "3DS"];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break; // se for true  vai parar no ps4
  }
}

// FOREACH

// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

var videoGames = ["Switch", "PS4", "XBox", "3DS", "PS5"];
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente

// EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

var anos = [1959, 1962, 1970, 1994, 2002];

anos.forEach(function (ano) {
  var frase = `O brasil ganhou a copa de ${ano}`;
  console.log(frase);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta);
