# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Não é possível inserir uma cotação com mais de 0 fornecedores

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022143112-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-N%C3%A3o-%C3%A9-poss%C3%ADvel-inserir-uma-cota%C3%A7%C3%A3o-com-mais-de-0-fornecedores](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022143112-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-N%C3%A3o-%C3%A9-poss%C3%ADvel-inserir-uma-cota%C3%A7%C3%A3o-com-mais-de-0-fornecedores)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:14

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28948508696087)
 Tempo aproximado para leitura: 00:01:00min**

**Ocorrência**Ao executar o processo de assistente de cotação, após informar os fornecedores > avançar, o sistema apresenta mensagem: **Não é possível inserir uma cotação com mais de X fornecedores**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Nos parâmetro de cotação está informado que o número máximo de fornecedores para a cotação é zero.

**Solução
**

1.  Acessar o menu **Ambiente | Parâmetros | Gestão de estoque, Compras e Faturamento | Gestão de Compras | Cotação** e clique em avançar;
2.  Identificar o escopo correto: geral ou por filial (Definições de Escopo - Filial);
3.  Acesse a etapa **Fornecedores 1/2** e verifique o campo "**Número máximo de Fornecedores na Cotação**". Nele informe a quantidade máxima que deseja permitir.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019215931)

Será necessário que acesse **Definição de Escopo - Filial** e realize a mesma parametrização dentro da filial que será utilizada.
