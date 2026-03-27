# Fontes Permitidas e Limites da Skill de RM

Este arquivo define exatamente quais fontes podem sustentar a skill `rm-development`, quais temas elas cobrem com segurança e como a resposta deve ser limitada quando a pergunta extrapolar essa base.

## Diretórios que sustentam a skill

Somente estes diretórios podem ser usados como base factual:

1. `totvs_rm_docs/`
2. `tmp_totvs_legado_single/`

Nada fora desses dois diretórios deve ser tratado como evidência da skill. Isso inclui:

- outros diretórios do repositório;
- memória do modelo sobre RM;
- documentação externa;
- generalizações não explicitamente sustentadas por essas bases.

## Cobertura de cada fonte

### `totvs_rm_docs/`

Esta é a base principal da skill.

Ela cobre principalmente conteúdos de **TOTVS RM Nucleus**, com foco forte em:

- **Estoque**
- **Compras**
- **Faturamento**

Na prática, essa base sustenta respostas sobretudo sobre:

- movimento e tipo de movimento;
- parametrização do Nucleus;
- processos de estoque, compras e faturamento;
- vínculos, etapas, abas e comportamento funcional;
- contratos e rotinas relacionadas quando presentes na documentação local;
- integrações documentadas do Nucleus;
- troubleshooting funcional e operacional baseado nos artigos disponíveis.

Quando a skill responder com confiança alta, a suposição padrão deve ser: a evidência veio de `totvs_rm_docs/` e está ancorada principalmente no escopo de **RM Nucleus / Estoque / Compras / Faturamento**.

### `tmp_totvs_legado_single/`

Esta é uma base complementar e muito estreita.

Ela cobre apenas **um DataServer legado**:

- `MOVMOVIMENTOTBCDATA`

Essa base pode sustentar respostas sobre:

- estrutura XML e metadados desse DataServer;
- operações legadas associadas a ele;
- campos, tabelas e relacionamentos visíveis nessa fonte específica;
- exemplos de integração estritamente vinculados a esse DataServer.

Essa base **não** autoriza extrapolação para:

- outros DataServers RM;
- padrões gerais de integração RM;
- comportamento comum a todos os módulos;
- convenções técnicas não explicitadas nessa fonte.

## Escopo confiável da skill

Considere como escopo confiável:

- RM Nucleus;
- Estoque, Compras e Faturamento dentro do material local;
- parametrização e operação funcional dessas rotinas quando documentadas em `totvs_rm_docs/`;
- dúvidas técnicas do DataServer legado `MOVMOVIMENTOTBCDATA` quando amparadas por `tmp_totvs_legado_single/`.

## O que fica fora do escopo

Fica fora do escopo confiável da skill:

- módulos RM que não estejam claramente cobertos pelas fontes locais;
- qualquer DataServer diferente de `MOVMOVIMENTOTBCDATA`;
- APIs, SDKs, bibliotecas cliente ou integrações não descritas nas duas bases;
- arquitetura geral da linha RM sem respaldo explícito nos diretórios permitidos;
- regras universais do produto RM;
- comportamento de customizações do cliente;
- fluxos Fluig x RM que dependam de implementação específica não documentada localmente;
- detalhes de versão, instalação, deploy ou infraestrutura ausentes das fontes permitidas.

## Regra obrigatória de resposta quando houver limitação

Quando a pergunta ultrapassar a base disponível, a resposta deve:

1. declarar explicitamente a limitação;
2. dizer qual parte é coberta com segurança;
3. evitar completar lacunas com memória externa ou inferência ampla;
4. redirecionar a resposta para o trecho realmente sustentado pelas fontes.

Não usar formulações que escondam a limitação. Se a base não cobre, isso deve ser dito de forma direta.

## Formulações seguras para explicitar limite

Exemplos de formulação segura:

- `Pelas fontes locais desta skill, eu só consigo afirmar isso com segurança para o RM Nucleus, especialmente Estoque, Compras e Faturamento.`
- `A base disponível não sustenta uma resposta confiável para esse módulo específico do RM; o que eu consigo cobrir com segurança está no escopo do Nucleus documentado localmente.`
- `No material legado local, há evidência apenas para o DataServer MOVMOVIMENTOTBCDATA. Não é seguro generalizar isso para outros DataServers.`
- `Consigo orientar o que está documentado nas fontes locais, mas não afirmar o comportamento de uma customização específica do cliente sem evidência adicional.`
- `Esse ponto extrapola a base desta skill. Posso responder apenas a parte sustentada pelos diretórios locais autorizados.`

## Formulações que devem ser evitadas

Evitar frases como:

- `No RM isso funciona assim.`
- `Todos os módulos do RM seguem esse padrão.`
- `Qualquer DataServer usa essa mesma estrutura.`
- `Isso é padrão da plataforma.`
- `Basta configurar dessa forma.`

Essas formulações só seriam aceitáveis se a própria base local trouxesse evidência explícita e específica para essa afirmação.

## Resumo operacional

Ao responder, aplicar esta hierarquia:

1. usar `totvs_rm_docs/` como base principal, principalmente para RM Nucleus, Estoque, Compras e Faturamento;
2. usar `tmp_totvs_legado_single/` apenas para o DataServer legado `MOVMOVIMENTOTBCDATA`;
3. explicitar a limitação sempre que a pergunta sair desse recorte;
4. não ampliar o escopo da skill além do que essas duas fontes realmente sustentam.

<!-- AUTO-GENERATED START: SOURCE-LIMITS-DETAIL -->
## Matriz exaustiva de cobertura por artigo

Cada entrada abaixo transforma um artigo efetivamente presente nas fontes locais em uma regra operacional de escopo. Use esta matriz para decidir se a skill deve responder com alta confianca, com ressalva ou com recusa parcial.

### Cadastros.md (33 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Acesso ao Cadastro de Produtos - Você não está autorizado a utilizar essa funcionalidade do sistema!
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência

#### [002] TOTVS
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Central do Cliente
- Evidencia capturada: - https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro

#### [003] TOTVS
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Central do Cliente
- Evidencia capturada: - https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro

#### [004] TOTVS
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Central do Cliente
- Evidencia capturada: - https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro

#### [005] 1.2.3 Condição de Pagamento
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia capturada: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como tirar dúvidas ou consultar tickets na Carolina
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como tirar dúvidas ou consultar tickets na Carolina no módulo Gestão de Estoque, Compras e Faturamento?

#### [007] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Copiar Produtos entre Coligadas
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [008] Copiar Produtos entre Coligadas
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Na tela do Processo é possível selecionar para quais coligadas o cadastro será copiado.
- Evidencia capturada: Para a cópia dos registros, o sistema faz consistências, testando se parâmetros determinados em cada coligada são os mesmos. Veja a seguir quais as consistências:

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como Vincular um campo complementar a uma Tabela Dinâmica
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como vincular um Campo Complementar a uma Tabela Dinâmica.

#### [010] 1.2.3 Condição de Pagamento
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia capturada: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Importação de Produto via Webservice
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como realizar Importação de Produto via Webservice ?

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Exportação de Produto via Webservice
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Produto não é exibido na Ficha Física Financeira
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Ocorrência

#### [014] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Inclusão de Motivo de Referência em outra coligada
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como incluir um Motivo de Referência em outra coligada?

#### [015] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como cadastrar Grade Numerada
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como cadastrar novos produtos de Grade Numerada ?

#### [016] 1.2.3 Condição de Pagamento
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia capturada: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .

#### [017] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Para alterar Tipo do Produto não podem existir tributos cadastrados para este
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Grade Numerada
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [019] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Valor inválido para o campo 'Cód. Unidade Base'
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:1:00min
- Evidencia capturada: Ocorrência

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como cadastrar nova Série
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Como Alterar Código de Produto
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida

#### [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Tributo não exibido em Anexos - Tributos do Produto
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Descrição Permissões por Tipo de movimento
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Qual a função/impacto de cada Permissão por Tipo de Movimento existente no anexo do Usuário?

#### [024] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Definição de parcelas em condição de pagamento
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [025] 1.2.3 Condição de Pagamento
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia capturada: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .

#### [026] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Nível anterior ao produto não cadastrado
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Não é possível alterar a Unidade de Controle
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Produto XXXX: Não é possível alterar a Unidade de Controle, há movimentações existentes para o produto.

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Importação/Exportação de Produto via Conceito/Layout
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 minutos
- Evidencia capturada: Ocorrência

#### [029] RM - EST - Como tornar o anexo Dados Fiscais do Produto obrigatório
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Dúvida
- Evidencia capturada: Como tornar o anexo Dados Fiscais do Produto obrigatório durante a inclusão de um novo produto e para os já cadastrados?

#### [030] PRD0001 Tornar Anexo Dados Fiscais do Produto Obrigatorio
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar editor de fórmulas no auxilio ao cadastro desta
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Dúvida Como identificar a sintaxe de funções de fórmula e aplicabilidade destas?

#### [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Chave Duplicada TXPRDRED
- Categoria de fonte: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [033] PRD0002 Violacao de chave TXPRDRED
- Categoria de fonte: Cadastros
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto:
- Evidencia capturada: TOTVS Gestão de Estoque, Compras e Faturamento

### Controle_Orçamentário.md (10 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária/Financeira Global
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [002] Natureza Orçamentária Financeira
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Atualmente já existe no TOTVS Gestão de Estoque, Compras e Faturamento, uma tabela de Natureza do Orçamento.
- Evidencia capturada: Identificamos que essa tabela tem o mesmo conteúdo que a Tabela de Natureza Financeira, portanto, decidimos evoluir a Tabela de Natureza do Orçamento tendo em vista que as duas teriam as mesmas informações tanto no Gestão de Estoque, Compras e Faturamento através do processo de controle orçamentário quanto no TOTVS Gestão Financeira através do processo de Fluxo de Caixa.

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária inválida para o Tipo de Orçamento informado!
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Ocorrência Ao realizar o processo de Importação de Arquivo de Orçamento ocorre a mensagem: Natureza Orçamentária inválida para o Tipo de Orçamento informado!

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como aumentar número de registros em Visão de Consulta de Orçamento
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [005] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como desvincular Classificação de Período a Centro de Custo
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar o processo Desvincula Centro de Custo da Classificação de período é apresentada a mensagem:

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como utilizar Classificação de Período de Orçamento
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Qual a finalidade do cadastro e vínculo à uma Classificação de Período ?

#### [007] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência Ao cadastrar um vínculo de centro de custo agrupador o sistema apresenta a mensagem: O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Controle Orçamentário
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida

#### [009] ORC0002 Controle Orcamentario
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como importar Orçamento via arquivo TXT/Excel
- Categoria de fonte: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:08:30 min
- Evidencia capturada: Dúvida

### Gestão_De_Compras.md (34 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Desconto por Item de Movimento na cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como levar o desconto preenchido na cotação para o Item do Movimento?

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Desconto por Movimento na cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como levar o desconto preenchido na cotação para o movimento?

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Erro Portal do Fornecedor: Usuário e Senha inválidos!
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência

#### [004] 01. Portal do Fornecedor | Pré-requisitos
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: - "API"
- Evidencia capturada: -

#### [005] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Quais são as API's disponíveis?
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Neste documento iremos apresentar os documentos de referência das API's disponíveis no módulo Gestão de Estoque, Compras e Faturamento.

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como instalar o Portal do Fornecedor
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como realizar a instalação do Portal do Fornecedor?

#### [007] Portal do Fornecedor
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: O Portal do fornecedor tem como objetivo oferecer uma melhor experiência na gestão de compras para nossos clientes e seus fornecedores , com uma ferramenta que irá conferir praticidade e agilidade ao processo, garantindo sempre qualidade e segurança ao negócio.
- Evidencia capturada: - /pages/viewpage.action?pageId=639955763

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como parametrizar o campo "frete" do orçamento de cotação para trabalhar como valor
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Editar Preço Cotado após calcular Quadro Comparativo
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Webservices Cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida

