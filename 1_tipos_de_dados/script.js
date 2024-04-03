// declarações de variáveis no javascript

var nome = "Lucas" //nao é recomendado
let anoNascimento = 2006 //recomendado
const anoAtual = 2024

//exemplos de leitura via console

console.log(nome)
console.log(anoNascimento)
console.log(anoAtual)

anoNascimento = 1994
console.log(anoNascimento)

// exemplo de console.log em concatenação

console.log("Meu nome é " + nome + ", eu nasci em " 
+ anoNascimento + "e estamos em " + anoAtual)

console.log("Meu nome é" , nome , "eu nasci em" 
+ anoNascimento , "e estamos em" , anoAtual)

// tipos de dados primitivos no js

console.log("------------------------------------------")
console.log("Tipos de dados primitivos no javascript")

// string

let veiculo = "carro" // aspas duplas
let marcaCarro = 'ford' // aspas simples
let modelo = `ranger` // aspas com template literals

console.log( typeof veiculo, typeof marcaCarro, typeof modelo)

// exemplo de utilização com template literals

console.log(`Meu nome é  ${nome} eu nasci em
${anoNascimento} e estamos em  ${anoAtual}`);

//number

console.log("------------------------------------------")
console.log("Tipo Number")

let numeroPortasCarro = 4
console.log(typeof numeroPortasCarro)
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)

//boolean

console.log("------------------------------------------")
console.log("Tipo Boolean")

let portaAberta = true
let torneiraLigada = false

console.log(typeof portaAberta)
console.log(typeof torneiraLigada)

// empty values

console.log("------------------------------------------")
console.log("Tipo Empty Values")

console.log("Tipo Null:")
let testeNull = null

console.log(typeof testeNull)
console.log(testeNull)

console.log("tipo undefined")
let testeUndefined

console.log(typeof testeUndefined)
console.log(testeUndefined)

if(testeUndefined == undefined){
    console.log("teste com undefined")
}

// exemplo de conversão automática do javascript

console.log("------------------------------------------")
console.log("Conversões no JavaScript")

console.log("conversão 1: " ,"5" + 3) // conversao mais atual
console.log("conversao 2; " , 5 * testeNull)