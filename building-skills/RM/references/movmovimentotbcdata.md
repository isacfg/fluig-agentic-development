# MOVMOVIMENTOTBCDATA

## Escopo real da fonte

Esta referência é sustentada apenas por `tmp_totvs_legado_single`, que contém uma única página raspada da API TOTVS Legado para o objeto `MOVMOVIMENTOTBCDATA`.

O que a fonte permite afirmar com segurança:

- o projeto indicado é `RM`;
- o módulo indicado é `Fiscal`;
- o `DataServerName` documentado é `MOVMOVIMENTOTBCDATA`;
- a chave primária informada é `CODCOLIGADA;IDMOV`;
- a página lista dezenas de objetos internos e mostra exemplos de `ReadRecord`, `SaveRecord` e `ReadView`.

O que a fonte não permite afirmar com segurança:

- que este seja o único DataServer relevante para movimentos no RM;
- que os exemplos usem credenciais, alias, `CODSISTEMA` ou endpoints válidos para todos os ambientes;
- que a ordem mínima dos nós, os campos obrigatórios condicionais e as regras de negócio estejam completos.

## Metadados principais

- `Project`: `RM`
- `Module`: `Fiscal`
- `Description`: `Movimentos de Origem`
- `Business Objects (DataServerName)`: `MOVMOVIMENTOTBCDATA`
- `PrimaryKey`: `CODCOLIGADA;IDMOV`

Leitura prática:

- use `MOVMOVIMENTOTBCDATA` como nome do DataServer;
- trate `CODCOLIGADA;IDMOV` como a chave primária documentada para leituras por registro;
- trate o restante como estrutura de payload e schema, não como regra funcional completa.

## Envelope XML

Nos exemplos da fonte, o DataServer trabalha com o envelope raiz:

```xml
<MovMovimento>
  <TMOV>...</TMOV>
  <TNFE>...</TNFE>
  <TMOVFISCAL>...</TMOVFISCAL>
  <TITMMOV>...</TITMMOV>
  <TITMMOV>...</TITMMOV>
  <TMOVCOMPL>...</TMOVCOMPL>
  <TMOVTRANSP>...</TMOVTRANSP>
</MovMovimento>
```

Leitura prática do envelope:

- `TMOV` representa o cabeçalho do movimento;
- `TITMMOV` aparece repetido para representar os itens;
- objetos auxiliares aparecem como blocos irmãos dentro do mesmo envelope;
- a página mostra o formato do XML, mas não define uma ordem mínima universal para todos os cenários.

## Objetos centrais

### Cabeçalho

`TMOV` é o objeto principal do movimento. A fonte mostra campos de identificação, filial, local de estoque, tipo de movimento, datas, valores, observações, transporte, integrações e vários campos fiscais e financeiros.

Campos recorrentes visíveis no exemplo:

- `CODCOLIGADA`
- `IDMOV`
- `CODFILIAL`
- `CODTMV`
- `NUMEROMOV`
- `SERIE`
- `STATUS`
- `DATAEMISSAO`
- `DATAMOVIMENTO`
- `CODCFO`
- `VALORBRUTO`
- `VALORLIQUIDO`

### Itens

`TITMMOV` representa os itens do movimento. A página mostra campos de sequência, produto, quantidade, preço, descontos, rateios, local de estoque e valores líquidos.

Campos recorrentes visíveis no exemplo:

- `CODCOLIGADA`
- `IDMOV`
- `NSEQITMMOV`
- `IDPRD`
- `CODIGOPRD`
- `QUANTIDADE`
- `PRECOUNITARIO`
- `VALORUNITARIO`
- `VALORLIQUIDO`
- `CODLOC`

### Tributos

A fonte mostra objetos dedicados a tributos em nível de movimento e item:

- `TTRBMOV`
- `TTRBITMMOV`

Use esses nomes para localizar tributação no schema, mas não assuma pela página quais combinações são obrigatórias em cada tipo de movimento.

### Campos livres e complementares

A fonte mostra objetos de extensão:

- `TMOVCOMPL`
- `TMOVNFECAMPOSLIVRES`
- `TITMMOVNFECAMPOSLIVRES`

Leitura prática:

- `TMOVCOMPL` sugere extensão complementar do cabeçalho;
- os objetos com `CAMPOSLIVRES` sugerem campos livres associados a NF-e e item;
- a página revela a existência desses blocos, mas não documenta regras de preenchimento por cenário.

### Vínculos entre movimentos e itens

A fonte mostra vários objetos de relacionamento:

- `TMOVRELAC`
- `TITMMOVRELAC`
- `TVINCMOVRELAC`
- `TMOVRELACEXP`

Leitura prática:

- trate esses objetos como indícios de relacionamento entre movimentos, itens e exportação;
- não deduza sozinho a semântica exata de cada vínculo se a página não a trouxer.

### Pagamento, contabilização e rateio

A fonte mostra objetos para desdobramentos financeiros:

- `TMOVPAGTO`
- `TMovCont`
- `TMovRat`

Leitura prática:

- `TMOVPAGTO` indica pagamento do movimento;
- `TMovCont` aponta para contabilização;
- `TMovRat` aponta para rateio.

Isso é útil para orientar leitura do schema, não para afirmar regra contábil universal.

### Subdomínios fiscais e de documentos eletrônicos

A página lista vários objetos relacionados a documentos fiscais e transporte:

- `TNFE`
- `TMOVFISCAL`
- `TITMMOVFISCAL`
- `TCHAVEACESSOREF`
- `TCTE...`
- `TMDFECARGAPERIGOSA`

Leitura prática:

- há evidência de que o envelope pode agregar dados de NF-e, CT-e, MDF-e e campos fiscais derivados;
- a página não explica quando cada subdomínio deve existir nem quais blocos são obrigatórios por operação.

## Operações documentadas

### `ReadRecord`

Uso observado na fonte:

- leitura de um registro por chave primária serializada;
- exemplo de chave no formato `"1;1"`;
- retorno em XML.

Leitura prática:

- use `ReadRecord` quando precisar de um movimento específico por `CODCOLIGADA;IDMOV`;
- o resultado esperado é um XML no envelope `MovMovimento`, contendo `TMOV` e possivelmente `TITMMOV` e outros blocos.

### `SaveRecord`

Uso observado na fonte:

- envio de XML completo para persistência;
- a própria página declara que, quando a PK existe, o comportamento é `Update`; quando não existe, é `Insert`;
- há exemplo de integração em JavaScript com `authService.saveRecord(...)`.

Leitura prática:

- `SaveRecord` trabalha sobre o XML inteiro do movimento;
- a página sugere semântica de insert e update pela existência da PK, mas não define todos os campos mínimos por cenário.

### `ReadView`

Uso observado na fonte:

- consulta por filtro textual;
- aparece em exemplo auxiliar, distinto de `ReadRecord`.

Leitura prática:

- use `ReadView` para listagem e busca por filtro;
- não trate `ReadView` como substituto natural de `ReadRecord` quando a necessidade for obter o XML completo de um movimento específico.

## Cautelas sobre `Contexto`

Os exemplos mostram `Contexto` em formato `chave=valor;chave=valor;...`, mas há variações importantes:

- aparecem variantes com `CODSISTEMA=G`;
- aparecem variantes com `CodSistema=F`;
- a capitalização das chaves não é uniforme;
- usuário, senha e endpoint dos exemplos parecem placeholders legados.

Como orientar com segurança:

- descreva o `Contexto` como string separada por `;`, com sistema, coligada e usuário;
- avise que a página traz exemplos divergentes de capitalização e código do sistema;
- não fixe um valor universal para `CODSISTEMA` sem evidência adicional do ambiente do usuário.

## Cautelas sobre exemplos legados

Os exemplos incluem sinais claros de material demonstrativo:

- endpoint em `localhost:8051`;
- usuário `mestre`;
- senha `integracao`;
- helpers como `DataClient`, `dcReadView`, `replaceValue`, `checkIsPK` e `authService`, sem implementação completa na base local.

Como orientar com segurança:

- use esses trechos para explicar forma e fluxo;
- não use esses valores como configuração pronta;
- não afirme que os helpers existam no ambiente do usuário sem outra fonte.

## O que esta fonte permite responder bem

- o que é `MOVMOVIMENTOTBCDATA`;
- qual é a PK documentada;
- qual envelope XML aparece na documentação;
- que `TMOV` é cabeçalho e `TITMMOV` representa itens;
- que existem blocos de tributos, vínculos, campos complementares, pagamento/rateio e subdomínios fiscais;
- quando preferir `ReadRecord`, `SaveRecord` ou `ReadView` com base nos exemplos.

## O que esta fonte não permite concluir

- payload mínimo universal para inserir ou atualizar qualquer movimento;
- regras funcionais completas por tipo de movimento;
- validações obrigatórias condicionais por produto, tributo, filial ou classificação;
- lista completa de erros esperados do DataServer;
- valor correto de `CODSISTEMA` para qualquer ambiente real;
- que a estrutura observada em `MOVMOVIMENTOTBCDATA` se aplica a outros DataServers do RM.

## Fórmula de resposta segura

Quando a pergunta for sobre este DataServer, responda nesta ordem:

1. delimite que a base cobre apenas `MOVMOVIMENTOTBCDATA`;
2. explique o que a página mostra de forma estrutural;
3. diferencie `ReadRecord`, `SaveRecord` e `ReadView`;
4. destaque qualquer incerteza sobre `Contexto`, credenciais ou obrigatoriedade;
5. diga explicitamente quando a pergunta exige evidência que não existe em `tmp_totvs_legado_single`.

<!-- AUTO-GENERATED START: LEGACY-DETAIL -->
## Inventario estrutural exaustivo dos objetos e campos

Este bloco foi gerado somente da tabela HTML convertida em markdown no arquivo legado local. Cada campo abaixo corresponde a uma linha observavel na documentacao raspada.

- Total de objetos capturados: 58
- Total de campos capturados: 1200

