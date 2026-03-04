# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - IMPXML - XML status Pendente

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-IMPXML-XML-status-Pendente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-IMPXML-XML-status-Pendente)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 16 de outubro de 2024 às 17:12

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16234049573783)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida**Ao acessar tela de **Importação de arquivo XML - Cadastro de XML** o registro é exibido com status igual a **Pendente**.

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Solução**Um XML somente será registrado no sistema com status Pendente caso este tenha sido cadastrado manualmente através do botão Incluir da tela de Importação de arquivo XML - Cadastro de XML.

![screenshot_20190820_101537.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044131074)

Esta não é uma prática recomendada uma vez que a versão 2.0 do processo de **Importação de Arquivo XML** não possui comunicação com o TSS e assim o XML não poderá ter seu status alterado para Validado (que é o status necessário para permitir incluir um movimento a partir dele).

A validação de um XML deve ser feita após a execução do processo de **Monitor de Arquivos - Importação de Arquivo XML**, ao executar o processo de **Serviço de Consulta de arquivo XML**, assim o XML será inserido na tela de cadastro de XML com o status igual a **Validado** caso nenhuma pendência seja identificada em seu cadastro.

Para ter o XML com o status igual a Validado exclua-o da tela de cadastro de XML, inclua o arquivo XML em sua pasta IN e execute o processo de Importação de Arquivo XML existente na tela de Monitor de arquivos.

Lembre-se o arquivo precisa seguir uma nomenclatura pré-definida pelo sistema, para saber qual é esta nomenclatura [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-RM-MAT-Como-solucionar-o-erro-N%C3%A3o-existem-arquivos-a-serem-importados-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID?source=search).
