const verificaNumero = () => {
  let numero = Number(window.prompt("Digite um número: "));

  let tipo

  if(numero % 2 == 0){
    tipo = `<strong> é par</strong>`;
  }else{
    tipo = `<strong> é ímpar</strong>`;
  }
  
  let resposta = window.document.getElementById("saida");

  resposta.innerHTML = `<p>O número ${numero} que foi digitado ${tipo}</p>`;

}
