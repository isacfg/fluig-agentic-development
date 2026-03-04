# FIN - Tipos de Documento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=421388695](https://tdn.totvs.com/pages/releaseview.action?pageId=421388695)
> **Domínio:** TDN (TOTVS Developer Network)

---

Através deste cadastro é possível controlar os tipos de documentos e classificar os lançamentos financeiros.

Na janela principal é possível visualizar de forma simplificada, informações de um ou de vários tipos de documento, de acordo com os filtros criados através do Gerenciador de Filtros (localizado na Barra de Ferramentas). Ao executar um filtro cada cadastro será apresentado em uma linha e as informações em colunas.

 Identificação

Inativo

Na inclusão de novo tipo de documento o sistema carrega como default a opção desmarcada classificando o cadastro como “Ativo”.

Se marcada a opção o cadastro é classificado como “Inativo” e não será apresentado para seleção nos lookups disponíveis nos processos do financeiro.

Classificação

Existem alguns processos que necessitam de tipos de documento específicos. Para identificar estes tipos é necessário definir uma classificação para o tipo de documento:

-   Previsão
-   Adiantamento
-   Crédito de Adiantamento
-   Devolução
-   Vendor
-   Nota de Crédito
-   Gera IRRF
-   Gera IRRF-PF Alíquota Fixa
-   Gera INSS
-   Gerar IRRF e INSS

Pagar ou Receber

Você pode definir que o Tipo de Documento seja apresentado apenas para lançamentos a "Pagar" ou apenas para lançamentos a "Receber" ou para lançamentos a "Pagar e a Receber".

Gera Número do Documento

Através deste campo é possível definir se o número do documento será definido pelo usuário, gerado sequencialmente ou cópia da referência do lançamento. Se o campo estiver definido como "Definido pelo usuário" ao incluir um lançamento financeiro via interface utilizando esse tipo de documento, o usuário poderá informar manualmente no campo número do documento um valor definido pelo próprio, permitindo inclusive alterar quando lançamento já baixado. Se o campo estiver definido como "Gerar número do documento sequencialmente" o sistema iniciará o processo de geração do número automaticamente a partir da inserção do primeiro lançamento que utiliza este código do tipo de documento parametrizado. Se o campo estiver definido como "Copiar referência" o sistema irá copiar a referência do lançamento financeiro para o campo tipo de documento.

-   Utilizando as opções "Gerar número do documento sequencialmente" ou "Copiar referência" não será possível editar o número do documento no lançamento.
-   Quando o parâmetro "Gera número do documento de acordo com os parâmetros dos lançamentos" estiver marcado, o sistema gera os lançamentos de IRRF e INSS com o número do documento sequencial de acordo com o seu tipo de documento. (Cada documento com sua numeração).
-   Quando o parâmetro "Gera número do documento de acordo com os parâmetros dos lançamentos" estiver desmarcado sistema gera os lançamentos de IRRF e INSS com o mesmo número do documento do lançamento gerador dos tributos.
-   A opção "Definido pelo usuário" não se aplica quando inclusão do lançamento ocorre a partir de outros módulos. Neste caso, quando a numeração não é enviada pela origem, preenche de acordo com a opção sequencial.

Cliente/Fornecedor

Você pode definir que o tipo de documento seja utilizado apenas em lançamentos financeiros de um determinado cliente/fornecedor.

Consistir Cliente/Fornecedor

A consistência de Limite de Crédito, Cliente em Atraso e Cadastro Vencido será realizada através do Tipo de Documento quando a opção "Consistir Cliente/Fornecedor" estiver marcada.

 Dados Adicionais

Nesta pasta são apresentadas algumas informações de dados adicionais do tipo de documento. Informações sobre alguns campos:

Formato do Sequencial

Informe se o formato do sequencial será em letras ou números.

Separador do Sequencial

Informe o separador do sequencial.

Regra de Numeração

NÚMERO DO MOVIMENTO + SEPARADOR + SEQUENCIAL. Os campos Separador e Sequencial podem ser definidos por tipo de documento.

**Exemplo**

Número do Movimento = 000235 Separador = / Sequencial = Letra

Gerando 3 lançamentos:

000235/A 000235/B 000235/C

Default para Série do Documento

Ao incluir um lançamento de Entrada/Saída (TOTVS Gestão Fiscal) o sistema irá preencher o campo série de acordo com a série default informada no tipo de documento. Se não existir série definida para o tipo de documento, será utilizada a série default dos parâmetros, em Opções/ Parâmetros/Gerais/Tabelas/Lançamento Sub-pasta Default.

Código do Modelo do Documento

Informe o código do modelo do documento fiscal. Informação utilizada pelo TOTVS Gestão Fiscal. A informação do "Código do Modelo do Documento" é de extrema importância para:

-   Identificação do lançamento na geração dos arquivos em meio magnético gerados pelo módulo de Rotinas Legais do Sistema;
-   Identificação do lançamento de conhecimento de Transporte Rodoviário de Carga (Tipo 08, 09 e 10);
-   Tabela de Modelos de Documentos Fiscais retirada do RICMS (Regulamento de ICMS).




