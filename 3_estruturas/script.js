// Exemplos de estruturas em JavaScript

// Estrutura Condicional (IF - ELSE)

let idade = 25

if(idade >= 18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}

// IF - ELSE encadeado

if(idade < 16){
    console.log("Você não pode votar")
} else if(idade <= 16 && idade > 18){
    console.log("Voto opcional")
} else if(idade >= 18 && idade < 70){
    console.log("Voto obrigatório")
} else {
    console.log("Voto opcional")
}

// Estrutura de Escolha (SWITCH - CASE)

console.log("-----------------------------")
switch(idade){
    case idade < 18:
        console.log("Você é menor de idade")
        break;

    default:
        console.log("Você é maior de idade")
        break;
}

switch(true){
    case idade < 16:
        console.log("Você não pode votar")
        break;
    
    case idade >= 16 && idade < 18:
        console.log("Voto obrigatório")
        break

    case idade > 70:
        console.log("Voto opcional")
        break

    default:
        console.log("Idade não foi informada")
        break;
}

console.log("--------------------------------")

let cor = prompt("Informe uma cor de CD para saber o seu valor")

switch(cor){
    case "verde":
        console.log("O valor do CD é R$10,00")
        break;

    case "azul":
        console.log("O valor do CD é R$20,00")
        break

    case "amarelo":
        console.log("O valor do CD é R$30,00")
        break

    case "vermelho":
        console.log("O valor do CD é R$40,00")
        break

    default:
        console.log("A cor informada é inválida")

}

// LAÇOS DE REPETIÇÃO ( WHILE / DO WHILE / FOR)
console.log("--------------------------------");
// WHILE:
let contador = 10

while(contador > 0){
    console.log('Looping while: ', contador)
    // todo laço de repetição precisa controlar a situação de parada
    contador = contador - 1//contador--
}
console.log("--------------------------------");
// DO WHILE 
let numero = 100

do{
    console.log("Looping do-while: ", numero)
    numero = numero - 5
} while (numero >=2)

console.log("--------------------------------");
// FOR
let passo

for(passo = 0; passo < 10; passo = passo + 1) {
    console.log("Looping for: ", passo)
}

let numeroTabuada = prompt("Informe seu número para ver a sua tabuada: ")
let resultado

for(let i = 0; i < 11; i++){
    resultado = numeroTabuada * i
}