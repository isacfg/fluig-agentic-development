# Movimento de Importação

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=4813042](https://tdn.totvs.com/pages/releaseview.action?pageId=4813042)
> **Domínio:** TDN (TOTVS Developer Network)

---





FAQ: **Movimento de Importação**



Avaliação

-   ***Como Fazer***

Como parametrizar o sistema para incluir movimento de importação?

-   ***Definição do Processo***

Tem por finalidade incluir movimentações onde o emitente da mercadoria é de outro país. A validação será feita obedecendo código da natureza de operação referenciada no movimento.

Solução

-   ***Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento***

Acessar | **Opções | Parâmetros | RMNucleus |** e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

**Etapa Mov – Emitente / Destinatário**

\- Emitente: Empresa

\- Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

\- Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

\- Destinatário: Empresa

**Etapa Mov – Datas**

\- Data do Movimento Default: informar qual será a data considerada para afetar estoque e apresentação dos dados da ficha física financeira.

Exemplo:

Se for informado “Data Emissão” significa que as movimentações vão afetar estoque de acordo com a data de emissão apresentada na inclusão do movimento.

**Etapa Item – Preço**

\- Edição do Preço: Edita

\- Buscar preço em: marcar opção de onde o preço unitário deve ser buscado

**Etapa Estoque**

\- Efeito sobre os saldos Físico | Saldo Atual: Aumenta

\- Saldo Financeiro | Efeito sobre o saldo atual: Aumenta

\- Fórmula do Valor Financeiro: informa código da fórmula a ser considerada para composição dos valores em estoque

\*\*Esta etapa deve der parametrizada apenas se o tipo de movimento tiver que afetar saldo2 em estoque\*\*

**Etapa Fis- Escrituração**

\- Gerar Escrituração: Habilitar

\- Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal

\- Tipo do Lançamento Fiscal da Transferência: Entrada

\*\*Esta etapa deve der parametrizada apenas se o tipo de movimento tiver que ser escriturado\*\*

**Etapa Fis – Natureza**

\- Edição: Edita

\- Seleção Automática da Natureza: informar se a natureza de operação deve ser informada por item ou no movimento.

\- Habilitar : ( x ) Edita Cliente / Fornecedor Origem /Destino

-   ***Parametrizações Necessárias - Totvs Gestão Fiscal***

Acessar **| Utilitários | Selecionar Filial |** e escolher a filial onde a movimentação será inclusa.

Acessar **| Cadastro | Natureza de Operação | Cadastro de Natureza de Operação |** onde deverá incluir natureza compatível com os dados da movimentação a ser inclusa.

**Etapa Identificação**

\- Tipo: Entrada

\- Origem / Destino: Exterior

-   ***Descrição do Processo***

A movimentação será inclusa como de costume, onde o código da natureza de operação será apresentado obedecendo informação do cliente\\fornecedor preenchido na aba | Transporte | Cli/For Origem/Destino |.

A movimentação de “Importação” será identificada em função da natureza de operação **| 3.#### |** referenciada no movimento que será apresentada para seleção apenas quando cli\\for for do “exterior”. A partir daí, ao preencher o cli\\for e a natureza de operação será apresenta tela **| Importação |** no movimento e no item de movimento para preenchimento dos dados relacionados.

Importante:

\- As informações preenchidas na aba **| Importação |** serão consideradas para geração das rotinas **| DIF Bebidas, IN 63, IN 86 e PER/DCOMP |** no Totvs Gestão Fiscal

\- Ao escriturar estes movimentos estas informações serão apresentadas na aba **| Exterior |** do lançamento fiscal no Totvs Gestão Fiscal.

-   ***Escrituração do Movimento***

O processo de escrituração será feita como de costume onde deverá incluir lote referenciando movimento em questão.

A seguir acessar o Totvs Gestão Fiscal em **| Lançamento | Manutenção Lançamento Entrada |** e editar o lançamento incluso. Ao acessar aba **| Exterior |** serão apresentadas informações preenchidas no movimento incluso no Totvs Gestão de Estoque, Compras e Faturamento.
