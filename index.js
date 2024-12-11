const shoppingKart = () => {
  console.log('Ir para o carrinho');
};

const decrementIncrement = (id, operation, idPreco, idTotal) => {
  const qtdPizza = document.getElementById(id);
  const precoPizza = document.getElementById(idPreco);
  const precoTotal = document.getElementById(idTotal);
  console.log(precoTotal)
  if (operation === 'plus') {
    qtdPizza.innerText = parseInt(qtdPizza.innerText) + 1;
    precoTotal.innerText = parseInt(qtdPizza.innerText) * parseFloat(precoPizza.innerText); 
    
    return;
  } else {
    if (parseInt(qtdPizza.innerText) > 0) {
      qtdPizza.innerText = parseInt(qtdPizza.innerText) - 1;
      precoTotal.innerText = parseInt(qtdPizza.innerText) * parseFloat(precoPizza.innerText);
      return;
    }
    
  }
};


