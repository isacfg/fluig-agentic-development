# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K230 e K235 Processo Produtivo Simples

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022778712-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K230-e-K235-Processo-Produtivo-Simples](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022778712-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-dos-Blocos-K230-e-K235-Processo-Produtivo-Simples)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 2 de dezembro de 2021 às 09:00

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: **00:03:00min**

**Dúvida**Como parametrizar o módulo para geração dos **Blocos K230 e K235** pelo **Processo Produtivo Simples**.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução**Parametrização dos Tipos de Movimento no **Processo Produtivo Simples** para geração dos **Blocos K230 e K235**.

**1\. Movimento de** **Ordem de Produção - 2.1.XX
Etapa Produção:** marcar a flag **Gerar Ordem de Produção no RM Factor:**

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360020368331/mceclip0.png)
**

**Etapa** **Compra/Vendas – Características: i**nformar o tipo de movimento para a **Baixa de Matéria Prima.
**Recomenda-se que seja definido no parâmetro **Baixar Pedido de Compra após Geração de Movimento** como **Baixa Sempre:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360020476412/mceclip1.png)

As demais parametrizações para o tipo de movimento não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente. 

Clique [aqui](https://tdn.totvs.com/display/public/LRM/MOV0001_Bloco_K_Processo_Produtivo_Simples) para conferir as demais parametrizações e descrição do processo a ser realizado.

**Informações Adicionais**
Este registro se baseia apenas na utilização do Processo Produtivo Simples, no qual existe a necessidade de criar uma ordem de produção, fazer a baixa do estoque das matérias primas para posterior produção do produto acabado e consequentemente a emissão de nota de venda para baixa do produto produzido (produto acabado).
