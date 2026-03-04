# Identificação

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=461918521](https://tdn.totvs.com/pages/releaseview.action?pageId=461918521)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Código:** Neste campo, informe o código do tipo de movimento, este deverá ser de acordo com a máscara padrão dos tipos (#.#.##), lembrando que os movimentos do grupo do tipo 1.1 são ordens de compra, e do tipo 1.2 são compras, e o movimento do grupo 1.1 pode gerar um movimento no grupo 1.2. Os movimentos do grupo do tipo 2.1 são pedidos de venda, do tipo 2.2 são vendas, e do tipo 3.1 de transferência, o movimento do grupo 2.1 pode gerar um movimento no grupo 2.2 ou do grupo 3.1.

**Classificação:** Esse campo tem como objetivo o usuário poder classificar o tipo de movimento. Essas classificações serão valores fixos e poderá ser um dos seguintes abaixo:

-   Ajuste de Estoque;
-   Requisição de Materiais;
-   Baixa de Estoque;
-   Transferências;
-   Produção;
-   Controle EPI;
-   Solicitação de Compras;
-   Aprovação;
-   Ordem de Compra;
-   Recebimento de Materiais;
-   Importação;
-   Aquisição de Serviços;
-   Devolução de Compras;
-   Controle de Imobilizado;
-   Pedido de Venda;
-   Faturamento;
-   Exportação;
-   Devolução de Venda;
-   Outras Movimentações.

As seguintes regras de validação devem ser respeitadas:

-   O campo classificação é de preenchimento obrigatório.
-   Para as classificações abaixo haverá regras de validação, ou seja, só será possível salvar o Tipo de Movimento caso seja respeitado a regra de validação definida conforme abaixo:

**Ajuste de Estoque**: Tipo de Movimento do Grupo ‘4’.

**Transferência**: Tipo de Movimento do Grupo ‘3’.

**Produção**: Gerar Ordem de produção no TOTVS Planejamento e Controle da Produção (Produção).

**Controle EPI:**

-   Movimento Gera controles de EPI no RM diferente de “Não integrado” (Recursos Humanos).
-   Tipo de Movimento do grupo ‘1’ ou ‘2’.

**Solicitação Compras:**

-   Tipo de Movimento do Grupo ‘1.1’.
-   Tipo de Movimento de Compras igual ‘Solicitação de Compras’ (Compra/Venda – Outros).

**Aprovação**:

-   Usar Aprovação (Outros Dados).
-   Código Tipo Atendimento preenchido (WorkFlow).

**Ordem de Compra**: Tipo de Movimento de Compras igual ‘Pedido de de Compras’ (Compra/Venda – Outros). Para este tipo de movimento obrigatoriamente deverá ter uma fornecedor vinculado (Mov - Emitente\\Destinatário - Emitente: Fornecedor). 

**Devolução de Compras**:

-   Tipo de Movimento do Grupo ‘2.2’.
-   Saldo Atual igual ‘Diminui’ (Estoque – Estoque 1/3).
-   Motivo de Referencia igual ‘Devolução de Compras’ (Mov – Outros Dados).

Controle de imobilizado:

-   Tipo de Movimento do Grupo ‘1’ ou ‘2’ ou ‘3’.
-   Integrado TOTVS Gestão Patrimonial (Patrimônio).

**Devolução de Venda**:

-   Tipo de Movimento do Grupo ‘1.2’.
-   Saldo Atual igual ‘Aumenta’ (Estoque – Estoque 1/3).
-   Motivo de Referencia igual ‘Devolução de Venda’ (Mov – Outros Dados).

***Observação**:* Na conversão da base de dados para versão 10.70.0 haverá um script onde irá preencher automaticamente o campo “Classificação” de acordo com as regras escritas acima, caso o tipo de movimento não encaixe em nenhuma das regras então ele será classificado como “Outras Movimentações”.

**Nome:** Informe o nome para o tipo de movimento.

**Edita Numeração:**

-   • Edita: se o número do movimento, no momento da inclusão do mesmo deve ser digitado, não podendo ser repetido.
-   • Mostra: para que o campo seja automaticamente preenchido com o número subseqüente ao último utilizado dentro da série do movimento.
-   • Personalizado: para que o sistema numere automaticamente o movimento com o número interno (personalizado) do sistema, indicado no campo “Buscar Número em”.

***Observações**:*  

1.  Ao pesquisar informações na visão por número de movimento o sistema complementará com zeros a esquerda a informação digitada de acordo com a máscara parametrizada.
2.  Ao digitar a informação 1 o sistema pesquisará 000001 e caso encontre fará o posicionamento automático do registro na grid.
3.  O número personalizado é geralmente utilizado para movimentos do tipo pedido de compra (determinado através da pasta Integração Compras) e em seu número existem controles especiais, e está diretamente ligado com o módulo de cotações. Este tem a seguinte estrutura:

Ano.Classificação do Movimento.Código Cliente/Fornecedor.Seqüencial.Alteração, Exemplo*:*

1999.01.F00002.000.000 onde:

1999: É o ano da movimentação.

01: São os dois primeiros dígitos do código da tabela de Classificação do Movimento, informado no campo classificação, na pasta Observações no movimento.

Se a tabela estiver cadastrada com mais de 2 dígitos, ou seja, 0106, 0207, 0308…, e no campo “Classificação” estiver indicado 0207, o sistema buscará para o tipo da numeração apenas o 02.

F00002: É o código do fornecedor informado no movimento.

000: É o Seqüencial, isto é, mostrará o número sequencial do movimento para o fornecedor por ano.

***Exemplo**:*

Vamos supor que para o fornecedor F00002, já fizemos 05 movimentações no ano de 1999, desta forma, teríamos os seguintes números de movimentos para o mesmo:

1999.06.F00002.000.000.
1999.06.F00002.001.000.
1999.06.F00002.002.000.
1999.06.F00002.003.000.
1999.06.F00002.004.000.
1999.06.F00002.005.000.

000: É o número Alteração, que sempre será 000.

**Máscara do Número:** Informe qual a máscara para a numeração.

***Observações**:*

1.  Se houver integração com o TOTVS Gestão Fiscal, se a máscara informada for maior que 6 o sistema emitirá a seguinte mensagem: “Atenção: o tamanho do campo número do documento é superior a 6 dígitos”.
2.  Esse tamanho poderá acarretar problemas na geração das rotinas legais.
3.  Os aplicativos TOTVS Gestão de Estoques, Compras e Faturamento e TOTVS Gestão Fiscal não impedem que trabalhemos com número documento superior a 06 dígitos, porém há restrição no próprio Sintegra (Convênio 31/99) que determina que o campo número documento seja informado com 06 caracteres. Sendo assim, quando trabalhamos com número documento superior a 06 dígitos, ao gerar os lançamentos para Secretaria da Fazenda, os demais dígitos à esquerda serão desprezados.

**Buscar Número em**: Se a numeração for sequencial, informe onde o sistema deverá buscar o primeiro número da série, se na numeração informada na filial ou no geral.
***Observação***: O sistema busca o número inicial, se a opção para numeração for “Mostra” em “Opções/Parâmetros Gerais/Tabelas/Numeração do Movimento”, de acordo com os parâmetros em Número Principal que será o geral e Numeração por Filial.

**Editar Subsérie:** Marcando esta opção, o sistema habilitará mais um campo no movimento que se posicionará ao lado do campo série, para que informe a subsérie do mesmo.

Consiste Filial do Movimento: Marcando este parâmetro o sistema não permitirá movimentos com mesmo número e série de um mesmo cliente/fornecedor em filiais diferentes.
***Observação***: Este parâmetro pode afetar a performance na inclusão do movimento e em sua alteração.

**Criar com Status Não-Processados:**

-   Essa opção tem a finalidade de não permitir que movimentos afetem o estoque durante o período de orçamento.
-   Este parâmetro só aparecerá se houver integração entre TOTVS Gestão de Estoques, Compras e Faturamento x TOTVS Manutenção.
-   Marcando esta opção, o sistema habilitará na visão de movimentos o botão ‘Processa Grupo’.
-   Selecionando o movimento desejado e pressionando este botão, o sistema fará a baixa no estoque dos itens do mesmo, desde que esteja parametrizado para algum dos saldos “aumenta ou diminui” estoque e o seu status será alterado para “a faturar” ou “pendente”.

**Edição da Série:** Informe se o campo “série” no movimento deverá ser “editado”, ou seja, no momento da inclusão do movimento este campo será acessado e será possível escolher uma das séries para aquele movimento ou informe se este campo deverá apenas ser “mostrado”. Desta forma, não será permitido o acesso a ele que já será preenchido automaticamente com a série informada como série principal do campo “séries”, que será explicada abaixo.

**Séries:** Neste campo, pode-se informar as séries possíveis para cada tipo de movimento. A série pode ser utilizada como um simples diferenciador de numeração do movimento ou como uma indicação fiscal do mesmo. No 1º caso permite a utilização de numerações diferentes na inclusão de movimentos, ou seja, pode-se incluir um mov. 1.2.01 nº 000001 na série A e um movimento de mesmo número na série B. No caso do uso da série como indicação fiscal é preciso inicialmente ser observada a legislação fiscal em vigor, antes da utilização das mesmas na inclusão dos movimentos. Clique e escolha a série para o tipo de movimento. Na coluna “série principal” informe “sim” para a série que será a principal do tipo de movimento, e esta será a série default levada para o mesmo e se no campo anterior “edição de séries” estiver preenchido com “mostra”, a série indicada como principal será a transportada para o movimento.
