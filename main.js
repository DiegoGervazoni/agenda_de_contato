const form = document.getElementById("form");
const limpar = document.getElementById("reset");
const contato = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionarLinha();
});

limpar.addEventListener("click", function () {
  if (contato.length >= 1) {
    window.location.reload();
  }
});

function adicionarLinha() {
  const inputNome = document.getElementById("nome").value;
  const inputTelefone = document.getElementById("telefone").value;
  let linhas = "";

  if (contato.includes(inputNome) && contato.includes(inputTelefone)) {
    alert(`O nome: ${inputNome} e o telefone: ${inputTelefone} já existem!`);
  } else if (contato.includes(inputTelefone)) {
    alert(`O telefone: ${inputTelefone} já existe!`);
  } else {
    contato.push(inputNome, inputTelefone);

    let nomeLinha = "<tr>";
    nomeLinha += `<td>${inputNome}</td>`;
    nomeLinha += `<td>${inputTelefone}</td>`;
    nomeLinha += "</tr>";
    linhas += nomeLinha;
  }
  // Adicione a linha à tabela
  const tabela = document.querySelector("tbody");
  tabela.innerHTML += linhas;
}
