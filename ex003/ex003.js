const botao1 = document.getElementById("botao1");

const clicando = () => {

  let nome = window.prompt("Digite seu nome: ");
  
  let msg = `<p><br>Olá <strong>${nome}</strong>, muito prazer!</p>`;

  let conteudo = window.document.getElementById("resultado");

  conteudo.innerHTML = msg;

}