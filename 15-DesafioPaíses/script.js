// Seleciona elementos da página
const btn = document.getElementById('button-addon2');
const input = document.getElementById('input-pais');
const card = document.getElementById('card-pais');
const imgBandeira = document.getElementById('img-bandeira');
const nomePais = document.getElementById('nome-pais');
const capital = document.getElementById('capital');
const cont = document.getElementById('cont');
const pop = document.getElementById('pop');

// Função para buscar e exibir os dados do país
function pesquisarPais() {
  const pais = input.value.trim();
  if (!pais) {
    alert('Digite o nome de um país em inglês!');
    return;
  }

  fetch(`https://restcountries.com/v3.1/name/${pais}`)
    .then(response => response.json())
    .then(data => {
      if (!data || data.status === 404) {
        alert('País não encontrado!');
        card.style.display = 'none';
        return;
      }
      const paisInfo = data[0];
      // Atualiza o cartão com os dados da API
      imgBandeira.src = paisInfo.flags.svg;
      imgBandeira.alt = `Bandeira de ${paisInfo.name.common}`;
      nomePais.innerText = paisInfo.name.common;
      capital.innerText = paisInfo.capital ? paisInfo.capital[0] : 'N/A';
      cont.innerText = paisInfo.continents ? paisInfo.continents[0] : 'N/A';
      pop.innerText = paisInfo.population.toLocaleString();
      card.style.display = 'block'; // Exibe o cartão
    })
    .catch(() => {
      alert('Erro ao buscar país!');
      card.style.display = 'none';
    });
}

// Evento do botão para pesquisar país
btn.addEventListener('click', pesquisarPais);

// Evento para buscar ao pressionar Enter no input
input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    pesquisarPais();
  }
});