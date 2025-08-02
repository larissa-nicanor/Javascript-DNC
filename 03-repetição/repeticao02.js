// arrays = vetores = constante = []
// instruturas que permitem gravar/gravar uma lista com mais de um valor, na mesma variável.

// Ex: Quero fazer uma compra e preciso achar minha carteira.

const bolsa = [
    'Notebook',
    'Moleton',
    'Carteira',
    'Celularr',
    'Caderno',
]

for (let i = 0; i < bolsa.length; i++) { 
    console.log(bolsa[i])
    if (bolsa[i] == 'Carteira') break; // se encontrar a carteira, para o loop
}

//length = tamanho do array
// i = índice, que representa a posição do item no array
// bolsa[i] acessa o item na posição i do array bolsa