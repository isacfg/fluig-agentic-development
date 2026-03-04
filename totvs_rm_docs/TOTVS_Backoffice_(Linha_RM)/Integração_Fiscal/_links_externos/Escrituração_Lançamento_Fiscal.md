# Escrituração de Lançamento Fiscais

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=269432397](https://tdn.totvs.com/pages/releaseview.action?pageId=269432397)
> **Domínio:** TDN (TOTVS Developer Network)

---



**Produto**

TOTVS Gestão Fiscal

**Processo**

Escrituração de Lançamentos





Novidades

A partir da versão 12.1.28 o processo de Escrituração de Lote Fiscal passará a utilizar a mais nova tecnologia de Fracionamento de Jobs da TOTVS, com o objetivo reduzir o tempo total de execução do processo, resultando em ganho de tempo e desempenho no dia a dia.

O Fracionamento de Jobs não estará disponível para os processos de:

-   Estorno (disponível a partir da Versão 12.1.29)
-   Escrituração de Cupom Fiscal

Para saber mais como funciona o Fracionamento de Jobs, consulte o [Link Documentação Fracionamento de Jobs](https://tdn.totvs.com/pages/viewpage.action?pageId=547231277)

**Obs.: Para lotes que ultrapassem o volume de 5.000 registros (Movimentos), este processo deve ser Fracionado.**




-   [Objetivo](# "Escrituração de Lançamentos")
-   [Lote de Escrituração Fiscal](# "Lote de Escrituração Fiscal")
-   [Tributos Passíveis de Escrituração](# "Tributos Passíveis de Escrituração")
-   [Referência NF-e](#)
-   [Outras Informações](#)
-   [Escrituração de Movimentos Relacionados (NFCOM)](#)

A Escrituração de Lançamentos é um processo que permite transportar todas as movimentações de saída, entrada e transferência imputadas no TOTVS Gestão de Estoque, Compra e Faturamento para o TOTVS Gestão Fiscal, com intuito de atender a todas as obrigações fiscais vigentes.

Primeiramente para que o processo seja executado corretamente é necessário que sejam parametrizados ambos os sistemas.

IMPORTANTE

O novo processo de Escrituração de Lançamentos está disponível na versão 12.1.19, apenas para clientes que possuam coligadas dentro do estado de Minas Gerais. Demais clientes, o processo estará disponível a partir da versão 12.1.21.

-   [Cadastro e Parametrizações no TOTVS Gestão Fiscal](# "Cadastro e Parametrizações no TOTVS Gestão Fiscal")
-   [Cadastros e Parametrização no TOTVS Gestão de Compras, Estoque e Faturamento](# "Cadastros e Parametrização no TOTVS Gestão de Compras, Estoque e Faturamento")

-    ****Natureza Fiscal****


Criar os CFOP's com todas as situações tributárias existentes nas operações de entrada e saída e ou transferência ocorridas na empresa. Caso os tributos não sejam informados de acordo com a situação tributária parametriza na natureza de operação associada ao movimento, podem ocorrer erros ao executar o processo da Escrituração de Lançamento.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-5_17-36-50.png?version=1&modificationDate=1517863011000&api=v2)

-   **Período de Apuração**


O processo irá consistir não somente a criação do período de apuração dos tributos selecionados no movimento como também o status dos períodos como "Aberto".

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-7-28%2014%3A27%3A35.png?version=1&modificationDate=1501262857000&api=v2)

-   **Lote Fiscal**


Caso o sistema esteja parametrizado para trabalhar com Lote Fiscal, o mesmo deverá ser criado através do menu Obrigações Principais | Mais... | Inserir Lote Fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-07-30.png?version=1&modificationDate=1491509411000&api=v2)
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-18-14.png?version=1&modificationDate=1491509957000&api=v2)

-   **Cadastro de Máquina**


Para usuários que utilizam emissão de Cupom Fiscal, faz-se necessário a criação de Máquina através do menu Cadastros | Mais... | Máquina no TOTVS Gestão Fiscal. Os campos do cadastro são:

-   **Número**: O sistema sempre irá considerar o código do lote de escrituração já criado e incrementa +1. Apesar do sistema trazer a numeração automática, o usuário poderá editá-lo e informar o número que desejar.

-   **Descrição**: Informe a descrição do equipamento.

-   **Contador de Ordem de Operação**: Informe o número do contador de ordem de operação da última operação do dia.

-   **Contador de Reduções**: Informe o número de Reduções Z realizadas no equipamento. Deve ser incrementado de uma unidade sempre que for realizada esta Redução.

-   **Contador Seqüencial**: Informe o contador seqüencial do equipamento, que indica o número de Cupons Fiscais, emitidos por um determinado Equipamento.


 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-5_17-51-6.png?version=1&modificationDate=1517863867000&api=v2)

***Observação******:***

O campo Contador Sequencial juntamente com o Código da Máquina vão compor o número do Cupom Fiscal = número do Documento Inicial do Lançamento Fiscal, exemplo:

\- ***Código da Máquina*** = 001

\- ***Contador Seqüencial*** = 111

\- ***Número do Documento (lançamento fiscal)*** = 001111

\- ***Número de Série (fabricação)*** = 1

\- ***Contador de Reinício de Operação (CRO)** = 1000*. Informe quantas vezes a máquina reiniciou a operação devido a intervenção técnica. Este campo será utilizado para gerar a informação do campo 10 – CRO do registro 60M do Sintegra.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-5_18-7-45.png?version=1&modificationDate=1517864866000&api=v2)
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-5_18-8-10.png?version=1&modificationDate=1517864891000&api=v2)
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-5_18-8-47.png?version=1&modificationDate=1517864927000&api=v2)

-   **Descrição do Produto no Fornecedor
    **


 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2022-12-13_9-11-48.png?version=1&modificationDate=1670933508813&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2022-12-13_8-38-34.png?version=1&modificationDate=1670931514223&api=v2)

O campo Descrição do Produto no Fornecedor pode ser preenchido no Item do Movimento. Quando o movimento é escriturado o texto é levado para o campo de mesmo nome no Item da Situação Tributária do Lançamento Fiscal de Entrada.

A partir da biblioteca 12.1.2205 o conteúdo deste campo é usado para a geração do [campo 4 do registro C170 do SPED.](https://tdn.totvs.com/pages/viewpage.action?pageId=422546009#BLOCOC-C170)





-   ****Criação do Tipo de Movimento****

Criar e parametrizar o Tipo de Movimento a ser utilizado nas operações de entrada/saída de acordo com cada situação tributária.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/tipo%20de%20movimento.png?version=5&modificationDate=1487705130000&api=v2)

-   ****Criação de Fórmula****

O objetivo da criação de Fórmulas para utilização no Tipo de Movimento é calcular os valores dos tributos de acordo com as funções selecionadas.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/formula.png?version=3&modificationDate=1487705174000&api=v2)

-   **Parâmetro do Tipo de Movimento**

Abaixo segue as parametrizações do Tipo de Movimento essenciais para que seja possível executar o processo de Escrituração de Lançamento corretamente:

**1. Fis - Natureza**

**Não Edita**: O campo não será apresentado no movimento.

**Edita**: Habilita o campo no movimento podendo ser editado pelo usuário.

**Mostra**: Apresenta o campo, mas, não permite sua edição. Neste caso, o campo será preenchido com a Natureza default informada para dentro ou fora do estado.



**1.1. Natureza**

a) **Opções para comportamento do campo “Natureza”:**

Nos campos **“Natureza”** e **“Natureza fora do Estado”**, pode ser informada uma Natureza Default que será carregada automaticamente para o Movimento na inclusão do mesmo, tanto analítica, como sintética.

***Exemplo prático de utilização¹:***

*Suponhamos que a empresa resolva criar um Tipo do Movimento específico para registrar as transferências de mercadorias recebidas de terceiros.*

*Para evitar que o usuário selecione um CFOP que não seja dessa operação, ele pode informar nesses campos O CFOP “5.152” e “6.152”, respectivamente.*

*Assim, o usuário só terá na lista de Naturezas analíticas disponíveis para utilização, aquelas que estão dentro desses grupos.*

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/13-04-2017%2015-44-10.png?version=2&modificationDate=1492120831000&api=v2)

****¹Onde**:** Existem várias maneiras de realizar as operações. Os exemplos citados é apenas uma das formas praticas e servem apenas como ilustração para aplicação no parâmetro.



   b) ****Opções para comportamento do campo “Natureza 2”****

Nos campos **"Natureza"** e **'Natureza Fora do Estado"** dentro de **"Natureza 2"** tem o mesmo comportamento anterior.

***Exemplo prático de utilização²:***

*Imagine uma empresa que presta serviços de industrialização por encomenda. Quando esta empresa finaliza a industrialização de determinada mercadoria, ela precisa efetuar duas saídas:*

*√ Um retorno simbólico dos insumos do encomendante utilizados na industrialização (Natureza 5.902);*

*√ A mão-de-obra aplicada na industrialização (Natureza 5.124).*

*Aqui, temos uma aplicação para a “Natureza 2”, o Tipo de Movimento ficaria assim parametrizado:*

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/13-04-2017%2015-15-59.png?version=3&modificationDate=1492107530000&api=v2)

****²Onde**:** Existem várias maneiras de realizar as operações. Os exemplos citados é apenas uma das forma praticas e serve apenas como ilustração para aplicação do parâmetro.



**1.2. Seleção Automática da Natureza**

a**) Não Seleciona**

A opção “**Não seleciona**” será descontinuada.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/13-04-2017%2015-37-33.png?version=1&modificationDate=1492109039000&api=v2)

b) **Seleciona por Movimento**

Já a opção **“Seleciona por Movimento”** está ficando, aos poucos, obsoleta uma vez que o Fisco está exigindo cada vez mais informações detalhadas dos tributos, ou seja, por **ITEM** do documento fiscal. 

Nesta opção todos os itens receberam a mesma tributação.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/111.png?version=1&modificationDate=1492121172000&api=v2)

c) **Seleciona por Movimento**

Já com a opção “**Seleciona por Item**” é possível tratar, num mesmo movimento vários tipos de Situação Tributária, uma vez que Natureza será informada item a item.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/13-04-2017%2016-21-19.png?version=2&modificationDate=1492121150000&api=v2)

d) **Edita Cliente/Fornecedor Origem/Destino**

Marque este parâmetro se a NF é emitida para um cliente de um estado mas a entrega deve ser feita em outra empresa num estado diferente ou quando de emissão própria, por exemplo na Importação.

 

**2. Fis - Dados**

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/13-04-2017%2016-29-26.png?version=3&modificationDate=1492121135000&api=v2)

a) **Buscar Endereço do Destinatário em:**

Este parâmetro não é utilizado pela TOTVS Gestão Fiscal, interfere apenas no envio da NF-e.

b) **Registrar Nota Fiscal de Terceiros**

Este parâmetro não é utilizado no processo de Escrituração de Lançamentos.

c) **Calcula Lei da Transparência Fiscal**

Este parâmetro não é utilizado pela TOTVS Gestão Fiscal, interfere apenas no envio da NF-e.

d) **Controlar Dispositivos Fiscais de Segurança**

Marcando esta opção será disponibilizado na pasta Cabeçalho na inclusão de movimento o campo “Dispositivo de Segurança”. Neste deverá ser informado o nº do dispositivo de segurança da Receita (Este deverá ter sido inicialmente incluído no TOTVS Gestão Fiscal, pois os números dos formulários permitidos neste dispositivo serão consistidos ao salvar o movimento e também na Escrituração no TOTVS Gestão Fiscal**.**

![(warning)](https://centraldeatendimento.totvs.com/s/5bn9pn/8804/xgjkrn/_/images/icons/emoticons/warning.svg)
 Consistências na seleção da AIDF no TOTVS Gestão de Estoques, Compras e Faturamento:

-   A rotina de escrituração foi alterada para preencher automaticamente o campo AIDF (Autorização para impressão dos Documentos Fiscais) do Lançamento Fiscal.
-   Se não informar a AIDF no movimento, a rotina de escrituração irá verificar no Cadastro de AIDF do TOTVS Gestão Fiscal se existe uma que teve autorização anterior a data de emissão do documento.
-   Além disso, verifica se possui a mesma série do movimento que está sendo escriturado.
-   Verifica se o documento que está sendo escriturado está dentro da faixa de documentos da AIDF.
-   Se todas as condições anteriores foram válidas, o sistema atribui a AIDF ao Lançamento Fiscal.
-   Se existirem duas AIDF's que atendem as condições, a de autorização mais recente será a selecionada.

e) **Tipo**

Este parâmetro não é utilizado no processo de Escrituração de Lançamentos.

f) **Editar Município por Item**

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/17-04-2017%2016-10-35.png?version=1&modificationDate=1492456312000&api=v2)

**Não Edita**: Não será visualizado no item do movimento.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/17-04-2017%2016-16-18.png?version=1&modificationDate=1492456681000&api=v2)

**Edita:** Será habilitado os campos "Município", "UF" e "Código do Serviço" no item do movimento. Caso o Código do Serviço esteja preenchido no cadastro do produto selecionado o mesmo será preenchido automaticamente.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/17-04-2017%2016-19-20.png?version=1&modificationDate=1492456866000&api=v2)

**Mostra: ?**

g) **Outros Documentos Fiscais opção "Emite Cupom Fiscal"**

Este parâmetro valida se movimento gera ou não Cupom Fiscal. Esta validação determina se serão aplicadas as regras de escrituração para nota fiscal ou de cupom fiscal.

h) **Sped Fiscal opção** **"Data para Registro K280"**

Quando marcado será gerado os registros correção de apontamento do estoque escriturado e consequentemente a geração no TOTVS Gestão de Estoque, Compras e Faturamento do Registro K280 do Bloco K conforme disposto no Ato COTEPE/ICMS 7 de 13 de maio de 2016. Documentação disponível no TDN: [Bloco K - Registro K280](https://tdn.totvs.com/display/LRM/270950+MCP-1360+ER+Bloco+K+-+Registro+K280)

O mesmo não interfere no processo de Escrituração de Lançamento Fiscal.

i) **Calculo ICMS-ST de saída com CST 60 com base na última entrada do Produto**

Esse parâmetro deve ser utilizado nos Tipos de Movimento de saída. Quando o CST do ICMS for igual à “**60 - ICMS Cobrado Anteriormente por Substituição Tributária**” será realizado o cálculo do valor unitário da Base de Cálculo e do Valor do Imposto do ICMS-ST referente ao último movimento de entrada que tenha ICMS ST e que controle saldo de estoque. Esse cálculo somente será realizado se a base de cálculo do tributo ICMS-ST não for editada.

**Por exemplo:**

Foi incluído um movimento de entrada com 10 unidades do produto ABC com as seguintes informações:

Base de Cálculo do ICMS ST

120,00

Valor do ICMS ST

60,00



-   Gerando os valores unitários:

Valor Unitário da Base de Cálculo do ICMS ST

12,00 (120,00 / 10)¹

Valor Unitário do ICMS ST

6,00 (60,00 / 10)²

**¹Onde:**

120,00 = Valor total da mercadoria

10 = Quantidade da mercadoria

**²Onde:**

60,00 = Valor do ICMS ST

10 = Quantidade da mercadoria



-   Ao incluir um item no movimento de venda que tenha 5 unidades do produto ABC com Tipo de Tributação ICMS-ST igual a 60 será realizado o seguinte cálculo:



Base de Cálculo ICMS ST

60,00 (12,00 \* 5 )¹

Valor do ICMS ST

60,00 (6,00 \* 5)²

**¹Onde:**

12,00 = Valor unitário da base de cálculo do ICMS ST

5 = Quantidade do item

**²Onde:**

6,00 = Valor unítário do ICMS ST

5 = Quantidade do item

**3.** **FIS - Escrituração 1/2**

a) Marcar a opção **"Gerar Escrituração"**

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/13-04-2017%2012-06-19.png?version=1&modificationDate=1492096077000&api=v2)

**3.1.** **Referência entre Documentos**

a) **Código do Motivo**

Deverá ser preenchido quando de se tratar de Tipo de Movimento que acoberta Cupom Fiscal "04".

**3.2. Fórmulas Cálculo do Valor Opcional do Lançamento**

a) **Valor Opcional 1, 2, 3 e 4**

Informe nestes campos as fórmulas para cálculo do valor opcional dos lançamentos fiscais. Na geração de lançamentos do TOTVS Gestão de Estoques, Compras e Faturamento para o TOTVS Gestão Fiscal estes campos serão carregados para os valores opcionais dos lançamentos (Pasta Campos Opcionais na tela de Manutenção de Lançamentos).

**3.3. Tipo de Documento Escrituração**

a) **Código Default**

Deve ser informado "Tipo de Documento Escrituração" de acordo com a operação. 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2018-51-08.png?version=3&modificationDate=1492034025000&api=v2)



**3.4. Outros Códigos**

a) **Tipos de Documento**

Informe o Código do Documento que será transportado para os lançamentos fiscais.

Importante

Lembrando que para a escrituração de movimento de **CT-e, CT-e OS, NF-e, NFC-e, NFS-e e NFCom**, o processo será executado corretamente somente quando o **status = AUTORIZADO**.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-29-17.png?version=1&modificationDate=1491510632000&api=v2)



**4.** **Fis - Escrituração 2/2**

a) **Gera Escrituração**

Onde será definido se o Tipo de Movimento irá escriturar ou não os Movimentos para o sistema TOTVS Gestão Fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-13%2019%3A8%3A50.png?version=1&modificationDate=1492121378000&api=v2)

**4.1.** **Tipo de Lançamento Fiscal de Transferência: Entrada, Saída e Ambos**

Este parâmetro permite a operacionalidade do processo de Faturamento e Escrituração de Livros Fiscais quando se deseja efetuar a Saída Transferência de uma mercadoria de uma Filial X (dentro do Estado) para uma Filial Y (Fora do Estado) mantendo a mercadoria em um local de estoque transitório (intermediário) na Filial X (dentro do Estado) até que esta alcance o seu destino real.

Para Transferência Indireta Local Transitório deve-se marcar o Parâmetro como Entrada ou Saída de acordo com o Tipo de Movimento 3.xx que esta sendo utilizado.

Para Transferência Direta este Parâmetro deve ser marcado como Ambos visto que o mesmo Tipo de Movimento irá gerar os Lançamentos de Entrada e Saída no Fiscal. 

***Atenção:***
***Não será possível utilizar o mesmo Tipo de Movimento para as duas modalidades (Transferência Direta e Indireta).***



**4.2.** **Rateio na Base de ICMS: Desconto, Despesa, Frete e Seguro**

Este parâmetro quando habilitado, indicará que os valores de desconto, despesa, frete e/ou seguro serão rateados na fórmula de cálculo da base do ICMS. O ICMS pode estar no item ou no movimento e em ambos os casos este parâmetro deverá estar habilitado se estes valores comporem a Base de ICMS. Se os parâmetros de Rateio estiverem desmarcados e existir tais valores no movimento, estes valores serão desconsiderados no momento da Escrituração do movimento.



**4.3.** **Gerar Histórico do Movimento para Lançamentos Fiscais**

