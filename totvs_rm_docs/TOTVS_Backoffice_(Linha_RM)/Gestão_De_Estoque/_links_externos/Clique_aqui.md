# Processo Produtivo Simples

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples](https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples)
> **Domínio:** TDN (TOTVS Developer Network)

---





FAQ: **Processo Produtivo Simples**

Avaliação

-   **Introdução**

A criação do Processo Produtivo Simples, no RM Nucleus foi criado para ser um facilitador do controle de produção simples, sem a necessidade de utilizar o RM Factor. Para a utilização deste processo é necessário alguns cadastros e procedimentos como a criação da Estrutura, Atividade, Componentes, movimentos de Ordem de Produção, Baixa de Matéria Prima e a Entrada do Produto Acabado.

Solução

-   ***Desenvolvimento/Procedimento***

*1\.* *Parametrização do Tipo de Movimento*

*1.1.* *Movimento de Ordem de Produção (Pedido de Venda)*

As principais parametrizações deste tipo de movimento são:

-   Etapa Produção: Opção de “Gerar Ordem de Produção no RM Factor” marcado.
-   Etapa – Compra/Vendas – Características: Caso deseje faturar este tipo de movimento para o de Baixa de Matéria Prima e depois o faturamento o mesmo pedido para um de faturamento (Nota Fiscal de Venda), recomenda-se que seja definido no parâmetro *Baixar pedido de compra/venda após Geração de Movimento* diferente de “Baixar Sempre” e “Não Baixar”, pois assim o status do movimento de Pedido será baixado apenas no segundo faturamento, ou seja, faturamento da nota fiscal de venda, no qual teve seus itens já baixados de estoque no primeiro faturamento.

OBS: Descrição das opções disponíveis no parâmetro *Baixar pedido de compra/venda após Geração de Movimento.*

\- Não Baixa: após a geração do movimento, o pedido não será baixado.

\- Baixa sempre: após a geração do movimento, o pedido será baixado automaticamente.

\- Baixa para movimento default: após a geração do movimento, o pedido só será baixado se o movimento gerado for o informado no campo “Movimento Gerado Default”.

\- Baixa para grupo de movimento: o pedido só será baixado se o movimento gerado fizer parte do grupo do movimento default.

Exemplo:

\- O grupo de movimento está relacionado à classe do tipo de movimento.

\- Movimento de Compras: Pedido de Compras, Movimento de Compras.

\- Movimento de Vendas: 2.1 - Pedido de Venda, 2.2 - Movimento de Venda

As demais parametrizações para o Tipo de Movimento não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente.

*1.2.* *Baixa de Matéria Prima*

As principais parametrizações deste tipo de movimento são:

-   Etapa Movimento – Emitente e Destinatário 1/2: Emitente como “Empresa”, destinatário como “Empresa”, edição do local de destino como “Não Edita”;
-   Etapa Estoque: Saldo Atual, como “Diminui”;
-   Etapa Produção: Opção de “Baixa de Matéria Prima à partir do no RM Factor” marcado.

O movimento de Baixa de Matéria-Prima, pode ser apenas do Tipo de Movimento 2.2.XX. Este movimento será criado com os componentes da estrutura, criado durante o faturamento do movimento “Ordem de Produção (Pedido de Venda)” que contem a estrutura.

As demais parametrizações para o Tipo de Movimento não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente.

*1.3.* *Entrada do Produto Acabado*

As principais parametrizações do Movimento são:

-   Etapa Movimento – Emitente e Destinatário: Emitente como “Empresa”, destinatário como “Empresa”, edição do local de destino como “Não Edita”;
-   Etapa Movimentos – Outros Dados: “Usar Motivo por Referência” marcado e o “Motivo de Referência” igual a “Produção”.
-   Etapa Estoque – Estoque 1/2: Saldo Atual, como “Aumenta”;

As demais parametrizações para o Tipo de Movimento não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente.

*2\.* *Cadastro das Tabelas do processo Produtivo Simples*

O acesso as Tabelas de Produção é feito pelo menu Cadastros / Tabelas de Produção.

Tabelas

*2.1.* *Produto*

Neste cadastro deverão ser criados os produtos que farão parte da Estrutura bem como seus componentes que posteriormente serão amarrados as tabelas de Atividade, Estrutura e Componentes. Exemplo: Montar Tampa de caneta, Caneta, Tampa da caneta, tinta da caneta.

*2.2.* *Atividades*

Neste cadastro deverão ser informados os campos necessários para o cadastramento de uma “Atividade” que deverá ser executada para a fabricação de uma estrutura.

Exemplo: Montar Tampa de caneta, inserir tinta da caneta, colocar mesa de vidro, montar pés da mesa, contar madeira dos pés da cama, montar estrado da cama, etc.

*2.3.* *Estrutura*

É um conjunto de um ou mais componentes, alem de uma atividade que irão dar origem a um produto final que pode ser um produto acabado ou semi-acabado. Para melhor entendimento, podemos dizer que a estrutura seria a Receita de um Bolo de Chocolate, no qual seus componentes seriam o leite, o ovo, fermento, chocolate, e suas atividades seriam misturar os ingredientes, colocar no forno, fazer a cobertura.

Exemplo: Caneta, Mesa de Vidro, Cama de Casal, etc.

*2.4.* *Componentes*

