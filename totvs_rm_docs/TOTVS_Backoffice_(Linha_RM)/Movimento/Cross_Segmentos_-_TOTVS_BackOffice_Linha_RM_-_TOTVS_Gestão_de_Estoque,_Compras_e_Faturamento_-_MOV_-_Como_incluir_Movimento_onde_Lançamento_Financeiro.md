# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como incluir Movimento onde Lançamento Financeiro seja gerado com status Baixado?

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035946194-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-Movimento-onde-Lan%C3%A7amento-Financeiro-seja-gerado-com-status-Baixado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035946194-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-Movimento-onde-Lan%C3%A7amento-Financeiro-seja-gerado-com-status-Baixado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida**Como incluir Movimento onde Lançamento Financeiro seja gerado com status Baixado?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Para solucionar essa dúvida, realize os seguintes passos:
1\. Acessar **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Localizar o Tipo de Movimento | Etapa Fin - Faturamento 2/6**.

2\. Marque a flag **Baixa lançamento vencimento emissão;**

3\. Ao incluir o movimento a condição de pagamento deverá estar configurada para ser **A vista.
****ATENÇÃO:** Não é possível gerar lançamento baixado caso a condição de pagamento não seja A vista pois somente assim a data de vencimento será igual a data de emissão.

**Informações adicionais:** Caso não consiga localizar o tipo de movimento [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento).
