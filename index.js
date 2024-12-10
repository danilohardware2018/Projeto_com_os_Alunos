const shoppingKart = () => {
  console.log('Ir para o carrinho');
};

const decrementIncrement = (id, operation, idPreco, idTotal) => {
  const qtdPizza = document.getElementById(id);
  const precoPizza = document.getElementById(idPreco);
  const totalPeperoni = document.getElementById(idTotal);
  console.log(totalPeperoni)
  if (operation === 'plus') {
    qtdPizza.innerText = parseInt(qtdPizza.innerText) + 1;
    totalPeperoni.innerText = parseInt(qtdPizza.innerText) * parseFloat(precoPizza.innerText); 
    
    return;
  } else {
    if (parseInt(qtdPizza.innerText) > 0) {
      qtdPizza.innerText = parseInt(qtdPizza.innerText) - 1;
      totalPeperoni.innerText = parseInt(qtdPizza.innerText) * parseFloat(precoPizza.innerText);
      return;
    }
    
  }
};


