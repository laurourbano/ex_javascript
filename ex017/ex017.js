let resposta = document.getElementById("saida");
let jogador = 0;
let computador = 0;

const sortear = () => {
  let minimo = 1;
  let maximo = 100;
  let diferenca = maximo - minimo;
  let aleatorio = Math.random();
  computador = minimo + Math.trunc(diferenca * aleatorio);
  console.log(computador)
}

const jogar = () => {
  jogador = Number(window.prompt("Digite seu palpite: "));
  if (jogador < computador) {
    resposta.innerHTML += `<p>Você digitou ${jogador}, meu número é <strong>MAIOR</strong></p>`;
  }else if (jogador > computador) {
    resposta.innerHTML += `<p>Você digitou ${jogador}, meu número é <strong>MENOR</strong></p>`;
  }else if (jogador == computador) {
    resposta.innerHTML += `<p>PARABÉNS você <strong>ACERTOU</strong> o número é ${computador}.</p>`;
    document.getElementById("botao1").style.display = "none";
  }

}