#### [011] Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como utilizar a opção Usar Preço Total no Item, dentro da Cotação.
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cotação cancelada ao cancelar Ordem de Compra.
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Processo de Cotação (Compras)
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:10:00 min Dúvida
- Evidencia capturada: O processo de compras indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A Cotação é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. Ambiente

#### [014] Parâmetros - Cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Para conseguir atender os casos onde existem parametrizações diferentes/específicas do processo de cotação entre as filiais da mesma coligada. Os parâmetros da cotação pode ser definidos em dois niveis:
- Evidencia capturada: - Geral

#### [015] Cotação (Compras)
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: O processo de compras Indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A cotação é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. O processo inicia-se na criação de uma solicitação de compras onde é gerado um movimento do tipo 1.1.xx onde são solicitados os produtos que a empresa precisa comprar. Após a criação do movimento de solicitação, é iniciada então a Cotação, onde a relação dos produtos será enviada para determinados Fornecedores que darão a resposta do orçamento. É utilizado então o quadro comparativo para que seja definido qual é a compra que será mais benéfica para a empresa. Após o cálculo do quadro comparativo, temos o vencedor da cotação. A partir desse momento geramos a ordem de compras num outro movimento do tipo 1.1.xx. Este parametrizado para ser um "Pedido de compra" que posteriormente dará origem ao movimento final de compras do tipo 1.2.xx, neste tipo de movimento obrigatoriamente deverá ter um Fornecedor vinculado, este deverá ser cadastrado no sistema antes de iniciar o processo de compras.
- Evidencia capturada: Para trabalhar com cotação, devemos ter a seguinte parametrização nos tipos de movimento:

#### [016] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Registro de Orçamento via Planilha.NET sem Conceito
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [017] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Central de Compras
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como funciona a Central de Compras?

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Parametrização Cotação Web
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como parametrizar o sistema para utilizar a Cotação Web?

#### [019] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Permitir Cotação Parcialmente Gerada
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como solucionar o erro:

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cotação não permite Alterar Tipo de Julgamento de Melhor oferta
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Por que ao tentar editar uma cotação o ícone Alterar o Tipo de Julgamento de Melhor oferta se encontra desabilitado para utilização?

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Tipo de Movimento Usado para Geração de Ordem de Compra pela Cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 03:00 min
- Evidencia capturada: Dúvida

#### [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Copiar Campos da Solicitação Para a Ordem de Compra através da cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Usuário não cadastrado na base de dados
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar realizar Exportação da Cotação para Web é apresentada a mensagem:

#### [024] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Agrupar/Não Agrupar itens iguais na Cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como Agrupar/Não Agrupar itens iguais em orçamento da cotação?

#### [025] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Copiar Campos da Solicitação de Compras para Ordem de Compra na Geração por Cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como copiar campos como Segundo Número (Não Sequencial), Data Extra, Funcionários e Campos Livres do movimento de Solicitação de Compra para o movimento destino, na geração de Ordem de Compra pela Cotação?

#### [026] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Permitir cotar solicitação de compra de outros compradores
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como permitir que um Comprador possa Cotar Solicitações feitas por outros compradores?

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - O comprador responsável por esta cotação não tem um e-mail definido
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - O preço unitário do item do movimento tem um valor inferior ao seu preço cotado
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao gerar ordem de compras a partir de uma cotação sistema apresenta a mensagem abaixo:

#### [029] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cálculo do Quadro Comparativo solicita cotação de moeda
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Ocorrência

#### [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Não é possível inserir uma cotação com mais de 0 fornecedores
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência Ao executar o processo de assistente de cotação, após informar os fornecedores avançar, o sistema apresenta mensagem: Não é possível inserir uma cotação com mais de X fornecedores

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Importar Planilha de Orçamento/Negociação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min.
- Evidencia capturada: Ocorrência

#### [032] Importação de Orçamento
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Para que seja possível realizar a importação do orçamento via arquivo texto (. txt) e/ou planilhas (.xls), deve-se, seguir as configurações conforme especificação abaixo:
- Evidencia capturada: Importação via arquivo TXT

#### [033] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como realizar Interferência por Produto
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como realizar Interferência no Novo Quadro Comparativo.\]

#### [034] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Item não exibido durante a inclusão da Cotação
- Categoria de fonte: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

### Gestão_De_Contratos.md (57 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Erro: Não é permitido excluir movimento originado de Faturamento de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Abatimento ou Acréscimo na Parcela
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [003] 03. Contratos 2.0 | Processos | Abatimento ou Acréscimo
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Este processo permite o acréscimo ou abatimento de valor em uma ou mais parcelas que não estejam faturadas ou inativas.
- Evidencia capturada: Exemplo de Aplicação:

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Redistribuir Valor Parcela do Item
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [005] 03. Contratos 2.0 | Processos | Redistribuir Valor Parcela
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: O processo de Redistribuição dos Valores das Parcelas do item do contrato tem como objetivo atualizar os valores das parcelas, a fim de que as mesmas, tenham valores acordados, independente da distribuição igualitária do valor de um item.
- Evidencia capturada: Existem contratos Periódicos e de Arrendamento que são negociados valores diferentes nas parcelas, um exemplo muito comum é em contrato de aluguel de imóvel onde a negociação é variada, por exemplo:

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [007] 06. Contratos - Tabelas do Contrato 2.0
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tabelas
- Evidencia capturada: Nome