Marcando esta opção, o conteúdo do campo Histórico do movimento definido na pasta observações do mesmo, será copiado para o campo “Observações” na pasta outros dados do lançamento de entrada/saída gerado no momento da escrituração para o TOTVS Gestão Fiscal.

Observação

Se o parâmetro Gerar histórico do movimento para lançamentos fiscais não estiver habilitado, mas no TOTVS Gestão Fiscal o parâmetro ‘Inicializa observação’ estiver habilitado, o sistema carrega o campo observação do Lançamento Fiscal, no momento da escrituração, com o Dispositivo Legal da Natureza.

**4.4.** **Considerar Base de Cálculo para ICMS como Reduzida**

Marcando esta opção, o sistema tratará a base de cálculo informada como base reduzida e guardará num novo campo a base de cálculo obtida através da fórmula de base de cálculo indicada no tributo, na pasta tributos do mesmo tipo de movimento. Portanto, a configuração deste campo determinará se os movimentos desse tipo irão receber redução manual na fórmula de Base de Cálculo dos impostos no momento da inclusão. Este parâmetro atenderá a escrituração de movimentos em que o percentual de redução para o cálculo dos impostos não é fixo pela natureza fiscal e sim por movimento.



**4.5.** **Consistir Valores a Escriturar**

Marcando este parâmetro o sistema consistirá os valores dos tributos a escriturar no momento da inclusão do movimento pelo TOTVS Gestão de Estoques, Compras e Faturamento. O sistema emitirá mensagens de aviso e não permitirá a gravação do movimento se os valores de Base de Cálculo Alíquota e Valores dos Impostos, inseridos nos tributos do item e do movimento não estiverem coerentes com a natureza fiscal selecionada no movimento ou no item, dependo da parametrização do tipo de movimento.



**4.6. Produto do Tipo Frete**

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-13%2019%3A8%3A50.png?version=1&modificationDate=1492121378000&api=v2)



**5.** **Fis Tributação - Item e Fis Tributação - Movimento**

Nessa etapa serão informados os tributos que serão informados no tributo do Movimento e no Item.

a) **Tributo**

Clique na primeira linha da coluna “Tributo” e escolha o tributo para os itens de acordo com a operação.

b) **Alíquota (%)**

Informe a alíquota do tributo.

c) **Cód. Receita**

Através desta configuração, ao incluir o movimento o sistema irá buscar automaticamente o código da receita e alíquota através do menu Cadastro/Tabelas de Tributação/IRRF.

Caso deseja, inclui um movimento para que o sistema retorne automaticamente o código da receita e a alíquota correspondente, deverá informa o código nesta mesma pasta. Se não informá-lo, o sistema irá buscar no cadastro do Cliente/Fornecedor da pasta Dados Fiscais | Tributos campo Código da Receita.

Observação: Configurando o Código de Receita para o Tributo IRRF

O código da receita será apresentado automaticamente na linha dos tributos do movimento / item consistindo os seguintes cadastros e respeitando as seguintes ordens de prioridade:

-   Informado no parâmetro do tipo de movimento na pasta Tributos;
-   Informado no cadastro do Cliente/Fornecedor o código preenchido na aba Dados Fiscais sub aba Tributos;
-   Se o código da receita não for informado nos parâmetros do Tipo de Movimento na pasta tributo, o sistema irá verificar o cadastro do Cliente/Fornecedor o código preenchido na aba Dados Fiscais sub aba Tributos;
-   Caso o não existir o código de receita em nenhum desses cadastros, será apresentada a seguinte mensagem "Código de receita não encontrado para o tributo IRRFPJ", podendo ser informado na grid da tributação do movimento.

d) **Fórmula da Base de Cálculo**

Escolha a fórmula cadastrada em Cadastro/Fórmulas, que será a base de cálculo para o tributo.

Observação

Na fórmula de base de cálculo não utilize variáveis de itens, para tributação por movimento.

e) **Procurar Alíquota em**

Neste campo você indicará onde o sistema deverá buscar a alíquota se no Cadastro do Tributo/Identificação, no campo “buscar alíquota em” estiver indicado Tipo de Movimento.

f) **Tributo Base**

Esta informação será utilizada no momento da Escrituração. Para escriturar os Outros Tributos diferentes de ICMS/IPI a rotina de escrituração irá considerar o Tributo Base, como por exemplo o tributo ISS que é o único tributos que o TOTVS Gestão Fiscal valida a sigla "ISS" na apuração.

Documentação da Apresentação do ISS: [http://tdn.totvs.com/pages/releaseview.action?pageId=63865617](https://tdn.totvs.com/pages/releaseview.action?pageId=63865617)

g) **Situação Tributária**

Este campo será utilizado para identificar a Situação Tributária dos tributos PIS e COFINS conforme exigência do layout da NF-e Estadual.



Código

Descrição

01

Operação Tributável com Alíquota Básica

02

Operação Tributável com Alíquota Diferenciada

03

Operação Tributável com Alíquota por Unidade de Medida de Produto

04

Operação Tributável Monofásica - Revenda a Alíquota Zero

05

Operação Tributável por Substituição Tributária

06

Operação Tributável a Alíquota Zero

07

Operação Isenta da Contribuição

08

Operação sem Incidência da Contribuição

09

Operação com Suspensão da Contribuição

49

Outras Operações de Saída

50

Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno

51

Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno

52

Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação

53

Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno

54

Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação

55

Operação com Direito a Crédito - Vinculada a Receitas Não Tributadas no Mercado Interno e de Exportação

56

Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação

60

Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno

61

Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno

62

Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação

63

Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno

64

Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação

65

Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação

66

Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação

67

Crédito Presumido - Outras Operações

70

Operação de Aquisição sem Direito a Crédito

71

Operação de Aquisição com Isenção

72

Operação de Aquisição com Suspensão

73

Operação de Aquisição a Alíquota Zero

74

Operação de Aquisição sem Incidência da Contribuição

75

Operação de Aquisição por Substituição Tributária

98

Outras Operações de Entrada

99

Outras Operações

Demais tributos onde o campo é habilitado, deve ser consultada as tabelas vigentes de acordo a legislção.

h) **Tipo de Recolhimento**

Esse campo será habilitado somente para o tributo do Tipo ISS, indique aqui o Tipo de Recolhimento.

i) **Base Cheia ICMS/ISS**

Caso seja selecionado "Sim" o sistema irá calcular o redução da base automaticamente. Essa opção deve ser utilizada para movimento com redução de base de cálculo de ICMS. O resultado da fórmula da base de cálculo será gravado no chamado “Base Cheia” e, a partir desta base, o sistema calculará a base de cálculo do tributo de forma automática, utilizando o percentual de redução informado para o tributo. Neste caso o fator de redução NÃO deve ser tratado na Fórmula da Base de Cálculo do tributo.

Caso seja selecionado "Não" o sistema irá consistir a Fórmula da Base de Cálculo selecionada na linha do tributo.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-29_18-6-45.png?version=1&modificationDate=1514581606000&api=v2)

**6.** **Fis - NF-e**

 Para que seja possível escriturar movimentos diferentes de **NF-e, NFC-e,** **NFS-e e NFCom**, deve ser selecionado como **"Não Integrado"** na **Etapa 67 - Fiscal - Nota Fiscal Eletrônica**. 

 Para o **CT-e**, selecione como **"Não Usar CTRC"** na **Etapa 69 - Fis - Conhecimento de Transporte**. 

Observação

Maiores detalhes em relação a parametrização disponível no Wiki Help: [Integração Fiscal](http://wikihelp.totvs.com.br/WikiHelp/EST/EST.Fiscal.aspx) 

**7\. Item - Preços**

**Editar Preço Total:** Ao marcar essa opção, o Valor da mercadoria, do item do lançamento (após escriturado), será considerado o campo "Preço Total".  Para isso, a flag, no item do movimento, "Preço total editado" deve estar habilitado. Opções de cálculo aplicáveis a esta regra: **Calcular Preço Total com desconto, Calcula Preço Total com despesa, Calcular Preço Total com despesa e desconto.**

**Introdução**

O menu Escrituração de Lançamentos tem o intuito de escriturar e estornar movimentos de Nota Fiscal / Cupons incluídos no TOTVS Gestão de Gestão de Estoque, Compra e Faturamento para o TOTVS Gestão Fiscal.



Novidades

A partir da versão 12.1.29 o processo de Escrituração Fiscal poderá ser realizado sem a utilização de um Lote de Escrituração.
Para mais informações verifique a aba "Escrituração sem Lote"

 Menu de escrituração

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/menu%20de%20escritura%C3%A7%C3%A3o%201.png?version=1&modificationDate=1487772952000&api=v2)



***<Fim Lote de Escrituração Fiscal>***

