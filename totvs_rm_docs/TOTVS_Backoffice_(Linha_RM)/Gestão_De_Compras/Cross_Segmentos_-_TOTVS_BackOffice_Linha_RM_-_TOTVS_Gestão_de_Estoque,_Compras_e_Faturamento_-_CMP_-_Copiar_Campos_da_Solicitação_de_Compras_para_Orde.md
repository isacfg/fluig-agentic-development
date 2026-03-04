# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Copiar Campos da Solicitação de Compras para Ordem de Compra na Geração por Cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028657771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-de-Compras-para-Ordem-de-Compra-na-Gera%C3%A7%C3%A3o-por-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028657771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-de-Compras-para-Ordem-de-Compra-na-Gera%C3%A7%C3%A3o-por-Cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:20

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida**Como copiar campos como Segundo Número (Não Sequencial), Data Extra, Funcionários e Campos Livres do movimento de Solicitação de Compra para o movimento destino, na geração de Ordem de Compra pela Cotação?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Os campos da Solicitação de Compra serão copiados para a Ordem de Compra, quando esta for gerada por Cotação, somente se nos parâmetros da Cotação, menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Gestão Compras > Cotação > Definições de Escopo - Filial (se estiver cotando itens de uma única filial) > etapa Definições Gerais 3/5, a flag **Cotar Itens de uma Única Solicitação de Compra** estiver marcada.

Tal parâmetro marcado impede a seleção de mais de um movimento de Solicitação de Compra para uma mesma Cotação, retornando o erro abaixo ao executar o Processo Assistente de Cotação:

*Apenas itens de uma única solicitação poderão participar do processo de cotação.*

A marcação do parâmetro é necessária pois os campos a serem copiados para a Ordem de Compra são únicos por movimento.
