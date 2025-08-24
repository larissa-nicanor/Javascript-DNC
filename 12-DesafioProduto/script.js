// Classe Produto para gerenciar produtos
class Produto{
    constructor(){
        this.id = 1; // Identificador único para cada produto
        this.arrayProdutos = []; // Array para armazenar os produtos
    }

    // Método para adicionar um novo produto
    Adicionar(){
        let produto = this.lerDados(); // Lê os dados do formulário
        if(this.Validar(produto) == true){ // Valida os dados
            this.Salvar(produto); // Salva o produto se estiver válido
        }
        this.Listar(); // Atualiza a lista de produtos na tabela
        this.Cancelar(); // Limpa os campos do formulário
    }

    // Método para ler os dados do formulário
    lerDados(){
        let produto = {};
        produto.id = this.id; // Atribui o id atual ao produto
        produto.nomeProduto = document.getElementById('pdnome').value // Lê o nome do produto
        produto.preco = document.getElementById('pdpreco').value // Lê o preço do produto
        return produto;
    }

    // Método para validar os dados do produto
    Validar(produto){
        let msg = '';
        if(produto.nomeProduto == ''){
            msg += 'Informe o nome do produto! \n'; // Validação do nome
        }
        if(produto.preco == ''){
            msg += 'Informe o preço do produto! \n'; // Validação do preço
        }
        if(msg != ''){
            alert(msg); // Exibe alerta se houver erro
            return false;
        }
        return true; // Retorna true se estiver tudo certo
    }

    // Método para salvar o produto no array
    Salvar(produto){
        this.arrayProdutos.push(produto); // Adiciona o produto ao array
        this.id++; // Incrementa o id para o próximo produto
    }

    // Método para listar os produtos na tabela
    Listar(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = ''; // Limpa a tabela antes de listar

        // Percorre o array de produtos e cria as linhas da tabela
        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id; // Exibe o id
            td_nome.innerText = this.arrayProdutos[i].nomeProduto; // Exibe o nome
            td_preco.innerText = Number(this.arrayProdutos[i].preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Exibe o preço formatado

            // Cria o botão de deletar (imagem)
            let imagem = document.createElement('img');
            imagem.src = 'del.png';
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")");
            td_del.appendChild(imagem);
        }
    }

    // Método para limpar os campos do formulário
    Cancelar(){
        document.getElementById('pdnome').value = '';
        document.getElementById('pdpreco').value = '';
    }

    // Método para deletar um produto da lista
    Deletar(id){
        let tbody = document.getElementById('tbody');
        for (let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1); // Remove do array
                tbody.deleteRow(i); // Remove da tabela
            }
        }
        alert('Produto deletado com sucesso!');
    }
}

// Instancia a classe Produto
var produto = new Produto();