
const escolher = () => {

  let numero1 = Number(window.prompt("Digite um número: "));
  let numero2 = Number(window.prompt("Digite outro número: "));
  let operacao = Number(window.prompt(`Valores informados: ${numero1} e ${numero2}.\nO que vamos fazer? \n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
  
  let resposta = document.getElementById("saida");
  resposta.innerHTML = `<h2>Calculando...</h2>`
  switch(operacao){
    case 1:
      resposta.innerHTML += `<p>${numero1} + ${numero2} = ${numero1+numero2}</p>`
      break
    case 2:
      resposta.innerHTML += `<p>${numero1} - ${numero2} = ${numero1-numero2}</p>`
      break
    case 3:
      resposta.innerHTML += `<p>${numero1} * ${numero2} = ${numero1*numero2}</p>`
      break
    case 4:
      resposta.innerHTML += `<p>${numero1} / ${numero2} = ${numero1/numero2}</p>`
      break
    default:
      resposta.innerHTML += `<p>OPÇÃO INVÁLIDA, os números são ${numero1} e ${numero2}, mas eu não sei o que fazer com eles!</p>`
      break
  }


}