-   [Filtros](# "Filtros")
-   [Validações do Lote](# "Validações do Lote")
-   [Regras Gerais - Escrituração e Estorno do Lote](# "Regras Gerais - Escrituração e Estorno do Lote")
-   [Escrituração sem Lote](# "Processo de Escrituração sem utilização de Lote")

Ao criar o Lote de Escrituração deve ser preenchido os seguintes campos:

-   **Código**: Identificador do lote de Escrituração com geração sequencial e automática.
-   **Descrição**: Descrição do Lote de Escrituração.
-   **Tipo Exportação**: Informe se o lote se refere a movimentação Normal ou Cupom Fiscal.
-   **Tipo Movimento**: Selecionar Entrada ou Saída.
-   **Usuário de Criação do Movimento**: Preenchimento não obrigatório. 
-   **Filial Inicial e Final**: Código da(s) filial(is) onde foi realizada a inclusão do movimento. 
-   **Período do movimento**: Data inicial e final do movimento que se deseja escriturar. 
-   **Número do Movimento Inicial e Fina**l: Informe o intervalo de números dos movimentos a serem escriturados.
-   **Código Tipo de Movimento**:  Informe o código do tipo de movimento desejado. Preenchimento não obrigatório.
-   **Lote Fiscal**: Caso seja utilizado, selecionar o Lote dos Lançamentos Fiscal pertencente ao módulo TOTVS Gestão Fiscal.



 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/19-12-2016%2016-07-05.png?version=1&modificationDate=1482174551000&api=v2)

Observação

Se tratando de CT-e e CT-e OS o sistema irá validar a escrituração do movimento selecionado nos dados do CTRC dos mesmo. Onde poderá ser vinculado notas de filiais diferentes do filial emitente dos mesmos.

***<Fim Filtros>***

Ao criar, excluir ou modificar o Lote de Escrituração de movimentos o sistema irá proceder com as seguintes validações:

-   Só é permitido excluir e alterar registros que ainda NÃO foram Escriturados.
-   Código do Lote do módulo TOTVS Gestão Fiscal só será apresentado caso o parâmetro “Usa Lote” esteja devidamente parametrizado.
-   É obrigatório o preenchimento do campo Tipo Movimento.
-   O processo de escrituração quanto utiliza Lote, permitirá selecionar apenas uma Filial.
-   Data do movimento inicial não pode ser maior que a data do movimento final.
-   Número do Movimento Inicial deve ser menor que o Número do Movimento Final.
-   Caso o Lote Fiscal já esteja escriturado será apresentada a mensagem “Lote Fiscal já Escriturado”.
-   Consiste o status do movimento ou algum tipo de bloqueio como por exemplo “Status Não Processado”.
-   É verificado se existe Período de Apuração no TOTVS Gestão Fiscal para todos os tributos informados, tanto no movimento quanto nos itens.
-   Em relação ao CFOP selecionado no item/movimento, ao escriturar será verificado a cadastro do mesmo no TOTVS Gestão Fiscal.



***<Fim Validações do Lote>***

-   [Escrituração do Lote Fiscal de NF-e/NFC-e/NFCom/CT-e](# "Escrituração do Lote Fiscal de Nota Fiscal")
-   [Escrituração do Lote Fiscal de Cupom Fiscal](# "Escrituração do Lote Fiscal de Cupom Fiscal")
-   [Estorno de Nota Fiscal e Cupom Fiscal](# "Estorno de Nota Fiscal e Cupom Fiscal")

Como serão selecionados os Movimentos no processo de Escrituração Fiscal:

-   **Código Coligada**

Será filtrado os movimentos que foram criados na coligada do lote de escrituração.

-   **Número do Movimento**

Será filtrado a numeração do(s) movimento(s) informado(s) no campo de Nº Nota Inicial e Nº Nota Final. 

O processo irá verificar se o movimento foi escriturado caso já esteja escriturado o mesmo não será selecionado e apresentará a mensagem "Nenhum movimento selecionado....".

-   **Código do Tipo Movimento:**

Caso esteja preenchido o campo *Código* *Tipo Movimento* no *Lote* *de Escrituração Fiscal*, o processo irá utilizá-lo como parâmetro para filtrar os Movimentos. Caso o mesmo não seja informado, serão selecionados todos os movimentos compatíveis com o campo Tipo Movimento (Entrada/Saída), além das transferências (Movimentos cujo o código seja iniciado por 3).

-   **Filial**

Se *“Usa Lote”* estiver marcado nos *Parâmetros da Gestão Fiscal*, os campos de *Filial Inicial* e *Filial Final* no lote de Escrituração serão automaticamente desabilitados, uma vez que os Lotes são definidos por Filial.

Caso a *Filial* seja informada no filtro do Lote de escrituração, o sistema irá utilizá-la como parâmetro para filtrar os Movimentos, assim Lote de Escrituração parametrizada como:

Saída:

\- Todas as filiais informadas entre a Filial Inicial e à Filial Final

Entrada:

\- Todas as filiais informadas entre a Filial Inicial e à Filial Final

\- Caso o Lote de Escrituração seja de *Entrada* e o Tipo de Movimento seja de *Transferência*:

\- Os Movimentos serão selecionados pelo Código da Filial Destino (é necessário que Código Filial Entrega não seja preenchido)

***OU***

\- Os Movimentos serão selecionados pelo Código da Filial Entrega

-   **Data do Lançamento**

Será filtrado todos os *Movimentos* que a *Data de Lançamento* esteja entre as informadas no *Lote de Escrituração Fiscal. Verifica se a data do lançamento do movimento está dentro do período da Data Inicial e Final informadas no Lote de Escrituração.*

*Será considerado a DATALANCAMENTO da TMOV.*

-   ***Código do Documento***

Serão selecionados somente os movimentos que possuem o modelo de documento informado.

-   ***Gerar Escrituração*** 

Serão considerados apenas os tipos de Movimentos cujo campo *“Gerar Escrituração”* esteja **marcado** no parâmetros etapa *Fis - Escrituração 1/2.*

Será filtrado apenas os movimentos que não foram escriturados anteriormente.

-   **Não Emite Cupom Fiscal**

Será filtrado os movimentos onde na etapa *Fis - Dados* dos parâmetros do Tipo de Movimento a flag *“Emite Cupom Fiscal”* esteja **desmarcada**.

-   **Natureza (CFOP)**

Serão selecionados somente os movimentos que possuem Natureza de Operação (CFOP) vinculados.

-   **Por Usuário**

Será  filtrado os Movimentos que além dos demais filtros informados na criação do lote de escrituração, foram criados pelo usuário informado no campo *“Usuário Movimento”* no filtro do lote de escrituração.

-   **Nota Fiscal Eletrônica Estadual**

Caso o tipo de movimento esteja parametrizado para emitir NF-e na **Etapa Fis - NF-e** serão selecionados apenas movimentos que se encaixem nas regras abaixo:       

*NF-e com Status Autorizada*

*NF-e com Status Cancelado (Movimento deve estar cancelado)*

*NF-e com Status Denegado (Movimento deve estar cancelado)*

Nos casos onde a NF-e esteja parametrizado como "Integrado por Terceiros" os movimentos não precisam estar "Autorizados" para serem Escriturados.

-   **Nota Fiscal Consumidor Final**

     Caso o tipo de movimento esteja parametrizado para emitir NFC-e na **Etapa Fis - NF-e** serão selecionados apenas movimentos que se encaixem nas regras abaixo: 

*NFC-e com Status Autorizada*

*NFC-e com Status Cancelado (Movimento deve estar cancelado)*

*NFC-e com Status Denegado (Movimento deve estar cancelado)*

Nos casos onde a NFC-e esteja parametrizado como "Integrado por Terceiros" os movimentos não precisam estar "Autorizados" para serem Escriturados.

-   **Nota Fiscal Comunicação Eletrônica**

     Caso o tipo de movimento esteja parametrizado para emitir [NFCom](https://tdn.totvs.com/pages/viewpage.action?pageId=880058547) na **Etapa Fis - NF-e** serão selecionados apenas movimentos que se encaixem nas regras abaixo: 

*NFCom com Status Autorizada*

*NFCom com Status Cancelado (Movimento deve estar cancelado)*

*NFCom com Status Denegado (Movimento deve estar cancelado)*

Nos casos onde a NFCom esteja parametrizado como "Integrado por Terceiros" os movimentos não precisam estar "Autorizados" para serem Escriturados.

-   **Conhecimento de Transporte Eletrônico**

 Caso o tipo de movimento esteja parametrizado para emitir CT-e na **Etapa  Fis - Conhecimento de Transporte** o parâmetro *Tipo de Operação do Conhecimento de Transporte* serão selecionados apenas movimentos que se encaixem nas regras abaixo: 

*CT-e com Status Autorizada*

*CT-e com Status Cancelado (Movimento deve estar cancelado)*

*CT-e com Status Denegado (Movimento deve estar cancelado)*

Tratando-se de CT-e OS, o sistema irá verificar o Parâmetro “Emite CT-e OS” na etapa 69 - Fis - Conhecimento de Transporte do Tipo de Movimento para que os dados do mesmo sejam escriturados.

-   **Status TOTVS Colaboração**

Será filtrado também os movimentos que foram incluídos via *Totvs Colaboração.*

Informações Adicionais

-   O sistema irá validar a seleção do estado no cadastro do Cliente da nota. Quando se tratar de transferência o sistema irá verificar a seleção do estado no cadastro do emitente / destinatário.
-   Para operações onde possui produto *Tipo Frete*, o sistema irá verificar a existência do CFOP associado ao produto *Tipo Frete* selecionado no movimento.
-   Tratando-se de movimento de entrada e transferência, é verificado se existe natureza inversa informada no cadastro da Natureza associada ao movimento.
-   Para movimento de Ativo Imobilizado é verificado o grau da máscara do código do Bem cadastrado no TOTVS Gestão Patrimonial.
-   Após a finalização do processo a coluna “Escriturado” será atualizada.

Job Fracionável

Durante fracionamento, caso seja identificado que existem Movimentos dependentes (nota complementar, NF-e referenciado em um CT-e  e etc ) selecionados, no mesmo lote de escrituração, os mesmos serão agrupados na mesma fração. Este comportamento pode reduzir o número de frações criadas ou adicionar uma fração a mais para agrupar todas as dependências



***<Fim Escrituração de Movimento de Nota Fiscal>***

Os itens do Cupom Fiscal serão escriturados a partir da Redução Z onde os mesmo são vinculados.

No Lote de Escrituração serão selecionados apenas movimentos que possuem código modelo de documento do tipo 02 (Nota Fiscal de Venda a Consumidor) e 2D (Cupom Fiscal).



***<Fim Escrituração do Lote Fiscal de Cupom Fiscal>***

Abaixo as validações para o processo de Estorno da Escrituração onde a validação se aplica tanto para Nota Fiscal quanto para o Cupom Fiscal:

-   O processo só será executado para Lote de Escrituração com status de NÃO Escriturado..
-   O status do Período de Apuração dos tributos selecionados no movimento devem constar como abertos.
-   Para execução do processo o Lançamento Fiscal não poderá estar vinculado ao Lote Zero do módulo TOTVS Gestão Contábil e também com o TOTVS Gestão Financeira.
-   Caso existem guias geradas dos tributos relacionados, as mesmas deverão ser excluídas.
-   Lote Fiscal com status “Aberto”.
-   Será verificado se já foi realizada a saída dos Bens vinculados ao movimento que se deseja estornar.
-   Ao estornar o Lote de Escrituração o Lançamento Fiscal será excluído automaticamente.
-   Após a finalização do processo a coluna “Escriturado” será atualizada para NÃO.

***<Fim Estorno da Escrituração de Nota Fiscal/Cupom Fiscal>***

A partir dar versão da 12.1.29 do RM, foi implementado a opção de realizar o processo de Escrituração/Estorno sem a necessidade de utilizar Lotes de Escrituração.

Quando o processo de Escrituração do Lote Fiscal for executado sem selecionar nenhum registro, a tela de processo será exibida com os parâmetros para o filtro de Movimentos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2020-7-14_16-10-31.png?version=1&modificationDate=1594843067027&api=v2)



Esta tela de parâmetros possui as mesmas consistências realizadas pelo cadastro de Lote de Escrituração.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2020-7-14_16-13-9.png?version=1&modificationDate=1594843247610&api=v2)



Observação

 Quando não for informado o campo Período Final, a data considerada será a data de execução do processo



(**N CAMADAS**) Quando estiver parametrizado N camadas o usuário também tem a opção de agendar a execução do processo.



 Tela Agendamento do Processo

![Imagem](https://tdn.totvs.com/download/attachments/555283294/image2020-7-14_16-14-11.png?version=1&modificationDate=1594755100490&api=v2)



O fluxo para executar o processo de Estorno da Escrituração é o mesmo da Escrituração.

  Tela do processo de Estorno do Movimento

![Imagem](https://tdn.totvs.com/download/attachments/555283294/image2020-7-14_16-36-55.png?version=1&modificationDate=1594755419850&api=v2)



Ao executar o processo ocorre os mesmos processamentos de uma Escrituração\\Estorno comum, mas a diferença é que os Movimentos ficam associados ao lote "SEM LOTE".



É possível escriturar qualquer tributo : ICMS, IPI, PIS, COFINS, CSLL, INSS, IRRF, FUNRURAL, ISS e etc. Devido a utilização do imposto pela sigla no processo de Escrituração de Lançamentos deve ser observado sempre se o Tipo de Tributo indicado no cadastro do tributo no TOTVS Gestão Fiscal através do menu Cadastro | Tributos se é realmente o tributo em questão. Os tributos devem estar devidamente selecionados no Tipo de Movimento nas configurações do TOTVS Gestão de Estoque, Compra e Faturamento onde podem ser parametrizados por item ou por movimento.


-   [Regras Gerais](# "Regras Gerais")
-   [Exemplos de Situações Tributárias - ICMS e ICMSST](# "Exemplos de Situações Tributárias - ICMS e ICMSST")
-   [Exemplos de Situação Tributária de Compra/Venda com IPI](# "Exemplos de Situação Tributária de Compra/Venda com IPI")
-   [Reforma Tributária](# "Reforma Tributária")

 Tributos - Código Retenção

Para escrituração deste campo, o movimento deve ser de entrada e os tipos de tributos no movimento devem ser:

-   IRRF
-   IRRF PJ
-   IR PJ
-   CSLLRF
-   PIS RF
-   COFINS RF
-   CONTRIBSOCIAL RF
-   COSIRF
-   INSS
-   PIS IMPORTAÇÃO
-   COFINS IMPORTAÇÃO
-   IRRF IMPORTAÇÃO

 Item - Tributos - Código Retenção

Para escrituração deste campo, o item do movimento deve conter o tipo de tributo Contribuição Previdenciária ou tipo de tributo (e recolhimento) deve ser:

-   INSS ou
-   FUNRURAL

 Dados Financeiros

Data Previsão de Baixa

Somente entrará na regra se existir lançamento financeiro para o tributo COSIRF no movimento.

-   Irá preencher o campo Data previsão baixa do lançamento fiscal de acordo com a menor data de previsão de baixa do lançamento financeiro vinculado ao movimento.
-   Obs.: O mesmo deve estar preenchido.

Data Vencimento

Entrará na regra para naturezas que se iniciam com 3 e 7, ou que exista ISS no movimento.

-   Se não existe lançamento financeiro: Data Vencimento recebe por padrão a **Data de Emissão** do movimento.
-   Se existe lançamento financeiro: Data Vencimento recebe a menor **D****ata de Vencimento** dos lançamentos financeiros.

Disponível a partir da 12.1.34.144

 Data Entrega

Data Previsão da Entrega



-   Habilitar campo data Entrega

    O Campo Data Entrega deve ser habilitado nos parâmetros do Tipo de Movimento Etapa Datas 1/2

     Imagem

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2026-2-9_11-3-35.png?version=1&modificationDate=1770645818137&api=v2)

-   Escrituração do campo data Entrega

     Imagem

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2026-2-9_11-11-18.png?version=1&modificationDate=1770646281183&api=v2)


    **Regras para a Escrituração:**

    Será verificado se existe **evento autorizado de alteração da data de entrega** (Evento 112150: Atualização da Data de Previsão de Entrega):

    -   Se houver, o campo será preenchido com o valor da tag **dPrevEntrega**. 
    -   Se houver mais de um evento deste tipo, será considerado o evento mais recente.
-   Se não houver eventos deste tipo, deve receber o valor do campo TMOV.DATAENTREGA.

    Para mais informação sobre o evento de **alteração da data de entrega** acesse o documento [Eventos NF-e](https://tdn.totvs.com/display/public/LRM/Eventos+da+NF-e#Eventos--1660754292)










Nas situações a seguir serão demonstradas algumas características do ICMS e ICMS ST nas operações de entrada e saída, não deixando de observar que as combinações dos tributos podem ser alteradas e que diferentes combinações não poderão ser utilizadas para o ICMS no mesmo lançamento.



 1\. Compra de mercadorias com IPI e redução na base de cálculo do ICMS

A redução da base de cálculo do ICMS, só podem ser concedidos por meio de convênios firmados junto Conselho Nacional de Política Fazendária (CONFAZ). Estes convênios devem ser aprovados e ratificados pelos Estados e pelo Distrito Federal de acordo com a [Lei Complementar nº 24/1975 Art. 1°, Parágrafo único](http://www.planalto.gov.br/CCivil_03/leis/LCP/Lcp24.htm).



-   [Parametrização Regra de ICMS / IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   Regra de ICMS



Aba Identificação

Tipo de Tributação: Tributado

Operação Tributária: Não se Aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2011-27-23.png?version=1&modificationDate=1491229720000&api=v2)



Aba Dados ICMS

Alíquota do ICMS: Preencher de acordo com a operação

Redução Base ICMS (%): Percentual de acordo com a operação

IPI afeta a Base ICMS: Sim

Colocar Redução em: Em atendimento ao disposto da Lei, ocorrendo a redução da base de cálculo do ICMS, a diferença entre o campo Base ICMS e o campo Base Tributada ICMS do Lançamento Fiscal será gravado automaticamente no campo Isento ICMS ou Outros ICMS e acordo com a parametrização do campo “Colocar Redução em” definido no cadastro da Regra de ICMS vinculada ao CFOP.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2011-29-33.png?version=1&modificationDate=1491229842000&api=v2)



-   Regra de IPI




Aba Identificação

Tipo de Tributação: Tributado

Controla Fechamento: Marcado

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2012-03-33.png?version=1&modificationDate=1491231905000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2012-05-02.png?version=1&modificationDate=1491231969000&api=v2)

Ainda para que o fechamento do Valor Contábil seja calculado corretamente no Lançamento Fiscal, é necessário habilitar o campo “Controle de Fechamento” no cadastro da Regra de IPI aba Dados do IPI. Assim que habilitado o parâmetro será possível visualizar o campo “Valor Mercadoria IPI” que irá compor o valor da base do ICMS e assim ser executado o processo de redução da base do ICMS automaticamente.

Na inclusão do Lançamento Fiscal através do processo de Escrituração de Lançamentos no TOTVS Gestão de Estoque, Compra e Faturamento, todos os campos do lançamento serão gravados automaticamente visto que todas as informações já foram inseridas no sistema.



Valor da Mercadoria



Valor da Mercadoria

10.000,00

Valor IPI  Mercadoria

1.000,00 (10.000,00 x 10%)

Valor Total

11.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2011-48-07.png?version=1&modificationDate=1491231287000&api=v2)



ICMS e IPI



-   ICMS: Tributado




 Base ICMS

11.000,00

% Red. ICMS

46,66%

Base Tributada ICMS

5.867,40 (1.000,00 - 10%)

Alíquota ICMS

12%

Valor do ICMS

704,08 (5.867,40 \*12%)

Isento ICMS

5.132,60

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2011-56-18.png?version=2&modificationDate=1491231757000&api=v2)



-   IPI: Tributado




Base IPI

10.000,00

Valor IPI - Tributado

1.000,00 (10.000,00 \* 10%)

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2011-56-18.png?version=2&modificationDate=1491231757000&api=v2)



Valor Total da Situação Tributária: 11.000,00

 2\. Compra de matérias primas, produtos intermediários e material adquiridos de comerciantes atacadistas não contribuinte do IPI

Conforme constante no [Regulamento do IPI (RIPI) Art. 146 a 181](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm):

“Os estabelecimentos industriais, e os que são equiparados, poderão, ainda, creditar-se do imposto, relativo a matérias-primas, produtos intermediários e material, adquiridos de comerciante atacadista não contribuinte, calculado pelo adquirente mediante aplicação da alíquota a que estiver sujeito o produto, sobre 50% do seu valor, constante na respectiva nota fiscal".

Dessa forma o adquirente das mercadorias acima citadas poderão se creditar do IPI mediante aplicação da alíquota a que estiver sujeito ao produto mesmo que não tenha sido destacado o tributo não tenha sido destacado através da nota fiscal de saída do fornecedor.



-   [Parametrização Regra de ICMS / IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   Regra de ICMS



Aba Identificação 

Tipo de Tributação: Tributado

Operação Tributária: Não se Aplica



Aba Dados ICMS

Alíquota do ICMS: Preencher de acordo com a operação

Afeta Base do ICMS: Não



-   Regra de IPI




Aba Identificação 

Tipo de Tributação: Tributado 50%

Regra Tributárias: Marque a opção “NÃO Somar o IPI no Valor Contábil”

Na inclusão do Lançamento Fiscal no TOTVS Gestão Fiscal o campo Base IPI será grava com 50% do valor da mercadoria. O restante do valor (50%) será gravado no campo Outros IPI.

Observação

Observação: O valor do IPI deve ser digitado manualmente visto que a alíquota do IPI varia de acordo com o produto.

Em especial para esse tipo de operação, no processo na Escrituração de Lançamentos o valor não irá fechar com a conciliação básica uma vez que por determinação legal o valor contábil da nota fiscal emitida pelo fornecedor não é somado o valor do IPI.

Movimentação sendo tratada através do processo de Escrituração de Lançamentos no TOTVS Gestão de Estoque, Compra e Faturamento.

Valor da Mercadoria

Valor da Mercadoria

1.000,00



ICMS e IPI



-   ICMS: Tributado




 Base ICMS

1.000,00



Base Tributada ICMS

1.000,00



Alíquota ICMS

18%



Valor do ICMS

180,00

(1.000,00 \* 18%)



-   IPI: Tributado




Base IPI

500,00



Valor IPI - Tributado

50,00

500,00 \* 10%

Outros de IPI

500,00





Valor Total da Situação Tributária: 1.000,00

 3\. Complemento de ICMS sem valor contábil

O complemento do ICMS se aplica a situações onde o tenha sido escriturado uma nota fiscal anteriormente com todos os valores correto porém com o valor do ICMS a menor.



-   [Parametrização Regra de ICMS / IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   Regra de ICMS


 Aba Identificação

Tipo de Tributação: Outros

Operação Tributária: Não se Aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-18_16-38-50.png?version=1&modificationDate=1513625930000&api=v2)



Aba Dados ICMS

Alíquota do ICMS: Preencher de acordo com a operação

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-18_16-39-57.png?version=1&modificationDate=1513625998000&api=v2)



Aba Outros Dados

Ainda no cadastro da Regra de ICMS deve ser habilitado "Operação Complementar ICMS".

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-18_16-39-2.png?version=1&modificationDate=1513625943000&api=v2)

Observação

Para que o lançamento referenciado os movimento de complemento do ICMS seja escriturado deve ser habilitada a opção "Possui Documentos Relacionados" no cadastro da Natureza Fiscal no TOTVS Gestão Fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-18_16-40-15.png?version=1&modificationDate=1513626015000&api=v2)

O Lançamento Fiscal em questão não irá possuir Valor Contábil pois a sua finalidade é restrita a crédito do Valor do ICMS destacado a menor em uma nota fiscal já lançada anteriormente.

Todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

Assim será o Lançamento Fiscal, apenas com o destaque do valor a ser complementado o valor do ICMS.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-18_16-41-41.png?version=1&modificationDate=1513626102000&api=v2)



Valor Total da Situação Tributária: 0,00

 4\. Compra com ICMS ST Valor ST Contábiil

Esse exemplo visa demonstrar a característica do ICMS = Compra c/ ST Vlr. ST Contábil e como exemplo o IPI foi indicado como Outros, não deixando de observar que havendo a necessidade, a combinação do IPI pode ser alterada. Somente não poderá utilizar combinações diferenciadas para o ICMS no mesmo lançamento.



-   [Parametrização Regra de ICMS / IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

Neste tipo de operação é necessário que seja habilitado o parâmetro “Controla Fechamento” no cadastro da Regra de IPI para que seja executado o fechamento das colunas de ICMS / IPI e o Valor Contábil do lançamento. O fechamento e calculado da seguinte forma:

a)       Valor Contábil = Outros de ICMS + Valor ST do Lançameneto Fiscal

b)       Coluna de ICMS = Outros de ICMS + Valor ST do Lançameneto Fiscal

c)       Coluna de IPI = Outros de IPI + Complemento de IPI



-   Regra de ICMS

    .


Aba Identificação

Tipo de Tributação: Tributado

Operação Tributária: Substituição Tributária

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2015-53-18.png?version=1&modificationDate=1491245763000&api=v2)



Aba Dados ICMS

Alíquota do ICMS: Preencher de acordo com a operação

Redução Base ICMS (%):Informar a % quando houver incidência

Colocar Redução Em: Outros quando for informada %  Redução Base ICMS

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2015-56-56.png?version=1&modificationDate=1491245883000&api=v2)



Aba Dados ICMS ST

Alíquota S.T. / Interna D.A (%):Preencher de acordo com a operação

Redução Base ICMS S. T. / D.A. (%): Informar a % quando houver incidência

Margem do Lucro ICMS S.T. (%): Informar a % quando houver incidência

Somar ICMS S.T. Valor Contábil: Habilitado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2015-55-38.png?version=1&modificationDate=1491245817000&api=v2)



-   Regra de IPI



Aba Identificação

 Tipo de Tributação: Outros

Controla Fechamento: Habilitado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2015-58-38.png?version=1&modificationDate=1491246001000&api=v2)

Esse tipo de configuração de ICMS se aplica para operações de entrada.

Todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



Valor da Mercadoria



Valor da Mercadoria

30.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2016-37-55.png?version=1&modificationDate=1491248334000&api=v2)



ICMS e IPI



-   ICMS: Tributado




 Base ICMS

30.000,00

Base Tributada ICMS

30.000,00

Alíquota ICMS

12%

Valor do ICMS

3.600,00 (30.000,00 \*12%)

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2017-51-40.png?version=1&modificationDate=1491252824000&api=v2)



-   Substituição Tributária




Margem (%) 

50 

Base Subst. Tributária

45.000,00

Base Tributada (ST)

45.000,00

Alíquota (ST)

18%

ICMS Total

8.100,00

ICMS Próprio

3.600,00

Valor ST

4.500,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2017-56-45.png?version=1&modificationDate=1491253192000&api=v2)



-   IPI: Outros




Outros de IPI

30.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/03-04-2017%2016-36-58.png?version=2&modificationDate=1491248401000&api=v2)



Valor Total da Situação Tributária: 34,500,00

 5\. Complemento de ICMS ST

Sempre que houver algum erro no cálculo do ICMS ST deverá ser emitida Nota Fiscal complementar em nome do adquirente das mercadorias e/ou do tomador do serviços com os devidos acertos necessários.A emissão de uma nota fiscal de complemento de ICMS ST é necessária pelos seguintes motivos:

-   Erro na alíquota do imposto;

-   Pagamento de substituição tributária efetuada pelo destinatário, quando não efetuada ou efetuada a menor pelo substituto.


Outras situações em que se e utilizado o complemento do ICMS ST:

-   Antecipação tributária efetuada pelo destinatário apenas com complementação do diferencial de alíquota;

-   Antecipação tributária com MVA (Margem de Valor Agregado), efetuada pelo destinatário, encerrando a fase de tributação.;

-   ICMS pago na importação;

-   Branco - Substituição Tributária informada pelo substituto ou pelo substituído que não incorra em nenhuma das situações anteriores.


Para atender a legislação em relação a situação complementar do ICMS ST é necessário que seja criado um novo tributo com o Tipo de Tributo = "ICMS ST Complementar" e preencher o "Código de Antecipação Tributária", lembrando que este campo estará disponível somente para este Tipo de Tributo.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-30%2018%3A16%3A37.png?version=1&modificationDate=1490908637000&api=v2)

-   [Parametrização Regra de ICMS / IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   Regra de ICMS




Aba Identificação

Tipo de Tributação: Tributado

Operação Tributária: Outros (analisar a situação tributária da NF que está sendo complementada)

Alíquota do ICMS: Preencher de acordo com a operação

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-31%2013%3A0%3A8.png?version=1&modificationDate=1490976048000&api=v2)



Aba Outros Dados

Deve ser habilitado o parâmetro "Operação Complementar ICMS ST". 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-31%2013%3A1%3A2.png?version=1&modificationDate=1490976102000&api=v2)

Ainda nas configurações da Regra de ICMS deve ser habilitado o "Controla Fechamento Valores de ICMS/ICMS ST".

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-31%2013%3A2%3A16.png?version=1&modificationDate=1490976176000&api=v2)

Observação

Esse tipo de configuração do ICMS se aplica para Operações de Entrada.

