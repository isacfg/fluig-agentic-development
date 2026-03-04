# Fiscal (Parâmetros de Integrações)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938168](https://tdn.totvs.com/pages/releaseview.action?pageId=423938168)
> **Domínio:** TDN (TOTVS Developer Network)

---

-   [Natureza](#)
-   [Dados Fiscais](#)
-   [Escrituração Fiscal 1/2](#)
-   [Escrituração 2/2](#)
-   [Tributação](#)
-   [Nota Fiscal Eletrônica](#)

**Edição da Natureza:**

-   Edita: para ter acesso ao campo natureza no movimento;
-   Mostra: o campo aparecerá no movimento, porém, não poderá ser acessado;
-   Não edita: o campo natureza fiscal não será utilizado por este tipo.

**Natureza Fora do Estado:** Informe o código default da natureza de operação dentro do estado, e fora do estado. Desta forma, sempre que se fizer um movimento deste tipo, o campo natureza já será preenchido automaticamente

**2ª Natureza Fiscal:** Caso queira que o movimento tenha uma segunda natureza fiscal, informe "Edita" ou "Mostra" e se não quiser utilizar uma segunda natureza, informe "Não edita". Se desejar, informe uma natureza default para a 2ª natureza. Esta natureza aparece na janela de edição do movimento ao clicar o em "cabeçalho".

**Seleção Autom. por Natureza**:

-   Informe qual o tipo de seleção de naturezas o sistema deverá fazer:
-   Não Seleciona: O sistema não fará nenhuma seleção e o usuário deverá digitar a natureza do movimento.
-   Seleciona por Movimento: O sistema seleciona, de acordo com as regras de seleção de naturezas do TOTVS Gestão Fiscal, a(s) natureza(s) que melhor se adapta(m) ao movimento.
-   Seleciona por Item: O sistema seleciona a(s) natureza(s) para cada item do movimento, esta seleção também dependerá das regras determinadas no TOTVS Gestão Fiscal.

***Observações**:* Caso você tenha optado por utilizar também a segunda natureza, o sistema fará a seleção da natureza para cada item de acordo com ambas as naturezas escolhidas para o movimento, sendo que a primeira terá prioridade sobre a segunda. As situações são as seguintes:



1ª Natureza

2ª Natureza

Natureza Item

1ª Natureza

2ª Natureza

Natureza Item

Analítica           

Analítica

Tentará atribuir a 1ª e se não atender a 2ª, caso contrário dá uma mensagem de erro

Analítica           

Sintética           

Tentará atribuir a 1ª e buscará todas as analíticas a partir da 2ª.

Sintética           

Analítica

Tentará atribuir a 2ª e buscará todas as analíticas a partir da 1ª.

Sintética           

Sintética           

Faz a seleção de acordo com a natureza sintética da 1ª e da 2ª.

-   Para selecionar naturezas, é necessário que o campo "Edição da Natureza" esteja Edita ou Mostra.
-   Este campo só aparecerá se houver integração TOTVS Gestão de Estoques, Compras e Faturamento/TOTVS Gestão Fiscal.
-   Se você trabalha com integração TOTVS Gestão de Estoques, Compras e Faturamento/RM Líber , deve-se verificar a necessidade de confirmar a utilização da seleção da natureza por item caso exista em um mesmo movimento - Nota Fiscal de Entrada e ou Saída situações tributárias diferentes. Em caso afirmativo, na inclusão do movimento, o sistema irá apresentar e ou selecionar automaticamente (de acordo com as regras de seleção dada a Natureza), o campo "Natureza da Operação" para que se faça a relação entre o item e a sua Natureza Fiscal.
-   Na regra de seleção automática do sistema, naturezas de mesmo grau de dependência que atendem a determinada Nota Fiscal deverão ser escolhidas pelo usuário. O sistema irá apresentar a tela de Natureza e somente serão selecionadas no item do movimento, Naturezas do mesmo subgrupo da Natureza do movimento.
-   No momento da escrituração dos movimentos, ou seja, da exportação para o TOTVS Gestão Fiscal, o TOTVS Gestão de Estoques, Compras e Faturamento irá exportar parcelas fiscais tantas quantas as naturezas analíticas do item (natureza de último nível). Caso exista no mesmo movimento produtos de uma mesma natureza, esses serão agrupados para geração de uma mesma parcela fiscal. Se este parâmetro estiver desabilitado, a Natureza dos itens do movimento será igual a Natureza do movimento.

**Edita Cliente/Fornecedor Origem/Destino:** Marque este parâmetro se a NF é emitida para um cliente de um estado mas a entrega deve ser feita em outra empresa num estado diferente.
***Observação**:* Caso o parâmetro acima esteja habilitado ficará disponível na tela de movimentos. Pasta operação desta NF será consistida a partir do cliente/fornecedor informado nesta pasta e não a partir do cliente/fornecedor indicado como comprador da mercadoria na pasta Identificação.



**Desconsiderar Regra de Seleção de Natureza**

Caso queira desconsiderar a regra de seleção de Natureza de Operação, marque este parâmetro. 

-   Disponível apenas para movimento de entrada tipo 1.x.xx.
-   Localização do campo no movimento: [https://tdn.engpro.totvs.com.br/display/public/LRM/Fiscal](https://tdn.engpro.totvs.com.br/display/public/LRM/Fiscal)



**Buscar endereço em:**

-   Marque uma das opções: Principal, Pagamento, Entrega.
-   Marcando uma das opções acima, ao incluir o movimento, o endereço do cadastro do Cliente/Fornecedor será atualizado na tabela TFMOVCFO para garantir integridade dos dados no momento da inclusão da nota.

**Emite Cupom Fiscal:** Marque esta opção se para os movimentos deste tipo será emitido cupom fiscal.
***Observações******:*** O TOTVS Gestão de Estoques, Compras e Faturamento emite cupom para as impressoras fiscais de marca Bematech, modelos:

-   MP20-FI  (firmware 2.12)
-   MP20-FI2 (firmwares 3.00, 3.05 e 3.10)

Para emissão é necessário ter o módulo do TOTVS Gestão de Estoques, Compras e Faturamento específico de emissão de cupom fiscal.

**Usar CTRC:**

-   Não usar CTRC: Não será apresentado no tipo de movimento a pasta CTRC
-   Cadastra CTRC: Marcando esta opção o tipo de movimento será de Conhecimento de transporte.
-   Indica CTRC: Marcando esta opção será visualizado na pasta Cabeçalho dos tipos de movimento de Nota Fiscal, as notas de Conhecimento de transporte que deveram serem associadas.

***Observações**:*

-   A Nota Fiscal de Conhecimento de Transporte é levada pela transportadora junto as Notas Fiscais de Compra ou Venda de mercadorias. A unidade fiscalizadora pode utilizar a Nota Fiscal de Conhecimento de Transporte para verificar a veracidade das mercadorias descritas na Nota Fiscal e as Transportadas(descritas na NF de Conhecimento de Transporte).
-   Deverá parametrizar o movimento tipo Entrada para 'Usar CTRC', na inclusão deste Conhecimento de Transporte, será aberto uma pasta "CTRC" onde deverá informar os dados referentes a quantidade de Notas Fiscais e o valor total destas. Neste caso não é feito nenhuma consistência na base, visto que os mesmos são incluídos manualmente. 
-   Nos tipos de movimento de Notas Fiscais, deverá configurar para 'Indica CTRC'. Neste caso após a inclusão do movimento de Conhecimento de Transporte, deverá incluir as Notas Fiscais e associar o movimento que foi incluído como CTRC para estas notas. Neste caso haverá consistência de valores e quantidade destas notas.
-   O tipo de movimento configurado como Nota Fiscal deverá esta parametrizado o frete como FOB 'Free On Board', para que possa associar o movimento de CTRC.
-   Sendo a Nota Fiscal de Conhecimento de Transporte do tipo Venda pode-se associar através do filtros as notas fiscais de vendas disponíveis na base. e se existe Nota(s) Fiscal(is) na base para a associação deverá efetuar o clique no ícone "Associa Notas Fiscais". Será então aberto um filtro onde será possível selecionar qual(is) Nota(s) Fiscal(is) corresponderão a esta nota de Conhecimento de Transporte.

**Editar Código Situação Tributária (CST):** Ao marcar essa opção, será possível editar o campo CST – Código de Situação Tributária. Esse campo poderá ser utilizado se o usuário desejar editar a procedência da mercadoria no momento da impressão da nota fiscal.

**Controlar Dispositivos de Segurança:** Marcando esta opção em movimentos integrados com o TOTVS Gestão Fiscal será disponibilizado na pasta Cabeçalho na inclusão de movimento o campo "Dispositivo de Segurança". Neste deverá ser informado o nº do dispositivo de segurança da Receita (Este deverá ter sido inicialmente incluído no TOTVS Gestão Fiscal, pois os números dos formulários permitidos neste dispositivo serão consistidos ao salvar o movimento e também na Escrituração no TOTVS Gestão Fiscal.
***Observações**:*

-   A rotina de escrituração foi alterada para preencher automaticamente o campo AIDF (Autorização para impressão dos Documentos Fiscais) do Lançamento Fiscal.
-   Se não informar a AIDF no movimento, a rotina de escrituração irá verificar no Cadastro de AIDF do TOTVS Gestão Fiscal se existe uma que teve autorização anterior a data de emissão do documento.
-   Além disso, verifica se possui a mesma série do movimento que está sendo escriturado.
-   Verifica se o documento que está sendo escriturado está dentro da faixa de documentos da AIDF.
-   Se todas as condições anteriores foram válidas, o sistema atribui a AIDF ao Lançamento Fiscal.
-   Se existirem duas AIDFS que atendem as condições, a de autorização mais recente será a selecionada.

**Registrar Notas Fiscais de Terceiros:** Habilitando esta opção o Sistema disponibilizará no movimento uma pasta (NF Terceiros), onde poderá informará os dados referentes a nota fiscal de terceiros.

**Tipo:** Informe se os movimentos deste tipo serão de Entrada ou Saída.

**Editar Município por Item:**

-   Não edita: Não é possível editar o Município.
-   Edita: O Município fica disponível para alteração.
-   Mostra: O campo pode ser visualizado, mas não alterado.

**Editar Número do Pedido:** Esse parâmetro está disponível somente para movimentos do Tipo 1.X.XX e 2.X.XX.

-   Não edita: Não é possível editar Número do Pedido de Compra e Item do Pedido de Compra no Item do Movimento.
-   Edita: Os campos Número do Pedido de Compra e Item do Pedido de Compra são habilitados para edição na aba Integrações | Fiscal do Item do Movimento.
-   Mostra: Os campos Número do Pedido de Compra e Item do Pedido de Compra são habilitados para visualização na aba Integrações | Fiscal do Item do Movimento.

**Calcula ICMS-ST de saída com CST 60 com base na última entrada do Produto:**  Parâmetro para definir o calculo do ICMS-ST de saída com situação tributária = 60 (Tributação ICMS cobrado anteriormente por substituição tributária )

-   Não Aplica:  base de calculo x alíquota.
-   Aplica: Calcula o ICMS-ST de saída com CST 60 com base na última entrada do Produto.
-   Aplica com alíquota: Calcula o ICMS-ST de saída com CST 60 com base na última entrada do Produto, preenchendo o campo alíquota (pST).

Documentação auxiliar: [ICMS - CST 60/CSOSN500](/pages/viewpage.action?pageId=551435473) 



***Atenção!*** Quando na Etapa "Fis - Escrituração" do Tipo de Movimento está parametrizado o Tipo Documento Escrituração com um Tipo de Documento em que o Código do Modelo do Documento seja igual a 55, não é possível usar o parâmetro "Editar Número do Pedido" com a opção "Não Edita".

**Movimento de Remessa Simbólico (Exportação):** Parâmetro responsável por sinalizar que o movimento irá representar uma remessa simbólica no processo de exportação.

Critério de visibilidade

Tipo de Movimento do tipo 2.2.XX





**Gerar Escrituração:** Marcando este campo o movimento poderá gerar lançamentos fiscais para o sistema TOTVS Gestão Fiscal.
***Observação**:* Para que o campo Município esteja disponível no movimento para preenchimento, o campo Gerar Escrituração deve estar marcado e o Tipo de Produto na aba "Item Identificação" deve ser "Produto".

**Referência entre documentos:** Para movimentos relacionados, o SISIF exige um código de motivo definido na legislação.

**Código do Motivo:** Informe o Código do Motivo de Referência conforme a Tabela XI – Motivos de Referências entre Documentos Fiscais do Layout da rotina SISIF do estado do Ceará.

**Descrição para outros motivos:** Para códigos que necessitem de algum detalhamento, o mesmo poderá ser buscado em algum dos campos disponibilizados do TOTVS Gestão Fiscal.

**Tipo Documento Escrituração:** Informe o Código do Documento que será transportado para os lançamentos fiscais.
***Observação**:* Para que os movimentos deste tipo estejam integrados ao TOTVS Gestão Fiscal, é necessário que o campo "Cód. Doc. Fiscal" seja diferente de zero, pois, o TOTVS Gestão de Estoques, Compras e Faturamento entende que se o código for igual a zero, os movimentos não devem ser escriturados.

**Fórmulas de Cálculo do Valor Opcional do Lançamento:** Informe nestes campos as fórmulas para cálculo do valor opcional dos lançamentos fiscais. Na geração de lançamentos do TOTVS Gestão de Estoques, Compras e Faturamento para o TOTVS Gestão Fiscal estes campos serão carregados para os valores opcionais dos lançamentos (Pasta Campos Opcionais na tela de Manutenção de Lançamentos).

**Outros códigos:** Neste campo pode-se incluir vários tipos de documentos, que poderão ser utilizados nos lançamentos fiscais gerados por este Tipo de Movimento. Os mesmos serão visualizados na Pasta Cabeçalho do Tipo de Movimento.

**Tipo Lançamento Fiscal Transferência:** Informe: Entrada, Saída ou Ambos. Este parâmetro permite a operacionalidade do processo de Faturamento e Escrituração de Livros Fiscais quando se deseja efetuar a Saída Transferência de uma mercadoria de uma Filial X (dentro do Estado) para uma Filial Y (Fora do Estado) mantendo a mercadoria em um local de estoque transitório (intermediário) na Filial X (dentro do Estado) até que esta alcance o seu destino real. Neste processo é importante observar que teremos dois passos a seguir:

-    **1º Passo:**

-   Saída Transferência da Filial X - Local ZZ (local de estoque ORIGEM) para a Filial X - Local EE (local de estoque INTERMEDIÁRIO) com destino na Filial Y - Local KK
-   Neste primeiro passo o sistema deve gerar a nível de escrituração somente um lançamento fiscal de Saída referente a Transferência da Filial X para a Filial Y.
-   O parâmetro Tipo Lançamento Fiscal Transferência deve ser igual a SAÍDA.

-    **2º Passo:**

-   Saída Transferência da Filial X - Local EE (local INTERMEDIÁRIO) para a Filial Y (local DESTINO do estoque)
-   Neste segundo passo, o sistema deve gerar a nível de escrituração, um lançamento de Entrada Transferência na Filial Y já que o lançamento fiscal de Saída transferência já foi gerado no 1º passo.
-   O Parâmetro Tipo Lançamento Fiscal Transferência deve ser igual a ENTRADA.

Para se efetuar todo o processo de Saída Transferência, exemplificado acima, é preciso seguir os seguintes passos no sistema TOTVS Gestão Fiscal/Cadastros/Naturezas:

-   Incluir uma Natureza Fiscal de Entrada Transferência de dentro ou fora do Estado (de acordo com a necessidade da operação) 
-   Incluir uma Natureza Fiscal de Saída Transferência para dentro ou fora do Estado (de acordo com a necessidade da operação)
-   Relacionar na Natureza de Saída Transferência/Outros Dados - campo Nat. Inversa, a natureza de Entrada Transferência para a operação.

*Observações:*  É importante saber que o sistema irá utilizar a Natureza Inversa parametrizada na Natureza de Saída do movimento para geração automática do lançamento fiscal de Entrada na Empresa Destino da Saída e portanto as configurações fiscais das naturezas de Entrada e Saída devem ser equivalentes. No sistema TOTVS Gestão de Estoques, Compras e Faturamento, incluir dois tipos de movimentos do grupo (3 - Transferência) com as seguintes parametrizações:

-   Primeiro Tipo de Movimento - 3.1.XX
-   Na pasta Identificação/Emitente/Destinatário, utilizar os campos:
-   Emitente = Empresa
-   Edição do Local de Emissão = Edita
-   Destinatário = Empresa
-   Edição do Local de Destino = Edita
-   Nome do Local de Saída = Local de Entrada 
-   Edição do Local de Saída = Edita
-   Na pasta Identificação/Dados Fiscais, utilizar os campos:
-   Seleção Autom. Da Natureza = Selecionar por Movimento ou Selecionar por item (de acordo com a necessidade do cliente)
-   Tipo Lançamento Fiscal Transferência = SAÍDA
-   Na utilização dos campos "Local de Saída" e "Edição de Natureza" para o Tipo de movimento, o sistema irá desprezar a Filial Destino (tela de Identificação) do movimento e utilizar o Local de Saída (tela de Cabeçalho/Valores Financeiros) para a pré-seleção dos códigos de Naturezas válidas para o movimento, uma vez que o Local Destino do Movimento é apenas um Local Intermediário para o Estoque.
-   As demais parametrizações para o Tipo de Movimento não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente.
-   Segundo Tipo de Movimento - 3.1.YY
-   Na pasta Identificação/Emitente/Destinatário, utilizar os campos:
-   Emitente = Empresa
-   Edição do Local de Emissão = Edita
-   Destinatário = Empresa
-   Edição do Local de Destino = Edita
-   Nome do Local de Saída = " "
-   Edição do Local de Saída = Não Edita
-   Na pasta Identificação | Dados Fiscais, utilizar os campos:
-   Seleção Automática Da Natureza = Selecionar por Movimento ou Selecionar por item ( de acordo com a necessidade do cliente)
-   Tipo Lançamento Fiscal Transferência = ENTRADA
-   As demais parametrizações para o Tipo de Movimento não irão interferir no que se pretende explicar neste tópico e, portanto devem levar em consideração a necessidade de cada cliente.

Incluindo os movimentos:

-   **1º Passo**:

-   Inclusão do movimento 3.1.XX - Saída da Filial X - Local ZZ para a Filial X - Local EE com Entrega na Filial Y- Local Entrega KK
-   Neste movimento o estoque da mercadoria estará sendo transferido da Filial X , Local ZZ para a Filial X, Local EE e a NF de Saída será emitida e escriturada com o destinatário = Filial de Entrega Y, Local KK. (onde realmente a mercadoria terá o seu destino).
-   O Local de Estoque EE manterá a mercadoria em Estoque transitório até que esta chegue a seu destino.
-   Para esse tipo de movimento, com as parametrizações citadas acima, o sistema TOTVS Gestão de Estoques, Compras e Faturamento através do Módulo Opções/Escrituração de Lançamentos TOTVS Gestão Fiscal, estará gerando somente um lançamento fiscal de Saída da Filial X para a Filial Y.

Tela Identificação do Movimento:

-   Filial do Movimento = Filial X 
-   Local de Estoque do movimento = Local ZZ
-   Filial Destino do Movimento = X
-   Local de Destino do Movimento = EE
-   Tela Cabeçalho / Valores Financeiros do Movimento:
-   Filial de Entrega = Filial Y
-   Local Entrega = KK

-    2º Passo:

-   Inclusão do movimento 3.1.YY - Saída Transferência da Filial X - Local EE para Filial Y - Local KK
-   Neste movimento, o estoque da mercadoria estará sendo transferido da Filial X, Local EE para a Filial Y, Local KK (onde realmente a mercadoria terá o seu destino de entrada)
-   Para esse tipo de movimento, o sistema TOTVS Gestão de Estoques, Compras e Faturamento através do Módulo Opções/Escrituração de Lançamentos TOTVS Gestão Fiscal, estará gerando um lançamento fiscal de Entrada na Filial Y (utilizando a Natureza Fiscal configurada como Nat. Inversa para a Natureza do movimento) já que o lançamento fiscal de Saída Transferência já foi gerado no 1º passo. o Tela Identificação do Movimento:
-   Filial do Movimento = Filial X 
-   Local de Estoque do movimento = Local EE (Local transitório)
-   Filial Destino do Movimento = Y (Filial de real destino da mercadoria) 
-   Local de Destino do Movimento = KK

TOTVS Gestão Fiscal, é importante observar:

-   Tipo de Movimento = Saída
-   Filial = X
-   As demais informações devem respeitar a intenção de data e nº de documento a que se deseja escriturar.
-   Para escriturar o movimento 3.1.YY - Saída Transferência da Filial X - Local EE para Filial Y - Local KK
-   Tipo de Movimento = Entrada
-   Filial = Y

**Rateio na base de ICMS:** Este parâmetro quando habilitado, indicará que os valores de desconto, despesa, frete e/ou seguro serão rateados na fórmula de cálculo da base do ICMS. O ICMS pode estar no item ou no movimento e em ambos os casos este parâmetro deverá estar habilitado se estes valores comporem a Base de ICMS.

-   Exemplos*:* A fórmula para base de cálculo do ICMS do item sem o frete rateado, ou seja, se o parâmetro estiver desmarcado, pode ser: (KQT\*KPU). A fórmula para base de cálculo do ICMS do item com o frete rateado, ou seja, se o parâmetro estiver marcado, pode ser: (KQT\*KPU) + RATEIOVALORMOV(' VALORFRETE').

***Observações**:*

-   Para que esta fórmula tenha o resultado favorável o valor bruto deve ser (KQT \* KPU).
-   Caso a fórmula do valor bruto seja diferente da indicada acima, a fórmula de rateio deve ser: (KQT\*KPU) + (TABMOV('VALORFRETE') \* ((KQT\*KPU)/MVB) )
-   Se o item do movimento tiver o desconto parametrizado é necessário que o parâmetro 'afeta desconto do movimento' esteja desmarcado, pois caso contrário o rateio não poderá ser calculado.

-   Exemplo*:*

-   Parametrize o movimento para selecionar natureza por item e na pasta valores financeiros marque a opção "descontos".
-   Inclua um movimento com 2 itens, A natureza do movimento é 5.12 e o desconto informado na Pasta Cabeçalho/Valores Financeiros R$ 10,00. 
-   Item Qte Preço Natureza
-   1º 10 10 5.12.01
-   2º 2 10 5.74.01
-   Supondo que o Valor Bruto do movimento seja R$ 120,00, ao escriturar o movimento no TOTVS Gestão Fiscal deverá ser gerado 2 lançamentos fiscais. Um contendo os valores rateados para a 1ª Natureza e outro contendo os valores rateados para a 2ª Natureza. 
-   1º lançamento Qte\*Preço/Valor Bruto 10x10/120 = 0,8333 \*10( valor do desconto)= 8,33
-   2º Lançamento Qte\*Preço/Valor Bruto 2x\*10/120 = 0,1666 \*10 ( valor do desconto)=1,67

**Gerar histórico do movimento para lançamentos fiscais:** Marcando esta opção, o conteúdo do campo Histórico do movimento definido na pasta observações do mesmo, será copiado para o campo "Observações" na pasta outros dados do lançamento de entrada/saída gerado no momento da escrituração para o TOTVS Gestão Fiscal.
***Observação**:* Se o parâmetro Gerar histórico do movimento para lançamentos fiscais não estiver habilitado, mas no TOTVS Gestão Fiscal o parâmetro 'Inicializa observação' estiver habilitado, o sistema carrega o campo observação do Lançamento Fiscal, no momento da escrituração, com o Dispositivo Legal da Natureza.

**Considerar Base de Cálculo para ICMS como Reduzida:** Marcando esta opção, o sistema tratará a base de cálculo informada como base reduzida e guardará num novo campo a base de cálculo obtida através da fórmula de base de cálculo indicada no tributo, na pasta tributos do mesmo tipo de movimento. Portanto, a configuração deste campo determinará se os movimentos desse tipo irão receber redução manual na fórmula de Base de Cálculo dos impostos no momento da inclusão. Este parâmetro atenderá a escrituração de movimentos em que o percentual de redução para o cálculo dos impostos não é fixo pela natureza fiscal e sim por movimento.
*Exemplo:* 

-   Vamos supor que trabalha com base de cálculo reduzida para um determinado tipo de movimento, porém, esta não é fixa, desta forma, não será possível se trabalhar com um único percentual de base reduzida, informada na natureza fiscal do TOTVS Gestão Fiscal. Para se trabalhar com base reduzida de diferentes percentuais é necessário utilizar este recurso do sistema, porém, será necessário seguir as seguintes regras:
-   Na fórmula da base de cálculo do tributo não pode ser informado a variável de buscar o percentual de redução, pois o percentual de redução que será calculado pelo sistema é a diferença entre a base calculada pelo sistema e a base alterada pelo usuário no momento da inclusão do movimento.
-   Por ser obrigatória a alteração da base de cálculo manualmente é necessário que o parâmetro "Editar Base de Cálculo" na pasta Tributo, esteja marcado.
-   Sempre que se fizer uma movimentação dos tipos de movimentos com este parâmetro habilitado deve ter sempre a sua base de cálculo reduzida manualmente, diferenciando assim o valor gravado do valor calculado pela fórmula de base de cálculo indicada no tributo, caso contrário, o sistema tentará achar a base reduzida e não achará, provocando erro no momento da escrituração dos lançamentos fiscais.



Observação

Caso este parâmetro esteja desabilitado e há necessidade de Redução de Base de Cálculo dos impostos do movimento, o percentual de redução deve ser informado na Natureza e tratado através da fórmula de Base de cálculo do tributo. Caso contrário, o sistema irá apresentar erros de escrituração para os movimentos.



**Consistir Valores a Escriturar:** Marcando este parâmetro o sistema consistirá os valores dos tributos a escriturar no momento da inclusão do movimento pelo TOTVS Gestão de Estoques, Compras e Faturamento. O sistema emitirá mensagens de aviso e não permitirá a gravação do movimento se os valores de Base de Cálculo Alíquota e Valores dos Impostos, inseridos nos tributos do item e do movimento não estiverem coerentes com a natureza fiscal selecionada no movimento ou no item, dependo da parametrização do tipo de movimento.
***Observações**:* Se o tipo do ICMS / IPI da natureza selecionada para o movimento exigir valores de Base de Cálculo, Alíquota e Valor do imposto, como por exemplo o tipo 'NORMAL', o sistema não permitirá a gravação do movimento sem estas informações. Se o tipo do ICMS / IPI da natureza selecionada para o movimento não exigir o valor do imposto, ou seja, não terá débito/crédito do imposto, como por exemplo o tipo 'ISENTO', o sistema não permitirá a gravação do movimento sem que seja informado no mínimo, o valor da Base de Cálculo dos impostos.

-   [Regras Gerais](#)
-   [Item](#)
-   [Movimento](#)
-   [. . . : : : REFORMA TRIBUTÁRIA : : : . . .](#)

**Editar Tributação:** Marque este campo se a tributação poderá ser editada, ou seja, se no momento da inclusão, o campo referente à tributação poderá ser acessado, caso contrário deixe este desmarcado.

**Edita Base de Cálculo:** Marcando este campo o sistema calculará a base de cálculo dos tributos dos itens/movimento e permitirá a alteração do mesmo.

***Observações**:* 

Se o parâmetro Edita Base de Cálculo estiver desabilitado:

-   -   Sempre recalcula a base de cálculo e o valor dos tributos.
    -   Se alterar o valor do tributo e depois não alterar mais sua base de cálculo, ou seja, quantidades ou valores não recalcula o valor do tributo, fazendo com que o valor digitado pelo usuário não seja perdido.

Se o parâmetro Edita Base de Cálculo estiver habilitado:

-   -   Sempre calcula a base de cálculo e o valor dos tributos pela primeira vez.
    -   Se alterar a base de cálculo ou o valor do tributo, e depois disso alterar qualquer valor que venha a alterar a base de cálculo, o sistema perguntará se deseja recalcular a base de cálculo e o valor do tributos, se confirmar, o valor digitado pelo usuário é perdido, prevalecendo o novo cálculo do sistema.

**Tributo:** Clique na primeira linha da coluna "Tributo" e escolha o tributo para os itens.

**Alíquota:** Informe a alíquota do tributo.

**Código de Receita:** 

-   Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente o código da receita e alíquota através do menu Cadastro/Tabelas de Tributação/IRRF.  
-   Caso deseja, inclui um movimento para que o sistema retorne automaticamente o código da receita e a alíquota correspondente, deverá informa o código nesta mesma pasta. Se não informá-lo, o sistema irá buscar no cadastro do Cliente/Fornecedor da pasta Imposto/Tributos campo Código da Receita.

**Fórmula de Base de Cálculo:** Escolha a fórmula cadastrada em Cadastro/Fórmulas, que será a base de cálculo para o tributo.

**Achar Alíquota em:** Neste campo você indicará onde o sistema deverá buscar a alíquota se no Cadastro do Tributo/Identificação, no campo "buscar alíquota em" estiver indicado Tipo de Movimento. Ao inserir um movimento, são inseridos tributos de acordo com a parametrização do tipo de movimento. Mas é no tributo que está determinado onde buscar a alíquota. Assim, somente se no tributo estiver parametrizado para buscar alíquota no tipo de movimento é que o campo "Achar alíquota em" será utilizado. E neste caso, somente se no tipo de movimento também estiver parametrizado para buscar no tipo de movimento, o campo "Alíquota" será utilizado, caso contrário, o sistema buscará a alíquota onde estiver determinado neste campo.

-   Estado: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota informada no Cadastro/Tabelas Auxiliares/Estados.
-   Município: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota informada no Cadastro/Produto/Informações Fiscais/Municípios.
-   Natureza: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota informada no menu Cadastro/Tabelas de Tributação/Naturezas Fiscais.
-   Produto: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota informadas no menu Cadastro/Produto/Informações Fiscais/Produto.
-   Tipo de Movimento: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota informada nos parâmetros do tipo de movimento pasta Tributos
-   Tipo de produto por filial: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota do Cadastros/Tabelas de Contrato/Tipo de Produto por Filial.
-   No contrato: Estará definido o Tipo de Produto na Filial e o sistema buscará a alíquota informada neste cadastro.
-   Tributo: Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente a alíquota informada no Cadastros/Tabelas de Tributação/Tributos.

**Tributo Base:** Esta informação será utilizada no momento da Escrituração. Para escriturar os Outros Tributos diferentes de ICMS/IPI a rotina de escrituração irá considerar o Tributo Base.

**Situação Tributária:** Este campo será utilizado para identificar a Situação Tributária dos tributos PIS e COFINS conforme exigência do layout da NF-e Estadual.  Valores aceitos:

-   01: Operação Tributável (base de cálculo = valor da operação alíquota normal (cumulativo/não cumulativo));
-   02: Operação Tributável (base de cálculo = valor da operação (alíquota diferenciada);
-   03: Operação Tributável (base de cálculo = quantidade vendida x alíquota por unidade de produto);
-   04: Operação Tributável (tributação monofásica (alíquota zero));
-   05: Operação Tributável (substituição tributária);
-   06: Operação Tributável (alíquota zero);
-   07: Operação Isenta da Contribuição;
-   08: Operação Sem Incidência da Contribuição;
-   09: Operação com Suspensão da Contribuição;
-   99: Outras Operações.

**Tipo de Recolhimento:** Esse campo será habilitado somente para o tributo do Tipo ISS, indique aqui o Tipo de Recolhimento.

***Observação**:* Se o campo Tributo Base não estiver preenchido, o Tributo será escriturado com o seu código. Isso se fez necessário porque apesar do ISS, por exemplo, ser incluído com várias siglas, todos precisam ser escriturados como sendo o ISS.

**Utilizar Tributação dos Itens:** Marque este campo se para este tipo de movimento, será utilizado a tributação por item.

Configurando tributos **IRRF PF** nos itens de movimento:

-   O código da receita será apresentado nos itens de movimentos na pasta tributo, consistindo os seguintes cadastros, respeitando as seguintes ordens de prioridade, quando está configurado para busca a alíquota no código da receita.
-   Quando informado nos parâmetros do tipo de movimento na pasta Tributo;
-   Quando informado no cadastro do Cliente/Fornecedor na pasta Imposto/Tributo;
-   Quando informado no cadastro do produto na pasta Cliente/Fornecedor;
-   Quando informado no cadastro do produto na pasta Informações Fiscais/Outros dados Fiscais.
-   Caso a tributação esteja parametrizada no item de movimento, o sistema verifica primeiramente se no movimento esta informado o código da receita, se não, ele busca do cadastro do Cliente/Fornecedor da pasta Imposto/Tributo, caso nenhum destes estejam informados, irá buscar da pasta Cliente/Fornecedor do cadastro do produto, caso não esteja informado o sistema irá busca da pasta Informações Fiscais sub pasta outros dados Fiscais.
-   Se em nenhum destes cadastros esteja informado o código da receita, será apresentado a seguinte mensagem 'Código de receita não encontrado para o tributo IRRFPJ', podendo ser informado na grid da tributação do item de movimento.

**Natureza de Rendimento:** Ao incluir o movimento o sistema irá buscar automaticamente o código da natureza de rendimento. Caso desejar, poderá definir uma natureza de rendimento default neste campo, assim ao incluir um movimento, automaticamente o sistema irá retornar o default informado neste campo. Se não for informado, o sistema irá buscar o default no cadastro, conforme regra abaixo:

Para os tributos PISRF, COFINSRF, CSLLRF e CSRF

-   Se a natureza de rendimento não for informada nos parâmetros do tipo de movimento, na aba de Tributação do Item, o sistema irá verificar o cadastro do Cliente/Fornecedor (Anexos/Tributos Default do Fornecedor.

Para os tributos IRRFPJ e IRRFIMPORT

-   Se a natureza de rendimento não for informada nos parâmetros do tipo de movimento, na aba de Tributação do Item, o sistema irá verificar o cadastro do Cliente/Fornecedor na aba Tributos; se não encontrar, irá verificar em Cadastro do produto (Anexos | Dados Fiscais do Produto).

Se não for informado um default, o campo poderá ser preenchido na grid da tributação do item do movimento.

**Utilizar Tributação dos Movimentos:** Marque este campo se para este tipo de movimento, será utilizado a tributação por Movimento.

***Observações**:* Configurando tributo IRRF RF nos movimentos:

-   O código da receita será apresentado nas movimentações na pasta tributo dos movimentos, consistindo os seguintes cadastros, respeitando as seguintes ordens de prioridade, quando está configurado para busca a alíquota no código da receita.
-   Informado no parâmetro do tipo de movimento na pasta Tributos;
-   Informado no cadastro do Cliente/Fornecedor na pasta Imposto/Tributo.
-   Se o código da receita não for informado nos parâmetros do tipo de movimento na pasta tributo, o sistema irá verificar o cadastro do Cliente/Fornecedor na pasta Imposto/Tributo.
-   Se em nenhum destes cadastros esteja informado o código da receita, será apresentada a seguinte mensagem 'Código de receita não encontrado para o tributo IRRFPJ', podendo ser informado na grid da tributação do movimento.

**Fórmula de Base de Cálculo:** 

***Observação**:* Na fórmula de base de cálculo não utilize variáveis de itens, para tributação por movimento.

-   -   Exemplo*:* KQT e KPU são variáveis que buscam valores do item do movimento, portanto, elas não podem ser utilizadas para base de cálculo de tributos de movimentos, só utilize se o tributo for por item.

**Natureza de Rendimento:** Ao incluir o movimento o sistema irá buscar automaticamente o código da natureza de rendimento informado na aba Tributos do Movimento. Se não for informado um default, o campo poderá ser preenchido na grid da tributação do movimento.

Veja como configurar seus Tipos de Movimentos para que fiquem aderentes à Reforma Tributária: 

**Tributo**:

Inclua nos Tipos de Movimento os tributos:

-   -   IBS\_Estadual,
    -   IBS\_Municipal e a
    -   CBS.

**IMPORTANTE!**

1.  1.  O IBS e a CBS podem ser informados, tanto na Tributação do Item, quanto na Tributação do Movimento. **Porém, u****tilize a Tributação por Movimento, EXCLUSIVAMENTE, para Tipos de Movimentos que geram CT-e ou CT-e OS.**
    2.  Para o IBS\_Estadual e IBS\_Municipal, será preciso **informar o Tributo Base** criado de acordo com [esta orientação](https://tdn.totvs.com/pages/viewpage.action?pageId=963027603). Ao fazer isto, no momento da inclusão de um Movimento, o sistema irá validar se existe Período de Apuração "Aberto" somente para o tributo base, permitindo a apuração consolidada dos dois tributos. 

**Fórmula Base de Cálculo**

Não se esqueça de que a base de cálculo é a mesma para o IBS e CBS. Sendo assim, só é preciso criar uma única Fórmula de Base de Cálculo. 

**Procurar alíquota em**

Para estes tributos, será preciso buscar a alíquota no **Cadastro de Vigência de Alíquotas** uma vez que teremos um período de transição, onde as alíquotas serão alteradas ano a ano.

Demais campos não precisam ser preenchidos.



 Click here to expand...

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/423938168/Captura%20de%20tela%202025-11-11%20083301.png?version=1&modificationDate=1762860806663&api=v2)

**NF-e Municipal:**

-   Não Integrado: Não emite nota fiscal eletrônica.
-   Recibo numerado por auto incremento: O tipo de movimento passa a emitir Nota Fiscal eletrônica e a numeração de série é gerada por auto incremento.
-   Recibo numerado pelo movimento: O tipo de movimento passa a emitir Nota Fiscal eletrônica e a série e o número do movimento passa a ser utilizados pelo RPS.

**Fórmula Valor do Serviço NF-e:** Informe a fórmula para o valor do serviço.

-   Exemplo*:* Exemplo de fórmula do valor do serviço: KQT \* KPU.

***Observações**:* Através desta fórmula o campo Valor do Serviço da subpasta Dados do Recibo/NF-e Serviço, virá preenchido. A fórmula é utilizada para determinar a participação de cada item de movimento no valor do serviço.
O procedimento de cálculo dos valores do RPS (Recibo Provisório de Serviços) que será encaminhado para o site da Prefeitura de São Paulo passa a ter dois comportamentos. Caso a fórmula do valor de serviço para NF-e esteja informado no tipo de movimento:

-   A fórmula é utilizada para determinar a participação de cada item de movimento no valor do serviço.
-   O valor do serviço da NF-e é calculado pela soma do valor de serviço de cada item.
-   O valor da base de cálculo de ISS é calculado pela soma das respectivas bases de cálculo de ISS do movimento.
-   O valor de dedução é calculado pela diferença entre soma do valor de serviço e a soma da base de cálculo.

Caso não exista uma fórmula de valor do serviço especificado no tipo de movimento.

-   O valor do serviço da NF-e é calculado pela soma das bases de cálculo de ISS do movimento.
-   O valor da dedução é calculado pela soma das deduções (material, subempreitada e outras).

**NF-e Estadual:** O parâmetro "NF-e Estadual" estará disponível  nas seguintes condições:

-   Tipos de Movimentos '2.2.XX';
-   Tipos de Movimentos '3.1.XX';
-   Tipos de movimentos '1.2' e emitente e destinatário como "Empresa";
-   Motivo referência for Devolução de venda (Valor = 5);
-   Motivo referência for Devolução de Compra (Valor = 4).

**NF-e Serviços:** Informe o tipo de relatório que será impresso com dados da Nota Fiscal eletrônica.

**DANFE:** Informe o tipo de relatório que será utilizado para impressão da DANFE.

**Formato de impressão:** Escolha qual o formato de impressão da DANFE: Retrato ou Paisagem.
***Observações*:** Nos parâmetros do tipo de movimento, quando se tem parametrizado o tributo "ISS"  em Tributação – Item ou Tributação – Movimento e o tipo dos itens for "Serviço" ou "Ambos", ao gravar um movimento será exibido no movimento o campo "Data Competência Serviço".  Qualquer outra combinação dos parâmetros em questão, o campo não é exibido. Tal recurso foi disponibilizado a fim de atender a rotina fiscal EFD PIS/COFINS.
Para que seja possível gerar o Registro D120 no SPED Fiscal de forma a atender ao modelo de documento 07, sendo ele filho do Registro de Itens do Documento, serão criados os seguintes campos no item do Movimento:

-   Município e UF de origem
-   Município e UF de destino
-   Placa e UF do veículo

Os campos serão exibidos no movimento caso o tipo de movimento esteja parametrizado com um tipo de documento para escrituração cujo código do modelo do documento seja 07.
No momento de salvar o movimento, caso esses campos não estejam preenchidos, o sistema irá replicar as informações do movimento para os itens. Os dados do movimento que serão copiados para "Fiscal Informações Adicionais", são:

-   Transporte | Transportadora : Placa do Veículo e Estado. CTRC | Coleta e Entrega : Estado e Município de Coleta e Estado e Município de Entrega.
