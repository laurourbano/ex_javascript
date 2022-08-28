const botao1 = document.getElementById("botao1");

const calculaMedia = () => {
  let numero = Number(window.prompt("Digite um número: "));

  let valorAbsoluto = Math.abs(numero);
  let parteInteira = Math.trunc(numero);
  let inteiroMaisProximo = Math.round(numero);
  let raizQuadrada = Math.sqrt(numero);
  let raizCubica = Math.cbrt(numero);
  let quadrado = Math.pow(numero, 2);
  let cubo = Math.pow(numero, 3);


  let msg = 
    `<p>O número a ser analisado aqui será o ${numero}</p>
    <hr>
    <p>O seu valor absoluto é ${valorAbsoluto}</p>

    <p>A sua parte inteira é ${parteInteira}</p>

    <p>O valor inteiro mais próximo é ${inteiroMaisProximo}</p>

    <p>A sua raiz quadrada é ${raizQuadrada}</p>

    <p>A sua raiz cúbica é ${raizCubica}</p>  
    
    <p>O valor de ${numero}² é ${quadrado}</p>

    <p>O valor de ${numero}³ é ${cubo}</p>`

  let conteudo = window.document.getElementById("resultado");

  conteudo.innerHTML = msg;

}