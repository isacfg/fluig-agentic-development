# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Item não relacionado a uma origem

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036440113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Item-n%C3%A3o-relacionado-a-uma-origem](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036440113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Item-n%C3%A3o-relacionado-a-uma-origem)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:40

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**No módulo de Gestão de Estoque, Compras e Faturamento, ao incluir um novo movimento é exibida a mensagem de erro abaixo:

![screenshot_20190926_084738.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047839573/screenshot_20190926_084738.png)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**O erro ocorre pois na etapa **Mov - Outros Dados** a flag **Usar Cópia de movimento por Referência** esta marcada e o **Motivo de Referência** utilizado não permite a inclusão de novos itens. Sendo obrigatório a inclusão via cópia por referência

**Solução**Para solucionar essa ocorrência desmarque o parâmetro de cópia por referência ou utilize outro tipo de movimento que não possua tal parametrização ou utilize um motivo de referência que permita a inclusão de novos itens.
