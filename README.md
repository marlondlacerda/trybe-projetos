<<<<<<< HEAD
# Boas vindas ao repositório do Projeto ES6 e Testes Unitários!

<div align="center">
  <img height="150px" align="right" src="https://theme.zdassets.com/theme_assets/9633455/9814df697eaf49815d7df109110815ff887b3457.png" />
  <div align="left" style="display: inline_block">
    <h2>Módulo: Fundamentos do Desenvolvimento Web</h2>
    <span>
      Este Repositório possuí projeto desenvolvido no período que estive na Trybe, abordando sobre conceitos de criação de várias funções para atender aos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estão corretas.
    </span><br>
      <b>Leia o guia de como instalar o repositório na máquina para verificar e testar as funções!</b>
  </div>
  <br>
</div>
<br>

---

# Habilidades
- Escrever testes unitários para funções utilizando o módulo Assert do NodeJS para verificar o correto funcionamento dessas funções;
- A partir de testes já implementados, escrever funções de forma que elas atendam aos testes propostos;
- Escrever testes e funções utilizando uma abordagem de desenvolvimento orientado a testes.

## O que foi desenvolvido
- Foi implementado várias funções para atender aos requisitos propostos e/ou testes unitários para garantir que as implementações das funções estão corretas.
---

# Instruções para instalar e rodar os testes de cada função
1. Clone o repositório
  * `git clone git@github.com:marlondlacerda/trybe-projetos.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybe-projetos/fundamentals/bloco_7/js-unit-tests`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install

3. Entre no Vs Code para verificar os arquivos
  * Atalho no terminal: `code . `
  * A pasta src contém os requisitos normais e o bônus
  * A pasta test contém os testes que verifica se as funções estão atendendo o que foi pedido

4. Leia os Requisitos do Projeto logo abaixo explicando o que cada requisito propõem

***

<details>
    <summary>Requisitos do projeto</summary>

### 1 - Implemente a função `average`

A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos. Caso a função receba algum valor não númerico ou um array vazio, o valor undefined deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.

  **O que será avaliado**

  * Será validado se o comportamento da função "average" está correto'.

### 2 - Implemente os casos de teste para a função `numbers`

 A função `numbers` recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário. Essa função já está implementada no arquivo `src/numbers.js`. Escreva os testes para essa função para garantir que a implementação de `numbers` está correta.

  **O que será avaliado**

  * Será validado se o teste da função `numbers` verifica se o retorno da função é `true` quando o array passado por parâmetro contém somente números.

### 3 - Implemente a função `vqv`

Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

```javascript
`'Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!'`
```

Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado. O arquivo `vqv.spec.js` contém os testes para `vqv` já implementados. Implemente a função no arquivo `src/vqv.js` de forma que ela atenda aos testes propostos.

  **O que será avaliado**

  * Será validado se a função `vqv` retorna a frase esperada com nome e idade.

### 4 - Implemente os casos de teste para a função `circle`

A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência). Se não for especificado um raio, a função retorna `undefined`. Essa função já está implementada no arquivo `src/circle.js`. Escreva os testes para essa função para garantir que a implementação de `circle` está correta.

  **O que será avaliado**

  * Será validado se o teste da função `circle` verifica se ao receber um raio, o retorno da função é um objeto com as informações corretas (Raio, Área e Circunferência).

### 5 - Implemente a função `createStudent`

A função `createStudent` recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
O arquivo `createStudent.spec.js` contém os testes para `createStudent` já implementados. Implemente a função no arquivo `src/createStudent.js` de forma que ela atenda aos testes propostos.

  **O que será avaliado**

  * Será validado se a função `createStudent` retorna o objeto esperado.

### 6 - Implemente os casos de teste para a função `productDetails`

A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:

```javascript
productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
```

Essa função já está implementada no arquivo `src/productDetails.js`. Escreva os testes para essa função no arquivo `tests/productDetails.js` para garantir que a implementação de `productDetails` está correta.

  **O que será avaliado**

  * Será validado se o teste da função `productDetails` verifica se ao receber duas strings, o retorno da função é um array de objetos e se cada objeto contém os dados necessários.

### 7 - Implemente a função `objCalculator`
Desenvolva um objeto calculator que possui quatro chaves:
  - add;
  - mult;
  - div;
  - sub.

Para cada uma delas atribua uma função que realiza a respectiva operação. A função deve receber dois inteiros e retornar um inteiro. Os resultados das divisões devem sempre ser arredondados para baixo. O arquivo `objCalculator.spec.js` contém os testes para `objCalculator` já implementados. Implemente a função no arquivo `src/objCalculator.js` de forma que ela atenda aos testes propostos.

  **O que será avaliado**

  * Será validado se a função `objCalculator` retorna os valores esperados.

