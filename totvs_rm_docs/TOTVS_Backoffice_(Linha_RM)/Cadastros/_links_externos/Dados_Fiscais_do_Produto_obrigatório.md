# PRD0001_Tornar_Anexo_Dados_Fiscais_do_Produto_Obrigatorio

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/PRD0001_Tornar_Anexo_Dados_Fiscais_do_Produto_Obrigatorio](https://tdn.totvs.com/display/public/LRM/PRD0001_Tornar_Anexo_Dados_Fiscais_do_Produto_Obrigatorio)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

12.1.10 ou posteriores

**Ocorrência:**

Tornar o anexo Dados Fiscais do Produto Obrigatório

**Ambiente:**

Cadastro de Produto

**Passo a passo:**

# Objetivo

Este documento tem por finalidade tornar o anexo de dados fiscais do produto obrigatório. Assim, na inserção ou na edição de um produto, o sistema consistirá o preenchimento do cadastro.

# Passo a Passo

1º - Deverá acessar a tela de Dados Fiscais do Produto e marcar como obrigatório os campos aos quais deseja torná-los obrigatórios:

*Clicar sobre o campo com o botão direito do mouse e marcar a opção **Preenchimento obrigatório***

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2013%3A53%3A22.png?version=1&modificationDate=1466700149000&api=v2)

2º - Após tornar os campos obrigatórios deverá cadastrar o **Anexo de uma Action** desejada para que a mesma fique disponível em Preferências de Anexos, onde iremos determinar se a mesma será obrigatória. Para isso deverá acessar o módulo de Serviços Globais e ir no menu Serviços – Opção **Actions Anexas**

Solicitar um novo registro

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2014%3A0%3A40.png?version=1&modificationDate=1466700150000&api=v2)

O cadastro deverá respeitar as informações abaixo:

Action Principal: **EstPrdAction**

Action Anexo: **FisPrdDadosFiscaisAction**

Nome do Grupo: **Dados Fiscais do Produto**

**IMPORTANTE**: Se a action desejada não apresentar na lista, deverá rodar o processo de Atualização de Actions Cadastradas conforme documento abaixo:

**[Atualização de Actions Cadastradas](/pages/viewpage.action?pageId=128681854)**

3º - Após o cadastro de Actions Anexas, deverá no mesmo módulo acessar o menu **Preferências de Anexos,** para tornar o Anexo Dados Fiscais do Produto obrigatório.

Ao clicar no menu, será aberta a seguinte tela:

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2014%3A9%3A16.png?version=1&modificationDate=1466700158000&api=v2)
**

Dentro deste cadastro, na aba Permissões Gerais (Perfil ou usuário), será necessário incluir uma nova preferência:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2014%3A15%3A43.png?version=1&modificationDate=1466700151000&api=v2)

O cadastro deverá respeitar as informações abaixo:

Id: **É o cadastro realizado no passo 2 (EstPrdAction/FisPrdDadosFiscaisAction)**

Campos Mestre: **\[CODCOLIGADA\];\[IDPRD\]**

Campos Detalhe: **codColigada;IdPrd**

Marcar a Flag **Obrigatório**

Ativo ****Sim****

Obs.: Após realizar a configuração deverá ser feito o logout e login novamente

# Descrição do Processo



Para realizar a validação do passo a passo, deverá criar um novo produto sem informar os dados fiscais. Ao salvar, o sistema deve obrigatoriamente apresentar a mensagem abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2014%3A28%3A44.png?version=1&modificationDate=1466700153000&api=v2)



Para poder preencher as informações deste cadastro, o sistema irá criar uma nova aba dentro do produto. Esta aba chama-se **INFORMAÇÕES ADICIONAIS**

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2014%3A35%3A31.png?version=1&modificationDate=1466700154000&api=v2)



Podemos notar que foi criado o link Dados Fiscais do Produto, e ao clicar sobre o mesmo é aberto o anexo conforme abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/240306407/image2016-6-23%2014%3A37%3A46.png?version=1&modificationDate=1466700156000&api=v2)



Desta forma, enquanto o usuário não informar valor para o campo **Situação da Mercadoria** o produto não poderá ser salvo.





**Observações:**

Para mais informações:



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)

**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
