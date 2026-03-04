# Relatório de Ficha Física Financeira

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938204](https://tdn.totvs.com/pages/releaseview.action?pageId=423938204)
> **Domínio:** TDN (TOTVS Developer Network)

---

É indispensavel a realização do processo **Regerar Saldos e Custos** no menu **Estoque | Processos**, antes de emitir a Ficha Fisica Financeira que alimenta a tabela TRELSLD. 

Mais detalhe em [clique aqui.](https://tdn.totvs.com/x/JMtEGQ)


Por esta opção, você emitirá o relatório de ficha física-financeira. Neste relatório você tem várias opções de filtro, selecionando os dados que serão impressos.
 
**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938204/image_preview.png?version=1&modificationDate=1550248776330&api=v2)
************Pasta Gerais**
Nesta pasta, informe os seguintes campos:

**Relatório:** selecione qual o relatório do Reports será utilizado. Neste campo são listados todos os relatórios que possuem o **Tipo** **21 - Ficha Física/Financeira.** Para que os relatórios sejam apresentados para seleção você deve importa-los para base de dados. Estes relatórios estão disponíveis no diretório de instalação TOTVS (\\CorporeRM\\ObjetosGerenciais\\Relatórios). São eles: **NUCREL00005 - Ficha Física Financeira** e **NUCREL00006 - Ficha Física Financeira - 4 Casas Decimais**

**Período:** informe o período inicial e final do qual o sistema deverá buscar as movimentações para emissão do relatório.

**Saldo:** selecione na lista de opções qual dos 10 saldos terá a ficha física financeira emitida.

**Imprimir apenas valores físicos:** marque esta opção para que, no caso de ter selecionado o saldo 2 (Saldo Atual), na ficha seja impresso somente o saldo físico. Deixe desmarcada para imprimir os saldos físico e financeiro.

**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938204/image_preview.png?version=1&modificationDate=1550248776330&api=v2)
************Movimentações**

No primeiro campo informe:
**Apenas Movimentados no Período**: selecionando esta opção, somente os produtos movimentados dentro do período indicado é que serão impressos na ficha.

**Apenas Mov. no período e não mov. no período com saldo anterior**: selecionando esta opção, somente os produtos movimentados dentro do período indicado e aqueles que, apesar de não terem movimentações, tem saldo anterior, é que serão impressos na ficha.

**Apenas mov. no período e não mov. no período com saldo anterior diferente de zero**: selecionando esta opção, serão apresentadas as movimentações do produto na ficha física financeira dentro do período indicado que apresentam saldo anterior diferente de zero.

**Apenas não movimentados no período**: somente serão impressos na ficha os produtos que não tiveram movimentações dentro do período indicado e que possuem saldo no dia de início do período definido. No segundo campo informe:

-   **Analítico:** emitirá a ficha física-financeira completa, ou seja, todas as movimentações uma a uma, dia a dia dentro do período informado.
-   **Sintético:** emitirá apenas os totais, indicando o total de entrada, total de saldo, entre outros, de acordo com o tipo de totalização indicada pelo usuário.

***Observação**:*

1.  Este filtro será aplicado aos produtos de acordo com as movimentações realizadas por Local de Estoque.

**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938204/image_preview.png?version=1&modificationDate=1550248776330&api=v2)
************Pasta Filial/Local**

Nesta pasta, informe o intervalo de filiais e o intervalo dos locais de estoque dos quais o sistema deverá selecionar as movimentações. Ao marcar a opção de Totalizar o sistema emite o total por filial e por local.
Totalizar Relatório: marque esta opção para que, ao final do relatório seja impresso o total do mesmo.

**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938204/image_preview.png?version=1&modificationDate=1550248776330&api=v2)
************Pasta Produto** 

Nesta pasta informe os dados dos produtos que serão emitidos no relatório. 
Código de Identificação do Produto: indique neste campo se a seleção dos produtos no intervalo será pelo código reduzido ou pelo código principal do produto.
Faixa de Produtos: informe o intervalo de produtos que o sistema deverá selecionar para impressão do relatório. 
***Observação**:*

1.  Se estiver indicado o código de apenas um produto, o sistema poderá regerar a ficha Física-Financeira deste produto, que tem a mesma função da opção, "Regerar somente Ficha Financeira" em Opções | Regerar Saldos e Custos.
2.  Caso o perfil do usuário possuir permissão para **Regerar a Ficha Física Financeira**, antes de iniciar a emissão do relatório, o sistema emitirá a seguinte mensagem:

