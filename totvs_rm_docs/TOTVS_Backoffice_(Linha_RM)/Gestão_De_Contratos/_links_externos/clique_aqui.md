# Gerar Contrato a partir do Pedido de Compras

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938166](https://tdn.totvs.com/pages/releaseview.action?pageId=423938166)
> **Domínio:** TDN (TOTVS Developer Network)

---

Esse processo gera contrato a partir de um pedido de compra criado através da cotação ou manualmente.

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Principais Campos e Parâmetros**

Para utilizar o recurso de Gerar Contrato é necessário habilitar a permissão Gerar Contrato para o tipo de movimento que irá executar o processo no anexo Permissão por Tipo de Movimento do cadastro de Usuários no Módulo de Serviços Globais.
Para atender as condições desse processo o tipo de movimento deve ser parametrizado da seguinte forma:

1.  O movimento deve ser do tipo 1.1.XX e estar parametrizado como Pedido de Compra na Etapa 49 - Compra/Venda – Outros Dados Tipo de movimento de Compra. 2) O tipo de movimento não poderá afetar estoque (nenhum saldo) na Etapa 39 - Estoque - Estoque 1/3
2.  Não poderá usar faturamento parcial por valor (nem por item nem por movimento)
3.  O parâmetro Gerar Contrato deverá ser marcado, Etapa 51 – Contratos e marcar a opção Gera Contrato. Esse parâmetro será responsável por habilitar no menu de Processos da visão do movimento o assistente de Geração de Contrato(s).

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Unidade de Medida**

Pelo fato do movimento de origem permitir itens iguais com unidades distintas ou mesmo agrupar itens de movimentos distintos com unidades diferentes em um mesmo item de contrato, é possível editar unidade de medida no item de contrato. Nesse caso foi criado o campo CODUND na tabela TITMCNT e realizada a alteração na rotina de faturamento para que o mesmo passe a considerar a unidade de medida do item de contrato na geração de movimentos.
Este campo não será preenchido com nenhum default vindo do cadastro do produto, será filtrado de acordo com a unidade base da unidade de controle do produto selecionado.
Não será possível alterar o campo CODUND caso o item de contrato seja do tipo medição e tenha alguma medição já faturada.
Durante o faturamento de um item de contrato serão feitas as mesmas consistências que já são realizadas pelo serviço do movimento.

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Procedimento**

Na visão do tipo de movimento parametrizado para Gerar Contrato selecione o movimento e execute o Processo Gerar Contrato.
A tela de Edição do Contrato é apresentada com todos os dados carregados do movimento, para que as informações pertinentes ao Contrato sejam informadas. Caso necessário, é possível agrupar os itens por Cliente/Fornecedor marcando a opção Agrupar por Cliente/Fornecedor no Assistente de Geração de Contratos. Ao salvar o contrato, o pedido de compras ficará "Recebido".
Será criado o relacionamento entre o movimento e o contrato gerado através da tabela TITMCNTMOVRELAC.
Esse relacionamento permitirá a rastreabilidade do movimento que deu origem ao contrato e vice-versa.
A visualização desse relacionamento acontece apenas através da tabela não existindo interface para consulta.

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Agrupamento por Fornecedores**

O processo Gerar Contrato agrupando os itens por Fornecedor, considera os dados de cada movimento.
Não apenas os dados no primeiro movimento computado, assim, a informação de cada movimento será copiada para cada item de contrato como por exemplo a condição de pagamento do movimento será copiada para cada item de contrato referente ao seu movimento de origem. Os campos que serão tratados nesse caso são:

-   Local de Estoque (CODLOC)
-   Condição de pagamento (CODCPG)
-   Representante (CODRPR)
-   Comissão do Representante (COMISSAOREPRES)
-   Município (CODMUNICIPIOSERV)
-   Estado (CODETDMUNSERV)
-   Natureza do Movimento(IDNATMOV)
-   Tipo de Frete (TIPOFRETE)
-   Comprador (CODVEN1)
-   Percentual de comissão do Comprador (PERCENTCOMISSAO).

Durante a geração do contrato o sistema verifica se o campo está preenchido no item de movimento e caso positivo o mesmo é copiado para o item de contrato, caso contrario (a informação não esta no item de movimento mas está no movimento) a informação é copiada do movimento de origem para o item de contrato correspondente.

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Cancelamento do Contrato Gerado por Ordem de Compra**

Ao efetuar o cancelamento de um contrato gerado por ordem de compra não será feita alteração no status do movimento de origem. Isso acontece pois o contrato pode ser "descancelado" e essa característica dificulta o tratamento do movimento de origem.
 
**Melhorias no Processo(a partir da versão 12.1.10)**

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Exclusão de Contrato Gerado a partir de um pedido**

É permitida a exclusão de um contrato criado a partir de um pedido de compras que ainda não sofreu nenhum faturamento.
O serviço de exclusão do contrato desfaz todas a(s) movimentações(s) de estoque e orçamento necessárias e o retorno do status do movimento para pendente.
No caso de exclusão de itens de contrato será realizado o tratamento para não permitir que os itens vinculados a pedidos de compra sejam excluídos.
**Orçamento**: Foram removidas as restrições de parametrização para o movimento que será utilizado para gerar contrato, com isto, também serão realizados os tratamentos necessários para que o a rotina de geração de contratos copie os dados do item de orçamento para os itens de contrato.
Ao gerar o contrato a partir de um pedido o orçamento do movimento em questão será desfeito, e só afetará no contrato se o usuário informar um tipo de contrato que afete o orçamento e faça os devidos ajustes no contrato para que isto ocorra.
Rastreabilidade de Contratos Gerados a partir de um pedido: Pela tela de rastreabilidade do movimento são apresentados os dados dos contratos gerados a partir do movimento através da guia Contrato.

****
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938166/image_preview.png?version=1&modificationDate=1549893821893&api=v2)
**Procedimento para Utilização**

Para gerar um contrato a partir de um pedido de compras o procedimento a seguir deve ser realizado:
1) Na visão do tipo de movimento parametrizado para Gerar Contrato selecione o movimento e execute o Processo Gerar Contrato. A tela de Edição do Contrato é apresentada com todos os dados carregados do movimento, para que as informações pertinentes ao Contrato sejam informadas.

1.  Caso necessário, é possível agrupar os itens por Cliente/Fornecedor marcando a opção Agrupar por Cliente/Fornecedor no Assistente de Geração de Contratos.
2.  Após a inclusão do contrato será criado o relacionamento entre o movimento e o contrato gerado através da tabela TITMCNTMOVRELAC. Esse relacionamento permitirá a rastreabilidade do movimento que deu origem ao contrato e vice-versa. A visualização desse relacionamento pode ser feita através da tela de Rastreamento do movimento acessando a aba Contrato.
3.  Ao salvar o contrato, o pedido de compras ficará "Recebido".

Maiores Informações

-   [Gerar Contrato a Partir de Pedido de Compra](https://tdn.totvs.com/display/LRM/DT_Gerar_Contrato_a_Partir_do_Pedido_de_Compras)
