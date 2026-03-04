# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Evento contábil: Como funcionam as opções Buscar Centro de Custo em

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028217092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Evento-cont%C3%A1bil-Como-funcionam-as-op%C3%A7%C3%B5es-Buscar-Centro-de-Custo-em](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028217092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Evento-cont%C3%A1bil-Como-funcionam-as-op%C3%A7%C3%B5es-Buscar-Centro-de-Custo-em)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 18 de janeiro de 2022 às 15:27

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00min**

**Dúvida**Como funcionam as opções **Buscar Centro de Custo em**?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**O sistema fará a busca de acordo com o que o usuário marcar e ordenar na tela principal do Evento Contábil.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360028629892/mceclip0.png)

Ou seja, no exemplo da imagem acima, buscará respectivamente na ordem de:
Movimento, Default Contábil, Evento Contábil, Rateio. Passando de uma opção para a próxima apenas se não existir a informação.

Esta ordem será definida pelo usuário, na criação do Evento Contábil.

**E buscam de qual local?**

1\. Item de evento que se aplicar em: **MOVIMENTO
Movimento**:  Tabelas | Centro de Custo do MOVIMENTO
**Default Contábil**: Default Contábil (Tabela default utilizada no item de evento)
**Evento Contábil**: Evento Contábil (Item de evento contábil | Aba Dados Complementares | Centro de Custo)
**Rateio**: Rateio por centro de custo do MOVIMENTO

2\. Item de evento que se aplicar em: **ITEM DE MOVIMENTO
****Movimento:** Tabelas | Centro de Custo do ITEM DE MOVIMENTO
**Default Contábil**: Default Contábil (Tabela default utilizada no item de evento)
**Evento Contábil**: Evento contábil (Item de evento contábil | Aba Dados Complementares | Centro de Custo)
**Rateio**: Rateio por centro de custo do ITEM DE MOVIMENTO
