# Resgatar última atualização de dataset de forma nativa

> **Fonte:** [https://fluiggers.com.br/t/resgatar-ultima-atualizacao-de-dataset-de-forma-nativa/2944](https://fluiggers.com.br/t/resgatar-ultima-atualizacao-de-dataset-de-forma-nativa/2944)
> **Categoria:** Sem categoria
> **Criado em:** 28/08/2024, 09:42
> **Visualizações:** 56 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 28/08/2024, 09:42

Olá pessoal, existe alguma forma de resgatar a última vez (data) de alteração de um dataset? tenho um dataset que fica na intranet da empresa que é representada via gráfico e preciso colocar um campo nele. Gostaria de saber se existe alguma forma de buscar pelo fluig a ultima data que aquele dataset foi atualizado… Quando consulto pelo Eclipse ele não me retorna isso. O formulário foi feito via GED.

---

## Resposta #1

**Pablo Valle** (@pablooav) — 28/08/2024, 09:47

Caso for um dataset customizado, você consegue sim acessando o Painel de Controle → Datasets e clicando no “Mais ações” você consegue ver o histórico de versões que informa o usuários, data e consegue até restaurar alguma versão.

![image](https://fluiggers.com.br/uploads/default/original/2X/6/68335a854f0578ec8faf686a181d9511fb594d25.png)

---

## Resposta #2

**Pablo Valle** (@pablooav) — 28/08/2024, 09:51

Caso for um dataset interno de algum processo, você consegue ver acessando diretamente do GED. Acessando a pasta de seu formulário e vendo as propriedades do mesmo você consegue ir na aba “Informações Gerais” e consegue ver todas versões que foram criadas junto com o usuário e a data também da mesma forma.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/bbef043ef16b5309faf3e61d06b39e6d6291684e_2_690x350.png)

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/c45b6d19d7e38c2c260de63f1d4a369f248381dc_2_690x225.png)

---

## Resposta #3

**Gabriel Borchardt** (@Gabriel_Borchardt) — 28/08/2024, 09:55

Obrigado pela resposta! Mas acredito que formulei a pergunte de forma errada. Quis dizer para pegar a data de ultima atualização de REGISTROS, no eclipse eu consigo isso aqui:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/9f77a6b71aa505ac57c9ab6948d302598601ba93_2_690x175.png)

porém não tem uma informação tipo created\_at ou update\_at igual no SQL por exemplo… Minha dúvida é se tem alguma forma nativa de resgatar isso ou eu apelo pra criar um input hidden com essa informação na hora que o usuário registrar.

A ideia é que eu exiba no chart uma informação tipo: Atualizado pela última vez em Data/Hora.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Pablo Valle** (@pablooav) — 28/08/2024, 10:19

Existe no fluig a tabela HISTOR\_PROCES que guarda informações como a data e hora que foi realizado as movimentações dentro de uma solicitação, você pode utiliza-la pra pegar esse tipo de informação. Caso queria fazer sua consulta via banco basta fazer um JOIN com ela e pegar essa informação

![image](https://fluiggers.com.br/uploads/default/optimized/2X/7/7abf8380c88bd5100356144e960511401705278e_2_689x224.png)

Neste meu exemplo, essa solicitação minha houveram 22 movimentações como um todo, vc consegue filtrar ali pra pegar a ultima movimentação através da coluna LOG\_ATIV = ‘true’

Caso queira via dataset você pode chamar o dataset interno processHistory que te retorna essas mesmas informações como por exemplo:

```javascript
var c1 = DatasetFactory.createConstraint('processInstanceId', '1060429', '1060429', ConstraintType.MUST)
DatasetFactory.getDataset('processHistory', null, [c1], null)
```

Que retorna:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/0/0fcd77e5e99741d4627ab756981b193a659aa99f_2_679x500.png)

---

## Resposta #5

**Gabriel Borchardt** (@Gabriel_Borchardt) — 28/08/2024, 10:19

Obrigado amigo! Vai salvar aqui!

---
