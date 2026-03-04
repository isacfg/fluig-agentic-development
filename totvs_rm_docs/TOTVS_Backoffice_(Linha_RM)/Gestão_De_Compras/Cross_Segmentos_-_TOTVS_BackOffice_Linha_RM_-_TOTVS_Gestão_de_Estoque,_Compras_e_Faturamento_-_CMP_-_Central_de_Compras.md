# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Central de Compras

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039896393-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Central-de-Compras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039896393-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Central-de-Compras)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:27

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:04:00min**

**Dúvida**Como funciona a Central de Compras?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**A **'Central de Compras'** é uma entidade na qual pode ser realizado o processo de **cotação / negociação** **da melhor oferta** para as compras de todas as **coligadas/filiais** cadastradas na base. Desde que corretamente parametrizada. Pode ser utilizada/parametrizada em qualquer coligada e tem a indicação das coligadas e filiais que irá atender. A empresa pode trabalhar com mais de uma 'Central de Compras', desde que em Coligadas diferentes. A Coligada que optar em trabalhar com 'Central de Compras', terá uma única parametrização para as cotações quando realizar o processo com mais de uma filial ou com filial de outra coligada. A 'Central de Compras' não trata diferenciadamente os parâmetros de cotação por coligada/filial. No entanto, para cotações locais em sua coligada, o comportamento continua sendo feito de forma geral ou por filial. Já a coligada que não trabalha com a 'Central de Compras' (para compras realizadas na própria coligada/filial solicitante do material – compras locais ou descentralizadas) continua tendo a parametrização diferenciada por coligada/filial.

**Parametrização:** Acessando **opções** | **Ambiente** | **Parâmetros** | **Gestão de Estoque, Compras e Faturamento** |  **04.06 - Gestão de Compras** |  **04.06.02 - Cotação** |  **Definições Gerais** **4/5,** definimos se a coligada é:

**Central de Compras:** Marcando esta opção, o usuário informa quais serão as coligadas e filiais que farão parte da central de compras. Desta forma, é possível solicitar e cotar produtos de outras coligadas para gerar sua cotação. Desde que a outra coligada esteja marcada na Central de compras e parametrizada como "Participa da Central de compras" ou que a outra coligada esteja marcada como "Central de compras", mas que a filial não esteja participando do processo de central de compras ainda. As ordens de compras serão quebradas por filiais e coligadas e a parametrização a ser respeitada para a cotação será a parametrização geral da coligada Central de Compras.
Em cotações na própria coligada para apenas uma filial da coligada corrente, a parametrização será respeitada de acordo com a filial.

**Participa da Central de compras:** É possível solicitar, cotar e gerar uma ordem de compras para esta coligada dentro da coligada parametrizada como Central de Compras. (desde que esta coligada e filial esteja marcada na coligada Central de Compras) Por esta coligada, é possível também solicitar, cotar e gerar ordens de compras normalmente, porém apenas para a própria coligada. Em cotações na própria coligada para apenas uma filial, a parametrização será respeitada de acordo com a filial. Se for selecionada mais de uma filial, o sistema respeita os parâmetros gerais da cotação na coligada.

**Não Participa da Central de compras:** Por esta coligada, é possível solicitar, cotar e gerar ordens de compras normalmente, porém apenas para a própria coligada. Não é possível informar esta em uma central de compras.
Para parametrizar uma Central de compras, é preciso que os cadastros de Condição de pagamento, Funcionário e Transportadora estejam idênticos tanto na coligada Central de Compras quanto na coligada(s) que participa da central de compras. É preciso também que o cadastro de produtos esteja parametrizado como global.

