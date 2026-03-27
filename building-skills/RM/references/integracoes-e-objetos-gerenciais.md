# Integrações e objetos gerenciais no RM Nucleus

Esta referência consolida apenas o que aparece em `totvs_rm_docs` sobre integração e automação no Nucleus. O foco é prático: **Fluig**, **TOTVS Colaboração**, **Fórmula Visual**, **IntelliTrace**, **execução de processos**, **Jobs** e **DataServer** como ponte para automação e troubleshooting.

## Como classificar a pergunta

Antes de responder, classifique o problema em uma destas frentes:

- **Integração com Fluig**
- **Integração com TOTVS Colaboração**
- **Fórmula Visual / Objetos Gerenciais**
- **Execução de processos e Jobs**
- **IntelliTrace / coleta para análise**
- **DataServer / XML de processo / WebService**

Essa separação importa porque, nas fontes, os sintomas podem ser parecidos, mas a causa costuma estar em pontos diferentes: parâmetro, identidade de usuário, host, alias, XML do processo ou Job.

## Integração com Fluig

Nas fontes, Fluig aparece principalmente em aprovações e workflow de movimentos e contratos.

### O que verificar primeiro

1. `Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Definições Gerais 3/3`
2. a etapa `Workflow Fluig` do tipo de movimento
3. sincronização de usuário entre RM e Fluig
4. autenticação/alias/host quando houver erro de serviço

### Campos e pontos recorrentes

- `Id da Empresa Centralizadora do Workflow do Fluig`
- `Usuário Padrão de Cancelamento`
- `Estados de Aprovação`
- `Id da Empresa do Fluig` nos parâmetros globais

As fontes usam esses pontos em cenários bem concretos:

- **Solicitação aprovada no Fluig não aprovada no RM**:
  revisar `Definições Gerais 3/3` e o valor de `Id da Empresa Centralizadora do Workflow do Fluig`
  depois revisar a etapa `Workflow Fluig` do tipo de movimento
  os `Estados de Aprovação` devem conter apenas estados que o RM deve considerar como aprovados
- **NOK Usuário Não Encontrado**:
  verificar `Id da Empresa Centralizadora do Workflow no Fluig`
  executar o processo de sincronização de usuários do Corpore com o GED
  nas fontes, `GUSUARIO.USERID` precisa ser igual à `MATRICULA` do Fluig, e o `E-MAIL` precisa coincidir entre as plataformas
- **Não foi possível cancelar Workflow Fluig para este movimento**:
  a documentação aponta o uso de um `Usuário Padrão de Cancelamento` em `Definições Gerais 3/3`
  o motivo funcional é claro: no Fluig, cancelamento depende do criador do processo ou de um administrador/gestor do processo

### Quando o problema é técnico, não funcional

Há um artigo específico para `Could not send Message` ao criar movimento integrado com Fluig. O troubleshooting documentado é:

- revisar o arquivo `dsGetFormulaWf.js`
- confirmar o usuário e a senha usados no `getBasicAuthenticatedClient`
- validar se o `Alias` do `Gerenciamento do Alias` bate com o valor de `DefaultDB` em:
  `RM.Host.exe.config`
  `RM.Host.Service.exe.config`
  `RM.Host.JobRunner.exe.config`

Isso é importante porque, nas fontes, esse erro não é tratado como simples falha de parametrização do tipo de movimento.

### Limite explícito nas fontes

Para alterar o **valor mínimo da aprovação automática** da solicitação de compra integrada ao Fluig, a documentação fala em editar `WorkflowNucleus.beforeStateEntry.js` no projeto padrão importado no Eclipse. Ou seja: a fonte não apresenta esse ajuste como um parâmetro do RM.

## Integração com TOTVS Colaboração

Nas fontes, TOTVS Colaboração está fortemente associado a **importação de XML**, **monitor**, **jobs**, **status de arquivo** e **parâmetros de integração fiscal**.

### Menus que aparecem claramente

- `Integrações > Monitor de Arquivos TOTVS Colaboração`
- `Compras > TOTVS Colaboração - Cadastro XML`
- `Ambiente > Gerenciamento de Jobs`
- `Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > etapa Importação/Envio de Arquivo XML`
- `Parâmetros por Filial > Importação/Envio de Arquivo XML 1/2`
- `Parâmetros por Filial > Importação/Envio de Arquivo XML 2/2`

### Parâmetros recorrentes

- `Tipo Integração`
- `Realizar Importação de XML de NF-e e CT-e (sem integração com parceiros)`
- `Diretório Padrão para Importação dos Arquivos XML`
- `Ambiente TOTVS Colaboração`
- marcação dos tipos de documentos de recebimento, como `Recebimento NF-e` e `Recebimento CT-e`

### Fluxo operacional que as fontes sustentam

1. arquivos chegam ao diretório parametrizado, com subpastas `IN` e `RM`
2. o menu `Monitor de Arquivos TOTVS Colaboração` executa os Jobs
3. o Job **Importação de Arquivos – Totvs Colaboração** busca documentos da pasta `IN` e os distribui por coligada, sem validar
4. nesse ponto, o monitor mostra status `Pendente`
5. o Job **Serviço de Consulta de arquivo XML** valida o XML
6. se tudo estiver correto, o arquivo segue para `Compras > TOTVS Colaboração - Cadastro XML`
7. se houver problema, o status vai para `Inconsistente`, com log visível por duplo clique

### Status e leitura segura

As fontes diferenciam claramente:

- `Pendente`: pode ser etapa intermediária do monitor ou inclusão manual
- `Inconsistente`: XML não incluído por alguma inconsistência
- `Válido` ou `Validado`: XML apto para seguir o fluxo

Há um limite importante: a inclusão manual de XML na tela de cadastro não é recomendada para o processo 2.0. A documentação diz que isso deixa o XML com status `Pendente` e não o leva a `Validado`; a orientação é excluir o registro, recolocar o XML na pasta `IN` e executar os processos do monitor.

### Troubleshooting típico

As fontes repetem estes checks:

- ambiente em **três camadas**
- **Host** funcionando corretamente
- diretório compartilhado em rede com leitura e gravação
- caminho parametrizado como **caminho de rede**, não só local
- **não** informar o caminho já incluindo a pasta `IN`
- filial cadastrada e também parametrizada em `Parâmetros por Filial`

Um exemplo explícito: no erro `Não existem arquivos a serem importados`, a documentação manda verificar permissões de compartilhamento, caminho de rede e o erro de informar o parâmetro já apontando para `IN`.

Outro limite explícito:

- **NFS-e sem Neogrid** não está disponível nesse fluxo, porque a documentação diz que depende da tradução do XML pelo parceiro

## Fórmula Visual e objetos gerenciais

As fontes tratam Fórmula Visual como automação sobre comportamentos já existentes no sistema.

### Inclusão de movimento

Para inclusão via fórmula visual, a documentação pede três atividades em sequência:

1. `Inclusão Movimento`
2. `Inclusão Item Movimento`
3. `Salvar Movimento`

Campos obrigatórios que aparecem explicitamente:

- na inclusão do movimento:
  `CodColigada`
  `CodFilial`
  `CodLoc`
  `CodTMv`
  `CodUsuarioLogado`
  `IdMov`
- na inclusão do item:
  `IdPrd`
  `NSeqItmMov`
  `Quantidade`

Detalhe prático importante:

- `IdMov = -1` para gerar o identificador sequencial
- `CodLoc` só é obrigatório em cenários que usam produto e não trabalham com local único
- a execução da fórmula faz as mesmas consistências da inclusão manual
- essas atividades devem ser usadas quando a inclusão ocorre **fora da tela do movimento**

### Nomes de DataServer observados em artigos de Fórmula Visual

As fontes mostram que a forma de inclusão muda o nome do DataServer observado no contexto da automação:

- `MovMovimentoData`: inclusão manual pela tela
- `MovFaturamentoData`: processo `Faturar/Receber`
- `MovMovCopiaAPartirOutroMovimentoData`: cópia a partir de outro movimento
- `MovMovCopiaReferenciaData`: assistente de cópia por referência

Isso é útil quando a pergunta é “por que a fórmula não disparou”.

Limite importante:

- trate esses nomes como evidência observacional dos artigos de Fórmula Visual;
- não trate esta seção como documentação técnica completa desses DataServers;
- o único DataServer com referência legada detalhada neste pacote continua sendo `MOVMOVIMENTOTBCDATA`.

### Execução de processo por Fórmula Visual

O procedimento documentado é:

1. executar manualmente o processo desejado no sistema
2. ir em `Ambiente > Gerenciamento de Jobs`
3. identificar o Job gerado
4. usar as atividades `Preparar Execução do Processo` e `Executar Processo`
5. importar o **XML do log de execução do processo**
6. trocar valores fixos por parâmetros em colchetes, como `[coligadadinamica]` e `[idmovdinamico]`
7. apontar a atividade `Executar Processo` para a atividade `Preparar Execução do Processo`

Em outras palavras, nas fontes o XML do processo é a ponte entre execução manual e automação.

### Contexto de assinante

Quando o movimento vem de outro módulo, a documentação diz para usar **contexto de assinante**.

Atividades específicas citadas:

- `Consulta valor no contexto do Movimento (Assinante)`
- `Atribuir valor no contexto do Assinante/Movimento`

Limitações explícitas:

- só funcionam no contexto de assinante
- só atuam sobre:
  `TMOV`
  `TMOVFISCAL`
  `TITMMOV`

Campos recorrentes nessas atividades:

- `TABELA`
- `CAMPO`
- `POSICAO`
- `VALOR` ou `RETORNO`

Outro limite que aparece claramente:

- essas propriedades não permitem busca dinâmica direta; para percorrer itens, a documentação manda usar **expressões**, **Executar Código** e **While** para controlar a `Posicao`

## IntelliTrace

Nas fontes, IntelliTrace é tratado como coleta para análise técnica, não como correção.

Passos explicitamente documentados:

1. descompactar `IntelliTraceCollection` na pasta `RM.Net`
2. desinstalar `RM.Host.Exe` e `RM.Host.ServiceManager.exe`
3. iniciar `RM.Host` e `RM.exe` pelos `.bat`
4. reproduzir a rotina
5. coletar o arquivo `.itrace` em `RM.Net\\IntelliTraceCollection`
6. compactar e enviar para análise

Quando usar:

- erro difícil de reproduzir
- necessidade de histórico detalhado de execução
- investigação que não se resolve só com parâmetro ou log de tela

## Jobs e troubleshooting orientado por processo

Nas fontes, vários cenários técnicos se resolvem melhor quando você reconstrói o fluxo completo:

1. **Ambiente**
   host, três camadas, alias, diretório, compartilhamento
2. **Parâmetro**
   menu, etapa e filial/escopo corretos
3. **Identidade**
   usuário, matrícula, e-mail, empresa do Fluig
4. **Processo**
   Job gerado, XML usado, status do monitor, log de inconsistência
5. **Automação**
   DataServer, atividade de Fórmula Visual, XML parametrizado

Essa ordem é mais fiel às fontes do que começar por hipótese de customização.

## Termos recorrentes úteis para busca

- `Workflow Fluig`
- `Definições Gerais 3/3`
- `Id da Empresa Centralizadora do Workflow do Fluig`
- `Usuário Padrão de Cancelamento`
- `Estados de Aprovação`
- `dsGetFormulaWf.js`
- `DefaultDB`
- `TOTVS Colaboração`
- `Monitor de Arquivos TOTVS Colaboração`
- `Cadastro XML`
- `Importação/Envio de Arquivo XML`
- `Parâmetros por Filial`
- `Serviço de Consulta de arquivo XML`
- `Gerenciamento de Jobs`
- `Tipo da Recorrência`
- `Fórmula Visual`
- `Preparar Execução do Processo`
- `Executar Processo`
- `MovMovimentoData`
- `MovFaturamentoData`
- `TMOV`
- `TMOVFISCAL`
- `TITMMOV`
- `IntelliTrace`

## Limites desta referência

- Ela é forte em **parametrização operacional**, **workflow**, **monitor**, **jobs** e **automação por XML/processo**.
- Ela não é uma especificação completa de todos os DataServers do RM.
- Ela não substitui documentação de arquitetura de integração fora do que foi consolidado em `totvs_rm_docs`.
- Os nomes de DataServer citados nesta referência servem para troubleshooting e contexto de automação, não como contrato técnico detalhado.

## O que não assumir

- Não assumir que toda falha com Fluig é erro de código; nas fontes, várias causas estão em `Definições Gerais 3/3`, estados de aprovação e sincronização de usuário.
- Não assumir que o valor mínimo de aprovação automática do Fluig é um parâmetro do RM; a documentação mostrada trata isso como ajuste em arquivo do projeto padrão.
- Não assumir que TOTVS Colaboração 2.0 funciona sem Host, três camadas, diretório compartilhado e Jobs.
- Não assumir que inclusão manual de XML no cadastro equivale ao fluxo recomendado do monitor; as fontes dizem o contrário.
- Não assumir que basta apontar para a pasta `IN`; há artigo específico mostrando que o parâmetro pode estar errado justamente por incluir `IN`.
- Não assumir que Fórmula Visual pode alterar qualquer tabela; no contexto de assinante, as fontes limitam a `TMOV`, `TMOVFISCAL` e `TITMMOV`.
- Não assumir que DataServer, XML de processo e Job são detalhes separados; nas fontes, eles aparecem conectados no mesmo fluxo de automação.

<!-- AUTO-GENERATED START: INTEGRATION-DETAIL -->
## Apêndice exaustivo de integração, automação e troubleshooting

As entradas abaixo foram expandidas apenas a partir dos arquivos de índice de Fluig, TOTVS Colaboração, Objetos Gerenciais, Utilitários e artigos de parametrização com vocabulário de integração.

### Inventario de headings: Integração_Com_Fluig.md

- 001 ## Sumário
- 002 ## 1\. Objetivo
- 003 ## 2\. Benefícios
- 004 ## 3. Ambiente de Negócio
- 005 ### 3.1 Segmento
- 006 ### 3.2 Áreas de Negócios
- 007 ### 3.3 Processo Workflow
- 008 ### 3.4. Atividades do Processo
- 009 ### 3.5. Regras de Negócio
- 010 #### 3.5.1. Inclusão de Movimento
- 011 #### 3.5.2. Alteração de Movimento
- 012 #### 3.5.3.Cancelamento de movimento
- 013 #### 3.5.4. Estorno de Item Não Recebido
- 014 #### 3.5.5.Faturamento do Movimento
- 015 #### 3.5.6. Conclusão de Pedido
- 016 #### 3.5.7. Outros Processos
- 017 #### 3.5.8.Formulário do Workflow
- 018 #### 3.5.9.Visão do Movimento e Itens de Movimento
- 019 #### 3.5.10.Avanço Automático do Estado Inicial
- 020 ## 4\. Como Utilizar
- 021 ### 4.1. Iniciando Processo BPM pelo RM
- 022 ### 4.2. Movimentando e Consultando Processo BPM pelo Fluig
- 023 ### 4.3. Vídeo Demonstrativo
- 024 ## 5\. Como Instalar
- 025 ### 5.1. Fluig
- 026 #### a) Instalar o ambiente de Desenvolvimento Fluig
- 027 #### b) Buscar os Arquivos para Instalação do Processo BPM
- 028 #### c) Abrir o Arquivo do Instalação do Processo BPM no TDS
- 029 #### d) Componentes dos Processos BPM
- 030 #### e) Envio do Processo BPM para o Fluig
- 031 ### 5.2. ERP RM
- 032 #### a) Configurar nos parâmetros globais do sistema
- 033 #### b) Configurar os parâmetros de Tipo de Movimento
- 034 #### c) Importação da Consulta SQL
- 035 ## 6.Considerações
- 036 ## 1\. Objetivo
- 037 ## 2\. Benefícios
- 038 ## 3. Ambiente de Negócio
- 039 ### 3.1 Segmento
- 040 ### 3.2 Áreas de Negócios
- 041 ### 3.3 Processo Workflow
- 042 ### 3.4. Atividades do Processo
- 043 ### 3.5. Regras de Negócio
- 044 #### 3.5.1. Inclusão de Movimento
- 045 #### 3.5.2. Alteração de Movimento
- 046 #### 3.5.3.Cancelamento de movimento
- 047 #### 3.5.4. Estorno de Item Não Recebido
- 048 #### 3.5.5.Faturamento do Movimento
- 049 #### 3.5.6. Conclusão de Pedido
- 050 #### 3.5.7. Outros Processos
- 051 #### 3.5.8.Formulário do Workflow
- 052 #### 3.5.9.Visão do Movimento e Itens de Movimento
- 053 #### 3.5.10.Avanço Automático do Estado Inicial
- 054 ## 4\. Como Utilizar
- 055 ### 4.1. Iniciando Processo BPM pelo RM
- 056 ### 4.2. Movimentando e Consultando Processo BPM pelo Fluig
- 057 ### 4.3. Vídeo Demonstrativo
- 058 ## 5\. Como Instalar
- 059 ### 5.1. Fluig
- 060 #### a) Instalar o ambiente de Desenvolvimento Fluig
- 061 #### b) Buscar os Arquivos para Instalação do Processo BPM
- 062 #### c) Abrir o Arquivo do Instalação do Processo BPM no TDS
- 063 #### d) Componentes dos Processos BPM
- 064 #### e) Envio do Processo BPM para o Fluig
- 065 ### 5.2. ERP RM
- 066 #### a) Configurar nos parâmetros globais do sistema
- 067 #### b) Configurar os parâmetros de Tipo de Movimento
- 068 #### c) Importação da Consulta SQL
- 069 ## 6.Considerações

### Inventario de headings: Integração_Com_Totvs_Colaboração.md

- 001 ## Sumário
- 002 ## Atenção principalmente a estes documentos abaixo:
- 003 ## Informações Gerais
- 004 ## Objetivo
- 005 ## Definição da Regra de Negócio
- 006 ### 1\. Cadastros
- 007 ### 1.1. Natureza Fiscal (CFOP)
- 008 ### 1.1.1. Regra de Seleção da Natureza (RSN)
- 009 ### 1.1.1.1. Seleção Automática da Natureza por Movimento
- 010 ### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento
- 011 ### 1.1.2. Natureza Inversa
- 012 ### 1.2. Produtos
- 013 ### 1.3. Unidades
- 014 ### 2\. Parametrização
- 015 ### 3\. Importação e Gravação do XML
- 016 ### 3.1. Importação de Arquivos XML
- 017 ### 3.2. Serviço de Consulta de Arquivo XML
- 018 ### 4\. Inclusão de Movimento Através de XML - NF-e
- 019 ## Tabelas Utilizadas:
- 020 ## Informações Gerais
- 021 ## Objetivo
- 022 ## Definição da Regra de Negócio
- 023 ### 1.1. Natureza Fiscal (CFOP)
- 024 ### 1.1.1. Regra de Seleção da Natureza (RSN)
- 025 ### 1.1.1.1. Seleção Automática da Natureza por Movimento
- 026 ### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento
- 027 ### 1.1.2. Natureza Inversa
- 028 ### 1.2. Unidade de Medida
- 029 ### 1.3 Coligada e Filial
- 030 ### 2\. Parametrização
- 031 ### 3\. Importação e Gravação do XML
- 032 ### 3.1. Importação de Arquivos XML
- 033 ### 3.2. Serviço de Consulta de Arquivo XML
- 034 ### 4\. Inclusão de Movimento Através de XML - CT-e
- 035 ## Tabelas Utilizadas:
- 036 ## Informações sobre recebimento de Cancelamento de CT-e:
- 037 ## /display/LRM/MATFATCMPCRM01-7101+DT+Recebimento+de+Cancelamento+de+CT-e
- 038 ## Características do Requisito
- 039 ## Descrição
- 040 ## Procedimento para Implantação
- 041 ## Procedimento para Utilização
- 042 ## Características do Requisito
- 043 ## Descrição
- 044 ## Procedimento para Utilização
- 045 ### 1\. Parametrização
- 046 ### 1.1. Tipo de Recebimento de NF-e
- 047 ### 1.2. Fórmula do Tipo de Movimento para Recebimento de NF-e
- 048 ### 1.3. Parametrização de Local de Estoque e Condição de Pagamento
- 049 ### 2\. Cadastros
- 050 ### 2.1. Natureza Fiscal (CFOP)
- 051 ### 2.1.1. Regra de Seleção da Natureza (RSN)
- 052 ### 2.1.1.1. Seleção Automática da Natureza por Movimento
- 053 ### 2.1.1.2. Seleção Automática da Natureza por Item de Movimento
- 054 ### 2.1.2. Natureza Inversa
- 055 ### 2.2. Produtos
- 056 ### 2.3. Unidades
- 057 ### 3\. Recebimento Automático da NFe
- 058 ### 3.1. Importação de Arquivos - Totvs Colaboração
- 059 ### 3.2. Serviço Totvs Colaboração Consulta
- 060 ### 3.2.1. Tradução dos Dados do Arquivo XML
- 061 #### 3.2.1.1. Identificação dos Produtos
- 062 #### 3.2.1.2. Identificação das Unidades de Medida
- 063 #### 3.2.1.3. Identificação dos CFOP
- 064 ### 3.2.2. Identificação do Pedido de Compra
- 065 ### 3.2.2. Identificação do Pedido de Compra
- 066 ### 3.2.3. Identificação do Tipo de Recebimento NF-e
- 067 #### 3.2.3.1. Inclusão de Movimento Através do Pedido:
- 068 #### 3.2.3.2. Inclusão de Movimento Sem Pedido:
- 069 #### 3.2.3.3. Inclusão de Movimento Com ou Sem Pedido:
- 070 #### 3.2.3.4. Inclusão de Movimento Com Status Não Processado:
- 071 ### 4\. Processar Movimento - Totvs Colaboração
- 072 ## Características do Requisito
- 073 ## Descrição
- 074 ## Procedimento para Utilização
- 075 ### 1\. Parametrização
- 076 ### 1.1. Tipo de Recebimento de NF-e
- 077 ### 1.2. Fórmula do Tipo de Movimento para Recebimento de NF-e
- 078 ### 1.3. Parametrização de Local de Estoque e Condição de Pagamento
- 079 ### 2\. Cadastros
- 080 ### 2.1. Natureza Fiscal (CFOP)
- 081 ### 2.1.1. Regra de Seleção da Natureza (RSN)
- 082 ### 2.1.1.1. Seleção Automática da Natureza por Movimento
- 083 ### 2.1.1.2. Seleção Automática da Natureza por Item de Movimento
- 084 ### 2.1.2. Natureza Inversa
- 085 ### 2.2. Produtos
- 086 ### 2.3. Unidades
- 087 ### 3\. Recebimento Automático da NFe
- 088 ### 3.1. Importação de Arquivos - Totvs Colaboração
- 089 ### 3.2. Serviço Totvs Colaboração Consulta
- 090 ### 3.2.1. Tradução dos Dados do Arquivo XML
- 091 #### 3.2.1.1. Identificação dos Produtos
- 092 #### 3.2.1.2. Identificação das Unidades de Medida
- 093 #### 3.2.1.3. Identificação dos CFOP
- 094 ### 3.2.2. Identificação do Pedido de Compra
- 095 ### 3.2.2. Identificação do Pedido de Compra
- 096 ### 3.2.3. Identificação do Tipo de Recebimento NF-e
- 097 #### 3.2.3.1. Inclusão de Movimento Através do Pedido:
- 098 #### 3.2.3.2. Inclusão de Movimento Sem Pedido:
- 099 #### 3.2.3.3. Inclusão de Movimento Com ou Sem Pedido:
- 100 #### 3.2.3.4. Inclusão de Movimento Com Status Não Processado:
- 101 ### 4\. Processar Movimento - Totvs Colaboração
- 102 ## Informações Gerais
- 103 ## Objetivo
- 104 ## Definição da Regra de Negócio
- 105 ### 1\. Cadastros
- 106 ### 1.1. Natureza Fiscal (CFOP)
- 107 ### 1.1.1. Regra de Seleção da Natureza (RSN)
- 108 ### 1.1.1.1. Seleção Automática da Natureza por Movimento
- 109 ### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento
- 110 ### 1.1.2. Natureza Inversa
- 111 ### 1.2. Produtos
- 112 ### 1.3. Unidades
- 113 ### 2\. Parametrização
- 114 ### 3\. Importação e Gravação do XML
- 115 ### 3.1. Importação de Arquivos XML
- 116 ### 3.2. Serviço de Consulta de Arquivo XML
- 117 ### 4\. Inclusão de Movimento Através de XML - NF-e
- 118 ## Tabelas Utilizadas:

### Inventario de headings: Objetos_Gerenciais.md

- 001 ## Sumário

### Inventario de headings: Utilitários.md

- 001 ## Sumário

### Artigos e blocos operacionais

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar Movimento: Não foi possível cancelar Workflow Fluig para este movimento
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971782-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-Movimento-N%C3%A3o-foi-poss%C3%ADvel-cancelar-Workflow-Fluig-para-este-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971782-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-Movimento-N%C3%A3o-foi-poss%C3%ADvel-cancelar-Workflow-Fluig-para-este-movimento)
- Data: 10 de abril de 2025 às 09:43
- Eixo de resposta: movimento, compras, estoque, fluig
- Gatilhos uteis: movimento, estoque, workflow fluig, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao cancelar um Movimento que possui Integração Workflow Fluig é apresentado mensagem: Não foi possível cancelar Workflow Fluig para este movimento Usuário não é o usuário requisitante ou gestor do processo. Não será possível cancelar a solicitação!
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Ao cancelar um Movimento que possui Integração Workflow Fluig é apresentado mensagem: Não foi possível cancelar Workflow Fluig para este movimento Usuário não é o usuário requisitante ou gestor do processo. Não será possível cancelar a solicitação!
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Essa mensagem é exibida pois não foi definido um usuário específico para ser utilizado no cancelamento de Workflows no Fluig .

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao criar movimento integrado com o Fluig - Erro ao criar uma instância no Servidor do Fluig: Could not send Message
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360009343712-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-criar-movimento-integrado-com-o-Fluig-Erro-ao-criar-uma-inst%C3%A2ncia-no-Servidor-do-Fluig-Could-not-send-Message](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360009343712-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-criar-movimento-integrado-com-o-Fluig-Erro-ao-criar-uma-inst%C3%A2ncia-no-Servidor-do-Fluig-Could-not-send-Message)
- Data: 10 de abril de 2025 às 09:43
- Eixo de resposta: movimento, compras, estoque, fluig
- Gatilhos uteis: movimento, estoque, workflow fluig, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar criar um movimento com integração Fluig utilizando o Fluxo Padrão, é apresentado a mensagem abaixo: Erro ao criar uma instância no Servidor do Fluig: Could not send Message..
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Ao tentar criar um movimento com integração Fluig utilizando o Fluxo Padrão, é apresentado a mensagem abaixo: Erro ao criar uma instância no Servidor do Fluig: Could not send Message..
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.4.
- Menu, etapa, alias ou job citado: A mensagem ocorre pois o usuário e senha passados neste arquivo estão diferentes dos dados do RM, sendo usuário inexistente ou senha incorreta. Desta forma, altere o usuário e senha de forma que fique com os dados consistente e realize a integração novamente.
- Artefato tecnico observado: Para poder solucionar este demanda, deverá editar o arquivo dsGetFormulaWf.js e ir até a linha 25. Caso não esteja nesta linha, procure pela linha de código abaixo:
- Artefato tecnico observado: Verificar se no Gerenciamento do Alias o conteúdo do campo Alias está diferente do que foi definido nos arquivos Config referente à tag <add key="DefaultDB" value=" Nome do Alias " / :
- Artefato tecnico observado: RM.Host.exe.config;
- Artefato tecnico observado: RM.Host.Service.exe.config;

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitação aprovada no Fluig não aprovada no RM
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003817011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicita%C3%A7%C3%A3o-aprovada-no-Fluig-n%C3%A3o-aprovada-no-RM](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003817011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicita%C3%A7%C3%A3o-aprovada-no-Fluig-n%C3%A3o-aprovada-no-RM)
- Data: 9 de abril de 2025 às 15:56
- Eixo de resposta: movimento, compras, estoque, fluig
- Gatilhos uteis: estoque, workflow fluig, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Uma solicitação foi incluída no Fluig e movimentada até um estado final de aprovação. Ao consultar a solicitação no RM, ela continua com o Status Aprovação como Não Aprovado .
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Uma solicitação foi incluída no Fluig e movimentada até um estado final de aprovação. Ao consultar a solicitação no RM, ela continua com o Status Aprovação como Não Aprovado .
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.16
- Menu, etapa, alias ou job citado: A primeira é a configuração do parâmetro Id da Empresa Centralizadora do Workflow do Fluig .

#### [004] Workflow Processo BPM Fluig de Aprovação de Movimento
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=189311336](https://tdn.totvs.com/pages/releaseview.action?pageId=189311336)
- Data: nao informada no artigo convertido
- Eixo de resposta: movimento, fluig
- Gatilhos uteis: movimento, workflow fluig
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: - 1 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-1.Objetivo
- Evidencia inicial: - 2 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-2.Benefícios
- Evidencia inicial: - 3 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.AmbientedeNegócio
- Evidencia inicial: - 3.1 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.1Segmento
- Menu, etapa, alias ou job citado: - 5.1 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-5.1.Fluig
- Menu, etapa, alias ou job citado: Processo BPM de Aprovação de Faturamento é uma solução desenvolvida sobre a plataforma Fluig e integrada nativamente com ERP RM para permitir que o usuário envie dados da Aprovação de Faturamento para aprovação através do fluxo de workflow do Fluig e possibilitar que apenas os itens aprovados através do Fluig sejam visualizados durante o processo de inclusão de um faturamento.
- Menu, etapa, alias ou job citado: 3. Ambiente de Negócio
- Menu, etapa, alias ou job citado: 3.3 Processo Workflow

#### [005] Aprovação de Contrato por Workflow no Fluig
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938705](https://tdn.totvs.com/pages/releaseview.action?pageId=423938705)
- Data: nao informada no artigo convertido
- Eixo de resposta: contratos, fluig
- Gatilhos uteis: contrato, workflow fluig
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Através da integração do Fluig com o TOTVS Gestão de Estoque, Compras e Faturamento é possível realizar a aprovação de Contratos, Itens de Contrato e Medições para faturamento.
- Evidencia inicial: Nesse processo ao incluir ou alterar um Item de Contrato será gerado um workflow no Fluig com os dados do Contrato, Item de Contrato ou Medição, onde um usuário com papel de aprovador deve acessar o Formulário no Fluig e conforme análise dos dados aprovar ou não o workflow.
- Evidencia inicial: Parametrização de Integração Fluig
- Evidencia inicial: Para a utilização da integração com o Fluig é necessário configurar em Parâmetros | Globais |Integração Fluig informando o Endereço do Servidor do Fluig, Usuário/Senha do administrador do Fluig e Id da Empresa do Fluig.
- Menu, etapa, alias ou job citado: Através da integração do Fluig com o TOTVS Gestão de Estoque, Compras e Faturamento é possível realizar a aprovação de Contratos, Itens de Contrato e Medições para faturamento.
- Menu, etapa, alias ou job citado: Nesse processo ao incluir ou alterar um Item de Contrato será gerado um workflow no Fluig com os dados do Contrato, Item de Contrato ou Medição, onde um usuário com papel de aprovador deve acessar o Formulário no Fluig e conforme análise dos dados aprovar ou não o workflow.
- Menu, etapa, alias ou job citado: Parametrização de Integração Fluig
- Menu, etapa, alias ou job citado: Para a utilização da integração com o Fluig é necessário configurar em Parâmetros | Globais |Integração Fluig informando o Endereço do Servidor do Fluig, Usuário/Senha do administrador do Fluig e Id da Empresa do Fluig.

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - RM x Fluig Como alterar valor mínimo da aprovação automática
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000572468-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-RM-x-Fluig-Como-alterar-valor-m%C3%ADnimo-da-aprova%C3%A7%C3%A3o-autom%C3%A1tica](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000572468-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-RM-x-Fluig-Como-alterar-valor-m%C3%ADnimo-da-aprova%C3%A7%C3%A3o-autom%C3%A1tica)
- Data: 9 de abril de 2025 às 15:56
- Eixo de resposta: movimento, compras, estoque, fluig
- Gatilhos uteis: estoque, workflow fluig, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como alterar o valor mínimo para aprovação automática da solicitação de compras integrada ao Fluig?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.4
- Evidencia inicial: Solução
- Menu, etapa, alias ou job citado: Dúvida Como alterar o valor mínimo para aprovação automática da solicitação de compras integrada ao Fluig?
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.4
- Menu, etapa, alias ou job citado: Para alterar o valor padrão para aprovação automática da solicitação de compras integrada ao Fluig, basta seguir as orientações abaixo:
- Menu, etapa, alias ou job citado: Para mais informações sobre a aprovação de solicitação de compras, acesse o link abaixo:

#### [007] Workflow Processo BPM Fluig de Solicitação de Compra
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=192093006](https://tdn.totvs.com/pages/releaseview.action?pageId=192093006)
- Data: nao informada no artigo convertido
- Eixo de resposta: compras, fluig
- Gatilhos uteis: workflow fluig, compras
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: - 1 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-1.Objetivo
- Evidencia inicial: - 2 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-2.Benefícios
- Evidencia inicial: - 3 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.AmbientedeNegócio
- Evidencia inicial: - 3.1 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.1Segmento
- Menu, etapa, alias ou job citado: - 6.1 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-5.1.Fluig
- Menu, etapa, alias ou job citado: Processo BPM de Aprovação de Faturamento é uma solução desenvolvida sobre a plataforma Fluig e integrada nativamente com ERP RM para permitir que o usuário envie dados da Aprovação de Faturamento para aprovação através do fluxo de workflow do Fluig e possibilitar que apenas os itens aprovados através do Fluig sejam visualizados durante o processo de inclusão de um faturamento.
- Menu, etapa, alias ou job citado: 3. Ambiente de Negócio
- Menu, etapa, alias ou job citado: 3.3 Processo Workflow

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fluig: NOK Usuário Não Encontrado!
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Fluig-NOK-Usu%C3%A1rio-N%C3%A3o-Encontrado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Fluig-NOK-Usu%C3%A1rio-N%C3%A3o-Encontrado)
- Data: 9 de abril de 2025 às 15:55
- Eixo de resposta: movimento, compras, estoque, fluig
- Gatilhos uteis: estoque, workflow fluig, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência Ao acessar a etapa Workflow Fluig nos parâmetros do tipo de movimento ou ao tentar criar um movimento integrado ao Fluig é apresentado o erro: NOK Usuário Não Encontrado!
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ocorrência Ao acessar a etapa Workflow Fluig nos parâmetros do tipo de movimento ou ao tentar criar um movimento integrado ao Fluig é apresentado o erro: NOK Usuário Não Encontrado!
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: 1- Parâmetro "Id da Empresa Centralizadora do Workflow no Fluig" não definido com o "id empresa" do fluig correto
- Artefato tecnico observado: No RM o campo USERID da tabela GUSUARIO deve ser igual ao campo MATRICULA DO FLUIG. Além disso o campo e-mail também deve ser igual entre as plataformas.

