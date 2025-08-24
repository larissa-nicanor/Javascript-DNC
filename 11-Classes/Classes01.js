// let jogador ={
//     nome: 'Cristiano Ronaldo',
//     posicao: 'Atacante',
//     numGol: 850,
// }

const Jogador = function(nome, posicao, numGol){
    let Nome = nome;
    let Posicao = posicao;
    let Gols = numGol;

    this.getNome = function(){
        return Nome;
    }
    this.getPosicao = function(){
        return Posicao;
    }
    this.getGols = function(){
        return Gols;
    }
}

const Cristiano = new Jogador('Cristiano Ronaldo', 'Atacante', 850);
console.log(Cristiano.getNome());

const Messi = new Jogador('Lionel Messi', 'Atacante', 820);
console.log(Messi.getNome());

// console.log(Cristiano.getNome() + ' - Gols: ' + Cristiano.getGols());
// console.log(Messi.getNome() + ' - Gols: ' + Messi.getGols());