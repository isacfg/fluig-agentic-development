# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação de Cadastro com Campos Complementares via Conceito

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686608-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-de-Cadastro-com-Campos-Complementares-via-Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686608-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-de-Cadastro-com-Campos-Complementares-via-Conceito)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de julho de 2025 às 16:42

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/33490214956183)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Este documento tem por finalidade ensinar os usuários a importar os campos complementares existentes na base de dados. 

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.4.

**Solução
**Como exemplo, utilizaremos os campos complementares de movimento.

No gerador de saídas você precisa acessar o layout (1), e dar um duplo clique na linha de campos complementares
do movimento (2) ou do item (3)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33490172773015)

É necessário incluir todos os campos complementares conforme retorno da consulta enviada.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33490214965527)

Ao incluir o campo, definir Nome, Descrição e Tamanho, o campo de Posição já será calculado automaticamente.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33490172780439)

Agora é hora de realizar o vínculo da linha com o registro no banco de dados.
Com a tela do layout aberta do lado direito (1), selecionar a aba de contexto (2), localize a tabela TMOV (3), e abra a
lista de campo (4)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33490172782359)

Na lista de campo, localize o nome do campo complementar relacionar a linha, clique sobre ele (1) e arraste sobre a
linha (2) para realizar o vínculo. Observe que depois disso, a coluna Ligação (3) é alterada de (nenhuma) para
(Registro).

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33490172783767)

Para saber sobre o Layout dos Campos Complementares, clique no anexo abaixo:
