# Boas vindas ao repositório do Projeto ES6 e Higher Order Functions!

<div align="center">
  <img height="150px" align="right" src="https://theme.zdassets.com/theme_assets/9633455/9814df697eaf49815d7df109110815ff887b3457.png" />
  <div align="left" style="display: inline_block">
    <h2>Módulo: Fundamentos do Desenvolvimento Web</h2>
    <span>
      Este Repositório possuí projeto desenvolvido no período que estive na Trybe, abordando sobre conceitos de criação de várias funções para atender aos requisitos propostos e garantir que todas as funções passem nos testes unitários.
    </span><br>
      <b>Leia o guia de como instalar o repositório na máquina para verificar e testar as funções!</b>
  </div>
  <br>
</div>
<br>

---

# Habilidades
- Produzir código legível, conciso e expressivo utilizando as novas funcionalidades do ES6
- Utilizar as Higher Order Functions para manipular e criar arrays
- Escolher a Higher Order Function mais adequada para a obtenção de um resultado esperado
- Aprender a usar de forma conjunta as Higher Order Functions
- Interpretar testes unitários e produzir soluções que atendam a eles

## O que foi desenvolvido
- Foi implementado várias funções para atender aos requisitos propostos e garantir que todas as funções passem nos testes unitários.
---

# Instruções para instalar e rodar os testes de cada função
1. Clone o repositório
  * `git clone git@github.com:marlondlacerda/trybe-projetos.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybe-projetos/fundamentals/bloco_8/zoo-functions`

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

### 1. IMPLEMENTE A FUNÇÃO getSpeciesByIds

  Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

  **Observações técnicas**

  - O parâmetro desta função pode ser alterado para atender ao requisito proposto

  **O que será avaliado**

  - Caso receba nenhum parâmetro, necessário retornar um array vazio
  - Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
  - Ao receber mais de um id, retorna um array com as espécies referentes aos ids

### 2. IMPLEMENTE A FUNÇÃO getAnimalsOlderThan

  Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada

  **Observações técnicas**

  - Deve retornar um valor booleano

  **O que será avaliado**

  - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
 espécie possuem a idade mínima especificada

### 3. IMPLEMENTE A FUNÇÃO getEmployeeByName

   Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

  **O que será avaliado**

  - Sem parâmetros, retorna um objeto vazio
  - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  - Quando provido o último nome do funcionário, retorna o objeto do funcionário

### 4. IMPLEMENTE A FUNÇÃO createEmployee

  A função, a partir de informações recebidas nos parâmetros, é capaz de criar um objeto equivalente ao de uma pessoa colaboradora, retornando-o

  **Observações técnicas**

  - O parâmetro `personalInfo` recebe um objeto que contém o `id`, o `firstName` e o `lastName`
  - O parâmetro `associatedWith` recebe um objeto que contém dois array: `managers` e `responsibleFor`

  **O que será avaliado**

  - Cria um novo colaborador a partir de objetos contendo `informações pessoais` e `gerentes e animais gerenciados`.

### 5. IMPLEMENTE A FUNÇÃO isManager

  Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.

  **Observações técnicas**

  - Deve retornar um valor booleano

  **O que será avaliado**

  - Testa se o id passado é de um gerente

### 6. IMPLEMENTE A FUNÇÃO addEmployee

  A função irá adicionar uma nova pessoa colaboradora ao array `employees`, presente no arquivo `data.js`.

  **O que será avaliado**

  - Adiciona um funcionário no fim da lista

### 7. IMPLEMENTE A FUNÇÃO countAnimals

  Esta função é responsável por contabilizar a quantidade de animais.

  **Observações técnicas**

  - Sem parâmetros, retorna um objeto
  - Com o nome de uma espécie de animal, retorna um número

  **O que será avaliado**

  - Sem parâmetros, retorna animais e suas quantidades
  - Com o nome de uma espécie de animal, retorna somente a quantidade

### 8. IMPLEMENTE A FUNÇÃO calculateEntry

  A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado

  **Observações técnicas**

  - O parâmetro `entrants` recebe um objeto que contém as chaves `Adult`, `Child` e `Senior`, com suas respectivas quantidades de pessoas

  **O que será avaliado**

  - Retorna 0 se nenhum argumento for passado
  - Retorna 0 se um objeto vazio for passado
  - Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

### 9. IMPLEMENTE A FUNÇÃO getAnimalMap

  A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero, por exemplo

  **Observações técnicas**

  - Analise o teste unitário para entender os retornos que são esperados para esta função

  **O que será avaliado**

  - Sem parâmetros, retorna animais categorizados por localização
  - Com a opção `includeNames: true` especificada, retorna nomes de animais
  - Com a opção `sorted: true` especificada, retorna nomes de animais ordenados
  - Com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea
  - Com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados
  - Só retorna informações ordenadas e com sexo se a opção `includeNames: true` for especificada

### 10. IMPLEMENTE A FUNÇÃO getSchedule

  A função é responsável por disponibilizar as informações de horário para uma consulta, que pode querer ter acesso a todo o cronograma da semana ou apenas o cronograma de um dia específico

  **Observações técnicas**

  - Analise o teste unitário para entender os retornos que são esperados para esta função

  **O que será avaliado**

  - Sem parâmetros, retorna um cronograma legível para humanos
  - Se um único dia for passado, retorna somente este dia em um formato legível para humanos

### 11. IMPLEMENTE A FUNÇÃO getOldestFromFirstSpecies

  A função busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora do parâmetro

  **O que será avaliado**

  - Passado o id de um funcionário, encontra a primeira espécie de animal
  gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do
  animal mais velho dessa espécie

### 12. IMPLEMENTE A FUNÇÃO increasePrices

  A função é responsável por aumentar o preço das visitas, com base no valor de aumento recebido no parâmetro, em porcentagem

  **Observações técnicas**

  - Se o parâmetro da função recebe o valor 20, o aumento é de 20%
  - Altera o objeto `prices` do arquivo `data.js`

  **O que será avaliado**

  - Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

### 13. IMPLEMENTE A FUNÇÃO getEmployeeCoverage

  A função é responsável por consultar as espécies pela qual a pessoa colaborada, recebida no parâmetro através de seu `id`, `firstName` ou `lastName`, é responsável

  **Observações técnicas**

  - Analise o teste unitário para entender os retornos que são esperados para esta função

  **O que será avaliado**

  - Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  - Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável

</details>

---

<div align="left">
  <a href="https://github.com/marlondlacerda/trybe-projetos">Voltar para o repositório principal</a>
</div>
<div align="center">

[⬆ Voltar para o topo](#boas-vindas-ao-repositório-do-projeto-es6-e-higher-order-functions)

</div>