#### [008] Contratos 2.0
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: [
- Evidencia capturada: ](https://tdn.totvs.com/x/iM9eNw)

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Conversor 1.0 para 2.0
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [010] 05. Contratos 2.0 | Conversor contrato 1.0 para 2.0
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: O conversor tem como objetivo acelerar a transferência dos contratos cadastrados na versão 1.0 para a versão 2.0. Ambos os contratos utilizam as mesmas tabelas no banco de dados; desta forma, o conversor faz o ajuste dos campos que mudaram de localização e finalidade, além de solicitar os novos campos necessários para a geração das parcelas.
- Evidencia capturada: Pré-requisitos

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Anexo Dados Contrato Origem
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Qual a funcionalidade do Anexo Dados Contrato Origem no movimento?

#### [012] Dados Contrato Origem
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A visualização do anexo do contrato 2.0 é realizada pelo tipo de movimento acessando o menu Anexos / Dados Contrato Origem . Ao selecionar este menu, será exibida a tela de Anexos com os dados do contrato origem selecionado.
- Evidencia capturada: Importante

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Medição do Item
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00 :03:00 min
- Evidencia capturada: Dúvida Como cancelar uma medição no item do Contrato 2.0?

#### [014] 03. Contratos 2.0 | Processos | Medição
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: -
- Evidencia capturada: -

#### [015] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Medição do Item
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como gerar medição no item do Contrato 2.0?

#### [016] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Aditivo do Item
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como cancelar o aditivo gerado no Contrato 2.0?

#### [017] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Aditivo no Item
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como gerar aditivo no item do Contrato 2.0?

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Reajuste Preço
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como cancelar o reajuste de preço no Contrato 2.0?

#### [019] 03. Contratos 2.0 | Processos | Reajuste Preço
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: -
- Evidencia capturada: -

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Reajustar Preço
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como reajustar preços no contrato 2.0?

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Copiar Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como realizar a copia de contratos no Contrato 2.0?

#### [022] 03. Contratos 2.0 | Processos | Copiar Contratos
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Este processo possibilita a cópia de um ou mais contratos simultaneamente para sua própria coligada/filial ou para outras coligadas/filiais, permitindo a cópia para mais de uma coligada por vez. Ao realizar a cópia, um novo contrato é gerado, herdando do contrato original os dados cadastrais relacionados (contrato, item do contrato e rateio por centro de custo).
- Evidencia capturada: Apesar de seu nome, o processo define o destino por coligada e filial. Isso significa que é possível copiar um contrato da coligada: 1, filial: 1 para a coligada: 1, filial: 1, 2, 3, etc., de uma única vez, assim como para qualquer outra coligada ou filial ativa.

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Alterar Status
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como alterar status no Contrato 2.0?

#### [024] 03. Contratos 2.0 | Processos | Alterar Status Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Durante a criação do contrato, é possível definir seu status inicial. No entanto, após o início das operações e processos relacionados, qualquer modificação de status só poderá ser feita através do processo "Alterar Status Contrato" .
- Evidencia capturada: Esse processo permite alterar o status de um ou mais contratos simultaneamente.

#### [025] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Previsão Financeira
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como cancelar a previsão financeira no Contrato 2.0?

#### [026] 03. Contratos 2.0 | Processos | Previsão Financeira
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: -
- Evidencia capturada: -

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Previsão Financeira
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como gerar previsão financeira no Contrato 2.0?

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Faturamento
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como cancelar o faturamento de um Contrato 2.0?

#### [029] 03. Contratos 2.0 | Processos | Faturamento
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: -
- Evidencia capturada: -

#### [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Faturar
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como realizar o faturamento do Contrato 2.0?

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Erro: O valor total das medições do item é maior que o seu valor total
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência Ao tentar incluir uma nova Medição no Item do Contrato é apresentado o erro: O valor total das medições do item é maior que o seu valor total.

#### [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Previsão de Faturamento de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Qual a finalidade do menu Previsão de Faturamento de Contrato?

#### [033] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipo de Faturamento no Item do Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Qual a finalidade das opções apresentadas no Tipo de Faturamento do item do Contrato?

#### [034] Itens de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Os itens de contrato são a parte principal do contrato.
- Evidencia capturada: Neles é que são discriminados os produtos e/ou serviços inerentes ao contrato.

#### [035] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tabelas de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida

#### [036] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Produtos por Filial no Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como Criar Tipos de Produtos por Filial no Contrato?

#### [037] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Produtos para Faturamento no Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como Criar Tipos de Produtos para Faturamento no Contrato?

#### [038] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Motivos de Cancelamento no Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como Criar Motivos de Cancelamento para o Contrato?

#### [039] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Status de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como Criar Status de Contrato?

#### [040] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Contratos
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como Criar Tipos de Contratos?

#### [041] Tipos de Contratos
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Por esta opção são cadastrados os tipos de contrato que serão utilizados na inclusão de novos contratos.
- Evidencia capturada: Como há uma variedade de tipos de contratos que uma empresa pode utilizar, foi disponibilizado no sistema a possibilidade de se cadastrar estas variações, a fim de facilitar a identificação de um contrato nos controles que a empresa utilizar.

#### [042] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Cancelar/Descancelar Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como cancelar ou desfazer o cancelamento de um contrato?

#### [043] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Como criar Campo Complementar para o Item do Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como criar Campo Complementar para o Item do Contrato?

#### [044] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Como criar Campo Complementar para o Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como criar Campo Complementar para o Contrato?

#### [045] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Como habilitar Campo Complementar no Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como parametrizar para que o Campo Complementar fique visível no Contrato?

#### [046] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Cópia de Contratos Entre Coligadas
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como habilitar o processo Cópia de Contratos Entre Coligadas no módulo Gestão de Estoque, Compras e Faturamento?

#### [047] Cópia de contrato entre coligadas
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Importante
- Evidencia capturada: Recurso disponível a partir da release 12.1.2306

#### [048] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Faturamento de Itens Periódicos Sem Vigência Definida
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00 :04:00min
- Evidencia capturada: Dúvida

#### [049] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Gerar Contrato a partir do Pedido de Compras
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 03:00 min
- Evidencia capturada: Dúvida Como gerar contrato a partir de um Pedido de compras?

#### [050] Gerar Contrato a partir do Pedido de Compras
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Esse processo gera contrato a partir de um pedido de compra criado através da cotação ou manualmente.
- Evidencia capturada: Principais Campos e Parâmetros

#### [051] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Previsão Financeira de Contrato por Medição
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como gerar Previsão Financeira de Contrato de Medição?

#### [052] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Nenhuma medição a faturar
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Ao faturar um contrato do tipo Medição é exibido o erro: Nenhuma medição a faturar.

#### [053] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Condição de Pagamento x Prazo
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Qual a diferença entre o campo Condição do Pagamento a Prazo na aba Cabeçalho do Item de Contrato e o campo Código da Condição de Pagamento aba Condições Gerais do Item de Contrato?

#### [054] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Gerar Financeiro de acordo com a data de faturamento do contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como gerar o lançamento financeiro de acordo com a data de faturamento do contrato?

#### [055] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Ícones de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida

#### [056] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipo de Movimento Não Apresentado no Item de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [057] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Nenhum Movimento Gerado no Faturamento de Contrato
- Categoria de fonte: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Ocorrência

### Gestão_De_Estoque.md (36 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Processo de Consignação - Empresa Remetente
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida

#### [002] Parametrização do Processo de Consignação – Remetente
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto
- Evidencia capturada: :

#### [003] Demonstração Processo de Consignação – Remetente
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto
- Evidencia capturada: :

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Inventário de Estoque
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [005] Inventário de Estoque
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: O Inventário permite que seja informado no sistema o resultado da conferência física de mercadorias em estoque. Desta forma o processo de inventário garante os estoques da empresa com as quantidades corretas de seus produtos.
- Evidencia capturada: -

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Instalação do APP Minha Contagem de Estoque
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como realizar a instalação do aplicativo Minha Contagem de Estoque?

#### [007] Minha Contagem de Estoque - App
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: O App "Minha Contagem de Estoque" tem como objetivo realizar a contagem do estoque, a partir da leitura por código de barras do endereçamento (locação) e na sequência o código de barras do produto, com isso será registrado a contagem física do estoque, de forma automática e sem interferências, trazendo mobilidade para etapa de contagem
- Evidencia capturada: Fique ligado!

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - "Produto XXXXXX: Estoque COM terceiros com saldo maior que o saldo físico no local".
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como fechar estoque?
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Regerar Saldos e Custos
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00 min
- Evidencia capturada: Dúvida

#### [011] INV0003 Acerto de Saldo em Estoque através de Inventário
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Processo de Industrialização Retorno em 1 NF Remetente
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:06:00min
- Evidencia capturada: Dúvida Como realizar o processo de Industrialização Retorno em 1 NF Remetente pelo Módulo Gestão de Estoque, Compras e Faturamento.

#### [013] Demonstração do processo de Industrialização (Retorno em 1 NF) - Remetente
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto
- Evidencia capturada: :

#### [014] Demonstração do processo de Industrialização (Retorno em 1 NF) - Remetente
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto
- Evidencia capturada: :

#### [015] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Erro de estouro aritmético ao converter numérico em tipo de dados numérico
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Dúvida Este documento tem por finalidade auxiliar na tratativa do processo de Regerar Saldos e Custos , onde a mensagem apresentada é: Não foram regerados os dados do produto XX.XX – Mensagem original: Erro de estouro aritmético ao converter numérico em tipo de dados numérico.

#### [016] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Flag Forçar Regeração Total não é exibida ao Regerar Saldos e Custos
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao Regerar Saldos e Custos a flag Forçar Regeração Total não é exibida:

#### [017] Processo Produtivo Simples
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Processo Produtivo Simples
- Evidencia capturada: Avaliação

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como Importar e Gerar o Relatório de Ficha Física Financeira
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [019] Relatório de Ficha Física Financeira
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: É indispensavel a realização do processo Regerar Saldos e Custos no menu Estoque | Processos , antes de emitir a Ficha Fisica Financeira que alimenta a tabela TRELSLD.
- Evidencia capturada: Mais detalhe em https://tdn.totvs.com/x/JMtEGQ

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Conversão de Unidades de Medida no Movimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Ocorrência

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Acerto de Saldo em Estoque por Lote
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como parametrizar o sistema para acertar Saldo de Produto em Estoque por Lote?

#### [022] Processo Produtivo Simples
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Processo Produtivo Simples
- Evidencia capturada: Avaliação

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Ajuste de Custo Médio
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Como ajustar o Custo Médio de produtos na base?

#### [024] INV0003 Acerto de Saldo em Estoque através de Inventário
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [025] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Processo Produtivo Simples
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como utilizar o Processo Produtivo Simples?

#### [026] Processo Produtivo Simples
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Processo Produtivo Simples
- Evidencia capturada: Avaliação

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Saldo do Produto Negativo
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Porque mesmo com a aplicação parametrizada para barrar movimentações com saldo negativo, há produtos nesta situação?

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RES - Produtos não são apresentados no “Processo” e na “Analise” do Ressuprimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida

#### [029] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RES - Nenhum tipo de movimento é apresentado na analise de Ressuprimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida

#### [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como o custo médio é calculado.
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como o sistema calcula o Custo Médio de um produto?

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Alterar Data de Fechamento do Estoque
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Nenhum Movimento Apresentado Nos Parâmetros de Inventário
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [033] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Erro de conexão ao utilizar o Painel do Movimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [034] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Painel do Movimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como acessar o Painel de Movimento?

#### [035] Painel do Movimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: 01. VISÃO GERAL
- Evidencia capturada: O Painel do Movimento apresenta as informações necessárias para a tomada de decisão, em uma única interface de forma rápida, amigável e segura. É possível visualizar as movimentações de múltiplas coligadas, por filial(s), por produto(s), por fornecedor(s), grupo de produto(s), dentre outros, conforme seleção dos filtros. Para o seu desenvolvimento utilizamos tecnologias web, que estão de acordo com o novo modelo de interface do RM.

#### [036] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Tela Branca ao utilizar o Painel do Movimento
- Categoria de fonte: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência n°1 Na Tentativa de utilizar o Painel de Movimentos uma tela branca é Demonstrada:

### INDEX.md (0 artigos capturados)

### Integração_Com_Fluig.md (9 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar Movimento: Não foi possível cancelar Workflow Fluig para este movimento
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao criar movimento integrado com o Fluig - Erro ao criar uma instância no Servidor do Fluig: Could not send Message
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitação aprovada no Fluig não aprovada no RM
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência

#### [004] Workflow Processo BPM Fluig de Aprovação de Movimento
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: - 1 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-1.Objetivo
- Evidencia capturada: - 2 WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-2.Benefícios

#### [005] Aprovação de Contrato por Workflow no Fluig
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: contratos, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Através da integração do Fluig com o TOTVS Gestão de Estoque, Compras e Faturamento é possível realizar a aprovação de Contratos, Itens de Contrato e Medições para faturamento.
- Evidencia capturada: Nesse processo ao incluir ou alterar um Item de Contrato será gerado um workflow no Fluig com os dados do Contrato, Item de Contrato ou Medição, onde um usuário com papel de aprovador deve acessar o Formulário no Fluig e conforme análise dos dados aprovar ou não o workflow.

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - RM x Fluig Como alterar valor mínimo da aprovação automática
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como alterar o valor mínimo para aprovação automática da solicitação de compras integrada ao Fluig?

#### [007] Workflow Processo BPM Fluig de Solicitação de Compra
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: - 1 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-1.Objetivo
- Evidencia capturada: - 2 WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-2.Benefícios

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fluig: NOK Usuário Não Encontrado!
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência Ao acessar a etapa Workflow Fluig nos parâmetros do tipo de movimento ou ao tentar criar um movimento integrado ao Fluig é apresentado o erro: NOK Usuário Não Encontrado!

#### [009] GED - Gerenciamento Eletrônica de Documentos
- Categoria de fonte: Integração_Com_Fluig
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente

### Integração_Com_Totvs_Colaboração.md (23 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Acompanhamento de Arquivos Recebidos
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Automatização de Importação de Arquivo XML TOTVS Colaboração
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:30 min
- Evidencia capturada: Ocorrência

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro: Não foi possível encontrar a Coligada correspondente ao CNPJ favor verificar o cadastro de Filiais
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Importação de NF-e/NFS-e/CT-e de entrada através de XML sem Parceiros
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00 min
- Evidencia capturada: Dúvida

#### [005] TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia capturada: Informações Gerais

#### [006] 1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia capturada: Informações Gerais

#### [007] Manual Totvs Colaboração 2.0
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: /download/attachments/185748531/Manual%20-%20Totvs%20Colabora%C3%A7%C3%A3o%202%200.docx?version=6&modificationDate=1429886794000&api=v2
- Evidencia capturada: ---

#### [008] MATFATCMPCRM01-2833 DT Importação de NF-e e CT-e
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente

#### [009] Parametrização (TOTVS Colaboração 2.0)
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: parametrizacao, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Primeiramente devemos parametrizar o ambiente para "TOTVS Colaboração 2.0".
- Evidencia capturada: Deverá ser parametrizado o campo "Tipo de movimento para inclusão automática de CT-e" que se encontra na tela de dados fiscais da Filial acessando o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Parâmetros por Filial | Importação/Envio de Arquivo XML 2/2.

#### [010] TSRMCN DT Recebimento Automático de NF-e
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro ao Consultar XML (Estouro de SqlDateTime)
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência Ao executar o processo de Serviço de Consulta de Arquivos XML sistema apresenta a mensagem abaixo:

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - IMPXML - XML status Pendente
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Ao acessar tela de Importação de arquivo XML - Cadastro de XML o registro é exibido com status igual a Pendente .

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - XML não enviado para pasta IN
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência Portal Neogrid apresenta nota que não foi enviada para a pasta IN e não foi importada no ERP , ao Reenviar ao ERP ela passa a ser exibida na pasta.

#### [014] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT- Tipos de Recebimento de NF-e TOTVS Colaboração versão 2.0
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Quais opções o sistema disponibiliza para Recebimento Automático de NF-e (Compra)?

#### [015] TSRMCN DT Recebimento Automático de NF-e
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente

#### [016] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - TOTVS Colaboração: Tradução automática de itens para produto diferente do definido.
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência No módulo TOTVS Gestão de Estoque, Compras e Faturamento, ao efetuar a Inclusão de movimento via arquivo XML, o sistema irá solicitar que o usuário escolha se deseja ou não buscar o Pedido de forma automática, caso seja selecionada a opção Sim , o sistema apresenta na tela de Tradução de Itens um código de produto divergente do configurado em Anexos - Produtos para Importação de XML.

#### [017] Cross Segmentos - TOTVS BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento - COLAB - Não existem arquivos a serem importados na Importação de NF-e e CT-e sem NEOGRID
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos é apresentada a mensagem Não existem arquivos a serem importados, mesmo que possua XML's na pasta.

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como solucionar o erro "Não existem arquivos a serem importados" no TOTVS Colaboração 2.0
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência Ao acessar menu Integrações | Monitor de Arquivos | Processos | Importação de Arquivos - Totvs Colaboração é apresentada a mensagem Não existem arquivos a serem importados , mesmo que possua XMLs na pasta IN.

#### [019] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Seleção de Filial ao incluir XML de CT-e
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:30 min
- Evidencia capturada: Dúvida Para qual Filial o XML de CT-e será inserido quando feita importação via TOTVS Colaboração ?

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Seleção de Natureza de Operação utilizando TOTVS Colaboração
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como o sistema seleciona a Natureza de Operação quando movimento é inserido via arquivo XML?

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar e incluir movimento através do TOTVS Colaboração versão 2.0
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Como configurar, importar, consultar, o que cadastrar e como cadastrar para utilizar o TOTVS Colaboração 2.0?

#### [022] TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia capturada: Informações Gerais

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Principais Parametrizações do Processo Importação de Arquivos XML
- Categoria de fonte: Integração_Com_Totvs_Colaboração
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: parametrizacao, compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como fazer as parametrizações básicas do processo de Importação de Arquivos XML para inclusão de movimentos de recebimento ( Compra )?

### Integração_Fiscal.md (33 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K290, K291 e K292 Produção Conjunta
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia capturada: Dúvida Como parametrizar o Sistema para geração dos Blocos K290, K291 e K292 Produção Conjunta .

#### [002] FIS0001 Bloco K Gerar SPED FISCAL v2.0
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração: Enviar Despesa e Desconto do Movimento para o Lançamento Fiscal
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como levar os campos Despesa e Desconto do movimento para o lançamento fiscal gerado após Escrituração?

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Nota Fiscal de Serviços Eletrônica (NFS-e) ainda não foi autorizada pela Prefeitura
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, colaboracao, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min.
- Evidencia capturada: O corrência No módulo Faturamento, ao tentar realizar a escrituração de uma nota de serviço é apresentada a mensagem abaixo, mesmo a nota estando autorizada ou cancelada.

#### [005] Fiscal (Parâmetros de Integrações)
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: parametrizacao, fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: -
- Evidencia capturada: -

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração de NFS-e
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, colaboracao, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao escriturar NFS-e sistema apresenta a mensagem abaixo:

#### [007] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Processo de Escrituração migrado
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como funciona o processo de Escrituração após a migração para o RM.exe (MDI)?

#### [008] Escrituração de Lançamento Fiscais
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Produto
- Evidencia capturada: TOTVS Gestão Fiscal

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração: Menu de escrituração do RM.exe (MDI)
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min.
- Evidencia capturada: Dúvida Onde encontrar o menu de escrituração migrado para o RMexe (MDI)?

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K250 e K255
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Dúvida Como parametrizar o módulo para geração dos Blocos K250 e K255 pelo Processo de Industrialização COM Terceiros Retorno em 2 NF's (Remetente).

#### [011] FIS0001 Bloco K Gerar SPED FISCAL v2.0
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K230 e K235 Processo Produtivo Simples
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como parametrizar o módulo para geração dos Blocos K230 e K235 pelo Processo Produtivo Simples .

#### [013] FIS0001 Bloco K Gerar SPED FISCAL v2.0
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [014] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração dos Blocos K210 e K215
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como parametrizar o módulo para geração dos Blocos K210 e K215.

#### [015] MOV0006 Bloco K Registro K220
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: movimento, fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia capturada: Informações Gerais

#### [016] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração do Bloco K220
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Como parametrizar o Sistema para geração do Bloco K220 .

#### [017] MOV0006 Bloco K Registro K220
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: movimento, fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Este documento é material de especificação dos requisitos de inovação, trata-se de conteúdo extremamente técnico.
- Evidencia capturada: Informações Gerais

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração do Bloco K280
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como parametrizar o módulo para geração do Bloco K280 . Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [019] FIS0001 Bloco K Gerar SPED FISCAL v2.0
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - BLK - Parametrização para geração do Bloco K200
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como parametrizar o módulo para geração do Bloco K200?

#### [021] FIS0001 Bloco K Gerar SPED FISCAL v2.0
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração: Número do Lote Inválido! Lote: 0 não encontrado para a filial X!
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min.
- Evidencia capturada: Ocorrência Ao escriturar movimentos de uma determinada filial, o sistema exibe a mensagem abaixo:

#### [023] RMPAT00003 Integração com o RM Nucleus
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: geral
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Produto
- Evidencia capturada: :

#### [024] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Código do Patrimônio dos Itens deve estar preenchido para Naturezas referentes ao Ativo Imobilizado
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar Escrituração de lançamentos é apresentada a mensagem:

#### [025] RMPAT00003 Integração com o RM Nucleus
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: geral
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Produto
- Evidencia capturada: :

#### [026] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Habilitar o menu de Escrituração no RM.exe (Processo migrado para .Net?
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia capturada: Dúvida Como Escriturar movimentos utilizado o RM.exe, já migrado para a plataforma .Net?

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Escrituração de lançamentos - Período de apuração do tributo ISS não está aberto para movimentação
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min.
- Evidencia capturada: Ocorrência No módulo RMNucleus - Totvs Gestão de Estoque, Compras e Faturamento , ao tentar realizar o processo de escrituração dos lançamentos, o sistema apresenta a mensagem: Período de Apuração do(s) Tributo(s) ISS não está aberto para movimentação.

#### [028] RMFIS00007 Apuração de Tributos - ISS
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [029] RMFIS00006 Apresentação ISS
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: geral
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram

#### [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração: Data de Entrada/Saída não poderá ser anterior à data do Sistema
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência Ao realizar o processo de Escrituração é apresentada a mensagem:

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Invalid column name ao escriturar movimentos
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Ocorrência Ao realizar a Escrituração de Movimento através do TOTVS Gestão de Estoque, Compras e Faturamento o processo é interrompido e apresentado o erro abaixo:

#### [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Nenhum Movimento foi Selecionado para a Filial X! Verifique o filtro da Escrituração!
- Categoria de fonte: Integração_Fiscal
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Ocorrência

#### [033] Escrituração de Lançamento Fiscais
- Categoria de fonte: Integração_Fiscal
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: fiscal
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Produto
- Evidencia capturada: TOTVS Gestão Fiscal

### Movimento.md (148 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Natureza de rendimento default no tributo IRRF para o lançamento financeiro
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [002] Geração de IRRF Automático para o Totvs Gestão Financeira
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Geração de IRRF Automático para o Totvs Gestão Financeira
- Evidencia capturada: Avaliação

#### [003] Integração Financeira|Aba Tributos
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Regras para preenchimento do campo Natureza de Rendimento do Movimento para o Lançamento Financeiro
- Evidencia capturada: Na geração dos lançamentos financeiros a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo Natureza de Rendimento será levado para o lançamento financeiro (aba Valores |Tributos), conforme as regras abaixo:

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipos de Vias de transporte e seu código no Banco de Dados
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [005] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Faturamento/Recebimento de Movimentos gerados do Módulo Construção e Projetos
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro Relatório do Movimento Inexistente na Coligada de Destino
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [007] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVFATURAMENTO TTMVFAT
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TTMVPED
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TVEN1
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erros mais comuns ao copiar Tipo de Movimento entre Coligadas
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV FTDODUP
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TLOC
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV FTB1
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [014] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVSERIE TSERIE
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [015] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TCPG
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [016] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV GFRMBRUTO
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [017] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV FCXA
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Rastrear Movimentos
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como ver a rastreabilidade de um movimento?

#### [019] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVEXT GFORMULA
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint FKTTMVEXT\ GFORMULA {...}

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Natureza de rendimento default no tributo IRRF PJ para o lançamento Fiscal (Liber)
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [021] Serviço de Tributação
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Conteúdo
- Evidencia capturada: - 1 ServiçodeTributação-1.Oqueé

#### [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Natureza de Rendimento default para contribuições sociais retidas
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min Dúvida Como levar para o financeiro natureza de rendimento default dos tributos PISRF, COFINSRF, CSLLRF e CSRF ?
- Evidencia capturada: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento a partir da biblioteca 12.1.2209

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor inválido para o campo Natureza
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [024] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [025] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitar Exclusão de Toda Operação Contábil
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [026] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Estornar item parcialmente recebido
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Cópia de Movimento a Partir de Outro Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min.
- Evidencia capturada: Dúvida

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- MOV - Movimento com itens relacionados pelo processo de cópia por referência!
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia capturada: Dúvida

#### [029] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - É possível realizar o vínculo automático do adiantamento com a nota fiscal no financeiro?
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [030] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo Código da Base de Crédito default
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como fazer teste de fórmula
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:06:00 min
- Evidencia capturada: Dúvida

#### [032] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [033] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - FAT - Tolerância no faturamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 03:00 min
- Evidencia capturada: Dúvida Como parametrizar o módulo para o uso de tolerância no faturamento?

#### [034] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipo de Documento informado no movimento não carrega no Lançamento Financeiro
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [035] Cross Segmentos - TOTVS BackOffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Não é permitido incluir itens de movimento com diferentes deduções de INSS para o Empregador
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência Ao tentar salvar o Movimento ocorre o erro: Não é permitido incluir itens de movimento com diferentes deduções de INSS para o Empregador.

#### [036] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Contabilização de Movimentos
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [037] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O registro foi cadastrado com sucesso, entretanto, o mesmo não atende as condições do filtro aplicado na visão
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência

#### [038] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Faturamento de Movimento Via Fórmula Visual
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como utilizar a atividade Faturamento Movimento para faturar um movimento via fórmula visual?

#### [039] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento específico para produtos não estocáveis em movimentações criadas pelo Protheus
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como parametrizar o sistema RM para que durante a geração de Ordens de Serviço no Protheus o movimento gerado para produtos não estocáveis seja específico.

#### [040] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Código do Banco Obrigatório no Pagamento.
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência Ao incluir um Movimento parametrizado para utilizar Meios de Pagamento onde a Forma de Pagamento utilizado é Cheque , ao salvar o inclusão o Sistema apresenta a seguinte mensagem:

#### [041] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação/Exportação de Movimento via Webservice
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como realizar a Importação/E xportação de Movimento via Webservice utilizando protocolo SOAP ?

#### [042] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [043] Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Como habilitar o campo CEI no Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Dúvida
- Evidencia capturada: Qual parametrização realizar para habilitar o campo CEI (Cadastro Específico do INSS) no Movimento?

#### [044] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Quantidade máxima de itens no faturamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [045] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - The time zone ID 'E.South America Standard Time' was not found on the local computer.
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Causa

#### [046] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O valor dessa nota ultrapassa o valor disponível para rateio do CTRC
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [047] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Inclusão de movimento com período de apuração encerrado para ISS
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida É possível incluir movimento com período de apuração do tributo ISS encerrado?

#### [048] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Gerar Boleto de Lançamento Financeiro ao Imprimir Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Como gerar o boleto para pagamento do título financeiro originado na inclusão de movimento no módulo Gestão de Estoque, Compras e Faturamento?

#### [049] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [050] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Alteração de Unidade de Medida na Inclusão do Item de Movimento.
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min Dúvida É possível incluir item de movimento com unidade de medida diferente das definidas no cadastro de produto?
- Evidencia capturada: Ambiente

#### [051] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Desabilitar campo Código de Verificação da NFS-e
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como remover o campo Código de Verificação da NFS-e no movimento?

#### [052] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento com Status Não Processado
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [053] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [054] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Diferença Entre Preço Unitário e Valor Unitário do Item de Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Qual a diferença entre os campos Preço Unitário e Valor Unitário do item de movimento e porque esses campos nem sempre terão o mesmo valor?

#### [055] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipo de Documento Inválido
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [056] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Obrigatoriedade do Local de Estoque
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Um Movimento do tipo 1.2.XX pode ser criado sem Local de Estoque ?

#### [057] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao editar Movimento: Violação da chave "FKFCAPTURACOB FLAN"
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [058] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar o movimento: Movimento Id 'X' gerado para fornecedor 'Y'
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao cancelar uma Ordem de Compra gerada por Cotação é apresentado a seguinte mensagem:

#### [059] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Dados Bancários não são exibidos no Lançamento Financeiro
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao incluir um Movimento observa-se que no menu Lançamento Financeiro os dados bancários do Cliente/Fornecedor não são carregados na aba Integração Bancária .

#### [060] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Agrupar Itens Repetidos
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 02:00 min Ocorrência Ao selecionar mais de um Movimento que possui o mesmo Item e em seguida acessar a opção Processos | Faturar / Receber selecionando a opção Agrupar Todos ao visualizar o Movimento de Destino os Itens não são agrupados, mesmo com a Flag Agrupar Itens Repetidos selecionado nos Parâmetros do Tipo de Movimento de Destino:
- Evidencia capturada: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da 11

#### [061] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Editar Campos Complementares na Visão de Movimentos?
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como editar Campos Complementares na visão de Movimentos?

#### [062] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Centro de Custo do Movimento Alterado Não Copia para Item de Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência Ao editar o Movimento parametrizado para copiar o Centro de Custo do movimento para o item de Movimento o Centro de Custo do movimento não é alterado.

#### [063] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Número do documento deve ter X caracteres
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [064] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Visualizar Apenas Movimentos Criados Pelo Usuário Logado
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como criar um filtro para visualizar somente os Movimentos que foram criados pelo usuário que está logado?

#### [065] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Invalid Object Name 'TITMMOVPROCESSOJUD'
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como solucionar o erro Invalid Object Name 'TITMMOVPROCESSOJUD' ao salvar movimento.

#### [066] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como copiar o número do movimento origem para o movimento destino?
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como fazer para que no Faturamento/Recebimento o sistema copie o número do movimento origem para o movimento destino?

#### [067] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Novo tipo de movimento não é exibido na Busca/Seleção/Parametrizador
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Por que ao cadastrar um novo Tipo de Movimento (ou copiar entre coligadas) o Tipo de Movimento não é exibido quando verificado no Menu especifico?

#### [068] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Importação de Movimento com Relacionamento via Conceito
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como executar a importação de um movimento que possua relacionamento via conceito?

#### [069] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Identificação e Execução de XML de Processo
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque, colaboracao
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Dúvida

#### [070] TOTVS WS Client
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [071] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O movimento XXX com o número sequencial Y não foi encontrado na base do Solum
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar Estornar Item Não Recebido de solicitação de compras integrada ao TOP é exibida a mensagem abaixo: O movimento com o número sequencial não foi encontrado na base do Solum.

#### [072] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Total do movimento não deduz valor faturado
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 02:00 min
- Evidencia capturada: Dúvida Por que ao faturar movimento parcialmente por valor, o valor faturado não é deduzido do total do movimento?

#### [073] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Agendar Faturamento Automático
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como realizar o agendamento para faturamento automático?

#### [074] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como incluir Movimento onde Lançamento Financeiro seja gerado com status Baixado?
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como incluir Movimento onde Lançamento Financeiro seja gerado com status Baixado?

#### [075] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Item não relacionado a uma origem
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao incluir um novo movimento é exibida a mensagem de erro abaixo:

#### [076] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Habilitar e Executar o Processo Alterar Valor Lançamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como habilitar e executar o processo Alterar Valor Lançamento disponível no movimento, aba Lançamentos | Financeiro?

#### [077] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Constantes do Módulo Gestão de Estoque, Compras e Faturamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Qual o significado de cada sigla que representa o status de um movimento, cotação, produto, entre outros registros no módulo, quando este é gravado no banco de dados?

#### [078] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [079] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Processo Concluir Pedido
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [080] Conclusão de Pedidos
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Com a utilização da rotina de Faturamento Parcial, o Usuário se vê, em certas situações, na necessidade de que este Pedido não seja mais Faturado. Isto pode ocorrer por situações corriqueiras dos processos da empresa como: indisponibilidade do material no Fornecedor, insatisfação na entrega, falta de espaço no transporte ou no armazenamento, dentre outras. Por conta das rotinas de Recebimento de Materiais, este processo alterará a Quantidade dos Itens que ainda estão pendentes de recebimento para 0 (zero), como se todos eles já estivessem sido 'recebidos'.
- Evidencia capturada: É possível rastrear a execução do processo (Data, Motivo da Conclusão e Usuário Responsável) consultando a tabela TMOTIVOCONCLPED no banco de dados ou em menu Gestão Visões de Dados, utilizando a consulta abaixo:

#### [081] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Alterar Filial Emissão no Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida É possível alterar a filial de emissão de um movimento?

#### [082] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Item X - Produto XXXX do Movimento ?11?!! - Série X: Item repetido
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida

#### [083] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Integração Financeira: Controle de Adiantamento no Faturamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida

#### [084] Controle de Adiantamento
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Controle de Adiantamento
- Evidencia capturada: Avaliação

#### [085] Cross Segmentos - TOTVS BackOffice Linha RM - MOV - Integração Financeira: Geração de INSS Automático para o Totvs Gestão Financeira
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [086] Geração de INSS Automático para o Totvs Gestão Financeira através do TOTVS Gestão de Estoque, compras e Faturamento
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: - Como Fazer
- Evidencia capturada: Como parametrizar o sistema para gerar INSS Automático para o Totvs Gestão Financeira?

#### [087] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O Contador Sequencial Para Esta Série Não Foi Inicializado
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [088] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Botão Incluir não exibido em Movimentações Classificadas como Inventário
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao acessar movimento através do menu Estoque | Inventário | Movimentação botão Incluir não é exibido.

#### [089] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [090] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Gerar Lançamento Financeiro Parcial no Faturamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 02:00 min
- Evidencia capturada: Dúvida Ao faturar movimento parcialmente, como gerar lançamento financeiro com o valor restante?

#### [091] Cross Seguimentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Não permite incluir Rateio por Centro de Custo no movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Ocorrência Ao acessar tela de Rateio por Centro de Custo do movimento botão Incluir não é exibido. E o botão Editar é exibido mas não permite editar o rateio exibido.
- Evidencia capturada: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

#### [092] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Edição de Movimento Não Regrava Lançamento Contábil/Financeiro
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao alterar determinados campos em movimento a integração Contábil/Financeira não é regravada.

#### [093] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Tributos Incompatíveis com a Definição de Natureza
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como solucionar o erro "Movimento?!?!!!!!!!!!- Série A: Tributos incompatíveis com a definição de Natureza.".

#### [094] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - TOP: Alterar Item Integrado em pedido do TOP
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como gerenciar a permissão para alteração da Quantidade e Preço Unitário de itens de movimentos gerados a partir do módulo TOTVS Obras e Projetos (TOP).

#### [095] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como solucionar o erro "Quantidade do item inválida"?
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao alterar a quantidade do Item para mais durante o faturamento é retornada a mensagem: Quantidade do item 1 inválida! Valor Máximo

#### [096] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Aprovação Workflow: Movimento aprovado por outro usuário
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Ocorrência
- Evidencia capturada: No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar alterar um Movimento aprovado pelo Gestão de Relacionamento com Cliente é apresentada a mensagem: Movimento aprovado por outro usuário.

#### [097] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Ajustar o Valor do Bem na Integração Patrimonial
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como integrar Movimentos de aquisição de compras com TOTVS Gestão Patrimonial somando ao valor do bem os impostos, descontos, frete e qualquer outro valor relativo ao item de movimento pertinente à regra de negócio.

#### [098] Inclusão de Bens via Integração com RM Nucleus
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Inclusão de Bens via Integração com RM Nucleus
- Evidencia capturada: Produto:

#### [099] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Enviar E-mail do Movimento Para Contatos do Cliente/Fornecedor
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como enviar e-mail do movimento para os contatos do cliente/fornecedor, dados informados no cadastro do C liente/fornecedor Anexos Contato do Cli/For .

#### [100] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Diferença Entre Partidas de Débito e Crédito ao Contabilizar Movimentos
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min Ocorrência Ao salvar um Movimento que possui Integração Contábil é retornada mensagem:
- Evidencia capturada: O Lançamento não pode ser salvo pois a soma das partidas a débito é diferente da soma das partidas a crédito .

#### [101] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [102] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [103] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Evento contábil: Como funcionam as opções Buscar Centro de Custo em
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como funcionam as opções Buscar Centro de Custo em ?

#### [104] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Percentual de valor financeiro não poderá ser superior a 100%
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 02:00 min
- Evidencia capturada: Ocorrência Ao incluir um Movimento, no momento de salvar, é apresentada a mensagem: Percentual de valor financeiro não poderá ser superior a 100%.

#### [105] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aprovação de movimento: Valores preenchidos no campo TIPOAPROVACAO
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Quais são os valores preenchidos no campo TIPOAPROCAVAO da TMOVAPROVA e o que eles representam?

#### [106] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MAT - Preenchimento Código de Receita em linha de Tributo
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Dúvida Qual a regra utilizada e de quais locais o sistema busca o Código de Receita dos Tributos ?
- Evidencia capturada: Ambiente Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) – A partir da versão 11.22

