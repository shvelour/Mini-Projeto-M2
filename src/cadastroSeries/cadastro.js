
class Serie {
  constructor(nome, genero, temporadas, nota) {
    this.nome = nome;
    this.genero = genero;
    this.temporadas = temporadas;
    this.nota = nota;
  }
}

// Array para armazenar as séries
const series = [];

// Função para adicionar uma série
function btnSalvar() {

  const nome = document.getElementById('m-nome').value;
  const genero = document.getElementById('m-genero').value;
  const temporadas = parseFloat(document.getElementById('m-temporadas').value);
  const nota = parseFloat(document.getElementById('m-nota').value);

  // Verificar se o nome, gênero e nota são válidos
  if (nome && genero && !isNaN(nota)) {
    // Criar uma nova série
    const serie = new Serie(nome, genero, temporadas, nota);
    
    // Adicionar a série ao array
    series.push(serie);

    // Atualizar a tabela e fechar o modal
    atualizarTabela();
    closeModal();
  }
}

// Função para atualizar a tabela
function atualizarTabela() {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  for (const serie of series) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.nome}</td>
      <td>${serie.genero}</td>
      <td>${serie.temporadas}</td>
      <td>${serie.nota}</td>
      <td class="acao"><button onclick="editarSerie('${serie.nome}')">Editar</button></td>
      <td class="acao"><button onclick="excluirSerie('${serie.nome}')">Excluir</button></td>
    `;
    tbody.appendChild(row);
  }
}

// Função para abrir o modal
function openModal() {
  document.querySelector('.modal-container').style.display = 'block';
}

// Função para fechar o modal e limpar os campos do formulário
function closeModal() {
  document.querySelector('.modal-container').style.display = 'none';
  document.getElementById('m-nome').value = '';
  document.getElementById('m-genero').value = '';
  document.getElementById('m-temporadas').value = '';
  document.getElementById('m-nota').value = '';
}

// Função para editar uma série
function editarSerie(nome) {
  const serie = series.find(s => s.nome === nome);

  if (serie) {

    document.getElementById('m-nome').value = serie.nome;
    document.getElementById('m-genero').value = serie.genero;
    document.getElementById('m-temporadas').value = serie.temporadas;
    document.getElementById('m-nota').value = serie.nota;

    // Remover a série da lista
    const index = series.indexOf(serie);
    if (index !== -1) {
      series.splice(index, 1);
    }

    // Atualizar a tabela e abrir o modal
    atualizarTabela();
    openModal();
  }
}

// Função para excluir uma série
function excluirSerie(nome) {
  const serie = series.find(s => s.nome === nome);

  if (serie) {
    // Remover a série da lista
    const index = series.indexOf(serie);
    if (index !== -1) {
      series.splice(index, 1);
    }
    atualizarTabela();
  }
}


document.getElementById('btnSalvar').addEventListener('click', btnSalvar);

atualizarTabela();
