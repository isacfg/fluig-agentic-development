# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Natureza de rendimento default no tributo IRRF para o lançamento financeiro

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/17317866242327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-rendimento-default-no-tributo-IRRF-para-o-lan%C3%A7amento-financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/17317866242327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-rendimento-default-no-tributo-IRRF-para-o-lan%C3%A7amento-financeiro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de setembro de 2023 às 17:38

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/17317808587287)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida
**Como levar a Natureza de Rendimento default no tributo IRRF para o lançamento financeiro?

**Ambiente
**Cross Segmento - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento\- A partir da biblioteca 12.1.2209**Solução
**Na geração dos lançamentos financeiros a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo **Natureza de Rendimento** será levado para o **lançamento financeiro** (aba Valores |Tributos), onde o lançamento financeiro tem o tipo de documento **Gerar IRRF**.

Para solucionar essa dúvida, realize os seguintes passos:

**1**. O tipo de movimento deverá estar parametrizado para [Geração de IRRF Automático para o Totvs Gestão Financeira.](https://tdn.totvs.com/pages/releaseview.action?pageId=4813078)

**2**. Nos **parâmetros do tipo de movimento | etapa Fin-faturamento 3/6** deve ser informada a **fórmula para cálculo do valor de serviço**.
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17318366955543)


**3**. Deverá ser informado no **cadastro do Produto** em Anexos | **Dados Fiscais do Produto** a **Natureza de Rendimento** default, **Código da Receita** e **Percentual da Base IRRF**.
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17317188680599)

**
4**. No Movimento, em Tributos e Valores | Tributos será  preenchido os campos automaticamente.
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17317338379031)


**5**. No lançamento financeiro gerado será preenchido as informações em Tributos | Valor do IRRF.
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/17317483763479)


**Importante:
**\- Atualmente o sistema não leva a natureza de rendimentos default buscando do clif/for.
\- Caso não seja informado default da natureza de rendimentos no cadastro  do produto, a mesma pode ser inserida manualmente na inclusão do movimento.

**Saiba mais em:
**
[Regras para preenchimento do campo Natureza de Rendimento do Movimento para o Lançamento Financeiro](https://tdn.totvs.com/pages/releaseview.action?pageId=761017178)

[Geração de IRRF Automático para o Totvs Gestão Financeira](https://tdn.totvs.com/pages/releaseview.action?pageId=4813078)

Veja o passo a passo em vídeo: How to | Natureza de Rendimentos Default IRRF

 [[🎥 Vídeo](https://centraldeatendimento.totvs.com//www.youtube-nocookie.com/embed/cd6ky0xbEYc)](https://www.youtube.com/watch?v=cd6ky0xbEYc)