#### [107] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturamento Automático: Valor dos pagamentos é inferior ao Valor do Documento (movimento)
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao realizar o processo de Faturamento Automático é apresentada a mensagem: Valor dos pagamentos é inferior ao Valor do Documento (movimento).

#### [108] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Geração IRRF para TOTVS Gestão Financeira
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:30 min
- Evidencia capturada: Dúvida Como parametrizar o sistema para gerar IRRF Automático para o TOTVS Gestão Financeira ?

#### [109] Geração de IRRF Automático para o Totvs Gestão Financeira
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Geração de IRRF Automático para o Totvs Gestão Financeira
- Evidencia capturada: Avaliação

#### [110] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Buscar Filial no Cadastro de Default Contábil
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Dúvida Como usar o campo Filial, localizado nos Defaults Contábeis dos cadastros do módulo (Produto, Tabela de Classificação, Natureza Orçamentária/Financeira, etc.) para contabilização de movimentos, identificando a conta contábil correspondente à filial informada.

#### [111] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Permissão menu Solicitar Exclusão de Toda Operação Contábil
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como atribuir/retirar permissão ao menu Solicitar Exclusão de Toda Operação Contábil ?

#### [112] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Alterar a Data Default de contabilização de Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como alterar a data default de contabilização do Movimento?

