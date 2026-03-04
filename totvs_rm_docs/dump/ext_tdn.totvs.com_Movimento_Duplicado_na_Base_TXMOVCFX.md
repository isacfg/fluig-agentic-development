# MOV0009_Movimento_Duplicado_na_Base_TXMOVCFX

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/MOV0009_Movimento_Duplicado_na_Base_TXMOVCFX](https://tdn.totvs.com/display/public/LRM/MOV0009_Movimento_Duplicado_na_Base_TXMOVCFX)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

Gestão de Estoque, Compras e Faturamento

**Versões:**

A partir da 11.40

**Ocorrência:**

 Violação da chave TXMOVCFX ao salvar movimento

**Ambiente:**

Inclusão de movimento

**Passo a passo:**

Ao tentar incluir um movimento é apresentada uma das seguintes mensagens: 
"*Já Existe Nota do Emitente com este Número e Série. Verifique os parâmetros numeração desta série.*"

ou

"Chave Duplicada 

Possíveis causas: 
\- Inclusão de registro cujo valor da chave primária já existe 
\- Inclusão de registro cujo valor do índice único já existe 

Em detalhes: "*Cannot Insert duplicate key row in object'dbo.TMOV' with unique index "TXMOVCFV'.*"\[mensagem continua com os valores\]"

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/275121035/image2017-6-9%2014%3A7%3A16.png?version=1&modificationDate=1497028766000&api=v2)

A inconsistência ocorre pois o movimento a ser incluso possui os dados que compõe a chave **TXMOVCFX** já existentes em base de dados. 

Os campos da chave dependem da versão utilizada, sendo assim, é aconselhado consultar no banco o conteúdo da mesma. 

*Comandos para consulta:*
*SQL:> SP\_Help TMOV* 
*ORACLE:> select index\_name from user\_indexes where table\_name = 'TMOV';* 

Atualmente (11.8x) a chave é composta pelos campos: 

Chave/Index **TXMOVCFX**: 
CODCOLIGADA, SERIE, NUMEROMOV, CODFILIAL, CODCOLCFOAUX, CODCFOAUX, CODTDO, CRO, SUBSERIE

Para que a mensagem de erro deixe de ocorrer é necessário se atentar aos passos abaixo:

**IMPORTANTE:** 

Movimento de Entrada | Etapa Emitente/Destinatário 

Emitente deverá ser "Cliente" ou "Fornecedor" 
Destinatário deverá ser "Empresa" 

Isso porque na entrada o "emitente" da nota é quem fornece o produto. 



Movimento de Saída | Etapa Emitente/Destinatário 

Emitente deverá ser "Empresa" 
Destinatário deverá ser "Cliente" ou "Fornecedor" 

Isso porque na saída o "emitente" da nota é a empresa, que realiza a venda. 

CONFERÊNCIA - 1: 

1 - Acessar | Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Duplo clique sobre o tipo de movimento | Mov. Identificação | Serie | Anotar a série utilizada no movimento 

2 - Mesma etapa | Campo “Buscar número em” | Verificar se é filial ou geral (se a numeração for MOSTRA) 

3 - Mesma etapa | Ver se o parâmetro "Consistir Filial" está marcado. 

4 - Acessar | Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Definições Gerais | Numeração de movimento | Numero principal | Numeração Geral(se anterior for GERAL) ou Numeração por filial (Se anterior for FILIAL) | Avança. 

\- No campo série, digite a série utilizada no movimento a ser incluso. 
\- Caso a numeração do movimento seja gerada por filial na grid exibida após digitar a série localize a filial do movimento a ser incluso e verifique a coluna “Valor” referente a filial do movimento. 
\- Caso a numeração do movimento seja geral ao digitar a série do movimento verificar o valor exibido para o campo “Número”. 

Obs.:O número exibido ao digitar a série do movimento corresponde ao número do último movimento incluso no sistema que gere numeração automaticamente. 

Executar a consulta abaixo para verificar a última numeração inclusa no sistema para essa série. 

*SELECT MAX(NUMEROMOV) FROM TMOV* 
*WHERE SERIE = 'X'* 
*AND CODFILIAL = Y* 
*AND CODCOLIGADA = Z* 

Obs.: - Onde X é a serie verificada no passo 1, Y é a filial e Z é a coligada em que o movimento esta sendo incluso. 
\- A linha "*AND CODFILIAL = Y*", não será informada se a numeração do movimento for "Geral" ou se o parâmetro "Consistir Filial" estiver marcado. 

Verifique o número exibido tanto nos parâmetros quanto na sentença executada. Caso o número retornado na sentença SQL corresponda a uma numeração maior que o verificado nos parâmetros do sistema, iguale os parâmetros do sistema com o valor retornado na sentença. 

CONFERÊNCIA - 2: 

*SELECT CODCOLIGADA, SERIE, NUMEROMOV, CODFILIAL, CODCOLCFOAUX, CODCFOAUX, CODTDO, CRO, SUBSERIE, \** 
*FROM TMOV (NOLOCK)* 
*WHERE CODCOLIGADA =* --Código da Filial que o movimento duplicado 
*AND SERIE =* --Serie utilizada no movimento duplicado 
*AND NUMEROMOV =* --Numero do movimento duplicado 
*AND CODFILIAL =* --Filial do movimento Dulicado 
*AND CODCOLCFOAUX =* – \* ver detalhe abaixo 
*AND CODCFOAUX =* – \* ver detalhe abaixo 
*AND CODTDO =* -- Código do tipo de documento (Etapa Fis - Escrituração) que se utiliza no movimento 
*AND CRO =* --Somente em cupons Fiscais, se utilizar informar, se não, excluir esta linha ou informar valor ***NULL*** 
*AND SUBSERIE=* -- Se habilitada, informar o código da subsérie, se não, excluir ou informar valor ***NULL*** 

**\* CODCFOAUX** -- Copia o código do EMITENTE do movimento. Se este for igual a EMPRESA então informar o valor "CXXXXXXXXXX", se o emitente for diferente de empresa, informar o código do cli/for utilizado "TMOV.CODCFO" 

**\* CODCOLCFOAUX** -- Copia o código do EMITENTE do movimento. Se este for igual a EMPRESA então informar o valor "0", se o emitente for diferente de empresa, informar o código da coligada do cli/for utilizado "TMOV.CODCOLCFO" 

O resultado obtido indicará se o movimento a ser incluso existe ou não em sua base de dados. Caso a sentença retorne alguma linha deverá analisar o motivo da duplicidade dos valores e realizar o acerto necessário.

**Observações:**