**Tabelas Globais:** Para parametrizar uma central de compras por completo, devemos selecionar além da coligada que é a própria central de compras, as coligadas que estão parametrizadas para participar da central de compras. Porém para que a parametrização seja aceita, é preciso que o cadastro de Transportadora, Condição de Pagamento e Funcionário estejam idênticos em todas as coligadas que fazem parte da central de compras. Caso contrário, um erro será apresentado no momento de finalizar a parametrização. Para fazer estas consistências, basta selecionar os registros das coligadas que irão participar da central de compras, e através do menu de Processos realizar a cópia entre coligadas. Ao realizar a replicação dos registros, é possível parametrizar a coligada central de compras e informar quais serão as coligadas e filiais participantes. Após realizar parametrização, qualquer alteração, exclusão ou edição dos cadastros de Transportadora, Condição de Pagamento e Funcionário em qualquer coligada que faz parte da Central de Compras irá replicar em todas as outras coligadas que também fazem parte da Central de Compras.   

**Assistente de inclusão da cotação:** Ao clicar no botão "Incluir" dentro da visão de cotação, é aberta então a interface de inclusão da cotação. Devem ser preenchidos os campos Data da Cotação, Limite de resposta, Moeda, Funcionário responsável, coligada(s), filial(s) e tipo de movimento(s) que farão parte da cotação. Como estamos trabalhando com uma central de compras, serão apresentadas as filiais e coligadas parametrizadas para fazerem parte desta central de compras. Ao avançar etapa temos que filtrar e selecionar os itens que serão cotados. Através do filtro é possível buscar todos os itens pendentes das filiais selecionadas na etapa anterior para fazerem parte da cotação. Após a seleção dos produtos, selecionamos os fornecedores que irão participar do processo de cotação. Com os fornecedores selecionados, avançamos para a última etapa do processo de inclusão da cotação onde preenchemos a Condição de pagamento, Transportadora, Data Limite para Entrega da Mercadoria, se na cotação será considerado crédito de IPI e ICMS no cálculo da melhor oferta e Tipo de julgamento da melhor oferta (este parametrizado ou não). Após preenchimento dos dados, é apresentada uma última tela para finalização do assistente de inclusão da cotação. Nesta tela são apresentados os principais dados que foram preenchidos como a data de emissão, a data de limite de resposta, o comprador responsável, os tipos de movimentos de solicitação, filiais e coligadas que serão utilizados na cotação.

**Veja abaixo um exemplo de uma empresa que trabalha com uma central de compras:**
![Imagem](https://tdn.totvs.com/download/attachments/423938256/worddavefe4e1e780a21e17abf8cccb308d930e.png?version=1&modificationDate=1539786574170&api=v2)

Em todas as coligadas, será possível fazer o processo de cotação local conforme era antes. As coligadas X e Z são centrais de compras, e nelas é possível realizar a cotação das coligadas que estão participando de sua Central de Compras. (Conforme indicação das setas) Veja que a filial 3 na coligada X faz parte da Central de Compras da coligada Z.
A coligada Y apenas participa da central de compras, então ela pode apenas ceder suas filiais para que elas façam parte de uma coligada central de compras. Veja que a filial 2 não participa de nenhuma central de compras. Logo ela realiza apenas cotações locais para a coligada Y. A coligada K não participa da central de compras, e suas filiais não podem ser parametrizadas em uma central de compras.

**Veja agora um exemplo de movimentação através da central de compras**

A coligada X que é uma central de compras irá realizar uma cotação de um produto A buscando uma solicitação da Filial 1 e 2 (coligada X), e uma solicitação da filial 1 (coligada Y).
Na solicitação de compras da coligada X, usaremos o tipo de movimento 1.1.01 que gera por deafult o tipo de movimento 1.1.03 para a filial 3.
Na solicitação de compras da coligada Y, usaremos o tipo de movimento 1.1.33 que gera por deafult o tipo de movimento 1.1.34 para a filial 1.

**Como funciona o processo**
![Imagem](https://tdn.totvs.com/download/attachments/423938256/worddav5f603c19ab2f22dc9b54819821ab7818.png?version=1&modificationDate=1539786574427&api=v2)