#### [113] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Data de Movimentação do Estoque deve ser maior que a Data de Fechamento do mesmo
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [114] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Lote de produto não é exibido na inclusão do item de movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Ao incluir um movimento parametrizado para consistir lotes, os lotes do produto não são exibidos durante a inclusão de item de movimento.

#### [115] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento/Item Inconsistente
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [116] MOV0002 Formula de Consistencia
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [117] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Executando log de evento contábil - Diferença entre débito e crédito
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:06:00 min
- Evidencia capturada: Dúvida Ao salvar um movimento o sistema apresenta a mensagem: Diferença na contabilização do movimento O Lançamento não pode ser salvo pois a soma das partidas de débito é diferente da soma das partidas de crédito.

#### [118] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo Identificador de Movimento Impresso não é alterado após imprimir o relatório de movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Porque o campo Identificador de Movimento Impresso não é alterado após imprimir o relatório de movimento?

#### [119] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - IRRF apresentado na tela de tributos do lançamento financeiro
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Ao incluir um movimento com integração financeira, o lançamento gerado apresenta o IRRF na tela de Tributos Valores das Retenções

#### [120] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Menu "Excluir Contabilidade" não é exibido
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao pressionar o botão Processos existente na tela de movimentos o menu Excluir Contabilidade não é exibido.

#### [121] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura : 00:04:00 min
- Evidencia capturada: Ocorrência Ao incluir um movimento que possui integração com o lançamento financeiro o sistema emite a mensagem: " O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento"

#### [122] Parâmetro de Rateio de Centro de Custo e Departamento
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tipo de Rateio: Indique se o rateio será do tipo percentual ou valor.
- Evidencia capturada: Rateio do Movimento: Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.

#### [123] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O lançamento não pode ser cancelado/alterado pois não é o último gerador de IRRF do período
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura : 00:03:00 min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar editar/excluir/cancelar um movimento é apresentada a mensagem: O Lançamento não pode ser cancelado, pois não é o último gerador de IRRF do período.

