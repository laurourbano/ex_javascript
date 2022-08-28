const contar = () => {
  let resposta = document.getElementById('saida')
  resposta.innerHTML += `<h3>Contando de 1 até 10</h3>`
  for(i=1; i<=10; i++){
    resposta.innerHTML += ` - ${i} `;
}
  resposta.innerHTML += `-`
} 
