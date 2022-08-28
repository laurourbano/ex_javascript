let resposta = window.document.getElementById("saida");
let contador = 0;

const acao1 = () => {
  resposta.innerHTML += `<p>Clicou no primeiro botão </p>`;
}
const acao2 = () => {
  resposta.innerHTML += `<p>Clicou no segundo botão</p>`;
}
const acao3 = () => {
  resposta.innerHTML += `<p>Clicou no terceiro botão</p>`;
}

const apagar = () => {
  resposta.innerHTML = '<p>Aqui vai aparecer o resultado</p>';
}