let jogador = {
    nome: 'Lionel Messi',
    idade: 38,
    numGol: 875,
    Gol(g=0){
        console.log('Messi fez mais gols durante a partida!!')
        this.numGol += g;
    }
}

console.log(jogador.nome)
console.log(jogador.numGol)
jogador.Gol(5) //quantidade de gols feitos
console.log(jogador.numGol)

// jogador.posicao = 'Atacante'
// console.log(jogador)

// delete jogador.idade
// console.log(jogador)