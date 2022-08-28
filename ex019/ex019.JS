
const escolherMes = () => {

  let mes = window.prompt("Digite um mes por extenso (ex:maio): ");
  let resposta = document.getElementById("saida");
  let estacao;

  switch(mes.toUpperCase()){
    case 'JANEIRO': case 'FEVEREIRO': case 'MARCO':
      estacao = 'INVERNO'
      break
    case 'ABRIL': case 'MAIO': case 'JUNHO':
      estacao = 'PRIMAVERA'
      break
    case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
      estacao = 'VERAO'
      break
    case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
      estacao = 'OUTONO'
      break
    default:
      estacao = 'INDEFINIDA'
      break  
  }
  resposta.innerHTML = `<p>mês: ${mes}</p><p>estação: ${estacao}</p>`
}