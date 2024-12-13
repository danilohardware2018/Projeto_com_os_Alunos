function showTotalList() {
  const shoppingKart = document.getElementById('shopping-kart');

  const pizzaCards = document.querySelectorAll('.pizza');
  let totalList = 0;
  pizzaCards.forEach((pizzaCard) => {
    totalList += parseFloat(pizzaCard.children[4].children[4].innerText);
  });
  const total = document.createElement('h3');
  total.className = 'total';
  total.innerText = totalList == 0 ? '' : `Total: R$ ${totalList.toFixed(2)}`;
  shoppingKart.appendChild(total);
}

function criarDivProduto(pizzaName, pizzaQuantidade, pizzaPrecoTotal) {
  const shoppingKart = document.getElementById('shopping-kart');

  const pizzaResumo = document.createElement('div');
  pizzaResumo.className = 'pizza-resumo';

  const descricao = document.createElement('p');
  descricao.className = 'descricao';
  descricao.innerText =
    pizzaQuantidade == 1
      ? `${pizzaQuantidade} pizza de ${pizzaName}: ${pizzaPrecoTotal}`
      : `${pizzaQuantidade} pizzas de ${pizzaName}: ${pizzaPrecoTotal}`;

  pizzaResumo.appendChild(descricao);
  shoppingKart.appendChild(pizzaResumo);
}

function pizzaOrderedList() {
  const shoppingKart = document.getElementById('shopping-kart');
  shoppingKart.innerHTML = '';

  const pizzaCards = document.querySelectorAll('.pizza');

  pizzaCards.forEach((pizzaCard) => {
    const pizzaName = pizzaCard.id;

    const pizzaQuantidade = pizzaCard.children[4].children[2].innerText;

    const pizzaPrecoTotal = pizzaCard.children[4].children[4].innerText;

    if (pizzaQuantidade !== '0') {
      criarDivProduto(pizzaName, pizzaQuantidade, pizzaPrecoTotal);
    }
  });

  showTotalList();
}

const decrementIncrement = (id, operation, idPreco, idTotal) => {
  const qtdPizza = document.getElementById(id);
  const precoPizza = document.getElementById(idPreco);
  const precoTotal = document.getElementById(idTotal);

  if (operation === 'plus') {
    qtdPizza.innerText = parseInt(qtdPizza.innerText) + 1;
    precoTotal.innerText = (
      parseInt(qtdPizza.innerText) * parseFloat(precoPizza.innerText)
    ).toFixed(2);

    pizzaOrderedList();

    return;
  } else {
    if (parseInt(qtdPizza.innerText) > 0) {
      qtdPizza.innerText = parseInt(qtdPizza.innerText) - 1;
      precoTotal.innerText = (
        parseInt(qtdPizza.innerText) * parseFloat(precoPizza.innerText)
      ).toFixed(2);

      pizzaOrderedList();

      return;
    }
  }
};
