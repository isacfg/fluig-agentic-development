# Subindo versão do formulario, mas a tabela não está sendo atualizada

> **Fonte:** [https://fluiggers.com.br/t/subindo-versao-do-formulario-mas-a-tabela-nao-esta-sendo-atualizada/3003](https://fluiggers.com.br/t/subindo-versao-do-formulario-mas-a-tabela-nao-esta-sendo-atualizada/3003)
> **Categoria:** Formulários
> **Tags:** `processo`, `dataset`
> **Criado em:** 02/10/2024, 16:16
> **Visualizações:** 97 | **Likes:** 0 | **Respostas:** 7

---

## Pergunta original

**João vitor** (@joao.dourado) — 02/10/2024, 16:16

Boa tarde !!

Estou subindo um formulário com campos novos, porém não está sendo criado a coluna no banco de dados. Com isso, quando utilizamos o processo, ele não consegue imputar o valor no banco e retorna o campo vazio.

Alguém já passou por algo parecido?

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 02/10/2024, 16:30

Olá!

Verifica se os campos de seu formulário possuem o atributo “name”

---

## Resposta #2

**João vitor** (@joao.dourado) — 02/10/2024, 16:32

Tem sim, segue a div:

![image](https://fluiggers.com.br/uploads/default/original/2X/c/ce5540e85e0bbb9b4012fba993e4ba2563ea9c70.png)

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 02/10/2024, 16:40

pode ser tambem que o processo no fluig relacionado ao formulario nao esteja com a versão liberada no fluig.

Via Eclipse:
![image](https://fluiggers.com.br/uploads/default/original/2X/d/d56d9159bb6400684f3cceb51b374f0925faf161.png)

Via Fluig:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/0/0922218e4c7c508805a3ea74dab43fb0d35462c0_2_690x367.png)

---

## Resposta #4

**venturelli** (@venturelli) — 02/10/2024, 16:42

O campo foi declarado dentro da tag form?

---

## Resposta #5

**João vitor** (@joao.dourado) — 02/10/2024, 16:55

Sim, está dentro do form.

![image](https://fluiggers.com.br/uploads/default/original/2X/3/3df9fe39042895c380cef8bd0cd6e47ba60a4d82.png)

---

## Resposta #6

**João vitor** (@joao.dourado) — 02/10/2024, 16:57

Importei o diagrama, e exportei liberando a versão, mas sem sucesso. a tabela do banco de dados não atualizou.

---

## Resposta #7

**Igor Rodrigues** (@fluigor.com.br) — 07/10/2024, 13:53

Qual é seu banco de dados [@joao.dourado](/u/joao.dourado)

---

## Resposta #8

**João vitor** (@joao.dourado) — 07/10/2024, 16:30

Meu banco de dados é o SQL ORACLE

---

## Resposta #9

**Igor Rodrigues** (@fluigor.com.br) — 07/10/2024, 17:32

Provavelmente, tu tem um erro de estrutura no seu banco de dados,
Verifique se durante a exportação algum erro de ORA- é apresentado no log do Fluig.
E repasse ao seu DBA ORACLE.

Abrass

---

## Resposta #10

**venturelli** (@venturelli) — 07/10/2024, 22:17

Não importa muito se tem ou não processo, ou mesmo o banco de dados.

Vamos voltar um pouco nesse caso pro básico: Conferiu a tabela pra ver se o campo realmente não foi criado? Precisamos saber se tá com problema em criar o campo ou em persistir os dados. Vou separar em dois tópicos de soluções e verificações:

> Caso o problema seja em criar o campo

**Como você está fazendo a edição e exportando para o servidor?**
Prática comum é fazer alterações diretamente no volume mas eles não alteram a estrutura de tabelas. Precisa usar a exportação via eclipse para garantir.

Não exporte pelo diagrama pois você pode se confundir. Por exemplo, no print de exemplo o formulário não está sendo exportado.

**Você está no ambiente que está sendo exportado?**
Não é raro a gente se confundir com isso. Recomendo criar um label em tela e exportar e depois abrir na web e confirmar que o label novo está aparecendo.

**Log de erros**
Não é exibido nada? Se não criou o campo, deve ter algum erro em log.

**Manter versão**
Um teste que pode ser feito é tentar criar um outro campo extra e tentar exportar para o servidor Fluig com a opção de **Manter versão**. O Fluig deve bloquear essa ação já que é obrigatório criar uma nova versão nestes casos.

**Mudar o nome do campo**
O Fluig não remove campos da tabela. Então se esse nome de campo já foi utilizado anteriormente, ele não vai criar um novo campo. Deveria gravar no antigo, mas pode estar ocorrendo outros erros.

> Caso o problema seja na persistência

Se o campo está criado na tabela de dados, podemos dividir em 3 partes:

-   O campo não é enviado
-   O campo é enviado mas não persistido
-   O campo é persistido mas não retornado

Esqueça o processo, via documentos, acesse o formulário, abra a aba de network e crie um registro.

**O campo não é enviado**
Confira no payload do salvar se o seu campo é enviado. Se o campo estiver lá mas estiver vazio ou com valor diferente, confira se você não tem mais um campo com o mesmo nome e/ou id.

**O campo é enviado mas não persistido**
Se o valor aparece no payload, mas ao consultar na tabela está vazio, confira se tem algum evento de formulário limpando esse campo.

**O campo é persistido mas não retornado**
Se o campo aparece no payload e é gravado na base, verifique os eventos se não tem algo que mexa nesse campo. Confira ao acessar o html (na aba de network) se o valor está lá e se não tem alguma estrutura limpando ele. Aqui vale a mesma dica de procurar outro campo com mesmo nome ou id.

E pra esses problemas, também vale a dica de alterar o nome e id do campo e exportar novamente. Os problemas de evento e colisão serão mais facilmente detectados.

---
