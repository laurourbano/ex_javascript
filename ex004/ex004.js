const botao1 = document.getElementById("botao1");

alert('Bem vindo a meu site')

const clicando = () => {

  let numero = window.prompt("Digite um número: ");

  let dobro = numero * 2 ;
  let metade = numero / 2;
  
  let msg = `<p><br>O dobro de ${numero} é ${dobro} e a metade é ${metade}</p>`;

  let conteudo = window.document.getElementById("resultado");

  conteudo.innerHTML = msg;

}