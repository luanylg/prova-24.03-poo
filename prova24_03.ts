const entradateste = require("readline-sync");

let account : number = parseFloat (entradateste.question("Numero da conta: "));
let password : number = parseFloat (entradateste.question("Senha: "));
let value = 1000

if(password == 42532971886 && account == 12345678){
    console.log(value)
    console.log("Saque")
    console.log("Deposito")
        let opcao = entradateste.question("Qual voce precisa, saque ou deposito?: ")
        
        if(opcao == "saque"){
                let sesi : number = parseFloat(entradateste.question("Valor do saque: "))
                let password2 = entradateste.question("SENHA: ")
                
        if(sesi <= value && password2 == 42532971886){
            console.log("NOVO SALDO DE: " + (value - sesi))   
        }
        }
        
    else if(opcao == "deposito"){
        let sesi : number = parseFloat(entradateste.question("Valor do deposito: "))
        let password2 = entradateste.question("SENHA: ")

        if(sesi >= value && password2 == 42532971886){
        console.log("NOVO SALDO DE: " + (value + sesi))   
        }

        else if(value>sesi){
            console.log("VALOR INVALIDO!")
        }

        else if(password2 != 42532971886){
            console.log("SENHA INVALIDA!!")

        if (opcao == "deposito"){
                let value2 : number = parseFloat (entradateste.question("Valor do depositar: "))
                let password3 = entradateste.question("SENHA: ")

        if(password3 == 42532971886){
            console.log("Novo saldo: " + (value + value2))
        }}}
    }
}

else if(password != 42532971886){
    console.log("SENHA INCORRETA!")
}

let exit = entradateste.question("deseja sair?: ")
if(exit == "sim"){
    console.log("Bye bye")
}