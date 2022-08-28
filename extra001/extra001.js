let resposta = window.document.getElementById("saida");
let contador = 0;

const acao1 = () => {
  let tarefas = window.prompt('Digite suas tarefas: ');
  resposta.innerHTML += `<ol><input type="checkbox">${tarefas}</input></ol>`;
}
