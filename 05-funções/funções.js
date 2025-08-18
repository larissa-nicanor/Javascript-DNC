function presente (dinheiro, valor){
    if (dinheiro < valor){
        return "Saldo insuficiente";
    } else {
        return "Você realmente precisa fazer essa compra?";
    }
}

let x = presente(100, 90); //valor em saldo, valor do presente
console.log(x);