# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipo de Documento Inválido

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002868202-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipo-de-Documento-Inv%C3%A1lido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002868202-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipo-de-Documento-Inv%C3%A1lido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 21 de abril de 2025 às 14:40

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31560958382871)**Tempo aproximado para leitura:**00:03:00min**

**Ocorrência
**Ao salvar um movimento é apresentado o erro: **Tipo de Documento Inválido**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4415119600151)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse erro ocorre pois o tipo de movimento está parametrizado para gerar integração financeira e na etapa Fin - Faturamento 1/6, no campo **Tipo de Documento Duplicata** foi selecionado a opção **Utiliza do Cliente/Fornecedor** e no respectivo cadastro não foi informado um default para o Tipo de Documento.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360101496114)

**Cadastro | Clientes/Fornecedores | selecione o Cliente/Fornecedor usado no movimento | Anexos | Defaults do Cli/For | Identificação | campo Tipo de Documento:**

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360101495554)

**Solução
**Acesse o **Cadastro do Cliente/Fornecedor | Defaults de Cli/For | Identificação | Preencha o Tipo de Documento** válido do tipo **A Pagar, A Receber ou A Pagar e A Receber,** para solucionar o problema. 

Outra forma de resolver é alterar o campo Tipo de Documento Duplicata nos parâmetros do tipo de movimento para **Utiliza do Tipo de Movimento** e informar um tipo de documento válido no campo **Tipo de Documento Duplicata Default**:

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360101497394)