Oops, it seems that you need to place a table or a macro generating a table within the Pivot Table macro.

The table is being loaded. Please wait for a bit ...

Count

Count

Total

27

**Pivot Table settings**

\*

-   Export to PDF
-   Export to CSV
-   Export to Word
-   Print
-   Show source content
-   [Hide source content](#)
-   Hide control panel
-   Remove the macro

-   [Documentation](https://docs.stiltsoft.com/tfac/dc-server/how-to-use-pivot-table-macro-42239659.html)
-   [What's new](https://docs.stiltsoft.com/tfac/dc-server/release-notes-42241260.html)
-   [Rate our app](https://survey.alchemer.com/s3/7010834/5a06fc05ce8b)

-   Hide tables
-   Hide all content

Row labelsCÓDIGOMODELO

-

Column labelsCÓDIGOMODELO

-

Calculated columnCÓDIGOMODELO

-   MODELO
-

Operation typeCountSumAverageMultiplicationMinMaxLiteral

-   Count
-

CÓDIGO    

MODELO

24

Autorização de carregamento e transporte, modelo 24

14

Bilhete de passagem aquaviário, modelo 14

15

Bilhete de passagem e nota de bagagem, modelo 15

16

Bilhete de passagem ferroviário, modelo 16

10

Conhecimento aéreo, modelo 10

11

Conhecimento de transporte ferroviário de cargas, modelo 11

09

Conhecimento de transporte aquaviário de cargas, modelo 9

08

Conhecimento de transporte rodoviário de cargas, modelo 8

17

Despacho de transporte, modelo 17

25

Manifesto de carga, modelo 25

01

Nota Fiscal, modelos 1 e 1-A

06

Nota Fiscal/conta energia elétrica, modelo 6

03

Nota Fiscal de Entrada, modelo 3

21

Nota Fiscal de serviços de comunicação, modelo 21

04

Nota Fiscal de produtor, modelo 4

22

Nota Fiscal de serviço de telecomunicações, modelo 22

07

Nota Fiscal de serviço de transporte, modelo 7

02

Nota Fiscal de venda a consumidor, modelo 2

20

Ordem de coleta de carga, modelo 20

18

Resumo movimento diário, modelo 18

2A

Nota Fiscal simplificada

2B

Cupom Fiscal emitido por máquina registradora

2C

Cupom Fiscal PDV

2D

Cupom Fiscal ECF

55

Nota Fiscal Eletrônica (NF-e)

57

Conhecimento de Transporte Eletrônico (CT-e)

67

Conhecimento de Transporte Eletrônico para Outros Serviços (CT-e OS) 

Considerar no Relatório Extrato Cliente/Fornecedor

Os lançamentos financeiros associados aos tipos de documento que estiverem com esta opção desmarcada não serão impressos no relatório razão de clientes/fornecedores.

Considerar no Relatório de Fluxo de Caixa

Essa opção possibilita que os lançamentos financeiros sejam considerados ou não na geração do fluxo de Caixa.
Os lançamentos financeiros associados aos tipos de documento que estiverem com esta opção habilitada serão considerados no Fluxo de Caixa.

Gera IRRF

Quando a classificação for igual a 'Adiantamento', define que o lançamento financeiro pertinente ao [adiantamento](https://tdn.totvs.com/display/public/LRM/Adiantamento) será gerador de IR.

Espécie CNAB (Cobrança)

O código da espécie de cobrança varia de banco para banco. Este código é utilizado no processo de Remessa de Cobrança.

Classificação do lançamento na LCDPR

Classifica o lançamento financeiro do tipo de documento para o Livro Caixa digital do produtor Rural, com um valor default na inclusão:
1 - Nota Fiscal 
2 – Fatura 
3 – Recibo 
4 – Contrato 
5 - Folha de Pagamento 
6 - Outros



 Parâmetros

Nesta pasta são apresentadas informações sobre os parâmetros específicos do tipo de documento. Informações sobre alguns campos:

Usar Parâmetros Gerais

Ativando esta opção, o tipo de documento irá respeitar os parâmetros gerais localizados no Assistente de Implantação de Processos (menu Opções | Parâmetros | TOTVS Gestão Financeira).

Gerar Extrato Compensado na Baixa

Com esta opção marcada, a compensação do registro do extrato proveniente de baixa de lançamento que utiliza este tipo de documento será sempre realizada, mesmo que o parâmetro geral, acessado pelo menu Opções | Parâmetros | TOTVS Gestão Financeira | 02.01.02 - Baixa | Etapa 8 – Baixa 1/2, esteja desativado.

Não Contabilizar Baixa Zerada

Com esse parâmetro ativo, o sistema não irá gerar lançamento contábil referente à baixa de lançamentos que contenham esse tipo de documento e cujo valor baixado for igual a zero. Mesmo que o parâmetro geral, acessado pelo menu Opções | Parâmetros | TOTVS Gestão Financeira | 02.01.02 – Baixa |Etapa 18 – Contab. Baixa, esteja desativado.
Normalmente o valor será zero, quando a baixa se referir a lançamentos envolvendo Adiantamento , Devolução ou Nota de Crédito.

Fórmulas Default

Os campos de fórmulas só estarão disponíveis se o parâmetro "Usar Fórmulas para Valores" estiver ativo. Este parâmetro está no menu Opções | Parâmetros | TOTVS Gestão Financeira | Manutenção de Lançamentos | Lançamento | Recursos Adicionais. As fórmulas cadastradas nesses campos serão apresentadas como default ao gerar lançamentos que tenham este tipo de documento cadastrado. O preenchimento de fórmulas por default na inclusão do Lançamento Financeiro terá algumas diferenças quando a inclusão for automática ou quando for manual:

-   Automática

Ao gerar Lançamentos Financeiros automaticamente (via processos ou por outros aplicativos) utilizando um Tipo de Documento que esteja com a opção "Usar Parâmetros Gerais" desmarcada e que não tenha nenhuma fórmula default, o Lançamento será incluído sem fórmulas, mesmo existindo fórmulas default nos parâmetros gerais.

-   Manual

Ao incluir o lançamento manualmente pelo Financeiro, o mesmo será carregado com as fórmulas dos parâmetros gerais, ao selecionar um Tipo de Documento que esteja com a opção "Usar Parâmetros Gerais" desmarcada e que não tenha nenhuma fórmula default, as fórmulas já carregadas não serão apagadas, devido ao fato do sistema não identificar se as fórmulas que já existem foram trazidas dos parâmetros gerais ou se foram incluídas manualmente.

Gera IRRF-PF Alíquota Fixa

Visando atender situações onde o imposto de renda pessoa física deve ser calculado via alíquota fixa, o sistema foi evoluído para permitir tais situações. A nova classificação de tipo de documento "Gera IRRF-PF Alíquota Fixa" deverá ser utilizada nos lançamentos onde o cálculo do imposto deverá desconsiderar a tabela progressiva. Nestes casos, o cálculo do imposto de renda pessoa física respeitará a alíquota fixa previamente informada no cadastro do código de receita associado ao cliente/fornecedor.

Mais informações em [DT Cálculo IRRF - Pessoa Física sem considerar tabela progressiva](/pages/viewpage.action?pageId=390408241)

 Eventos Contábeis

Quando definido nos parâmetros do sistema que os defaults contábeis serão cadastrados no Tipo de Documento, ao inserir ou editar um cadastro existente os campos de defaults serão apresentados para preenchimento, são eles:

-   Evento Contábil para Inclusão
-   Evento Contábil para Baixa
-   Evento contábil para Baixa Contábil
-   Evento Contábil para Baixa por Acordo
-   Evento Contábil para Baixa de gerados por Acordo 
-   Evento Contábil para Baixa de Cartão de Crédito
-   Evento Contábil para Liquidação Duvidosa
-   Evento Contábil para Baixa com liquidação duvidosa
-   Evento Contábil para Baixa por Acordo com Liquidação Duvidosa
-   Evento contábil para baixa de Crédito de Adiantamento: saiba mais em [Contabilizar Baixa de Crédito de Adiantamento Associado a Baixa de Lançamento de Outra Filial](/pages/viewpage.action?pageId=471946973)

**Observações**

A definição da utilização será em Parâmetros | Totvs Gestão Financeira | Integração Contábil | Contab. Financeiro | Tabela Default para Evento. Estes campos serão usados para cadastrar o default do evento contábil das respectivas contabilizações do lançamento financeiro.

\* O campo de Evento Contábil para Baixa de Crédito de Adiantamento, estará disponível a partir da release 12.1.24. A contabilização será somente na baixa.

**Dicas**

A permissão para visualização de informações ou realização de processos deste módulo pode ser configurada por usuário ou por perfis, no menu Segurança dos Serviços Globais.

Na inclusão de um novo registro é possível que algumas informações já sejam apresentadas por default, para isso, edite um cadastro já existente, clique com o botão direito do mouse sobre a informação desejada, posicione o cursor do mouse sobre a opção "Valor Default" e clique sobre a informação.

As informações de alguns campos podem ser obrigatórias, para isso, clique com o botão direito do mouse sobre o campo e clique sobre a opção "Preenchimento Obrigatório".

Ao clicar sobre o nome de algumas informações a janela de edição do cadastro da informação é apresentada.

Através da funcionalidade "Configurar Colunas", ícone localizado na barra de ferramentas, define-se quais colunas serão apresentadas na janela de visão dos registros.

![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/421388695/image2019-1-15_16-29-34.png?version=1&modificationDate=1547580574933&api=v2)
 Veja Também

-   [Cópia entre Coligadas](/pages/viewpage.action?pageId=421388833)
