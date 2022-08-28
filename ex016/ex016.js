let resposta = window.document.getElementById("saida");

const sorteiaNumero = () => {
  let minimo = 1;
  let maximo = 100;
  let diferenca = maximo - minimo;
  let aleatorio = Math.random();
  console.log(aleatorio);
  let numero = minimo + Math.trunc(diferenca * aleatorio);

  resposta.innerHTML += `<p>Acabei de pensar no número <strong>${numero}</strong></p>`;
}

const limpar = () => {

  resposta.innerHTML = null;

}
