// if (se, condição, verdadeira executada)
// else (se não, objeção, falsa executada)
// else if (se não, outra condição, executada)

// Ex:Quero comprar um presente, mas somente se tiver dinheiro suficiente

var dinheiro = 100; // Declaração de variável dinheiro com valor 100
console.log(`Eu possuo R$ ${dinheiro}.00`);

if (dinheiro > 65){
    console.log('Posso comprar o presente!');
} else { // Se a condição for falsa, executa o bloco else
    console.log('Não posso comprar o presente!');
}