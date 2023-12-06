console.log("hola mundo");

let request = require ('request-promise');

request('https://www.google.com').then
(function()
    { 
        console.log ("Termine tarea");
    }
);

console.log ("Final Final");