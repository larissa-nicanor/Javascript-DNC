class Jogador {
    constructor(nome, posicao, numGol){
        this.nome = nome;
        this.posicao = posicao;
        this.numGol = numGol;
    }
    golsMarcados(){
        console.log(this.nome + ' marcou ' + this.numGol + ' gols em sua carreira.');
    }
}

const Cristiano = new Jogador('Cristiano Ronaldo', 'Atacante', 850);
Cristiano.golsMarcados();