Na inclusão do lançamento através do módulo de Escrituração de Lançamentos, todos os campos do lançamento serão gravados automaticamente visto que essas informações já foram inseridas no TOTVS Gestão de Gestão de Estoque, Compra e Faturamento.

Nos tributos do item do movimento no TOTVS Gestão de Estoque, Compra e Faturamento deve seu informado o tributos ICMS ST e ICMS ST Complementar. 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-31%2012%3A55%3A59.png?version=1&modificationDate=1490975800000&api=v2)

Na tela de Substituição Tributária e nos Itens do Lançamento Fiscal os campos "Base, Alíquota, Valor de ST Complementar, Código de Antecipação Tributária” serão preenchidos

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-31%2012%3A57%3A14.png?version=1&modificationDate=1490975875000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-31%2012%3A58%3A4.png?version=1&modificationDate=1490975925000&api=v2)

 6\. Compra de Ativo Imobilizado

De acordo com a [LEI COMPLEMENTAR Nº 102, DE 11 DE JULHO DE 2000 Art. 20](http://www.planalto.gov.br/ccivil_03/leis/lcp/lcp87.htm), os contribuintes não mais receberão o crédito integral nas compras de ativo imobilizado, no ato da entrada e sim se creditarão de 1/48 no período fiscal da respectiva aquisição do bem e nos demais meses subsequentes através de lançamentos mensais até que se contemple o valor do ICMS destacado pelo fornecedor:

"§ 5o Para efeito do disposto no caput deste artigo, relativamente aos créditos decorrentes de entrada de mercadorias no estabelecimento destinadas ao ativo permanente, deverá ser observado:" (NR)

"I – a apropriação será feita à razão de um quarenta e oito avos por mês, devendo a primeira fração ser apropriada no mês em que ocorrer a entrada no estabelecimento;" (AC)

Parametrização do controle do Ativo Imobilizado: [http://tdn.totvs.com/pages/releaseview.action?pageId=84541625](https://tdn.totvs.com/pages/releaseview.action?pageId=84541625).

Na entrada do ativo imobilizado permanente o contribuinte deverá escriturar no livro Registro de Entradas o documento fiscal relativo a aquisição do bem destinado ao ativo permanente no período de sua entrada no estabelecimento. O valor relativo ao ICMS deverá ser apresentado na coluna “Operações sem Créditos do Imposto – Outras”, lançamento na coluna “Observações” com a seguinte informação: Ativo permanente – ICMS a ser apropriado.



Observação

Para a impressão da Observação do Lançamento Fiscal no Livro fiscal Registro de Entradas deverá ser utilizada a variável \[LOB\] Observação do Lançamento.

Para associação a chapa dos bens no movimento do TOTVS Gestão de Gestão de Estoque, Compra e Faturamento. é necessário que o sistema esteja devidamente integrado com o [TOTVS Gestão Patrimonial](http://wikihelp.totvs.com.br/WikiHelp/PAT/PAT.Patrimonio.aspx). Uma vez geradas as chapas de bens, no momento da escrituração, estas serão associadas ao item do Lançamento Fiscal automaticamente.

Os valores de ICMS, diferencial de alíquota e frete referentes a estes Bens serão preenchidos no item.

-   [Cadastro CFOP](# "Cadastro CFOP")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   Regra de ICMS


Aba Identificação

Tipo de Tributação: Outros

Operação Tributária: Não se aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-39-21.png?version=1&modificationDate=1491511222000&api=v2)

Importante

Para este Tipo de Operação deve ser habilitada a opção "Ativo Imobilizado" disponível na aba Outros Dados no cadastro da Regra de ICMS vinculado ao CFOP.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-17%2018%3A18%3A35.png?version=1&modificationDate=1489785547000&api=v2)

Esse tipo de configuração de ICMS se aplica para operações de entrada de ativo imobilizado.

Todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



Valor da Mercadoria

Valor da Mercadoria

55.000,00



ICMS e IPI

-   ICMS: Tributado


Outros ICMS

55.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-2%2011%3A4%3A10.png?version=1&modificationDate=1488463473000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/integral.png?version=1&modificationDate=1487957064000&api=v2)



Item

-   Valores ICMS


Valor ICMS

9.900,00



Outros ICMS

55.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/1.48.png?version=1&modificationDate=1487949463000&api=v2)



O ID Patrimônio será escriturado na aba Informações Adicionais | Patrimônio localizada no item do Lançamento Fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/04-04-2017%2016-06-59.png?version=1&modificationDate=1491333096000&api=v2)

 7\. Compra de Ativo Imobilizado com Diferencial de Alíquota

Essa parametrização atende inclusão de compra para ativo imobilizado de fora do estado, em que o RICMS (Regulamento de ICMS), determina o recolhimento do diferencial de alíquota e posteriormente a apropriação do credito de ICMS sob a forma de 1/48 avos.



-   [Cadastro do CFOP](# "Cadastro do CFOP")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:



-   Regra de ICMS




Aba Identificação

Tipo de Tributação: Outros

Operação Tributária: Diferencial de Alíquota

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A17%3A54.png?version=1&modificationDate=1490390312000&api=v2)



Aba Dados ICMS

Alíquota ICMS (%): Preencher de acordo com alíquota exigida, neste exemplo utilizamos 12%.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A25%3A30.png?version=1&modificationDate=1490390768000&api=v2)



Aba Dados ICMS S.T.

Alíquota S.T. / Interna D.A. (%): Preencher de acordo com alíquota exigida, neste exemplo utilizamos 18%.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A27%3A28.png?version=1&modificationDate=1490390885000&api=v2)

Importante

Para este Tipo de Operação deve ser habilitada a opção "Ativo Imobilizado" disponível na aba Outros Dados no cadastro da Regra de ICMS vinculado ao CFOP.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A31%3A44.png?version=1&modificationDate=1490391141000&api=v2)

Esse tipo de configuração de ICMS se aplica para operações de entrada de ativo imobilizado com destaque do diferencial de alíquota.

Todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



-   Dados Fiscais


Valor da Mercadoria



Valor da Mercadoria

29.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A38%3A22.png?version=1&modificationDate=1490391540000&api=v2)

-   ICMS e IPI


ICMS: Outros



Outros ICMS

29.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A42%3A16.png?version=1&modificationDate=1490391773000&api=v2)



-   Diferencial de Alíquota


Diferencial de Alíquota



IPI Diferencial de Alíquota

1.160,00

Base ICMS + IPI

30.160,00

Alíquota Interna

18%

Alíquota Interestadual

12%

ICMS Interno

5.428,80

Valor ICMS Interestadual

3.480,00

ICMS Diferencial de Alíquota

1.809,60

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A46%3A45.png?version=1&modificationDate=1490392042000&api=v2)



**Valor Total da Situação Tributária: 30.160,00** 

 8\. Crédito do Ativo Imobilizado

De acordo com o [Decreto 41.218](http://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/d41218_2000.htm), o valor do crédito do CIAP (relativo aos créditos decorrentes de entrada de mercadorias no estabelecimento destinadas ao ativo imobilizado) deve ser creditado e lançado a cada período de apuração separadamente de acordo com o CFOP.

Todos os campos do Lançamento Fiscal serão gravados automaticamente visto que essas informações já estarão no sistema TOTVS Gestão de Estoque, Compra e Faturamento.



-   [Parametrização Regra de ICMS / IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

Para a escrituração da recuperação do crédito de 1/48 avos ao mês, deve-se utilizar a Natureza configurada com o ICMS = C\_Complementar, visto que para este tipo de ICMS o sistema não consiste os fechamentos de Valores de ICMS, IPI e Valor Contábil, contemplando assim a forma exigida por lei para escrituração deste lançamento.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-24%2018%3A46%3A45.png?version=1&modificationDate=1490392042000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-40-31.png?version=1&modificationDate=1491511310000&api=v2)

O movimento no TOTVS Gestão de Estoque, Compra e Faturamento deve obter os seguintes dados

-   Cli/For = Empresa;

-   Data do último dia do mês;

-   CFOP 1.604.XX;

-   Série W.


 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-42-27.png?version=1&modificationDate=1491511463000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-43-58.png?version=1&modificationDate=1491511499000&api=v2)

No movimento deve ser inserida a Observação que será impresso na colunal Operações com Crédito do Imposto do Livro Fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/06-04-2017%2017-44-31.png?version=1&modificationDate=1491511541000&api=v2)

O valor do crédito 1/48 será impresso nos seguintes Livros Fiscais:

-   Registro de Entrada;

-   Registro de Apuração;

-   Registro e Resumo de Apuração.


 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/livro%20de%20entrada.png?version=2&modificationDate=1488476944000&api=v2)

Importante

A coluna de Observação será preenchida apenas quando for inserida a variável LOB no layout do relatório fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/lob.png?version=1&modificationDate=1488476911000&api=v2)

 9\. ICMS Diferido Total (100%)

O diferimento é um benefício fiscal onde a cobrança do imposto e postergada conforme determinado pela legislação que define: quando ocorrerá; em que momento será cobrado; quem será o responsável pelo seu recolhimento posterior e quando será encerrado.

Vamos abordar dois exemplos, o diferido 100% e o diferimento parcial. Em ambas as situações, deve ser preenchido o % do diferimento no cadastro do produto em Anexo | Dados Fiscais por UR no campo “Diferimento Parcial ICMS”.



-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:

 

-   **Regra de ICMS**


**Aba Identificação**

Tipo de Tributação: Tributado

Operação Tributária: Não se Aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790630730/06-04-2017%2017-45-40.png?version=1&modificationDate=1695131050833&api=v2)

**Aba Dados ICMS**

Alíquota do ICMS: Preencher de acordo com a operação

**Situação Tributária**

Todos os campos do Lançamento Fiscal incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

Nesse tipo de operação o valor total da mercadoria e carregado no campo "Outros ICMS".



**Item**

-   **Valores ICMS**




Outros ICMS

20.000,00

-   **%Diferimento Parcial**


No item do Lançamento Fiscal será apresentado o percentual do diferimento no campo "% Diferimento Parcial ICMS" conforme informado no cadastro do produto citado anteriormente. 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790630730/15-02-2017%2016-31-31.png?version=1&modificationDate=1695131050697&api=v2)









 10\. ICMS Diferido Parcial

Para o Diferimento parcial, será necessário informar o percentual a ser aplicado no cadastro do produto conforme a legislação pertinente.

Importante

O ICMS Diferido é a diferença entre o valor da operação própria do ICMS (aquela que seria devida no caso de não haver diferimento) e o valor do ICMS Diferido.

-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   **Regra de ICMS**


**Aba Identificação**

Tipo de Tributação: Tributado

Operação Tributária: Não se Aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790630595/2.png?version=1&modificationDate=1695130866107&api=v2)



**Aba Dados ICMS**

Alíquota do ICMS: Preencher de acordo com a operação

Na inclusão do movimento no TOTVS Gestão de Estoque, Compra e Faturamento tanto no TOTVS Gestão Fiscal o valor do diferimento será calculado automaticamente pelo sistema.

Para este cálculo faz-se necessário o preenchimento do percentual do diferimento no cadastro do produto em Anexos | Dados Fiscais por UF

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790630595/05-04-2017%2019-08-42.png?version=1&modificationDate=1695130865937&api=v2)

Ao selecionar o código do produto no item do movimento ( TOTVS Gestão de Estoque, Compra e Faturamento) o percentual será preenchido automaticamente.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790630595/percentual%20diferimento%20do%20item.png?version=1&modificationDate=1695130865787&api=v2)

Todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**

Valor da Mercadoria

20.000,00

**ICMS e IPI**

-   -   **ICMS: Tributado**




Base ICMS

20.000,00

Base Tributada ICMS

20.000,00

Alíquota do ICMS

18%

Valor do ICMS

3.600,00

% do diferimento

60%

Valor do ICMS Diferido

2.160,00

Valor do ICM devido neste exemplo

1.440,00 (3.600,00 - 2.600,00)



**Valor Total da Situação Tributária: 20.000,00**

Observação

Quando se tratar de ICMS Diferido o valor do percentual será preenchido na item do Lançamento Fiscal.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790630595/1.png?version=1&modificationDate=1695130865600&api=v2)







 11\. Venda de Mercadoria com Substituição Tributária e Redução de Base de Cálculo

Vamos demonstrar qual a correta parametrização dos TOTVS Gestão de Estoque, Compra e Faturamento e também do TOTVS Gestão Fiscal para a correta criação do movimento e posterior escrituração do movimento.

 Ressaltando que havendo a necessidade, a combinação do IPI pode ser alterada porém para o ICMS somente se aplicará apenas a uma combinação.

Na inclusão do lançamento através do processo de Escrituração de Lançamentos, todos os campos do lançamento serão gravados automaticamente visto que essas informações já estarão no TOTVS Gestão de Estoque, Compra e Faturamento e será utilizado o mesmo recurso do lançamento do TOTVS Gestão Fiscal.



-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Exemplo do Lançamento Fiscal")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Aba Identificação**

Tipo de Tributação: Tributado

Operação Tributária: Substituição Tributária

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-10-43.png?version=1&modificationDate=1491430366000&api=v2)

**Aba Dados ICMS**

Alíquota do ICMS (%): Preencher de acordo com a operação, no nosso exemplo 18%

Redução de Base ICMS (%): Preencher de acordo com a operação, no nosso exemplo 5% 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-13-05.png?version=1&modificationDate=1491430456000&api=v2)



**Aba Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): Preencher de acordo com a operação, no nosso exemplo 18%

Redução Base ICMS S.T. / D.A. (%): Preencher de acordo com a operação, no nosso exemplo 10%

Margem de Lucro ICMS S.T. (%): Preencher de acordo com a operação, no nosso exemplo 50%

Soma ICMS S.T. Valor Contábil: Marcado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-14-17.png?version=1&modificationDate=1491430545000&api=v2)

Aviso

Demais configurações são de responsabilidade do usuário.

Os tributos parametrizados no tipo de movimento do TOTVS Gestão de Estoque, Compra e Faturamento deverão ser por item e considerando a alíquota da natureza.



-   **Fórmula da Base de Cálculo do ICMS**


((KQT \* KPU)) \* ((100-TABNAT('FATORICMS','V'))/100)

-   **Fórmula da Base de Cálculo do ICMS ST**


(KQT\*KPU)+ ((KQT\*KPU) \* TABNAT('FATORSUBST','V'))/100 − (((KQT\*KPU) + ((KQT\*KPU) \* TABNAT('FATORSUBST','V'))/100) \* TABNAT('FATORREDST','V'))/100 

-   **Fórmula do Valor Bruto**


KQT\*KPU+ TABITM('RATEIOFRETECTRC','V')

\+ TABITM('RATEIODESP','V')

\+ TABITM('RATEIOSEGURO','V')

\+ TABITM('RATEIOFRETE','V')

\- TABITM('RATEIODESC','V')  

-   **Fórmula do Valor Sub-Total**


MVB-VLT('IPI') 

-   **Fórmula do Valor Líquido**


MVB + VLT ('IPI') + VLT('IPI\_PAUTA') + MFR - MDT + MDZ + MSG + VLTST('ICMSST','ICMS')

Segue o exemplo do Lançamento Fiscal escriturado de acordo com as configurações anteriores:

**Valor da Mercadoria**



Valor da Mercadoria

20.000,00

 Figura

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/Valor%20Merc.png?version=1&modificationDate=1487693464000&api=v2)
**

**ICMS e IPI**



-   **ICMS: Tributado**


Base ICMS

20.000,00

Base Tributada ICMS

20.000,00

% Red. ICMS

5%

Base Tributada ICMS

19.000,00

Alíquota ICMS

18%

Valor ICMS

3.420,00

Isento ICMS

1.000,00 (20.000,00 - 19.000,00)

 Figura

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/777.png?version=1&modificationDate=1487693296000&api=v2)
**

**Substituição Tributária**



Margem (%)

50%

Base Subst. Tributária

30.000,00 (20.000,00 + 10.000,00)

Percentual de Redução ST

10%

Base Tributada (ST)

27.000,00 (30.000,00 - 3.000,00)

Alíquota (ST)

18%

ICMS Total

4.860,00 (27.000,00 \* 18%)

ICMS Próprio

3.420,00 (19.000,00 \* 18%)

Valor ST

1.440,00 (4.860,00 - 3.420,00)

 Figura

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/666.png?version=1&modificationDate=1487692942000&api=v2)
**

**Valor Total da Situação Tributária: 21.440,00** 

 12\. Compra com ICMS Isento com destaque do ICMSST

A hipótese de isenção com destaque da substituição tributária ocorre quando o estabelecimento que irá receber a mercadoria possui o direito de restituir o valor do imposto pago, exceto quando o fato for presumido.

Na inclusão do Lançamento Fiscal através do processo de Escrituração de Lançamentos, todos os campos do lançamento serão gravados automaticamente visto que essas informações já estarão no TOTVS Gestão de Estoque, Compra e Faturamento e será utilizado o mesmo recurso do lançamento do TOTVS Gestão Fiscal.



-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Exemplo do Lançamento Fiscal")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Aba Identificação**

Tipo de Tributação: Isento

Operação Tributária: Substituição Tributária

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-16-31.png?version=1&modificationDate=1491430669000&api=v2)

**Aba Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): Preencher de acordo com a operação, no nosso exemplo 18%

Redução Base ICMS S.T. / D.A. (%): Preencher de acordo com a operação, no nosso exemplo 33,3333%

Margem de Lucro ICMS S.T. (%): Preencher de acordo com a operação, no nosso exemplo 30%

ICMS S.T. NÃO considera o ICMS Próprio: Habilitado

Soma ICMS S.T. Valor Contábil: Habilitado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-17-32.png?version=1&modificationDate=1491430751000&api=v2)

Aviso

Demais configurações são de responsabilidade do usuário.

Os tributos parametrizados no tipo de movimento do TOTVS Gestão de Estoque, Compra e Faturamento deverão ser por item e considerando a alíquota da natureza.



-   **Fórmula da Base de Cálculo do ICMS**


(KQT\*KPU) - (((KQT\*KPU)) \* TABNAT('FATORICMS','V')/100)

-   **Fórmula da Base de Cálculo do ICMS ST**


(KQT\*KPU) + FOR('FRM1') - FOR('FRM2') \* (TABNATITEM('FATORREDST','V')/100) 

-   **Fórmula do Valor Bruto**


KQT\*KPU
\+ TABITM('RATEIOFRETECTRC','V')
\+ TABITM('RATEIODESP','V')
\+ TABITM('RATEIOSEGURO','V')
\+ TABITM('RATEIOFRETE','V')
\- TABITM('RATEIODESC','V') 

-   **Fórmula do Valor Sub-Total**


MVB-VLT('IPI') 

-   **Fórmula do Valor Líquido**


MVB + VLT ('IPI') + VLT('IPI\_PAUTA') + MFR - MDT + MDZ + MSG + VLTST('ICMSST','ICMS')

Segue o exemplo do Lançamento Fiscal escriturado de acordo com as configurações anteriores:

**Valor da Mercadoria**



Valor da Mercadoria

30.000,00

 Figura

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-6%2018%3A28%3A42.png?version=1&modificationDate=1488835748000&api=v2)
**

