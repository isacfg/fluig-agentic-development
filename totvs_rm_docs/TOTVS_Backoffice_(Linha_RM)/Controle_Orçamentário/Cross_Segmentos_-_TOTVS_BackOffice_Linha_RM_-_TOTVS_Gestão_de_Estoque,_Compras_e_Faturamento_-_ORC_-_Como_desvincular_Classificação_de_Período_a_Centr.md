# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como desvincular Classificação de Período a Centro de Custo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028066652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-desvincular-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-a-Centro-de-Custo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028066652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-desvincular-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-a-Centro-de-Custo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 9 de abril de 2025 às 15:07

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura:**00:03:00 min**

**Ocorrência**No módulo **Gestão de Estoque, Compras e Faturamento**, ao tentar realizar o processo **Desvincula Centro de Custo da Classificação de período** é apresentada a mensagem:

Falha ao desvincular o Registro abaixo: 
Código da Coligada: 1, Centro de Custo: 91.12.00.00

Possíveis Causas: 
\- O Centro de Custo está sendo utilizado no Orçamento. 
\- Não existe vínculo.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Ao editar o vinculo existente observe que o campo se encontra desativado para alteração. O campo de classificação não pode ser alterado caso o **Centro de Custo** vinculado já tenha feito parte de algum **Valor Orçado**. Sendo assim o processo para Desvincular os cadastros não pode ser executado.

**Solução**Para solucionar essa ocorrência será necessário cadastrar um novo Centro de Custo, e associa-lo á nova classificação ou deixar este campo em branco para este novo Centro de Custo.

Outra opção é, excluir todos os movimento que afetaram orçamento para este centro de custo assim como os Valores Orçados cadastrados. Feito isso o campo será liberado para edição, e o processo de desvinculo poderá ser executado.

Para saber como utilizar a Classificação de período corretamente [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028064612).
