# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Estornar item parcialmente recebido

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/6950991114007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Estornar-item-parcialmente-recebido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6950991114007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Estornar-item-parcialmente-recebido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 22 de junho de 2022 às 11:29

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**
Como utilizar recurso de Estornar Item parcialmente recebido?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Solução**
A utilização da rotina de **Estornar Item parcialmente Recebido** tem como objetivo reabrir uma **cotação** e a **solicitação de compras** relacionada a esta cotação, a partir de uma **ordem de compra** parcialmente recebida.
Este processo poderá ser usado tanto para movimentos gerados pelo módulo de cotação quanto no faturamento normal de movimentos.
Geralmente surge a necessidade de utilização deste processo quando o Usuário deseja aproveitar os itens que não foram faturados, no movimento de origem para geração de outro movimento distinto.
Neste caso, o Usuário passa a contar com a rotina de Estornar Item não Recebido, a qual faz com que o sistema exclua os itens não recebidos do movimento em questão e reabra o movimento de origem alterando o Status deste Pedido/Solicitação/Cotação para **Parcialmente Recebido** ou **Ordem de Compra Parcialmente Gerada**, possibilitando o recebimento deste movimento ou cotação.

**Informações Adicionais**

-   Este processo utiliza do processo de **conclusão** de movimento ao estornar o item parcialmente recebido, ou seja, movimento que teve todos os itens recebidos será concluído.
-   Este processo só pode ser executado em movimento com status Parcialmente Recebido.
-   O Estorno de Itens não Recebidos realiza todas as operações para que o sistema identifique o movimento como se o mesmo tivesse sido **totalmente recebido/fatura****do**. Estas operações são: **Estorno do efeito do estoque, do orçamento, do financeiro.**
-   Após o item ser estornado o status do movimento é alterado para Recebido ou Faturado, conforme tipo de movimento utilizado.
-   O movimento que teve todos os itens parcilamente recebidos estornados, não estará disponível para continuar o faturamento.
-   Atualmente **não** tem como desfazer este processo.
-   Este processo não poderá ser executado em movimentos do tipo 1.2.xx ou 2.2.xx.
-   É preciso dar **permissão** ao **perfil** do usuário para ter acesso a este processo na visão de movimentos, através da aba **acesso a menus** no cadastro de perfis.
-   Para o correto funcionamento do processo é preciso que o módulo de Cotação esteja parametrizado para que a Cotação permita **Gerar Cotação** **Parcialmente Cotada**.

-   Ao executar o processo será registrado na tabela **TMOTIVOCONCLPED** o **MOTIVO** **Estorno dos itens não recebidos** e no campo **NSEQUENCIAL** o sequencial do item que foi estornado.