#### [124] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como utilizar Tabela de Preço
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como utilizar o recurso de Tabela de Preços?

#### [125] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Utilização de natureza fiscal quando houver dados de Coleta e Entrega
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Qual natureza fiscal ( CFOP ) utilizar em movimentos de entrada quando o mesmo estiver parametrizado para cadastrar CTRC/CT-e (parâmetros do tipo de movimento, etapa Fis - Conhecimento de Transporte )?

#### [126] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como solucionar o erro Movimento teve seus lançamentos contábeis exportados!
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência Ao tentar realizar o cancelamento ou exclusão de um movimento é apresentada a mensagem:

#### [127] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo complementar na visão de movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Após migração para o novo modelo de BackOffice, os campos complementares de Movimento não são mais apresentados na visão de Movimento. Para que isso seja possível, é necessário a criação de uma Fórmula visual.

#### [128] Criar coluna de campo complementar na visão de movimentos - TOTVS Gestão de Estoque, Compras e Faturamento
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Linha
- Evidencia capturada: RM

#### [129] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Natureza de Operação não é exibida durante a inclusão do movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Ocorrência

#### [130] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Cancelar ou Excluir Movimento - Pedido já Recebido!
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [131] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Situação Tributária de PIS e COFINS
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Qual a regra utilizada pelo sistema para preenchimento do campo Situação Tributária na linha do tributo no Movimento/Item?

#### [132] Cross Segmentos - TOTVS BackOffice - Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RM - MOV - Movimento com status Em Faturamento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência Ao faturar movimento sistema apresenta a seguinte mensagem:

#### [133] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor do Documento considerando somente o valor bruto do primeiro item
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:06:00min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao criar um movimento com integração financeira o valor original do lançamento financeiro está considerando apenas o valor do primeiro item de movimento.

#### [134] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento fora das datas parametrizadas de movimentação!
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Ocorrência

#### [135] Data do movimento está fora do exercício fiscal
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Data do movimento está fora do exercício fiscal
- Evidencia capturada: Produto:

#### [136] RMCTB00001 Alterações do Período Contábil e do Usuário
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [137] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Local de Estoque não é apresentado no Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [138] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturar/Receber Movimento Via WebService
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [139] Manual Importação/Exportação de Arquivos Texto
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: /download/attachments/185748810/Manual%20de%20Importa%C3%A7%C3%A3o Exporta%C3%A7%C3%A3o%20de%20Arquivos%20Texto%20%282%29.pdf?version=1&modificationDate=1427312090000&api=v2
- Evidencia capturada: ---

#### [140] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor inválido para o Preço Unitário
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

#### [141] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Mov - Violação FXLANOLDPRIM na inclusão de movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00 min Ocorrência
- Evidencia capturada: Devido ao índice único FXLANOLDPRIM da tabela de lançamentos, não foi possível realizar a inserção pois já existe na base de dados o lançamento \[IDLAN\] com os mesmos dados para os campos abaixo, favor verificar:

#### [142] TOTVS Identity
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: [Conteúdo não encontrado ou vazio]
- Evidencia capturada: ---

#### [143] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação de Cadastro com Campos Complementares via Conceito
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [144] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação/Exportação de movimentos via Conceito/Layout
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00min
- Evidencia capturada: Ocorrência

#### [145] Manual Importação/Exportação de Arquivos Texto
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: /download/attachments/185748810/Manual%20de%20Importa%C3%A7%C3%A3o Exporta%C3%A7%C3%A3o%20de%20Arquivos%20Texto%20%282%29.pdf?version=1&modificationDate=1427312090000&api=v2
- Evidencia capturada: ---

#### [146] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Chave Duplicada TXMOVCFX
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 06:00 min
- Evidencia capturada: Ocorrência:

#### [147] MOV0009 Movimento Duplicado na Base TXMOVCFX
- Categoria de fonte: Movimento
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [148] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Produto Não Permitido para o Tipo de Movimento
- Categoria de fonte: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência

### Objetos_Gerenciais.md (14 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aplicar IntelliTrace
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como executar o IntelliTrace e enviar para análise?

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento possui vínculo com o Gestão Hospitalar e não pode ser excluído
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividades de Inclusão de Movimento
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00 min
- Evidencia capturada: Dúvida

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual como utilizar a atividade Alteração de Movimento
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida O que é necessário para utilizar a atividade Alteração de Movimento ?

#### [005] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como visualizar nome do campo e tabela correspondente no Banco de dados
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como identificar a qual tabela do banco de dados o campo exibido na tela pertence?

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Desabilitar Triggers e Fórmulas Visuais
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como desabilitar as Triggers e Fórmulas Visuais do sistema?

#### [007] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: DataServer de Movimento para diferentes formas de inclusão
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Quais são os Dataserver de Movimento que devem ser utilizados para disparar fórmula visual?

#### [008] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Executar processo
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como executar um processo a partir de fórmula visual?

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Contexto de assinante para inclusão de movimento
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como funciona o contexto de assinante para inclusão de movimento?

#### [010] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade Atribuir valor no contexto do Assinante/Movimento
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como funciona a atividade Atribuir valor no contexto do Assinante/Movimento ?

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade "Consulta valor no contexto do Movimento(Assinante)"
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como funciona a atividade Consulta valor no contexto do Movimento (Assinante)?

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Percorrer os itens de movimento utilizando as atividades no contexto de assinante
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: movimento, compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como percorrer os itens de movimento utilizando as atividades no contexto de assinante?

#### [013] Zendesk TOTVS
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: contextual
- Dominio inferido: geral
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: [Conteúdo não encontrado ou vazio]
- Evidencia capturada: ---

#### [014] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como executar relatório via Gerador Delphi
- Categoria de fonte: Objetos_Gerenciais
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, objetos-gerenciais
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como executar relatório via Gerador Delphi?

### Parametrização.md (144 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como gerar IRRF PJ automático na primeira parcela
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [002] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como utilizar Local de Estoque por Item
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida

#### [003] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como gravar Vídeos para o suporte?
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como gravar vídeos para enviar ao suporte?

#### [004] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Etapas referente aos parâmetros do movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Qual a documentação referente a cada etapa que possui nos parâmetros do tipo de movimento?

#### [005] Identificação
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Código: Neste campo, informe o código do tipo de movimento, este deverá ser de acordo com a máscara padrão dos tipos ( . . ), lembrando que os movimentos do grupo do tipo 1.1 são ordens de compra, e do tipo 1.2 são compras, e o movimento do grupo 1.1 pode gerar um movimento no grupo 1.2. Os movimentos do grupo do tipo 2.1 são pedidos de venda, do tipo 2.2 são vendas, e do tipo 3.1 de transferência, o movimento do grupo 2.1 pode gerar um movimento no grupo 2.2 ou do grupo 3.1.
- Evidencia capturada: Classificação: Esse campo tem como objetivo o usuário poder classificar o tipo de movimento. Essas classificações serão valores fixos e poderá ser um dos seguintes abaixo:

#### [006] Emitente e Destinatário
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Emitente: Informe qual será o emitente dos movimentos deste tipo, as opções são:
- Evidencia capturada: - Empresa: se o emitente for sua empresa.

#### [007] Datas
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Data de Emissão: Informe qual será o tipo de edição da Data de Emissão, as opções são:
- Evidencia capturada: - Edita: A data de emissão do movimento será editada no movimento.

#### [008] Outros Dados
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Usar Cópia de Movimentos por Referência: Marcando esta opção, será possível copiar dados de um movimento já existente na base para um novo, relacionando-os internamente.
- Evidencia capturada: Observações :: Ao realizar cópia de movimentos por referência, o sistema irá obedecer às regras de natureza, informadas nos parâmetros do tipo de movimento (Opções/Parâmetros/Tipos de Movimentos/Pasta Identificação/Aba Dados Fiscais/campos \ Natureza' e \ Natureza Fora Estado'). A Cópia Simples é utilizada para facilitar a inserção de movimentos com a mesma característica. Neste tipo de cópia, a tabela TMOVRELAC não é preenchida.

#### [009] Tabelas (Parâmetros do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tabelas de Classificação
- Evidencia capturada: Editar Tipo: Ao marcar confirmando a utilização, os seguintes campos serão acessados:

#### [010] Valores Financeiros
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Valores Financeiros 1/4:
- Evidencia capturada: Descontos:

#### [011] Rateio dos Valores Financeiros
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Rateio dos Valores Financeiros 1/2
- Evidencia capturada: Rateio: Nesta pasta são definidas as opções de rateio para Frete, Seguro, Desconto, Despesa, Frete do CTRC. As opções são:

#### [012] Transporte
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Mov -Transporte 1/3
- Evidencia capturada: Editar Transportadora 1 e Transportadora 2:

#### [013] Campos Livres
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Campos Livres 1/2
- Evidencia capturada: Editar Campo Livre 1, 2, 3: O sistema permite a utilização de 3 (três) campos livre para cada tipo de movimento. Marque aquele(s) que deseja utilizar. Confirmando a utilização, os campos seguintes serão habilitados para que informe:

#### [014] Campos Complementares (Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Será exibida neste campo a lista de campos complementares do movimento disponíveis. Selecione os campos que deverão estar disponíveis para este tipo de movimento e através das setas laterais arraste-os para a coluna campos complementares visíveis. A ordenação dos campos complementares na visão poderá ser feita através das setas disponibilizadas ao lado da coluna.
- Evidencia capturada: Observações :

#### [015] Impressão
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Impressão 1/2
- Evidencia capturada: Formato do Relatório: Informe qual será o relatório default para Imprimir Movimentos, do tipo Genérico,Tipo Fatura ou Tipo Duplicata.

#### [016] Identificação (Item do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Identificação 1/2
- Evidencia capturada: Número Máximo de Itens: Informe qual o número máximo de itens que cada movimento poderá ter.

#### [017] Preços (Item do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Edição do Preço:
- Evidencia capturada: - Edita: O campo preço será apresentado e poderá ser editado;

#### [018] Lote / Grade Numerada / Número de Série
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Aceita Número de Série
- Evidencia capturada: Marcando esta opção poderão ser incluídos no movimento produtos que utilizam ou não número de série (o termo "Números de Série" de um produto se refere a um conjunto do mesmo que possuem, individualmente, uma identificação denominada Número de Série).

#### [019] Tabelas (Item do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tabelas de Classificação
- Evidencia capturada: Editar Tipo/Classe/Status do Produto: Ao marcar, confirmando a utilização, os seguintes campos serão acessados:

#### [020] Valores Financeiros (Item do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Utiliza Desconto: Marque esta opção se os itens do movimento poderão ter desconto, caso contrário, desmarque o campo. Marcando, ou seja, confirmando o desconto, os seguintes campos estarão habilitados para preenchimento:
- Evidencia capturada: Nome do Desconto: Informe o nome que o sistema deverá assumir para o campo.

#### [021] Campos Livres (Item do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Campos Livres 1/2
- Evidencia capturada: Edita Mensagem: Clique neste campo e marque-se deseja editar uma mensagem para cada item do movimento, ou seja, para cada item incluído será informada uma mensagem, porém esta informação não é obrigatória e é indicada na pasta identificação itens na mesma janela que incluímos os itens do movimento. Marcando esta opção, o campo "Valor default" estará habilitado para que informe a mensagem default para os itens do movimento deste tipo, as mensagens já deverão estar cadastradas em Cadastros/Tabelas Auxiliares/Mensagens.

#### [022] Campos Complementares (Item do Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Campos Complementares Disponíveis: Será exibida neste campo a lista de campos complementares do movimento disponíveis. Selecione os campos que deverão estar disponíveis para este tipo de movimento e através das setas laterais arraste-os para a coluna campos complementares visíveis. A ordenação dos campos complementares na visão poderá ser feita através das setas disponibilizadas ao lado da coluna.
- Evidencia capturada: Observações :