#### [009] GED - Gerenciamento Eletrônica de Documentos
- Arquivo-base: Integração_Com_Fluig.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=270899168](https://tdn.totvs.com/pages/releaseview.action?pageId=270899168)
- Data: nao informada no artigo convertido
- Eixo de resposta: fluig
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Acompanhamento de Arquivos Recebidos
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Acompanhamento-de-Arquivos-Recebidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008691528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Acompanhamento-de-Arquivos-Recebidos)
- Data: 24 de janeiro de 2022 às 10:05
- Eixo de resposta: compras, estoque
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Como acompanhar os arquivos do TOTVS Colaboração 2.0
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Como acompanhar os arquivos do TOTVS Colaboração 2.0
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa, alias ou job citado: Acompanhamento de Arquivos Recebidos TOTVS Colaboração 2.0
- Artefato tecnico observado: Para acompanhar os arquivos recebidos, basta acessar o menu Compras | TOTVS Colaboração – Cadastro XML . Os arquivos são exibidos nesta tela automaticamente após passarem pela validação inicial, através da importação via Monitor TOTVS Colaboração.
- Artefato tecnico observado: - Inconsistente : o arquivo XML não foi incluído devido a alguma inconsistência. Por ex . : Filial não encontrada. Neste caso, o sistema permite o preenchimento manual da Filial, através de um duplo clique no registro.
- Artefato tecnico observado: Para cada registro, é informado o tipo de serviço a que ele se refere (CT-e, NF-e, etc.) através da coluna Tipo do XML . A flag Importado TOTVS Colaboração diferencia os registros importados daqueles incluídos manualmente, e o campo Ident . Movimento indica se já foi criado um movimento para aquele arquivo XML.

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Automatização de Importação de Arquivo XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008535907-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Automatiza%C3%A7%C3%A3o-de-Importa%C3%A7%C3%A3o-de-Arquivo-XML-TOTVS-Colabora%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008535907-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Automatiza%C3%A7%C3%A3o-de-Importa%C3%A7%C3%A3o-de-Arquivo-XML-TOTVS-Colabora%C3%A7%C3%A3o)
- Data: 19 de fevereiro de 2025 às 09:43
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:30 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Automatização de processos no TOTVS Colaboração .
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Automatização de processos no TOTVS Colaboração .
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Os Jobs são necessários para uma verificação contínua dos arquivos contidos na pasta IN. Para a execução dos Jobs, é necessário que o ambiente esteja configurado em Três Camadas e que o Host esteja funcionando corretamente. Desta forma, ao executar o sistema, os Jobs já estarão prontos.
- Artefato tecnico observado: Os Jobs são necessários para uma verificação contínua dos arquivos contidos na pasta IN. Para a execução dos Jobs, é necessário que o ambiente esteja configurado em Três Camadas e que o Host esteja funcionando corretamente. Desta forma, ao executar o sistema, os Jobs já estarão prontos.
- Artefato tecnico observado: Existem dois Jobs a serem executados para que os arquivos XML existentes na pasta IN sejam importados.
- Artefato tecnico observado: 1 - Importação de Arquivos – Totvs Colaboração: esse Job é um Job Global, responsável por buscar os documentos existentes na pasta IN e distribuí-los por coligada. Neste momento, nenhuma validação é feita. Após a execução desse Job, os documentos lidos são exibidos no Monitor de arquivos com o status Pendente , aguardando a ação do segundo Job. Serão exibidos apenas os documentos destinados à Coligada do usuário logado. Para executar esse Job, deve- se ir em Processos | Importação de Arquivos XML .
- Artefato tecnico observado: 2 - Serviço de Consulta de arquivo XML: esse Job é responsável por validar o arquivo XML do documento enviado, de acordo com o tipo de documento em questão (CT-e, NF-e, NFS-e, etc.), através da chamada do serviço especifico para cada um deles. Serão verificados todos os documentos lidos pelo 1º Job. Caso o documento esteja válido, o registro do arquivo é excluído do monitor, e passa a ser exibido na tela Compras | Importação de Arquivo XML - Cadastro XML , indicando que o mesmo foi incluído no sistema com sucesso.

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro: Não foi possível encontrar a Coligada correspondente ao CNPJ favor verificar o cadastro de Filiais
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/35435361056279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-N%C3%A3o-foi-poss%C3%ADvel-encontrar-a-Coligada-correspondente-ao-CNPJ-favor-verificar-o-cadastro-de-Filiais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/35435361056279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-N%C3%A3o-foi-poss%C3%ADvel-encontrar-a-Coligada-correspondente-ao-CNPJ-favor-verificar-o-cadastro-de-Filiais)
- Data: 6 de outubro de 2025 às 11:02
- Eixo de resposta: compras, estoque
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar importar o XML ao sistema é apresentado a mensagem de erro: Não foi possível encontrar a Coligada correspondente ao CNPJ X, favor verificar o cadastro de Filiais.
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Para importação do XML, além de ter a filial cadastrada na GFILIAL é necessário acessar o menu: Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Integrações Fiscal Parâmetros por Filial Selecionar a filial e parametrizar as etapas Importação/Envio de Arquivo XML 1/2 e Importação/Envio Arquivo XML 2/2.
- Menu, etapa, alias ou job citado: https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML?source=search
- Artefato tecnico observado: Ao tentar importar o XML ao sistema é apresentado a mensagem de erro: Não foi possível encontrar a Coligada correspondente ao CNPJ X, favor verificar o cadastro de Filiais.
- Artefato tecnico observado: Essa mensagem de erro é apresentada devido o CNPJ da filial contida no XML não está cadastrada no sistema, ou não está parametrizada para a importação.
- Artefato tecnico observado: ATENÇÃO: O XML não é baseado em CNPJ de coligada.
- Artefato tecnico observado: Para importação do XML, além de ter a filial cadastrada na GFILIAL é necessário acessar o menu: Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Integrações Fiscal Parâmetros por Filial Selecionar a filial e parametrizar as etapas Importação/Envio de Arquivo XML 1/2 e Importação/Envio Arquivo XML 2/2.

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Importação de NF-e/NFS-e/CT-e de entrada através de XML sem Parceiros
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/5552805375255-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Importa%C3%A7%C3%A3o-de-NF-e-NFS-e-CT-e-de-entrada-atrav%C3%A9s-de-XML-sem-Parceiros](https://centraldeatendimento.totvs.com/hc/pt-br/articles/5552805375255-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Importa%C3%A7%C3%A3o-de-NF-e-NFS-e-CT-e-de-entrada-atrav%C3%A9s-de-XML-sem-Parceiros)
- Data: 24 de abril de 2025 às 10:16
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como importar XML de Nota Fiscal Eletrônica de entrada gerando movimento?
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: A importação de XML no ERP da linha RM é realizada pela Importação/Envio de Arquivo XML (TOTVS Colaboração) que no caso é feita por parametrizações e processos no sistema, e não pelo Neogrid/TPF. Por ele é realizado importação de XML apenas de movimentos de Entrada. Essa Importação de arquivos XML não precisa ser ativado ou ser paga a parte, nesse caso é necessário apenas parametrizar o sistema para sua utilização.
- Menu, etapa, alias ou job citado: Mas vale lembrar que tal recurso funciona com ou sem integração com Parceiros (Neogrid/TPF) .
- Artefato tecnico observado: Como importar XML de Nota Fiscal Eletrônica de entrada gerando movimento?
- Artefato tecnico observado: A importação de XML no ERP da linha RM é realizada pela Importação/Envio de Arquivo XML (TOTVS Colaboração) que no caso é feita por parametrizações e processos no sistema, e não pelo Neogrid/TPF. Por ele é realizado importação de XML apenas de movimentos de Entrada. Essa Importação de arquivos XML não precisa ser ativado ou ser paga a parte, nesse caso é necessário apenas parametrizar o sistema para sua utilização.
- Artefato tecnico observado: - XML's de NFS-e (Notas Fiscais de Serviço) não serão importados sem a integração com Neogrid/TPF.
- Artefato tecnico observado: Hoje o sistema disponibiliza o recurso de Importação de arquivo XML para recebimento de notas de compra. O processo de importação de XML sem integração com parceiros está disponível a partir da versão 12.1.22 sem nenhum custo adicional ao cliente. O processo é praticamente idêntico, onde a única diferença é que os XML's não serão disponibilizados de forma automática na pasta IN pelo Parceiro.

#### [014] TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=224106789](https://tdn.totvs.com/pages/releaseview.action?pageId=224106789)
- Data: nao informada no artigo convertido
- Eixo de resposta: movimento, colaboracao
- Gatilhos uteis: movimento, totvs colaboracao, xml
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia inicial: Informações Gerais
- Evidencia inicial: Especificação
- Evidencia inicial: Produto
- Menu, etapa, alias ou job citado: TOTVS Gestão de Estoque, Compras e Faturamento
- Menu, etapa, alias ou job citado: Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.
- Menu, etapa, alias ou job citado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Menu, etapa, alias ou job citado: 1\. Cadastros
- Artefato tecnico observado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Artefato tecnico observado: Para o correto funcionamento da rotina de "Inclusão de Movimento Através do XML - NF-e" devemos ficar atentos ao preenchimento de alguns cadastros. São eles:
- Artefato tecnico observado: Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..
- Artefato tecnico observado: Para verificar como está a parametrização da sua empresa vá na etapa "Fis - Natureza" dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

#### [015] 1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=322150273](https://tdn.totvs.com/pages/releaseview.action?pageId=322150273)
- Data: nao informada no artigo convertido
- Eixo de resposta: colaboracao
- Gatilhos uteis: totvs colaboracao, xml
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia inicial: Informações Gerais
- Evidencia inicial: Especificação
- Evidencia inicial: Produto
- Menu, etapa, alias ou job citado: TOTVS Gestão de Estoque, Compras e Faturamento
- Menu, etapa, alias ou job citado: As melhorias de performance e de usabilidade das telas estão disponíveis apenas para o TOTVS Colaboração 2.0 a partir da versão 3.00 do XML .
- Menu, etapa, alias ou job citado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Menu, etapa, alias ou job citado: Para definir a Natureza Inversa de forma automática na geração do movimento de entrada, o TOTVS Gestão de Estoque, Compras e Faturamento utilizará os seguintes recursos:
- Artefato tecnico observado: As melhorias de performance e de usabilidade das telas estão disponíveis apenas para o TOTVS Colaboração 2.0 a partir da versão 3.00 do XML .
- Artefato tecnico observado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Artefato tecnico observado: Para cada movimento de CT-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..
- Artefato tecnico observado: Para verificar como está a parametrização da sua empresa vá na etapa "Fis - Natureza" dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

#### [016] Manual Totvs Colaboração 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=185748531](https://tdn.totvs.com/pages/releaseview.action?pageId=185748531)
- Data: nao informada no artigo convertido
- Eixo de resposta: colaboracao
- Gatilhos uteis: totvs colaboracao
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: /download/attachments/185748531/Manual%20-%20Totvs%20Colabora%C3%A7%C3%A3o%202%200.docx?version=6&modificationDate=1429886794000&api=v2
- Evidencia inicial: ---

#### [017] MATFATCMPCRM01-2833 DT Importação de NF-e e CT-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=392500033](https://tdn.totvs.com/pages/releaseview.action?pageId=392500033)
- Data: nao informada no artigo convertido
- Eixo de resposta: colaboracao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [018] Parametrização (TOTVS Colaboração 2.0)
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938829](https://tdn.totvs.com/pages/releaseview.action?pageId=423938829)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao, colaboracao
- Gatilhos uteis: parametrizacao, totvs colaboracao
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Primeiramente devemos parametrizar o ambiente para "TOTVS Colaboração 2.0".
- Evidencia inicial: Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.
- Evidencia inicial: Este campo deverá estar parametrizado com o tipo de movimento CT-e que será criado automaticamente à partir da entrada de um arquivo XML de recebimento de CT-e.
- Evidencia inicial: Somente tipos de movimento de entrada (1.2.xx) que possuem o campo "Integração Neogrid = Recebimento de CT-e" podem ser exibidos para escolha.
- Menu, etapa, alias ou job citado: Primeiramente devemos parametrizar o ambiente para "TOTVS Colaboração 2.0".
- Menu, etapa, alias ou job citado: Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.
- Menu, etapa, alias ou job citado: Somente tipos de movimento de entrada (1.2.xx) que possuem o campo "Integração Neogrid = Recebimento de CT-e" podem ser exibidos para escolha.
- Artefato tecnico observado: Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.
- Artefato tecnico observado: Este campo deverá estar parametrizado com o tipo de movimento CT-e que será criado automaticamente à partir da entrada de um arquivo XML de recebimento de CT-e.

#### [019] TSRMCN DT Recebimento Automático de NF-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=223159982](https://tdn.totvs.com/pages/releaseview.action?pageId=223159982)
- Data: nao informada no artigo convertido
- Eixo de resposta: colaboracao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro ao Consultar XML (Estouro de SqlDateTime)
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360040363413-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-ao-Consultar-XML-Estouro-de-SqlDateTime](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360040363413-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-ao-Consultar-XML-Estouro-de-SqlDateTime)
- Data: 6 de julho de 2022 às 14:26
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência Ao executar o processo de Serviço de Consulta de Arquivos XML sistema apresenta a mensagem abaixo:
- Evidencia inicial: Erro durante a importação do arquivo 109\ 20190612093924472\ 4306.xml.
- Evidencia inicial: Mensagem Original: Estouro de SqlDateTime. Deve estar entre 1/1/1753 12:00:00 AM e 31/12/9999 11:59:59 PM.. Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.
- Menu, etapa, alias ou job citado: Mensagem Original: Estouro de SqlDateTime. Deve estar entre 1/1/1753 12:00:00 AM e 31/12/9999 11:59:59 PM.. Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.
- Artefato tecnico observado: Ocorrência Ao executar o processo de Serviço de Consulta de Arquivos XML sistema apresenta a mensagem abaixo:
- Artefato tecnico observado: Erro durante a importação do arquivo 109\ 20190612093924472\ 4306.xml.
- Artefato tecnico observado: Esse incidente ocorre pois no XML importado está faltando uma tag . A tag faltante é a DhRecbto e esta tag é quem determina a data e hora de autorização do XML.
- Artefato tecnico observado: Solução Excluir o XML importado e solicitar ao fornecedor o envio deste novamente agora com essa tag preenchida para nova importação.

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - IMPXML - XML status Pendente
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-IMPXML-XML-status-Pendente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034644093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-IMPXML-XML-status-Pendente)
- Data: 16 de outubro de 2024 às 17:12
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Ao acessar tela de Importação de arquivo XML - Cadastro de XML o registro é exibido com status igual a Pendente .
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: A validação de um XML deve ser feita após a execução do processo de Monitor de Arquivos - Importação de Arquivo XML , ao executar o processo de Serviço de Consulta de arquivo XML , assim o XML será inserido na tela de cadastro de XML com o status igual a Validado caso nenhuma pendência seja identificada em seu cadastro.
- Menu, etapa, alias ou job citado: Para ter o XML com o status igual a Validado exclua-o da tela de cadastro de XML, inclua o arquivo XML em sua pasta IN e execute o processo de Importação de Arquivo XML existente na tela de Monitor de arquivos.
- Artefato tecnico observado: Dúvida Ao acessar tela de Importação de arquivo XML - Cadastro de XML o registro é exibido com status igual a Pendente .
- Artefato tecnico observado: Solução Um XML somente será registrado no sistema com status Pendente caso este tenha sido cadastrado manualmente através do botão Incluir da tela de Importação de arquivo XML - Cadastro de XML.
- Artefato tecnico observado: Esta não é uma prática recomendada uma vez que a versão 2.0 do processo de Importação de Arquivo XML não possui comunicação com o TSS e assim o XML não poderá ter seu status alterado para Validado (que é o status necessário para permitir incluir um movimento a partir dele).
- Artefato tecnico observado: A validação de um XML deve ser feita após a execução do processo de Monitor de Arquivos - Importação de Arquivo XML , ao executar o processo de Serviço de Consulta de arquivo XML , assim o XML será inserido na tela de cadastro de XML com o status igual a Validado caso nenhuma pendência seja identificada em seu cadastro.

#### [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - XML não enviado para pasta IN
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027915912-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-XML-n%C3%A3o-enviado-para-pasta-IN](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027915912-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-XML-n%C3%A3o-enviado-para-pasta-IN)
- Data: 1 de agosto de 2022 às 12:34
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência Portal Neogrid apresenta nota que não foi enviada para a pasta IN e não foi importada no ERP , ao Reenviar ao ERP ela passa a ser exibida na pasta.
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: - XML foi consumido em Ambiente e/ou Base de testes
- Menu, etapa, alias ou job citado: - Verifique em sua base de testes se o XML não encontrado se encontra disponível para consulta no Monitor de Arquivos ou cadastrado na tela de Cadastro de XML do menu Compras
- Artefato tecnico observado: Ocorreram erros durante a importação do XML e este se encontra na pasta RM\\ERROR
- Artefato tecnico observado: - XML foi consumido em Ambiente e/ou Base de testes
- Artefato tecnico observado: - Agendamento de JOB ativo onde houve o consumo do arquivo mas ocorreram erros ao importa-lo e arquivo não se encontra na pasta RM\\ERROR.
- Artefato tecnico observado: - Acessar pasta \\RM\\ERROR e recortar o XML para a pasta IN novamente, feito isso importe-o para o ERP manualmente ou aguarde o próximo Job Agendado

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT- Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028183351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipos-de-Recebimento-de-NF-e-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0)
- Data: 1 de agosto de 2022 às 12:20
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Quais opções o sistema disponibiliza para Recebimento Automático de NF-e (Compra)?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: - Inclusão direta - Status não processado: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”. Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);
- Menu, etapa, alias ou job citado: - Recebimento de Pedido ou Inclusão direta: - Status não processado: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando às parametrizações do seu tipo de movimento, exceto as de integração, pois o movimento será criado com o status "Não Processado". Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento).
- Artefato tecnico observado: - Inclusão direta : O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento de NF-e com base nos dados existentes no XML. O movimento será criado acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;
- Artefato tecnico observado: - Inclusão direta - Status não processado: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”. Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);
- Artefato tecnico observado: - Recebimento de Pedido: O sistema utiliza o código do pedido contido no XML para buscar o movimento correspondente e realizar o faturamento do mesmo, sendo que se o pedido não for encontrado na base de dados o novo movimento não será criado, pois o sistema abortará o processo, informando o motivo através do log de execução;
- Artefato tecnico observado: - Recebimento de Pedido ou Inclusão direta: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando a todas às parametrizações do seu tipo de movimento, efetuando todas as integrações parametrizadas. O novo movimento terá o status 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;

#### [024] TSRMCN DT Recebimento Automático de NF-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=223159982](https://tdn.totvs.com/pages/releaseview.action?pageId=223159982)
- Data: nao informada no artigo convertido
- Eixo de resposta: colaboracao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [025] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - TOTVS Colaboração: Tradução automática de itens para produto diferente do definido.
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026068751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-TOTVS-Colabora%C3%A7%C3%A3o-Tradu%C3%A7%C3%A3o-autom%C3%A1tica-de-itens-para-produto-diferente-do-definido)
- Data: 1 de agosto de 2022 às 12:14
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a Inclusão de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o Pedido de forma automática, caso seja selecionada a opção Sim , o sistema apresenta na tela de Tradução de Itens um código de produto divergente do configurado em Anexos - Produtos para Importação de XML.
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ocorrência No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a Inclusão de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o Pedido de forma automática, caso seja selecionada a opção Sim , o sistema apresenta na tela de Tradução de Itens um código de produto divergente do configurado em Anexos - Produtos para Importação de XML.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: 2. Caso as tags citadas não estejam preenchidas, o sistema considera o cadastro de Produto - Anexos - Produtos para Importação de XML.
- Artefato tecnico observado: Ocorrência No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a Inclusão de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o Pedido de forma automática, caso seja selecionada a opção Sim , o sistema apresenta na tela de Tradução de Itens um código de produto divergente do configurado em Anexos - Produtos para Importação de XML.
- Artefato tecnico observado: 1. Verifica a tag XPED , NITEMPED e ITEMPED . Caso elas existam, o faturamento traduzirá os itens a partir desta sequência sem verificar o cadastro de Produtos para Importação de XML.
- Artefato tecnico observado: 2. Caso as tags citadas não estejam preenchidas, o sistema considera o cadastro de Produto - Anexos - Produtos para Importação de XML.
- Artefato tecnico observado: O fato do sistema exibir um código divergente do configurado na tela de Tradução de Itens ocorre pois, o XML recebido possui as tags XPED e NIITEMPED preenchidas com valores diferentes da sequência dos itens do pedido que está sendo faturado.

#### [026] Cross Segmentos - TOTVS BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento - COLAB - Não existem arquivos a serem importados na Importação de NF-e e CT-e sem NEOGRID
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-N%C3%A3o-existem-arquivos-a-serem-importados-na-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019178231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-N%C3%A3o-existem-arquivos-a-serem-importados-na-Importa%C3%A7%C3%A3o-de-NF-e-e-CT-e-sem-NEOGRID)
- Data: 24 de abril de 2025 às 10:17
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos é apresentada a mensagem Não existem arquivos a serem importados, mesmo que possua XML's na pasta.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Evidencia inicial: Causa
- Menu, etapa, alias ou job citado: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos é apresentada a mensagem Não existem arquivos a serem importados, mesmo que possua XML's na pasta.
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: - Copie o endereço da pasta compartilhada e cole-o no caminho Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Totvs Colaboração, campo Diretório Padrão para importação dos Arquivos XML .
- Menu, etapa, alias ou job citado: - Clique com o botão direito sobre o diretório Propriedades | Segurança e conceda todas as permissões para o grupo Todos .
- Artefato tecnico observado: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos é apresentada a mensagem Não existem arquivos a serem importados, mesmo que possua XML's na pasta.
- Artefato tecnico observado: - O usuário TODOS/EVERYONE não possui acesso total ao diretório em que os XML's foram disponibilizados para importação e suas subpastas.
- Artefato tecnico observado: - O caminho informado no Parametrizador é um caminho local e a máquina onde os XML's se encontram não é local, mas pertence á rede da empresa.
- Artefato tecnico observado: - Copie o endereço da pasta compartilhada e cole-o no caminho Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Totvs Colaboração, campo Diretório Padrão para importação dos Arquivos XML .

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como solucionar o erro "Não existem arquivos a serem importados" no TOTVS Colaboração 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015933291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-solucionar-o-erro-N%C3%A3o-existem-arquivos-a-serem-importados-no-TOTVS-Colabora%C3%A7%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015933291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-solucionar-o-erro-N%C3%A3o-existem-arquivos-a-serem-importados-no-TOTVS-Colabora%C3%A7%C3%A3o-2-0)
- Data: 1 de agosto de 2022 às 12:12
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos - Totvs Colaboração é apresentada a mensagem Não existem arquivos a serem importados , mesmo que possua XMLs na pasta IN.
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos - Totvs Colaboração é apresentada a mensagem Não existem arquivos a serem importados , mesmo que possua XMLs na pasta IN.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: - Copie o endereço da pasta compartilhada e cole-o no caminho Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Totvs Colaboração, campo Diretório Padrão dos Arquivos XML TOTVS Colaboração .
- Artefato tecnico observado: - Copie o endereço da pasta compartilhada e cole-o no caminho Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Totvs Colaboração, campo Diretório Padrão dos Arquivos XML TOTVS Colaboração .

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Seleção de Filial ao incluir XML de CT-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Sele%C3%A7%C3%A3o-de-Filial-ao-incluir-XML-de-CT-e](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015542731-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Sele%C3%A7%C3%A3o-de-Filial-ao-incluir-XML-de-CT-e)
- Data: 20 de junho de 2022 às 15:47
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:30 min
- Evidencia inicial: Dúvida Para qual Filial o XML de CT-e será inserido quando feita importação via TOTVS Colaboração ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Evidencia inicial: Solução
- Menu, etapa, alias ou job citado: Dúvida Para qual Filial o XML de CT-e será inserido quando feita importação via TOTVS Colaboração ?
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico observado: Dúvida Para qual Filial o XML de CT-e será inserido quando feita importação via TOTVS Colaboração ?
- Artefato tecnico observado: Quando um XML é importado e inserido no sistema algumas validações serão feitas para selecionar a filial a qual este XML pertence. No caso do CT-e existe uma particularidade importante a ser considerada.
- Artefato tecnico observado: O sistema irá considerar o tipo de tomador do XML para definir o CNPJ do tomador do Serviço.
- Artefato tecnico observado: Em um XML o tomador é 0(zero) e o remetente da nota pertence ao CNPJ 87.345.021.0001-27 que corresponde ao CNPJ da filial 100. Sendo assim o XML será inserido para a filial 100, mesmo que no XML a tag de destinatário esteja informando o CNPJ de outra filial cadastrada na base de dados.

#### [029] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Seleção de Natureza de Operação utilizando TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015276172-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Sele%C3%A7%C3%A3o-de-Natureza-de-Opera%C3%A7%C3%A3o-utilizando-TOTVS-Colabora%C3%A7%C3%A3o)
- Data: 9 de abril de 2025 às 16:02
- Eixo de resposta: compras, estoque, colaboracao
- Gatilhos uteis: estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como o sistema seleciona a Natureza de Operação quando movimento é inserido via arquivo XML?
- Evidencia inicial: Ambiente Cross Segmentos - Backoffice Linha RM - Gestão de Estoque, Compras e Faturamento - A partir da 11.80.
- Evidencia inicial: Solução A seleção de CFOP de um movimento inserido via TC é feita primeiro no item para que a partir desta seja preenchida a do movimento.
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - Backoffice Linha RM - Gestão de Estoque, Compras e Faturamento - A partir da 11.80.
- Menu, etapa, alias ou job citado: O Sistema irá se basear na CFOP informada no XML para que encontre no sistema qual registro selecionar a fim de caracterizar a operação inversa (fiscalmente falando). Sendo assim será necessário cadastrar essas CFOP's inversas através do menu "Anexos - Natureza Inversa - TOTVS Colaboração".
- Menu, etapa, alias ou job citado: - Sem que haja uma CFOP default nos parâmetros, o sistema irá executar a regra de seleção definida no Gestão Fiscal e dentro desta regra de seleção verificará qual CFOP das que se encontram cadastradas como natureza inversa se encaixam para seleção e preenchimento no movimento/item. Caso mais de uma se encaixe e nenhuma delas esteja marcada como default o sistema deixará o campo em branco dependendo assim do usuário preencher este campo no momento da inclusão. Caso apenas uma se encaixe esta será preenchida no movimento/item.
- Artefato tecnico observado: Dúvida Como o sistema seleciona a Natureza de Operação quando movimento é inserido via arquivo XML?
- Artefato tecnico observado: O Sistema irá se basear na CFOP informada no XML para que encontre no sistema qual registro selecionar a fim de caracterizar a operação inversa (fiscalmente falando). Sendo assim será necessário cadastrar essas CFOP's inversas através do menu "Anexos - Natureza Inversa - TOTVS Colaboração".
- Artefato tecnico observado: \ Natureza do XML 5.102

#### [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar e incluir movimento através do TOTVS Colaboração versão 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011408031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-e-incluir-movimento-atrav%C3%A9s-do-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011408031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-e-incluir-movimento-atrav%C3%A9s-do-TOTVS-Colabora%C3%A7%C3%A3o-vers%C3%A3o-2-0)
- Data: 24 de abril de 2025 às 10:17
- Eixo de resposta: movimento, compras, estoque, colaboracao
- Gatilhos uteis: movimento, estoque, totvs colaboracao, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Como configurar, importar, consultar, o que cadastrar e como cadastrar para utilizar o TOTVS Colaboração 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Evidencia inicial: Solução
- Menu, etapa, alias ou job citado: Dúvida Como configurar, importar, consultar, o que cadastrar e como cadastrar para utilizar o TOTVS Colaboração 2.0?
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa, alias ou job citado: Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.
- Menu, etapa, alias ou job citado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML , pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Caso a empresa opte por não contratar o Neogrid a obtenção destes arquivos XML deverão ser realizadas manualmente. Estes, por sua vez, serão lidos e interpretados através da execução de Jobs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Artefato tecnico observado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML , pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Caso a empresa opte por não contratar o Neogrid a obtenção destes arquivos XML deverão ser realizadas manualmente. Estes, por sua vez, serão lidos e interpretados através da execução de Jobs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.

