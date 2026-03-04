# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Tipo de movimento classificado como Solicitação de Compras deve ter as seguintes configurações

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028659092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Tipo-de-movimento-classificado-como-Solicita%C3%A7%C3%A3o-de-Compras-deve-ter-as-seguintes-configura%C3%A7%C3%B5es](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028659092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Tipo-de-movimento-classificado-como-Solicita%C3%A7%C3%A3o-de-Compras-deve-ter-as-seguintes-configura%C3%A7%C3%B5es)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 17 de abril de 2025 às 16:26

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31493404273687)
 Tempo aproximado para leitura: 00:03:00min**

**Ocorrência**No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento referente a Solicitação de Compras sistema exibe a mensagem abaixo: **Tipo de movimento classificado como 'Solicitação de Compras ( Gestão Compras)' deve ter as seguintes configurações:**

**Tipo de Movimento do Grupo 1.1**

**Tipo de Movimento de Compras igual "Solicitação de Compras" ( Compra/Venda - Outros )**


![inline-1881830472.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029779372)

**Ambiente**RM – Gestão de Estoque, Compras e Faturamento – Todas as Versões

**Causa
**Esse incidente ocorre pois a parametrização do **Tipo de Movimento** deste possui Classificação igual a **Solicitação de Compras** mas o **Tipo do Movimento de Compras** esta diferente de "Solicitação de Compras".

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

Acesse a etapa **Compra/Vendas - Outros Dados** deste tipo de movimento e marque a opção Solicitação de Compras;
![screenshot_20190530_134911.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360029791131)
