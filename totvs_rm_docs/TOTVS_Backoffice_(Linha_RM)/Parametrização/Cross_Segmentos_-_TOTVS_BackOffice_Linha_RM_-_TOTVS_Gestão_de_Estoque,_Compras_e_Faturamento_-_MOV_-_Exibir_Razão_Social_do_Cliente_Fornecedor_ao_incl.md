# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Exibir Razão Social do Cliente/Fornecedor ao incluir Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4445329610519-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Exibir-Raz%C3%A3o-Social-do-Cliente-Fornecedor-ao-incluir-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4445329610519-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Exibir-Raz%C3%A3o-Social-do-Cliente-Fornecedor-ao-incluir-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:02

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura**: 00:03:00min**

**Dúvida
**Como parametrizar o sistema para que ao incluir um movimento, o campo Cliente/Fornecedor exiba a **Razão Social** e não o **Nome Fantasia**?

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4530466939031/mceclip0.png)
**

**
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4530570301591/mceclip1.png)
**

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.**

Solução
**Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Financeira | etapa Definições Financeira,** campo Descreve Cliente/Fornecedor e altere para a opção Nome. 

As opções disponíveis hoje são:

**1\. Nome:** ao inserir o Cliente/Fornecedor no Movimento, será exibido a Razão Social (FCFO.NOME);

**2\. Nome Fantasia:** ao inserir o Cliente/Fornecedor no Movimento, será exibido o Nome Fantasia (FCFO.NOMEFANTASIA).

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4445301573783/mceclip0.png)
**

No exemplo abaixo, desejo que exiba a **Razão Social do Cliente/Fornecedor**. Para isso, configurei a opção **Nome** no **Campo que Descreve Cliente/Fornecedor**. Ao incluir o Movimento, será exibido a **Razão Social** do mesmo:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4530637413911/mceclip2.png)

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4530618356759/mceclip3.png)
