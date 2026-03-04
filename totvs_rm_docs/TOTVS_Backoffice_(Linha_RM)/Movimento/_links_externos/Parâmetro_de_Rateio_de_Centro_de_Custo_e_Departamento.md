# Parâmetro de Rateio de Centro de Custo e Departamento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938848](https://tdn.totvs.com/pages/releaseview.action?pageId=423938848)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Tipo de Rateio:**  Indique se o rateio será do tipo percentual ou valor.

**Rateio do Movimento:** Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.

**Rateio do Item:** Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.
***Observações**:* 

-   Informando que irá editar algum dos rateios, no movimento a pasta rateios será disponibilizada para as informações para centro de custo e departamento. 
-   Se o movimento gerar lançamentos para o TOTVS Gestão Financeira e neste estiver parametrizado para editar rateio, aquele que for informado no movimento será automaticamente transportado para o lançamento do TOTVS Gestão Financeira.
-   Informando que irá editar algum dos rateios, na inclusão do item a pasta rateio será disponibilizada para as informações para centro de custo e departamento. Ao utilizar rateio por item, não será permitido incluir rateio no movimento, o(s) rateio(s) do(s) item(ns) será carregado para a pasta de rateio do movimento.
-   Parametrizando centro de custo e departamento no item como edita, podemos copiá-los de uma solicitação para a ordem de compra via cotação. Quando agrupamos itens iguais, estes deverão ser somados para o rateio. Caso um item tenha rateio e outro não, o valor total do item deverá ser rateado na ordem de compra. Gerando itens em ordens de compra já existentes, estes deverão ser rateados separadamente para cada ordem de compra específica. É necessário também que em opções/parâmetros/tipo de movimento/itens/preço, que o preço esteja como edita, tanto para a solicitação como ordem de compra.
-   Se o movimento gerar lançamentos para o TOTVS Gestão Financeira e neste estiver parametrizado para editar rateio, aquele que for informado no(s) item(s) será automaticamente transportado para o lançamento do TOTVS Gestão Financeira. Quando o Tipo de Rateio for 'Percentual' e o Centro de Custo no Item for 'Edita', é possível informar ou não o rateio no item de movimento. Caso o rateio seja informado, a soma dos percentuais de rateio não poderá ser parcial, deverá ser 100%.
