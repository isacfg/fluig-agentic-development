# Parâmetros de Vinculações

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=463798432](https://tdn.totvs.com/pages/releaseview.action?pageId=463798432)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Classificação da Vinculação/Tipo de Vinculação**

Este recurso tem por finalidade a associação de um movimento em outro, associar o movimento classificado como adiantamento em um movimento classificado como controla adiantamento. Para este processo será necessário trabalhar com dois tipos de movimentos distintos, onde um tipo de movimento, em sua parametrização, estará classificado como “Adiantamento” e o outro, classificado “Controla Adiantamento”.

**Retenções**

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/463798432/image_preview.png?version=1&modificationDate=1551360551580&api=v2)
Faturamento/Recebimento Parcial por Valor**

Valor Utilizado Movimento:

-    Nenhum: O valor do movimento não será utilizado para faturamento parcial por valor.
-   Valor Bruto: Será considerado para o faturamento/recebimento parcial o valor bruto do movimento, definido através da Fórmula do Valor Bruto em [Mov - Valores Financeiros 2/4](https://tdn.totvs.com/display/LRM/Valores+Financeiros).
-   Valor do Documento: Será considerado para o faturamento/recebimento parcial o valor do documento do movimento, definido através da Fórmula do Valor do Documento em [Mov - Valores Financeiros 2/4](https://tdn.totvs.com/display/LRM/Valores+Financeiros).
-   Valor Sub-Total: Será considerado para o faturamento/recebimento parcial o valor sub-total do movimento, definido através da Fórmula do Sub-Total em [Mov - Valores Financeiros 2/4](https://tdn.totvs.com/display/LRM/Valores+Financeiros).

Valor Utilizado Item Movimento: 

-   Nenhum: O valor do item do movimento não será utilizado para faturamento parcial por valor.
-   Valor Bruto Item: Será considerado para o faturamento/recebimento parcial o valor bruto do item.
-   Valor Opcional 1: Será considerado para o faturamento/recebimento parcial o valor opcional 1 do item, definido através da Fórmula do Valor Opcional 1 em [item - Valores Financeiros](https://tdn.totvs.com/pages/viewpage.action?pageId=423938775).
-   Valor Opcional 2: Será considerado para o faturamento/recebimento parcial o valor opcional 2 do item, definido através da Fórmula do Valor Opcional 2 em  [item - Valores Financeiros](https://tdn.totvs.com/pages/viewpage.action?pageId=423938775).
-   Valor Total: Será considerado para o faturamento/recebimento parcial o valor total do item, parametrizado em [Item - Preços](https://tdn.totvs.com/pages/viewpage.action?pageId=423938806) ao habilitar o campo “Editar Preço Total”.
-   Valor Rateio: Será considerado para o faturamento/recebimento parcial o valor do rateio do item, definido através da Fórmula do Rateio do Item em [Rateio C.Custo - Departamento](https://tdn.totvs.com/display/LRM/Rateio+de+Centro+de+Custo+e+Departamento).
