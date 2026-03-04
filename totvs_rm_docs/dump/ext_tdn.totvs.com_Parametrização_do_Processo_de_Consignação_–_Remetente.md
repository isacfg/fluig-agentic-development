# Parametrização do Processo de Consignação – Remetente

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=89621574](https://tdn.totvs.com/pages/releaseview.action?pageId=89621574)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto**

**:**

TOTVS Gestão de Estoque Compras e Faturamento                       **Versão:** 11.52 e posteriores                                                              

**Processo**

**:**

Estoque DE/COM Terceiros

**Subprocesso**

**:**

Estoque com Terceiros – Parametrização do Processo de Consignação – Remetente

**Data da publicação**

**:**

22/10/2013

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/89621574/Imagem%201.png?version=1&modificationDate=1382476703000&api=v2&effects=drop-shadow)

##### Parametrização dos tipos de movimento

\>>> Deverão ser criados quatro tipos de movimentos, sendo um para a Remessa da Mercadoria para Consignação, outro para o Retorno Simbólico da Mercadoria Vendida pelo Consignatário, outro para a Venda da Mercadoria  Consignada e por último para lançar o Retorno da Mercadoria Consignada e não Comercializada.

###### Documento explicando sobre o processo de industrialização: [Demonstração Processo de Consignação – Remetente](/pages/viewpage.action?pageId=89621662)

###### Tipo de movimento - Remessa para consignação

Etapa "Estoque/Estoque 1/3" - "Não alterar" para todos os saldos.

Etapa "Estoque/Estoque 2/3" - Remessa/Entrada para consignação e aumenta o saldo com terceiros.

\- Controle Saldo Terceiros: Remessa/Entrada para Consignação

\- Efeito sobre o saldo com Terceiros: Aumenta

> Integração Contábil - Parametrizar de acordo com as obrigações contábeis da empresa.
> Integração Financeira - Parametrizar de acordo com regras financeiras da empresa.
> Integração Fiscal - Parametrizar de acordo com as obrigações legais da operação.

######

###### Tipo de movimento - Retorno Simbólico Mercadoria Vendida pelo Consignatário

Etapa "Mov - Outros Dados" - Usar cópia por referencia motivo 13.

\- Usar Cópia de Movimento por referência: Marcar

\- Motivo de Referência: 13 - Devolução Simbólica de Mercadoria em Consignação

Etapa "Item - Identificação 1/2" - Tipo de itens Produto.

\- Tipo de Itens: Produtos

Etapa "Item - Identificação 2/2" - Permite item repetido habilitado

\- Permitir Item Repetido: Marcado

> Necessário porque se a mercadoria devolvida simbolicamente tiver saído da empresa consignadora em mais de uma nota fiscal, o sistema irá criar um item relacionado para cada nota fiscal de remessa.

Etapa "Estoque - Estoque 1/3" - "Não altera" para todos os saldos.

\- Controle Saldo Terceiros: Não Controla

\- Efeito sobre o Saldo com terceiros: Diminui

> Integração Contábil Parametrizar de acordo com as obrigações contábeis da empresa
> Integração Financeira Parametrizar de acordo com regras financeiras da empresa
> Integração Fiscal Parametrizar de acordo com as obrigações legais da operação

######

###### Tipo de movimento - Venda de Mercadoria Consignada

Etapa "Mov - Outros Dados" - Usar cópia por referencia motivo 14.

\- Usar Cópia de Movimento por referência: Marcar

\- Motivo de Referência: 14 - Venda Mercadoria Consignada - Estoque Terceiros

Etapa "Item - Identificação 1/2" - Tipo de itens Produto.

\- Tipo de Itens: Produtos

> Necessário porque se a mercadoria vendida pelo consignatário tiver retornado simbolicamente em mais de uma nota fiscal, o sistema irá criar um item relacionado a cada nota fiscal de retorno simbólico

 Etapa "Item - Identificação 2/2" - Permite item repetido habilitado

\- Permitir Item Repetido: Marcado

> Observação: Esse será o movimento de venda da mercadoria consignada.

Etapa "Estoque/Estoque 1/3" - "Diminui" para saldo Atual.

\- 2- Saldo Atual: Diminui

 Etapa "Estoque/Estoque 2/3" - "Diminui" para saldo Financeiro.

\- Efeito sobre o Saldo Atual: Diminui

> Observação: Sugerimos que o controle do estoque físico/financeiro (saldo 2) das mercadorias vendidas em consignação seja realizado neste movimento.
>
> Integração Contábil Parametrizar de acordo com as obrigações contábeis da empresa
> Integração Financeira Parametrizar de acordo com regras financeiras da empresa
> Integração Fiscal Parametrizar de acordo com as obrigações legais da operação

######

###### Tipo de movimento - Retorno Mercadoria Consignada não Comercializada

Etapa "Mov - Outros Dados" - Usar cópia por referencia motivo 15.

\- Usar Cópia de Movimento por referência: Marcar

\- Motivo de Referência: 15 - Devolução Mercadoria Consignada não comercializada

Etapa "Item - Identificação 1/2" - Tipo de itens Produto.

\- Tipo de Itens: Produtos

Etapa "Item - Identificação 2/2" - Permite item repetido habilitado

\- Permitir Item Repetido: Marcado

> Necessário porque se a mercadoria devolvida tiver saído da empresa consignadora em mais de uma nota fiscal, o sistema irá criar um item relacionado para cada nota fiscal de remessa

Etapa "Estoque/Estoque 2/3" - Diminui o saldo com terceiros.

\- Controle Saldo Terceiros: Não Controla

\- Efeito sobre o saldo com Terceiros: Diminui

> Integração Contábil Parametrizar de acordo com as obrigações contábeis da empresa
> Integração Financeira Parametrizar de acordo com regras financeiras da empresa
> Integração Fiscal Parametrizar de acordo com as obrigações legais da operação.