### 8 - Implemente a função `myCounter`
A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada. Corrija a função `myCounter` para que a função retorne o array correto. O arquivo `myCounter.spec.js` contém os testes para `myCounter` já implementados. Implemente a função no arquivo `src/myCounter.js` de forma que ela atenda aos testes propostos.

  **O que será avaliado**

  * Será validado se a função `myCounter` retorna os dados esperados.

### 9 - Implemente os casos de teste e a função `createMenu`

**Agora prepare-se! Esse último requisito vai te guiar através de um longo e rico processo de desenvolvimento orientado a testes (Test Driven Development, ou TDD). Dará trabalho, mas vale a pena!**

Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

A estrutura deste código e deste objeto já foi definida e você irá implementá-lo. Você encontrará mais detalhes sobre a estrutura a ser seguida e exemplos do retorno da função no arquivo `src/restaurant.js`. Você deverá seguir o passo-a-passo a seguir para garantir o bom desenvolvimento do sistema.

  1. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `createMenu()`, retorna um objeto que possui, mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
  2. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se, dado que a função `createMenu` foi chamada com o objeto: `{ food: {}, drink: {} }`, checa se `'objetoRetornado.fetchMenu()'` retorna um objeto cujas chaves são somente `food` e `drink`.
  3. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se o menu passado pra função `createMenu` é identico ao menu recuperado pela função `'objetoRetornado.fetchMenu()'`.
  4. No arquivo `src/restaurant.js`, crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.
  5. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se `'objetoRetornado.consumption'`, após a criação do menu, retorna um array vazio.
  6. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.
  7. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
  8. No arquivo `src/restaurant.js`, crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro, adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.
  9. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
  10. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
  11. No arquivo `tests/restaurant.spec.js`, escreva um teste que verifica que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`.
  12. No arquivo `src/restaurant.js`, adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que varre todo os itens de `objetoRetornado.consumption`, soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso, você precisará varrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.


  **O que será avaliado**

  * Será validado se a função `createMenu` retorna os dados esperados.
  * Será validado se o teste da função `createMenu` verifica cada um dos retornos da função e se estes retornos têm o comportamento esperado.


</details>

---

<div align="left">
  <a href="https://github.com/marlondlacerda/trybe-projetos">Voltar para o repositório principal</a>
</div>
<div align="center">

[⬆ Voltar para o topo](#boas-vindas-ao-repositório-do-projeto-es6-e-testes-unitários)

</div>
=======

<div align=center>

# 🟢 Trybe Studies 🟢

Este repositório foi desenvolvido com intuito de de conter todas as atividades e projetos desenvolvidos no período que estive na <b>Trybe</b>.

<a href="https://www.betrybe.com/" target="_blank">
<img src="https://freecourse.betrybe.com/images/trybe-logo-e10dbaaa26462aa149b81a924b00df07.png?vsn=d" width="250px">
</a>

</div>

## 🟥 Checklist

- [x] Fundamentals: Bloco 1 ao 10 
- [ ] Front-End: Bloco 11 ao 19
- [ ] Back-End: Bloco 20 ao 32
- [ ] Computer-Science: Bloco 33 ao 38
- [ ] Soft Skills: Competência 01 ao 06

Cada pasta acima contém um arquivo README com detalhes de cada projetos.

* * *

### 🖥 Módulo - Fundamentos do Desenvolvimento Web

#### Projetos
- [x] Bloco 3 - Lessons Learned  - [Deploy](https://marlondlacerda-lessons-learned.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_3/lessons-learned#readme)
- [x] Bloco 4 - Playground Functions  - [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_4/playground-functions#readme)
- [x] Bloco 5 - Pixel Art - [Deploy](https://marlondlacerda-pixel-art.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_5/pixel-art#readme)
- [x] Bloco 5 - Todo List - [Deploy](https://marlondlacerda-todo-list.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_5/todo-list#readme)
- [x] Bloco 5 - EXTRAS - Color Guess - [Deploy](https://marlondlacerda-color-guess.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_5/extras/color-guess#readme)
- [x] Bloco 5 - EXTRAS - Meme Generator - [Deploy](https://marlondlacerda-meme-generator.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_5/extras/meme-generator#readme)
- [x] Bloco 5 - EXTRAS - Mistery Letter - [Deploy](https://marlondlacerda-mistery-letter.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybe-projetos/tree/main/fundamentals/bloco_5/extras/mistery-letter#readme)
- [x] Bloco 6 - Trybewarts - [Deploy](https://marlondlacerda-trybewarts.vercel.app/) | [Código Fonte](https://github.com/marlondlacerda/trybewarts#readme)
>>>>>>> 66cd31774a9183101bb4a2ee0387e99b3b5ae2bf