#### [031] TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=224106789](https://tdn.totvs.com/pages/releaseview.action?pageId=224106789)
- Data: nao informada no artigo convertido
- Eixo de resposta: movimento, colaboracao
- Gatilhos uteis: movimento, totvs colaboracao, xml
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia inicial: Informações Gerais
- Evidencia inicial: Especificação
- Evidencia inicial: Produto
- Menu, etapa, alias ou job citado: TOTVS Gestão de Estoque, Compras e Faturamento
- Menu, etapa, alias ou job citado: Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.
- Menu, etapa, alias ou job citado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Menu, etapa, alias ou job citado: 1\. Cadastros
- Artefato tecnico observado: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML, pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Estes, por sua vez, serão lidos e interpretados através da execução de JOBs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Artefato tecnico observado: Para o correto funcionamento da rotina de "Inclusão de Movimento Através do XML - NF-e" devemos ficar atentos ao preenchimento de alguns cadastros. São eles:
- Artefato tecnico observado: Para cada movimento de NF-e a ser incluído, o sistema irá encontrar a Natureza Inversa do CFOP constante do arquivo XML. Para isso, é necessário saber, através das parametrizações vigentes do tipo de movimento, se o movimento a ser criado seleciona a Natureza de Operação somente para o movimento, ou se deve ser selecionada também uma Natureza para o item de movimento. Para ambos os casos, será utilizada em primeiro lugar a Regra de Seleção da Natureza (RSN), rotina hoje já existente e que tem a finalidade de encontrar a Natureza de Operação baseada nas informações do movimento e parametrizações de várias tabelas tais como: Parâmetros do Tipo de Movimento, Produto, Classificação de Produto, Naturezas Fiscais, Regras de ICMS, Regras de IPI, etc..
- Artefato tecnico observado: Para verificar como está a parametrização da sua empresa vá na etapa "Fis - Natureza" dos Parâmetros dos Tipos de Movimento que serão utilizados na Inclusão de Movimento através de XML e verifique o preenchimento do campo 'Seleção Automática da Natureza'.

#### [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Principais Parametrizações do Processo Importação de Arquivos XML
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML)
- Data: 24 de abril de 2025 às 10:17
- Eixo de resposta: parametrizacao, compras, estoque, colaboracao
- Gatilhos uteis: parametrizacao, estoque, totvs colaboracao, xml, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como fazer as parametrizações básicas do processo de Importação de Arquivos XML para inclusão de movimentos de recebimento ( Compra )?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: 1\. Acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | etapa Importação/Envio de Arquivo XML e preencha os campos conforme indicado abaixo:
- Menu, etapa, alias ou job citado: - Tipo Integração:
- Artefato tecnico observado: Dúvida Como fazer as parametrizações básicas do processo de Importação de Arquivos XML para inclusão de movimentos de recebimento ( Compra )?
- Artefato tecnico observado: Para parametrizar o sistema para realizar a importação de arquivos XML, deverá seguir seguintes passos:
- Artefato tecnico observado: 1\. Acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | etapa Importação/Envio de Arquivo XML e preencha os campos conforme indicado abaixo:
- Artefato tecnico observado: - Checkbox Realizar Importação de XML de NF-e e CT-e (sem integração com parceiros) : marque apenas se não houver contratação do Neogrid para disponibilizar os arquivos XML automaticamente na pasta Client EDI .

#### [033] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aplicar IntelliTrace
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000779787-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aplicar-IntelliTrace](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000779787-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aplicar-IntelliTrace)
- Data: 9 de abril de 2025 às 16:13
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: estoque, intellitrace, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como executar o IntelliTrace e enviar para análise?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Evidencia inicial: Solução
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Artefato tecnico observado: - 2\. Desinstalar todos os hosts na máquina: RM.Host.Exe e RM.Host.ServiceManager.exe
- Artefato tecnico observado: - 3\. Executar o .BAT para iniciar o RM.Host e RM.exe :
- Artefato tecnico observado: Pasta RM.NET IntelliTrace RM.Host.Exe .bat
- Artefato tecnico observado: - 4\. Será gerado um arquivo na pasta ..\\RM.Net\\IntelliTraceCollection com a extensão .itrace

#### [034] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento possui vínculo com o Gestão Hospitalar e não pode ser excluído
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539041175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-possui-v%C3%ADnculo-com-o-Gest%C3%A3o-Hospitalar-e-n%C3%A3o-pode-ser-exclu%C3%ADdo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539041175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-possui-v%C3%ADnculo-com-o-Gest%C3%A3o-Hospitalar-e-n%C3%A3o-pode-ser-exclu%C3%ADdo)
- Data: 9 de abril de 2025 às 16:07
- Eixo de resposta: movimento, compras, estoque
- Gatilhos uteis: movimento, estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao excluir um Movimento é apresentada mensagem:
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Caso a sentença retorne resultado, mostra que de fato este movimento possui integração com o Gestão Hospitalar.
- Menu, etapa, alias ou job citado: Para exclusão do movimento será necessário desfazer esta integração via Gestão Hospitalar.
- Artefato tecnico observado: SELECT IDMOV FROM SZOPMEPACIENTECAB (NOLOCK) WHERE CODCOLIGADA = X AND IDMOV = Y

#### [035] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividades de Inclusão de Movimento
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061399674-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividades-de-Inclus%C3%A3o-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061399674-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividades-de-Inclus%C3%A3o-de-Movimento)
- Data: 9 de abril de 2025 às 16:08
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como fazer uma Fórmula Visual para Inclusão de Movimentos usando as atividades padrões do módulo Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12 .
- Menu, etapa, alias ou job citado: Como fazer uma Fórmula Visual para Inclusão de Movimentos usando as atividades padrões do módulo Gestão de Estoque, Compras e Faturamento?
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12 .
- Menu, etapa, alias ou job citado: Solução Para incluir o movimento via fórmula visual é necessário utilizar três atividades em sequência:
- Menu, etapa, alias ou job citado: Local de Estoque
- Artefato tecnico observado: TMOV.CODCOLIGADA
- Artefato tecnico observado: TMOV.CODFILIAL
- Artefato tecnico observado: TMOV.CODLOC
- Artefato tecnico observado: TMOV.CODTMV

#### [036] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual como utilizar a atividade Alteração de Movimento
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036626593-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-como-utilizar-a-atividade-Altera%C3%A7%C3%A3o-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036626593-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-como-utilizar-a-atividade-Altera%C3%A7%C3%A3o-de-Movimento)
- Data: 9 de abril de 2025 às 16:13
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida O que é necessário para utilizar a atividade Alteração de Movimento ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Evidencia inicial: Solução Para utilizar a atividade Alteração Movimento é necessário utilizar 3 atividades em sequência:
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: 1. A execução da fórmula visual realiza todas as consistências típicas do movimento conforme definido na parametrização, igual a qualquer alteração manual no registro;
- Menu, etapa, alias ou job citado: 4. Faça o download da fórmula visual anexa para obter um exemplo de utilização das atividades apresentadas. O exemplo tem como objetivo preencher o Campo Livre 1 do movimento indicado na propriedade IDMOV das atividades AlteracaoMov e AlteracaoItem.

#### [037] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como visualizar nome do campo e tabela correspondente no Banco de dados
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035944994-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-visualizar-nome-do-campo-e-tabela-correspondente-no-Banco-de-dados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035944994-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-visualizar-nome-do-campo-e-tabela-correspondente-no-Banco-de-dados)
- Data: 29 de outubro de 2021 às 08:54
- Eixo de resposta: compras, estoque
- Gatilhos uteis: estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como identificar a qual tabela do banco de dados o campo exibido na tela pertence?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.
- Evidencia inicial: Solução Para identificar a tabela e campo do Banco de Dados que correspondem ao que é exibido em tela basta que na tela desejada clique com o botão direito do mouse em qualquer parte da tela e selecione a opção Visualizar nome dos campos .
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.

#### [038] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Desabilitar Triggers e Fórmulas Visuais
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035724853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Desabilitar-Triggers-e-F%C3%B3rmulas-Visuais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035724853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Desabilitar-Triggers-e-F%C3%B3rmulas-Visuais)
- Data: 24 de abril de 2025 às 10:14
- Eixo de resposta: compras, estoque, objetos-gerenciais
- Gatilhos uteis: estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como desabilitar as Triggers e Fórmulas Visuais do sistema?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Evidencia inicial: Solução Para desabilitar suas Triggers e Fórmulas Visuais, siga o passo a passo abaixo:
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Acesse o módulo Serviços Globais Administração Sentinela Tarefas de execução agendada Habilitar/Desabilitar Triggers Desmarque todas as triggers e clique em Executar:

#### [039] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: DataServer de Movimento para diferentes formas de inclusão
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026525651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-DataServer-de-Movimento-para-diferentes-formas-de-inclus%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026525651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-DataServer-de-Movimento-para-diferentes-formas-de-inclus%C3%A3o)
- Data: 9 de abril de 2025 às 16:10
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, dataserver, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Quais são os Dataserver de Movimento que devem ser utilizados para disparar fórmula visual?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Dúvida Quais são os Dataserver de Movimento que devem ser utilizados para disparar fórmula visual?
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico observado: Dúvida Quais são os Dataserver de Movimento que devem ser utilizados para disparar fórmula visual?
- Artefato tecnico observado: Solução Como existem diferentes formas de incluir movimentos no sistema, cada uma destas formas estão associadas a um Dataserver Abaixo seguem seus nomes e a forma de inclusão que os farão ser disparados:

#### [040] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Executar processo
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024258792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Executar-processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024258792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Executar-processo)
- Data: 9 de abril de 2025 às 16:10
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como executar um processo a partir de fórmula visual?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Dúvida Como executar um processo a partir de fórmula visual?
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Solução Será preciso utilizar um conjunto de duas atividades para execução do processo via fórmula visual. Preparar execução do processo e Executar processo . Abaixo segue o detalhamento de como configurar a fórmula de acordo com seu processo (usaremos o processo de cancelar movimento como exemplo):
- Artefato tecnico observado: 2 - Identificar o Job gerado
- Artefato tecnico observado: Acesse a tela de Gerenciamento de Jobs (menu Ambiente) e filtre pelo job criado na execução do processo (passo 1):
- Artefato tecnico observado: 5 - Selecionar o processo e seu XML
- Artefato tecnico observado: Clique com o botão direito na atividade Preparar Execução do Processo e na opção "Selecionar XML do Log de execução de processos" filtre e selecione o JOB consultado no passo 2 .

#### [041] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Contexto de assinante para inclusão de movimento
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Contexto-de-assinante-para-inclus%C3%A3o-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Contexto-de-assinante-para-inclus%C3%A3o-de-movimento)
- Data: 9 de abril de 2025 às 16:09
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como funciona o contexto de assinante para inclusão de movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Evidencia inicial: Solução Diferentemente das fórmulas visuais utilizadas em processos ou dataservers, para que o movimento dispare uma fórmula visual, quando a origem deste movimento é outro módulo precisamos utilizar o contexto de assinante, somente neste caso haverá o disparo. Para isto será preciso:
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Solução Diferentemente das fórmulas visuais utilizadas em processos ou dataservers, para que o movimento dispare uma fórmula visual, quando a origem deste movimento é outro módulo precisamos utilizar o contexto de assinante, somente neste caso haverá o disparo. Para isto será preciso:
- Menu, etapa, alias ou job citado: As demais configurações da fórmula seguirão como de costume, e as atividades ".Net" deverão ser utilizadas para auxiliá-lo na configuração de sua regra.
- Artefato tecnico observado: \- TMOV
- Artefato tecnico observado: \- TITMMOV

#### [042] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade Atribuir valor no contexto do Assinante/Movimento
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Atribuir-valor-no-contexto-do-Assinante-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Atribuir-valor-no-contexto-do-Assinante-Movimento)
- Data: 9 de abril de 2025 às 16:08
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como funciona a atividade Atribuir valor no contexto do Assinante/Movimento ?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico observado: \- TMOV
- Artefato tecnico observado: \- TITMMOV

#### [043] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade "Consulta valor no contexto do Movimento(Assinante)"
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022504952-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Consulta-valor-no-contexto-do-Movimento-Assinante](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022504952-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Consulta-valor-no-contexto-do-Movimento-Assinante)
- Data: 9 de abril de 2025 às 16:06
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como funciona a atividade Consulta valor no contexto do Movimento (Assinante)?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico observado: \- TMOV
- Artefato tecnico observado: \- TITMMOV

#### [044] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Percorrer os itens de movimento utilizando as atividades no contexto de assinante
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Percorrer-os-itens-de-movimento-utilizando-as-atividades-no-contexto-de-assinante](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Percorrer-os-itens-de-movimento-utilizando-as-atividades-no-contexto-de-assinante)
- Data: 9 de abril de 2025 às 16:05
- Eixo de resposta: movimento, compras, estoque, objetos-gerenciais
- Gatilhos uteis: movimento, estoque, formula visual, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como percorrer os itens de movimento utilizando as atividades no contexto de assinante?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Exemplo de uma fórmula visual que edita o Campo Livre do item de movimento. https://totvssuporte.zendesk.com/hc/article attachments/360019983852/Exemplo.zip

#### [045] Zendesk TOTVS
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://totvs.fluigidentity.com/cloudpass/?forward=%2Flaunchpad%2FlaunchApp%2F0w68h87llm8e2rp41463690860303%2Fzf0y84vo717g8hjx%3FRelayState%3Dhttps%253A%252F%252Fatendimento.totvs.com%252Fhc%252Farticle_attachments%252F360019983852%252FExemplo.zip%26brand_id%3D753138%26SAMLRequest%3DfZFPT8JAEMXvfIpm79t2lxZkQ0saiEkTNAbUg7d1O4TG%252FVN3toh%252BekOVBA94%250AnXm%252FvDdv5ouj0dEBPLbOFoTFKVmUozlKoztR9WFvN%252FDeA4boaLRFMSwK0nsr%250AnMQWhZUGUAQlttXdWvA4FZ13wSmnyQXyPyERwYfWWRLVq4KcAE%252FH4%252BnrjOeK%250AzmTGaJZPd1SyRlEGk5s8U1OuZopENWIPtcUgbSgIT%252FmEppzy6SPLRcoFy15I%250A9Hy%252Bjscpiaqz2dJZ7A34LfhDq%252BBpsy7IPoQORZIEFw6Ifed8gPgLbAP4Fitn%250AEqkUICaniKQcahJDBF9eQ%252BbJpeq32XtpoF49ON2qz6jS2n0sPcgABQm%252BBxLd%250AOm9kuN4ai9kwaRu6G6QCjGx11TQeEElS%252Frj%252BfWE5%252BgY%253D%250A](https://totvs.fluigidentity.com/cloudpass/?forward=%2Flaunchpad%2FlaunchApp%2F0w68h87llm8e2rp41463690860303%2Fzf0y84vo717g8hjx%3FRelayState%3Dhttps%253A%252F%252Fatendimento.totvs.com%252Fhc%252Farticle_attachments%252F360019983852%252FExemplo.zip%26brand_id%3D753138%26SAMLRequest%3DfZFPT8JAEMXvfIpm79t2lxZkQ0saiEkTNAbUg7d1O4TG%252FVN3toh%252BekOVBA94%250AnXm%252FvDdv5ouj0dEBPLbOFoTFKVmUozlKoztR9WFvN%252FDeA4boaLRFMSwK0nsr%250AnMQWhZUGUAQlttXdWvA4FZ13wSmnyQXyPyERwYfWWRLVq4KcAE%252FH4%252BnrjOeK%250AzmTGaJZPd1SyRlEGk5s8U1OuZopENWIPtcUgbSgIT%252FmEppzy6SPLRcoFy15I%250A9Hy%252Bjscpiaqz2dJZ7A34LfhDq%252BBpsy7IPoQORZIEFw6Ifed8gPgLbAP4Fitn%250AEqkUICaniKQcahJDBF9eQ%252BbJpeq32XtpoF49ON2qz6jS2n0sPcgABQm%252BBxLd%250AOm9kuN4ai9kwaRu6G6QCjGx11TQeEElS%252Frj%252BfWE5%252BgY%253D%250A)
- Data: nao informada no artigo convertido
- Eixo de resposta: geral
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como contextual e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: [Conteúdo não encontrado ou vazio]
- Evidencia inicial: ---

#### [046] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como executar relatório via Gerador Delphi
- Arquivo-base: Objetos_Gerenciais.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004086191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-executar-relat%C3%B3rio-via-Gerador-Delphi](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004086191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-executar-relat%C3%B3rio-via-Gerador-Delphi)
- Data: 9 de abril de 2025 às 16:05
- Eixo de resposta: compras, estoque, objetos-gerenciais
- Gatilhos uteis: estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como executar relatório via Gerador Delphi?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80
- Evidencia inicial: Solução Para solucionar essa dúvida, realize os seguintes passos:
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80
- Artefato tecnico observado: É necessário que o relatório esteja configurado para ser executado em Job Server

