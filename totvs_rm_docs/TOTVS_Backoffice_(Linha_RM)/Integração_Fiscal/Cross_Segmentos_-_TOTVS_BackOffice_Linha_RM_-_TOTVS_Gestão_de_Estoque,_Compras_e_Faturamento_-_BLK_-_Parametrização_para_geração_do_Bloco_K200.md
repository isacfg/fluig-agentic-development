# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração do Bloco K200

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022986251-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-do-Bloco-K200](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022986251-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-BLK-Parametriza%C3%A7%C3%A3o-para-gera%C3%A7%C3%A3o-do-Bloco-K200)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 26 de junho de 2024 às 10:03

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24421610188055)
 Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como parametrizar o módulo para geração do **Bloco** **K200?

****Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução
**O **Registro** **K200** tem o objetivo de informar o estoque final escriturado do período de apuração informado no **Registro K100**, por tipo de estoque e por participante, nos casos em que couber, as situações de mercadorias que serão consideradas neste registro são:

-   01 – Mercadoria para revenda;
-   02 – Matéria-Prima;
-   03 – Produtos em Elaboração;
-   04 – Produto Acabado;
-   08 – Embalagem;
-   09 – Subproduto;
-   15 – Outros Insumos;

Acessar o cadastro dos produtos e na opção **Anexos | Dados Fiscais do Produto**, deve conter os campos em destaque conforme a imagem abaixo:

![Imagem](http://tdn.totvs.com/download/attachments/270902505/image2017-1-3%2015%3A30%3A15.png?version=1&modificationDate=1483465213000&api=v2)
![Imagem](http://tdn.totvs.com/download/attachments/270902505/image2017-1-3%2015%3A31%3A29.png?version=1&modificationDate=1483465213000&api=v2)

**Informações Adicionais
**Os produtos devem sofrer movimentação de estoque para ficarem disponíveis no arquivo. Se mesmo após realizar a parametrização conforme a imagem acima o **Registro K200** não ficar disponível, é necessário realizar a **Regeração de Saldos e Custos** [(clique aqui para maiores informações)](https://tdn.totvs.com/display/public/LRM/Regerar+Saldos+e+Custos) para os Produtos em questão. 

Para maiores informações sobre como gerar o Bloco K pelo SPED Fiscal, clique [aqui.](https://tdn.totvs.com/display/public/LRM/FIS0001_Bloco_K_Gerar_SPED_FISCAL_v2.0)
