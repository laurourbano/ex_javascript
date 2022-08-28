
const calcularMedia = () => {
  let nome = window.prompt("Digite o seu nome: ")
  let nota1 = Number(window.prompt("Digite a primeira nota: "));
  let nota2 = Number(window.prompt("Digite a segunda nota: "));

  let media = (nota1 + nota2) / 2;

  let resposta = window.document.getElementById("saida");

  resposta.innerHTML = `<p>Calculando a média final de ${nome}</p>
  <p>As notas obtidas foram ${nota1} e ${nota2}.</p>
  <p>A média final será ${media}</p>`;
  if(media>=7){
    resposta.innerHTML += `<p>A mensagem que temos é: <strong style="color:green">Meus parabéns!</strong></p>`
  }else if(media>=5){
    resposta.innerHTML += `<p>A mensagem que temos é: <strong style="color:orange">Você ficou para exame, estude bastante para aproveitar essa chance!</strong></p>`
  }else {
    resposta.innerHTML += `<p>A mensagem que temos é: <strong style="color:red">Infelizmente seus esforços não foram o suficiente, você está reprovado!</strong></p>`
  }
}
