# Rateio dos Valores Financeiros

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Rateio+dos+Valores+Financeiros](https://tdn.totvs.com/display/public/LRM/Rateio+dos+Valores+Financeiros)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938864/image_preview.png?version=1&modificationDate=1551279780493&api=v2)
Rateio dos Valores Financeiros 1/2**

**Rateio:** Nesta pasta são definidas as opções de rateio para Frete, Seguro, Desconto, Despesa, Frete do CTRC. As opções são:

-   Não Aplicar.
-   Aplicar Rateio Proporcional: O rateio proporcional será calculado pelo valor bruto interno (KQT \* KPU).
-   Aplicar Rateio Condicional: No rateio condicional o peso da participação de cada item é determinado por meio de fórmula similar àquela utilizada para calcular o valor bruto do movimento. Por meio desta fórmula será possível por exemplo distribuir para alguns itens do contexto, distribuir em partes iguais, distribuir em função do peso da mercadoria, e assim por diante.
-   Nesta pasta, é possível determinar o tipo de rateio de cada valor financeiro, assim como a respectiva fórmula caso o rateio seja condicional.

***Observações**:*

-   Caso utilize Rateio Proporcional ou Rateio Condicional, a pasta Outros Valores apresentará os valores no item do movimento. - No item de movimento, pasta 'Outros Valores', existe uma lista de campos com a participação do rateio de cada um dos valores financeiros do movimento. Todos estes campos podem ser acessados através de fórmula e podem ser utilizados na rotina de cálculo da base de cálculo.
-   Nos casos em que em tipo de movimento está parametrizado que o Desconto do Item afeta o Desconto do Movimento e/ou a Despesa do Item afeta a Despesa do Movimento, o respectivo valor do Desconto e/ou Despesa do movimento não é rateado para os itens de movimento.
-   Nome dos campos utilizados no Rateio (útil na criação de fórmulas, por exemplo na função TABITM):
    -   **RATEIODEDMAT**: Rateio da Dedução de Material; 
    -   **RATEIODEDOUT**: Rateio de Outras Deduções; 
    -   **RATEIODEDSUB**: Rateio de Dedução de Subempreitada; 
    -   **RATEIODESC**: Rateio do Desconto; 
    -   **RATEIODESP**: Rateio da Despesa; 
    -   **RATEIOEXTRA1**: Rateio do Valor Extra 1; 
    -   **RATEIOEXTRA2**: Rateio do Valor Extra 2; 
    -   **RATEIOFRETE**: Rateio do Frete; 
    -   **RATEIOFRETECTRC**: Rateio do Frete CTRC; 
    -   **RATEIOSEGURO**: Rateio do Seguro.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938864/image_preview.png?version=1&modificationDate=1551279780493&api=v2)
Rateio dos Valores Financeiros 2/2**

**Rateio:** Nesta pasta são definidas as opções de rateio para Valor Extra 1, Valor Extra 2, Dedução de material, Dedução de subempreitada, Outras deduções. As opções são:

-   Não Aplicar.
-   Aplicar Rateio Proporcional: O rateio proporcional será calculado pelo valor bruto interno (KQT \* KPU).
-   Aplicar Rateio Condicional: No rateio condicional o peso da participação de cada item é determinado por meio de fórmula similar àquela utilizada para calcular o valor bruto do movimento. Por meio desta fórmula será possível por exemplo distribuir para alguns itens do contexto, distribuir em partes iguais, distribuir em função do peso da mercadoria, e assim por diante.
-   Nesta pasta, é possível determinar o tipo de rateio de cada valor financeiro, assim como a respectiva fórmula caso o rateio seja condicional.

***Observações**:*

-   Caso utilize Rateio Proporcional ou Rateio Condicional, a pasta Outros Valores apresentará os valores no item do movimento.
-   No item de movimento, pasta 'Outros Valores', existe uma lista de campos com a participação do rateio de cada um dos valores financeiros do movimento. Todos estes campos podem ser acessados através de fórmula e podem ser utilizados na rotina de cálculo da base de cálculo.
-    Nos casos em que em tipo de movimento está parametrizado que o Desconto do Item afeta o Desconto do Movimento e/ou a Despesa do Item afeta a Despesa do Movimento, o respectivo valor do Desconto e/ou Despesa do movimento não é rateado para os itens de movimento.
-   Nome dos campos utilizados no Rateio (útil na criação de fórmulas, por exemplo na função TABITM):
    -   **RATEIODEDMAT**: Rateio da Dedução de Material;
    -   **RATEIODEDOUT**: Rateio de Outras Deduções;
    -   **RATEIODEDSUB**: Rateio de Dedução de Subempreitada;
    -   **RATEIODESC**: Rateio do Desconto;
    -   **RATEIODESP**: Rateio da Despesa;
    -   **RATEIOEXTRA1**: Rateio do Valor Extra 1;
    -   **RATEIOEXTRA2**: Rateio do Valor Extra 2;
    -   **RATEIOFRETE**: Rateio do Frete;
    -   **RATEIOFRETECTRC**: Rateio do Frete CTRC;
    -   **RATEIOSEGURO**: Rateio do Seguro.
