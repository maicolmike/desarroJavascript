var frutas = ["manzana","platano","pera"];
var numeros = [1,2,3,4]; 

console.log(frutas);
console.log(numeros);

console.log(frutas.length); //saber cuantos elementos tiene
console.log(frutas[0]);  //llamar a una fruta en especial

var masFrutas = frutas.push("uvas");  // agregar al ultimo elemento del array esta fruta
console.log(frutas);

var menosFrutas = frutas.pop();  // eliminar al ultimo elemento del array
console.log(frutas);

var inicioArray = frutas.unshift("uvas");  // agregar al inicio elemento del array esta fruta
console.log(frutas);

var borrarFruta = frutas.shift();  // eliminar al primer elemento del array
console.log(frutas);

var posicion = frutas.indexOf("platano");  // me da el numero de la posicion de ese elemento
console.log(posicion);
