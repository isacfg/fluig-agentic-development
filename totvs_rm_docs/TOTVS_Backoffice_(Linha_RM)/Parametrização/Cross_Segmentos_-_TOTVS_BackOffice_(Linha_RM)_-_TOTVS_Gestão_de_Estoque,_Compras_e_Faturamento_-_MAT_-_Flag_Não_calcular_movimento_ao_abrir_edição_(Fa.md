# Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Flag "Não calcular movimento ao abrir edição (Faturamento)" Não é Exibida nos Parâmetros do Tipo de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407617084695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Flag-N%C3%A3o-calcular-movimento-ao-abrir-edi%C3%A7%C3%A3o-Faturamento-N%C3%A3o-%C3%A9-Exibida-nos-Par%C3%A2metros-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407617084695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Flag-N%C3%A3o-calcular-movimento-ao-abrir-edi%C3%A7%C3%A3o-Faturamento-N%C3%A3o-%C3%A9-Exibida-nos-Par%C3%A2metros-do-Tipo-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 12:08

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min**

**Ocorrência
**A flag **Não calcular movimento ao abrir edição (Faturamento)** não é exibida nos parâmetros do Tipo de Movimento para seleção:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407605133335/mceclip0.png)

**Ambiente**
Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre pois na etapa **Compra/Vendas - Características** o campo **Opção de Faturamento** está selecionado **Automático** ou **Automático com Seleção especifica de movimento**.

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407616652567/mceclip2.png)

Quando selecionada a opção de faturamento **Automático** ou **Automático com Seleção especifica de movimento** a tela do movimento destino não é aberta para edição portanto não é possível definir se os valores serão ou não recalculados ao abrir a tela do movimento destino. 

**Solução
**Para que a flag seja exibida, a opção de faturamento deve ser diferente de **Automático** ou **Automático com Seleção especifica de movimento**.

**
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407627402903/mceclip1.png)
**

A flag **Não calcular movimento ao abrir edição (Faturamento)**, quando marcada impede que durante o faturamento o movimento destino seja recalculado, isso melhora a performance da abertura da tela. O recálculo dos valores pode ser feito manualmente teclando F7 ou clicando no ícone calculadora
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407650663831/mceclip0.png)
 ou clicando em OK/Salvar para finalizar o faturamento.

**Importante:
**Para melhor entendimento do Faturamento Automático, verifique o artigo:
[RM - MOV - Faturamento Automático](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037246674-RM-MOV-Faturamento-Autom%C3%A1tico?source=search)
