const calculaIdade = () => {

  let ano_nascimento = window.prompt("Digite o ano em que nasceu: ")
  const dataAtual = new Date();
  let ano_atual = dataAtual.getFullYear();
  let idade = ano_atual - ano_nascimento;
    
  let resposta = window.document.getElementById("saida");

  resposta.innerHTML = `
  <p>Quem nasceu em ${ano_nascimento} vai completar <strong>${idade}</strong> anos em ${ano_atual}.</p>
  `;

}
