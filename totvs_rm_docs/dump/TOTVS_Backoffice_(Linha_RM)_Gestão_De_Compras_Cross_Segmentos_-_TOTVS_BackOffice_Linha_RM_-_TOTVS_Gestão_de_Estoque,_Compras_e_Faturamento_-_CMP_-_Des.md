# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Desconto por Movimento na cotação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/20764246737175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Desconto-por-Movimento-na-cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/20764246737175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Desconto-por-Movimento-na-cota%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:32

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/20764233833879)
 Tempo aproximado para leitura: **00:02:00 min**

**Dúvida**Como levar o desconto preenchido na cotação para o movimento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para que o desconto preenchido na cotação seja levada ao movimento da Ordem de Compra, será necessário verificar as parametrizações:

PASSO 1
Verificar o parâmetro do movimento da Ordem de Compra que será gerada: **Etapa MOV - Valores Financeiros 1/4** habilite a flag para utilizar desconto:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/20764233836183)


PASSO 2:

Acesse: menu **Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Gestão de Compras > Cotação > Orçamento1/2** > e habilite a flag **Usa desconto no Orçamento**.
Será necessário verificar essa mesma parametrização também nas **Definições de Escopo - Filial.**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/20764246704663)


PASSO 3:
A informação será preenchida no campo Desconto dentro da aba **Identificação** do Orçamento.


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/20764233845015)


Após gerar a Ordem de Compra o valor do desconto será apresentado no **movimento > Aba Tributos e Valores > Valores > Campo Desconto:**


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/20764246706839)
