# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Default Para Modalidade de Base de Cálculo do ICMS e ICMS ST na Tributação do Item de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025941434-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Default-Para-Modalidade-de-Base-de-C%C3%A1lculo-do-ICMS-e-ICMS-ST-na-Tributa%C3%A7%C3%A3o-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025941434-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Default-Para-Modalidade-de-Base-de-C%C3%A1lculo-do-ICMS-e-ICMS-ST-na-Tributa%C3%A7%C3%A3o-do-Item-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:47

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**Como preencher a Modalidade de Base de Cálculo do ICMS e ICMS ST automaticamente na aba Tributos e Valores | Tributos do item de movimento?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**A coluna Modalidade Base Cálculo será preenchida com o default informado no cadastro do produto > Anexos > Dados Fiscais por UF, mediante as seguintes premissas:

1.  O movimento deverá estar parametrizado para gerar escrituração. Para tanto, acesse menu Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > selecione o tipo de movimento com um duplo clique > Avance > etapa Fis - Escrituração 1/2 e marque a flag Gerar Escrituração.
2.  O Tipo de Documento utilizado para escrituração informado no movimento, aba Integrações | Fiscal deverá ter o campo Código do Modelo do Documento = 55.
3.  No cadastro de produto > Anexos > Dados Fiscais por UF deverá criar um registro para o **estado do cliente/fornecedor** do movimento e informar a modalidade de cálculo default do ICMS no campo **Modalidade de Determ. da BC do ICMS** e do ICMS ST em **Modalidade de Determ. da BC do ICMSST**.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360040454754/mceclip0.png)