### [001] Objeto TMOV
- Quantidade de campos: 280
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 3
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODLOC
- Descricao: Local de Estoque
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODLOCENTREGA
- Descricao: Local de Saída
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CODLOCDESTINO
- Descricao: Código do Local de Destino
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODCFO
- Descricao: Cliente / Fornecedor
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: CODCFONATUREZA
- Descricao: Código Cliente / Fornecedor RM Fluxus
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: NUMEROMOV
- Descricao: Nº do Movimento
- Tamanho: 35
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: SERIE
- Descricao: Série
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: CODTMV
- Descricao: Tipo do Movtº
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: TIPO
- Descricao: Tipo dos Itens
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: STATUS
- Descricao: Status
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: MOVIMPRESSO
- Descricao: Identificador de Movimento Impresso
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: DOCIMPRESSO
- Descricao: Documento Impresso
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: FATIMPRESSA
- Descricao: Fatura Impressa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: DATASAIDA
- Descricao: Data da Saída
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: DATAEXTRA1
- Descricao: Data Opcional 1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: DATAEXTRA2
- Descricao: Data Opcional 2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: CODRPR
- Descricao: Representante
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: COMISSAOREPRES
- Descricao: Comissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: NORDEM
- Descricao: Nº no Cliente
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: CODCPG
- Descricao: Condição de Pagamento
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: NUMEROTRIBUTOS
- Descricao: Número de Tributos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: VALORBRUTO
- Descricao: Valor Bruto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: VALORLIQUIDO
- Descricao: Valor do Documento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: VALORLIQUIDOINFORMADO
- Descricao: Valor do Documento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: VALOROUTROS
- Descricao: SubTotal
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: OBSERVACAO
- Descricao: Observação
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: PERCENTUALFRETE
- Descricao: % Frete
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: VALORFRETE
- Descricao: Valor Frete
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: PERCENTUALSEGURO
- Descricao: Seguro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: VALORSEGURO
- Descricao: Valor do Seguro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: PERCENTUALDESC
- Descricao: Desconto (%)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: VALORDESC
- Descricao: Desconto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: PERCENTUALDESP
- Descricao: Despesa (%)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: VALORDESP
- Descricao: Despesa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: PERCENTUALEXTRA1
- Descricao: Extra 1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: VALOREXTRA1
- Descricao: Valor Extra1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 041: PERCENTUALEXTRA2
- Descricao: Extra 2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 042: VALOREXTRA2
- Descricao: Valor Extra2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 043: PERCCOMISSAO
- Descricao: % Comissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 044: CODMEN
- Descricao: Mensagem
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 045: CODMEN2
- Descricao: Mensagem 2
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 046: VIADETRANSPORTE
- Descricao: Via de Transporte
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 047: PLACA
- Descricao: Placa do Veículo
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 048: CODETDPLACA
- Descricao: Estado
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 049: PESOLIQUIDO
- Descricao: Peso Líquido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 050: PESOBRUTO
- Descricao: Peso Bruto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 051: MARCA
- Descricao: Marca da Mercadoria Transportada
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 052: NUMERO
- Descricao: Numeração dos Volumes
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 053: QUANTIDADE
- Descricao: Quantidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 054: ESPECIE
- Descricao: Espécie
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 055: CODTB1FAT
- Descricao: Tabela de Classificação 1
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 056: CODTB2FAT
- Descricao: Tabela de Classificação 2
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 057: CODTB3FAT
- Descricao: Tabela de Classificação 3
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 058: CODTB4FAT
- Descricao: Tabela de Classificação 4
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 059: CODTB5FAT
- Descricao: Tabela de Classificação 5
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 060: CODTB1FLX
- Descricao: Tabela de Classificação 1
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 061: CODTB2FLX
- Descricao: Tabela de Classificação 2
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 062: CODTB3FLX
- Descricao: Tabela de Classificação 3
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 063: CODTB4FLX
- Descricao: Tabela de Classificação 4
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 064: CODTB5FLX
- Descricao: Tabela de Classificação 5
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 065: IDMOVRELAC
- Descricao: Identificador do Movimento Relacionado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 066: IDMOVLCTFLUXUS
- Descricao: Identificador Mov Lançamentos Pag/Rec
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 067: IDMOVPEDDESDOBRADO
- Descricao: Identificador do Pedido Desdobrado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 068: CODMOEVALORLIQUIDO
- Descricao: Moeda
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 069: DATABASEMOV
- Descricao: Data Base do Movimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 070: DATAMOVIMENTO
- Descricao: Data de Emissão do Movimento de Entrada
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 071: NUMEROLCTGERADO
- Descricao: Número de Lançamento Gerado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 072: GEROUFATURA
- Descricao: Gerou Fatura
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 073: NUMEROLCTABERTO
- Descricao: Núimero de Lançamento Aberto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 074: FLAGEXPORTACAO
- Descricao: Flag Exportação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 075: EMITEBOLETA
- Descricao: Emite Boleta
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 076: CODMENDESCONTO
- Descricao: Mensagem de Desconto
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 077: CODMENDESPESA
- Descricao: Mensagem de Despesa
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 078: CODMENFRETE
- Descricao: Mensagem de Frete
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 079: FRETECIFOUFOB
- Descricao: Tipo de Frete
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 080: USADESPFINANC
- Descricao: Usa Despesa Financeira
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 081: FLAGEXPORFISC
- Descricao: Flag Exportação Fisc
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 082: FLAGEXPORFAZENDA
- Descricao: Flag Exportação da Fazenda
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 083: VALORADIANTAMENTO
- Descricao: Valor Adiantamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 084: CODTRA
- Descricao: Transportadora
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 085: CODTRA2
- Descricao: Transportadora 2
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 086: STATUSLIBERACAO
- Descricao: Status de Liberação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 087: CODCFOAUX
- Descricao: Código do Cliente / Fornecedor Auxiliar
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 088: IDLOT
- Descricao: Identificador Lote Faturamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 089: ITENSAGRUPADOS
- Descricao: Itens Agrupados
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 090: FLAGIMPRESSAOFAT
- Descricao: Flag Impressão do Faturamento
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 091: DATACANCELAMENTOMOV
- Descricao: Data Cancelamento do Movimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 092: VALORRECEBIDO
- Descricao: Valor Recebido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 093: SEGUNDONUMERO
- Descricao: 2º Número
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 094: CODCCUSTO
- Descricao: Centro de Custo
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 095: CODCXA
- Descricao: Conta/Caixa
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 096: CODVEN1
- Descricao: Vendedor 1
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 097: CODVEN2
- Descricao: Código do Vendedor 2
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 098: CODVEN3
- Descricao: Código do Vendedor 3
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 099: CODVEN4
- Descricao: Código do Vendedor 4
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 100: PERCCOMISSAOVEN2
- Descricao: % Comissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 101: CODCOLCFO
- Descricao: Coligada do Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 102: CODCOLCFONATUREZA
- Descricao: Cliente/Fornecedor Origem/Destino
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 103: CODUSUARIO
- Descricao: Usuário de Alteração
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: mestre
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 104: CODFILIALENTREGA
- Descricao: Código da Filial de Entrega/Saída
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 105: CODFILIALDESTINO
- Descricao: Código da Filial de Destino
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 106: FLAGAGRUPADOFLUXUS
- Descricao: Agrupado no Fluxus
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 107: CODCOLCXA
- Descricao: Coligada da Conta/Caixa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 108: GERADOPORLOTE
- Descricao: Gerado por Lote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 109: CODDEPARTAMENTO
- Descricao: Departamento
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 110: CODCCUSTODESTINO
- Descricao: Centro de Custo Destino (Transf.)
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 111: CODEVENTO
- Descricao: Evento Contabíl
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 112: STATUSEXPORTCONT
- Descricao: Status de exportação contábil
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 113: CODLOTE
- Descricao: Código do Lote Contábil Exportado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 114: STATUSCHEQUE
- Descricao: Status de Recebimento de Cheque
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 115: DATAENTREGA
- Descricao: Data Entrega
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 116: DATAPROGRAMACAO
- Descricao: Data de Programação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 117: IDNAT
- Descricao: Natureza
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 118: IDNAT2
- Descricao: 2ª Natureza
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 119: CAMPOLIVRE1
- Descricao: Campo Livre
- Tamanho: 100
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 120: CAMPOLIVRE2
- Descricao: Campo Livre2
- Tamanho: 100
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 121: CAMPOLIVRE3
- Descricao: Campo Livre3
- Tamanho: 100
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 122: GEROUCONTATRABALHO
- Descricao: Gerou Conta Trabalho
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 123: GERADOPORCONTATRABALHO
- Descricao: Gerado por Conta Trabalho
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 124: HORULTIMAALTERACAO
- Descricao: Horário da Última Alteração
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 125: CODLAF
- Descricao: Lançamento Fiscal
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 126: DATAFECHAMENTO
- Descricao: Data de Fechamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 127: NSEQDATAFECHAMENTO
- Descricao: Número Sequencial da Data de Fechamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 128: NUMERORECIBO
- Descricao: Número do Recibo Emitido para a Nota
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 129: IDLOTEPROCESSO
- Descricao: Identificador do Lote de Processos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 130: IDOBJOF
- Descricao: Identificador do Objeto
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 131: CODAGENDAMENTO
- Descricao: Código do Agendamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 132: CHAPARESP
- Descricao: Chapa do Responsável
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 133: IDLOTEPROCESSOREFAT
- Descricao: Identificador do Lote de Refaturamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 134: INDUSOOBJ
- Descricao: Indica Uso Objeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 135: SUBSERIE
- Descricao: Sub Série
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 136: STSCOMPRAS
- Descricao: Status de Mov. de Compras
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 137: CODLOCEXP
- Descricao: Código do Local de Expedição
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 138: IDCLASSMOV
- Descricao: Classificação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 139: CODENTREGA
- Descricao: Tipo de Entrega
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 140: CODFAIXAENTREGA
- Descricao: Faixa de Entrega
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 141: DTHENTREGA
- Descricao: Data/Hora Entrega
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 142: CONTABILIZADOPORTOTAL
- Descricao: Tipo de Contabilização Feita
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 143: CODLAFE
- Descricao: Lote de Escrituracao Entrada
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 144: IDPRJ
- Descricao: Identificador do Projeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 145: NUMEROCUPOM
- Descricao: Nº Cupom
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 146: NUMEROCAIXA
- Descricao: Nº Caixa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 147: FLAGEFEITOSALDO
- Descricao: Efeito Saldo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 148: INTEGRADOBONUM
- Descricao: Integrado RM Bonum
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 149: CODMOELANCAMENTO
- Descricao: Moeda Indexadora do Lançamento
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 150: NAONUMERADO
- Descricao: Movimento ainda Nao Numerado
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 151: FLAGPROCESSADO
- Descricao: Flag Processado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 152: ABATIMENTOICMS
- Descricao: Valor do Abatimento de Icms
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 153: TIPOCONSUMO
- Descricao: Tipo do Consumo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 154: HORARIOEMISSAO
- Descricao: Horário de Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 155: DATARETORNO
- Descricao: Data de Retorno
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 156: USUARIOCRIACAO
- Descricao: Usuário de Criação
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 157: DATACRIACAO
- Descricao: Data de Criação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 158: IDCONTATOENTREGA
- Descricao: Entrega
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 159: IDCONTATOCOBRANCA
- Descricao: Cobrança
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 160: STATUSSEPARACAO
- Descricao: status da separação
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 161: STSEMAIL
- Descricao: Status de Envio de E-Mail
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 162: VALORFRETECTRC
- Descricao: Frete CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 163: PONTOVENDA
- Descricao: Ponto de Venda
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 164: PRAZOENTREGA
- Descricao: Prazo Entrega
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 165: VALORBRUTOINTERNO
- Descricao: Somatório de quantXpreço do item do mov.
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 166: IDAIDF
- Descricao: AIDF
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 167: IDSALDOESTOQUE
- Descricao: Identificador do Estoque Frente de Loja
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 168: VINCULADOESTOQUEFL
- Descricao: Vinculado o Estoque o Frente de Loja
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 169: IDREDUCAOZ
- Descricao: Redução Z
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 170: HORASAIDA
- Descricao: Horário
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 171: CODMUNSERVICO
- Descricao: Município
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 172: CODETDMUNSERV
- Descricao: UF
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 173: APROPRIADO
- Descricao: Apropriação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 174: CODIGOSERVICO
- Descricao: Código do Serviço
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 175: DATADEDUCAO
- Descricao: Data de Dedução
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 176: CODDIARIO
- Descricao: Código do Diario
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 177: SEQDIARIO
- Descricao: Seqüêncial Diário
- Tamanho: 9
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 178: SEQDIARIOESTORNO
- Descricao: Seq.de Diário p/Estorno de Lanç.Contabil
- Tamanho: 9
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 179: VRBASEINSSOUTRAEMPRESA
- Descricao: Base INSS Outras Empresas
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 180: IDMOVCTRC
- Descricao: ID do CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 181: DATAPROGRAMACAOANT
- Descricao: Data de Programação Anterior
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 182: CODTDO
- Descricao: Tipo de Documento
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 183: VALORDESCCONDICIONAL
- Descricao: Des. Condicional
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 184: VALORDESPCONDICIONAL
- Descricao: Desp. Condicional
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 185: CODIGOIRRF
- Descricao: Código da Receita
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 186: DEDUCAOIRRF
- Descricao: Base IRRF (%)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 187: PERCENTBASEINSS
- Descricao: % Dedução Empregador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 188: PERCBASEINSSEMPREGADO
- Descricao: % Dedução Empregado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 189: CONTORCAMENTOANTIGO
- Descricao: Movimento orçado sem considerar rateios
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 190: CODDEPTODESTINO
- Descricao: Departamento de Destino
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 191: DATACONTABILIZACAO
- Descricao: Data de contabilização do movimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 192: CODVIATRANSPORTE
- Descricao: Via de Transporte
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 193: VALORSERVICO
- Descricao: Valor do Serviço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 194: SEQUENCIALESTOQUE
- Descricao: Ordem em que movimento afetou estoque
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 195: DISTANCIA
- Descricao: Distância (Km)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 196: UNCALCULO
- Descricao: Unidade de Medida
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 197: FORMACALCULO
- Descricao: Forma de Cálculo do Frete
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 198: INTEGRADOAUTOMACAO
- Descricao: Exportado para Automação Comercial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 199: INTEGRAAPLICACAO
- Descricao: Aplicação Origem
- Tamanho: 1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 200: CLASSECONSUMO
- Descricao: Classe de Consumo
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 201: TIPOASSINANTE
- Descricao: Tipo de Assinante
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 202: FASE
- Descricao: Fase
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 203: TIPOUTILIZACAO
- Descricao: Tipo de utilização
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 204: GRUPOTENSAO
- Descricao: Grupo de tensão
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 205: DATALANCAMENTO
- Descricao: Data Lançamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 206: EXTENPORANEO
- Descricao: Extemporâneo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 207: RECIBONFESTATUS
- Descricao: Status do Recibo
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 208: RECIBONFETIPO
- Descricao: Tipo do Recibo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 209: RECIBONFENUMERO
- Descricao: Número do Recibo
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 210: RECIBONFESITUACAO
- Descricao: Situação do Recibo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 211: IDMOVCFO
- Descricao: Identificador do Histórido do C/F
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 212: OCAUTONOMO
- Descricao: Ocorrência Autônomo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 213: VALORMERCADORIAS
- Descricao: Valor Mercadorias
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 214: NATUREZAVOLUMES
- Descricao: Natureza dos Volumes
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 215: VOLUMES
- Descricao: Volume Transportado
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 216: CRO
- Descricao: CRO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 217: USARATEIOVALORFIN
- Descricao: Utiliza Rateio de Valor Financeiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 218: RECIBONFESERIE
- Descricao: Série do Recibo
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 219: CODCOLCFOORIGEM
- Descricao: Coligada do cliente\fornecedor de origem
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 220: CODCFOORIGEM
- Descricao: Cliente / Fornecedor de Origem / Destino
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 221: VALORCTRCARATEAR
- Descricao: Valor do CTRC a ratear
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 222: CODCOLCFOAUX
- Descricao: CODCOLCFOAUX
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 223: CODUSUARIOAPROVADESC
- Descricao: Usuário Aprovação Desc. Máximo
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 224: IDCEICFO
- Descricao: CEI
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 225: CODCOLCFOTRANSFAT
- Descricao: CODCOLCFOTRANSFAT
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 226: CODCFOTRANSFAT
- Descricao: Cliente / Fornecedor Destino Transf.
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 227: AVISOPERMISSAO
- Descricao: AVISOPERMISSAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 228: VALORRATEIOLAN
- Descricao: Valor Original Financeiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 229: CHAVEACESSONFE
- Descricao: Chave de Acesso
- Tamanho: 44
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 230: VLRSECCAT
- Descricao: Valores de Coleta/Custo Adicionais
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 231: VLRDESPACHO
- Descricao: Valores de Despacho
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 232: VLRPEDAGIO
- Descricao: Valores de Pedágio
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 233: VLRFRETEOUTROS
- Descricao: Outros valores de Frete
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 234: HISTORICOCURTO
- Descricao: Histórico Curto
- Tamanho: 255
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 235: HISTORICOLONGO
- Descricao: Histórico Longo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 236: RATEIOCCUSTODEPTO
- Descricao: RATEIOCCUSTODEPTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 237: STATUSANTERIOR
- Descricao: STATUSANTERIOR
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 238: VALORBRUTOORIG
- Descricao: Valor Bruto Original
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 239: VALORLIQUIDOORIG
- Descricao: Valor Original do Documento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 240: VALOROUTROSORIG
- Descricao: SubTotal Original
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 241: VALORRATEIOLANORIG
- Descricao: Valor Original Financeiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 242: IDINTEGRACAO
- Descricao: Identificador da Integração
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 243: IDNATFRETE
- Descricao: Natureza Frete:
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 244: IDXMLTOTVSCOLAB
- Descricao: IDXMLTOTVSCOLAB
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 245: VALORRECEBIDOFATPARC
- Descricao: Valor Recebido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 246: VALORCONCLUIDO
- Descricao: Valor Concluido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 247: ALERTAPERMISSAO
- Descricao: ALERTAPERMISSAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 248: DATAPROCESSAMENTO
- Descricao: DATAPROCESSAMENTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 249: FLAGCONCLUSAO
- Descricao: Flag de Conclusão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 250: PRODPREDOMINANTE
- Descricao: Produto Predominante
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 251: STATUSPARADIGMA
- Descricao: Status Paradigma
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 252: CNPJCPFADQUIRENTE
- Descricao: CNPJ/CPF do Adquirente
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 253: NOMEADQUIRENTE
- Descricao: Nome do Adquirente
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 254: DOCESTRANGEIROADQUIRENTE
- Descricao: Doc. Estrangeiro do Adquirente
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 255: STATUSINTEGRACAO
- Descricao: Status de Integração
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: N
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 256: STSCONTRATO
- Descricao: Status de Mov. Relacionado ao Contrato
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 257: INTEGRADOAUTOMATICOPARADIGMA
- Descricao: INTEGRADOAUTOMATICOPARADIGMA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Boolean
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 258: DESCTIPOMOV
- Descricao: Tipo de Movimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 259: NOMEFANTASIA
- Descricao: Nome Fantasia Cli/For
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 260: NOME
- Descricao: Nome Cli/For
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 261: STSCONCLUIDO
- Descricao: Status de Conclusão
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 262: CODOSINTEGRACAO
- Descricao: CODOSINTEGRACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 263: OSINTERNALIDINTEGRACAO
- Descricao: OSINTERNALIDINTEGRACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 264: IDMOVOSMNT
- Descricao: Identificador da Ordem de Serviço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 265: CODCOLINTERMEDIADOR
- Descricao: Coligada do Intermediador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 266: IDINTERMEDIADOR
- Descricao: Intermediador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 267: DESCONSIDERARSNMOV
- Descricao: Desconsidera Regra de Seleção Natureza
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 268: PROTOCOLOAUTNFE
- Descricao: Protocolo de Autorização
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 269: INSSEMOUTRAEMPRESA
- Descricao: INSSEMOUTRAEMPRESA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 270: ABATIMENTONAOTRIB
- Descricao: ABATIMENTONAOTRIB
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 271: IDOPERACAO
- Descricao: IDOPERACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 272: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 273: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 274: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 275: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 276: IDTSS
- Descricao: IDTSS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 277: STATUSMOVINCLUSAOCOLAB
- Descricao: Status Inclusão via arquivo XML
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 278: CODFILIALSCP
- Descricao: CODFILIALSCP
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 279: CODCOLIGADA1
- Descricao: CODCOLIGADA1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 280: IDMOVHST
- Descricao: IDMOVHST
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [002] Objeto TTRBMOV
- Quantidade de campos: 20
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODTRB
- Descricao: Código do Tributo
- Tamanho: 10
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: BASEDECALCULO
- Descricao: Base de Cálculo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: ALIQUOTA
- Descricao: Alíquota
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: FATORREDUCAO
- Descricao: Fator de Redução
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: FATORSUBSTTRIB
- Descricao: Fator Substituição Tributária
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: BASEDECALCULOCALCULADA
- Descricao: Base de Cálculo Obtida pela Fórmula
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: EDITADO
- Descricao: Manter Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: VLRISENTO
- Descricao: Isento Outros Tributos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: CODRETENCAO
- Descricao: Código de retenção do imposto
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: TIPORECOLHIMENTO
- Descricao: Tipo de Recolhimento
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: CODTRBBASE
- Descricao: Tributo Base
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: PERCDIFERIMENTOPARCIALICMS
- Descricao: Percentual Diferimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: SITTRIBUTARIA
- Descricao: Situacao Tributaria
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: MODALIDADEBC
- Descricao: Modalidade Base Cálculo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: BASECHEIA
- Descricao: BASECHEIA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: NATOPERNFSE
- Descricao: Natureza de Operação do ISS
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [003] Objeto TNFE
- Quantidade de campos: 19
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODIGOSERVICO
- Descricao: Código do Serviço
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: VALORSERVICO
- Descricao: Valor do Serviço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: DEDUCAOSERVICO
- Descricao: Dedução do Serviço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: ALIQUOTAISS
- Descricao: Aliquota ISS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: ISSRETIDO
- Descricao: ISS Retido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMERONFE
- Descricao: Número NF-e
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CODIGOVERIFICACAONFE
- Descricao: Código de Verificação
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: HORAEMISSAO
- Descricao: Horário de Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: DATACANCELAMENTO
- Descricao: Data de Cancelamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: NUMEROGUIA
- Descricao: Número da Guia
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: DATAQUITACAOGUIA
- Descricao: Data de Quitação da Guia
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: VALORISS
- Descricao: Valor do ISS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: VALORCREDITOIPTU
- Descricao: Valor de Crédito de IPTU
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: DISCRIMINACAO
- Descricao: Discriminação do Serviço
- Tamanho: 2147483647
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: BASEDECALCULO
- Descricao: Base de Cálculo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: EDITADO
- Descricao: Recibo Editado Pelo Usuário
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [004] Objeto TMOVFISCAL
- Quantidade de campos: 45
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: DECLARACAOEXPORTACAO
- Descricao: Núm. Declaração de Exportação
- Tamanho: 14
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: DATADE
- Descricao: Data Declaração de Exportação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NATUREZAEXPORTACAO
- Descricao: Natureza de Exportação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CONHECIMENTOEMBARQUE
- Descricao: Conhecimento de Embarque
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: DATACE
- Descricao: Data Conhecimento de Embarque
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: TIPOCE
- Descricao: Tipo Conhecimento de Embarque
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: DATAAVERBACAO
- Descricao: Data de Averbação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: DECLARACAOIMPORTACAO
- Descricao: Núm. Declaração de Importação
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: DATADI
- Descricao: Data Declaração de Importação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: VLRDEDUCAOMATERIAL
- Descricao: Valor do Material
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: VLRDEDCAOSUBEMPREITADA
- Descricao: Valor SubEmpreitada
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: VLRDEDUCAOOUTRO
- Descricao: Dedução de ISS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: IDCLASSECONSUMO
- Descricao: Identificador Classe de Consumo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: IDTIPOLIGACAO
- Descricao: Identificador Tipo Ligação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: IDGRUPOTENSAO
- Descricao: Identificador Grupo de Tensão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: UNIDADECONSUMO
- Descricao: Código Unidade de Consumo
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: DATAINICIOCONSUMO
- Descricao: Data Início Consumo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: DATAFINALCONSUMO
- Descricao: Data Final Consumo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: DATALEITURA
- Descricao: Data Leitura
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: DEMANDAPONTA
- Descricao: Demanda Ponta
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: DEMANDAFORAPONTA
- Descricao: Demanda Fora Ponta
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: CONSUMOTOTAL
- Descricao: Consumo Total
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: MOTIVOCANCELAMENTO
- Descricao: Motivo do cancelamento
- Tamanho: 255
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: VALORDESPACHO
- Descricao: Valor do Despacho
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: NUMDESPACHO
- Descricao: Número do Despacho
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: DATADESEMBARACO
- Descricao: Data do Desembaraço Aduaneiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: IDTIPOUTILIZACAO
- Descricao: Identificador Tipo de Utilização
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: CONTACONSUMO
- Descricao: Conta de Consumo
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: CONTRIBUINTECREDENCIADO
- Descricao: Contribuinte Credenciado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: OPERACAOCONSUMIDORFINAL
- Descricao: Consumidor Final
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: LOCALDESEMBARACO
- Descricao: Local de Desembaraço/Embarque
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: UFDESEMBARACO
- Descricao: UF do Desembaraço/Embarque
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: NATUREZAIMPORTACAO
- Descricao: Natureza de Importação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: DATAINICIOCREDITO
- Descricao: Início Aproveit. Créd. Ativo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: INFADICIONAISFISCO
- Descricao: Informações Adicionais ao Fisco
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: INFCOMPLCONTRIBUINTE
- Descricao: Informações Complementares do Contribuinte
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: DTCOMPETENCIASERVICO
- Descricao: Data Competência Serviço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: DRAWBACK
- Descricao: Nº Ato Conscess. Regime Drawback
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 041: OPERACAOPRESENCIAL
- Descricao: Operação Presencial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 042: MODOPRESTACAO
- Descricao: Modo de Prestação da Operação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 043: DATAINICIO
- Descricao: Data Inicial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 044: DATACONCLUSAO
- Descricao: Data Final
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 045: REFUNICACARGA
- Descricao: Referência unica de carga (RUC)
- Tamanho: 35
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [005] Objeto TMOVRATCCU
- Quantidade de campos: 13
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODCCUSTO
- Descricao: Centro de Custo
- Tamanho: 25
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: NOME
- Descricao: Nome Centro de Custo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: PERCENTUAL
- Descricao: Percentual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: HISTORICO
- Descricao: Histórico
- Tamanho: 255
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: IDPRJ
- Descricao: Projeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: IDTRF
- Descricao: Tarefa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: CODTBGRUPOORC
- Descricao: Cód. Grupo Orçamentário
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: IDMOVRATCCU
- Descricao: Identificador do Rateio por Centro de Custo
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: CODPRJ
- Descricao: Projeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: CODTRF
- Descricao: Tarefa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [006] Objeto TMOVRATDEP
- Quantidade de campos: 7
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODDEPARTAMENTO
- Descricao: Departamento
- Tamanho: 25
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NOME
- Descricao: Nome Departamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: PERCENTUAL
- Descricao: Percentual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [007] Objeto TMOVPAGTO
- Quantidade de campos: 44
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDSEQPAGTO
- Descricao: Id Seq. de Pagto.
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODCOLCFODEFAULT
- Descricao: Coligada do Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODCFODEFAULT
- Descricao: Cliente / Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: TIPOFORMAPAGTO
- Descricao: Forma Pagamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODPERIODO
- Descricao: Período
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: MULTIPLOPAGAMENTO
- Descricao: Parcela de mútliplos pagamentos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CODCFO
- Descricao: Cliente / Fornecedor
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: CODCOLCFO
- Descricao: Coligada do Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: TELEMITENTE
- Descricao: Telefone do Emitente
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: NOMEEMITENTE
- Descricao: Nome do Emitente
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: TAXAADM
- Descricao: Taxa Administrativa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: CAMPOLIVRE
- Descricao: Campo Livre
- Tamanho: 100
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: CODCXA
- Descricao: Conta/Caixa
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: CODCOLCXA
- Descricao: Coligada da Conta/Caixa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: IDLAN
- Descricao: Identif. Lançamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: BAIXADO
- Descricao: Pagamento Baixado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: ADMINISTRADORA
- Descricao: Nome da Administradora
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: NOMEREDE
- Descricao: Nome da Rede
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: FINALIZACAO
- Descricao: Código Finalização
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: DATACOMPROVANTE
- Descricao: Data do Comprovante
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: NSU
- Descricao: Número da Transação
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: DIGITOCHEQUE
- Descricao: Dígito do Cheque
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: CHEQUE
- Descricao: Número do Cheque
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: DIGITOCC
- Descricao: Dígito C/C
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: CC
- Descricao: Código da C/C
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: DIGITOAGENCIA
- Descricao: Dígito da Agência
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: AGENCIA
- Descricao: Código da Agência
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: BANCO
- Descricao: Código do Banco
- Tamanho: 4
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: CMC7
- Descricao: Código CMC-7
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: FISICAJURIDICA
- Descricao: Pessoa Fisica/Juridica
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: CNPJCPF
- Descricao: CNPJ / CPF
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: QTDEPARCELAS
- Descricao: Quantidade de Parcelas
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: TIPOPARCELAMENTO
- Descricao: Parcelado Administradora
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: DOLAR
- Descricao: Pagamento em Dolar
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: IDFORMAPAGTO
- Descricao: Identif. Forma Pagto.
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: DATAVENCIMENTO
- Descricao: Data Vencimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: TIPOPAGAMENTO
- Descricao: Tipo do Pagamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 041: DESCRICAO
- Descricao: Descrição
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 042: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 043: DEBITOCREDITO
- Descricao: Débito/Crédito
- Tamanho: 1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 044: DESCFORMAPAGTO
- Descricao: Forma Pagamento
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVPAGTO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [008] Objeto TMOVDISPOSITIVO
- Quantidade de campos: 3
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVDISPOSITIVO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVDISPOSITIVO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NROSEGURANCA
- Descricao: Número do Dispositivo
- Tamanho: 12
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVDISPOSITIVO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [009] Objeto TITMMOV
- Quantidade de campos: 156
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NUMEROSEQUENCIAL
- Descricao: Nº Sequencial
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: IDPRD
- Descricao: Produto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODIGOPRD
- Descricao: Produto
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NOMEFANTASIA
- Descricao: Descrição Produto
- Tamanho: 240
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CODIGOREDUZIDO
- Descricao: Código Reduzido
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: NUMNOFABRIC
- Descricao: Número no Fabricante
- Tamanho: 100
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: CODFAB
- Descricao: Código do Fabricante
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: CODIGOAUXILIAR
- Descricao: Código Auxiliar
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: CODTIP
- Descricao: Código Tipo de Produto para Faturamento
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: QUANTIDADE
- Descricao: Quantidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: PRECOUNITARIO
- Descricao: Preço Unitário
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: PRECOTABELA
- Descricao: Preço da Tabela
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: PERCENTUALDESC
- Descricao: Desconto (%)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: VALORDESC
- Descricao: Desconto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: PERCENTUALDESP
- Descricao: Despesa (%)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: VALORDESP
- Descricao: Despesa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: CODMEN
- Descricao: Mensagem
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: NUMEROTRIBUTOS
- Descricao: Número de Tributos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: CODTB1FAT
- Descricao: Tabela de Classificação 1
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: CODTB2FAT
- Descricao: Tabela de Classificação 2
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: CODTB3FAT
- Descricao: Tabela de Classificação 3
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: CODTB4FAT
- Descricao: Tabela de Classificação 4
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: CODTB5FAT
- Descricao: Tabela de Classificação 5
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: CODTB1FLX
- Descricao: Tabela de Classificação 1
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: CODTB2FLX
- Descricao: Tabela de Classificação 2
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: CODTB3FLX
- Descricao: Tabela de Classificação 3
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: CODTB4FLX
- Descricao: Tabela de Classificação 4
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: CODTB5FLX
- Descricao: Tabela de Classificação 5
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: CAMPOLIVRE
- Descricao: Campo Livre
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: CODUND
- Descricao: Unidade
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: QUANTIDADEARECEBER
- Descricao: Quantidade a Receber
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: CODNAT
- Descricao: Código da Natureza
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: CODCPG
- Descricao: Condição de Pagamento
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: DATAENTREGA
- Descricao: Data Entrega
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: PRATELEIRA
- Descricao: Prateleira
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 041: IDCNT
- Descricao: Contrato
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 042: NSEQITMCNT
- Descricao: Número Sequencial do Item de Contrato
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 043: DATAINIFAT
- Descricao: Data Inicial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 044: DATAFIMFAT
- Descricao: Data Final
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 045: FLAGEFEITOSALDO
- Descricao: Efeito Saldo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 046: VALORUNITARIO
- Descricao: Valor Unitário
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 047: VALORFINANCEIRO
- Descricao: Valor Financeiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 048: IMPRIMEMOV
- Descricao: Tipo de Cobrança - Nf ou Boleto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 049: CODCCUSTO
- Descricao: Centro de Custo
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 050: FLAGREPASSE
- Descricao: Gera Repasse
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 051: ALIQORDENACAO
- Descricao: Alíquota de Imposto para Ordenação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 052: QUANTIDADEORIGINAL
- Descricao: Quantidade Original
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 053: IDNAT
- Descricao: Natureza
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 054: FLAG
- Descricao: Faturar
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 055: CHAPA
- Descricao: Chapa do Funcionário
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 056: INICIO
- Descricao: Data de Início
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 057: TERMINO
- Descricao: Data de Término
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 058: PREVINICIO
- Descricao: Data de Previsão de Início
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 059: STATUS
- Descricao: Status
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 060: BLOCK
- Descricao: Bloqueia Objeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 061: FLAGREFATURAMENTO
- Descricao: Refaturamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 062: IDCNTDESTINO
- Descricao: Contrato Destino
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 063: NSEQITMCNTDEST
- Descricao: Nº Sequencial do Item D.Contrato Destino
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 064: FATORCONVUND
- Descricao: Fator de Conversão de Unidade do Item
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 065: IDPRJ
- Descricao: Identificador do Projeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 066: IDTRF
- Descricao: Identificador de Tarefa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 067: VALORBRUTOITEM
- Descricao: Valor do Item
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 068: VALORTOTALITEM
- Descricao: Preço Total
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 069: VALORCODIGOPRD
- Descricao: Código do Produto
- Tamanho: 200
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 070: TIPOCODIGOPRD
- Descricao: Tipo do Código do Produto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 071: QTDUNDPEDIDO
- Descricao: Quantidade na Unid. do Pedido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 072: TRIBUTACAOECF
- Descricao: Tributação ECF
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 073: CODDEPARTAMENTO
- Descricao: Departamento
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 074: IDPRDCOMPOSTO
- Descricao: Identificador do Produto Kit
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 075: QUANTIDADESEPARADA
- Descricao: Quantidade separada do lote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 076: PERCENTCOMISSAO
- Descricao: % Comissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 077: NCM
- Descricao: Nomenclatura Comum do Merconsul
- Tamanho: 14
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 078: CODRPR
- Descricao: Representante
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 079: COMISSAOREPRES
- Descricao: Comissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 080: NSEQITMCNTMEDICAO
- Descricao: Sequencial da medição do item de cnt
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 081: VALORESCRITURACAO
- Descricao: Valor de Escrituração
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 082: VALORFINPEDIDO
- Descricao: Valor Financeiro do Pedido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 083: VALORFRETECTRC
- Descricao: Frete CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 084: VALOROPFRM1
- Descricao: Valor Opcional 1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 085: VALOROPFRM2
- Descricao: Valor Opcional 2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 086: IDOBJOFICINA
- Descricao: Obj do RMOfficina associado ao ítem mov
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 087: PRECOEDITADO
- Descricao: Manter Preço Unitário
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 088: QTDEVOLUMEUNITARIO
- Descricao: Numero de volumes ocupados unitariamente
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 089: IDGRD
- Descricao: Identificador da Grade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 090: CODVEN1
- Descricao: Vendedor 1
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 091: CODLOCALBN
- Descricao: Código de localização do bem
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 092: REGISTROEXPORTACAO
- Descricao: Núm. Registro de Exportação
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 093: DATARE
- Descricao: Data Registro de Exportação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 094: PRECOTOTALEDITADO
- Descricao: Preço total editado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 095: CST
- Descricao: CST
- Tamanho: 3
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 096: VALORDESCCONDICONALITM
- Descricao: Desc. Condicional
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 097: VALORDESPCONDICIONALITM
- Descricao: Desp. Condicional
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 098: DATAORCAMENTO
- Descricao: Data do Orçamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 099: CODTBORCAMENTO
- Descricao: Natureza Orçamentária/Financeira
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 100: CODCOLTBORCAMENTO
- Descricao: CODCOLTBORCAMENTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 101: RATEIOFRETE
- Descricao: Frete
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 102: RATEIOSEGURO
- Descricao: Seguro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 103: RATEIODESC
- Descricao: Desconto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 104: RATEIODESP
- Descricao: Despesa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 105: RATEIOEXTRA1
- Descricao: Valor Extra1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 106: RATEIOEXTRA2
- Descricao: Valor Extra2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 107: RATEIOFRETECTRC
- Descricao: Frete CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 108: RATEIODEDMAT
- Descricao: Ded. Material
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 109: RATEIODEDSUB
- Descricao: Ded. Subempreitada
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 110: RATEIODEDOUT
- Descricao: Outras Deduções
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 111: IDCLASSIFENERGIACOMUNIC
- Descricao: Classificação do Item de Energia
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 112: VALORUNTORCAMENTO
- Descricao: Valor Unitário do Orçamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 113: VALSERVICONFE
- Descricao: Valor do Serviço (NF-e)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 114: CODLOC
- Descricao: Local de Estoque
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 115: VALORBEM
- Descricao: Valor de Compra do Bem
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 116: VALORLIQUIDO
- Descricao: Valor do Documento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 117: CODIGOCODIF
- Descricao: Código de autorização/registro do CODIF
- Tamanho: 21
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 118: HISTORICOCURTO
- Descricao: Histórico Curto
- Tamanho: 255
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 119: HISTORICOLONGO
- Descricao: Histórico Longo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 120: RATEIOCCUSTODEPTO
- Descricao: RATEIOCCUSTODEPTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 121: VALORBRUTOITEMORIG
- Descricao: Valor Original do Item
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 122: CODMUNSERVICO
- Descricao: Município
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 123: CODETDMUNSERV
- Descricao: UF
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 124: CODIGOSERVICO
- Descricao: Código do Serviço
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 125: IDTABPRECO
- Descricao: IDTABPRECO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 126: CODPUBLIC
- Descricao: Publicação - Biblioteca
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 127: CODNATUREZAITEM
- Descricao: CODNATUREZAITEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 128: QUANTIDADETOTAL
- Descricao: Quantidade Total
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 129: CODTBGRUPOORC
- Descricao: Cód. Grupo Orçamentário
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 130: PRODUTOSUBSTITUTO
- Descricao: Produto Substituto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 131: VALORRATEIOLAN
- Descricao: VALORRATEIOLAN
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 132: PRECOUNITARIOSELEC
- Descricao: Seleção de Preço:
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 133: VALORFINANCGERENCIAL
- Descricao: VALORFINANCGERENCIAL
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 134: VALORUNITGERENCIAL
- Descricao: VALORUNITGERENCIAL
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 135: IDINTEGRACAO
- Descricao: IDINTEGRACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 136: DATAFATCONTRATO
- Descricao: Data Faturamento Contrato
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 137: IDCNTOP
- Descricao: Contrato
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 138: VALORRECEBIDOFATPARC
- Descricao: Valor Recebido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 139: VALORCONCLUIDO
- Descricao: Valor Concluido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 140: QUANTIDADECONCLUIDA
- Descricao: Quantidade Concluida
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 141: CONTROLEALTERACAO
- Descricao: CONTROLEALTERACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 142: CODUNDORIGINAL
- Descricao: Unidade
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 143: IDPRDORIGEM
- Descricao: IDPRDORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 144: INTEGRAAPLICACAO
- Descricao: Aplicação Origem
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 145: IDITEMCOMPTRIBUTOSXMLCOLAB
- Descricao: IDITEMCOMPTRIBUTOSXMLCOLAB
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 146: VALORRETENCAO
- Descricao: Valor Retido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 147: PERCENTUALRETENCAO
- Descricao: Percentual Retido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 148: IDMARCA
- Descricao: Identificador da Marca
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 149: CODCOLMARCA
- Descricao: Coligada da Marca do Produto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 150: VALORDEDUCAO
- Descricao: Valor deduzido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 151: PERCENTUALDEDUCAO
- Descricao: Percentual deduzido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 152: QUANTIDADETRIBUTAVEL
- Descricao: Quantidade Tributável
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 153: CODBEMSIGAMNT
- Descricao: Bem do SigaMNT associado ao item mov.
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 154: TAXAJUROS
- Descricao: Encargos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 155: VALORBASEDEPRECIACAOBEM
- Descricao: Valor Base de Depreciação do Bem
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 156: IDMOVSOLICITACAOMNT
- Descricao: Identificador SA/SC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [010] Objeto TITMMOVRATCCU
- Quantidade de campos: 15
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODCCUSTO
- Descricao: Centro de Custo
- Tamanho: 25
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NOME
- Descricao: Nome Centro de Custo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: PERCENTUAL
- Descricao: Percentual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: HISTORICO
- Descricao: Histórico
- Tamanho: 255
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: IDPRJ
- Descricao: Projeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: IDTRF
- Descricao: Tarefa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: CODTBGRUPOORC
- Descricao: Cód. Grupo Orçamentário
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: IDMOVRATCCU
- Descricao: Identificador do Rateio por Centro de Custo
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: CODPRJ
- Descricao: Projeto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: CODTRF
- Descricao: Tarefa
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: QUANTIDADE
- Descricao: QUANTIDADE
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATCCU no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [011] Objeto TITMMOVRATDEP
- Quantidade de campos: 8
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODDEPARTAMENTO
- Descricao: Departamento
- Tamanho: 25
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: NOME
- Descricao: Nome Departamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: PERCENTUAL
- Descricao: Percentual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRATDEP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [012] Objeto TITMMOVGRD
- Quantidade de campos: 10
- Campos marcados como obrigatorios: 6
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDPRD
- Descricao: Produto
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODITMGRD
- Descricao: Código Item da Grade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CODGRD
- Descricao: Código da grade no item de inventário
- Tamanho: 20
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: NSEQITMGRD
- Descricao: Código da Grade
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: QUANTIDADE
- Descricao: Quantidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: QUANTIDADEARECEBER
- Descricao: Quantidade a Receber
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: QUANTIDADESEPARADA
- Descricao: Quantidade separada do lote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [013] Objeto TITMMOVBEM
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVBEM no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVBEM no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVBEM no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODBEM
- Descricao: Código do bem associado
- Tamanho: 25
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVBEM no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODLOCAL
- Descricao: Código da Localização do Bem
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVBEM no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: IDPATRIMONIO
- Descricao: Identificador do Patrimônio
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVBEM no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [014] Objeto TITMLOTEPRD
- Quantidade de campos: 8
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDLOTE
- Descricao: Ident. do Lote no item de inventário
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NUMLOTE
- Descricao: Nº Lote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: QUANTIDADE2
- Descricao: Quantidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: QUANTIDADESEPARADA
- Descricao: Quantidade separada do lote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: QUANTIDADEARECEBER
- Descricao: Quantidade a Receber
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [015] Objeto TITMNUMSERIEPRD
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDPRD
- Descricao: Produto
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NUMSERIE
- Descricao: Número de série
- Tamanho: 30
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: PENDENTE
- Descricao: Número de série pendente no item
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [016] Objeto TMOVCOMPL
- Quantidade de campos: 10
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: VENCIMEN
- Descricao: VENCIMEN
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: VENC
- Descricao: VENC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: MOV1
- Descricao: MOV1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: MOV2
- Descricao: MOV2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [017] Objeto TMovCont
- Quantidade de campos: 16
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CodColigada
- Descricao: CodColigada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IdMovCont
- Descricao: IdMovCont
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IdMov
- Descricao: IdMov
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: Tipo
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CodColConta
- Descricao: CodColConta
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CodConta
- Descricao: CodConta
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: Valor
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: CodFilial
- Descricao: CodFilial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CodHistP
- Descricao: CodHistP
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: CodDepartamento
- Descricao: CodDepartamento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: CodLote
- Descricao: CodLote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: CodCcusto
- Descricao: CodCcusto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: ComplHistorico
- Descricao: ComplHistorico
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: LctRef
- Descricao: LctRef
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: LctRefInt
- Descricao: LctRefInt
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: Ativo
- Descricao: Ativo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovCont no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [018] Objeto TMovRat
- Quantidade de campos: 12
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CodColigada
- Descricao: CodColigada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IdMovCont
- Descricao: IdMovCont
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IdMov
- Descricao: IdMov
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: Tipo
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CodColConta
- Descricao: CodColConta
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CodConta
- Descricao: CodConta
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CodColContaGer
- Descricao: CodColContaGer
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: CodContaGer
- Descricao: CodContaGer
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: Valor
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: CodLote
- Descricao: CodLote
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: LctRef
- Descricao: LctRef
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: LctRefInt
- Descricao: LctRefInt
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMovRat no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [019] Objeto TITMMOVCOMPL
- Quantidade de campos: 11
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: VENCIMENTO
- Descricao: VENCIMENTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: PROD
- Descricao: PROD
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: PROD2
- Descricao: PROD2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODIGOCOMPLOPERACAO
- Descricao: CODIGOCOMPLOPERACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVCOMPL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [020] Objeto TITMMOVRELAC
- Quantidade de campos: 8
- Campos marcados como obrigatorios: 6
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: NSEQITMMOVORIGEM
- Descricao: NSEQITMMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOVDESTINO
- Descricao: NSEQITMMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: QUANTIDADE
- Descricao: QUANTIDADE
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: CODUND
- Descricao: CODUND
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [021] Objeto TTRBITMAGRUPADO
- Quantidade de campos: 11
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDAGRUPAMENTO
- Descricao: IDAGRUPAMENTO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODTRB
- Descricao: CODTRB
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: IDNAT
- Descricao: IDNAT
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: ALIQUOTA
- Descricao: ALIQUOTA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: FATORREDUCAO
- Descricao: FATORREDUCAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: FATORSUBST
- Descricao: FATORSUBST
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: PERCDIFERIMENTOPARCIALICMS
- Descricao: PERCDIFERIMENTOPARCIALICMS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: BASECALCULO
- Descricao: BASECALCULO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: VALOR
- Descricao: VALOR
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMAGRUPADO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [022] Objeto TMOVNORMA
- Quantidade de campos: 3
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVNORMA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNORMA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDNORMAREFERENCIADA
- Descricao: IDNORMAREFERENCIADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNORMA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [023] Objeto TCOMPONENTECARGA
- Quantidade de campos: 7
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODETDPLACA
- Descricao: Estado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: PLACA
- Descricao: Placa do Veículo
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NUMEROCARGA
- Descricao: Numeração da Mercadoria
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: PESOBRUTO
- Descricao: Peso Bruto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: PESOLIQUIDO
- Descricao: Peso Líquido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCOMPONENTECARGA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [024] Objeto TMOVTRANSP
- Quantidade de campos: 68
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 2
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODETDENTREGA
- Descricao: Estado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODMUNICIPIOENTREGA
- Descricao: Município
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODETDCOLETA
- Descricao: Estado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CODMUNICIPIOCOLETA
- Descricao: Município
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: TIPOREMETENTE
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: REMETENTECODCOLCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: REMETENTECODCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: REMETENTEFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: TIPODESTINATARIO
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: DESTINATARIOCODCOLCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: DESTINATARIOCODCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: DESTINATARIOFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: CODTRAREDESPACHO
- Descricao: Transportadora
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: CNPJCPFCOLETA
- Descricao: CNPJ / CPF
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: INSCRESTCOLETA
- Descricao: Inscrição Estadual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: INSCRMUNCOLETA
- Descricao: Inscrição Municipal
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: CNPJCPFENTREGA
- Descricao: CNPJ / CPF
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: INSCRESTENTREGA
- Descricao: Inscrição Estadual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: INSCRMUNENTREGA
- Descricao: Inscrição Municipal
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: TIPOFRETEREDESPACHO
- Descricao: Frete
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: RUACOLETA
- Descricao: Endereço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: NUMEROCOLETA
- Descricao: Número
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: COMPLCOLETA
- Descricao: Complemento
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: BAIRROCOLETA
- Descricao: Bairro
- Tamanho: 80
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: RUAENTREGA
- Descricao: Endereço
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: NUMEROENTREGA
- Descricao: Número
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: COMPLENTREGA
- Descricao: Complemento
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: BAIRROENTREGA
- Descricao: Bairro
- Tamanho: 80
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: NOMECOLETA
- Descricao: Nome/Razão Social
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: NOMEENTREGA
- Descricao: Nome/Razão Social
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: RETIRAMERCADORIA
- Descricao: Recebedor retira a mercadoria no aeroporto, filial, porto ou estação de destino
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: TIPOCTE
- Descricao: Tipo CT-e
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: TIPOSERVICOCTE
- Descricao: Tipo do Serviço CT-e
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: TOMADORTIPO
- Descricao: Tipo Tomador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: TOMADORCODCOLCFO
- Descricao: Coligada do Tomador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: TOMADORCODCFO
- Descricao: Cliente / Fornecedor Tomador
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: TIPOEMITENTEMDFE
- Descricao: Tipo de Emitente do MDF-e
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: TIPOEXPEDIDOR
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 041: EXPEDCODCOLCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 042: EXPEDCODCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 043: EXPEDFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 044: TIPORECEBEDOR
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 045: RECEBCODCOLCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 046: RECEBCODCFO
- Descricao: Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 047: RECEBFILIAL
- Descricao: Filial
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 048: CIOT
- Descricao: CIOT
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 049: LOTACAO
- Descricao: Lotação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 050: TIPOTRANSPORTADORMDFE
- Descricao: Tipo do Transportador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 051: OBSGLOBALIZADO
- Descricao: Observação do CT-e Globalizado
- Tamanho: 256
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 052: TIPOBPE
- Descricao: Tipo BP-e
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 053: INDICADORNEGOCIAVEL
- Descricao: Indicador Negociável
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 054: TIPOFRETAMENTOPESSOAS
- Descricao: Tipo do Fretamento de Pessoas
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 055: DATAHORAVIAGEM
- Descricao: Data e hora da viagem
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 056: DATADESACORDO
- Descricao: Data do Desacordo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 057: CEPENTREGA
- Descricao: Cep
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 058: CODPAISENTREGA
- Descricao: País
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 059: TELEFONEENTREGA
- Descricao: Telefone
- Tamanho: 14
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 060: EMAILENTREGA
- Descricao: Email
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 061: CODCOLCFOENTREGA
- Descricao: Coligada do Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 062: CODCFOENTREGA
- Descricao: Cliente / Fornecedor
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 063: CEPCOLETA
- Descricao: Cep
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 064: CODPAISCOLETA
- Descricao: País
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 065: TELEFONECOLETA
- Descricao: Telefone
- Tamanho: 14
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 066: EMAILCOLETA
- Descricao: Email
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 067: CODCOLCFOCOLETA
- Descricao: Coligada do Cliente/Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 068: CODCFOCOLETA
- Descricao: Cliente / Fornecedor
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVTRANSP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [025] Objeto TCTRC
- Quantidade de campos: 47
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NUMEROSEQNOTA
- Descricao: Numero sequencial Nota Fiscal
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: CODTDO
- Descricao: Tipo de Documento
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: SERIEDOC
- Descricao: Série
- Tamanho: 4
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: SUBSERIEDOC
- Descricao: Sub Série
- Tamanho: 3
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMERODOC
- Descricao: Número Nota
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: VALORTOTAL
- Descricao: Valor Total
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: IDMOVCOBERTO
- Descricao: Identificador do mov. coberto no CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: CNPJ
- Descricao: CNPJ
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: INSCESTADUAL
- Descricao: Inscrição Estadual
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: UF
- Descricao: UF
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: CODMUNICIPIO
- Descricao: Município
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: NOME
- Descricao: Nome
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: VALORMERCADORIAS
- Descricao: Valor Mercadorias
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: NATUREZAVOLUMES
- Descricao: Natureza dos Volumes
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: QUANTIDADE
- Descricao: Quantidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: VOLUMES
- Descricao: Volume Transportado
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: MARCA
- Descricao: Marca da Mercadoria Transportada
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: ESPECIE
- Descricao: Espécie
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: NUMEROCARGA
- Descricao: Numeração da Mercadoria
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: PESOBRUTO
- Descricao: Peso Bruto
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: PESOLIQUIDO
- Descricao: Peso Líquido
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: CODNAT
- Descricao: CFOP Predominante
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: VLRBCICMS
- Descricao: Valor Bc ICMS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: VLRTOTICMS
- Descricao: Valor Total ICMS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: VLRBCICMSST
- Descricao: Valor Bc ICMS ST
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: VLRTOTICMSST
- Descricao: Valor Total ICMS ST
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: VLRTOTPRODUTOS
- Descricao: Valor Total Produtos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: CHAVEACESSONFE
- Descricao: Chave de Acesso
- Tamanho: 44
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: TIPOVINCULODOC
- Descricao: Tipo Vínculo Documento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: CODETDCOLETA
- Descricao: UF
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: CNPJEMITENTE
- Descricao: CNPJ do Emitente
- Tamanho: 14
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: CODETDENTREGA
- Descricao: UF
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: CODMUNICIPIOCOLETA
- Descricao: Município
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: CODMUNICIPIOENTREGA
- Descricao: Município
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: DTEMISSAOSEGCODBARRA
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: VTPRESTSEGCODBARRA
- Descricao: Valor Total
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: SITTRIBUTARIASEGCODBARRA
- Descricao: Situacao Tributaria
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 041: SEGCODBARRASNFE
- Descricao: Segundo Código de Barras da NF-e(Contingência)
- Tamanho: 36
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 042: CNPJCIOTCTE
- Descricao: CPF/CNPJ do Contratante
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 043: CIOTCTE
- Descricao: CIOT
- Tamanho: 12
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 044: IDCONTAINER
- Descricao: Identificador do Container
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 045: NOMECONT
- Descricao: Nome do Contratante
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 046: TIPORESPONSAVEL
- Descricao: Tipo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 047: ESTRANGEIRO
- Descricao: Estrangeiro?
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [026] Objeto TCTRCMOV
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTRCMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: VALORNOTAS
- Descricao: Valor das Notas do CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: VALORRATEADO
- Descricao: Valores Rateados do CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: QUANTIDADENOTAS
- Descricao: Quantidade de Notas do CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: QUANTIDADERATEADAS
- Descricao: Quantidades Rateadas do CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [027] Objeto TCTRCENTRADA
- Quantidade de campos: 11
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOVNF
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVCTRC
- Descricao: ID do CTRC
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CNPJ
- Descricao: CNPJ
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: INSCESTADUAL
- Descricao: Inscrição Estadual
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: UF
- Descricao: UF
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODMUNICIPIO
- Descricao: Município
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NOME
- Descricao: Nome
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: NUMEROMOV
- Descricao: Nº do Movimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: NOMEFANTASIA
- Descricao: Cliente / Fornecedor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: VALORCTRCARATEAR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTRCENTRADA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [028] Objeto TNFTERCEIROS
- Quantidade de campos: 14
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDNFTERCEIROS
- Descricao: Identificador da NF de Terceiros
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODTDO
- Descricao: Tipo de Documento
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: DOCINI
- Descricao: Nº do Documento
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: SERIEDOC
- Descricao: Série
- Tamanho: 4
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: SUBSERIE
- Descricao: Sub Série
- Tamanho: 3
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: CNPJCPFCEI
- Descricao: CNPJ/CPF/CEI
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: UF
- Descricao: UF
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: MOTIVOREF
- Descricao: Motivo de Referência
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: OBSERVACAO
- Descricao: Observação
- Tamanho: 150
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: VALORTOTAL
- Descricao: Valor Total
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: INSCRESTADUAL
- Descricao: Inscrição Estadual
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TNFTERCEIROS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [029] Objeto TTRBITMMOV
- Quantidade de campos: 28
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODTRB
- Descricao: Código do Tributo
- Tamanho: 10
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: BASEDECALCULO
- Descricao: Base de Cálculo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: ALIQUOTA
- Descricao: Alíquota
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: VALOR
- Descricao: Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: FATORREDUCAO
- Descricao: Fator de Redução
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: FATORSUBSTTRIB
- Descricao: Fator Substituição Tributária
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: BASEDECALCULOCALCULADA
- Descricao: Base de Cálculo Obtida pela Fórmula
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: EDITADO
- Descricao: Manter Valor
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: VLRISENTO
- Descricao: Isento Outros Tributos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: CODRETENCAO
- Descricao: Código de retenção do imposto
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: TIPORECOLHIMENTO
- Descricao: Tipo de Recolhimento
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: CODTRBBASE
- Descricao: Tributo Base
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: PERCDIFERIMENTOPARCIALICMS
- Descricao: Percentual Diferimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: SITTRIBUTARIA
- Descricao: Situacao Tributaria
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: MODALIDADEBC
- Descricao: Modalidade Base Cálculo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: ALIQUOTAPORVALOR
- Descricao: Alíquota por Valor (AD REM)
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: CODUNDREFERENCIA
- Descricao: CODUNDREFERENCIA
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: MOTDESICMS
- Descricao: Motivo Desoneração ICMS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: NATOPERNFSE
- Descricao: Natureza de Operação do ISS
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: CODENQIPI
- Descricao: Código de Enquadramento IPI
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: VALORICMSDESONERADO
- Descricao: Valor do ICMS Desonerado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: CODCONTRIBSOCIAL
- Descricao: Código da Contribuição Social
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: VALORRETSUSPJUDIC
- Descricao: Valor de Retenção Suspensa Judicialmente
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: VALORRETSUBCONTRATACAO
- Descricao: Valor Retido Subcontratação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: BASEICMSDESONERADO
- Descricao: Base de Cálculo ICMS Desonerado
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TTRBITMMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [030] Objeto DLAFMOVPROCESSOJUD
- Quantidade de campos: 4
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto DLAFMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: SEQUENCIAL
- Descricao: SEQUENCIAL
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto DLAFMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDPROCESSOREFERENCIADO
- Descricao: IDPROCESSOREFERENCIADO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto DLAFMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto DLAFMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [031] Objeto TMOVRELAC
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 0
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: TIPORELAC
- Descricao: TIPORELAC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: IDPROCESSO
- Descricao: IDPROCESSO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int64
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [032] Objeto TITMLOTEPRDRELAC
- Quantidade de campos: 9
- Campos marcados como obrigatorios: 8
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOVORIGEM
- Descricao: NSEQITMMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: NSEQITMMOVDESTINO
- Descricao: NSEQITMMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: IDLOTEORIGEM
- Descricao: IDLOTEORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: IDLOTEDESTINO
- Descricao: IDLOTEDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: QUANTIDADE
- Descricao: QUANTIDADE
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMLOTEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [033] Objeto TITMNUMSERIEPRDRELAC
- Quantidade de campos: 10
- Campos marcados como obrigatorios: 8
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOVORIGEM
- Descricao: NSEQITMMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: NSEQITMMOVDESTINO
- Descricao: NSEQITMMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: IDPRDORIGEM
- Descricao: IDPRDORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: IDPRDDESTINO
- Descricao: IDPRDDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: NUMSERIEORIGEM
- Descricao: NUMSERIEORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: NUMSERIEDESTINO
- Descricao: NUMSERIEDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMNUMSERIEPRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [034] Objeto TITMMOVGRDRELAC
- Quantidade de campos: 13
- Campos marcados como obrigatorios: 0
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOVORIGEM
- Descricao: NSEQITMMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: NSEQITMMOVDESTINO
- Descricao: NSEQITMMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: IDPRDORIGEM
- Descricao: IDPRDORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: IDPRDDESTINO
- Descricao: IDPRDDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CODGRDORIGEM
- Descricao: CODGRDORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: CODGRDDESTINO
- Descricao: CODGRDDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: NSEQITMGRDORIGEM
- Descricao: NSEQITMGRDORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: NSEQITMGRDDESTINO
- Descricao: NSEQITMGRDDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: QUANTIDADE
- Descricao: QUANTIDADE
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVGRDRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [035] Objeto TMOVRELACEXP
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 0
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: TIPORELAC
- Descricao: TIPORELAC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: IDPROCESSO
- Descricao: IDPROCESSO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int64
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [036] Objeto TITMMOVRELACEXP
- Quantidade de campos: 8
- Campos marcados como obrigatorios: 6
- Campos com valor padrao visivel: 0
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: IDMOVORIGEM
- Descricao: IDMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: NSEQITMMOVORIGEM
- Descricao: NSEQITMMOVORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODCOLORIGEM
- Descricao: CODCOLORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOVDESTINO
- Descricao: IDMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOVDESTINO
- Descricao: NSEQITMMOVDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CODCOLDESTINO
- Descricao: CODCOLDESTINO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: QUANTIDADE
- Descricao: QUANTIDADE
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMEROMOV
- Descricao: NUMEROMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVRELACEXP no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [037] Objeto OFORDEMSERVICO
- Quantidade de campos: 18
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: CODPROCREF
- Descricao: CODPROCREF
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDTIPOOBJ
- Descricao: IDTIPOOBJ
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: ORDSERVTERC
- Descricao: ORDSERVTERC
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: EMAILENVIADO
- Descricao: EMAILENVIADO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: DATAENVIO
- Descricao: DATAENVIO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: PROCESSAMENTO
- Descricao: PROCESSAMENTO
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: IDCNTOF
- Descricao: IDCNTOF
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: IDSUBSTATUS
- Descricao: IDSUBSTATUS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: DATAPROGRAMACAO
- Descricao: DATAPROGRAMACAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: REFORMA
- Descricao: REFORMA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: PLANO
- Descricao: PLANO
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: IDOBJOF
- Descricao: IDOBJOF
- Tamanho: 20
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: IDHISTINDICADOR
- Descricao: IDHISTINDICADOR
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: CODMOTIVOCANCOS
- Descricao: CODMOTIVOCANCOS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: CODCOLCHAPARESP
- Descricao: CODCOLCHAPARESP
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: CHAPARESP
- Descricao: CHAPARESP
- Tamanho: 16
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [038] Objeto OFITEMORDEMSERVICO
- Quantidade de campos: 17
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 2
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: NSEQITMMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODPESSOA
- Descricao: CODPESSOA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: COBRATEMPOEFETIVO
- Descricao: COBRATEMPOEFETIVO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: IDMEMO
- Descricao: IDMEMO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: PROCESSAMENTO
- Descricao: PROCESSAMENTO
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: EMPENHO
- Descricao: EMPENHO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: TEMPO
- Descricao: TEMPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: VIDAUTILITMDIA
- Descricao: VIDAUTILITMDIA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: VIDAUTILITMINDICADORUSO1
- Descricao: VIDAUTILITMINDICADORUSO1
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: VIDAUTILITMINDICADORUSO2
- Descricao: VIDAUTILITMINDICADORUSO2
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: VIDAUTILITMINDICADORUSO3
- Descricao: VIDAUTILITMINDICADORUSO3
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: VIDAUTILITMINDICADORUSO4
- Descricao: VIDAUTILITMINDICADORUSO4
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: VIDAUTILITMINDICADORUSO5
- Descricao: VIDAUTILITMINDICADORUSO5
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: CODUSUARIO
- Descricao: CODUSUARIO
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: mestre
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: VALMEMO
- Descricao: VALMEMO
- Tamanho: 2147483647
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto OFITEMORDEMSERVICO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [039] Objeto TITMMOVFISCAL
- Quantidade de campos: 40
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: NROADICAO
- Descricao: Número da Adição
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NROITEM
- Descricao: Número do Item na Adição
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: VALORDESC
- Descricao: Valor do Desconto da DI
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: VALORDESPADU
- Descricao: Despesas Aduaneiras
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMMEMOEXP
- Descricao: Número do Memorando de Exportação
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: INFADICIONAISNFE
- Descricao: Informações Adicionais NF-e
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: SITUACAOMERCADORIA
- Descricao: SITUACAOMERCADORIA
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: CONHECIMENTOEMBARQUE
- Descricao: Conhecimento de Embarque
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: QTDECONTRATADA
- Descricao: Qtd Contratada Fornec./Serv.
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: CODETDHABILITACAOTEL
- Descricao: UF Habilitação Terminal Telefônico
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: TIPORECEITA
- Descricao: Tipo Receita
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: CODCOLFCFOTERCEIRO
- Descricao: Coligada do Terceiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: CODCFOTERCEIRO
- Descricao: Código do Terceiro
- Tamanho: 25
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 017: CODMUNICIPIOCOLETA
- Descricao: Município de Coleta
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 018: CODETDCOLETA
- Descricao: UF do Município de Coleta
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 019: CODMUNICIPIOENTREGA
- Descricao: Município de Entrega
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 020: CODETDENTREGA
- Descricao: UF do Município de Entrega
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 021: PLACA
- Descricao: Placa do Veículo
- Tamanho: 10
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 022: CODETDPLACA
- Descricao: Estado
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 023: INDNATFRETE
- Descricao: Natureza do frete
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 024: NATREC
- Descricao: Natureza da receita
- Tamanho: 3
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 025: NATBCCRED
- Descricao: Código da Base de Crédito
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 026: VLRTOTTRIB
- Descricao: Valor Total dos Tributos
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 027: TIPOCREDITO
- Descricao: Tipo do Crédito
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 028: NUMERORECOPI
- Descricao: Número do RECOPI
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 029: VALORIBPTFEDERAL
- Descricao: Valor total IBPT dos tributos Federais
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 030: VALORIBPTESTADUAL
- Descricao: Valor total IBPT dos tributos Estaduais
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 031: VALORIBPTMUNICIPAL
- Descricao: Valor total IBPT dos tributos Municipais
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 032: CHAVEIBPT
- Descricao: Chave do Cliente informada pela IBPTax
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 033: CODFILIALTERCEIRO
- Descricao: Filial do Terceiro
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 034: NUMITEMPEDIDO
- Descricao: Item do Pedido de Compra
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 035: NUMPEDIDO
- Descricao: Número do Pedido de Compra
- Tamanho: 15
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 036: TPMOVCIAP
- Descricao: Tipo de Movimentação do Bem ou Componente
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 037: AQUISICAOPAA
- Descricao: Aquisição PAA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 038: TIPOREPASSEREINF
- Descricao: Tipo Repasse EFD Reinf
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 039: CODCOLCONTACONTABILSPED
- Descricao: CODCOLCONTACONTABILSPED
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 040: CODCONTACONTABILSPED
- Descricao: Conta Contábil para o Sped
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVFISCAL no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [040] Objeto TVINCULOMOV
- Quantidade de campos: 5
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TVINCULOMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCULOMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: VALORMOVIMENTO
- Descricao: VALORMOVIMENTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCULOMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: VALORVINCULADO
- Descricao: VALORVINCULADO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCULOMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: TIPOVINCULO
- Descricao: TIPOVINCULO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCULOMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [041] Objeto TVINCMOVRELAC
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TVINCMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOVORIGEM
- Descricao: Ident. Movimento de Origem
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOVDESTINO
- Descricao: Ident. Movimento de Destino
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: VALORVINCULADO
- Descricao: Valor Vinculado
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: STATUS
- Descricao: Status
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TVINCMOVRELAC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [042] Objeto TRESERVAMOV
- Quantidade de campos: 8
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDRESERVA
- Descricao: IDRESERVA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDPRD
- Descricao: IDPRD
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NSEQITMMOV
- Descricao: NSEQITMMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: QTDE
- Descricao: QTDE
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: STATUS
- Descricao: STATUS
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: TIPO
- Descricao: TIPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TRESERVAMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [043] Objeto TITMMOVENQUADRAMENTOS
- Quantidade de campos: 5
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVENQUADRAMENTOS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVENQUADRAMENTOS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVENQUADRAMENTOS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDENQUADRAMENTO
- Descricao: Id. Enquadramento
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVENQUADRAMENTOS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NUMERORC
- Descricao: Número RC
- Tamanho: 12
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVENQUADRAMENTOS no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [044] Objeto TITMVINCEXPORTACAO
- Quantidade de campos: 11
- Campos marcados como obrigatorios: 6
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada do Movimento de Destino
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Ident. Movimento de Destino
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQITMMOV
- Descricao: Num Seq Interno do Item de Mov Destino
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODCOLORIGEM
- Descricao: Coligada do Movimento de Origem
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: IDMOVORIGEM
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: NSEQITMMOVORIGEM
- Descricao: Nº Sequencial Item
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: QUANTIDADE
- Descricao: Quantidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMMEMOEXP
- Descricao: Número do Memorando de Exportação
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CODUND
- Descricao: Unidade
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: NUMEROMOV
- Descricao: Nº do Movimento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: TIPOMOVIMENTO
- Descricao: Tipo de Operação
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMVINCEXPORTACAO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [045] Objeto TMDFECARGAPERIGOSA
- Quantidade de campos: 10
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 2
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NUMEROSEQNOTA
- Descricao: Numero sequencial Nota Fiscal
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDCARGAPERIGOSA
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: -1
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NUMEROONU
- Descricao: Número ONU
- Tamanho: 4
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: XNOMEAE
- Descricao: Nome para embarque do produto
- Tamanho: 150
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: XCLARISCO
- Descricao: Classe e risco secundário
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: GREMB
- Descricao: Grupo de Embalagem
- Tamanho: 6
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: QTOTPROD
- Descricao: Quantidade total por produto
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: QVOLTIPO
- Descricao: Quantidade e Tipo de volumes
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMDFECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [046] Objeto TMOVINTEGRACAOEAI
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVINTEGRACAOEAI no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVINTEGRACAOEAI no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: STATUSINTEGRACAO
- Descricao: STATUSINTEGRACAO
- Tamanho: 5
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVINTEGRACAOEAI no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CONTEXTOGATILHO
- Descricao: CONTEXTOGATILHO
- Tamanho: 100
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVINTEGRACAOEAI no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: APROPRIARMOVIMENTOEM
- Descricao: APROPRIARMOVIMENTOEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVINTEGRACAOEAI no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: GLOBALID
- Descricao: GLOBALID
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVINTEGRACAOEAI no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [047] Objeto TAUTDOC
- Quantidade de campos: 4
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TAUTDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TAUTDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQRESP
- Descricao: Sequencial
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TAUTDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODRESP
- Descricao: CNPJ/CPF do Autorizado
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TAUTDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [048] Objeto TITMMOVPROCESSOJUD
- Quantidade de campos: 6
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: IDPROCESSOREFERENCIADO
- Descricao: Identificador do Processo
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: NSEQITMMOV
- Descricao: Nº Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NUMEROPROCESSO
- Descricao: Número do Processo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: DESCRICAOPROCESSO
- Descricao: Descrição do Processo
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVPROCESSOJUD no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [049] Objeto TCHAVEACESSOREF
- Quantidade de campos: 11
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDREF
- Descricao: IDREF
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CODCOLIGADAREF
- Descricao: Coligada
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: IDMOVREF
- Descricao: Identificador
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CHAVEACESSO
- Descricao: Chave de Acesso
- Tamanho: 44
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODTMV
- Descricao: Tipo do Movtº
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMEROMOV
- Descricao: Nº do Movimento
- Tamanho: 35
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: SERIE
- Descricao: Série
- Tamanho: 8
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: DATAEMISSAO
- Descricao: Data Emissão
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: VALORLIQUIDO
- Descricao: Valor do Documento
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCHAVEACESSOREF no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [050] Objeto TMOVNFECAMPOSLIVRES
- Quantidade de campos: 9
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDCAMPOLIVRE
- Descricao: IDCAMPOLIVRE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDITEM
- Descricao: IDITEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: IDCAMPO
- Descricao: IDCAMPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: VALORTEXTO
- Descricao: VALORTEXTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: TIPO
- Descricao: TIPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: ORIGEM
- Descricao: ORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: VALORCAMPO
- Descricao: VALORCAMPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [051] Objeto TITMMOVNFECAMPOSLIVRES
- Quantidade de campos: 9
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDCAMPOLIVRE
- Descricao: IDCAMPOLIVRE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: IDITEM
- Descricao: IDITEM
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: IDCAMPO
- Descricao: IDCAMPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: VALORTEXTO
- Descricao: VALORTEXTO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: TIPO
- Descricao: TIPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: ORIGEM
- Descricao: ORIGEM
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: VALORCAMPO
- Descricao: VALORCAMPO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TITMMOVNFECAMPOSLIVRES no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [052] Objeto TMOVVALIDATE
- Quantidade de campos: 10
- Campos marcados como obrigatorios: 2
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: DESCONTOMAXIMO
- Descricao: DESCONTOMAXIMO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: EVENTOCONTABIL
- Descricao: EVENTOCONTABIL
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: VIDAUTILORDEMSERVICO
- Descricao: VIDAUTILORDEMSERVICO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: CLIFORLIMITECREDITO
- Descricao: CLIFORLIMITECREDITO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CLIFORLANATRASO
- Descricao: CLIFORLANATRASO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: CLIFORCADASTROVENCIDO
- Descricao: CLIFORCADASTROVENCIDO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: CLIFORBLOQUEADO
- Descricao: CLIFORBLOQUEADO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: ORCAMENTOEXCEDIDO
- Descricao: ORCAMENTOEXCEDIDO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TMOVVALIDATE no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [053] Objeto TCTEMOV
- Quantidade de campos: 8
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDCTE
- Descricao: IDCTE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: TIPO
- Descricao: TIPO
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOV no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [054] Objeto TCTEMOTORISTA
- Quantidade de campos: 10
- Campos marcados como obrigatorios: 5
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQMOTORISTA
- Descricao: NSEQMOTORISTA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CPF
- Descricao: CPF
- Tamanho: 11
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: NOME
- Descricao: NOME
- Tamanho: 60
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: IDCTE
- Descricao: IDCTE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEMOTORISTA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [055] Objeto TCTESEGURO
- Quantidade de campos: 16
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQSEGURO
- Descricao: NSEQSEGURO
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: RESPONSAVEL
- Descricao: RESPONSAVEL
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: SEGURADORA
- Descricao: SEGURADORA
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: APOLICE
- Descricao: APOLICE
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: VALORMERCADORIA
- Descricao: VALORMERCADORIA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: AVERBACAO
- Descricao: AVERBACAO
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: IDCTE
- Descricao: IDCTE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: CODCOLSEGURADORA
- Descricao: CODCOLSEGURADORA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int16
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: IDSEGURADORA
- Descricao: IDSEGURADORA
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: CNPJRESP
- Descricao: CNPJRESP
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTESEGURO no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [056] Objeto TCTEEMISSOR
- Quantidade de campos: 12
- Campos marcados como obrigatorios: 3
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQEMISSOR
- Descricao: NSEQEMISSOR
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: CNPJCPF
- Descricao: CNPJCPF
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: INSCRESTADUAL
- Descricao: INSCRESTADUAL
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: NOME
- Descricao: NOME
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: CODETD
- Descricao: CODETD
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: IDCTE
- Descricao: IDCTE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEEMISSOR no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [057] Objeto TCTEDOC
- Quantidade de campos: 15
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDMOV
- Descricao: IDMOV
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: NSEQEMISSOR
- Descricao: NSEQEMISSOR
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: NSEQDOC
- Descricao: NSEQDOC
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: TIPODOCORIGINARIO
- Descricao: TIPODOCORIGINARIO
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: SERIE
- Descricao: SERIE
- Tamanho: 3
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: SUBSERIE
- Descricao: SUBSERIE
- Tamanho: 2
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: NUMERODOCFISCAL
- Descricao: NUMERODOCFISCAL
- Tamanho: 30
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: DATAEMISSAO
- Descricao: DATAEMISSAO
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: CHAVEACESSONFE
- Descricao: CHAVEACESSONFE
- Tamanho: 44
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: IDCTE
- Descricao: IDCTE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTEDOC no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