Nesta janela deverão ser informados os campos necessários para o cadastro dos componentes.

Exemplo: Tampa da caneta, tinta da caneta, estrado da cama, parafusos da cama, vidro da mesa, suporte do pé da mesa.

-   *Descrição do processo Produtivo Simples:*

\- Inserir um movimento do tipo 2.1.XX – Ordem de Produção (Pedido de Venda) e incluir com o produto cadastrado como Estrutura, exemplo: Caneta.

\- Realize o faturamento do movimento do tipo 2.1.XX – Ordem de Produção (Pedido de Venda) para o movimento de Baixa de Matéria-Prima.

OBS: Caso deseje faturar o movimento 2.1.XX – Ordem de Produção (Pedido de Venda) para Baixa de Matéria Prima e depois o faturamento o mesmo movimento para um de faturamento (Nota Fiscal de Venda), recomenda-se que parametrize o tipo de movimento no parâmetro *Baixar pedido de compra após Geração de Movimento* diferente de “Baixar Sempre” e “Não Baixar”, pois assim o status do movimento de Pedido será baixado apenas no segundo faturamento, ou seja, faturamento da nota fiscal de venda, no qual teve seus itens já baixados de estoque no primeiro faturamento.

\- O movimento do tipo “Entrada de Produto Acabado” será gerado através de cópia por referência (menu “Movimentos | Gerar Mov. Por Referência”), terá como origem o movimento de “Ordem de Produção” e conterá o produto da Estrutura como item.

-   *Procedimento:*

[
![clip_image002](https://lh5.ggpht.com/_G7KXZLoZDsY/TKoiHHpKkFI/AAAAAAAABjo/mL3onik7m8E/clip_image002_thumb.gif?imgmax=800)
](https://lh6.ggpht.com/_G7KXZLoZDsY/TKoiGdsCN8I/AAAAAAAABjk/g1ZUvyMdIeQ/s1600-h/clip_image002%5B3%5D.gif)

1\. Acesse o menu Movimentos / Vendas/Faturamentos;

2\. Selecione o tipo de movimento de Ordem de Produção;

3\. Selecione a filial a ser utilizada

4\. Selecione ou cria um filtro, e em seguida execute o filtro;

5\. Clique no botão “Novo”;

6\. Inclua um item de movimento com produto amarrado a Estrutura do RM Factor;

7\. As demais parametrizações para o movimento de Ordem de Produção não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente.

8\. Clique no botão “Salvar”;

9\. Na Grid de Movimento selecione o movimento e clique no botão “Faturar Descrição do tipo de movimento utilizado de Ordem de Produção” ou então no menu Movimentos / Faturar Pedido;

10\. Será apresentada uma janela, para se escolher o tipo de movimento que será criado apartir da Ordem de Produção. Lembrando que esta janela poderá ser apresentada ou não dependendo da parametrização do tipo de movimento, menu Opções / Parâmetros / RM Nucleus / 04-06-04 – (Gestão de Compras – Ordem de Compra), Etapa – Compra/Vendas – Características;

11\. Selecione o tipo de movimento de Baixa de Matéria-Prima, clique no botão “OK”;

12\. Será apresentada a tela do movimento de Matéria-Prima com os itens de movimento dos componentes e das atividades da Estrutura informados no item de movimento de Ordem de Produção, ou seja, os produtos que compõem o produto Acabado do movimento de Ordem de Produção.

13\. Preencha os dados do movimento conforme definição da parametrização e clique no botão “OK”.

14\. Com o movimento de Ordem de Produção criado, agora se faz necessário dar entrada do Produto acabado, ou seja, o produto utilizado no movimento de Ordem de Produção;

15\. Acesse o Menu / Movimentos / Compras/Entradas;

16\. Selecione o tipo de movimento de Entrada de Produto Acabado;

17\. Selecione a filial a ser utilizada

18\. Selecione ou cria um filtro, e em seguida execute o filtro;

19\. Acesse o Menu Movimentos / Gerar Mov. Por Referência;

20\. Será apresentado um assistente chamado “Assistente para Cópia de Movimentos”;

21\. Clique no botão “Avançar”;

22\. Será apresentada na janela do assistente a opção para filtrar os movimentos que serão devolvidos;

23\. Filtre o movimento que de Ordem de Produção;

24\. Selecione o movimento na grid;

25\. Clique no botão “Avançar”;

26\. Será apresentada na janela do assistente os itens dos movimentos selecionados;

27\. Selecione os itens da Ordem de Produção que serão utilizados para dar entrada no estoque;

28\. Clique no botão “Avançar” e depois em “Terminar”;

29\. Será apresentada a tela do movimento de Entrada de Produto Acabado com os dados do movimento utilizado na copia, no caso o movimento de Ordem de Produção;

30\. Clique no botão “OK” para salvar o movimento;

31\. Será apresentada uma tela de confirmação de inclusão;

32\. Clique no botão “Sim”;

33\. O movimento de Entrada de Produto Acabado estará criado.

-   **Informações Adicionais**

Este é o processo se baseia em processo produto produtivo simples, no qual existe a necessidade de criar uma ordem de produção, fazer a baixa do estoque das matérias primas para posterior produção do produto acabado e conseqüentemente a emissão de nota de venda para baixa do produto produzido (produto acabado)
