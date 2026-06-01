# 🛒 Carrinho de Compras

Um sistema dinâmico e responsivo de carrinho de compras desenvolvido em JavaScript vanila, HTML5 e CSS3. O projeto simula a experiência de adicionar produtos a um carrinho, calculando subtotais e o valor total acumulado em tempo real.

---

## 🚀 Funcionalidades

* **Adição Dinâmica de Itens:** Permite selecionar um produto, definir a quantidade e inseri-lo no carrinho com apenas um clique.
* **Cálculo em Tempo Real:** Extrai o valor numérico diretamente dos elementos de seleção, calcula o subtotal (Preço × Quantidade) e atualiza o valor total geral instantaneamente.
* **Validação de Quantidade Inteligente:** Caso o usuário não informe a quantidade, o sistema assume o valor mínimo de `1` automaticamente através de operadores lógicos, evitando erros de cálculo.
* **Limpeza do Carrinho:** Função para zerar o carrinho, limpando a memória de dados e restaurando a interface para o estado inicial.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da interface do usuário.
* **CSS3:** Estilização moderna com tipografia personalizada (Chakra Petch e Inter) e layout responsivo.
* **JavaScript (ES6+):** Lógica de programação, manipulação do DOM e processamento de dados.

---

## 🧠 Conceitos de Programação Aplicados

Durante o desenvolvimento deste projeto, foram colocados em prática conceitos fundamentais de engenharia de software e JavaScript:

### 1. Manipulação do DOM
Captura de dados inseridos pelo usuário através do `document.getElementById` e atualização dinâmica da interface visual utilizando propriedades como `.innerHTML` e `.textContent`.

### 2. Tratamento de Strings (`.split()`)
Como os dados de preço vinham formatados textualmente a partir do formulário HTML (ex: `"Celular - R$1400"`), foi aplicada a lógica de divisão de strings para isolar o nome do produto e converter o preço de texto para um número manipulável (`parseInt`).

### 3. Processamento de Arrays (`.reduce()`)
Utilização do método nativo `.reduce()` para percorrer a array de preços acumulados, servindo como uma calculadora centralizada que reduz toda a lista de compras a um único valor total de forma limpa e performática.

### 4. Operadores Lógicos de Curto-Circuito (`||`)
Aplicação do operador lógico `||` (OU) para definir valores de fallback (padrão), garantindo a robustez do sistema caso o usuário envie formulários com campos em branco.

---

## 📁 Estrutura do Projeto

```text
├── assets/          # Ícones e imagens do projeto
├── css/
│   └── style.css    # Estilização da aplicação
├── js/
│   └── app.js       # Lógica JavaScript do carrinho
└── index.html       # Estrutura principal da página
