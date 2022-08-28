let conteudo = window.document.getElementById("resultado");
let contador = 0;

const adicionaContador = () => {
  contador++
  conteudo.innerHTML = `<p>O contador está com <strong>${contador}</strong> clique(s)</p>`;
}
const zerarContador = () => {
  contador = 0;
  conteudo.innerHTML = null;
}