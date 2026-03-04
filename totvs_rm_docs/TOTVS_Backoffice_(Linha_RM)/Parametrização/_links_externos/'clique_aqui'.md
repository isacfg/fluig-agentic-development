# Movimento de Exportação

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=4813144](https://tdn.totvs.com/pages/releaseview.action?pageId=4813144)
> **Domínio:** TDN (TOTVS Developer Network)

---





FAQ: **Movimento de Exportação**

Produto:

RMNucleus

Ambiente:

Unspecified

Versão:

10.80

Avaliação

-   ***Como Fazer***

Como parametrizar o sistema para incluir movimento de exportação?

-   ***Definição do Processo***

Tem por finalidade incluir movimentações onde a mercadoria será enviada para outro país. A validação será feita obedecendo código da natureza de operação referenciada no movimento.

Solução

-   ***Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento***

Acessar | **Opções | Parâmetros | RMNucleus |** e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

**Etapa Mov – Emitente / Destinatário**

\- Emitente: Empresa

\- Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

\- Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

\- Destinatário: Cliente

\- Edição do Local de Destino: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

**Etapa Mov – Datas**

\- Data do Movimento Default: informar qual será a data considerada para afetar estoque e apresentação dos dados da ficha física financeira.

Exemplo:

Se for informado “Data Emissão” significa que as movimentações vão afetar estoque de acordo com a data de emissão apresentada na inclusão do movimento.

**Etapa Item – Preço**

\- Edição do Preço: Edita

\- Buscar preço em: marcar opção de onde o preço unitário deve ser buscado

**Etapa Estoque**

\- Efeito sobre os saldos Físico | Saldo Atual: Diminui

\- Saldo Financeiro | Efeito sobre o saldo atual: Diminui

\- Fórmula do Valor Financeiro: informa código da fórmula a ser considerada para composição dos valores em estoque

\*\*Esta etapa deve der parametrizada apenas se o tipo de movimento tiver que afetar saldo2 em estoque\*\*

**Etapa Fis- Escrituração**

\- Gerar Escrituração: Habilitar

\- Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal

\- Tipo do Lançamento Fiscal da Transferência: Saída

\*\*Esta etapa deve der parametrizada apenas se o tipo de movimento tiver que ser escriturado\*\*

**Etapa Fis – Natureza**

\- Edição: Edita

\- Seleção Automática da Natureza: informar se a natureza de operação deve ser informada por item ou no movimento.

-   ***Parametrizações Necessárias - Totvs Gestão Fiscal***

Acessar **| Utilitários | Selecionar Filial |** e escolher a filial onde a movimentação será inclusa.

Acessar **| Cadastro | Natureza de Operação | Cadastro de Natureza de Operação |** onde deverá incluir natureza compatível com os dados da movimentação a ser inclusa.

**Etapa Identificação**

\- Tipo: Saída

\- Origem / Destino: Exterior

**Etapa Outros Dados**

\- Características da Operação: Possui Documentos Relacionados

-   ***Descrição do Processo***

A movimentação será inclusa como de costume não sendo necessário fazer nenhuma parametrização específica no tipo de movimento.

A movimentação de “Exportação” será identificada em função da natureza de operação **| 7.#### |** referenciada no movimento que será apresentada para seleção apenas quando cli\\for for do “exterior”. A partir daí, ao preencher o cli\\for e a natureza de operação será apresenta tela **| Exportação |** no movimento e no item de movimento para preenchimento dos dados relacionados.

Na aba Exportação serão apresentados alguns campos para preenchimento do usuário sendo apresentadas opções:

\- Número D.E. (Declaração de Exportação): informar Número da D.E

\- Data D.E. (Declaração de Exportação): informar Data da D.E

\- Natureza Exportação: selecionar opção Exportação Direta ou Indireta

\- Valor de Despacho: informar Valor do Despacho de Exportação

\- Número Despacho: informar Número do Despacho de exportação

\- Data Conhecimento: informar data do conhecimento de embarque

\- Tipo Conhecimento: informar código do tipo do conhecimento de embarque

*Opções de Tipo de Conhecimento*:

\- 01 para o conhecimento AWB

\- 07 para o conhecimento *ETIQ. REXPRESSAS*

*\-* 09 para o conhecimento AV7

\- 13 para o conhecimento CRT

\- 19 para o conhecimento TIF/DTA

\- 99 para o conhecimento OUTROS

\- Data Averbação: informar Data da Averbação da D.E

\- Conhecimento Embarque: informar denominação do Conhecimento de Embarque

*Opções de Conhecimento de Embarque:*

\- AWB

\- ETIQ. REXPRESSAS

\- AV7

\- CRT

\- TIF/DTA

\- OUTROS

\- Data Conhecimento: informar data do conhecimento de embarque.

\- Tipo Conhecimento: informar código do tipo do conhecimento de embarque.

Importante:

\- As informações preenchidas na aba **| Exportação |** serão consideradas para geração dos registros 85 e 86 do SINTEGRA, com informações de exportação no Totvs Gestão Fiscal.

\- Ao escriturar o movimento as informações serão apresentadas na aba **| Exterior |** do lançamento fiscal no Totvs Gestão Fiscal.

-   ***Relacionar Movimentos de Exportação***

Ao editar a movimentação de exportação será apresentado ícone **| [
![clip_image002](https://lh6.ggpht.com/_G7KXZLoZDsY/TKtu5H1uCCI/AAAAAAAAByw/z6cL7BpIMrM/clip_image002_thumb.jpg?imgmax=800)
](https://lh5.ggpht.com/_G7KXZLoZDsY/TKtu4YggDuI/AAAAAAAABys/iol2yRulq2E/s1600-h/clip_image002%5B3%5D.jpg) - Relacionar Movimentos de Exportação |** responsável por fazer relacionamento entre a movimentação de saída e a movimentação de entrada de mercadoria em estoque que tenha afetado Saldo 2.

Ao clicar no ícone em questão será apresentada janela | [
![clip_image004](https://lh5.ggpht.com/_G7KXZLoZDsY/TKtu6pGrpOI/AAAAAAAABy4/C-u5GPNKzHg/clip_image004_thumb.jpg?imgmax=800)
](https://lh3.ggpht.com/_G7KXZLoZDsY/TKtu5j1FUDI/AAAAAAAABy0/FvF_53t8Tac/s1600-h/clip_image004%5B3%5D.jpg) | para vincular os dados dos movimentos envolvidos. Para isto, deverá clicar sobre o item apresentado na opção | [
![clip_image006](https://lh4.ggpht.com/_G7KXZLoZDsY/TKtu8ozCBLI/AAAAAAAABzA/gKoE2bVVCmA/clip_image006_thumb.jpg?imgmax=800)
](https://lh4.ggpht.com/_G7KXZLoZDsY/TKtu7cXreFI/AAAAAAAABy8/DU_vzU6yEWs/s1600-h/clip_image006%5B3%5D.jpg) | de forma que serão apresentadas movimentações de entrada que afetaram estoque para o item em questão.

Estas movimentações serão apresentadas na opção | [
![clip_image008](https://lh3.ggpht.com/_G7KXZLoZDsY/TKtu-l7589I/AAAAAAAABzI/j27K2z310Eg/clip_image008_thumb.jpg?imgmax=800)
](https://lh5.ggpht.com/_G7KXZLoZDsY/TKtu99t-p7I/AAAAAAAABzE/n-L8zzasXUg/s1600-h/clip_image008%5B3%5D.jpg) | onde o usuário deverá marcar o movimento desejado e no campo | **Qtde Relacionada |** preencher a quantidade pertinente esta movimentação que será relacionada ao movimento de exportação. Pode ser feito relacionamento de várias notas de entrada até que seja atingida quantidade pertinente item do movimento de exportação.

Depois de preenchidas quantidades relacionadas deverá clicar no botão **| Relacionar |**, de forma que o item passará a ser apresentado na opção |[
![clip_image010](https://lh6.ggpht.com/_G7KXZLoZDsY/TKtu_xBjLJI/AAAAAAAABzQ/bddcRx1TY4I/clip_image010_thumb.jpg?imgmax=800)
](https://lh6.ggpht.com/_G7KXZLoZDsY/TKtu_dAVzJI/AAAAAAAABzM/NwEQPJ-Jaww/s1600-h/clip_image010%5B3%5D.jpg) |. A partir daí deve clicar na opção **| Salvar | OK |** para que o relacionamento seja feito.

-   ***Escrituração do Movimento***

O processo de escrituração será feito como de costume, onde devem ser inclusos dois lotes de escrituração, sendo um para o movimento de entrada da mercadoria e outro para movimento de exportação obedecendo esta sequência para escrituração.

A seguir acessar o Totvs Gestão Fiscal em **| Lançamento | Manutenção Lançamento Saída |** e editar o lançamento incluso. Ao acessar a aba **| Item |** e editar o produto será apresentada aba **| Referências |** com os dados da nota fiscal de entrada relacionado ao mesmo.

As informações preenchidas na aba **| Exportação |** do movimento serão apresentadas no lançamento fiscal na aba **| Exterior |**, já a informações preenchidas no item de movimento serão apresentadas no item do lançamento fiscal na aba **| Exportação |**.

Observações

O documento em questão está postado no blog da Totvs e pode ser consultado através do link : [http://totvsconnect.blogspot.com/2010/10/como-fazer-movimento-de-exportacao-rm.html](https://totvsconnect.blogspot.com/2010/10/como-fazer-movimento-de-exportacao-rm.html)
