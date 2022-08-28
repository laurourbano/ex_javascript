const comparaNumero = () => {
  
  const dataAtual = new Date();
  
  let resposta = window.document.getElementById("saida");

  resposta.innerHTML = `<p>O que eu recebi dos sistema foi <strong>${dataAtual}</strong></p>`;

}
