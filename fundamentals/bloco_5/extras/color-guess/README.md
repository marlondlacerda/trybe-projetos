# Boas vindas ao repositório do projeto Adivinhação de Cor!

<div align="center">
  <img height="150px" align="right" src="https://theme.zdassets.com/theme_assets/9633455/9814df697eaf49815d7df109110815ff887b3457.png" />
  <div align="left" style="display: inline_block">
    <h2>Módulo: Fundamentos do Desenvolvimento Web</h2>
    <span>
      Este Repositório possuí projeto desenvolvido no período que estive na Trybe, abordando sobre conceitos de estilização, manipulação do DOM com Javascript e reutilização de código.
    </span>
  </div>
  <br>
</div>

## Preview
<div align="left" style="display: inline_block">
  <a href="https://marlondlacerda-color-guess.vercel.app/">Clique aqui</a> para ter acesso a um preview do App.
</div>

---

<div align="center">
  <img src="./images/preview.png" width="500">
</div>

## HABILIDADES
- Manipular o DOM
- Manipular Javascript
- Manipular o CSS.


## O que foi desenvolvido
- Uma aplicação usando <code>HTML5</code>, <code>CSS3</code> e <code>JavaScript</code>.
- Um jogo de adivinhação de cores onde sua pontuação é atualizada de acordo com os acertos.

---

# Instruções para instalar e rodar os testes de cada requisito
1. Clone o repositório
  * `git clone git@github.com:marlondlacerda/trybe-projetos.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybe-projetos/fundamentals/bloco_5/extras/color-guess`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install

3. Entre no Vs Code para verificar os arquivos
  * Atalho no terminal: `code . `
  * A pasta test contém os testes que verifica se as funções estão atendendo o que foi pedido

4. Leia os Requisitos do Projeto logo abaixo explicando o que cada requisito propõem

5. Use o cypress para rodar os tests
  * Atalho no terminal: `npm run cypress:open`

***

<details>
    <summary>Requisitos do projeto</summary>

- [x] 1 - Adicione no seu site um título com o nome do seu jogo.
  - Será verificado se o <code>id</code> do título é </code>title</code>.

- [x] 2 - Adicione um texto com o código RGB a ser adivinhado.
  - Será verificado se o seu <code>id</code> deve ser <code>rgb-color</code>;
  - Será verificado se o texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: <code>(168, 34, 1)</code>.

- [x] 3 - Adicione a página opções de cores para serem adivinhadas.
  - Será verificado que deve conter 6 circulos como opção de cor de adivinhação;
  - Será verificado que a <code>class</code> de todos os circulos deve ser <code>ball</code>.

- [x] 4 - Adicione cores nas bolas elas devem ser geradas dinâmicamente.
  - Será verificado que ao carregar a página, as cores de cada um dos 6 circulos coloridos deve ser geradas via JavaScript.

- [x] 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto.
  - Será verificado que o seu <code>id</code> do elemento deve ser <code>answer</code>;
  - Será verificado que quando o jogo é iniciado, o texto exibido deve ser <code>"Escolha uma cor"</code>;
  - Será verificado se o circulo colorido for o **correto**, deve ser exibido o texto <code>"Acertou!"</code>;
  - Será verificado se o circulo colorido for o **incorreta**, deve ser exibido o texto <code>"Errou! Tente novamente!"</code>.

- [x] 6 - Crie um botão para iniciar/reiniciar o jogo.
  - Será verificado que o botão deve ter o `id` `reset-game`;
  - Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento `rgb-color` deve ser atualizado;
  - Será verificado que ao clicar no botão, o elemento `answer` deve voltar ao estado inicial, exibindo o texto `"Escolha uma cor"`.
### BÔNUS

- [x] 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo.
  - Será verificado que o elemento deve ter o `id` `score`;
  - Será verificado que o valor inicial dele deve ser 0;
  - Será verificado que a cada acerto, é incrementado 3 pontos ao placar;
  - Será verificado que ao clicar no botão reiniciar, o placar **NÃO** deve ser resetado.

### RECURSOS ADICIONAIS DESENVOLVIDOS POR MIM
- [x] 8 - Adicione um novo botão para dificultar o Jogo.
  - O Botão deve se chamar HARD MODE e ficar ao lado do Botão de Resetar.
  - O elemento deve possuir o <code>id</code> denominada <code>hard-mode</code>
  - Ao clicar nesse botão, deverá adicionar 6 novas cores ao jogo resetando o jogo anterior e mantendo os pontos.
  - A cada acerto nessa dificuldade, deverá ser somado 6 pontos.

- [x] 9 - Faça que o botão HARD MODE tenha um status de ON e OFF.
  - O elemento deve possuir o <code>id</code> denominada <code>hard-status</code>
  - Ao clicar no botão, o status deve mudar para ON e aumentar a dificuldade, ao ser clicado de novo, voltar para a dificuldade normal.

- [x] 10 - Adicione efeitos de transições nas bolas.
  - Ao gerar novas cores, selecionar ou mudar a dificuldade, as bolas devem ter um efeito de transição.

- [x] 11 - Adicione efeitos de transições no status do HARD MODE e na pontuação.
  - Ao clicar no botão HARD MODE, o status ON e OFF terá um efeito de sombra vermelho para OFF e green para ON.
  - Quando a pontuação estiver positiva, terá um efeito de sombra verde.
  - Qando estiver negativa vermelha.
  - Quando voltar para 0 deverá possuir a sombra padrão.

- [x] 12 - Faça com que o aplicativo seja responsivo.
</details>

---

<div align="left">
  <a href="https://github.com/marlondlacerda/trybe-projetos">Voltar para o repositório principal</a>
</div>
<div align="center">

  [⬆ Voltar para o topo](#boas-vindas-ao-repositório-do-projeto-adivinhação-de-cor)

</div>