"Será regerada a ficha física financeira referente ao saldo 2 da faixa de produtos XXX a XXX, mas outros usuários poderão estar modificando a posição de saldo dos mesmos, tornando os dados do relatório inconsistentes. Este processo poderá ser demorado, proporcionalmente ao número de movimentações dos produtos. Confirmar regerar ficha física financeira antes de emitir o relatório?".
Deverá confirmar ou não a regerarão e lembrando que como a própria mensagem diz, podem ocorrer dados inconsistentes se alguém estiver fazendo movimentações ou alterações deste produto no mesmo momento em que está emitindo o relatório.

Permissão de segurança específica para Regerar a Ficha Física Financeira

Criação de permissão de segurança específica para Regerar a Ficha Física Financeira a partir do Relatório de Ficha Física Financeira. Também será possível Regerar a Ficha Física Financeira de todos os produtos do filtro aplicado ao relatório.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/423938204/image2018-2-9_17-41-51.png?version=1&modificationDate=1764618887643&api=v2)


**************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938204/image_preview.png?version=1&modificationDate=1550248776330&api=v2)
************Grade Numerada**

Selecione da lista de opções:
**Não Imprimir**: selecione esta opção para que não sejam impressas as movimentações de grade, caso o produto utilize o controle de grade.

**Imprimir**: caso algum produto tenha movimentação de grade, esta também será emitida no relatório.

**Imprimir apenas Grade**: selecione esta opção para que somente as movimentações por grade sejam impressas no relatório.

**Totaliza por Produto:** marcando esta opção, o sistema emitirá o total de cada um dos produtos impressos no relatório.

**Apenas Produtos Ativos:** marque esta opção para que, dentro do intervalo de produtos informado, se existir algum produto inativo este não seja visualizado no relatório.

**Definir Quebra por Código Principal do Produto:** Marcando esta opção, o sistema imprimirá no relatório o início de cada quebra, para isso informe no campo seguinte qual a quebra desejada. Utilize pontos de interrogação (????) para definir esta quebra. Exemplo*:*
1 - Vamos supor que tem os seguintes códigos de produtos cadastrados:
1
1.1
1.1.01
1.1.02
1.1.03
1.2
1.2.01
1.2.02
1.2.03
2
2.1
2.1.01
2.1.02
2.2
2.2.01
2.2.02
3
3.1
3.1.01
3.1.02
3.1.03
Se informar: ???, o sistema informará a quebra para os produtos 1.1, 1.2, 2.1, 2.2 e 3.1.Se informar: ?, o sistema emitirá a quebra para os produtos 1, 2 e 3.
2 - Vamos supor que tem os seguintes códigos de produtos cadastrados:
000111000
000111001
000111002
000122001
000122002
000122003
000232001
000232002
000232004
Se informar: ????, o sistema informará a quebra para os produtos 0001... e 0002... Se informar: ?????, o sistema informará a quebra para os produtos 00011..., 000012... e 00023...

**Totalizar por Quebra**: marcando esta opção, o sistema emitirá o total a cada mudança de quebra de produto, de acordo com a informada no campo acima.
***Observações***: Para produtos controlados por PEPS/UEPS é necessário regerar saldos e custos antes de visualizar a ficha física-financeira.
A visualização sem regerar saldos e custos torna os dados do relatório inconsistentes.
No caso específico de movimentos de transferência, há um tratamento diferenciado.
O processo de movimentações de transferência é realizado através de um único movimento que gera duas movimentações de estoque: uma saída do local de estoque de origem e uma entrada no local de estoque destino quando afeta o Saldo Físico.
Esta informação de movimentação é única, mas na ficha física-financeira aparece em dois pontos: no local onde houve a entrada e no local da saída.
Como se trata de uma única movimentação, esta informação na ficha terá a mesma ordem em ambos os locais de estoque, independente de se tratar de uma entrada ou saída para o local específico.
Como no tratamento de estoque do movimento de transferência primeiro realizamos a saída para depois realizar a entrada, na ficha a ordem seguirá este critério.
Havendo várias transferências, estas serão ordenadas pelo identificador do movimento.
Assim, o relatório de ficha física financeira ficará coerente com as regras de gerenciamento de estoque.



Documentos Relacionados

[Roteiro para configuração dos Custos PEPS e UEPS](/pages/viewpage.action?pageId=592759839)
