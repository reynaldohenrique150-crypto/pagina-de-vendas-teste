let carrinho = [];

function adicionar() {
  //recuperando valores nome do produto, quantidade e valor
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorProduto = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value || 1;
  //cacular preço, subtotal
  let precoTotalProduto = quantidade * valorProduto;
  let carrinhoHTML = document.getElementById("lista-produtos");
  carrinhoHTML.innerHTML =
    carrinhoHTML.innerHTML +
    `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${precoTotalProduto}</span>
  </section>`;
  console.log(carrinho);
  carrinho.push(precoTotalProduto);
  let somaTotal = carrinho.reduce(
    (acumulador, precoAtual) => acumulador + precoAtual,
    0,
  );
  totalCarrinho = document.getElementById("valor-total");
  totalCarrinho.textContent = `R$ ${somaTotal}`;
}
function limpar() {
  carrinho = [];
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
  document.getElementById("quantidade").value = "";
}
