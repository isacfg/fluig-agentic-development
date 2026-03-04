# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Erro Portal do Fornecedor: Usuário e Senha inválidos!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8736774773015-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Erro-Portal-do-Fornecedor-Usu%C3%A1rio-e-Senha-inv%C3%A1lidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8736774773015-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Erro-Portal-do-Fornecedor-Usu%C3%A1rio-e-Senha-inv%C3%A1lidos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:32

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:01:00min**

**Ocorrência
**Ao tentar logar no Portal com o usuário e senha recebido por e-mail pelo fornecedor apresenta o erro abaixo:

![Imagem](https://tdn.totvs.com/download/attachments/700486136/image2022-7-25_20-34-37.png?version=1&modificationDate=1658792077583&api=v2)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa 1
****Ausência** do usuário **PORTALDOFORNECEDOR** no cadastro de usuário.

**Solução 1
**Realizar uma nova comunicação ao fornecedor, exportando para web, para que o usuário seja criado.
Mais informações: [01\. Portal do Fornecedor | Pré-requisitos](https://tdn.totvs.com/pages/releaseview.action?pageId=639955763#id-01.PortaldoFornecedor|Pr%C3%A9requisitos-Usuario_e_autenticacao)

**Causa 2
**Uso parametrização de **Logon Unificado**

**Solução 2
**Acessar o cadastro do usuário **PORTALDOFORNECEDOR** e na pasta rede informar um usuário de rede válido.
Mais informações: [01\. Portal do Fornecedor | Pré-requisitos](https://tdn.totvs.com/pages/releaseview.action?pageId=639955763#id-01.PortaldoFornecedor|Pr%C3%A9requisitos-Usuario_e_autenticacao)