**ICMS e IPI**



-   **ICMS: Tributado**




Isento ICMS

30.000,00

 Figura

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-6%2018%3A29%3A20.png?version=1&modificationDate=1488835786000&api=v2)
**

**Substituição Tributária**



Margem (%)

30%

Base Subst. Tributária

39.000,00 (30.000,00 + 9.000,00)

Percentual de Redução ST

33,3333

Base Tributada (ST)

26.000,01 (39.000,00 - 12.999,99)

Alíquota (ST)

18%

ICMS Total

4.860,00 (26.000,01 \* 18%)

ICMS Próprio

0,00

Valor ST

4.680,00

 Figura

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-6%2018%3A30%3A26.png?version=1&modificationDate=1488835852000&api=v2)
**

**Valor Total da Situação Tributária: 34.680,00** 

 13\. Compra / Venda de mercadorias com desconto CONDICIONAL para o IPI

Nesse tipo de situação tributária com desconto condicional para o IPI, o valor do desconto afetará apenas a base de cálculo do ICMS e o valor contábil do Lançamento Fiscal.

[De acordo com o Decreto nº 7.212, de 15 de Junho de 2010, Art. 190, § 3º:](http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm)

*"Não podem ser deduzidos do valor da operação os descontos, diferenças ou abatimentos, concedidos a qualquer título, ainda que incondicionalmente (Lei nº 4.502, de 1964, art. 14, § 2º, Decreto-lei nº 1.593, de 1977, art. 27, e Lei nº 7.798, de 1989, art. 15)."*

Aviso

As regras de concessão do desconto condicional devem ser observadas pelo usuário.O desconto condicional é opicional, pode ser tratado pelo campo "Valor Extra" e "Valor Condicional.

[D](https://tdn.totvs.com/display/public/LRM/Desconto+x+Despesa+Condicional+por+Movimento)[esconto e Despesa Condicional](https://tdn.totvs.com/display/public/LRM/Desconto+x+Despesa+Condicional+por+Movimento)

Lembrando que para que seja levado para NF-e o valor deve ser informado no campo "Valor Extra" de acordo com a parametrização citada no documento abaixo.

[NF-e - Desconto Condicional](https://tdn.totvs.com/display/public/rm/NF-e+-+Desconto+condicional)

-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Dados do ICMS**

Valores Condicionais: Habilitado

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-19-18.png?version=1&modificationDate=1491430820000&api=v2)

-   **Regra de IPI**


**Dados IPI**

NÃO afeta base de IPI: Habilitado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-20-13.png?version=1&modificationDate=1491430883000&api=v2)

Para esse tipo de situação primeiramente deve ser configurada a fórmula da base de cálculo do ICMS e o valor líquido para que o desconto seja considerado em ambos.

Siga os passos do link abaixo para a correta parametrização:

[NF-e - Desconto condicional](https://tdn.totvs.com/display/rm/NF-e+-+Desconto+condicional)



Importante

Para que os valores desconto, despesa, frete e seguro sejam escriturado, as opções devem ser habilitadas no parâmetro do Tipo de Movimento através do menu Parâmetros | Gestão de

Estoque, Compras e Faturamento | Outras Movimentações, Vendas ou Compras (dependendo da classificação do movimento) | Selecione o Tipo de Movimento e clique em Parametrizar

| Acesse a Etapa 63 - Fis-Escrituração 2/2.

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-53-52.png?version=2&modificationDate=1491933328000&api=v2)

**Valor da Mercadoria**

Valor da Mercadoria

1.000,00

Desconto

100,00

Valor Total

900,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-55-43.png?version=1&modificationDate=1491933536000&api=v2)

**ICMS e IPI**



-   **ICMS: Tributado**


Base ICMS

900,00

Base Tributada ICMS

900,00

Alíquota ICMS

18%

Valor ICMS

162,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-58-30.png?version=2&modificationDate=1491933606000&api=v2)

-   **IPI: Tributado**


Base IPI

1.000,00

Valor IPI - Tributado

100,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-58-30.png?version=2&modificationDate=1491933606000&api=v2)



**Valor Total da Situação Tributária: 900,00** 

 14\. Compra / Venda de mercadorias com desconto CONDICIONAL para o ICMS e IPI

Para esse tipo de situação tributária, somente o Valor Contábil irá receber o valor do desconto. Os impostos ICMS e IPI não serão afetados pelo desconto.

Aviso

As regras de concessão do desconto condicional devem ser observadas pelo usuário.O desconto condicional é opicional, pode ser tratado pelo campo "Valor Extra" e "Valor Condicional.

[D](https://tdn.totvs.com/display/public/LRM/Desconto+x+Despesa+Condicional+por+Movimento)[esconto e Despesa Condicional](https://tdn.totvs.com/display/public/LRM/Desconto+x+Despesa+Condicional+por+Movimento)

Lembrando que para que seja levado para NF-e o valor deve ser informado no campo "Valor Extra" de acordo com a parametrização citada no documento abaixo.

[NF-e - Desconto Condicional](https://tdn.totvs.com/display/public/rm/NF-e+-+Desconto+condicional)

devem ser observadas pelo usuário.

-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Dados do ICMS**

Valores Condicionais: Habilitado

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-19-18.png?version=1&modificationDate=1491430820000&api=v2)

-   **Regra de IPI**


**Dados IPI**

NÃO afeta base de IPI: Habilitado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2019-20-13.png?version=1&modificationDate=1491430883000&api=v2)

Para esse tipo de situação primeiramente deve ser configurada a fórmula da base de cálculo do ICMS e o valor líquido para que o desconto seja considerado em ambos.

Siga os passos do link abaixo para a correta parametrização:

[NF-e - Desconto condicional](https://tdn.totvs.com/display/rm/NF-e+-+Desconto+condicional)  

Importante

Para que os valores desconto, despesa, frete e seguro sejam escriturado, as opções devem ser habilitadas no parâmetro do Tipo de Movimento através do menu Parâmetros | Gestão de

Estoque, Compras e Faturamento | Outras Movimentações, Vendas ou Compras (dependendo da classificação do movimento) | Selecione o Tipo de Movimento e clique em Parametrizar

| Acesse a Etapa 63 - Fis-Escrituração 2/2.

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-53-52.png?version=2&modificationDate=1491933328000&api=v2)

**Valor da Mercadoria**



Valor da Mercadoria

1.000,00

Desconto Condicional/Redução Produto

10,00

Despesa Condicional

20,00

Valor Total

1.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2011-40-40.png?version=1&modificationDate=1492008158000&api=v2)

**ICMS e IPI**



-   **ICMS: Tributado**


Base ICMS

1.000,00

Base Tributada ICMS

1.000,00

Alíquota ICMS

18%

Valor ICMS

180,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2011-42-50.png?version=4&modificationDate=1492008574000&api=v2)

-   **IPI: Tributado**


Base IPI

1.000,00

Valor IPI - Tributado

100,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2011-42-50.png?version=4&modificationDate=1492008574000&api=v2)



**Valor Total da Situação Tributária: 1.110,00 (1.000,00 + 100,00 - 10,00 + 20,00)¹**

**¹Onde**

1.000,00 = Valor da Mercadoria

100,00 = Valor do IPI

10,00 = Valor do Desconto Condicional

20,00 = Valor da Despesa Condicional

 15\. Utiliza ICMS por Dentro no D.A.

Governador do Estado de Minas Gerais, por meio do [Decreto n° 46.930/15](http://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2015/d46930_2015.htm), alterou a base de cálculo do imposto para fins do cálculo da parcela do imposto correspondente à diferença entre a alíquota interna e a interestadual nas seguintes operações de acordo com o Art. 1º do Decreto nº 43.080:

*XII - a operação interestadual que destine mercadoria ou bem a consumidor final não contribuinte do imposto, localizado neste Estado, relativamente à parcela do imposto correspondente à diferença entre a alíquota interna estabelecida para a mercadoria neste Estado e a alíquota interestadual;*

*XIII - a prestação interestadual de serviço destinada a este Estado, tomada por consumidor final não contribuinte do imposto, relativamente à parcela do imposto correspondente à diferença entre a alíquota interna estabelecida para a prestação do serviço neste Estado e a alíquota interestadual.*

Observação

Implementação baseada na legislação de Minas Gerais, porém o processo será habilitado para TODOS ESTADOS. 

-   [Base de Cálculo Com ICMS](# "Base de Cálculo Com ICMS")
-   [Base de Cálculo Sem ICMS](# "Base de Cálculo Sem ICMS")
-   [Base de Cálculo Sem ICMS - Interestadual](# "Base de Cálculo Sem ICMS - Interestadual")

Esta opção será utilizada quando a operação for referente ao ICMS por Dentro e a base do diferencial de alíquota for calculada com o ICMS.



-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:



-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Tributado

Operação Tributária: Diferencial de Alíquota

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-12-02.png?version=1&modificationDate=1491923618000&api=v2)



**Dados do ICMS**

Alíquota: 12% (conforme a operação)

Afeta Base do ICMS: Habilitado (frete será aplicado no exemplo a seguir)

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-15-02.png?version=1&modificationDate=1491923785000&api=v2)

**Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): 18% (conforme operação)

Utiliza ICMS por Dentro no D.A.: Habilitada a opção "Base de Cálculo Com ICMS"

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-17-08.png?version=1&modificationDate=1491923936000&api=v2)

Na opção **Utiliza ICMS por Dentro no D.A** igual a **"****Base de Cálculo Sem ICMS"**, o valores serão calculados da seguinte maneira:

Vop / (100-Aliq Interna)¹

Se o Campo % Redução de Base ICMS ST estiver habilitado a base será calculada da seguinte maneira:

Vop \* %Red / (100-Aliq Interna))¹

**¹Onde:**

Vop = Valor da Operação;

%Red = Percentual da redução da base de cálculo do ICMS

Aliq Interna= Alíquota alíquota interna aplicável à operação ou prestação no Estado de destino.

Nesse exemplo será considerado o %FECP.

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-55-08.png?version=1&modificationDate=1491926228000&api=v2)



**Valor da Mercadoria**



Valor da Mercadoria

1.000,00

Frete

10,00

Seguro

40,00

Acréscimo

30,00

Descontos

20,00

Valor Total

1.060,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-38-38.png?version=3&modificationDate=1491925276000&api=v2)

**ICMS e IPI**



-   **ICMS: Tributado**




Base ICMS

1.060,00

Base Tributada ICMS

1.060,00

Alíquota ICMS

12%

Valor ICMS

127,20

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-41-38.png?version=1&modificationDate=1491925366000&api=v2)

-   **IPI: Não Incidência**


Isento IPI

1.060,00



-   **Diferencial de Alíquota**




IPI Diferencial de Alíquota

0,00

Base ICMS + IPI

1.341,77 (1.060,00 / 0,79)²

Alíquota Interna

18%

Alíquota Interestadual

12%

ICM Interno

241,52

Valor ICMS Interestadual

161,01

ICMS Diferencial de Alíquota

80,51

**²Onde:**

1.060,00 = Valor da Mercadoria + Frete + Seguro + Acréscimos - Descontos

0,79 = Alíquota Interna e Alíquota do FECP ((100 - 18 -3) /100)

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2012-44-12.png?version=2&modificationDate=1491926505000&api=v2)



**Valor Total da Situação Tributária: 1.060,00**

Esta opção será utilizada quando a operação for referente ao ICMS por Dentro e a base do diferencial de alíquota for calculada excluindo o valor do imposto (ICMS Próprio).



-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Tributado

Operação Tributária: Diferencial de Alíquota

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-25-45.png?version=1&modificationDate=1491931717000&api=v2)



**Dados do ICMS**

Alíquota: 12% (conforme a operação)

Afeta Base do ICMS: Habilitado (frete será aplicado no exemplo a seguir)

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-29-02.png?version=1&modificationDate=1491931809000&api=v2)

**Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): 18% (conforme operação)

Utiliza ICMS por Dentro no D.A.: Habilitada a opção "Base de Cálculo Sem ICMS"

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-30-28.png?version=1&modificationDate=1491931897000&api=v2)

Na opção **Utiliza ICMS por Dentro no D.A** igual a **"****Base de Cálculo Sem ICMS"**, o valores serão calculados da seguinte maneira:

Vop / (100-Aliq Interna)¹

Se o Campo % Redução de Base ICMS ST estiver habilitado a base será calculada da seguinte maneira:

Vop \* %Red / (100-Aliq Interna))¹

**¹Onde:**

Vop = Valor da Operação;

%Red = Percentual da redução da base de cálculo do ICMS

Aliq Interna= Alíquota alíquota interna aplicável à operação ou prestação no Estado de destino.

A seguir exemplo em detalhes:

**Valor da Mercadoria**

Valor da Mercadoria

1.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-35-04.png?version=2&modificationDate=1491932199000&api=v2)

**ICMS e IPI**



-   **ICMS: Tributado**


Base ICMS

1.000,00

Base Tributada ICMS

1.000,00

Alíquota ICMS

12%

Valor ICMS

120,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-36-26.png?version=2&modificationDate=1491932433000&api=v2)



-   **Diferencial de Alíquota**




Base ICMS + IPI

1.073,17 (1.000,00 - 120,00 / 0,82)²

Alíquota Interna

18%

Alíquota Interestadual

12%

ICMS Interno

193,17 (1.073,17 \*18%)

ICMS Interestadual

128,78 (1.073,17 \* 12%)

ICMS Diferencial Alíquota

64,39 (193,17 - 128,78)

**²Onde:**

1.000,00 = Valor da Mercadoria

120,00 = Valor ICMS

0,82 = 0,82 = Alíquota Interna (100 - 18 / 100)

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/11-04-2017%2014-40-04.png?version=1&modificationDate=1491932462000&api=v2)



**Valor Total da Situação Tributária: 1.000,00**

Nas Operações de **Entrada com Diferencial de** **Alíquota**, Tipo Tributação "Outros", o Valor do ICMS Interestadual da tela do Diferencial de Alíquota, será calculado com Base no Valor da Mercadoria x Alíquota Interestadual.



-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

-   **Fórmula da Base do ICMS**


 KQT \* KPU \* (1- TABNAT ('FATORICMS' , 'V')/100)

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Outros

Operação Tributária: Diferencial de Alíquota

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/10-04-2017%2011-16-28.png?version=1&modificationDate=1491834382000&api=v2)

**Dados ICMS**

Alíquota: 12% (conforme a operação)

Redução Base ICMS: 26,67% (conforme a operação)

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/10-04-2017%2011-26-38.png?version=3&modificationDate=1491836129000&api=v2)

**Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): 18% (conforme a operação)

Redução Base ICMS S.T. / D.A (%): 26,67% (conforme a operação)

Utiliza ICMS por Dentro no D.A.: Habilitada a opção "Base de Cálculo Sem ICMS - Interestadual"

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/10-04-2017%2011-40-57.png?version=1&modificationDate=1491835343000&api=v2)

Na opção **Utiliza ICMS por Dentro no D.A** igual a **"****Base de Cálculo Sem ICMS - Interestadual"**, o valores serão calculados da seguinte maneira:

 ((Vop-Vl Int) / (100-Aliq Interna))¹

Observação

Nessa opção o ICMS Interestadual será excluído do valor da operação conforme destacado no documento fiscal.

Se o Campo % Redução de Base ICMS ST estiver habilitado a base será calculada da seguinte maneira:

((Vop-VI Int) \* %Red / ( 100-Aliq Interna))¹

**¹Onde:**

Vop = Valor da Operação;

Vl Int = Valor do ICMS Interestadual

%Red = Percentual da redução da base de cálculo do ICMS

Alq. Interna= Alíquota alíquota interna aplicável à operação ou prestação no Estado de destino.

A seguir exemplo em detalhes:

**Valor da Mercadoria**

Valor da Mercadoria

819,76

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2018-28-51.png?version=1&modificationDate=1491427807000&api=v2)

**ICMS e IPI**



-   **ICMS: Outros**




% Red. ICMS

26,67

Isento ICMS

218,63

Outros ICMS

601,13

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2018-43-01.png?version=1&modificationDate=1491428640000&api=v2)

-   **Diferencial de Alíquota**




Base ICMS + IPI

668,57 = (819,76 - 72,14 \* 0,7333 / 0,82)²

Alíquota Interna

18%

Alíquota Interestadual

12%

ICMS Interno

120,34 (668,57 \* 18%)

Valor ICMS Interestadual

72,14 (601,13 \* 12%)³

ICMS Diferencial Alíquota

48,20 (120,34 - 72,14)

**²Onde:**

819,76 = Valor da Mercadoria

72,14 = Valor ICMS Interestadual

0,82 = Alíquota Interna (100 - 18 / 100)

0,7333 = % Red. ICMS (100- 26,67 / 100)



**³Onde:**

601,13 = Valor Outros ICMS

12% = Alíquota Interestadual

72,14 = Valor ICMS Interestadual

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/05-04-2017%2018-42-23.png?version=1&modificationDate=1491428604000&api=v2)



O valor do ICMS Diferencial de Alíquota é calculado da seguinte maneira:



(Base ICMS + IPI \* Alíquota interna) - (Outros ICMS \* Alíquota Interestadual) = ICMS Diferencial Alíquota

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/10-04-2017%2013-38-30.png?version=1&modificationDate=1491842778000&api=v2)



**Valor Total da Situação Tributária: 819,76**

 16\. Não Incidência e Isento de ICMS

Esse tipo de configuração deve ser usada para escrituração de operações de compra e venda com tributação Não Incidência ou Isento de ICMS.

Por determinação legal ([Lei Complementar nº 87, de 13 de Setembro de 1996, Art. 3º](http://www.planalto.gov.br/ccivil_03/leis/LCP/Lcp87.htm)), justificamos os tipos de ICMS Não Incidência e Isento com a mesma forma de escrituração pelo sistema.



-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Não Incidência

Operação Tributária: Não se aplica

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2016-04-47.png?version=1&modificationDate=1492023969000&api=v2)

Para esse tipo de situação tributária deve ser informada a base de cálculo do tributo no movimento no TOTVS Gestão de Estoque, Compras e Faturamento.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2016-20-09.png?version=2&modificationDate=1492025033000&api=v2)

Lançamento Fiscal gerado após a execução do processo:

**Valor da Mercadoria**

Valor da Mercadoria

25.000,00

Valor Total

25.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2016-22-40.png?version=1&modificationDate=1492025039000&api=v2)

**ICMS e IPI**



-   **ICMS: Não Incidência**


Isento ICMS

25.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/12-04-2017%2016-23-30.png?version=1&modificationDate=1492025084000&api=v2)

**Valor Total da Situação Tributária: 25.000,00**

 17\. Redução Z Zerada

De acordo com o fisco, é obrigatório ao final de cada dia de funcionamento do estabelecimento a emissão da Redução Z mesmo quando não houve movimentação de cupom fiscal (venda).

-   [Parametrização Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:

-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Sem ICMS

Operação Tributária: Não se aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-26%2018%3A29%3A45.png?version=1&modificationDate=1493242241000&api=v2)

**Outros Dados**

Tipo Tributação: Sem ICMS

