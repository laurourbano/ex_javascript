const botao1 = document.getElementById("botao1");

const calculaMedia = () => {
  let nome = window.prompt("Digite o nome do Aluno: ");
  let nota1 = Number(window.prompt("Digite um número: "));
  let nota2 = Number(window.prompt("Digite mais um número: "));

  media = (nota1 + nota2)/2;

  let msg = `<p>Calculando a média final de ${nome}</p>
  
  <p>As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong></p>
  
  <p>A média final será <strong>${media}</strong></p>`;

  let conteudo = window.document.getElementById("resultado");

  conteudo.innerHTML = msg;

}