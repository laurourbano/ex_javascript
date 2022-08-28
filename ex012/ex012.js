const comparaNumero = () => {
  let numero1 = Number(window.prompt("Digite um número: "));
  let numero2 = Number(window.prompt("Digite outro número: "));

  let msg

  if(numero1>numero2){
    msg = `Analisando os valores ${numero1} e ${numero2}, o maior valor é <strong>${numero1}</strong>`;
  }else if(numero1<numero2){
    msg = `Analisando os valores ${numero1} e ${numero2}, o maior valor é <strong>${numero2}</strong>`;
  }else{
    msg = `Analisando os valores ${numero1} e ${numero2}, os números são <strong>IGUAIS.</strong>`;
  }
  
  let resposta = window.document.getElementById("saida");

  resposta.innerHTML = `<p>${msg}</p>`;

}
