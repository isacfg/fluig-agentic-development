# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - FAT - Como consistir base de CNPJ de Cli/For no Faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Como-consistir-base-de-CNPJ-de-Cli-For-no-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Como-consistir-base-de-CNPJ-de-Cli-For-no-Faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 9 de março de 2023 às 15:20

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 02:00 min
Dúvida**Como faturar movimento onde apenas a base do CNPJ será mantida no movimento de destino?

**Ambiente**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da versão 11

**Solução**Durante o **Faturamento** de um movimento é possível que o **Cli/For** seja alterado no movimento de destino mesmo que o CNPJ deste seja diferente da origem.

Para tanto é necessário que na etapa **Mov - Emitente/Destinatário 2/2** seja selecionada a opção **Base CNPJ** para o parâmetro **Consiste Fornecedor**, assim ao faturar o usuário conseguirá alterar o Cli/For do movimento apenas para os fornecedores que possuírem a mesma base de CNPJ do fornecedor informado no pedido.
Esta configuração geralmente é utilizada quando o Cli/For envolvido trabalha com **central de distribuição** onde a ordem de compra é feita no CNPJ da matriz mas nota é emitida por uma filial.
