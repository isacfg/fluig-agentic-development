# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Reajuste Preço

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29002054277143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Reajuste-Pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29002054277143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Reajuste-Pre%C3%A7o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 17:59

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29002068988311)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como cancelar o reajuste de preço no Contrato 2.0?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.


**Solução**

Para a execução do processo selecione o Contrato > Ações Relacionadas > Cancelar Reajuste Preço:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/29002054251031)


Esse processo possibilita o cancelamento do último reajuste de preço realizado nos contratos selecionados.

**Regras**

-   As parcelas **faturadas** ou **medidas** serão **desconsideradas**, ou seja, só será **possível** cancelar o reajuste de parcelas que ainda **não foram faturadas ou medidas**.
-   Caso o status da parcela seja **Previsionado** os valores da previsão serão ajustados.
    Ao executá-lo serão atualizados os valores das parcelas, dos itens e dos contratos selecionados.
-   O registro do reajuste cancelado é removido do **histórico de reajuste** ao executar o processo.

**Permissões**

O processo de **Desfazer Reajuste de Preços** conta com recurso de segurança e seu acesso precisa ser liberado através de permissão no perfil associado ao usuário.

Acesse o módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Perfil > Acesso a Menus > Contratos > Gestão de Contratos > Atribuir permissão a Desfazer Reajuste de Preços.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887920413591)

**Importante**

Toda execução de processo registra no histórico de processos sua execução e parâmetros escolhidos.

**Saiba mais:**

**[02\. Contratos 2.0 | Processos | Reajuste Preço](https://tdn.totvs.com/pages/viewpage.action?pageId=937710134#ReajustarContratos-1326467865)**