### [058] Objeto TCTECARGAPERIGOSA
- Quantidade de campos: 16
- Campos marcados como obrigatorios: 4
- Campos com valor padrao visivel: 1
- Leitura segura: use este objeto apenas como parte do envelope documentado de MOVMOVIMENTOTBCDATA; a pagina nao garante regra de obrigatoriedade condicional por cenario.

#### Campo 001: CODCOLIGADA
- Descricao: CODCOLIGADA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int16
- Valor padrao observado: 1
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 002: IDCTE
- Descricao: IDCTE
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 003: IDCARGAPERIGOSA
- Descricao: IDCARGAPERIGOSA
- Tamanho: -1
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.Int32
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 004: NUMEROONU
- Descricao: NUMEROONU
- Tamanho: 4
- Obrigatorio na tabela legada: true
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 005: XNOMEAE
- Descricao: XNOMEAE
- Tamanho: 150
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 006: XCLARISCO
- Descricao: XCLARISCO
- Tamanho: 40
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 007: GREMB
- Descricao: GREMB
- Tamanho: 6
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 008: QTOTEMB
- Descricao: QTOTEMB
- Tamanho: 20
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 009: QVOLTIPO
- Descricao: QVOLTIPO
- Tamanho: 60
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 010: PONTOFULGOR
- Descricao: PONTOFULGOR
- Tamanho: 6
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 011: RECCREATEDBY
- Descricao: RECCREATEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 012: RECCREATEDON
- Descricao: RECCREATEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 013: RECMODIFIEDBY
- Descricao: RECMODIFIEDBY
- Tamanho: 50
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 014: RECMODIFIEDON
- Descricao: RECMODIFIEDON
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.DateTime
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 015: QTOTPRODAP
- Descricao: QTOTPRODAP
- Tamanho: -1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.Decimal
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.

#### Campo 016: UNIAP
- Descricao: UNIAP
- Tamanho: 1
- Obrigatorio na tabela legada: false
- Tipo .NET observado: System.String
- Valor padrao observado: sem valor padrao visivel
- Interpretacao segura: este campo pertence ao objeto TCTECARGAPERIGOSA no schema publicado de MOVMOVIMENTOTBCDATA; use-o para leitura estrutural e nao como promessa funcional universal.
<!-- AUTO-GENERATED END: LEGACY-DETAIL -->