#### [023] Estoque (Parâmetro Tipo de Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Estoque 1/3
- Evidencia capturada: Efeito sobre os Saldos Físicos: Indique qual o efeito que as quantidades deste tipo de movimento terão sobre os saldos físicos existentes (4 fixos, que são: Saldo de Balanço, Saldo Atual, Pedidos a Fornecedores e Pedidos a Clientes e 6 saldos criados através do menu Opções/Parâmetros TOTVS Gestão de Estoques, Compras e Faturamento/Gestão de Estoque/Saldos de estoque), todos os saldos existentes serão apresentados e em cada um deles deverá informar se no saldo físico, a quantidade:

#### [024] Custo (Parâmetro Tipo de Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Afeta Custo Reposição A / Custo Reposição B:
- Evidencia capturada: - Para cada um dos custos descritos acima, marque o campo se o custo em questão alterar quando forem incluídos os itens dos movimentos deste tipo e deixe desmarcado se não alterar.

#### [025] Separação (Parâmetro Tipo de Movimento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Usa Separação: Marcando este parâmetro para movimentos do tipo compra e venda, o módulo de separação estará habilitado. Este recurso é uma forma de distribuição de mercadoria entre cliente/fornecedor, fornecedor/cliente, através de leitura de código (leitor de código de barras).
- Evidencia capturada: Este movimento não deverá aceitar ser parametrizado com separação de lote e utilizar grade simultaneamente, pois o sistema não trabalha com separação de movimentos que contenham itens de grade. O item de movimento poderá ser identificado pelo código do produto, mas o código usado na separação poderá ser o código EAN ou código auxiliar, etc.

#### [026] Ressuprimentos (Estoque)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Geração de Movimento: O movimento marcado com essa opção poderá ser usado dentro do assistente de análise de sugestão para gerar movimento desse tipo.
- Evidencia capturada: Cálculo de Consumo: O tipo de movimento marcado com essa opção poderá ser usado para calcular o histórico de consumo dos produtos em questão. Nesse caso, será feito um somatório de todos os movimentos desses tipos que não foram cancelados. Esse histórico do consumo será usado posteriormente no cálculo do consumo médio prático.

#### [027] Parâmetro de Orçamento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Editar Natureza Orçamentária/Financeira do item:
- Evidencia capturada: - Não Edita: Fica indisponível.

#### [028] Parâmetro de Rateio de Centro de Custo e Departamento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tipo de Rateio: Indique se o rateio será do tipo percentual ou valor.
- Evidencia capturada: Rateio do Movimento: Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.

#### [029] Parâmetros de Vinculações
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Classificação da Vinculação/Tipo de Vinculação
- Evidencia capturada: Este recurso tem por finalidade a associação de um movimento em outro, associar o movimento classificado como adiantamento em um movimento classificado como controla adiantamento. Para este processo será necessário trabalhar com dois tipos de movimentos distintos, onde um tipo de movimento, em sua parametrização, estará classificado como “Adiantamento” e o outro, classificado “Controla Adiantamento”.

#### [030] Parâmetros de Compra e Venda
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Esse parâmetro ficará visivel para mvoimentos do tipo 1.1, 2.1 ou 3.1
- Evidencia capturada: Compra/Venda - Outras Características

#### [031] Contabilidade (Parâmetros de Integrações)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Habilita Evento Contábil:
- Evidencia capturada: - Não Utiliza evento.

#### [032] Integração de Contratos
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: contratos
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Esta opção tem a finalidade de vincular um item de movimento a um contrato ou a um item de contrato. Escolha, na lista de opções a desejada:
- Evidencia capturada: - Não relacionar : Os itens incluídos para o tipo de movimento não serão relacionados a nenhum contrato.

#### [033] Financeiro (Estoque, Compras e Faturamento)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Edita Condição de Pagamento : Disponíveis as três opções relacionadas abaixo:
- Evidencia capturada: - Edita : para os movimentos deste tipo, a condição será utilizada e o campo poderá ser acessado para alterações.

#### [034] Fiscal (Parâmetros de Integrações)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: -
- Evidencia capturada: -

#### [035] Manutenção (Parâmetros de Integrações)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Integrar objeto de oficina ao item de movimento: Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.
- Evidencia capturada: Integração por API de Reporte: Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: Reporte de Itens Atendidos.

#### [036] Patrimônio (Parâmetro de Integração)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Integrar TOTVS Gestão Patrimonial: As opções para este campo para movimentos de Entrada são:
- Evidencia capturada: - Não Integrado: Os itens deste tipo de movimento não serão ativos imobilizados.

#### [037] Projeto (Parâmetro de Integração)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Informar Projeto/Tarefa:
- Evidencia capturada: - Não informar: selecione esta opção para que campo 'Projeto' não seja apresentado na pasta Integração do movimento.

#### [038] Recursos Humanos (Parâmetro de Integração)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Movimento gera controles de EPI no TOTVS Gestão de Pessoas:
- Evidencia capturada: - Não Integrado: Não utilizará a integração.

#### [039] Aprovação por Work Flow
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A integração entre o TOTVS Gestão de Estoque, Compras e Faturamento e o TOTVS Gestão de Relacionamento com Clientes consiste em ter uma aprovação de movimentos, cotações por fluxo de trabalho. No momento que o movimento está sendo criado, um atendimento é inserido no TOTVS Gestão de Relacionamento com Clientes, e até que o mesmo seja concluído ou cancelado, o movimento não estará apto para o faturamento.
- Evidencia capturada: Observação : Disponibilizado no TOTVS Gestão de Relacionamento com Clientes dois serviços do TOTVS Gestão de Estoque, Compras e Faturamento que poderão ser executados assim que um atendimento vinculado a um movimento do TOTVS Gestão de Estoque, Compras e Faturamento seja encaminhado para uma determinada etapa configurado pelo usuário. Os serviços disponibilizados são:

#### [040] WorkFlow Fluig (Parâmetro de Integração)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: parametrizacao, fluig
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Aprovação: Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:
- Evidencia capturada: - Não Utiliza: a aprovação pelo Fluig não é habilitada.

#### [041] Biblioteca (Parâmetro de Integração)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tipo de Integração com TOTVS Gestão Bibliotecária:
- Evidencia capturada: Através dessa integração será possível solicitar compra de exemplares através do TOTVS Gestão Bibliotecária, faturar o movimento no TOTVS Gestão de Estoques, Compras e Faturamento e então verificar o novo saldo de Exemplares no TOTVS Gestão Bibliotecária.

#### [042] Integração Mensagem Única (Parâmetros de Integrações)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Mensagem de Integração : Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:
- Evidencia capturada: - Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção Integração com SigaMNT ou

