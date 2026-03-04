# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Faturamento Parcial por Valor do Item ou Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Faturamento-Parcial-por-Valor-do-Item-ou-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Faturamento-Parcial-por-Valor-do-Item-ou-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 21 de abril de 2025 às 14:17

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/16234060394391)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida
**Qual a parametrização necessária para realizar o processo de Faturamento Parcial por Valor? ( Item ou Movimento )

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Parametrização do movimento de **ORIGEM** e também de **DESTINO**

1.  Etapa **Item - Preços:**Campo **Edição do Preço** deve estar **obrigatoriamente** como **Edita.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277294514327)**
2.  Etapa ****Compra/Venda - Características:
    ****Campo **Efeito do Pedido**: selecione conforme sua necessidade: Faturar Parcial por Valor - Movimento **ou** Faturar Parcial por Valor - Item.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277334373527)


3.  Etapa **Compra/Venda - Outros Dados:**Deve-se obrigatoriamente marcar a flag **Não agrupar quantidade de itens iguais;
    **O Tipo do Movimento de Compra deve estar classificado como **Solicitação de Compras** **ou Pedido de Compras:

    OBS:** Movimentos do tipo 1.2.xx e 2.2.xx **NÃO** habilita essa etapa.

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277334379031)



4.  **Etapa Vinculações:
    **Campo **Faturamento/Recebimento Parcial por Valor** deve ser parametrizado os campos:

    **Valor Utilizado Movimento:** (Valor Bruto, Valor do Documento, Valor Sub-Total);
    **Valor Utilizado Item Movimento:** (Valor Bruto Item, Valor opcional 1, Valor opcional 2, Valor Total, Valor Rateio).

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277294530199)


    ⚠️ A parametrização desta etapa deve estar igual no movimento de ORIGEM e de DESTINO envolvidos no processo.


**Observação**

-   Os campos de VALOROPFRM1, VALOROPFRM2 e RATEIOCCUSTODEPTO só irão aparecer na lista quando estiverem parametrizados no tipo de movimento;


**Regra de Integridade**

Movimento de **Origem**:

1.  Faturamento por Valor **não pode agrupar movimento;**
2.  **Não** fatura movimento origem de **transferência;**
3.  O tipo de movimento de origem **não pode afetar estoque;**
4.  O tipo de movimento **não pode agrupar itens repetidos** no faturamento;
5.  O tipo de movimento precisa **editar preço;**
6.  O tipo de movimento precisa estar parametrizado para baixar movimento e **sem confirmar baixa.**

Movimento de **Destino**:

1.  O tipo de movimento precisa **editar preço;**
2.  Esta parametrizado qual valor será usado para o faturamento por movimento e por item de movimento.
3.  O tipo de movimento **não poderá utilizar** as opções "Usar para Quantidade" ou "Usar para Quantidade e Preço" para o campo "**Tolerância**" existente na etapa "**Mov - Outros Dados**"

**Exemplo do Processo:**

Neste exemplo, no movimento de ORIGEM usamos um item de movimento com o valor de R$100.

O movimento já gerou um movimento de destino no faturamento, onde esse faturamento foi feito parcial. No caso, foi faturado apenas R$25,00 como pode ser visto no print abaixo:

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26277334387351)
**

**Saiba mais:**

[FATURAMENTO PARCIAL VALOR](https://tdn.totvs.com/display/public/LRM/MOV0012_Faturamento_Parcial_Por_Valor)
