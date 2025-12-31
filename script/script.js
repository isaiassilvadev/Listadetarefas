function Adicionar() {
  let valor = document.querySelector('input#item').value;
  let it = document.querySelector('ul.it');
  //cont

  if (valor.length == 0) {
    alert('Por favor, digite um valor válido!');
  } else {
    var item = document.createElement('li');
    var check = document.createElement('input')
    var texto = document.createElement('span')
    check.setAttribute('type', 'checkbox')
    texto.innerText = valor;
    var btn = document.createElement('button');
    btn.innerText = 'Excluir';
    btn.addEventListener('click', excluir)
    item.appendChild(check);
    item.appendChild(texto);
    it.appendChild(item);
    item.appendChild(btn);
  }
  let input = document.querySelector('input#item');
  input.value = '';
  input.focus();
}

function excluir(event) {
  let botao = event.target;
  let item = botao.parentNode;
  item.remove()
}