Operação Tributária: Não se aplica

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-26%2018%3A34%3A53.png?version=1&modificationDate=1493242549000&api=v2)



-   **Regra de IPI**


**Identificação**

Tipo Tributação: Sem IPI

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_11-38-21.png?version=1&modificationDate=1518705502000&api=v2)

Para a correta criação da Redução Z deve ser seguido os passos abaixo:



**1.** Crie a **Tributação Cupom Fiscal** através do menu no TOTVS Gestão de Estoque, Compra e Faturamento através do menu Cadastros | Fiscais | Mais... | Tributação Cupom Fiscal. Na identificação deve ser selecionado o Tipo = **Não Incidência** e o **Código Tributo**;

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A25%3A9.png?version=1&modificationDate=1493303165000&api=v2)

**2.** Na aba **Natureza de Operação** selecione o código do **CFOP** cadastrado anteriormente;

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A30%3A32.png?version=1&modificationDate=1493303488000&api=v2)

**3.** Em seguida deve ser criado a **Redução Z** através do menu Cadastros | Fiscais | Mais... | Redução Z;

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-26%2018%3A38%3A38.png?version=1&modificationDate=1493242774000&api=v2)

**4.** Deve ser vinculado o **Ponto de Venda** que não houve emissão de Cupom Fiscal no dia;

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-26%2018%3A38%3A38.png?version=1&modificationDate=1493242774000&api=v2)

**5.** Em seguida informe preencha o campo **COO Inicial** e **COO Final**;

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A10%3A6.png?version=1&modificationDate=1493302262000&api=v2)

**6\.** Acesse a aba **Totalizadores** e selecione o **Código de Tributação** que se refere ao cadastro da **Tributação do Cupom Fiscal**.

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A12%3A20.png?version=1&modificationDate=1493302397000&api=v2)



Após salva o cadastro da Redução Z vai ser possível visualizar na visão o status de Não Escriturado.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A38%3A57.png?version=1&modificationDate=1493303994000&api=v2)

No lote de Escrituração de Lançamento basta selecionar o Tipo de Exportação e o Período Inicial e Final.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A49%3A5.png?version=1&modificationDate=1493304602000&api=v2)

Todos os valores do Lançamento Fiscal vão ser zerados:

**Valor da Mercadoria**

Valor da Mercadoria

0,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A56%3A4.png?version=1&modificationDate=1493305020000&api=v2)

**ICMS e IPI**



-   **ICMS: Sem ICMS**

-   **IPI: Sem IPI**


 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-27%2011%3A56%3A19.png?version=1&modificationDate=1493305036000&api=v2)

**Valor Total da Situação Tributária: 0,00**

Observação

O erro apresentado pelo TOTVS Gestão de Estoque, Compra e Faturamento ao tentar escriturar a Redução Z sem cupom fiscal quando não parametrizado de forma correta é o seguinte:

*Erro: Redução Z sem Movimentação. Não foi possível localizar nenhuma Natureza de Operação FISCAL*

*Com Tipo de ICMS "Sem ICMS", Tipo de IPI "Sem IPI" e cujo Tipo de ICMS seja Sem Valor Contábil.*
*Verifique o Cadastro do Ponto de Venda associado à esta Redução Z!*

 18\. ICMS S.T. Considera Redução no Cálculo do ICMS Próprio

Será demonstrada a correta parametrização no TOTVS Gestão Fisal e TOTVS Gestão de Estoque, Compra e Faturamento quando utilizado o parâmetro **Considera Redução no Cálculo do ICMS Próprio.**

-   [Parametrização da Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Exemplo de Movimento](# "Exemplo de Movimento")

Nesse exemplo vamos demonstrar a parametrização do CFOP quando marcado o parâmetro **Considera Redução no Cálculo do ICMS Próprio**:



-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Tributado

Operação Tributária: Substituição Tributária

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2011%3A30%3A9.png?version=1&modificationDate=1493389866000&api=v2)

**Dados ICMS**

Alíquota ICMS (%): Nesse exemplo foi utilizada a alíquota de 12%

Coloca Redução Em: Isento

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2011%3A34%3A0.png?version=1&modificationDate=1493390097000&api=v2)

**Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): Nesse exemplo utilizamos 18%

Redução Base ICMS S.T. / D.A. (%): Nesse exemplo utilizamos 95%

Margem de Lucro ICMS S.T. (%): Nesse exemplo utilizamos 34,15%

Soma ICMS S.T. Valor Contábil: Habilitado

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2011%3A36%3A56.png?version=1&modificationDate=1493390273000&api=v2)

-   **Fórmula da Base do ICMS**


KQT\*KPU



-   **Fórmula da Base do ICMS S.T.**


(((KQT \* KPU)+LVL('IPI'))

\+ ((((KQT \* KPU)+LVL('IPI'))\* TABNATITEM('FATORSUBST','V'))/100))

 - (((KQT \* KPU)+LVL('IPI'))

\+ ((((KQT \* KPU)+LVL('IPI'))\* TABNATITEM('FATORSUBST','V'))/100))

\* ((TABNATITEM('FATORREDST','V'))/100)

-   **Fórmula do Valor Líquido**


(KQT \* KPU + VLT ('IPI'))

\+ VLT('ICMSST')

\- (((KQT \* KPU) \* (0.05))\* 0.12)

-   **Fórmula da base do IPI**


KQT\*KPU

Segue o exemplo do Lançamento Fiscal, lembrando que todos, os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**



Valor da Mercadoria

2.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A16%3A25.png?version=1&modificationDate=1493399842000&api=v2)



**ICMS e IPI**

-   **ICMS Tributado**




Base ICMS

2.000,00

Base Tributada ICMS

2.000,00

Alíquota ICMS

12%

Valor ICMS

240,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A27%3A59.png?version=1&modificationDate=1493400536000&api=v2)



-   **IPI Tributado**


Base IPI

2.000,00

Valor IPI - Tributado

200,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2015%3A18%3A2.png?version=1&modificationDate=1493403539000&api=v2)



**Substituição Tributária**



Margem

34,15%

Base Subst. Tributária

2.951,30 (2.200,00 \* 1,3415)¹

Percentual de Redução S.T.

95%

Base Tributada (S.T.)

147,57 (2.951,30 \* 0,05)²

Alíquota (S.T.)

18%

ICMS Total

26,50 (147,57 \* 18%)

ICMS Próprio

12,00 (2.000,00 \* 12%)

Valor S.T.

14,56 (26,50 - 12,00)³

**²Onde:**

2.200,00 = Valor da Mercadoria + Valor do IPI

1,3415 = (100 + 34,15 / 100)

**³Onde:**

2.951,30 = Base Subst. Tributária

0,05 = 100 - 95



**³Onde:**

26,50 = ICMS Total

12,00 = ICMS Próprio

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A30%3A21.png?version=1&modificationDate=1493400678000&api=v2)

**Valor Total da Situação Tributária: 2.214,56**

 19\. ICMS Desonerado Total

Será demonstrada a correta parametrização no TOTVS Gestão Fiscal e TOTVS Gestão de Estoque, Compra e Faturamento quando utilizado o parâmetro **ICMS Desonerado.**

-   [Parametrização da Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Exemplo de Movimento](# "Exemplo de Movimento")

Nesse exemplo vamos demonstrar a parametrização do CFOP quando marcado o parâmetro **ICMS Desonerado.**



-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Tributado

Operação Tributária: Substituição Tributária

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_12-18-15.png?version=1&modificationDate=1518707895000&api=v2)

**Dados ICMS**

Alíquota ICMS (%): Nesse exemplo foi utilizada a alíquota de 12%

Coloca Redução Em: Isento

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_12-20-47.png?version=1&modificationDate=1518708048000&api=v2)

-   **Fórmula da Base do ICMS**


KQT\*KPU

-   **Fórmula da Base do ICMS S.T.**


(((KQT \* KPU)+LVL('IPI'))

\+ ((((KQT \* KPU)+LVL('IPI'))\* TABNATITEM('FATORSUBST','V'))/100))

 - (((KQT \* KPU)+LVL('IPI'))

\+ ((((KQT \* KPU)

+LVL('IPI'))\* TABNATITEM('FATORSUBST','V'))/100))

\* ((TABNATITEM('FATORREDST','V'))/100)

-   **Fórmula do Valor Líquido**


(KQT \* KPU + VLT ('IPI'))

\+ VLT('ICMSST')

\- (((KQT \* KPU) \* (0.05))\* 0.12)

-   **Fórmula da base do IPI**


KQT\*KPU

Segue o exemplo do Lançamento Fiscal, lembrando que todos, os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**

Valor da Mercadoria

2.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A16%3A25.png?version=1&modificationDate=1493399842000&api=v2)



**ICMS e IPI**

-   **ICMS Tributado**


Base ICMS

2.000,00

Base Tributada ICMS

2.000,00

Alíquota ICMS

12%

Valor ICMS

240,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A27%3A59.png?version=1&modificationDate=1493400536000&api=v2)



-   **IPI Tributado**




Base IPI

2.000,00

Valor IPI - Tributado

200,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2015%3A18%3A2.png?version=1&modificationDate=1493403539000&api=v2)



**Substituição Tributária**

Margem

34,15%

Base Subst. Tributária

2.951,30 (2.200,00 \* 1,3415)¹

Percentual de Redução S.T.

95%

Base Tributada (S.T.)

147,57 (2.951,30 \* 0,05)²

Alíquota (S.T.)

18%

ICMS Total

26,50 (147,57 \* 18%)

ICMS Próprio

12,00 (2.000,00 \* 12%)

Valor S.T.

14,56 (26,50 - 12,00)³

**²Onde:**

2.200,00 = Valor da Mercadoria + Valor do IPI

1,3415 = (100 + 34,15 / 100)

**³Onde:**

2.951,30 = Base Subst. Tributária

0,05 = 100 - 95



**³Onde:**

26,50 = ICMS Total

12,00 = ICMS Próprio

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A30%3A21.png?version=1&modificationDate=1493400678000&api=v2)

**Valor Total da Situação Tributária: 2.214,56**

 20\. ICMS Desonerado Parcial

Será demonstrada a correta parametrização no TOTVS Gestão Fisal e TOTVS Gestão de Estoque, Compra e Faturamento quando utilizado o parâmetro **ICMS Desonerado com redução da base do ICMS.**

-   [Parametrização da Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Exemplo de Movimento](# "Exemplo de Movimento")

Nesse exemplo vamos demonstrar a parametrização do CFOP quando marcado o parâmetro **ICMS Desonerado com redução da base do ICMS.**



-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Tributado

Operação Tributária: Não se Aplica

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-5-17%2014%3A28%3A36.png?version=1&modificationDate=1495042117000&api=v2)

**Dados ICMS**

Alíquota ICMS (%): Nesse exemplo foi utilizada a alíquota de 18%

Redução Base ICMS (%): 30%

ICMS Desonerado: Habilitado

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-5-17%2014%3A29%3A20.png?version=1&modificationDate=1495042161000&api=v2)
|



-   **Regra de IPI**


 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-5-17%2014%3A30%3A3.png?version=1&modificationDate=1495042203000&api=v2)

-   **Fórmula do Valor Bruto**


KQT\*KPU

-   **Fórmula do Valor Sub-Total**


MVB

-   **Fórmula do Valor Líquido**


((KQT \* KPU) + VLT('IPI')) - VLTICMSDES('ICMS')

-   **Fórmula da Base do ICMS**


(KQT \* KPU) \* ((100-TABNAT('FATORICMS','V'))/100)

-   **Fórmula da base do IPI**


KQT\*KPU

Segue o exemplo do Lançamento Fiscal, lembrando que todos, os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**

Valor da Mercadoria

2.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A16%3A25.png?version=1&modificationDate=1493399842000&api=v2)



**ICMS e IPI**

-   **ICMS Tributado**




Base ICMS

2.000,00

Base Tributada ICMS

2.000,00

Alíquota ICMS

12%

Valor ICMS

240,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A27%3A59.png?version=1&modificationDate=1493400536000&api=v2)



-   **IPI Tributado**




Base IPI

2.000,00

Valor IPI - Tributado

200,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2015%3A18%3A2.png?version=1&modificationDate=1493403539000&api=v2)



**Substituição Tributária**



Margem

34,15%

Base Subst. Tributária

2.951,30 (2.200,00 \* 1,3415)¹

Percentual de Redução S.T.

95%

Base Tributada (S.T.)

147,57 (2.951,30 \* 0,05)²

Alíquota (S.T.)

18%

ICMS Total

26,50 (147,57 \* 18%)

ICMS Próprio

12,00 (2.000,00 \* 12%)

Valor S.T.

14,56 (26,50 - 12,00)³

**¹Onde:**

2.200,00 = Valor da Mercadoria + Valor do IPI

1,3415 = (100 + 34,15 / 100)

**²Onde:**

2.951,30 = Base Subst. Tributária

0,05 = 100 - 95



**³Onde:**

26,50 = ICMS Total

12,00 = ICMS Próprio

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-4-28%2014%3A30%3A21.png?version=1&modificationDate=1493400678000&api=v2)

**Valor Total da Situação Tributária: 2.214,56**

 21\. FECP Incidente sobre o ICMS S.T.

Será demonstrada a correta parametrização no TOVS Gestão Fiscal e TOTVS Gestão de Estoque, Compra e Faturamento quando o valor do **FECP incide sobre o valor do ICMS ST**. Esse tipo de movimento se aplica para operações de saída de dentro e fora do estado. 

-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Dados Fiscais do Produto](# "Dados Fiscais do Produto")
-   [Exemplo de Movimento](# "Exemplo de Movimento")

Nesse exemplo vamos demonstrar a parametrização do CFOP para o cálculo do **FECP sobre o ICMS ST**.



-   **Regra de ICMS**


**Identificação**

Tipo Tributação: Tributado

Operação Tributária: Substituição Tributária

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_17-42-0.png?version=1&modificationDate=1512506521000&api=v2)

**Dados ICMS**

Alíquota ICMS (%): Nesse exemplo foi utilizada a alíquota de 13%

Lançar IPI Em: Outros

Colocar Redução Em: Isentos

Lançar Redução de Produtos Em: Não Lança

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_17-42-51.png?version=1&modificationDate=1512506572000&api=v2)
|

**Dados ICMS S.T.**

Alíquota S.T. / Interna D.A. (%): Nesse exemplo foi utilizada a alíquota de 19%

Situação da Retenção ICMS S.T.: Substituto Tributário

% ICMS UF Destinatário: Nesse exemplo foi utilizada a alíquota de 40%

Utiliza ICMS por Dentro no D.A.: Não Utiliza

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_17-45-17.png?version=1&modificationDate=1512506718000&api=v2)
|

-   **Regra de IPI**


 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_17-48-10.png?version=1&modificationDate=1512506891000&api=v2)

Pode ser utilizado cadastro básico das fórmulas, pois o calculo é feito internamente no processo de Escrituração de Lançamentos.

-   **Fórmula do Valor Bruto**


KQT\*KPU

-   **Fórmula do Valor Sub-Total**


MVB

-   **Fórmula do Valor Líquido**


((KQT \* KPU) + VLT('IPI'))

-   **Fórmula da Base do ICMS**


(KQT \* KPU) \* ((100-TABNAT('FATORICMS','V'))/100)

-   **Fórmula da Base do ICMS S.T.**


(((KQT\*KPU) + LVL('IPI'))

\- ((KQT\*KPU) + TABITM('RATEIOFRETECTRC','V') + TABITM('RATEIODESP','V') + TABITM('RATEIOSEGURO','V') + TABITM('RATEIOFRETE','V') - TABITM('RATEIODESC','V')

\+ LVL('IPI')) \* (TABNAT('FATORREDST','VALOR')/100))

Para o que o cáculo seja efetuado, é necessário informar o % FECP no cadastro do produto selecionado no movimento. Acesse ***Cadastros | Produto | Anexos | Dados Fiscais por UF***.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_18-1-22.png?version=1&modificationDate=1512507682000&api=v2)

Segue o exemplo do Lançamento Fiscal, lembrando que todos, os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**



Valor da mercadoria

R$ 7.000,00



 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_18-6-17.png?version=1&modificationDate=1512507977000&api=v2)



**ICMS e IPI**

-   **ICMS Tributado**




Base ICMS

7.000,00

Base Tributada ICMS

7.000,00

Alíquota ICMS

13%

Valor ICMS

910,00

Valor ICMS FECP

14,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-5_18-14-11.png?version=1&modificationDate=1512508451000&api=v2)



**Substituição Tributária**



Margem

0,0000%

Base Subst. Tributária

7.000,00

Base Tributada (S.T.)

7.000,00

Alíquota (S.T.)

19%

ICMS Total

1.330,00 (7.000,00 \* 19%)

ICMS Próprio

910,00 (7.000,00 \* 13%)

Valor S.T.

420,00 (1.330,00 - 910)¹

Valor ICMS FECP

140,00 (7.000,00 \* 2%)²

**¹Onde:**

1.330,00 = ICMS Total

910,00 = ICMS Próprio

**²Onde:**

7.000,00 = Base Tributada (S.T.)

2% = Percentual do FECP

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-12-7_10-17-9.png?version=1&modificationDate=1512652630000&api=v2)

**Valor Total da Situação Tributária: 7.000,00**

 22\. ICMS Pautado

Arroz adquirido de produtor rural estabelecido em outro estado. Imposto calculado sobre preço de pauta, diverso do preço efetivamente praticado na operação. Crédito limitado à aplicação da alíquota sobre o preço efetivo. Possibilidade de glosa do crédito excedente, com supedâneo no [Art. 29 da lei 10.297/1996](http://legislacao.sef.sc.gov.br/html/leis/1996/lei_96_10297.htm).

-   [Cadastro do Tributo](# "Cadastro do Tributo")
-   [Cadastro do Produto](# "Cadastro do Produto")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Cadastro do Tipo de Movimento](# "Cadastro do Tipo de Movimento")
-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")
-   [Lançamento Fiscal Escriturado](# "Lançamento Fiscal Escriturado")

Para que seja calculado o IPI Pautado é necessário que seja selecionada a opção "Pauta do Produto" seja selecionado no parâmetro Burcas Alíquota do cadastro do tributo.

Acesse Cadastros | Tributos e cadastre o tributo IPI Pautado com as seguintes informações:

**Sigla**: ICMS

**Tipo tributo fiscal**: ICMS

**Abrangência do Tributo**: Mensal

**Tipo**: Variável

**Incidência**: Produto

**Buscar Alíquota:** Tipo movimento

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_15-50-31.png?version=1&modificationDate=1524595831000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_15-50-58.png?version=1&modificationDate=1524595859000&api=v2)

Necessário o preenchimento da Pauto do Produto no cadastro do produdo

Acesse o menu Cadastro | Produto | Anexo | Pautas do Produto e preencher os seguintes campos pertinentes a pauta do produto:

**Estado**: Selecionar o estado de acordo com operação.

**Código do Tributo**: Preencher do tributo a ser considerado na pauta (ICMS).

**Início de Vigência**: Informar data inicial pauta deste tributo.

**Fim de Vigência:** Informar data final pauta deste tributo.

**Alíquota Débito:** Aplica-se apenas para os tributos PIS e COFINS.

**Alíquota Crédito**: Aplica-se apenas para os tributos PIS e COFINS.

**Unidade:** Informar unidade utilizada para a Alíquota AD REM, esta é a unidade do fator de conversão da unidade do produto preenchida em Cadastro | Produto | Controle de Estoque | Unidades | Unidade de Controle.

**Preço/Pauta**: Preencher de acordo com a pauta do produto.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_15-52-27.png?version=1&modificationDate=1524595948000&api=v2)

***Observação***: Não poderão ser inseridos registros com a mesma combinação de Código Coligada, Tributo e dentro de um mesmo intervalo de vigência.

-   **Fórmula da Base do ICMS**

Deve ser definida uma fórmula para a Base de Cálculo do **ICMS** que buscará o **Preço de Referência** do Produto do Anexo “**Pautas do Produto**” (função TABPRDPAUTA), multiplicando este preço pela sua respectiva quantidade:

**TABPRDPAUTA (‘ICMS’, 'PRECOREFERENCIA', 'V') \* KQT**



**Para a execução da fórmula devem ser consistidos:**

a)      A Data do Movimento deve estar dentro da vigência da Pauta;

b)      Deve ser selecionada a pauta considerando o **Estado de origem** da mercadoria e na **saída** considera-se o **Estado da Filial**.

