# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Utilização de máscaras no módulo Gestão de Estoque, Compras e Faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7290884213399-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Utiliza%C3%A7%C3%A3o-de-m%C3%A1scaras-no-m%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7290884213399-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Utiliza%C3%A7%C3%A3o-de-m%C3%A1scaras-no-m%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de setembro de 2022 às 14:09

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como utilizar e a representação de máscaras no módulo TOTVS Gestão de Estoque, Compras e Faturamento.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**As Máscaras são utilizadas para formatar campos de códigos do sistema, como por exemplo: **código do produto, número de série, fabricante** e etc. A Totvs segue o padrão da Microsoft para definição de máscaras. De acordo com esta padronização existem alguns caracteres que possuem significado especial no sistema, sendo eles:

**Símbolo**

**Representação**

#

Somente números

I

Somente letras, converte para minúsculas as letras informadas

L

Somente letras, converte para maiúsculas as letras informadas

a

Letras e números, converte para minúsculo quando for letras

A

Letras e números, converte para maiúsculas quando for letras

Q

Para qualquer caractere, exceto os separadores ( : . , ; / )

C

Para qualquer caractere não controlado


**Importante**

-   Ponto **(.)** usado para definir níveis da máscara.
-   Se a máscara de um código for L#.##, o código poderá ser: A1.01, sendo que se digitado a11, o sistema passará a "a" (minúsculo) para "A" (maiúsculo) e preencherá as outras casas com "0".
-   Para utilizar um caractere especial e anular o seu significado, basta colocar uma \\ antes do mesmo. Exemplo: ###.\\CTT.###
