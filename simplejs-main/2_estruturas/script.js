// funções built-in são funcções que não precisam ser criadas pelo usuário e nem declaradas. ex: console.log

//exemplo de função nativa
// prompt

let nome = prompt("Informe o seu nome")

// alert

let mensagem = `Seja bem-vindo ${nome}`
alert(mensagem)

/* math.x

tipos de math.x
math.max();
math.min();
math.random();
math.pow();
math.sqrt();
etc...*/

let maiorNumero = Math.max(10, 5, 7, 9, 2, 1, 3, 4, 6, 8) // mostra maior valor
let menorNumero = Math.min(10, 5, 7, 9, 2, 1, 3, 4, 6, 8) // mostra menor valor
let numeroAleatorio = Math.floor(Math.random() * 10) // n. aleatorio entre 0 e 10 e arredonda
let numeroElevado = Math.pow(2,3) // realiza calculo de numero elevado, no caso dois elevado a tres
let arredondaParaBaixo = Math.floor(numeroAleatorio)
let arredondaParaCima = Math.ceil(numeroAleatorio)

console.log(nome)
console.log(`Maior número: ${maiorNumero}`)
console.log(`Menor número: ${menorNumero}`)
console.log(`Número elevado: ${numeroElevado}`)
console.log(`Arredonda para baixo: ${arredondaParaBaixo}`)
console.log(`Arredonda para cima: ${arredondaParaCima}`)