#### [043] TOTVS Gestão de Estoque, Compras e Faturamento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: [
- Evidencia capturada: ](https://tdn.totvs.com/display/LRM/Jornada+de+Estoque)

#### [044] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Integração File Repo
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como utilizar o FileRepo no Gestão de Estoque, Compras e Faturamento?

#### [045] File Repo - TOTVS Backoffice (Linha RM)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- Evidencia capturada: Confira abaixo em quais telas dos produtos TOTVS Backoffice - Linha RM o recurso está disponível.

#### [046] Armazenamento de Arquivos (FileRepo)
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizado para atender à necessidade de armazenamento de arquivos de forma rápida e simples no sistema.
- Evidencia capturada: Com ele, será possível armazenar e acessar arquivos de forma rápida e segura, sem a necessidade de um conhecimento técnico aprofundado.

#### [047] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como Vincular um usuário ao Centro de Custo?
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como associar/vincular um usuário ao Centro de Custo?

#### [048] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Cliente/Fornecedor não permitido para o tipo de movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Ocorrência Ao tentar salvar um movimento é apresentado a mensagem de erro:

#### [049] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Tipos de Documento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Como cadastrar os Tipos de Documentos utilizando o módulo de Gestão de Estoque, Compras e Faturamento?

#### [050] FIN - Tipos de Documento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Através deste cadastro é possível controlar os tipos de documentos e classificar os lançamentos financeiros.
- Evidencia capturada: Na janela principal é possível visualizar de forma simplificada, informações de um ou de vários tipos de documento, de acordo com os filtros criados através do Gerenciador de Filtros (localizado na Barra de Ferramentas). Ao executar um filtro cada cadastro será apresentado em uma linha e as informações em colunas.

#### [051] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como realizar a emissão de Nota Fiscal Complementar
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Este Documento auxilia a criação de um movimento básico para complementar impostos de uma NF-e no sistema. Qualquer NF-e complementar deve ser emitida de acordo com a legislação vigente mesmo que esteja em desacordo com este documento.

#### [052] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Utilização de máscaras no módulo Gestão de Estoque, Compras e Faturamento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [053] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - O campo "Gerar Lançamentos (Faturamento)" deve ser preenchido
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [054] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Desconsiderar Regra de Seleção de Natureza
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00 :02:00min
- Evidencia capturada: Dúvida

#### [055] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Exibir Razão Social do Cliente/Fornecedor ao incluir Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura : 00:03:00min
- Evidencia capturada: Dúvida

#### [056] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Ativar/Inativar Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [057] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como configurar Produto para editar código de barras?
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida:

#### [058] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Job Agendado executa sempre o mesmo registro
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: integracao-ou-automacao
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com checklist e ressalvar dependencias de ambiente e identidade
- O que nao extrapolar: nao assumir alias, host, usuario, job ou XML identicos em qualquer cliente
- Evidencia capturada: Tempo aproximado para leitura: 00 :01:00 min
- Evidencia capturada: Ocorrência

#### [059] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Flag "Não calcular movimento ao abrir edição (Faturamento)" Não é Exibida nos Parâmetros do Tipo de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência

#### [060] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Não é possível Gerar Ordem de Compra na Cotação.
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Ao executar o processo de Gerar Ordem de Compra a partir de uma Cotação, sistema apresenta a seguinte mensagem:

#### [061] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Condição de Pagamento não permitida para o tipo de movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Causa

#### [062] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Descontar o Valor do ICMS da Base de Cálculo das Contribuições Sociais
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida Como descontar o valor do ICMS da base de cálculo das contribuições PIS e COFINS?

#### [063] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – MAT - Filial 0 não possui estado cadastrado! Não é possível escriturar movimento.
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência

#### [064] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Devolução de Compra
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00 min Dúvida
- Evidencia capturada: Como realizar Devolução de Compra ?

#### [065] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Importar/Exportar Parâmetros do Tipo de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [066] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Usuário Logado Como Remente do Envio de E-mail
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min
- Evidencia capturada: Dúvida

#### [067] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV- Movimento de Exportação
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como parametrizar o sistema para incluir movimento de exportação?

#### [068] Movimento de Exportação
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Movimento de Exportação
- Evidencia capturada: Produto:

#### [069] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como preencher município no movimento automaticamente
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como parametrizar o sistema para buscar alíquota ISS do município da filial ou do fornecedor?

#### [070] INT0005 Integracao Financeira Valores Opcionais
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [071] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Faturamento Automático
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como parametrizar o movimento para faturamento automático?

#### [072] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Inclusão de Movimento de Importação
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como parametrizar o sistema para incluir movimento de importação?

#### [073] Movimento de Importação
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: FAQ: Movimento de Importação
- Evidencia capturada: Avaliação

#### [074] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Buscar preço em fórmula de preço
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 03:00 min
- Evidencia capturada: Dúvida: Como parametrizar o sistema para "Buscar preço em" utilizando uma Fórmula de Preço ?

#### [075] Definições dos Parâmetros de Ressuprimento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Evidencia capturada: Processo de Negocio: Ressuprimento

#### [076] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Calcular o Valor Original do Lançamento Financeiro?
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como o Valor Original do Lançamento Financeiro é calculado, de acordo com a parametrização da Condição de Pagamento estabelecida nos parâmetros do tipo de movimento?

#### [077] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimentação de Transferência de Produtos
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [078] TRF0002 Transferencia de Mercadoria Utilizando Local de Estoque Transitorio
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [079] TRF0002 Transferencia de Mercadoria Utilizando Local de Estoque Transitorio
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [080] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como aplicar redução de Base de Cálculo para os tributos ISS e ICMS aplicação do parâmetro Base Cheia
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como aplicar automaticamente na base de cálculo dos tributos ICMS ou ISS sua redução previamente cadastrada.

#### [081] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Permite Visualização dos dados no Filtro por Usuário
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar acessar tela de lookup onde usuário possui filtro sistema não restringe a visualização dos dados restritos.

#### [082] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Controlar Permissão para Visualizar/Alterar Parâmetros do Módulo Gestão de Estoque, Compras e Faturamento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como controlar o acesso do usuário para visualizar ou alterar os parâmetros do módulo Gestão de Estoque, Compras e Faturamento?

#### [083] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Default Para Modalidade de Base de Cálculo do ICMS e ICMS ST na Tributação do Item de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como preencher a Modalidade de Base de Cálculo do ICMS e ICMS ST automaticamente na aba Tributos e Valores | Tributos do item de movimento?

#### [084] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Relacionar o Funcionário ao Usuário de Login no Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como relacionar o Funcionário ( Vendedor/Comprador ) ao usuário logado na aplicação ao incluir um movimento?

#### [085] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir aba "Processos Judiciais" e "Normas Referenciadas" no movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Qual a parametrização necessária para que as abas Processos Judiciais e Normas Referenciadas sejam exibidas ao incluir um movimento

#### [086] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Departamento Default desabilitado
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento para que possua um Departamento default o campo se encontra desabilitado para edição.

#### [087] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Desabilitar os Campos Filial de Saída e Local de Saída em Movimentos
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência Ao incluir um movimento os campos Filial de Saída (ou Entrega) e Local de Saída são visualizados na parte inferior da aba Identificação | Cabeçalho para preenchimento obrigatório.

#### [088] TRF0002 Transferencia de Mercadoria Utilizando Local de Estoque Transitorio
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [089] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Tipo de movimento classificado como Solicitação de Compras deve ter as seguintes configurações
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento referente a Solicitação de Compras sistema exibe a mensagem abaixo: Tipo de movimento classificado como 'Solicitação de Compras ( Gestão Compras)' deve ter as seguintes configurações:

#### [090] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Composição de Parcela em Branco
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao acessar cadastro de Condição de Pagamento , a aba de Composição de Parcelas não exibe nenhuma linha para definir regras

#### [091] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Utilizar Produtos Compostos em Movimentações
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida

#### [092] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Habilitar o Uso de Código de Barras (EAN)
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como habilitar o uso de código de barras (EAN) no cadastro de produto?

#### [093] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Tipo de movimento: Habilitar o campo Usar Mensagens Definidas na Natureza
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Como habilitar o campo Usar Mensagens Definidas na Natureza no Parâmetro do Tipo de Movimento etapa Fis - Dados ?

#### [094] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - S-1250: Parametrizar Tipo de movimento NF Emissão Produtor Rural
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Qual a Parametrização necessária para inclusão de Movimento referente aquisição de mercadoria onde a nota fiscal foi emitida pelo Produtor Rural a fim de atender a geração do Registro S-1250 do eSocial

#### [095] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - S-1250: Parametrizar Tipo de movimento NF Emissão Produtor Rural
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Qual a Parametrização necessária para inclusão de Movimento referente aquisição de mercadoria onde a nota fiscal foi emitida pelo Produtor Rural a fim de atender a geração do Registro S-1250 do eSocial

#### [096] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Tipo de Movimento não exibido em nenhum menu
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Ocorrência

#### [097] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - A unidade está incompatível quando o tipo de movimento é integrado com o RM Vitae
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: fora
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: usar apenas como contexto ou limitar escopo
- O que nao extrapolar: nao vender cobertura que as fontes nao mostram
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Ocorrência Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:

#### [098] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Valores Opcionais de Item desabilitados
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia capturada: Ocorrência Ao parametrizar tipo de movimento a etapa Item - Valores Financeiros 1/2 os campos Valor Opcional 1 e Valor opcional 2 não se encontram habilitados para utilização

#### [099] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - FAT - Como consistir base de CNPJ de Cli/For no Faturamento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 02:00 min
- Evidencia capturada: Dúvida Como faturar movimento onde apenas a base do CNPJ será mantida no movimento de destino?

#### [100] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Executável Delphi não abre
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida Ao abrir executável Delphi do sistema a mensagem abaixo é apresentada:

#### [101] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como realizar movimentação com moeda estrangeira
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como posso incluir movimentação no sistema onde a moeda utilizada seja estrangeira?

#### [102] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Etapas de Integração desabilitadas nos Parâmetros do Tipo de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Ocorrência Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.

#### [103] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Contabilizar Movimento pelo Custo do Estoque
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como realizar a contabilização do movimento de modo que os custos do estoque sejam iguais aos valores da contabilidade gerada?

#### [104] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Cópia de Tipo de Movimento entre Coligadas
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00 min
- Evidencia capturada: Dúvida Quais os pré-requisitos para efetuar a cópia de Tipo de Movimento entre Coligadas?

#### [105] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aprovação de Movimento por Fórmula
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida Como realizar aprovação de movimento por formula?

#### [106] MOV0004 Aprovacao de Movimento por Formula
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [107] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- RES - Definições dos Parâmetros de Ressuprimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:00 min
- Evidencia capturada: Dúvida

#### [108] Definições dos Parâmetros de Ressuprimento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Evidencia capturada: Processo de Negocio: Ressuprimento

#### [109] Definições dos Parâmetros de Ressuprimento
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Evidencia capturada: Processo de Negocio: Ressuprimento

#### [110] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturamento de Tipo de Movimento Específico
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência Porque ao faturar o movimento o código de tipo de movimento não aparece na tela Faturar / Receber

#### [111] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como incluir o rateio por centro de custo, projeto e tarefa automaticamente
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Dúvida Como incluir o rateio de centro de custo, projeto e tarefa automaticamente ao salvar o movimento, baseando nos campos do item de movimento Tabelas | Centro de Custo , Integrações | Projetos | Identificador do Projeto e Identificador da Tarefa?

#### [112] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como configurar o código de receita para as retenções de contribuições
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [113] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como contabilizar Movimento a partir do Rateio por Centro de Custo
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura : 00:04:00 min
- Evidencia capturada: Dúvida

#### [114] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como selecionar Exercício Fiscal
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como selecionar Exercício Fiscal por usuário?

#### [115] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Código de Receita IRRF default para o movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:05:30 min
- Evidencia capturada: Dúvida

#### [116] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como Aumentar o Número de Casas Decimais do Preço Unitário do Item de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Como aumentar o número de casas decimais a ser utilizado em preço unitário de um item de movimento sem afetar o número de casas decimais dos demais valores do sistema?

#### [117] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Exercício Fiscal cadastrado não é exibido em Seleção de Contexto
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min
- Evidencia capturada: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar a Seleção de Exercício Fiscal via seleção de contexto nenhum exercício é apresentado neste havendo exercício cadastrado para a filial selecionada.

#### [118] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Apuração de Tributos - FUNRURAL, GILRAT, SENAR \ INSS, INSS15, INSS20, INSS25
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque, fiscal
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Dúvida

#### [119] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir os Dados de Inclusão no movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [120] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como habilitar os campos Valor do Material e Valor Sub Empreitada
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Qual parametrização realizar para habilitar os campo Valor do Material e Valor Sub Empreitada na integração Fiscal do movimento?

#### [121] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como descobrir a classificação e menu do Tipo de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida

#### [122] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Utilização de Preço Total no Item de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura : 00:04:00min
- Evidencia capturada: Dúvida

#### [123] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como habilitar mais de 4 casas decimais para Preço Unitário
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [124] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como buscar Alíquota no Tipo de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida Como parametrizar o Movimento para utilizar a Alíquota definida no Tributo do Tipo de Movimento?

#### [125] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como alterar a máscara do número do movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 03:00 min
- Evidencia capturada: Dúvida Como alterar a máscara do número do movimento?

#### [126] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como atribuir Permissão ao Usuário em Tipo de Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00 min
- Evidencia capturada: Dúvida Como atribuir permissão ao usuário para o Tipo de Movimento?

#### [127] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Horário de Verão (2018) Para Documentos Eletrônicos
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:01:00min
- Evidencia capturada: Ocorrência

#### [128] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Quais variáveis utilizar no Complemento de Histórico do Item de Evento Contábil
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00 min Dúvida
- Evidencia capturada: Quais variáveis utilizar no Complemento de Histórico do Item de Evento Contábil ?

#### [129] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como parametrizar o processo de Qualificação de Fornecedores
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: parametrizacao, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida

#### [130] COT0001 Qualificacao de fornecedores
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [131] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como buscar Alíquota do Pedido
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [132] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Devolução de Venda
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 05:00 min
- Evidencia capturada: Ocorrência Descrição do Processo de Devolução de Venda. A devolução de mercadoria se refere anulação de um procedimento de venda realizado junto á um cliente. A devolução pode ser feita considerando todos os itens do movimento ou parte deles, onde será afetado tanto o saldo financeiro quanto o saldo físico.

#### [133] DEV0002 Devolucao de Venda de Mercadoria Emissão da Nota pelo Cliente
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [134] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Venda para Entrega Futura
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida

#### [135] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Cálculo de MVA/IVA por Produto
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [136] INT0005 Integracao Financeira Valores Opcionais
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [137] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Cálculo de MVA/IVA por Natureza
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:02:00min
- Evidencia capturada: Dúvida

#### [138] INT0005 Integracao Financeira Valores Opcionais
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [139] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Faturamento Parcial por Valor do Item ou Movimento
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida

#### [140] MOV0012 Faturamento Parcial Por Valor
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [141] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Integração Financeira/Valores Opcionais
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:04:00min
- Evidencia capturada: Dúvida

#### [142] INT0005 Integracao Financeira Valores Opcionais
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: geral
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM

#### [143] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir o campo Chave de Acesso em Movimento de Entrada
- Categoria de fonte: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento, compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida

#### [144] MOV0005 Exibicao do campo Chave de Acesso
- Categoria de fonte: Parametrização
- Caminho documental: nao informado no artigo convertido
- Cobertura da skill: nucleus-forte
- Dominio inferido: movimento
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Produto:
- Evidencia capturada: TOTVS Gestão de Estoque, Compras e Faturamento

### Utilitários.md (1 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Melhoria de Performance do Sistema
- Categoria de fonte: Utilitários
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Utilitários
- Cobertura da skill: nucleus-forte
- Dominio inferido: compras, estoque
- Como usar na resposta: responder com confianca e explicitar o menu ou processo
- O que nao extrapolar: nao transformar comportamento de um artigo em regra universal de todo RM
- Evidencia capturada: Tempo aproximado para leitura: 00:03:00min
- Evidencia capturada: Dúvida Quais ferramentas e técnicas podem ser utilizadas para melhoria de performance do sistema?

## Matriz estrutural de fontes permitidas

- totvs_rm_docs/index/*.md total de artigos capturados: 542
- tmp_totvs_legado_single/MOVMOVIMENTOTBCDATA_Objeto=MOVMOVIMENTOTBCDATA.md: um unico DataServer legado detalhado
<!-- AUTO-GENERATED END: SOURCE-LIMITS-DETAIL -->