É necessário selecionar o tributo dentro do cadastro do Tipo de Movimento. Acesse Ambientes | Parâmetros | Gestão de Estoque, Compra e Faturamento | Avançar...| Selecione o processo onde se encontra o tipo de movimento | Editar | Avançar | Etapa 65 Fis - Tributação - Item | na coluna "Procurar Alíquota Em" **Pauta do produto**.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_16-9-20.png?version=1&modificationDate=1524596960000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_16-10-15.png?version=1&modificationDate=1524597015000&api=v2)



Ainda dento da parametrização do tipo de movimento deve ser selecionada a fórmula do ICMS Pautado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_16-11-12.png?version=1&modificationDate=1524597072000&api=v2)

***Observação***: Devendo considerar a alíquota do ICMS informado no cálculo da natureza, a coluna Busca "Procurar Alíquota Em" deverá ser configurada para buscar a alíquota do cadastro do CFOP.

o cálculo se conduzirá da seguinte maneira:

*Resulta da Fórmula do ICMS Pautado x Alíquota do ICMS*

A seguir a parametrização do Regra do ICMS.

-   **Regra de ICMS**

**Identificação**

Tipo Tributação: Tributado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_16-13-3.png?version=1&modificationDate=1524597184000&api=v2)

**Dados ICMS**

Habilitar a opção "ICMS Indexado"

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-24_16-13-25.png?version=1&modificationDate=1524597206000&api=v2)

Vamos demonstrar primeiramente o cálculo considerando a alíquota de débito/crédito informada na Pauta do Produto.

Quantidade: 1

Valor unitário: 100,00

Preço / Pauta do exemplo: 2.500,00

Com os valores acima o movimento criado no TOTVS Gestão de Estoque, Compra e Faturamento apresenta da seguinte forma:



Quantidade

\=

1

Valor da Pauta

x

2.500,00

Base do ICMS

\=

2.500,00 ( x 2.500,00)¹

Alíquota do ICMS

\=

7%

Valor do ICMS

\=

175,00(2.500,00 x 7 / 100)²

****¹Onde**:**

2.500,00 = Quantidade x Valor da Pauta

****²Onde**:**

175,00 = Alíquota do ICMS x Base do ICMS

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-25_10-24-5.png?version=1&modificationDate=1524662646000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-25_10-24-23.png?version=1&modificationDate=1524662663000&api=v2)

Segue detalhamento do Lançamento Fiscal após a execução do processo de Escrituração de Lançamentos, lembrando que toso os valores serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**



Valor do ICMS

100,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-25_10-25-49.png?version=1&modificationDate=1524662750000&api=v2)



**ICMS e IPI**

-   **ICMS: Tributado**



Base ICMS

2.500,00

Base Tributada ICMS

2.500,00

Alíquota ICMS

7%

Valor ICMS

175,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-25_10-27-31.png?version=1&modificationDate=1524662851000&api=v2)

**ICMS e IPI**

-   **IPI: Tributado**



Base do IPI

100,00

Valor IPI - Tributado

10,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-4-25_10-28-53.png?version=1&modificationDate=1524662933000&api=v2)



**Valor Total da Situação Tributária: 110,00**

IMPORTANTE

Após a escrituração do movimento, o Lançamento Fiscal não poderá ser recalculado, pois será alterada a base do ICMS gerando inconsistência de valores.

 23\. ICMS Monofásico

-   [Cadastro do Tributo](# "Cadastro do Tributo")
-   [Cadastro do Produto](# "Cadastro do Produto")
-   [Cadastro do Tipo de Movimento](# "Cadastro do Tipo de Movimento")
-   [Parametrização da Regra de ICMS](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")
-   [Lançamento Fiscal Escriturado](# "Lançamento Fiscal Escriturado")

No cadastro do tributo é imprescindível que exista **apenas um tributo ICMS cadastrado**.

Para ser calculado o ICMS Monofásico é necessário selecionar a opção "Pauta do Produto" no parâmetro Burcas Alíquota do cadastro do tributo.

Acesse Cadastros | Tributos e cadastre o tributo IPI Pautado com as seguintes informações:

**Sigla**: ICMS

**Tipo tributo fiscal**: ICMS

**Abrangência do Tributo**: Mensal

**Tipo**: Variável

**Incidência**: Produto

**Buscar Alíquota:** Pauta do Produto

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image2023-9-19_13-20-0.png?version=1&modificationDate=1695140400373&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image-2025-9-30_14-10-12.png?version=1&modificationDate=1759252213750&api=v2)

Necessário o preenchimento da Pauto do Produto no cadastro do produto

Acesse o menu Cadastro | Produto | Anexo | Pautas do Produto e preencher os seguintes campos pertinentes a pauta do produto:

**Estado**: Selecionar o estado de acordo com operação.

**Código do Tributo**: Preencher do tributo a ser considerado na pauta (ICMS).

**Início de Vigência**: Informar data inicial pauta deste tributo.

**Fim de Vigência:** Informar data final pauta deste tributo.

**Alíquota Débito:** Aplica-se apenas para os tributos ICMS e ICMS-ST.

**Alíquota Crédito**: Aplica-se apenas para os tributos ICMS e ICMS-ST.

**Unidade:** Informar unidade utilizada para a Alíquota AD REM, esta é a unidade do fator de conversão da unidade do produto preenchida em Cadastro | Produto | Controle de Estoque | Unidades | Unidade de Controle.

**Preço/Pauta**: Preencher conforme a pauta do produto.

***Observação***: Não poderão ser inseridos registros com a mesma combinação de Código, Coligada, Tributo e em um mesmo intervalo de vigência.

É necessário selecionar o tributo no cadastro do Tipo de Movimento. Acesse Ambientes | Parâmetros | Gestão de Estoque, Compra e Faturamento | Avançar...| Selecione o processo onde se encontra o tipo de movimento | Editar | Avançar | Etapa 65 Fis - Tributação - Item | na coluna "Procurar Alíquota Em" **Pauta do produto**.

 Figura



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image2023-9-19_13-34-1.png?version=1&modificationDate=1695141242167&api=v2)

**Identificação**

Tipo Tributação: Tributado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image2023-9-19_13-34-20.png?version=1&modificationDate=1695141260293&api=v2)



Tipo Tributação: Diferido

Segue a mesma regra do ICMS Diferido, porém deve ser usado o CST 53.

Consultar as regras sobre o ICMS Diferido:

[Escrituração de Lançamento Fiscais - ICMS Diferido Total](/pages/viewpage.action?pageId=790630730)

[Escrituração de Lançamento Fiscais - ICMS Diferido Parcial](/pages/viewpage.action?pageId=790630595)

Cálculo considerando a alíquota de débito/crédito informada na Pauta do Produto:

Com os valores acima o movimento criado no TOTVS Gestão de Estoque, Compra e Faturamento apresenta da seguinte forma:



Valor

\=

950

Alíquota AD REM

\=

1,94%

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image2023-9-19_12-56-53.png?version=1&modificationDate=1695139013767&api=v2)



Segue detalhamento do Lançamento Fiscal após a execução do processo de Escrituração de Lançamentos, lembrando que toso os valores serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**



Valor do ICMS

950,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image2023-9-19_13-13-56.png?version=1&modificationDate=1695140037090&api=v2)



**ICMS** **Tributado**



Alíquota AD REM

1,94%

Valor ICMS

950,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/790628930/image2023-9-19_13-12-30.png?version=1&modificationDate=1695139950523&api=v2)



**Valor Total da Situação Tributária: 950,00**















































































 24\. Diferencial de Alíquota

A partir de 01/01/2016 passa a vigor a [Emenda Constitucional 87/2015](http://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc87.htm), que apresenta as alterações em relação ao conceito e no cálculo do ICMS nas operações interestaduais realizadas com consumidor final não contribuinte do imposto.

Nas planilhas apresentadas abaixo, são demonstradas algumas situações e a parametrização dentro do sistema para as operações de entrada e de saída onde se aplica o Diferencial de Alíquota.

[Saída\_com\_Diferencial\_de\_Alíquota.xlsx](/download/attachments/269432397/Sa%C3%ADda_com_Diferencial_de_Al%C3%ADquota.xlsx?version=3&modificationDate=1513869403000&api=v2)

[Entrada\_com\_Diferencial\_de\_Alíquota.xlsx](/download/attachments/269432397/Entrada_com_Diferencial_de_Al%C3%ADquota.xlsx?version=6&modificationDate=1513869868000&api=v2)

***<Fim Tributos Passíveis de Escrituração>***

IPI é um tributo administrado pela Receita Federal, não cumulativo e que incidente sobre a industrialização de produtos manufaturados.

Se trata de um tributo de carácter seletivo, ou seja, alíquota que é definida pelo governo Federal através da TIPI - Tabela de Incidência do Imposto sobre Produtos Industrializados que privilegia bens de maior essencialidade com alíquotas menores/isentas enquanto para bens de menor essencialidade ela onera, como é o caso do cigarro que pode chegar a 300%. 

Nas situações a seguir serão demonstradas algumas características do IPI nas operações de entrada e saída de mercadoria para industrialização.



 1\. Normal

No Tipo de Tributação = Normal o valor do IPI será somado ao valor total da nota fiscal.



-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Nesse exemplo vamos demonstrar a parametrização do IPI para as seguintes CST's:

-   00 - Entrada com Recuperação de Crédito;

-   50 - Saída Tributada.




-   **Regra de IPI**

**Identificação**

Tipo Tributação: Tributado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-13%2016%3A42%3A7.png?version=1&modificationDate=1489434158000&api=v2)

**Dados do IPI**

Preencher apenas o campo Situação Tributária de Entrada/Saída

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-13%2017%3A25%3A37.png?version=1&modificationDate=1489436767000&api=v2)

Segue o exemplo do Lançamento Fiscal, lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.



**Valor da Mercadoria**



Valor da Mercadoria

1.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2014%3A35%3A43.png?version=1&modificationDate=1489512973000&api=v2)

**ICMS e IPI**



-   **IPI: Tributado**



Base ICMS

1.000,00

Alíquota

10%

Valor do IPI

100,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2014%3A36%3A33.png?version=1&modificationDate=1489513024000&api=v2)

**Valor Total da Situação Tributária: 1.100,00**

 2\. Alíquota Zero

Os produtos industrializados, nacionais e estrangeiros, que constam da [Tabela de Incidência do Imposto sobre Produtos Industrializados –](http://idg.receita.fazenda.gov.br/acesso-rapido/legislacao/legislacao-por-assunto/tipi-tabela-de-incidencia-do-imposto-sobre-produtos-industrializados) [TIPI](http://idg.receita.fazenda.gov.br/acesso-rapido/legislacao/legislacao-por-assunto/tipi-tabela-de-incidencia-do-imposto-sobre-produtos-industrializados), correspondentes à notação **“0”,** no campo da alíquota, nessa tabela, são os chamados produtos à Alíquota Zero, sobre os quais não há a incidência de IPI.

-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Nesse exemplo vamos demonstrar a parametrização do IPI para as seguintes CST's:

-   01 - Entrada Tributável com Alíquota Zero;

-   51 - Saída Tributável com Alíquota Zero


-   **Regra de IPI**

**Identificação**

Tipo Tributação: Alíquota Zero

 Figura

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2015%3A5%3A46.png?version=1&modificationDate=1489514776000&api=v2)

Nesse exemplo será demonstrado como será preenchido o valor do IPI no Lançamento Fiscal com o Tipo de Tributação = Alíquota Zero

Lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

**Valor da Mercadoria**



Valor da Mercadoria

1.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2014%3A35%3A43.png?version=1&modificationDate=1489512973000&api=v2)

**ICMS e IPI**



-   **IPI: Alíquota Zero**



Outros de IPI

1.000,00

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2016%3A55%3A8.png?version=1&modificationDate=1489521338000&api=v2)

**Valor Total da Situação Tributária: 1.000,00** 

 3\. Isento

Esse tipo de configuração deve ser utilizada para escrituração de operações de Compra em que por determinação legal, exista IPI em destaque da Nota Fiscal pelo fornecedor mas que não poderá se aproveitado como crédito sob a entrada.

Em algumas situações específicas o Imposto Sobre Produtos Industrializados (IPI) dispõe sobre isenção, exemplo:

*"...a aquisição* *de automóveis para utilização no transporte autônomo de passageiros, bem como por pessoas portadoras de deficiência física."*

([Lei nº 8.989](http://www.planalto.gov.br/ccivil_03/leis/l8989.htm)[, de 24 de Fevereiro de 1995](http://www.planalto.gov.br/ccivil_03/leis/l8989.htm))

No caso da saída o IPI deve ser escriturado como Isento.



-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Nesse exemplo vamos demonstrar a parametrização do IPI para as seguintes CST's:

-   02 - Entrada Isenta;

-   52 - Saída Isenta.


-   **Regra de IPI**

**Identificação**

Tipo Tributação: Isento

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2016%3A35%3A24.png?version=1&modificationDate=1489520155000&api=v2)

**Dados do IPI**

Preencher o campo Situação Tributária de Entrada/Saída

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2016%3A36%3A25.png?version=1&modificationDate=1489520216000&api=v2)

Nesse exemplo será demonstrado como será preenchido o valor do IPI no Lançamento Fiscal com o Tipo de Tributação = Isento.

Lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

**Valor da Mercadoria**



Valor da Mercadoria

1.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2016%3A48%3A27.png?version=1&modificationDate=1489520938000&api=v2)

**ICMS e IPI**



-   **IPI: Isento**



Isento de IPI

1.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2016%3A54%3A36.png?version=1&modificationDate=1489521307000&api=v2)

**Valor Total da Situação Tributária: 1.000,00**  

 4\. Outros

-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Nesse exemplo vamos demonstrar a parametrização do IPI para as seguintes CST's:

-   49 - Outras Entradas;

-   99 - Outras Saídas.


-   **Regra de IPI**

**Identificação**

Tipo Tributação: Outros

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2017%3A11%3A42.png?version=1&modificationDate=1489522333000&api=v2)

**Dados do IPI**

Preencher o campo Situação Tributária de Entrada/Saída

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2017%3A13%3A7.png?version=1&modificationDate=1489522417000&api=v2)

Vamos demonstrar em um Lançamento Fiscal de saída como será escriturado o valor do IPI com a forma de tributação Outros

Lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

**Valor da Mercadoria**



Valor da Mercadoria

600,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2017%3A19%3A45.png?version=1&modificationDate=1489522816000&api=v2)

**ICMS e IPI**



-   **IPI: Isento**



Outros IPI

600,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-14%2017%3A20%3A29.png?version=1&modificationDate=1489522860000&api=v2)

**Valor Total da Situação Tributária: 600,00**  

 5\. Suspenso

A [Lei nº 10.637, de 30 de Dezembro de 2002, Art. 29.§ 4o](http://www.planalto.gov.br/ccivil_03/leis/2002/L10637.htm), estabelece a suspensão do tributo IPI para matérias-primas, os produtos intermediários e os materiais de embalagem, destinados a estabelecimento que se dedique, preponderantemente. P, à elaboração de produtos estão suspensos do tributo IPI.



-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Nesse exemplo vamos demonstrar a parametrização do IPI para as seguintes CST's:

-   05 - Entrada com Suspensão;

-   55 - Saída com Suspensão.


-   **Regra de IPI**

**Identificação**

Tipo Tributação: Suspenso

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2012%3A4%3A44.png?version=1&modificationDate=1489590316000&api=v2)

**Dados do IPI**

Preencher o campo Situação Tributária de Entrada/Saída

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2012%3A5%3A40.png?version=1&modificationDate=1489590372000&api=v2)

Vamos demonstrar em um Lançamento Fiscal de saída como será escriturado o valor do IPI com a forma de tributação Suspenso.

Lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

**Valor da Mercadoria**



Valor da Mercadoria

500,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2014%3A17%3A12.png?version=1&modificationDate=1489598264000&api=v2)

**ICMS e IPI**



-   **IPI: Suspenso**



Isento de IPI

500,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2012%3A12%3A7.png?version=1&modificationDate=1489590759000&api=v2)

**Valor Total da Situação Tributária: 500,00**  

 6\. Sem IPI

Existem operações que não se aplica o destaque do IPI. Neste caso deve ser selecionada a opção “Sem IPI” no Tipo de Tributação da Regra de IPI.



-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

O CFOP deverá ser configurado da seguinte maneira:



-   **Regra de IPI**

**Identificação**

Tipo Tributação: Sem IPI

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2013%3A56%3A39.png?version=1&modificationDate=1489597031000&api=v2)

 Se tratando de Tipo de Tributação "Sem IPI" o campos referente ao tributo não serão habilitados, tanto na Situação Tributária do Lançamento Fiscal quanto no Item.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2013%3A59%3A14.png?version=1&modificationDate=1489597186000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-15%2014%3A25%3A28.png?version=1&modificationDate=1489598760000&api=v2)

 7\. Tributado 50% NÃO Contábil

Conforme consta no [Decreto nº 7.212 de 15 de Junho de 2010](http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/decreto/d7212.htm), em operações específicas, que se caracterizam como industrialização fazem jus à redução de cinquenta por cento do imposto.

Esse tipo de configuração deve ser usada para operações de compra com IPI creditado a 50% pelo valor da operação e que o valor do IPI não será somado ao valor contábil do Lançamento Fiscal.



-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Esse tipo de parametrização deve ser utilizada em operações de compra em que ocorra o destaque do IPI pela Nota Fiscal do fornecedor mas que por exigência da legislação o IPI será creditado pela entrada somente com 50% do valor do tributo.

-   **Regra de IPI**

**Identificação**

Tipo Tributação: Tributado 50%

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_16-11-59.png?version=1&modificationDate=1518721919000&api=v2)

**Dados do IPI**

