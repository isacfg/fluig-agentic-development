# MOV0012_Faturamento_Parcial_Por_Valor

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/MOV0012_Faturamento_Parcial_Por_Valor](https://tdn.totvs.com/display/public/LRM/MOV0012_Faturamento_Parcial_Por_Valor)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

11.83, 12.1 e superiores

**Ocorrência:**

Faturamento Parcial por Valor (Item ou Movimento)

**Ambiente:**

Faturamento de Movimento

**Passo a passo:**

A partir da versão 11.83 e 12.1, está disponível o processo de Faturamento Parcial Por Valor, seja ele por movimento ou por item.

# Parametrizações Necessária



**Movimento de Origem**

Etapa Compra/Venda - Características

Campo Efeito do Pedido:

-   -   -   Faturar Parcial por Valor - Movimento
        -   Faturar Parcial por Valor - Item



Etapa Compra/Venda - Características

O Tipo do Movimento de Compra deve estar classificado como "Solicitação de Compras" ou "Pedido de Compras"



Etapa Vinculações

Campo Faturamento / Recebimento Parcial por Valor

-   -   -   Valor Utilizado Movimento (Valor Bruto, Valor do Documento, Valor Sub-Total)

        -   Valor Utilizado Item Movimento (Valor Bruto Item, Valor opcional 1, Valor opcional 2, Valor Total, Valor Rateio)


Observações:

Os campos de VALOROPFRM1, VALOROPFRM2 e RATEIOCCUSTODEPTO só irão aparecer na lista quando estiverem parametrizados no tipo de movimento.

O movimento NÃO pode afetar estoque.



Etapa Compra/Venda - Outros Dados

Deve-se obrigatoriamente marcar a opção **Não agrupar quantidade de itens iguais**.



Etapa Item - Preços

Campo Edição do Preço, deve estar obrigatoriamente como Edita.





**Movimento de Destino** 

Etapa Compra/Venda - Características 

Campo Efeito do Pedido: 

-   -   -   Faturar Parcial por Valor - Movimento
        -   Faturar Parcial por Valor - Item

Etapa Vinculações

Campo Faturamento / Recebimento Parcial por Valor

-   -   -   Valor Utilizado Movimento (Valor Bruto, Valor do Documento, Valor Sub-Total)

        -   Valor Utilizado Item Movimento (Valor Bruto Item, Valor opcional 1, Valor opcional 2, Valor Total, Valor Rateio)

Observação:

Os campos de VALOROPFRM1, VALOROPFRM2 e RATEIOCCUSTODEPTO só irão aparecer na lista quando estiverem parametrizados no tipo de movimento.



Etapa Item - Preços

Campo Edição do Preço, deve estar obrigatoriamente como Edita.



**Regras de Integridade**

Movimento de Origem:

 \- Faturamento por valor não pode agrupar movimento

\- Não fatura movimento origem de transferência

\- O tipo de movimento origem não pode afetar estoque

\- O tipo de movimento não pode agrupar itens repetidos no faturamento.

\- O tipo de movimento precisa editar preço

\- O tipo de movimento precisa estar parametrizado para baixar movimento e sem confirmar baixa


Movimento de destino:

 \- O tipo de movimento precisa editar preço 

\- Esta parametrizado qual valor será usado para o faturamento por movimento e por item de movimento.

\- O tipo de movimento não poderá utilizar as opções "Usar para Quantidade" ou "Usar para Quantidade e Preço" para o campo "Tolerância" existente na etapa "Mov - Outros Dados" 



# Exemplo do Processo

Neste exemplo, usamos um item de movimento com o valor de R$900. O movimento já gerou um movimento de nf, onde esse faturamento foi feito parcial. No caso, foi faturado apenas R$500,00 como pode ser visto nos prints abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239012361/image2016-6-3%2014%3A33%3A30.png?version=1&modificationDate=1464979901000&api=v2)

Quando o tipo de faturamento parcial por valor for por Item, na tela de item de movimento será apresentado dois novos campos. São eles Valor Recebido e Valor a Receber:



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239012361/Capturar.PNG?version=1&modificationDate=1464981470000&api=v2)

Quando o tipo de faturamento parcial por valor for por Movimento, na aba Valores do movimento, será apresentado dois novos campo. São eles Valor Recebido e Valor a Receber.



Como pode ser visto, o movimento apresentou no campo "A Receber" o valor pendente de R$400,00.





**Conclusão**

Ao concluir um pedido que esteja como Parcialmente Recebido, será habilitado mais um campo na tela de Item ou Movimento. O campo é o Valor Concluído.



Item Concluído

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239012361/itemconcluido.PNG?version=1&modificationDate=1464979903000&api=v2)




Movimento Concluído

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239012361/image2016-6-3%2017%3A16%3A8.png?version=1&modificationDate=1464981539000&api=v2)









**Observações:**

Para mais informações:





 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)



**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
