# Ressuprimentos (Estoque)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938765](https://tdn.totvs.com/pages/releaseview.action?pageId=423938765)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Geração de Movimento:** O movimento marcado com essa opção poderá ser usado dentro do assistente de análise de sugestão para gerar movimento desse tipo.

**Cálculo de Consumo:** O tipo de movimento marcado com essa opção poderá ser usado para calcular o histórico de consumo dos produtos em questão. Nesse caso, será feito um somatório de todos os movimentos desses tipos que não foram cancelados. Esse histórico do consumo será usado posteriormente no cálculo do consumo médio prático.

**Saldos:** Movimentos marcados com essa opção poderão ser utilizados para serem incluídos no somatório do saldo final dos produtos para serem comparados com o ponto de reposição. Exemplo: Todos os movimentos de ordem de compra pendentes para um determinado produto será usado para compor o saldo final.

**Devolução de Consumo:** O tipo de movimento marcado com essa opção poderá ser usado para calcular o histórico de consumo dos produtos em questão. Neste caso, será feito uma diminuição de todos os movimentos desses tipos que não foram cancelados. Este histórico do consumo será usado posteriormente no cálculo do consumo médio prático.
***Observação**:* O tipo de movimento que deverá ser parametrizado com esta opção, deverá ser de devolução de Vendas.

**Tipo de Consumo:**

-   Somente estará visível se a opção "Cálculo de Consumo" ou "Devolução de Consumo" estive habilitada, deverá informar se o tipo de movimento possui um consumo normal ou anormal.
-   Consumo Normal: Marque esta opção se o consumo daquela quantidade diz respeito à saída de um determinado produto do estoque para vendas normais da empresa.
-   Consumo Anormal: Esse tipo de consumo diz respeito à saída de um determinado produto do estoque dependendo da sazonalidade ou o consumo de produtos para projetos internos na empresa, exemplo*:*

O consumo de chocolate na Páscoa é superior aos outros meses do ano. Sendo assim, o consumo de chocolates na Páscoa corresponde a um consumo anormal pois a quantidade consumida nesse período poderá influenciar no valor do consumo médio.

* * *

-   [Dias Trabalhados](/display/LRM/Dias+Trabalhados)
-   [Grupo de Classe ABC](/display/LRM/Grupo+de+Classe+ABC)
-   [Tipo de Aplicação](/pages/viewpage.action?pageId=458752971)
-   [Processos (Ressuprimento)](/pages/viewpage.action?pageId=423938820)
-   [Análise](/pages/viewpage.action?pageId=423938295)
