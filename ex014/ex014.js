const analisaData = () => {

  let meses = new Array ('Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez');
  let semana = new Array ('Dom','Seg','Ter','Qua','Qui','Sex','Sab');

  const dataAtual = new Date();
  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth();
  let ano = dataAtual.getFullYear();
  let dia_semana = dataAtual.getDay();
  let hora = dataAtual.getHours();
  let minuto = dataAtual.getMinutes();
  let segundo = dataAtual.getSeconds();
    
  let resposta = window.document.getElementById("saida");

  resposta.innerHTML = `
  <p>Dia: <strong>${dia}</strong></p>
  <p>Mês: <strong>${meses[mes]}</strong></p>
  <p>Ano: <strong>${ano}</strong></p>
  <p>Dia da Semana: <strong>${semana[dia_semana]}</strong></p>
  <p>Hora: <strong>${hora}</strong></p>
  <p>Minutos: <strong>${minuto}</strong></p>
  <p>Segundos: <strong>${segundo}</strong></p>
  `;

}
