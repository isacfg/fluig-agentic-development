# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Processo de Cotação (Compras)

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012581821-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Processo-de-Cota%C3%A7%C3%A3o-Compras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012581821-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Processo-de-Cota%C3%A7%C3%A3o-Compras)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:28

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:10:00 min****Dúvida
**O processo de compras indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A **Cotação** é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. **Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**O processo inicia-se na criação de uma Solicitação de Compra onde é gerado um Movimento do tipo 1.1.xx onde são solicitados os produtos que a empresa precisa comprar. Após a criação do Movimento de Solicitação é iniciada então a Cotação, onde a relação dos produtos será enviada para determinados Fornecedores que darão a resposta do orçamento. É utilizado então o Quadro Comparativo para que seja definido qual é a compra que será mais benéfica para a empresa. Após o cálculo do Quadro Comparativo, temos o vencedor da Cotação. A partir desse momento geramos a Ordem de Compra num outro Movimento do tipo 1.1.xx. Este parametrizado para ser um **Pedido de compra** que posteriormente dará origem ao Movimento final de compras do tipo 1.2.xx.

Para trabalhar com Cotação, devemos ter as seguintes parametrizações nos Tipos de Movimento:

**1\. Movimento de Solicitação de Compra
**Movimento do tipo 1.1.xx de Solicitação de Compra deverá ser parametrizado da seguinte forma:

**Etapa Compra/Venda – Características
**Gera movimento de compra: habilitar
Movimento Gerado (defaut): informar um tipo de movimento parametrizado como Pedido de Compra

**Etapa Compra/Venda – Outros Dados
**Tipo do Movimento de Compra: marcar Solicitação de Compras

**2\. Movimento de Ordem de Compras
**Movimento do tipo 1.1.xx de Ordem de Compra deverá ser parametrizado da seguinte forma:

**Etapa Mov - Identificação**
Edita Numeração: mostra

**Etapa Compra/Venda – Características**
Gera Movimento de Compra: habilitar

**Etapa Compra/Venda – Outros Dados**
Tipo do Movimento de Compra: marcar Pedido de Compra

**3\. Dados Iniciais da Cotação**

Devem ser preenchidos os campos **Data da Cotação, Limite de resposta, Moeda, Funcionário responsável, coligada(s), filial(s) e tipo de movimento(s)** que farão parte da cotação.
***Observação***: A data de Limite de resposta não pode ser inferior a data da cotação. Não é permitido avançar etapa sem que todos os campos citados em negrito acima estejam sem preenchimento.

![Screenshot_31.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410008306199/Screenshot_31.png)

**3.1 Filtro de Produto
**Ao avançar etapa temos que filtrar e selecionar os itens que serão cotados. Através do filtro é possível buscar todos os itens pendentes das filiais selecionadas na etapa anterior para fazerem parte da cotação.

![Screenshot_32.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410017403799/Screenshot_32.png)

Os campos **Cód. Marca** e **Marca Solicitada** serão exibidos quando o parâmetro **[Usar Marca de Produto na Cotação](https://tdn.totvs.com/pages/viewpage.action?pageId=423938121)** estiver habilitado. Estes campos exibirão o código e descrição da marca informados no item do movimento de solicitação de compras.
Quando não for informado marca no item da solicitação de compras, será exibida a marca default informada no cadastro de produto. Estes campos são apenas para visualização.
Através do campo **Permite Fornecedor Trocar Marca** será possível definir se o fornecedor poderá ou não fazer a troca de marca do produto na cotação no caso em que o orçamento/negociação for enviado para o fornecedor através de **planilha de exportação**. Este campo será exibido quando o perfil do usuário logado possuir permissão para Trocar Marca dos Produtos na Cotação e quando o parâmetro [Usar Marca de Produto na Cotação](https://tdn.totvs.com/pages/viewpage.action?pageId=423938121) estiver habilitado. Esta opção estará marcada por padrão, mas poderá ser desmarcada conforme opção do usuário, caso seja desmarcada, não será permitido ao fornecedor alterar a marca de um produto que está sendo solicitado no orçamento ou negociação.

![Screenshot_33.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410008385175/Screenshot_33.png)

**3.2 Escolha de Fornecedores
**Após a seleção dos produtos, selecionamos os fornecedores que irão participar do processo de cotação. Há possibilidade de filtrar os fornecedores através de vários campos, sendo que, o campo **CNPJ/CPF** é o default de filtro.
Conforme permissões de acesso do usuário é possível cadastrar e editar Fornecedores no momento da seleção dos Fornecedores que irão participar da Cotação.
Existe um limite máximo e mínimo de fornecedores para ser selecionado. Este limite é estabelecido nos parâmetros da cotação.

**3.3 Informações Gerais
**Com os fornecedores selecionados, avançamos para a última etapa do processo de inclusão da cotação onde preenchemos a **Condição de pagamento, Transportadora, Data Limite para Entrega da Mercadoria,** se na cotação será considerado crédito de **IPI** e **ICMS** no cálculo da melhor oferta e **Tipo de julgamento da melhor oferta** (este parametrizado ou não).
Após preenchimento dos dados, é apresentada uma última tela para finalização do assistente de inclusão da cotação. Nesta tela são apresentados os principais dados que foram preenchidos como a data de emissão, a data de limite de resposta, o comprador responsável, os tipos de movimentos de solicitação, filiais e coligadas que serão utilizados na cotação.

![Screenshot_34.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410008569239/Screenshot_34.png)

Para entendimento do processo de Cotação, [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=423938220).
