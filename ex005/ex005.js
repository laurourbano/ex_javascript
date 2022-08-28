const botao1 = document.getElementById("botao1");

const clicando = () => {

  let numero1 = Number(window.prompt("Digite um número: "));
  let numero2 = Number(window.prompt("Digite mais um número: "));

  soma = numero1 + numero2 ;
  
  let msg = `<p><br>A soma de ${numero1} é ${numero2} é igual ${soma}</p>`;

  let conteudo = window.document.getElementById("resultado");

  conteudo.innerHTML = msg;

}