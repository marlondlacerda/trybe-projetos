# Boas vindas ao repositório do projeto Meme Generator!

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
  <a href="https://marlondlacerda-meme-generator.vercel.app/">Clique aqui</a> para ter acesso a um preview do App.
</div>

---

<div align="center">
  <img src="./images/pixelart.png">
</div>

## HABILIDADES
- Manipular o DOM
- Manipular Javascript
- Manipular o CSS.


## O que foi desenvolvido
- Uma aplicação usando <code>HTML</code>, <code>CSS</code> e <code>JavaScript</code> onde seja possivel fazer upload de imagens.
---

# Instruções para instalar e rodar os testes de cada requisito
1. Clone o repositório
  * `git clone git@github.com:marlondlacerda/trybe-projetos.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybe-projetos/fundamentals/bloco_5/extras/meme-generator`

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

- [x] 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
  - A caixa onde o texto é inserido deve ter um <code>id</code> denominado <code>text-input</code>;

  - Você deve criar um elemento para servir de "container" para a imagem e para o texto do meme. Este elemento deve ter um <code>id</code> denominado <code>meme-image-container</code>;

  - Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o <code>id</code> denominado <code>meme-text</code>;

  - Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

- [x] 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
  - Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um <code>id</code> denominado <code>meme-image</code>;

  - O elemento onde é feito o upload da imagem deve ser identificado com o <code>id</code> denominado <code>meme-insert</code>. Este elemento não precisa estar dentro do elemento de container;

  - A imagem deve estar totalmente contida dentro do elemento identificado como <code>meme-image-container</code> ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~;

  - O texto inserido no elemento <code>text-input</code> deve ser inserido sobre a imagem escolhida <code>meme-image</code>.

- [x] 3 - Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.
  - O elemento que serve de container para a imagem deve ter o a cor de fundo branca;

  - O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;

  - A imagem deve estar totalmente contida dentro do elemento identificado como <code>meme-image-container</code> ~~("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container)~~.

- [x] 4 - Adicione o texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.
  - O texto do elemento <code>meme-text</code> deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;

  - O texto do elemento <code>meme-text</code> deve ter a fonte com o tamanho de 30 pixels;

  - O texto do elemento <code>meme-text</code> deve estar na cor branca.

- [x] 5 - Limite o tamanho do texto que o usuário pode inserir.
  - A quantidade máxima de caracteres digitáveis no elemento <code>text-input</code> deve ser 60.

### BÔNUS
- [x] 6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.

  ✦ As bordas devem ser acrescentadas ao container, identificado como <code>meme-image-container</code>;

  ✦ Os três botões devem ser elementos do tipo <code>button</code>;

  ✦ Cada elemento <code>button</code> deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;

  ✦ Cada <code>button</code> deve ter o respectivo <code>id</code> e estilizar o container conforme especificado:

  - Um botão identificado com o <code>id</code> chamado <code>fire</code> deve estilizar o container da imagem com uma borda de 3 pixels, dashed e vermelha.

  - Um botão com <code>id</code> chamado <code>water</code> deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo double .

  - Um botão com <code>id</code> chamado <code>earth</code> deve estilizar o container da imagem com uma borda do tipo groove, verde e com 6 pixels.

  ✦ Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer;


- [x] 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
  - O elemento que mostra as miniaturas dos memes deve ser identificado um um <code>id</code> denominado <code>meme-1</code> para o primeiro meme, <code>meme-2</code> para o segundo, <code>meme-3</code> para o terceiro e <code>meme-4</code> para o quarto.

  - As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado imgs com os respectivos nomes <code>meme1.png</code>, <code>meme2.png</code>, <code>meme3.png</code> e <code>meme4.png</code>. Atenção também para o formato das imagens! ⚠️

  - As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.

### RECURSOS ADICIONAIS DESENVOLVIDOS POR MIM
- [x] 8 - Adicione um novo botão de borda que volte para o padrão.
  - A cor de fundo deve ser a padrão.
  - O elemento deve possuir a <code>classe</code> denominada <code>eraser</code>
  - O <code>id</code> deve ser chamado <code>default</code> deve estilizar o container da imagem com uma borda preta, com 1 pixels do tipo solid.

- [x] 9 - Crie três inputs do tipo radio para que possa mudar o texto de lugar.
  - Os inputs devem ser chamados de começo, meio e fim. O botão começo deve ser selecionado por padrão
  - Ao clicar em qualquer um desses botões, o texto muda de lugar

- [x] 10 - Adicione um botão com a funcionalidade de salvar o meme em imagem.
  - O button com a <code>class</code> chamada <code>save</code> possui a lógica de poder conseguir fazer com o que meme criado seja salvo na máquina do usuário.

- [x] 11 - Faça com que o aplicativo seja responsivo.
</details>

---
## SCRIPTS INSTALADOS

  <h3><a href="https://html2canvas.hertzen.com/">html2canvas</a></h3>
  <span>O script permite que você faça "capturas de tela" de páginas da web ou partes delas, diretamente no navegador do usuário. A captura de tela é baseada no DOM e, como tal, pode não ser 100% precisa em relação à representação real, pois não faz uma captura de tela real, mas a constrói com base nas informações disponíveis na página.
</span>
 
---
<div align="left">
  <a href="https://github.com/marlondlacerda/trybe-projetos">Voltar para o repositório principal</a>
</div>
<div align="center">

  [⬆ Voltar para o topo](#boas-vindas-ao-repositório-do-projeto-meme-generator)

</div>