Regras Tributárias: NÃO Somar IPI no Valor Contábil habilitado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_15-33-49.png?version=1&modificationDate=1518719630000&api=v2)

Em seguida será demonstrado o Lançamento Fiscal com o Tipo de Tributação = Tributado 50% após execução do processo de Escrituração de Lançamento.

A redução da base e consequentemente do tributo ocorrerá de forma automática no processo de Escrituração de Lançamentos, por isso o valor da base informada no tributo do item do movimento deve ser cheia.

Lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-16%2015%3A28%3A48.png?version=1&modificationDate=1489688960000&api=v2)



O valor do IPI NÃO afetará o valor líquido do movimento 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-16%2015%3A30%3A47.png?version=1&modificationDate=1489689078000&api=v2)

Ao executar o processo de Escrituração de Lançamentos o Lançamento Fiscal será apresentado da seguinte maneira:



**Valor da Mercadoria**





Valor da Mercadoria

36.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-16%2015%3A39%3A16.png?version=1&modificationDate=1489689588000&api=v2)

**ICMS e IPI**

-   **IPI: Tributado 50%**



Base IPI

18.000,00

Alíquota do IPI

10%

Valor IPI - Tributado

1.800,00

Outros IPI

18.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-16%2016%3A8%3A34.png?version=1&modificationDate=1489691346000&api=v2)

**Valor Total da Situação Tributária: 36.000,00**

 8\. Tributado 50%

Esse tipo de operação se aplica a entrada de mercadoria em que ocorre o destaque do IPI pela Nota Fiscal do fornecedor mas que por determinação legal o IPI será creditado pela entrada somente em 50% do valor.



-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   **Regra de IPI**

**Identificação**

Tipo Tributação:Tributado 50%

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-21%2018%3A46%3A35.png?version=1&modificationDate=1490132830000&api=v2)

**Dados do IPI**

Regras Tributárias: NÃO Somar IPI no Valor Contábil desmarcado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_15-31-16.png?version=1&modificationDate=1518719477000&api=v2)

Para que o IPI seja considerado no valor líquido do movimento o tributo deve ser tratado através de fórmula da seguinte maneira:



-   **Fórmula do Valor Líquido**

MVB + VLT ('IPI') + VLTST('ICMSST','ICMS') + MFR - MDT + MDZ + MSG

Em seguida será demonstrado o Lançamento Fiscal com o Tipo de Tributação = Tributado 50% após execução do processo de Escrituração de Lançamento.

A redução da base e consequentemente do tributo ocorrerá de forma automática no processo de Escrituração de Lançamentos, por isso o valor da base informada no tributo do item do movimento deve ser cheia.

O valor do IPI deve ser inserido no valor líquido do movimento de acordo com a função informada acima.

Lembrando que todos os campos do lançamento incluído através do processo Escrituração de Lançamentos serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_15-38-20.png?version=1&modificationDate=1518719900000&api=v2)



No valor líquido do movimento será SOMADO o valor total do IPI (3.000,00 \* 10% = 300,00).

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_16-8-57.png?version=1&modificationDate=1518721738000&api=v2)

Ao executar o processo de Escrituração de Lançamentos o Lançamento Fiscal será apresentado da seguinte maneira:



**Valor da Mercadoria**





Valor da Mercadoria

3.000,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_15-49-50.png?version=1&modificationDate=1518720591000&api=v2)

**ICMS e IPI**

-   **IPI: Tributado 50%**



Base IPI

1.500,00

Alíquota do IPI

10%

Valor IPI - Tributado

150,00

Outros IPI

1.500,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2018-2-15_15-51-58.png?version=1&modificationDate=1518720719000&api=v2)



**Valor Total da Situação Tributária: 3.300,00**

 9\. IPI Pautado

Esse tipo de configuração pode ser usado para escrituração de operações de Saida dos estabelecimentos industriais ou equiparados, onde o cálculo do IPI é feito por pauta, indepedente do valor da venda.



-   [Cadastro do Tributo](# "Cadastro do Tributo")
-   [Cadastro de Fórmula](# "Cadastro de Fórmula")
-   [Cadastro do Produto](# "Cadastro do Produto")
-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Lançamento Fiscal")

Para que seja calculado o IPI Pautado é necessário que seja selecionada a opção "Pauta do Produto" seja selecionado no parâmetro Burcas Alíquota do cadastro do tributo.

Acesse Cadastros | Tributos e cadastre o tributo IPI Pautado com as seguintes informações:

**Sigla**: IPI-P (por exemplo)

**Tipo tributo fiscal**: IPI

**Tipo**: Variável

**Incidência**: Produto

**Buscar Alíquota**: Pauta do Produto

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-17%2012%3A21%3A41.png?version=1&modificationDate=1489764133000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-17%2012%3A21%3A2.png?version=1&modificationDate=1489764094000&api=v2)

-   **Fórmula da Base do IPI**

Se
TABNAT ('TIPOIPI' , 'S') <> 'S'
Entao
(KQT\*KPU)
Senao
0.00
Fimse

-   **Fórmula da Base do ICMS**

((KQT \* KPU) + VLT('IPI')) \* ((100-TABNAT('FATORICMS','V'))/100)

-   **Fórmula do Valor Líquido**

MVB + VLT('IPI-P')

Necessário o preenchimento da Pauto do Produto no cadastro do produto

Acesse o menu Cadastro | Produto | Anexo | Pautas do Produto e preencher os seguintes campos pertinentes a pauta do produto:

**Estado**: Selecionar o estado de acordo com operação

**Código do Tributo**: preencher do tributo a ser considerado na pauta (IPI-P)

**Início de Vigência**: informar data inicial pauta deste tributo

**Fim de Vigência:** informar data final pauta deste tributo

**Alíquota Débito:** preencher alíquota expressa em valores para débito do imposto (utilizada para movimentações de saída)

**Alíquota Crédito**: preencher alíquota expressa em valores para crédito do imposto (utilizada para movimentações de entrada)

**Unidade:** informar unidade utilizada para a Alíquota AD REM, esta é a unidade do fator de conversão da unidade do produto preenchida em Cadastro | Produto | Controle de Estoque | Unidades | Unidade de Controle

**Preço/Pauta**: informar preço de referência ou pauta do produto

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-17%2013%3A4%3A10.png?version=1&modificationDate=1489766682000&api=v2)

A seguir a parametrização do Regra de IPI para o cálculo do IPI Pautado.

-   **Regra de IPI**

**Identificação**

Tipo Tributação: Tributado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-17%2017%3A49%3A27.png?version=1&modificationDate=1489783800000&api=v2)

**Dados IPI**

Regras Tributárias: Marcar a opção "IPI Pautado"

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-17%2017%3A50%3A8.png?version=1&modificationDate=1489783841000&api=v2)

Seguindo vamos demonstrar através de um de movimento saída como será calculado o IPI com os seguintes dados:

Quantidade: 1.300,00

Fator de Conversão da Unidade: 1

Alíquota Débito do IPI Pautado: 6%

Memória de cálculo do IPI Pautado disponível no link

**[Cálculo de IPI Pautado utilizando Alíquota AD REM](https://tdn.totvs.com/pages/releaseview.action?pageId=167313563)**

Com os valores acima o movimento criado no TOTVS Gestão de Estoque, Compra e Faturamento apresenta da seguinte forma:

Quantidade

\=

1.300,00

Fator de Conversão

x

1

Alíquota Débito do IPI Pautado

x

6%

TOTAL

\=

7.800,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-20%2015%3A50%3A53.png?version=1&modificationDate=1490035887000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-20%2015%3A52%3A4.png?version=1&modificationDate=1490035959000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-20%2015%3A52%3A38.png?version=1&modificationDate=1490035992000&api=v2)

Observação

O Fator de Conversão informado no cadastro de Unidade de Medida, somente será considerado caso a for diferente da unidade preenchida na pauta do produto.

Segue detalhamento do Lançamento Fiscal após a execução do processo de Escrituração de Lançamentos, lembrando que toso os valores serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento.

**Valor da Mercadoria**

Valor da Mercadoria

1.300,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-20%2016%3A27%3A38.png?version=1&modificationDate=1490038092000&api=v2)

**ICMS e IPI**

-   **IPI: Tributado**

Valor IPI - Tributado

7.800,00

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-20%2018%3A9%3A42.png?version=1&modificationDate=1490044216000&api=v2)

**Valor Total da Situação Tributária: 9.100,00**

 10\. Complementar

O IPI Complementar se aplica em situações em que tenha sido escriturado uma Nota Fiscal anterior com todos os valores da base do IPI e valor contábil correto mas com o destaque do importo a menor.

Para esse tipo de IPI o sistema não irá consistir o valor contábil do Lançamento Fiscal.

-   [Parametrização da Regra de IPI](# "Parametrização Regra de ICMS / IPI")
-   [Exemplo do Movimento](# "Exemplo do Movimento")

O CFOP deverá ser configurado da seguinte maneira:



-   **Regra de IPI**

**Identificação**

Tipo Tributação: Tributado

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-21%2015%3A46%3A29.png?version=1&modificationDate=1490122023000&api=v2)

**Dados do IPI**

Operação Complementar: Selecionada

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-21%2015%3A52%3A57.png?version=1&modificationDate=1490122411000&api=v2)

Detalhamento da parametrização do Tipo de Movimento no TOTVS Gestão de Estoque, Compra e Faturamentoo para NF ou NF-e complementar disponível no link:

[N](/pages/viewpage.action?pageId=269432397)[F-e Complementar](https://tdn.totvs.com/display/public/rm/NF-e+-+Complementar)



Segue detalhamento do Lançamento Fiscal após a execução do processo de Escrituração de Lançamentos, lembrando que todos os valores serão gravados automaticamente, visto que essas informações já foram inseridas no módulo TOTVS Gestão de Estoque, Compra e Faturamento. 

 Figura

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2017-3-21%2017%3A1%3A21.png?version=1&modificationDate=1490126516000&api=v2)



  ***<Fim Exemplo de Situação Tributária de Compra/Venda com IPI>***

-   [Imposto sobre Bens e Serviços (IBS)](# "Imposto sobre Bens e Serviços (IBS)")
-   [Contribuição sobre Bens e Serviços (CBS)](# "Contribuição sobre Bens e Serviços (CBS)")

### Particularidades no Cadastro e na Escrituração do IBS

A seguir, são apresentadas as orientações referentes ao [cadastro](https://tdn.totvs.com/pages/viewpage.action?pageId=963027603) do tributo IBS e suas especificidades na escrituração.

Devido à sua natureza compartilhada, o IBS será composto por duas parcelas distintas — uma municipal e outra estadual. Em razão dessa estrutura, o comportamento do tributo na escrituração diferirá do padrão adotado para os demais tributos.

Durante o processo de escrituração, o sistema identificará as informações comuns a ambos os entes e as manterá de forma consolidada. Entretanto, para determinados campos, será necessário realizar a soma dos valores correspondentes às parcelas municipal e estadual, garantindo que os dados apresentados estejam coerentes e completos em relação aos casos de apuração e recolhimento do IBS.



 Outros Tributos Situação Tributária

Para os tributos da Situação Tributária, exceto o campo Identificador do Código da Receita, que não se aplica ao IBS, e a Base, que deve permanecer a mesma, será realizada a soma das demais informações com base nos valores correspondentes aos IBS Municipal e Estadual informados nos Itens da Situação Tributária.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-4_10-55-41.png?version=1&modificationDate=1762264541997&api=v2)

 Outros Tributos dos Itens da Situação Tributária

Levando em consideração que a configuração do tributo deve refletir as mesmas informações de Situação Tributária, Classificação Tributária, Base de Cálculo e Código de Crédito Presumido, esses campos serão mantidos de forma unificada, uma vez que possuem valores idênticos tanto para o IBS Municipal quanto para o Estadual.

Entretanto, para os campos referentes a Alíquota Cheia, Alíquota, Valor do Imposto, Valor de Crédito Presumido e Valor Diferido, será realizada a soma dos valores correspondentes às parcelas Municipal e Estadual, garantindo que os totais apresentados reflitam corretamente a apuração conjunta do IBS.





![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-4_10-38-52.png?version=1&modificationDate=1762263533180&api=v2)

### Particularidades no Cadastro e na Escrituração da CBS

A seguir, são apresentadas as orientações referentes ao [cadastro](https://tdn.totvs.com/pages/viewpage.action?pageId=963027603) do tributo CBS e suas especificidades na escrituração.

Por se tratar de um tributo de incidência exclusivamente federal, a CBS possui comportamento padronizado na escrituração, sem distinções entre esferas de competência. Dessa forma, o processo seguirá o modelo convencional, mantendo as informações de configuração, cálculo e apuração de forma centralizada, conforme as regras estabelecidas pela legislação da União.



 Outros Tributos Situação Tributária

Para o caso do CBS será somente atribuição direta pois o que temos no Movimento será levado para o Lançamento Fiscal, sem necessidade de fazer alguma alteração.

Vale ressaltar que novamente a informação de Identificador do Código da Receita não ser necessário para o caso.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-4_11-9-12.png?version=1&modificationDate=1762265352763&api=v2)

 Outros Tributos dos Itens da Situação Tributária

Da mesma forma que é feito para os Tributos da Situação Tributária também será feita para os Tributos dos Itens da Situação Tributária.

O que estiver cadastrado no Movimento será levado, sem alteração alguma, para o Lançamento Fiscal.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-4_11-11-58.png?version=1&modificationDate=1762265518683&api=v2)

  *<Fim dos Tributos em relação a Reforma Tributária>*

À partir da versão 12.1.2205, a escrituração passará a considerar a chave de acesso preenchida na tabela TCHAVEACESSOREF, selecionando tanto as chaves das notas fiscais quanto as chaves com o código numérico zerado, de acordo com a NT 2022.003.

Para Referenciar a nota com Chave de Acesso é necessária habilitar o Parâmetro **Referência Nota Fiscal Eletrônica** nos parâmetros do Tipo de Movimento Etapa **Fis-NF-e**

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2023-5-23_10-25-49.png?version=1&modificationDate=1684848349903&api=v2&effects=drop-shadow)

Nota Referenciada no movimento:

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image2023-5-23_10-26-49.png?version=1&modificationDate=1684848409940&api=v2&effects=drop-shadow)

IMPORTANTE

Quando a chave de acesso for preenchida manualmente no movimento, **ela não será escriturada**.

-   Tributos no Movimento do tipo "ICMS Crédito SN" **não** serão Escriturados para o Modulo Totvs Gestão Fiscal.
-   Tributos principais **ICMS** e **IPI** devem ser parametrizados apenas no item do movimento.
-   o sistema sempre pega o código do último lote de escrituração e incrementa +1. Apesar do sistema trazer a numeração automática, o usuário pode editar esse número e informar o que quiser.
-   O Processo de Escrituração Fiscal não deve ser executado por dois ou mais usuários ao mesmo tempo para o mesmo Lote de Escrituração, este comportamento pode causar duplicidade de Lançamentos gerados no Modulo Totvs Gestão Fiscal. Caso ocorra esta situação, o Lote deve ser estornado e Escriturado Novamente apenas por um usuário, para maiores informações consulte a nossa documentação [Execução simultânea da escrituração](/pages/viewpage.action?pageId=570365112)
-   Movimentos de NFS-e com Status "Cancelado" sempre serão escriturados independente da condição da Nota na visão do Sistema Sped Municipal. 
-   Movimentos de transferência direta de mercadorias serão escriturados com os CSTs cadastrados em sua natureza e natureza inversa para saída e entrada, respectivamente. Por exemplo, com um movimento tendo CFOP 6.151, e essa CFOP possuindo natureza inversa 2.151, o lançamento de entrada terá os tributos com o CST cadastrado na natureza 2.151 e o lançamento de saída terá os tributos com o CST cadastrado na natureza 6.151. Isto vale tanto para tributos no movimento quanto para tributos no item.

Regra da coluna Estado:

-   Verifica se o tipo de documento (aba Integrações, menu Fiscal, Campo tipo de documento) é: CTRC(08), AquaviarioCargas(09), Aereo(10), FerroviarioCargas(11), ServicoTransporte(07), CTe(57), CTeOS(67)
                se movimento de venda/saída, retorna estado da entrega (aba Transporte, menu Coleta e Entrega)
                se movimento de compra/entrada, retorna o estado de coleta (aba Transporte, menu Coleta e Entrega)
                senão retorna vazio
-   Verifica se o tipo de documento (aba Integrações, menu Fiscal, Campo tipo de documento) é: NF-e(55)
                se movimento de venda/saída, retorna estado da entrega (aba Transporte, menu Coleta e Entrega)
                se movimento de compra/entrada, retorna o estado de coleta (aba Transporte, menu Coleta e Entrega)
                senão retorna vazio
-   Verifica se o fornecedor origem/destino (aba Integrações, menu Fiscal) e se está preenchido
                retorna o estado do cliente/fornecedor
                senão retorna vazio
-   Verifica se o estado ainda esta vazio
                retorna o estado do cliente/fornecedor quando o movimento foi criado. Histórico do cliente/fornecedor na FCFOHISTORICO buscando pelo IDMOVCFO do movimento.
                senão retorna vazio
-   Verifica se o estado ainda esta vazio
                retorna o estado do cliente/fornecedor aba Identificação, menu cabeçalho
                senão retorna vazio

Para corrigir erros cadastrais, de tributação ou similares, basta relacionar o movimento inconsistente a um novo movimento contendo as informações corretas.
Para realizar a relação, ao criar o novo movimento, preencha o campo **Mov. Substituído** na aba de identificação, informando o movimento inconsistente.

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-12-1_8-44-17.png?version=1&modificationDate=1764589457273&api=v2)

Em integrações Fiscal, é possível informar o motivo da substituição, basta efetuar o preenchimento dos campos **Motivo da  Substituição** e **Justificativa da Substituição**:

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-12-1_8-54-34.png?version=1&modificationDate=1764590074177&api=v2)

Quando um lote de escrituração contém movimentos com um movimento relacionado cujo código de modelo documento seja 21, 22 ou 62, algumas validações serão realizadas para permitir a escrituração desses movimentos.

-   O movimento relacionado deve ter sido escriturado anteriormente, caso contrário o sistema não o escritura e retorna essa orientação ao usuário:

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-12-1_8-12-53.png?version=1&modificationDate=1764587573283&api=v2)

-    A natureza do movimento a ser escriturado deve possuir operação que defina a substituição.

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-25_15-3-29.png?version=1&modificationDate=1764093810123&api=v2)

Quando o movimento referenciado for modelo de documento 62, é gerado uma referência no lançamento fiscal contendo as seguintes informações: 

-   Documento Fiscal e Chave de acesso → Referentes ao movimento Relacionado.

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-25_15-11-16.png?version=1&modificationDate=1764094277083&api=v2)

Quando o movimento referenciado for modelo de documento 21 ou 22, é gerado uma referência no lançamento fiscal contendo as seguintes informações: 

-   Documento Fiscal→ Referente ao movimento Relacionado.

 Imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/269432397/image-2025-11-25_15-17-23.png?version=1&modificationDate=1764094643383&api=v2)