#### [047] Contabilidade (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Evidencia inicial: - Utiliza Evento do Tipo de Movimento: Por esta opção o evento contábil será buscado diretamente no tipo de movimento.
- Menu, etapa, alias ou job citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [048] Integração de Contratos
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938836](https://tdn.totvs.com/pages/releaseview.action?pageId=423938836)
- Data: nao informada no artigo convertido
- Eixo de resposta: contratos
- Gatilhos uteis: contrato
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Esta opção tem a finalidade de vincular um item de movimento a um contrato ou a um item de contrato. Escolha, na lista de opções a desejada:
- Evidencia inicial: - Não relacionar : Os itens incluídos para o tipo de movimento não serão relacionados a nenhum contrato.
- Evidencia inicial: - Editar Contrato (somente do cliente) : Poderá relacionar um movimento a um determinado contrato deste que seja do mesmo Cliente.
- Evidencia inicial: - Editar Contrato (Todos os Contratos) : Poderá relacionar um movimento a um determinado contrato.
- Menu, etapa, alias ou job citado: - Editar Contrato (Todos os Contratos) : Poderá relacionar um movimento a um determinado contrato.
- Menu, etapa, alias ou job citado: Exemplo : Vamos supor que tem um contrato cadastrado através do menu Contratos / Manutenção de Contratos , e alguma despesa extra contrato deve ser cobrada do cliente, porém deve ser faturada separadamente, desta forma, ao informarmos que nos itens deste tipo de movimento o contrato poderá ser editado, significa que ao incluirmos o item, ao indicarmos o número do contrato saberemos que aquela despesa, cobrada do cliente é referente a despesas daquele contrato.
- Menu, etapa, alias ou job citado: Relacionar com item de Contrato : Escolhendo esta opção poderá incluir movimentos referentes a um contrato diretamente, ou seja, através do menu Movimentos, desta forma, ao indicar o item no movimento, você informará o período inicial e final de faturamento deste, assim, ao faturar um contrato através do menu Contratos / Faturamento por Lote, o sistema verificará se para o cliente, para a data de faturamento já existe um movimento com aquele item de contrato.

#### [049] Fiscal (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938168](https://tdn.totvs.com/pages/releaseview.action?pageId=423938168)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao, fiscal
- Gatilhos uteis: fiscal
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: -
- Menu, etapa, alias ou job citado: - Este campo só aparecerá se houver integração TOTVS Gestão de Estoques, Compras e Faturamento/TOTVS Gestão Fiscal.
- Menu, etapa, alias ou job citado: - Se você trabalha com integração TOTVS Gestão de Estoques, Compras e Faturamento/RM Líber , deve-se verificar a necessidade de confirmar a utilização da seleção da natureza por item caso exista em um mesmo movimento - Nota Fiscal de Entrada e ou Saída situações tributárias diferentes. Em caso afirmativo, na inclusão do movimento, o sistema irá apresentar e ou selecionar automaticamente (de acordo com as regras de seleção dada a Natureza), o campo "Natureza da Operação" para que se faça a relação entre o item e a sua Natureza Fiscal.
- Menu, etapa, alias ou job citado: - No momento da escrituração dos movimentos, ou seja, da exportação para o TOTVS Gestão Fiscal, o TOTVS Gestão de Estoques, Compras e Faturamento irá exportar parcelas fiscais tantas quantas as naturezas analíticas do item (natureza de último nível). Caso exista no mesmo movimento produtos de uma mesma natureza, esses serão agrupados para geração de uma mesma parcela fiscal. Se este parâmetro estiver desabilitado, a Natureza dos itens do movimento será igual a Natureza do movimento.
- Menu, etapa, alias ou job citado: Observações : O TOTVS Gestão de Estoques, Compras e Faturamento emite cupom para as impressoras fiscais de marca Bematech, modelos:

#### [050] Manutenção (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938077](https://tdn.totvs.com/pages/releaseview.action?pageId=423938077)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Integrar objeto de oficina ao item de movimento: Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.
- Evidencia inicial: Integração por API de Reporte: Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: Reporte de Itens Atendidos.
- Evidencia inicial: Na tela de parâmetros - Manutenção é possível escolher se o tipo de movimento selecionado terá integração com a API de Reporte, e qual fórmula poderá ser utilizado no valor reportado.
- Evidencia inicial: Para selecionar a integração basta marcar o Checkbox referente a ela.
- Menu, etapa, alias ou job citado: Integrar objeto de oficina ao item de movimento: Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.
- Menu, etapa, alias ou job citado: Integração por API de Reporte: Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: Reporte de Itens Atendidos.
- Menu, etapa, alias ou job citado: Na tela de parâmetros - Manutenção é possível escolher se o tipo de movimento selecionado terá integração com a API de Reporte, e qual fórmula poderá ser utilizado no valor reportado.
- Menu, etapa, alias ou job citado: Para selecionar a integração basta marcar o Checkbox referente a ela.

#### [051] Patrimônio (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938845](https://tdn.totvs.com/pages/releaseview.action?pageId=423938845)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Integrar TOTVS Gestão Patrimonial: As opções para este campo para movimentos de Entrada são:
- Evidencia inicial: - Não Integrado: Os itens deste tipo de movimento não serão ativos imobilizados.
- Evidencia inicial: - Compra de Imobilizado: Os itens deste movimento serão ativos imobilizados. Desta forma, ao realizar a integração deste movimento no TOTVS Gestão Patrimonial, serão gerados automaticamente os respectivos bens de acordo com as opções de integração do TOTVS Gestão Patrimonial. Para que este processo ocorra será necessário: inicialmente incluir o movimento no TOTVS Gestão de Estoques, Compras e Faturamento. Logo após, deve-se indicar no TOTVS Gestão Patrimonial, menu Utilitários/Integrações/Integração TOTVS Gestão de Estoques, Compras e Faturamento as opções de integração para a geração de bens.
- Evidencia inicial: - Retorno de Imobilizado: Os itens deste movimento serão retorno de imobilizados.
- Menu, etapa, alias ou job citado: - Compra de Imobilizado: Os itens deste movimento serão ativos imobilizados. Desta forma, ao realizar a integração deste movimento no TOTVS Gestão Patrimonial, serão gerados automaticamente os respectivos bens de acordo com as opções de integração do TOTVS Gestão Patrimonial. Para que este processo ocorra será necessário: inicialmente incluir o movimento no TOTVS Gestão de Estoques, Compras e Faturamento. Logo após, deve-se indicar no TOTVS Gestão Patrimonial, menu Utilitários/Integrações/Integração TOTVS Gestão de Estoques, Compras e Faturamento as opções de integração para a geração de bens.
- Menu, etapa, alias ou job citado: Observações : Estes campos só aparecerão se existir integração com o TOTVS Gestão Patrimonial.
- Menu, etapa, alias ou job citado: - Para que haja a perfeita integração, é necessário que no cadastro de produtos, informe o Grupo de Contas do TOTVS Gestão Patrimonial, ao qual o produto a ser integrado pertence (isto vai indicar que este produto é um bem no TOTVS Gestão Patrimonial).
- Menu, etapa, alias ou job citado: - Desta forma, após realizar a integração no TOTVS Gestão Patrimonial dos movimentos gerados pelo TOTVS Gestão de Estoques, Compras e Faturamento, o sistema não permitirá a alteração nem exclusão de tais movimentos. Isto será possível somente se os bens forem excluídos no TOTVS Gestão Patrimonial.

#### [052] Projeto (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938857](https://tdn.totvs.com/pages/releaseview.action?pageId=423938857)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Informar Projeto/Tarefa:
- Evidencia inicial: - Não informar: selecione esta opção para que campo 'Projeto' não seja apresentado na pasta Integração do movimento.
- Evidencia inicial: - Obrigatório por Movimento: selecione esta opção para que o campo 'Projeto' seja apresentado na pasta Integrações no movimento. Este aparecerá no movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o movimento sem que este campo esteja informado.
- Evidencia inicial: - Opcional por Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integrações no movimento, para que informe para qual projeto do TOTVS Construção e Projetos estará sendo inserido na movimentação.
- Menu, etapa, alias ou job citado: - Não informar: selecione esta opção para que campo 'Projeto' não seja apresentado na pasta Integração do movimento.
- Menu, etapa, alias ou job citado: - Obrigatório por item de Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integração no item de movimento. Este aparecerá no item do movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o item do movimento sem que este campo esteja informado.
- Menu, etapa, alias ou job citado: - Opcional por item de Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integração no item do movimento, para que informe para qual 'Projeto' e 'Tarefa' do TOTVS Construção e Projetos está sendo inserida no item da movimentação.
- Menu, etapa, alias ou job citado: Observações : Este campo só aparecerá se o TOTVS Construção e Projetos estiver instalado na máquina. - Marcando esta opção, a numeração do movimento, na pasta identificação/Características do mesmo tipo de movimento tem que ser "Mostra". - Caso habilite a opção de informar projetos por item, poderá faturar para uma única nota várias Ordens de Compras, independente do projeto.

#### [053] Recursos Humanos (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938854](https://tdn.totvs.com/pages/releaseview.action?pageId=423938854)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Movimento gera controles de EPI no TOTVS Gestão de Pessoas:
- Evidencia inicial: - Não Integrado: Não utilizará a integração.
- Evidencia inicial: - Compras: Realizar acréscimo em estoque.
- Evidencia inicial: - Empréstimos: Realiza empréstimos EPI (Apenas efetuado pelo TOTVS Gestão de Pessoas).
- Menu, etapa, alias ou job citado: - Não Integrado: Não utilizará a integração.
- Menu, etapa, alias ou job citado: - Compras: Realizar acréscimo em estoque.
- Menu, etapa, alias ou job citado: - Baixa de EPI: Baixa o estoque.
- Menu, etapa, alias ou job citado: - Quando o usuário configurar o tipo de movimento para realizar a integração, automaticamente o TOTVS Gestão de Estoques, Compras e Faturamento fará as devidas consistências em alguns parâmetros do tipo de movimento, para garantir a compatibilidade.

#### [054] WorkFlow Fluig (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938700](https://tdn.totvs.com/pages/releaseview.action?pageId=423938700)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao, fluig
- Gatilhos uteis: workflow fluig
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Aprovação: Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:
- Evidencia inicial: - Não Utiliza: a aprovação pelo Fluig não é habilitada.
- Evidencia inicial: - Utiliza no Faturamento: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser faturados.
- Evidencia inicial: - Utiliza na Cotação: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser selecionados ao se criar uma nova cotação.
- Menu, etapa, alias ou job citado: Aprovação: Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:
- Menu, etapa, alias ou job citado: - Não Utiliza: a aprovação pelo Fluig não é habilitada.
- Menu, etapa, alias ou job citado: - Utiliza no Faturamento: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser faturados.
- Menu, etapa, alias ou job citado: - Utiliza na Cotação: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser selecionados ao se criar uma nova cotação.

#### [055] Biblioteca (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938238](https://tdn.totvs.com/pages/releaseview.action?pageId=423938238)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tipo de Integração com TOTVS Gestão Bibliotecária:
- Evidencia inicial: Através dessa integração será possível solicitar compra de exemplares através do TOTVS Gestão Bibliotecária, faturar o movimento no TOTVS Gestão de Estoques, Compras e Faturamento e então verificar o novo saldo de Exemplares no TOTVS Gestão Bibliotecária.
- Evidencia inicial: As parametrizações disponíveis são:
- Evidencia inicial: - Não integrado : O sistema não realizará a integração;
- Menu, etapa, alias ou job citado: Tipo de Integração com TOTVS Gestão Bibliotecária:
- Menu, etapa, alias ou job citado: Através dessa integração será possível solicitar compra de exemplares através do TOTVS Gestão Bibliotecária, faturar o movimento no TOTVS Gestão de Estoques, Compras e Faturamento e então verificar o novo saldo de Exemplares no TOTVS Gestão Bibliotecária.
- Menu, etapa, alias ou job citado: - Não integrado : O sistema não realizará a integração;
- Menu, etapa, alias ou job citado: - Solicitação de Compras : Parametrizar em um movimento de Solicitação de Compras;

#### [056] Integração Mensagem Única (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=493625821](https://tdn.totvs.com/pages/releaseview.action?pageId=493625821)
- Data: nao informada no artigo convertido
- Eixo de resposta: parametrizacao
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Mensagem de Integração : Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:
- Evidencia inicial: - Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção Integração com SigaMNT ou
- Evidencia inicial: - Integração Quirons x BackOffice RM
- Evidencia inicial: - BackOffice Protheus x Educacional RM.
- Menu, etapa, alias ou job citado: Mensagem de Integração : Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:
- Menu, etapa, alias ou job citado: - Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção Integração com SigaMNT ou
- Menu, etapa, alias ou job citado: - Integração Quirons x BackOffice RM
- Menu, etapa, alias ou job citado: - Solicitação de Compra: Utilizado na Integração Obras e Projetos x BackOffice Protheus.

#### [057] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Integração File Repo
- Arquivo-base: Parametrização.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24414976361623-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Integra%C3%A7%C3%A3o-File-Repo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24414976361623-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Integra%C3%A7%C3%A3o-File-Repo)
- Data: 10 de setembro de 2024 às 15:19
- Eixo de resposta: compras, estoque
- Gatilhos uteis: parametrizacao, estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como utilizar o FileRepo no Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2402 e superiores.
- Evidencia inicial: Solução A funcionalidade de armazenamento de arquivos FileRepo foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- Menu, etapa, alias ou job citado: Dúvida Como utilizar o FileRepo no Gestão de Estoque, Compras e Faturamento?
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2402 e superiores.
- Menu, etapa, alias ou job citado: No módulo Gestão de Estoque, Compras e Faturamento , essa funcionalidade está disponível nas seguintes telas:
- Menu, etapa, alias ou job citado: 1. Acesse o módulo Serviços Globais \ Segurança Perfis Sistema: Gestão de Estoque, Compras e Faturamento Acesso a Menus e atribua a permissão \[13.03\] Repositório de Arquivos:

#### [058] File Repo - TOTVS Backoffice (Linha RM)
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=821187457](https://tdn.totvs.com/pages/releaseview.action?pageId=821187457)
- Data: nao informada no artigo convertido
- Eixo de resposta: geral
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- Evidencia inicial: Confira abaixo em quais telas dos produtos TOTVS Backoffice - Linha RM o recurso está disponível.

#### [059] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Job Agendado executa sempre o mesmo registro
- Arquivo-base: Parametrização.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409306337943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Job-Agendado-executa-sempre-o-mesmo-registro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409306337943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Job-Agendado-executa-sempre-o-mesmo-registro)
- Data: 1 de agosto de 2022 às 12:10
- Eixo de resposta: compras, estoque
- Gatilhos uteis: parametrizacao, estoque, compras, faturamento
- Postura segura: trate como integracao-ou-automacao e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00 :01:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o agendamento do um JOB este é executado sempre para os mesmo registros todas as vezes.
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico observado: Ao realizar o agendamento do um JOB este é executado sempre para os mesmo registros todas as vezes.
- Artefato tecnico observado: Esse incidente ocorre pois o JOB agendado necessita da seleção do registro a ser processado.
- Artefato tecnico observado: Uma vez que o registro precisa ser selecionado a execução do processo depende da ação de um usuário e o agendamento deste não possibilitará tal ação fazendo com que o JOB seja executado sempre para o registro selecionado no momento do agendamento.

#### [060] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Data: nao informada no artigo convertido
- Eixo de resposta: geral
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [061] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - A unidade está incompatível quando o tipo de movimento é integrado com o RM Vitae
- Arquivo-base: Parametrização.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025809531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-A-unidade-est%C3%A1-incompat%C3%ADvel-quando-o-tipo-de-movimento-%C3%A9-integrado-com-o-RM-Vitae](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025809531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-A-unidade-est%C3%A1-incompat%C3%ADvel-quando-o-tipo-de-movimento-%C3%A9-integrado-com-o-RM-Vitae)
- Data: 19 de julho de 2023 às 15:29
- Eixo de resposta: movimento, compras, estoque
- Gatilhos uteis: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Postura segura: trate como fora e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Evidencia inicial: Causa
- Menu, etapa, alias ou job citado: Ocorrência Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [062] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Etapas de Integração desabilitadas nos Parâmetros do Tipo de Movimento
- Arquivo-base: Parametrização.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022405631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Etapas-de-Integra%C3%A7%C3%A3o-desabilitadas-nos-Par%C3%A2metros-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022405631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Etapas-de-Integra%C3%A7%C3%A3o-desabilitadas-nos-Par%C3%A2metros-do-Tipo-de-Movimento)
- Data: 1 de agosto de 2022 às 17:21
- Eixo de resposta: movimento, parametrizacao, compras, estoque
- Gatilhos uteis: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Evidencia inicial: Causa
- Menu, etapa, alias ou job citado: Ocorrência Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa, alias ou job citado: Esse incidente ocorre porque em Parâmetros Integrações de Sistemas as integrações entre o Nucleus e os demais módulos não estão ativas.
- Menu, etapa, alias ou job citado: 1- No módulo Gestão de Estoque, Compras e Faturamento, acesse menu Ambiente | Parâmetros | Integrações de Sistemas e remarque as integrações RM FLUXUS X RM NUCLEUS, RM NUCLEUS X RM FLUXUS, RM SALDUS X RM NUCLEUS, RM NUCLEUS X RM SALDUS, RM LIBER X RM NUCLEUS e RM NUCLEUS X RM LIBER conforme evidência abaixo.
- Artefato tecnico observado: 3\. No diretório de instalação do RM (totvs\\RM.Net), localize o arquivo RM.Host.ServiceManager.exe e desinstale o host, marcando a flag "Apagar \ Broker.dat".
- Artefato tecnico observado: 4. Reinicie o host, acesse o sistema novamente e verifique se as etapas de integração serão habilitadas nos parâmetros do tipo de movimento.

#### [063] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Data: nao informada no artigo convertido
- Eixo de resposta: geral
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [064] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Data: nao informada no artigo convertido
- Eixo de resposta: geral
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [065] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Integração Financeira/Valores Opcionais
- Arquivo-base: Parametrização.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008503488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Integra%C3%A7%C3%A3o-Financeira-Valores-Opcionais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008503488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Integra%C3%A7%C3%A3o-Financeira-Valores-Opcionais)
- Data: 14 de janeiro de 2022 às 08:24
- Eixo de resposta: compras, estoque
- Gatilhos uteis: parametrizacao, estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Para que o lançamento financeiro possa conter valores adicionais oriundos de campos existentes no movimento inserido via TOTVS Gestão de Estoque, Compras e Faturamento, deve-se utilizar a opção de Valores Opcionais .
- Evidencia inicial: Ambiente
- Menu, etapa, alias ou job citado: Para que o lançamento financeiro possa conter valores adicionais oriundos de campos existentes no movimento inserido via TOTVS Gestão de Estoque, Compras e Faturamento, deve-se utilizar a opção de Valores Opcionais .
- Menu, etapa, alias ou job citado: Ambiente
- Menu, etapa, alias ou job citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa, alias ou job citado: Acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações (04.03)| Financeira (04.03.01) | Contas a Pagar | Valores opcionais .

#### [066] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md
- Caminho documental: nao informado no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Data: nao informada no artigo convertido
- Eixo de resposta: geral
- Gatilhos uteis: sem gatilho extraido do titulo
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.

