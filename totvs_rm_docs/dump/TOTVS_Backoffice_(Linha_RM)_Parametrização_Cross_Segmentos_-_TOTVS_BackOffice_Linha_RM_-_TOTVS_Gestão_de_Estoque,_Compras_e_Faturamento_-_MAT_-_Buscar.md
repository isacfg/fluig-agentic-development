# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Buscar preço em fórmula de preço

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036630853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Buscar-pre%C3%A7o-em-f%C3%B3rmula-de-pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036630853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Buscar-pre%C3%A7o-em-f%C3%B3rmula-de-pre%C3%A7o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 5 de outubro de 2021 às 09:48

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 03:00 min**

**Dúvida:**Como parametrizar o sistema para **"Buscar preço em"** utilizando uma **Fórmula de Preço**?

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047254994/mceclip0.png)

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento  – Todas as versões.

**Solução**Ao parametrizar o tipo de movimento para **Buscar** **Preço** **Em Fórmula de Preço 1/2** será necessário criar e associar esta fórmula a uma condição de pagamento. Para criar tal fórmula será necessário acessar o módulo de **Serviços** **Globais** > **Administração** >**Fórmulas**, vale lembrar que o **Sistema** selecionado deverá ser o **Gestão de Estoque, Compras e Faturamento**.
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360048131653/mceclip1.png)


Após cadastrar a fórmula desejada será necessário vincular a mesma a uma condição de pagamento, para isso acesse o menu **Cadastros** > **Mais** > **Tabelas Auxiliares** > **Condição** **de** **Pagamento**.
Dentro da condição de pagamento possui os campos correspondentes a **Fórmulas de Preço 01/02.**

**
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047248194/mceclip2.png)


![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360048132213/mceclip3.png)
**

Ao incluir esta Condição de Pagamento no movimento o preço unitário retornado será o resultado da fórmula previamente cadastrada. Para mais informações sobre **preços**, [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=423938806).

**Informações adicionais
**Uma vez que este parâmetro depende de outro cadastro para conseguir identificar qual fórmula executar é obrigatório que o tipo de movimento esteja configurado para editar **Condição de pagamento** através da etapa **Fin - Condições de pagamento.**
