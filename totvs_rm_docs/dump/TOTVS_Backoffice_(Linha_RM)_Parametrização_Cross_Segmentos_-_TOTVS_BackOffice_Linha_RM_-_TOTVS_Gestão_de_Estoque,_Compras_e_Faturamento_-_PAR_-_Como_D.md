# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como descobrir a classificação e menu do Tipo de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 24 de abril de 2025 às 10:13

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30602341702551)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida
**Como descobrir qual a classificação e em qual menu o Tipo de Movimento está listado?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para identificar a classificação do Tipo de Movimento e em qual Menu o mesmo estará listado será necessário acessar o menu **Gestão > Visão de Dados > Incluir** e crie a seguinte consulta de exemplo:

**SELECT CLASSIFICACAO, \* FROM TTMV WHERE CODTMV = 'X' AND CODCOLIGADA = 'Y'**

Onde:

**X = Código do Tipo de Movimento**

**Y = Código da Coligada**

Abaixo exemplo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/30602341704599)

O retorno da consulta será demonstrando em qual classificação o movimento está localizado:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/30602341705751)

**OBS:** Se não retornar nenhum movimento na consulta, possivelmente não possui o movimento na coligada filtrada.

A informação importante deste retorno é a coluna **CLASSIFICACAO**. Esta coluna guarda a classificação e menu que o movimento está nos parâmetros.

De posse desse valor, será necessário acessar o **Menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento**. Será nesta tela que iremos traduzir os valores retornados pela coluna CLASSIFICACAO e descobriremos o significado da numeração e a disposição nos menus.

Veja o exemplo:
**Retorno da consulta SQL: 04.06.01**
Note que o resultado da consulta SQL está presente no nome da classificação do Menu:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/30602341706135)

Desta forma, identificamos no exemplo que nosso Tipo de Movimento tem a classificação de Solicitação de Compras e estará também no Menu de Solicitação de Compras em Gestão Compras.

**Importante
**

Se ao acessar o menu de Recebimento de Materiais o movimento não estiver sendo listado, possivelmente o usuário corrente não tem permissão neste. 

Para conceder permissão ao usuário no Tipo de Movimento, [clique aqui.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-RM-MOV-Como-atribuir-permiss%C3%A3o-ao-usu%C3%A1rio-em-Tipo-de-Movimento?source=search)

**Segue abaixo vídeo para auxílio na execução do processo.**

[🎥 Vídeo](https://centraldeatendimento.totvs.com//www.youtube-nocookie.com/embed/GKKIvjmfmI0)

Com o objetivo de aprimorar cada vez mais nossa **comunicação** com os nossos clientes, estamos promovendo nossas comunidades no **WhatsApp**. Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… **tudo na palma da sua mão!**
Acesse via QR Code:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31633480056215)
