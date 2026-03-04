# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cálculo do Quadro Comparativo solicita cotação de moeda

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023802752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-C%C3%A1lculo-do-Quadro-Comparativo-solicita-cota%C3%A7%C3%A3o-de-moeda](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023802752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-C%C3%A1lculo-do-Quadro-Comparativo-solicita-cota%C3%A7%C3%A3o-de-moeda)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 10 de abril de 2025 às 09:34

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31311920943895)**Tempo aproximado para leitura: **00:04:00min**

**Ocorrência**

No módulo Gestão de Estoque, Compras e Faturamento ao tentar realizar cálculo do Quadro Comparativo de uma cotação é apresentada a mensagem: **Ocorreu um erro ao efetuar a leitura da visão: CmpQuadroComparativoAction Não foi localizada uma cotação para os símbolos na data**

![screenshot_20190219_154259.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360021832292)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre, pois a **última compra** do(s) produto(s) cotado(s) foi inserida com uma **moeda** diferente da moeda da cotação e esta por sua vez não possui cotação de moeda cadastrada.

O sistema executa o seguinte cálculo para obter a **Eficiência** **Negociada**:

Total da compra = Preço negociado \* Quantidade requisitada
       Total com base no último preço cotado = Total última compra \* Quantidade requisitada   

Se "Total com base no último preço cotado" for menor que "Total da compra" então
       (((Total com base no último preço cotado) - (Total da compra)) / (Total com base no último preço cotado)) \* 100
       Se não
       (((Total com base no último preço cotado) / (Total da compra)) - 1) \* 100

Sendo assim para obter o valor **Total última compra** o sistema precisa converter a moeda desta última compra para a moeda da cotação.

**Solução
**Para solucionar essa ocorrência, realize os seguintes passos:

1.  Acesse o cadastro da moeda utilizada na última compra;
2.  Em anexos **Cotações** cadastre uma nova cotação onde a moeda **Símbolo** **de referência** será a moeda informada na cotação.
