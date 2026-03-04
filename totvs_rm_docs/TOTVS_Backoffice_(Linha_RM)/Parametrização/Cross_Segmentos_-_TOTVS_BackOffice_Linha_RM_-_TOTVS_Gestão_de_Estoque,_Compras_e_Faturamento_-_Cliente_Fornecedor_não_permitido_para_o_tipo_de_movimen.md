# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Cliente/Fornecedor não permitido para o tipo de movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8582355524759-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Cliente-Fornecedor-n%C3%A3o-permitido-para-o-tipo-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8582355524759-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Cliente-Fornecedor-n%C3%A3o-permitido-para-o-tipo-de-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de setembro de 2022 às 14:17

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**Ao tentar salvar um movimento é apresentado a mensagem de erro:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8581659163799/mceclip0.png)



**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Essa mensagem ocorre pois nos parâmetros do tipo de movimento, etapa 2 - Mov - Emitente/Destinatário 1/2, o **Emitente** **ou Destinatário** está como **Cliente ou Fornecedor**. É necessário que seja verificado se de fato o cli/for selecionado se encaixa na opção do parâmetro.

Exemplo: O Destinatário do meu movimento é **Cliente**, portanto, apenas cadastros do tipo **Cliente** ou **Ambos** poderão ser utilizados.

**
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8585069645335/mceclip0.png)
**

Caso deseja tornar esse Cliente/Fornecedor como Ambos, deverá acessar seu cadastro e alterar o campo Classificação para **Ambos**.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8581843572631/mceclip1.png)