#### [067] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Melhoria de Performance do Sistema
- Arquivo-base: Utilitários.md
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Utilitários
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038643114--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Melhoria-de-Performance-do-Sistema](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038643114--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Melhoria-de-Performance-do-Sistema)
- Data: 15 de dezembro de 2021 às 16:45
- Eixo de resposta: compras, estoque
- Gatilhos uteis: estoque, compras, faturamento
- Postura segura: trate como nucleus-forte e sempre verifique ambiente, identidade, parametro e processo antes de propor ajuste tecnico.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Quais ferramentas e técnicas podem ser utilizadas para melhoria de performance do sistema?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - A partir da versão 12.1.8.
- Evidencia inicial: Solução O sistema possui algumas ferramentas que são utilizadas para melhoria de performance.
- Menu, etapa, alias ou job citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - A partir da versão 12.1.8.
- Menu, etapa, alias ou job citado: 1. Executar processo de reindexação da base (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Menu, etapa, alias ou job citado: 2. Atualizar Estatísticas da base (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Menu, etapa, alias ou job citado: 3. Desabilitado todas as Trigger's da base (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Artefato tecnico observado: 5. Feito limpeza de tabelas de Job (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada).
<!-- AUTO-GENERATED END: INTEGRATION-DETAIL -->

<!-- AUTO-GENERATED START: INTEGRATION-DETAIL-EXTRA -->
## Apêndice complementar de evidências e headings

Este segundo apêndice aprofunda os arquivos de integração com duas saídas adicionais: um inventário linear de headings por arquivo e mais linhas brutas aproveitáveis por artigo.

### Heading dump: Integração_Com_Fluig.md

- H001: ## Sumário
- H002: ## 1\. Objetivo
- H003: ## 2\. Benefícios
- H004: ## 3. Ambiente de Negócio
- H005: ### 3.1 Segmento
- H006: ### 3.2 Áreas de Negócios
- H007: ### 3.3 Processo Workflow
- H008: ### 3.4. Atividades do Processo
- H009: ### 3.5. Regras de Negócio
- H010: #### 3.5.1. Inclusão de Movimento
- H011: #### 3.5.2. Alteração de Movimento
- H012: #### 3.5.3.Cancelamento de movimento
- H013: #### 3.5.4. Estorno de Item Não Recebido
- H014: #### 3.5.5.Faturamento do Movimento
- H015: #### 3.5.6. Conclusão de Pedido
- H016: #### 3.5.7. Outros Processos
- H017: #### 3.5.8.Formulário do Workflow
- H018: #### 3.5.9.Visão do Movimento e Itens de Movimento
- H019: #### 3.5.10.Avanço Automático do Estado Inicial
- H020: ## 4\. Como Utilizar
- H021: ### 4.1. Iniciando Processo BPM pelo RM
- H022: ### 4.2. Movimentando e Consultando Processo BPM pelo Fluig
- H023: ### 4.3. Vídeo Demonstrativo
- H024: ## 5\. Como Instalar
- H025: ### 5.1. Fluig
- H026: #### a) Instalar o ambiente de Desenvolvimento Fluig
- H027: #### b) Buscar os Arquivos para Instalação do Processo BPM
- H028: #### c) Abrir o Arquivo do Instalação do Processo BPM no TDS
- H029: #### d) Componentes dos Processos BPM
- H030: #### e) Envio do Processo BPM para o Fluig
- H031: ### 5.2. ERP RM
- H032: #### a) Configurar nos parâmetros globais do sistema
- H033: #### b) Configurar os parâmetros de Tipo de Movimento
- H034: #### c) Importação da Consulta SQL
- H035: ## 6.Considerações
- H036: ## 1\. Objetivo
- H037: ## 2\. Benefícios
- H038: ## 3. Ambiente de Negócio
- H039: ### 3.1 Segmento
- H040: ### 3.2 Áreas de Negócios
- H041: ### 3.3 Processo Workflow
- H042: ### 3.4. Atividades do Processo
- H043: ### 3.5. Regras de Negócio
- H044: #### 3.5.1. Inclusão de Movimento
- H045: #### 3.5.2. Alteração de Movimento
- H046: #### 3.5.3.Cancelamento de movimento
- H047: #### 3.5.4. Estorno de Item Não Recebido
- H048: #### 3.5.5.Faturamento do Movimento
- H049: #### 3.5.6. Conclusão de Pedido
- H050: #### 3.5.7. Outros Processos
- H051: #### 3.5.8.Formulário do Workflow
- H052: #### 3.5.9.Visão do Movimento e Itens de Movimento
- H053: #### 3.5.10.Avanço Automático do Estado Inicial
- H054: ## 4\. Como Utilizar
- H055: ### 4.1. Iniciando Processo BPM pelo RM
- H056: ### 4.2. Movimentando e Consultando Processo BPM pelo Fluig
- H057: ### 4.3. Vídeo Demonstrativo
- H058: ## 5\. Como Instalar
- H059: ### 5.1. Fluig
- H060: #### a) Instalar o ambiente de Desenvolvimento Fluig
- H061: #### b) Buscar os Arquivos para Instalação do Processo BPM
- H062: #### c) Abrir o Arquivo do Instalação do Processo BPM no TDS
- H063: #### d) Componentes dos Processos BPM
- H064: #### e) Envio do Processo BPM para o Fluig
- H065: ### 5.2. ERP RM
- H066: #### a) Configurar nos parâmetros globais do sistema
- H067: #### b) Configurar os parâmetros de Tipo de Movimento
- H068: #### c) Importação da Consulta SQL
- H069: ## 6.Considerações

### Heading dump: Integração_Com_Totvs_Colaboração.md

- H001: ## Sumário
- H002: ## Atenção principalmente a estes documentos abaixo:
- H003: ## Informações Gerais
- H004: ## Objetivo
- H005: ## Definição da Regra de Negócio
- H006: ### 1\. Cadastros
- H007: ### 1.1. Natureza Fiscal (CFOP)
- H008: ### 1.1.1. Regra de Seleção da Natureza (RSN)
- H009: ### 1.1.1.1. Seleção Automática da Natureza por Movimento
- H010: ### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento
- H011: ### 1.1.2. Natureza Inversa
- H012: ### 1.2. Produtos
- H013: ### 1.3. Unidades
- H014: ### 2\. Parametrização
- H015: ### 3\. Importação e Gravação do XML
- H016: ### 3.1. Importação de Arquivos XML
- H017: ### 3.2. Serviço de Consulta de Arquivo XML
- H018: ### 4\. Inclusão de Movimento Através de XML - NF-e
- H019: ## Tabelas Utilizadas:
- H020: ## Informações Gerais
- H021: ## Objetivo
- H022: ## Definição da Regra de Negócio
- H023: ### 1.1. Natureza Fiscal (CFOP)
- H024: ### 1.1.1. Regra de Seleção da Natureza (RSN)
- H025: ### 1.1.1.1. Seleção Automática da Natureza por Movimento
- H026: ### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento
- H027: ### 1.1.2. Natureza Inversa
- H028: ### 1.2. Unidade de Medida
- H029: ### 1.3 Coligada e Filial
- H030: ### 2\. Parametrização
- H031: ### 3\. Importação e Gravação do XML
- H032: ### 3.1. Importação de Arquivos XML
- H033: ### 3.2. Serviço de Consulta de Arquivo XML
- H034: ### 4\. Inclusão de Movimento Através de XML - CT-e
- H035: ## Tabelas Utilizadas:
- H036: ## Informações sobre recebimento de Cancelamento de CT-e:
- H037: ## 
- H038: ## Características do Requisito
- H039: ## Descrição
- H040: ## Procedimento para Implantação
- H041: ## Procedimento para Utilização
- H042: ## Características do Requisito
- H043: ## Descrição
- H044: ## Procedimento para Utilização
- H045: ### 1\. Parametrização
- H046: ### 1.1. Tipo de Recebimento de NF-e
- H047: ### 1.2. Fórmula do Tipo de Movimento para Recebimento de NF-e
- H048: ### 1.3. Parametrização de Local de Estoque e Condição de Pagamento
- H049: ### 2\. Cadastros
- H050: ### 2.1. Natureza Fiscal (CFOP)
- H051: ### 2.1.1. Regra de Seleção da Natureza (RSN)
- H052: ### 2.1.1.1. Seleção Automática da Natureza por Movimento
- H053: ### 2.1.1.2. Seleção Automática da Natureza por Item de Movimento
- H054: ### 2.1.2. Natureza Inversa
- H055: ### 2.2. Produtos
- H056: ### 2.3. Unidades
- H057: ### 3\. Recebimento Automático da NFe
- H058: ### 3.1. Importação de Arquivos - Totvs Colaboração
- H059: ### 3.2. Serviço Totvs Colaboração Consulta
- H060: ### 3.2.1. Tradução dos Dados do Arquivo XML
- H061: #### 3.2.1.1. Identificação dos Produtos
- H062: #### 3.2.1.2. Identificação das Unidades de Medida
- H063: #### 3.2.1.3. Identificação dos CFOP
- H064: ### 3.2.2. Identificação do Pedido de Compra
- H065: ### 3.2.2. Identificação do Pedido de Compra
- H066: ### 3.2.3. Identificação do Tipo de Recebimento NF-e
- H067: #### 3.2.3.1. Inclusão de Movimento Através do Pedido:
- H068: #### 3.2.3.2. Inclusão de Movimento Sem Pedido:
- H069: #### 3.2.3.3. Inclusão de Movimento Com ou Sem Pedido:
- H070: #### 3.2.3.4. Inclusão de Movimento Com Status Não Processado:
- H071: ### 4\. Processar Movimento - Totvs Colaboração
- H072: ## Características do Requisito
- H073: ## Descrição
- H074: ## Procedimento para Utilização
- H075: ### 1\. Parametrização
- H076: ### 1.1. Tipo de Recebimento de NF-e
- H077: ### 1.2. Fórmula do Tipo de Movimento para Recebimento de NF-e
- H078: ### 1.3. Parametrização de Local de Estoque e Condição de Pagamento
- H079: ### 2\. Cadastros
- H080: ### 2.1. Natureza Fiscal (CFOP)
- H081: ### 2.1.1. Regra de Seleção da Natureza (RSN)
- H082: ### 2.1.1.1. Seleção Automática da Natureza por Movimento
- H083: ### 2.1.1.2. Seleção Automática da Natureza por Item de Movimento
- H084: ### 2.1.2. Natureza Inversa
- H085: ### 2.2. Produtos
- H086: ### 2.3. Unidades
- H087: ### 3\. Recebimento Automático da NFe
- H088: ### 3.1. Importação de Arquivos - Totvs Colaboração
- H089: ### 3.2. Serviço Totvs Colaboração Consulta
- H090: ### 3.2.1. Tradução dos Dados do Arquivo XML
- H091: #### 3.2.1.1. Identificação dos Produtos
- H092: #### 3.2.1.2. Identificação das Unidades de Medida
- H093: #### 3.2.1.3. Identificação dos CFOP
- H094: ### 3.2.2. Identificação do Pedido de Compra
- H095: ### 3.2.2. Identificação do Pedido de Compra
- H096: ### 3.2.3. Identificação do Tipo de Recebimento NF-e
- H097: #### 3.2.3.1. Inclusão de Movimento Através do Pedido:
- H098: #### 3.2.3.2. Inclusão de Movimento Sem Pedido:
- H099: #### 3.2.3.3. Inclusão de Movimento Com ou Sem Pedido:
- H100: #### 3.2.3.4. Inclusão de Movimento Com Status Não Processado:
- H101: ### 4\. Processar Movimento - Totvs Colaboração
- H102: ## Informações Gerais
- H103: ## Objetivo
- H104: ## Definição da Regra de Negócio
- H105: ### 1\. Cadastros
- H106: ### 1.1. Natureza Fiscal (CFOP)
- H107: ### 1.1.1. Regra de Seleção da Natureza (RSN)
- H108: ### 1.1.1.1. Seleção Automática da Natureza por Movimento
- H109: ### 1.1.1.2. Seleção Automática da Natureza por Item de Movimento
- H110: ### 1.1.2. Natureza Inversa
- H111: ### 1.2. Produtos
- H112: ### 1.3. Unidades
- H113: ### 2\. Parametrização
- H114: ### 3\. Importação e Gravação do XML
- H115: ### 3.1. Importação de Arquivos XML
- H116: ### 3.2. Serviço de Consulta de Arquivo XML
- H117: ### 4\. Inclusão de Movimento Através de XML - NF-e
- H118: ## Tabelas Utilizadas:

### Heading dump: Objetos_Gerenciais.md

- H001: ## Sumário

### Heading dump: Utilitários.md

- H001: ## Sumário

### Heading dump: Parametrização.md

- H001: ## Sumário
- H002: ## 🔎 Buscar na Página
- H003: ## 📃 Documentos de Referência
- H004: ## ❗ Saiba Mais
- H005: ## 🔒 Documentação LGPD
- H006: ### A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- H007: ### Confira abaixo em quais telas dos produtos TOTVS Backoffice - Linha RM o recurso está disponível.

### Linhas documentais adicionais por artigo

#### Extra [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar Movimento: Não foi possível cancelar Workflow Fluig para este movimento
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Ao cancelar um Movimento que possui Integração Workflow Fluig é apresentado mensagem: Não foi possível cancelar Workflow Fluig para este movimento Usuário não é o usuário requisitante ou gestor do processo. Não será possível cancelar a solicitação!
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Essa mensagem é exibida pois não foi definido um usuário específico para ser utilizado no cancelamento de Workflows no Fluig .
- Linha reaproveitavel: A regra do Fluig é permitir a exclusão/cancelamento da solicitação apenas pelo criador ou por um usuário administrador do processo . Desta forma, mesmo que um usuário tenha o mesmo papel do criador, ele não pode cancelar pois não é o gestor do processo nem o criador.
- Linha reaproveitavel: Com a criação desta funcionalidade, será possível informar um usuário específico para ser utilizado no cancelamento de Workflows no Fluig .
- Linha reaproveitavel: Acesse os parâmetros do Gestão de Estoque, Compras e Faturamento | Definições Gerais 3/3:

#### Extra [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao criar movimento integrado com o Fluig - Erro ao criar uma instância no Servidor do Fluig: Could not send Message
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Ao tentar criar um movimento com integração Fluig utilizando o Fluxo Padrão, é apresentado a mensagem abaixo: Erro ao criar uma instância no Servidor do Fluig: Could not send Message..
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.4.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Esta mensagem ocorre devido a não autenticação do usuário informado para consumo do WebService de Consulta SQL do RM.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para poder solucionar este demanda, deverá editar o arquivo dsGetFormulaWf.js e ir até a linha 25. Caso não esteja nesta linha, procure pela linha de código abaixo:
- Linha reaproveitavel: var authService = serviceHelper.getBasicAuthenticatedClient(ws, "com.totvs.IwsConsultaSQL", 'mestre', 'totvs');

#### Extra [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitação aprovada no Fluig não aprovada no RM
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Uma solicitação foi incluída no Fluig e movimentada até um estado final de aprovação. Ao consultar a solicitação no RM, ela continua com o Status Aprovação como Não Aprovado .
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.16
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Este incidente possui duas causas prováveis.
- Linha reaproveitavel: A primeira é a configuração do parâmetro Id da Empresa Centralizadora do Workflow do Fluig .
- Linha reaproveitavel: A segunda é a configuração dos Estados de Aprovação .
- Linha reaproveitavel: Solução

#### Extra [004] Workflow Processo BPM Fluig de Aprovação de Movimento
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: - 1
- Linha reaproveitavel: - 2
- Linha reaproveitavel: - 3
- Linha reaproveitavel: - 3.1
- Linha reaproveitavel: - 3.2
- Linha reaproveitavel: - 3.3
- Linha reaproveitavel: - 3.4
- Linha reaproveitavel: - 3.5
- Linha reaproveitavel: - 3.5.1
- Linha reaproveitavel: - 3.5.2

#### Extra [005] Aprovação de Contrato por Workflow no Fluig
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: Através da integração do Fluig com o TOTVS Gestão de Estoque, Compras e Faturamento é possível realizar a aprovação de Contratos, Itens de Contrato e Medições para faturamento.
- Linha reaproveitavel: Nesse processo ao incluir ou alterar um Item de Contrato será gerado um workflow no Fluig com os dados do Contrato, Item de Contrato ou Medição, onde um usuário com papel de aprovador deve acessar o Formulário no Fluig e conforme análise dos dados aprovar ou não o workflow.
- Linha reaproveitavel: Parametrização de Integração Fluig
- Linha reaproveitavel: Para a utilização da integração com o Fluig é necessário configurar em Parâmetros | Globais |Integração Fluig informando o Endereço do Servidor do Fluig, Usuário/Senha do administrador do Fluig e Id da Empresa do Fluig.
- Linha reaproveitavel: Importante: para maiores informações sobre a instalação e configuração do Fluig, .
- Linha reaproveitavel: Parametrização de Contrato para Geração de Workflow no Fluig
- Linha reaproveitavel: Para que os Contratos possam geram workflow no Fluig o sistema deve estar parametrizado com as seguintes opções:
- Linha reaproveitavel: Parametrização Geral:
- Linha reaproveitavel: Em deve estar selecionada a opção "Usa" em "Usa Aprovação".
- Linha reaproveitavel: Geração Automática de Workflow

#### Extra [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - RM x Fluig Como alterar valor mínimo da aprovação automática
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Dúvida Como alterar o valor mínimo para aprovação automática da solicitação de compras integrada ao Fluig?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.4
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para alterar o valor padrão para aprovação automática da solicitação de compras integrada ao Fluig, basta seguir as orientações abaixo:
- Linha reaproveitavel: Após a importação do projeto padrão para o Eclipse, será necessário editar o arquivo WorkflowNucleus.beforeStateEntry.js conforme destaque abaixo:
- Linha reaproveitavel: Ao carregar o conteúdo do arquivo, a partir da linha 85, estará o código responsável por essa validação. O valor foi definido como R$10000,00, porém, pode ser alterado manualmente na linha 86 conforme pode ser visto abaixo:
- Linha reaproveitavel: Feita alteração do valor, salve o arquivo e refaça o processo no RM.
- Linha reaproveitavel: Saiba Mais
- Linha reaproveitavel: Para mais informações sobre a aprovação de solicitação de compras, acesse o link abaixo:

#### Extra [007] Workflow Processo BPM Fluig de Solicitação de Compra
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: - 1
- Linha reaproveitavel: - 2
- Linha reaproveitavel: - 3
- Linha reaproveitavel: - 3.1
- Linha reaproveitavel: - 3.2
- Linha reaproveitavel: - 3.3
- Linha reaproveitavel: - 3.4
- Linha reaproveitavel: - 3.5
- Linha reaproveitavel: - 3.5.1
- Linha reaproveitavel: - 3.5.2

#### Extra [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fluig: NOK Usuário Não Encontrado!
- Arquivo-base: Integração_Com_Fluig.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Ocorrência Ao acessar a etapa Workflow Fluig nos parâmetros do tipo de movimento ou ao tentar criar um movimento integrado ao Fluig é apresentado o erro: NOK Usuário Não Encontrado!
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: 1- Parâmetro "Id da Empresa Centralizadora do Workflow no Fluig" não definido com o "id empresa" do fluig correto
- Linha reaproveitavel: 2- Não sincronização do usuário logado durante a parametrização/inclusão.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: 1- Acessar o caminho: "Parâmetros Gestão de Estoque, Compras e Faturamento Parâmetros Gerais Definições Gerais Definições Gerais 3/3" e preencher o campo "Id da Empresa Centralizadora do Workflow no Fluig" com o ID da Empresa Fluig correto
- Linha reaproveitavel: 2- A partir do RM, existe o processo chamado Sincroniza Usuários do Corpore com o GED. Este processo irá verificar a existência dos usuários entre as plataformas e sincroniza-los caso existam.

#### Extra [009] GED - Gerenciamento Eletrônica de Documentos
- Arquivo-base: Integração_Com_Fluig.md

#### Extra [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Acompanhamento de Arquivos Recebidos
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Como acompanhar os arquivos do TOTVS Colaboração 2.0
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Acompanhamento de Arquivos Recebidos TOTVS Colaboração 2.0
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para acompanhar os arquivos recebidos, basta acessar o menu Compras | TOTVS Colaboração – Cadastro XML . Os arquivos são exibidos nesta tela automaticamente após passarem pela validação inicial, através da importação via Monitor TOTVS Colaboração.
- Linha reaproveitavel: Para importação via TOTVS Colaboração 2.0, dois status são considerados:

#### Extra [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Automatização de Importação de Arquivo XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:30 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Automatização de processos no TOTVS Colaboração .
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Os Jobs são necessários para uma verificação contínua dos arquivos contidos na pasta IN. Para a execução dos Jobs, é necessário que o ambiente esteja configurado em Três Camadas e que o Host esteja funcionando corretamente. Desta forma, ao executar o sistema, os Jobs já estarão prontos.
- Linha reaproveitavel: Para o TOTVS Colaboração, é possível realizar o agendamento dos Jobs ou executá-los manualmente. Para ambas as situações, é necessário acessar o menu Integrações | Monitor de Arquivos TOTVS Colaboração .
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Existem dois Jobs a serem executados para que os arquivos XML existentes na pasta IN sejam importados.

#### Extra [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro: Não foi possível encontrar a Coligada correspondente ao CNPJ favor verificar o cadastro de Filiais
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Ao tentar importar o XML ao sistema é apresentado a mensagem de erro: Não foi possível encontrar a Coligada correspondente ao CNPJ X, favor verificar o cadastro de Filiais.
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Essa mensagem de erro é apresentada devido o CNPJ da filial contida no XML não está cadastrada no sistema, ou não está parametrizada para a importação.
- Linha reaproveitavel: ATENÇÃO: O XML não é baseado em CNPJ de coligada.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para importação do XML, além de ter a filial cadastrada na GFILIAL é necessário acessar o menu: Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Integrações Fiscal Parâmetros por Filial Selecionar a filial e parametrizar as etapas Importação/Envio de Arquivo XML 1/2 e Importação/Envio Arquivo XML 2/2.

#### Extra [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Importação de NF-e/NFS-e/CT-e de entrada através de XML sem Parceiros
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:05:00 min
- Linha reaproveitavel: Dúvida
- Linha reaproveitavel: Como importar XML de Nota Fiscal Eletrônica de entrada gerando movimento?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: A importação de XML no ERP da linha RM é realizada pela Importação/Envio de Arquivo XML (TOTVS Colaboração) que no caso é feita por parametrizações e processos no sistema, e não pelo Neogrid/TPF. Por ele é realizado importação de XML apenas de movimentos de Entrada. Essa Importação de arquivos XML não precisa ser ativado ou ser paga a parte, nesse caso é necessário apenas parametrizar o sistema para sua utilização.
- Linha reaproveitavel: Mas vale lembrar que tal recurso funciona com ou sem integração com Parceiros (Neogrid/TPF) .
- Linha reaproveitavel: OBS:
- Linha reaproveitavel: - XML's de NFS-e (Notas Fiscais de Serviço) não serão importados sem a integração com Neogrid/TPF.

#### Extra [014] TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Linha reaproveitavel: Informações Gerais
- Linha reaproveitavel: Especificação
- Linha reaproveitavel: Produto
- Linha reaproveitavel: TOTVS Gestão de Estoque, Compras e Faturamento
- Linha reaproveitavel: Módulo
- Linha reaproveitavel: Recebimento de Materiais
- Linha reaproveitavel: Segmento Executor
- Linha reaproveitavel: Construção e Projetos
- Linha reaproveitavel: Chamado

#### Extra [015] 1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Linha reaproveitavel: Informações Gerais
- Linha reaproveitavel: Especificação
- Linha reaproveitavel: Produto
- Linha reaproveitavel: TOTVS Gestão de Estoque, Compras e Faturamento
- Linha reaproveitavel: Módulo
- Linha reaproveitavel: Recebimento de Materiais
- Linha reaproveitavel: Segmento Executor
- Linha reaproveitavel: Construção e Projetos
- Linha reaproveitavel: Chamado

#### Extra [016] Manual Totvs Colaboração 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md

#### Extra [017] MATFATCMPCRM01-2833 DT Importação de NF-e e CT-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md

#### Extra [018] Parametrização (TOTVS Colaboração 2.0)
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Primeiramente devemos parametrizar o ambiente para "TOTVS Colaboração 2.0".
- Linha reaproveitavel: Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.
- Linha reaproveitavel: Este campo deverá estar parametrizado com o tipo de movimento CT-e que será criado automaticamente à partir da entrada de um arquivo XML de recebimento de CT-e.
- Linha reaproveitavel: Somente tipos de movimento de entrada (1.2.xx) que possuem o campo "Integração Neogrid = Recebimento de CT-e" podem ser exibidos para escolha.
- Linha reaproveitavel: Caso a filial em questão não queria trabalhar com a criação automática de CT-e, esse campo não deverá ser preenchido.

#### Extra [019] TSRMCN DT Recebimento Automático de NF-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md

#### Extra [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro ao Consultar XML (Estouro de SqlDateTime)
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00min
- Linha reaproveitavel: Ocorrência Ao executar o processo de Serviço de Consulta de Arquivos XML sistema apresenta a mensagem abaixo:
- Linha reaproveitavel: Erro durante a importação do arquivo 109\ 20190612093924472\ 4306.xml.
- Linha reaproveitavel: Mensagem Original: Estouro de SqlDateTime. Deve estar entre 1/1/1753 12:00:00 AM e 31/12/9999 11:59:59 PM.. Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Esse incidente ocorre pois no XML importado está faltando uma tag . A tag faltante é a DhRecbto e esta tag é quem determina a data e hora de autorização do XML.
- Linha reaproveitavel: Solução Excluir o XML importado e solicitar ao fornecedor o envio deste novamente agora com essa tag preenchida para nova importação.

#### Extra [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - IMPXML - XML status Pendente
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00 min
- Linha reaproveitavel: Dúvida Ao acessar tela de Importação de arquivo XML - Cadastro de XML o registro é exibido com status igual a Pendente .
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução Um XML somente será registrado no sistema com status Pendente caso este tenha sido cadastrado manualmente através do botão Incluir da tela de Importação de arquivo XML - Cadastro de XML.
- Linha reaproveitavel: Esta não é uma prática recomendada uma vez que a versão 2.0 do processo de Importação de Arquivo XML não possui comunicação com o TSS e assim o XML não poderá ter seu status alterado para Validado (que é o status necessário para permitir incluir um movimento a partir dele).
- Linha reaproveitavel: A validação de um XML deve ser feita após a execução do processo de Monitor de Arquivos - Importação de Arquivo XML , ao executar o processo de Serviço de Consulta de arquivo XML , assim o XML será inserido na tela de cadastro de XML com o status igual a Validado caso nenhuma pendência seja identificada em seu cadastro.
- Linha reaproveitavel: Para ter o XML com o status igual a Validado exclua-o da tela de cadastro de XML, inclua o arquivo XML em sua pasta IN e execute o processo de Importação de Arquivo XML existente na tela de Monitor de arquivos.
- Linha reaproveitavel: Lembre-se o arquivo precisa seguir uma nomenclatura pré-definida pelo sistema, para saber qual é esta nomenclatura .

#### Extra [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - XML não enviado para pasta IN
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00 min
- Linha reaproveitavel: Ocorrência Portal Neogrid apresenta nota que não foi enviada para a pasta IN e não foi importada no ERP , ao Reenviar ao ERP ela passa a ser exibida na pasta.
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Esse incidente pode vir a ocorrer devido a alguns fatores:
- Linha reaproveitavel: Ocorreram erros durante a importação do XML e este se encontra na pasta RM\\ERROR
- Linha reaproveitavel: - XML foi consumido em Ambiente e/ou Base de testes
- Linha reaproveitavel: - Agendamento de JOB ativo onde houve o consumo do arquivo mas ocorreram erros ao importa-lo e arquivo não se encontra na pasta RM\\ERROR.
- Linha reaproveitavel: - Arquivo foi excluído da pasta

#### Extra [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT- Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Dúvida Quais opções o sistema disponibiliza para Recebimento Automático de NF-e (Compra)?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Os Tipos de Recebimento possíveis são:
- Linha reaproveitavel: - Inclusão direta : O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento de NF-e com base nos dados existentes no XML. O movimento será criado acatando a todas as parametrizações do seu tipo de movimento, ou seja, efetuando todas as integrações parametrizadas. O status do movimento será 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;
- Linha reaproveitavel: - Inclusão direta - Status não processado: O sistema não considera o código do pedido no XML e realiza a inclusão direta do movimento com base nos dados existentes no XML, só que com o status “Não Processado”. Um movimento criado com status 'Não Processado' existirá apenas como documentação, sem qualquer efeito sobre o sistema, ou seja, estes movimentos serão criados sem a geração de suas possíveis integrações com a Contabilidade, Financeiro e Aprovações e não irão gerar movimentação no estoque, lançamentos financeiros, lançamentos contábeis, workflows de aprovação, etc. Para que estes movimentos passem a ter efeito os mesmos deverão ser processados (vide item 4 deste documento);
- Linha reaproveitavel: - Recebimento de Pedido: O sistema utiliza o código do pedido contido no XML para buscar o movimento correspondente e realizar o faturamento do mesmo, sendo que se o pedido não for encontrado na base de dados o novo movimento não será criado, pois o sistema abortará o processo, informando o motivo através do log de execução;
- Linha reaproveitavel: - Recebimento de Pedido ou Inclusão direta: Através do conteúdo do XML, o sistema tentará identificar o respectivo pedido, e caso seja bem-sucedido, será realizado o faturamento do mesmo. Se o sistema não conseguir identificar nenhum pedido, a inclusão do movimento será feita através dos dados constantes do XML e sem nenhum relacionamento com qualquer outro movimento já existente na base de dados, ou seja, o movimento será criado acatando a todas às parametrizações do seu tipo de movimento, efetuando todas as integrações parametrizadas. O novo movimento terá o status 'Normal' ou 'A Pagar' conforme a parametrização do seu tipo de movimento;

#### Extra [024] TSRMCN DT Recebimento Automático de NF-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md

#### Extra [025] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - TOTVS Colaboração: Tradução automática de itens para produto diferente do definido.
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Ocorrência No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a Inclusão de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o Pedido de forma automática, caso seja selecionada a opção Sim , o sistema apresenta na tela de Tradução de Itens um código de produto divergente do configurado em Anexos - Produtos para Importação de XML.
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Quando utilizada a busca de pedido de forma automática, o sistema aplica a seguinte regra:
- Linha reaproveitavel: 1. Verifica a tag XPED , NITEMPED e ITEMPED . Caso elas existam, o faturamento traduzirá os itens a partir desta sequência sem verificar o cadastro de Produtos para Importação de XML.
- Linha reaproveitavel: 2. Caso as tags citadas não estejam preenchidas, o sistema considera o cadastro de Produto - Anexos - Produtos para Importação de XML.
- Linha reaproveitavel: O fato do sistema exibir um código divergente do configurado na tela de Tradução de Itens ocorre pois, o XML recebido possui as tags XPED e NIITEMPED preenchidas com valores diferentes da sequência dos itens do pedido que está sendo faturado.
- Linha reaproveitavel: Solução Para solucionar esta ocorrência, será necessário refazer a tradução de itens buscando os itens de pedido que de fato correspondem ao item do XML. Outra opção, seria não utilizar a busca do pedido de forma automática, para que o cadastro de produtos traduzidos seja utilizado.

#### Extra [026] Cross Segmentos - TOTVS BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento - COLAB - Não existem arquivos a serem importados na Importação de NF-e e CT-e sem NEOGRID
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:04:00 min
- Linha reaproveitavel: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos é apresentada a mensagem Não existem arquivos a serem importados, mesmo que possua XML's na pasta.
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Este incidente pode ocorrer por vários fatores:
- Linha reaproveitavel: - O usuário TODOS/EVERYONE não possui acesso total ao diretório em que os XML's foram disponibilizados para importação e suas subpastas.
- Linha reaproveitavel: - O caminho informado no Parametrizador é um caminho local e a máquina onde os XML's se encontram não é local, mas pertence á rede da empresa.
- Linha reaproveitavel: Solução Para solucionar essa ocorrência, realize os seguintes passos:
- Linha reaproveitavel: 1. Permissão e compartilhamento da pasta
- Linha reaproveitavel: - Clique com o botão direito do mouse sobre o diretório selecione a opção Propriedades e vá até a aba Compartilhamento , clique no botão Compartilhar . Na barra de busca digite Todos , atribua a permissão Leitura/Gravação e clique em Compartilhar .

#### Extra [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como solucionar o erro "Não existem arquivos a serem importados" no TOTVS Colaboração 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00 min
- Linha reaproveitavel: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos - Totvs Colaboração é apresentada a mensagem Não existem arquivos a serem importados , mesmo que possua XMLs na pasta IN.
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Este incidente pode ocorrer por vários fatores:
- Linha reaproveitavel: - O usuário TODOS/EVERYONE não possui acesso total ao diretório ClientEDI NeoGrid e suas subpastas.
- Linha reaproveitavel: - O caminho informado no parametrizador é um caminho local e a máquina onde o ClientEDI esta instalado pertence á rede da empresa.
- Linha reaproveitavel: - O caminho informado no parametrizador está incluindo a pasta IN.
- Linha reaproveitavel: Solução Para solucionar essa ocorrência, realize os seguintes passos:

#### Extra [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Seleção de Filial ao incluir XML de CT-e
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:30 min
- Linha reaproveitavel: Dúvida Para qual Filial o XML de CT-e será inserido quando feita importação via TOTVS Colaboração ?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Quando um XML é importado e inserido no sistema algumas validações serão feitas para selecionar a filial a qual este XML pertence. No caso do CT-e existe uma particularidade importante a ser considerada.
- Linha reaproveitavel: O sistema irá considerar o tipo de tomador do XML para definir o CNPJ do tomador do Serviço.
- Linha reaproveitavel: Segue abaixo o que cada código significa:
- Linha reaproveitavel: Tomador de Serviço:
- Linha reaproveitavel: 0-Remetente
- Linha reaproveitavel: 1-Expedidor

#### Extra [029] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Seleção de Natureza de Operação utilizando TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00 min
- Linha reaproveitavel: Dúvida Como o sistema seleciona a Natureza de Operação quando movimento é inserido via arquivo XML?
- Linha reaproveitavel: Ambiente Cross Segmentos - Backoffice Linha RM - Gestão de Estoque, Compras e Faturamento - A partir da 11.80.
- Linha reaproveitavel: Solução A seleção de CFOP de um movimento inserido via TC é feita primeiro no item para que a partir desta seja preenchida a do movimento.
- Linha reaproveitavel: O Sistema irá se basear na CFOP informada no XML para que encontre no sistema qual registro selecionar a fim de caracterizar a operação inversa (fiscalmente falando). Sendo assim será necessário cadastrar essas CFOP's inversas através do menu "Anexos - Natureza Inversa - TOTVS Colaboração".
- Linha reaproveitavel: Levando em consideração um cadastro hipotético de natureza inversa abaixo:
- Linha reaproveitavel: \ Natureza do XML 5.102
- Linha reaproveitavel: \ Naturezas inversas:
- Linha reaproveitavel: 1.101.01
- Linha reaproveitavel: 1.556.02

#### Extra [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar e incluir movimento através do TOTVS Colaboração versão 2.0
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:04:00 min
- Linha reaproveitavel: Dúvida Como configurar, importar, consultar, o que cadastrar e como cadastrar para utilizar o TOTVS Colaboração 2.0?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Todas as rotinas responsáveis pelo recebimento de nota fiscal eletrônica foram reescritas, com o objetivo de melhorar a performance e tornar o processo mais simples e estável. Também foram refeitas todas as telas do processo atual, a fim de aprimorar a usabilidade do mesmo.
- Linha reaproveitavel: Todas as melhorias de performance e de usabilidade das telas estão disponíveis tanto para o TOTVS Colaboração 2.0 como para o TOTVS Colaboração 1.0.
- Linha reaproveitavel: É importante salientar que para a utilização do TOTVS Colaboração é indispensável a contratação dos serviços da NeoGrid que é a responsável pelo processamento da leitura dos arquivos XML , pela comunicação com os webservices da SEFAZ e pelo retorno às consultas destes documentos. Caso a empresa opte por não contratar o Neogrid a obtenção destes arquivos XML deverão ser realizadas manualmente. Estes, por sua vez, serão lidos e interpretados através da execução de Jobs específicos pelo TOTVS Gestão de Estoque, Compras e Faturamento para a devida atualização dos dados no sistema.
- Linha reaproveitavel: Para maiores orientações sobre o recurso de TOTVS Colaboração 2.0 de forma completa clique
- Linha reaproveitavel: Para visualizar o processo sendo executado acesse nosso .
- Linha reaproveitavel: Com o objetivo de aprimorar cada vez mais nossa comunicação com os nossos clientes, estamos promovendo nossas comunidades no WhatsApp . Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… tudo na palma da sua mão!

#### Extra [031] TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Linha reaproveitavel: Informações Gerais
- Linha reaproveitavel: Especificação
- Linha reaproveitavel: Produto
- Linha reaproveitavel: TOTVS Gestão de Estoque, Compras e Faturamento
- Linha reaproveitavel: Módulo
- Linha reaproveitavel: Recebimento de Materiais
- Linha reaproveitavel: Segmento Executor
- Linha reaproveitavel: Construção e Projetos
- Linha reaproveitavel: Chamado

#### Extra [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Principais Parametrizações do Processo Importação de Arquivos XML
- Arquivo-base: Integração_Com_Totvs_Colaboração.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:04:00min
- Linha reaproveitavel: Dúvida Como fazer as parametrizações básicas do processo de Importação de Arquivos XML para inclusão de movimentos de recebimento ( Compra )?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para parametrizar o sistema para realizar a importação de arquivos XML, deverá seguir seguintes passos:
- Linha reaproveitavel: 1\. Acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | etapa Importação/Envio de Arquivo XML e preencha os campos conforme indicado abaixo:
- Linha reaproveitavel: - Tipo Integração:
- Linha reaproveitavel: TOTVS Colaboração 2.00 - indica que é utilizado a integração com a Neogrid.
- Linha reaproveitavel: TOTVS Colaboração 1.00 - indica utilização do TSS.

#### Extra [033] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aplicar IntelliTrace
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Dúvida Como executar o IntelliTrace e enviar para análise?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para executar o IntelliTrace e enviar para o suporte os arquivos gerados, basta seguir os passos abaixo:
- Linha reaproveitavel: - 1\. Descompactar o arquivo IntelliTraceCollection (Anexo) na pasta RM.Net . Será gerada uma pasta com o nome IntelliTraceCollection e dois arquivos .BAT dentro da pasta RM.Net ;
- Linha reaproveitavel: - 2\. Desinstalar todos os hosts na máquina: RM.Host.Exe e RM.Host.ServiceManager.exe
- Linha reaproveitavel: - 3\. Executar o .BAT para iniciar o RM.Host e RM.exe :
- Linha reaproveitavel: Pasta RM.NET IntelliTrace RM.Host.Exe .bat
- Linha reaproveitavel: Pasta RM.NET IntelliTrace RM.Exe .bat

#### Extra [034] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento possui vínculo com o Gestão Hospitalar e não pode ser excluído
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Ao excluir um Movimento é apresentada mensagem:
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para verificar se o movimento possui vínculo com o Gestão Hospitalar, execute a consulta abaixo:
- Linha reaproveitavel: SELECT IDMOV FROM SZOPMEPACIENTECAB (NOLOCK) WHERE CODCOLIGADA = X AND IDMOV = Y
- Linha reaproveitavel: Onde X corresponde a Coligada em que o movimento pertence e Y corresponde ao Identificador do Movimento a ser excluído.
- Linha reaproveitavel: Caso a sentença retorne resultado, mostra que de fato este movimento possui integração com o Gestão Hospitalar.

#### Extra [035] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividades de Inclusão de Movimento
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:05:00 min
- Linha reaproveitavel: Dúvida
- Linha reaproveitavel: Como fazer uma Fórmula Visual para Inclusão de Movimentos usando as atividades padrões do módulo Gestão de Estoque, Compras e Faturamento?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12 .
- Linha reaproveitavel: Solução Para incluir o movimento via fórmula visual é necessário utilizar três atividades em sequência:
- Linha reaproveitavel: 1 - Atividade Inclusão Movimento:
- Linha reaproveitavel: Deverá preencher todas as propriedades nessa atividade que são obrigatórias ao incluir o movimento manualmente. Além disso, os campos obrigatórios para inclusão em qualquer movimento são:
- Linha reaproveitavel: Descrição
- Linha reaproveitavel: Propriedade
- Linha reaproveitavel: Campo Banco de Dados

#### Extra [036] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual como utilizar a atividade Alteração de Movimento
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:04:00min
- Linha reaproveitavel: Dúvida O que é necessário para utilizar a atividade Alteração de Movimento ?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução Para utilizar a atividade Alteração Movimento é necessário utilizar 3 atividades em sequência:
- Linha reaproveitavel: 1. Alteração Movimento:
- Linha reaproveitavel: Campos obrigatório nessa atividade: CodColigada, CodUsuarioLogado, Idmov
- Linha reaproveitavel: 2. Alteração Item Movimento:
- Linha reaproveitavel: Campos obrigatório nessa atividade: CodColigada, Idmov, NSeqItmMov
- Linha reaproveitavel: 3. Salvar Alteração Movimento:
- Linha reaproveitavel: As atividades Alterar Item de Movimento e Salvar Movimento deverão ter como referência a atividade Alterar Movimento.

#### Extra [037] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como visualizar nome do campo e tabela correspondente no Banco de dados
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00 min
- Linha reaproveitavel: Dúvida Como identificar a qual tabela do banco de dados o campo exibido na tela pertence?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.
- Linha reaproveitavel: Solução Para identificar a tabela e campo do Banco de Dados que correspondem ao que é exibido em tela basta que na tela desejada clique com o botão direito do mouse em qualquer parte da tela e selecione a opção Visualizar nome dos campos .
- Linha reaproveitavel: Feito isso ao posicionar o mouse sobre o campo desejado será mostrado a tabela seguido do nome do campo: TABELA.CAMPO
- Linha reaproveitavel: Atenção: Não são todas as telas do sistema que disponibilizam deste recurso. Caso a tela e campo desejado não disponibilizem do recurso entre em contato com o suporte TOTVS.

#### Extra [038] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Desabilitar Triggers e Fórmulas Visuais
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00min
- Linha reaproveitavel: Dúvida Como desabilitar as Triggers e Fórmulas Visuais do sistema?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução Para desabilitar suas Triggers e Fórmulas Visuais, siga o passo a passo abaixo:
- Linha reaproveitavel: Acesse o módulo Serviços Globais Administração Sentinela Tarefas de execução agendada Habilitar/Desabilitar Triggers Desmarque todas as triggers e clique em Executar:
- Linha reaproveitavel: ​
- Linha reaproveitavel: Após finalizar, clique em Desabilitar Fórmulas Visuais:
- Linha reaproveitavel: ​
- Linha reaproveitavel: Após desabilitar suas triggers e fórmulas visuais, faça novamente o teste em que era apresentado erro.
- Linha reaproveitavel: Com o objetivo de aprimorar cada vez mais nossa comunicação com os nossos clientes, estamos promovendo nossas comunidades no WhatsApp . Através delas, você é informado em primeira mão sobre artigos publicados neste portal. Eventos, notícias, comunicados urgentes… tudo na palma da sua mão!

#### Extra [039] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: DataServer de Movimento para diferentes formas de inclusão
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00min
- Linha reaproveitavel: Dúvida Quais são os Dataserver de Movimento que devem ser utilizados para disparar fórmula visual?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução Como existem diferentes formas de incluir movimentos no sistema, cada uma destas formas estão associadas a um Dataserver Abaixo seguem seus nomes e a forma de inclusão que os farão ser disparados:
- Linha reaproveitavel: \- MovMovimentoData : Inclusão manual pelo ícone "Novo/Incluir" da tela de movimentos
- Linha reaproveitavel: \- MovFaturamentoData : Inclusão via processo "Faturar/Receber"
- Linha reaproveitavel: \- MovMovCopiaAPartirOutroMovimentoData : Inclusão a partir do processo "Cópia de Movimento a Partir de Outro Movimento"
- Linha reaproveitavel: \- MovMovCopiaReferenciaData : Inclusão a partir do Processo "Assistente de Cópia por referência"

#### Extra [040] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Executar processo
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00 min
- Linha reaproveitavel: Dúvida Como executar um processo a partir de fórmula visual?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução Será preciso utilizar um conjunto de duas atividades para execução do processo via fórmula visual. Preparar execução do processo e Executar processo . Abaixo segue o detalhamento de como configurar a fórmula de acordo com seu processo (usaremos o processo de cancelar movimento como exemplo):
- Linha reaproveitavel: 1 - Executar o processo desejado, via sistema
- Linha reaproveitavel: Acesse a tela em que o processo é executado e, para qualquer registro, execute o processo da mesma maneira que deseja que a fórmula o execute:
- Linha reaproveitavel: 2 - Identificar o Job gerado
- Linha reaproveitavel: Acesse a tela de Gerenciamento de Jobs (menu Ambiente) e filtre pelo job criado na execução do processo (passo 1):
- Linha reaproveitavel: 3 - Crie uma nova fórmula visual

#### Extra [041] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Contexto de assinante para inclusão de movimento
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00min
- Linha reaproveitavel: Dúvida Como funciona o contexto de assinante para inclusão de movimento?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução Diferentemente das fórmulas visuais utilizadas em processos ou dataservers, para que o movimento dispare uma fórmula visual, quando a origem deste movimento é outro módulo precisamos utilizar o contexto de assinante, somente neste caso haverá o disparo. Para isto será preciso:
- Linha reaproveitavel: 1\. Utilizar atividades específicas:
- Linha reaproveitavel: \-
- Linha reaproveitavel: \-
- Linha reaproveitavel: Somente estas atividades tem condições de consultar ou altear o conteúdo de algum campo deste contexto. Importante deixar claro que existe uma limitação quanto as tabelas disponíveis para consulta/edição:
- Linha reaproveitavel: \- TMOV
- Linha reaproveitavel: \- TMOVFISCAL

#### Extra [042] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade Atribuir valor no contexto do Assinante/Movimento
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00min
- Linha reaproveitavel: Dúvida Como funciona a atividade Atribuir valor no contexto do Assinante/Movimento ?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Esta atividade deverá ser utilizada exclusivamente no contexto de assinante (Subscriber) e que a alteração envolvida ocorra, exclusivamente, em uma das tabelas definidas:
- Linha reaproveitavel: \- TMOV
- Linha reaproveitavel: \- TMOVFISCAL
- Linha reaproveitavel: \- TITMMOV
- Linha reaproveitavel: Basicamente a atividade exigirá o preenchimento de 3 campos entre os 4 disponíveis:

#### Extra [043] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade "Consulta valor no contexto do Movimento(Assinante)"
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00min
- Linha reaproveitavel: Dúvida Como funciona a atividade Consulta valor no contexto do Movimento (Assinante)?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Essa atividade deverá ser utilizada exclusivamente no contexto de assinante (Subscriber) e que a consulta envolvida ocorra, exclusivamente, em uma das tabelas definidas:
- Linha reaproveitavel: \- TMOV
- Linha reaproveitavel: \- TMOVFISCAL
- Linha reaproveitavel: \- TITMMOV
- Linha reaproveitavel: Basicamente a atividade exigirá o preenchimento de 3 campos de 4 disponíveis:

#### Extra [044] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Percorrer os itens de movimento utilizando as atividades no contexto de assinante
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00min
- Linha reaproveitavel: Dúvida Como percorrer os itens de movimento utilizando as atividades no contexto de assinante?
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Para informar dinamicamente a propriedade "Posicao" nas Atividades Atribuir Valor no Contexto do Assinante / Movimento e Consulta valor no contexto do Movimento(Assinante) é necessário utilizar a seguinte configuração:
- Linha reaproveitavel: 1\. Duas atividades de expressão
- Linha reaproveitavel: Uma para o valor atual e outro para armazenar a quantidade de itens existente no movimento.
- Linha reaproveitavel: O vínculo será feito através da propriedade “Valor Calculado”, indicando a propriedade "Posicao" de uma das atividades específicas do contexto de assinante(Atribui valor... / Consulta valor...)
- Linha reaproveitavel: 2\. Atividade de Código fonte (Executar Código)

#### Extra [045] Zendesk TOTVS
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Login
- Linha reaproveitavel: [Conteúdo não encontrado ou vazio]

#### Extra [046] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como executar relatório via Gerador Delphi
- Arquivo-base: Objetos_Gerenciais.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00 min
- Linha reaproveitavel: Dúvida Como executar relatório via Gerador Delphi?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80
- Linha reaproveitavel: Solução Para solucionar essa dúvida, realize os seguintes passos:
- Linha reaproveitavel: 1\. Acesse o menu Gestão - Gerador de Relatórios - Visão Delphi ;
- Linha reaproveitavel: 2\. Selecione o Relatório desejado e clique em Agendar a execução do Relatório ;
- Linha reaproveitavel: 3\. Preencha o filtro solicitado
- Linha reaproveitavel: 4\. Selecione a opção que deseja executar. (A opção de PDF será automaticamente marcada quando o tipo de saída do relatório for PDF)
- Linha reaproveitavel: 5\. Avance e execute
- Linha reaproveitavel: Informações adicionais:

#### Extra [047] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Melhoria de Performance do Sistema
- Arquivo-base: Utilitários.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00min
- Linha reaproveitavel: Dúvida Quais ferramentas e técnicas podem ser utilizadas para melhoria de performance do sistema?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - A partir da versão 12.1.8.
- Linha reaproveitavel: Solução O sistema possui algumas ferramentas que são utilizadas para melhoria de performance.
- Linha reaproveitavel: Segue abaixo os procedimentos:
- Linha reaproveitavel: 1. Executar processo de reindexação da base (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Linha reaproveitavel: 2. Atualizar Estatísticas da base (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Linha reaproveitavel: 3. Desabilitado todas as Trigger's da base (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Linha reaproveitavel: 4. Desabilitado todas as possíveis Fórmula Visuais (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada);
- Linha reaproveitavel: 5. Feito limpeza de tabelas de Job (Serviços Globais | Administração | Sentinela | Tarefas de Execução Agendada).

#### Extra [048] Contabilidade (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Habilita Evento Contábil:
- Linha reaproveitavel: - Não Utiliza evento.
- Linha reaproveitavel: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Linha reaproveitavel: - Utiliza Evento do Tipo de Movimento: Por esta opção o evento contábil será buscado diretamente no tipo de movimento.
- Linha reaproveitavel: - Utiliza Evento da Natureza Inversa: Por esta opção o evento contábil será buscado diretamente na Natureza Inversa do movimento, caso esta não exista buscará o evento informado no tipo de movimento. A utilização desta opção poderá ser feita em movimentos de transferência que geram a partir de um movimento uma entrada e uma saída sendo que um utiliza a Natureza realmente indicada no movimento e o outro a Natureza Inversa.
- Linha reaproveitavel: Edição da Contabilização:
- Linha reaproveitavel: - Edita: O sistema dará acesso à contabilização do movimento e o usuário poderá efetuar qualquer alteração que for necessária.
- Linha reaproveitavel: - Mostra: A contabilização somente será mostrada ao usuário sem que seja possível a alteração na mesma.
- Linha reaproveitavel: Contabilização Obrigatória: Marcando esta opção o movimento só poderá ser salvo após ser indicado um evento contábil.
- Linha reaproveitavel: Evento Default: Informe qual evento contábil para este tipo de movimento, estes eventos já deverão estar cadastrados através do menu Cadastro/Contabilidade/Eventos Contábeis.

#### Extra [049] Integração de Contratos
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Esta opção tem a finalidade de vincular um item de movimento a um contrato ou a um item de contrato. Escolha, na lista de opções a desejada:
- Linha reaproveitavel: - Não relacionar : Os itens incluídos para o tipo de movimento não serão relacionados a nenhum contrato.
- Linha reaproveitavel: - Editar Contrato (somente do cliente) : Poderá relacionar um movimento a um determinado contrato deste que seja do mesmo Cliente.
- Linha reaproveitavel: - Editar Contrato (Todos os Contratos) : Poderá relacionar um movimento a um determinado contrato.
- Linha reaproveitavel: Exemplo : Vamos supor que tem um contrato cadastrado através do menu Contratos / Manutenção de Contratos , e alguma despesa extra contrato deve ser cobrada do cliente, porém deve ser faturada separadamente, desta forma, ao informarmos que nos itens deste tipo de movimento o contrato poderá ser editado, significa que ao incluirmos o item, ao indicarmos o número do contrato saberemos que aquela despesa, cobrada do cliente é referente a despesas daquele contrato.
- Linha reaproveitavel: Relacionar com item de Contrato : Escolhendo esta opção poderá incluir movimentos referentes a um contrato diretamente, ou seja, através do menu Movimentos, desta forma, ao indicar o item no movimento, você informará o período inicial e final de faturamento deste, assim, ao faturar um contrato através do menu Contratos / Faturamento por Lote, o sistema verificará se para o cliente, para a data de faturamento já existe um movimento com aquele item de contrato.
- Linha reaproveitavel: Editar contrato origem destino : Esta opção só aparecerá quando o tipo de movimento for do grupo 3.2 (Transferência de Faturamento). Escolhendo esta opção, o sistema apresentará no momento da inclusão do item no movimento dois campos para que informe a origem do contrato a que pertence o produto e o contrato destino.
- Linha reaproveitavel: Editar item de Contrato por Filial : Escolhendo esta opção após de faturar um contrato, o sistema irá levar para o item do movimento da filial corrente o código do contrato. Caso venha desdobrar o movimento este código será mantido no movimento de origem e no desdobramento.

#### Extra [050] Fiscal (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: -
- Linha reaproveitavel: -
- Linha reaproveitavel: -
- Linha reaproveitavel: -
- Linha reaproveitavel: -
- Linha reaproveitavel: -
- Linha reaproveitavel: Edição da Natureza:
- Linha reaproveitavel: - Edita: para ter acesso ao campo natureza no movimento;
- Linha reaproveitavel: - Mostra: o campo aparecerá no movimento, porém, não poderá ser acessado;
- Linha reaproveitavel: - Não edita: o campo natureza fiscal não será utilizado por este tipo.

#### Extra [051] Manutenção (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Integrar objeto de oficina ao item de movimento: Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.
- Linha reaproveitavel: Integração por API de Reporte: Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: Reporte de Itens Atendidos.
- Linha reaproveitavel: Na tela de parâmetros - Manutenção é possível escolher se o tipo de movimento selecionado terá integração com a API de Reporte, e qual fórmula poderá ser utilizado no valor reportado.
- Linha reaproveitavel: Para selecionar a integração basta marcar o Checkbox referente a ela.
- Linha reaproveitavel: Ao marcar o Checkbox a opção para selecionar uma fórmula será habilitada, esta poderá ser utilizada nas situações onde se deseja retornar um valor do item calculado por uma fórmula, conforme a necessidade da empresa, valor ressaltar que a fórmula criada deverá ter campos do item.
- Linha reaproveitavel: Nas situações onde não for selecionada uma fórmula a API retornará o valor unitário do item do movimento.
- Linha reaproveitavel: Para mais detalhes da API Reporte de Itens Atendidos acesso o Link .
- Linha reaproveitavel: Atenção
- Linha reaproveitavel: A API esta disponível na release 12.1.2205 ou superior.

#### Extra [052] Patrimônio (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Integrar TOTVS Gestão Patrimonial: As opções para este campo para movimentos de Entrada são:
- Linha reaproveitavel: - Não Integrado: Os itens deste tipo de movimento não serão ativos imobilizados.
- Linha reaproveitavel: - Compra de Imobilizado: Os itens deste movimento serão ativos imobilizados. Desta forma, ao realizar a integração deste movimento no TOTVS Gestão Patrimonial, serão gerados automaticamente os respectivos bens de acordo com as opções de integração do TOTVS Gestão Patrimonial. Para que este processo ocorra será necessário: inicialmente incluir o movimento no TOTVS Gestão de Estoques, Compras e Faturamento. Logo após, deve-se indicar no TOTVS Gestão Patrimonial, menu Utilitários/Integrações/Integração TOTVS Gestão de Estoques, Compras e Faturamento as opções de integração para a geração de bens.
- Linha reaproveitavel: - Retorno de Imobilizado: Os itens deste movimento serão retorno de imobilizados.
- Linha reaproveitavel: - Contrato de Leasing: No caso de Leasing Financeiro, a lei obriga a empresa a ativar os bens arrendados no seu Ativo Imobilizado e fazer a depreciação dos mesmos. Para tal, foi criado o parâmetro para que o movimento seja integrado com o TOTVS Gestão Patrimonial.
- Linha reaproveitavel: As opções para este campo para movimentos de Saída são:
- Linha reaproveitavel: - Não Integrado: Os itens deste tipo de movimento não serão integrados ao TOTVS Gestão Patrimonial.
- Linha reaproveitavel: - Remessa de Imobilizado: Os itens deste tipo de movimento pertencem à empresa, mas por algum motivo não estão na empresa.
- Linha reaproveitavel: - Exemplo : O item precisou ser reparado.
- Linha reaproveitavel: - Baixa de Imobilizado: Os itens deste tipo de movimento não pertencem mais à empresa. Os mesmos deverão ser baixados no TOTVS Gestão Patrimonial.

#### Extra [053] Projeto (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Informar Projeto/Tarefa:
- Linha reaproveitavel: - Não informar: selecione esta opção para que campo 'Projeto' não seja apresentado na pasta Integração do movimento.
- Linha reaproveitavel: - Obrigatório por Movimento: selecione esta opção para que o campo 'Projeto' seja apresentado na pasta Integrações no movimento. Este aparecerá no movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o movimento sem que este campo esteja informado.
- Linha reaproveitavel: - Opcional por Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integrações no movimento, para que informe para qual projeto do TOTVS Construção e Projetos estará sendo inserido na movimentação.
- Linha reaproveitavel: - Obrigatório por item de Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integração no item de movimento. Este aparecerá no item do movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o item do movimento sem que este campo esteja informado.
- Linha reaproveitavel: - Opcional por item de Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integração no item do movimento, para que informe para qual 'Projeto' e 'Tarefa' do TOTVS Construção e Projetos está sendo inserida no item da movimentação.
- Linha reaproveitavel: Observações : Este campo só aparecerá se o TOTVS Construção e Projetos estiver instalado na máquina. - Marcando esta opção, a numeração do movimento, na pasta identificação/Características do mesmo tipo de movimento tem que ser "Mostra". - Caso habilite a opção de informar projetos por item, poderá faturar para uma única nota várias Ordens de Compras, independente do projeto.
- Linha reaproveitavel: Gera Apropriação: Marcando esta opção, na pasta Cabeçalho / Valores Financeiros no Movimento, será habilitado o campo "Gera Apropriação". Este campo só aparecerá se a base estiver integrada ao TOTVS Construção e Projetos. Esta opção indicará se o esse movimento deve ou não ser apropriado no TOTVS Construção e Projetos.
- Linha reaproveitavel: Observação : A apropriação de insumos no TOTVS Construção e Projetos, consiste na efetuação de registros diários do consumo (compra ou gasto) de insumos na obra, possibilitando um acompanhamento físico e financeiro da mesma através de um comparativo entre o previsto e o apropriado. Este recurso poderá ser verificado através dos Relatórios Periódicos/Cronograma/Histograma.

#### Extra [054] Recursos Humanos (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Movimento gera controles de EPI no TOTVS Gestão de Pessoas:
- Linha reaproveitavel: - Não Integrado: Não utilizará a integração.
- Linha reaproveitavel: - Compras: Realizar acréscimo em estoque.
- Linha reaproveitavel: - Empréstimos: Realiza empréstimos EPI (Apenas efetuado pelo TOTVS Gestão de Pessoas).
- Linha reaproveitavel: - Devoluções de empréstimos: Realiza devoluções EPI (Apenas efetuado pelo TOTVS Gestão de Pessoas).
- Linha reaproveitavel: - Baixa de EPI: Baixa o estoque.
- Linha reaproveitavel: Observações :
- Linha reaproveitavel: - Quando o usuário configurar o tipo de movimento para realizar a integração, automaticamente o TOTVS Gestão de Estoques, Compras e Faturamento fará as devidas consistências em alguns parâmetros do tipo de movimento, para garantir a compatibilidade.
- Linha reaproveitavel: - Após configurar um movimento para integrar com EPI, será disponibilizada uma pasta em Itens/Integração/Equipamentos de proteção individual, onde serão apresentados os itens de EPI relacionados aos itens do movimento.
- Linha reaproveitavel: - Ao criar um movimento pelo TOTVS Gestão de Estoques, Compras e Faturamento (Compra), o sistema criará automaticamente os itens de EPI no TOTVS Gestão de Pessoas, sendo que estes estarão disponíveis na pasta citada no tópico acima.

#### Extra [055] WorkFlow Fluig (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Aprovação: Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:
- Linha reaproveitavel: - Não Utiliza: a aprovação pelo Fluig não é habilitada.
- Linha reaproveitavel: - Utiliza no Faturamento: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser faturados.
- Linha reaproveitavel: - Utiliza na Cotação: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser selecionados ao se criar uma nova cotação.
- Linha reaproveitavel: - Utiliza em Ambos: é habilitada aprovação pelo Fluig para Faturamento e Cotação.
- Linha reaproveitavel: Aprovação no Faturamento/Aprovação na Cotação: P rocesso: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para o TOTVS Gestão de Estoque Compras e Faturamento estão disponíveis dois workflows de exemplo: "WorkflowNucleus" e "WorkflowItem". Agrupamento: este parâmetro define o tipo de agrupamento utilizado. As opções disponíveis são:
- Linha reaproveitavel: - Movimento: é gerado um único workflow por movimento, contendo os dados de todos os itens de movimento, quando aprovado este workflow todos os itens do movimento estarão liberados para serem utilizados.
- Linha reaproveitavel: - Item de Movimento: é gerado um workflow para cada item de movimento, possibilitando ao usuário que cada item seja aprovado de forma individual.
- Linha reaproveitavel: - Estados de Aprovação: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que o movimento/item do movimento serão considerados aprovados. Exemplo: "Aprovado"; "Aprovação Automática".
- Linha reaproveitavel: Observação : não é possível informar estados repetidos na lista de Estados de Aprovação.

#### Extra [056] Biblioteca (Parâmetro de Integração)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Tipo de Integração com TOTVS Gestão Bibliotecária:
- Linha reaproveitavel: Através dessa integração será possível solicitar compra de exemplares através do TOTVS Gestão Bibliotecária, faturar o movimento no TOTVS Gestão de Estoques, Compras e Faturamento e então verificar o novo saldo de Exemplares no TOTVS Gestão Bibliotecária.
- Linha reaproveitavel: As parametrizações disponíveis são:
- Linha reaproveitavel: - Não integrado : O sistema não realizará a integração;
- Linha reaproveitavel: - Solicitação de Compras : Parametrizar em um movimento de Solicitação de Compras;
- Linha reaproveitavel: - Compra efetivada : Parametrizar em um movimento que fature um movimento de Compra.

#### Extra [057] Integração Mensagem Única (Parâmetros de Integrações)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Mensagem de Integração : Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:
- Linha reaproveitavel: - Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção Integração com SigaMNT ou
- Linha reaproveitavel: - Integração Quirons x BackOffice RM
- Linha reaproveitavel: - BackOffice Protheus x Educacional RM.
- Linha reaproveitavel: As opções disponíveis para esse parâmetro são:
- Linha reaproveitavel: - Não Integrado: valor default do campo.
- Linha reaproveitavel: - Solicitação de Compra: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
- Linha reaproveitavel: - Solicitação de Armazém: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
- Linha reaproveitavel: - Solicitação de Histórico: Utilizado na Integração Obras e Projetos x BackOffice Protheus.
- Linha reaproveitavel: - Pedido de Compra: Utilizado na Integração Obras e Projetos x BackOffice Protheus.

#### Extra [058] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Integração File Repo
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:01:00 min
- Linha reaproveitavel: Dúvida Como utilizar o FileRepo no Gestão de Estoque, Compras e Faturamento?
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2402 e superiores.
- Linha reaproveitavel: Solução A funcionalidade de armazenamento de arquivos FileRepo foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- Linha reaproveitavel: No módulo Gestão de Estoque, Compras e Faturamento , essa funcionalidade está disponível nas seguintes telas:
- Linha reaproveitavel: - Movimento
- Linha reaproveitavel: - Item do Movimento
- Linha reaproveitavel: - Produto
- Linha reaproveitavel: - Contrato
- Linha reaproveitavel: - Cotação

#### Extra [059] File Repo - TOTVS Backoffice (Linha RM)
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- Linha reaproveitavel: Confira abaixo em quais telas dos produtos TOTVS Backoffice - Linha RM o recurso está disponível.

#### Extra [060] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Job Agendado executa sempre o mesmo registro
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00 :01:00 min
- Linha reaproveitavel: Ocorrência
- Linha reaproveitavel: Ao realizar o agendamento do um JOB este é executado sempre para os mesmo registros todas as vezes.
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Esse incidente ocorre pois o JOB agendado necessita da seleção do registro a ser processado.
- Linha reaproveitavel: Uma vez que o registro precisa ser selecionado a execução do processo depende da ação de um usuário e o agendamento deste não possibilitará tal ação fazendo com que o JOB seja executado sempre para o registro selecionado no momento do agendamento.
- Linha reaproveitavel: Sempre que ao executar o processo desejado a mensagem abaixo for apresentada indica que este é um processo que não poderá ser agendado/automatizado.

#### Extra [061] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md

#### Extra [062] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - A unidade está incompatível quando o tipo de movimento é integrado com o RM Vitae
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:02:00min
- Linha reaproveitavel: Ocorrência Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: A mensagem ocorre pois movimentos integrados com o RM Vitae devem utilizar a unidade de medida de controle definida no cadastro do produto.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Acesse a etapa Item - Identificação 2/2 do parâmetro do tipo de movimento e para o campo Unidade de Medida Padrão selecione a opção Unidade de Controle:

#### Extra [063] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Etapas de Integração desabilitadas nos Parâmetros do Tipo de Movimento
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:03:00min
- Linha reaproveitavel: Ocorrência Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.
- Linha reaproveitavel: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Linha reaproveitavel: Causa
- Linha reaproveitavel: Esse incidente ocorre porque em Parâmetros Integrações de Sistemas as integrações entre o Nucleus e os demais módulos não estão ativas.
- Linha reaproveitavel: Solução Realize os seguintes passos:
- Linha reaproveitavel: 1- No módulo Gestão de Estoque, Compras e Faturamento, acesse menu Ambiente | Parâmetros | Integrações de Sistemas e remarque as integrações RM FLUXUS X RM NUCLEUS, RM NUCLEUS X RM FLUXUS, RM SALDUS X RM NUCLEUS, RM NUCLEUS X RM SALDUS, RM LIBER X RM NUCLEUS e RM NUCLEUS X RM LIBER conforme evidência abaixo.
- Linha reaproveitavel: 2\. Saia do sistema e, caso o ambiente não seja local, solicite que os demais usuários também façam Logout.
- Linha reaproveitavel: 3\. No diretório de instalação do RM (totvs\\RM.Net), localize o arquivo RM.Host.ServiceManager.exe e desinstale o host, marcando a flag "Apagar \ Broker.dat".
- Linha reaproveitavel: ​

#### Extra [064] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md

#### Extra [065] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md

#### Extra [066] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Integração Financeira/Valores Opcionais
- Arquivo-base: Parametrização.md
- Linha reaproveitavel: Tempo aproximado para leitura: 00:04:00min
- Linha reaproveitavel: Dúvida
- Linha reaproveitavel: Para que o lançamento financeiro possa conter valores adicionais oriundos de campos existentes no movimento inserido via TOTVS Gestão de Estoque, Compras e Faturamento, deve-se utilizar a opção de Valores Opcionais .
- Linha reaproveitavel: Ambiente
- Linha reaproveitavel: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Linha reaproveitavel: Solução
- Linha reaproveitavel: Deve-se parametrizar o TOTVS Gestão Financeira para utilizar Valores Opcionais.
- Linha reaproveitavel: Em nosso exemplo parametrizaremos o valor do tributo ISS como Valor Opcional, pois assim como IRRF-PJ o TOTVS Gestão Financeira não possui geração automática como é feito com os IRRF-PF, INSS PF e PIS, COFINS, CSLL.
- Linha reaproveitavel: Acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações (04.03)| Financeira (04.03.01) | Contas a Pagar | Valores opcionais .
- Linha reaproveitavel: Nessa etapa é possível definir o valor opcional, sua nomenclatura e sua ação. Em nosso exemplo criaremos o valor opcional referente ao tributo ISS e sua ação será Descontar :

#### Extra [067] INT0005 Integracao Financeira Valores Opcionais
- Arquivo-base: Parametrização.md

<!-- AUTO-GENERATED END: INTEGRATION-DETAIL-EXTRA -->
