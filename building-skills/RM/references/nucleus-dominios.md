# RM Nucleus: domínios centrais desta base

Esta referência consolida apenas o que aparece em `totvs_rm_docs` para o Nucleus. O foco é orientar perguntas, triagem e troubleshooting em cinco frentes que aparecem repetidamente nas fontes: **movimento**, **parametrização**, **compras**, **estoque** e **contratos 2.0**.

## Como enquadrar a pergunta

Antes de responder, identifique qual é o objeto principal:

- **Movimento / tipo de movimento**: inclusão, cópia, faturamento, cancelamento, documento, tributos, rateio, integração, status.
- **Parametrização**: em qual etapa do parâmetro o comportamento é controlado.
- **Compras**: solicitação, cotação, quadro comparativo, ordem de compra, orçamento, portal do fornecedor.
- **Estoque**: inventário, fechamento, ficha física financeira, saldos, custos, consignação, industrialização.
- **Contratos 2.0**: faturamento, previsão financeira, medição, aditivo, reajuste, anexo de origem.

Se a pergunta vier genérica, nas fontes a resposta quase sempre depende de três identificadores antes de qualquer conclusão:

1. **Qual processo/tela falhou**
2. **Qual tipo de movimento, item ou contrato está envolvido**
3. **Qual menu/etapa controla esse comportamento**

## Movimento e parametrização

O caminho-base que mais aparece é:

- `Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento`
- selecionar a **classificação**
- `Avançar`
- selecionar o movimento
- `Parametrizar` ou duplo clique

As fontes tratam explicitamente as etapas abaixo como pontos de verificação frequentes:

- `Mov - Identificação`
- `Mov - Outros Dados`
- `Mov - Valores Financeiros 1/4 até 4/4`
- `Item - Identificação 1/2 e 2/2`
- `Item - Valores Financeiros 1/2 e 2/2`
- `Estoque - Estoque 1/3 até 3/3`
- `Compra/Venda - Características`
- `Compra/Venda - Outros Dados`
- `Contratos`
- `Fin - Condições de Pagamento`
- `Fin - Faturamento 1/6 até 6/6`
- `Workflow`
- `Workflow Fluig`
- `Importação/Envio de Arquivo XML`

Perguntas sobre movimento ficam mais seguras quando seguem esta ordem:

1. descobrir a **classificação e o menu** do tipo de movimento
2. localizar a **etapa exata** em que a regra é tratada
3. verificar dependências em **produto**, **cliente/fornecedor**, **tipo de documento**, **filial**, **escopo** ou **integração**

As fontes também mostram que um mesmo comportamento costuma depender de mais de um ponto. Exemplo claro: artigos de IRRF citam conjuntamente `Fin - Faturamento 1/6`, `Fin - Faturamento 3/6`, `Fin - Faturamento 5/6`, cadastro de produto e o próprio movimento.

## O que verificar primeiro em dúvidas de movimento

- classificação/menu do tipo de movimento
- etapa do parâmetro mencionada na regra
- se o comportamento depende de `Fin - Faturamento`, `Estoque`, `Compra/Venda`, `Contratos` ou `Workflow Fluig`
- se existe campo obrigatório no cadastro relacionado, como produto, tipo de documento ou dados fiscais
- se o problema está no movimento em si ou no **processo de origem**

## Compras

Nas fontes, o processo padrão de compras indiretas é descrito assim:

1. criação de uma **Solicitação de Compra** em movimento `1.1.xx`
2. abertura da **Cotação**
3. uso do **Quadro Comparativo**
4. geração da **Ordem de Compra** em outro movimento `1.1.xx` parametrizado como **Pedido de Compra**
5. origem do movimento final de compras `1.2.xx`

Parametrizações que aparecem claramente nesse fluxo:

- na Solicitação:
  `Compra/Venda - Características > Gera movimento de compra`
  `Compra/Venda - Características > Movimento Gerado (default)`
  `Compra/Venda - Outros Dados > Tipo do Movimento de Compra = Solicitação de Compras`
- na Ordem de Compra:
  `Mov - Identificação > Edita Numeração: mostra`
  `Compra/Venda - Características > Gera Movimento de Compra`
  `Compra/Venda - Outros Dados > Tipo do Movimento de Compra = Pedido de Compra`

Campos recorrentes no assistente de cotação:

- `Data da Cotação`
- `Limite de resposta`
- `Moeda`
- `Funcionário responsável`
- `coligada(s)`
- `filial(s)`
- `tipo de movimento(s)`
- `Condição de pagamento`
- `Transportadora`
- `Data Limite para Entrega da Mercadoria`
- crédito de `IPI`
- crédito de `ICMS`
- `Tipo de julgamento da melhor oferta`

Outros sinais fortes nas fontes de compras:

- filtro de fornecedor por `CNPJ/CPF`
- limite mínimo e máximo de fornecedores definido nos parâmetros da cotação
- artigos específicos para `desconto por item`, `desconto por movimento`, `frete do orçamento`, `cotação parcialmente gerada`, `tipo de julgamento`, `agrupar/não agrupar itens`, `tipo de movimento usado para gerar ordem de compra`
- várias respostas exigem revisar também **Definições de Escopo - Filial**

## Estoque

As fontes de estoque são mais operacionais do que conceituais. Os temas mais recorrentes são:

- inventário
- fechar estoque
- regerar saldos e custos
- ficha física financeira
- saldo negativo
- custo médio
- consignação
- industrialização

Pontos práticos sustentados pelas fontes:

- **Inventário**: a inclusão usa um assistente; o recurso de **tipo de contagem** aparece a partir da release `12.1.2205`.
- **Regerar Saldos e Custos**:
  caminho `Estoque > Processos > Regerar Saldos e Custos > Avançar`
  abas `Seleção de Produtos`, `Parâmetros Gerais` e `Agendamento (3 camadas)`
  finalidade de regravar movimentações que afetam estoque após a data de fechamento
  também monta dados da **ficha física financeira**
  é descrito como processo **irreversível**, com recomendação de **backup**
- **Fechar estoque**:
  as fontes recomendam restringir acesso aos parâmetros, evitar alterar etapas de estoque dos tipos de movimento, acompanhar a **Ficha Física Financeira** e evitar alterar tipo de cálculo de custo e tipo de controle do produto
  depois disso, a orientação é **regerar saldos e custos** e só então ajustar `Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento - Definições de Estoque - Data de Fechamento`

Em perguntas de estoque, verifique primeiro:

1. se o tema é **processo operacional** ou **efeito de parametrização**
2. se existe dependência de **data de fechamento**
3. se o produto usa controle por **lote** ou **número de série**
4. se o problema exige **regeração** ou apenas leitura da ficha física financeira

### Consignação e processos com múltiplos movimentos

As fontes mostram que alguns processos de estoque não se resolvem com um único tipo de movimento. Em consignação para empresa remetente, por exemplo, a documentação fala em **quatro tipos de movimento** distintos e cita explicitamente:

- `Mov - Outros Dados > Usar cópia por referência`
- motivos `13`, `14` e `15`
- `Item - Identificação 2/2 > Permitir Item Repetido`
- `Estoque - Estoque 1/3` e `Estoque - Estoque 2/3`

Então, quando a pergunta mencionar consignação, industrialização ou retorno simbólico, a orientação inicial deve confirmar **qual papel a empresa exerce no processo** e **qual etapa do fluxo está sendo executada**, não apenas o movimento final.

## Contratos 2.0

As fontes tratam Contrato 2.0 como frente própria, com versão mínima explícita:

- `12.1.2502.180`
- `12.1.2506.122`
- superiores

Também trazem limites de liberação:

- novos clientes
- clientes que nunca utilizaram Contratos 1.0
- clientes que já usam 1.0 com liberação gradual, porque o MVP 2.0 não cobre todas as funcionalidades do 1.0

Menu de segurança citado de forma explícita:

- `Módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Acesso a Menus > [05] Contratos > Gestão de Contratos 2.0`

Processos que aparecem de forma consistente nas fontes:

- `Contrato > Ações Relacionadas > Faturar`
- `Contrato > Ações Relacionadas > Cancelar Faturamento Contrato`
- `Contrato > Ações Relacionadas > Gerar Previsão Financeira`
- `Contrato > Ações Relacionadas > Cancelar Previsão Financeira`
- `Contrato > Ações Relacionadas > Reajustar Preço`
- `Contrato > Ações Relacionadas > Cancelar Reajuste Preço`
- `Item do Contrato > Ações Relacionadas > Gerar Aditivo`
- `Item do Contrato > Ações Relacionadas > Cancelar Aditivo`
- `Item do Contrato > Ações Relacionadas > Gerar Medição`
- `Item do Contrato > Ações Relacionadas > Cancelar Medição`
- `Parcela > Ações Relacionadas > Gerar Abatimento ou Acréscimo`

Verificações práticas que aparecem claramente:

- em **Gerar Previsão Financeira**, confirmar `Tipo de Documento de Previsão` e campos financeiros obrigatórios como `Conta/Caixa`, `Moeda`, `Classificação Orçamentária/Financeira`, `Centro de Custo` e `Rateio de Centro de Custo`
- o processo atua sobre parcelas com status `A Faturar`
- quando já existe previsão, vários campos do contrato e do item ficam com edição bloqueada
- em **Cancelar Faturamento**, é possível usar `Intervalo de faturamento` ou `Cancelar Todos os Faturamentos do Contrato`, e a própria documentação avisa que a segunda opção tem prioridade

### Tipo de faturamento e impacto na resposta

As fontes separam claramente os tipos:

- `Periódico`
- `Não Periódico`
- `Medição`

Isso muda a resposta prática:

- **Periódico**: usa datas e períodos de faturamento
- **Não Periódico**: usa a aba `Vencimentos` e pode ter vários vencimentos, mas um faturamento único
- **Medição**: não deve ser tratado como faturamento periódico; a fonte manda usar `Anexos > Visualizar Medições do Contrato > Processos > Faturamento Medição`

### Movimento originado de contrato

Quando o problema está em um movimento gerado por contrato, as fontes são explícitas: não se deve presumir correção direta no tipo de movimento.

Verificação prática:

1. no movimento, abrir `Anexos > Dados Contrato Origem`
2. confirmar o contrato, item e parcela de origem
3. voltar ao contrato e executar o processo correto, como `Cancelar Faturamento Contrato`

O próprio anexo depende de:

- movimento com `Etapa 52 - Contratos`
- campo `Integra com Contrato` marcado

## Termos recorrentes úteis para busca

- `tipo de movimento`
- `classificação`
- `Mov - Identificação`
- `Mov - Outros Dados`
- `Fin - Faturamento 1/6`, `3/6`, `5/6`
- `Compra/Venda - Características`
- `Compra/Venda - Outros Dados`
- `Estoque - Estoque 1/3`, `2/3`
- `Definições de Escopo - Filial`
- `Ficha Física Financeira`
- `Regerar Saldos e Custos`
- `Data de Fechamento`
- `Cotação`
- `Quadro Comparativo`
- `Pedido de Compra`
- `Contrato 2.0`
- `Tipo de Faturamento`
- `Dados Contrato Origem`

## Limites desta referência

- Ela é forte em **parametrização e operação** do Nucleus.
- Ela é mais segura para **menus, etapas, campos e fluxos operacionais** do que para modelo de dados completo.
- Em contratos, ela cobre bem os **processos visíveis na interface**, mas não substitui a documentação de cada fluxo específico.

## O que não assumir

- Não assumir que uma pergunta sobre movimento pode ser respondida sem identificar **classificação**, **menu** e **etapa**.
- Não assumir que um efeito em compras ou estoque está isolado no movimento final; várias fontes apontam dependência de **processo de origem**.
- Não assumir que cotação, ordem de compra e movimento final são a mesma coisa; as fontes os tratam como etapas diferentes.
- Não assumir que inventário, fechamento e regeração são equivalentes; cada um tem finalidade própria.
- Não assumir que Contrato 2.0 cobre tudo que existia no Contrato 1.0; a própria documentação fala em liberação gradual e MVP.
- Não assumir que movimento originado de contrato deve ser corrigido diretamente no movimento; nas fontes, o caminho correto frequentemente é voltar ao contrato.

<!-- AUTO-GENERATED START: NUCLEUS-DETAIL -->
## Apêndice exaustivo por artigo do Nucleus

Este apêndice enumera, artigo por artigo, os sinais documentais mais úteis para a skill. Ele foi gerado somente a partir dos índices e artigos convertidos em `totvs_rm_docs/index/*.md`.

### Fonte: Cadastros.md (33 artigos capturados)

#### [001] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Acesso ao Cadastro de Produtos - Você não está autorizado a utilizar essa funcionalidade do sistema!
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 8 de maio de 2025 às 17:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/31740859612311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Acesso-ao-Cadastro-de-Produtos-Voc%C3%AA-n%C3%A3o-est%C3%A1-autorizado-a-utilizar-essa-funcionalidade-do-sistema](https://centraldeatendimento.totvs.com/hc/pt-br/articles/31740859612311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Acesso-ao-Cadastro-de-Produtos-Voc%C3%AA-n%C3%A3o-est%C3%A1-autorizado-a-utilizar-essa-funcionalidade-do-sistema)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar acessar o menu Cadastros Produtos e Serviço é apresentado a mensagem: Você não está autorizado a utilizar essa funcionalidade do sistema!
- Menu, etapa ou parametro citado: Ao tentar acessar o menu Cadastros Produtos e Serviço é apresentado a mensagem: Você não está autorizado a utilizar essa funcionalidade do sistema!
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: SELECT \ FROM GAUTZMENU WHERE TAGMENU = '809002000'
- Artefato tecnico citado: SELECT \ FROM GUSRPERFIL WHERE CODUSUARIO = 'X' AND CODCOLIGADA = 'Y' AND CODSISTEMA in ('T', 'D', 'M', 'O')

#### [002] TOTVS
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro](https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Central do Cliente
- Evidencia inicial: - https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro
- Evidencia inicial: - https://totvscst.zendesk.com/hc/pt-br/categories/115002257328-Documenta%C3%A7%C3%B5es
- Menu, etapa ou parametro citado: - https://totvscst.zendesk.com/hc/pt-br/articles/360022517612-CST-GSEN-Como-verificar-os-Contratos-Vinculados
- Menu, etapa ou parametro citado: https://totvscst.zendesk.com/hc/pt-br/sections/115003369087-Contratos
- Menu, etapa ou parametro citado: https://totvscst.zendesk.com/hc/pt-br/sections/115003369087-Contratos

#### [003] TOTVS
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://totvscst.zendesk.com/hc/pt-br/categories/115002257328-Documenta%C3%A7%C3%B5es](https://totvscst.zendesk.com/hc/pt-br/categories/115002257328-Documenta%C3%A7%C3%B5es)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Central do Cliente
- Evidencia inicial: - https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro
- Evidencia inicial: - https://totvscst.zendesk.com/hc/pt-br/categories/115002257328-Documenta%C3%A7%C3%B5es

#### [004] TOTVS
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://totvscst.zendesk.com/hc/pt-br/categories/115002435008-Not%C3%ADcias](https://totvscst.zendesk.com/hc/pt-br/categories/115002435008-Not%C3%ADcias)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Central do Cliente
- Evidencia inicial: - https://totvscst.zendesk.com/hc/pt-br/categories/115001937708-Administrativo-e-Financeiro
- Evidencia inicial: - https://totvscst.zendesk.com/hc/pt-br/categories/115002257328-Documenta%C3%A7%C3%B5es

#### [005] 1.2.3 Condição de Pagamento
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=551430151](https://tdn.totvs.com/pages/releaseview.action?pageId=551430151)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia inicial: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Evidencia inicial: O cadastro de Condição de Pagamento será necessário para o Processo Contrato Corporativo (PJ).
- Menu, etapa ou parametro citado: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Menu, etapa ou parametro citado: Para escolher o vencimento das parcelas sempre no mesmo dia (dia 10, por exemplo), após cadastrar a condição de pagamento acesse: Anexos | Dias de Carência | Incluir Novo:
- Menu, etapa ou parametro citado: Após cadastrada a condição de pagamento, é possível copiá-la para outra Coligada. Acesse Processos | Copiar Condição de Pagamento entre Coligadas
- Artefato tecnico citado: Ao inativar uma condição de pagamento (por DataServer), se houver movimentações pendentes o usuário vai ser alertado e informado sobre a quantidade de movimentos pendentes.

#### [006] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como tirar dúvidas ou consultar tickets na Carolina
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7751751680919-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-tirar-d%C3%BAvidas-ou-consultar-tickets-na-Carolina](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7751751680919-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-tirar-d%C3%BAvidas-ou-consultar-tickets-na-Carolina)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como tirar dúvidas ou consultar tickets na Carolina no módulo Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como tirar dúvidas ou consultar tickets na Carolina no módulo Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - todas as versões.

#### [007] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Copiar Produtos entre Coligadas
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 20 de fevereiro de 2025 às 16:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/6660659647383-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Copiar-Produtos-entre-Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6660659647383-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Copiar-Produtos-entre-Coligadas)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como realizar cópia de produto entre coligadas?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acesse o menu Cadastros Produtos e Serviços Selecione o item Processos Copiar Produto entre Coligadas :

#### [008] Copiar Produtos entre Coligadas
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Copiar+Produtos+entre+Coligadas](https://tdn.totvs.com/display/public/LRM/Copiar+Produtos+entre+Coligadas)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Na tela do Processo é possível selecionar para quais coligadas o cadastro será copiado.
- Evidencia inicial: Para a cópia dos registros, o sistema faz consistências, testando se parâmetros determinados em cada coligada são os mesmos. Veja a seguir quais as consistências:
- Evidencia inicial: - A máscara do produto deve ser a mesma nas coligadas.
- Menu, etapa ou parametro citado: Para a cópia dos registros, o sistema faz consistências, testando se parâmetros determinados em cada coligada são os mesmos. Veja a seguir quais as consistências:
- Menu, etapa ou parametro citado: Anexos que serão copiados:
- Menu, etapa ou parametro citado: Ao copiar um produto que possua informações no Anexo | Produtos TOTVS Colaboração, essas informações serão copiadas para a Coligada de destino. Para que seja possível a cópia desses dados, o Cliente/Fornecedor associado ao produto TOTVS Colaboração deve existir com o mesmo código na coligada de destino.
- Artefato tecnico citado: Produtos para Importação de XML:

#### [009] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como Vincular um campo complementar a uma Tabela Dinâmica
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 20 de fevereiro de 2025 às 16:39
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408784496023-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-Vincular-um-campo-complementar-a-uma-Tabela-Din%C3%A2mica](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408784496023-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-Vincular-um-campo-complementar-a-uma-Tabela-Din%C3%A2mica)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como vincular um Campo Complementar a uma Tabela Dinâmica.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Solução No módulo Gestão de Estoque Compras e Faturamento é possível vincular um Campo Complementar uma Tabela Dinâmica .

#### [010] 1.2.3 Condição de Pagamento
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=551430151](https://tdn.totvs.com/pages/releaseview.action?pageId=551430151)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia inicial: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Evidencia inicial: O cadastro de Condição de Pagamento será necessário para o Processo Contrato Corporativo (PJ).
- Menu, etapa ou parametro citado: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Menu, etapa ou parametro citado: Para escolher o vencimento das parcelas sempre no mesmo dia (dia 10, por exemplo), após cadastrar a condição de pagamento acesse: Anexos | Dias de Carência | Incluir Novo:
- Menu, etapa ou parametro citado: Após cadastrada a condição de pagamento, é possível copiá-la para outra Coligada. Acesse Processos | Copiar Condição de Pagamento entre Coligadas
- Artefato tecnico citado: Ao inativar uma condição de pagamento (por DataServer), se houver movimentações pendentes o usuário vai ser alertado e informado sobre a quantidade de movimentos pendentes.

#### [011] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Importação de Produto via Webservice
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403960647575-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-de-Produto-via-Webservice](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403960647575-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-de-Produto-via-Webservice)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como realizar Importação de Produto via Webservice ?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: Solução Este documento tem por finalidade ensinar como realizar a Importação de produto via SoapUI (Arquivo XML).
- Artefato tecnico citado: Procedimentos para importar XML de um produto na base RM através do SoapUI .

#### [012] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Exportação de Produto via Webservice
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403947376279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exporta%C3%A7%C3%A3o-de-Produto-via-Webservice](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403947376279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exporta%C3%A7%C3%A3o-de-Produto-via-Webservice)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como realizar Exportação de Produto via Webservice ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Artefato tecnico citado: Solução Este documento tem por finalidade ensinar como realizar a Exportação de produto via SoapUI (Arquivo XML).
- Artefato tecnico citado: Procedimentos para exportar o XML de um Produto da base RM através do SoapUI. Lembrando que a estrutura do XML será influenciada de acordo com a parametrização da Coligada, por tanto, poderá variar de empresa para empresa, coligada para coligada.

#### [013] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Produto não é exibido na Ficha Física Financeira
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:35
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063327113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Produto-n%C3%A3o-%C3%A9-exibido-na-Ficha-F%C3%ADsica-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063327113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Produto-n%C3%A3o-%C3%A9-exibido-na-Ficha-F%C3%ADsica-Financeira)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, ficha fisica financeira
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao gerar o relatório padrão de Ficha Física Financeira , não é exibida Movimentação para o produto .
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 2. O tipo de movimento utilizado para este produto não esta parametrizado para Afetar Estoque ;
- Artefato tecnico citado: 4. O Campo TITMMOV.CODFILIAL e TITMMOV.CODLOC não estão preenchidos no movimento do produto;
- Artefato tecnico citado: 4. Se os campos TITMMOV.CODFILIAL e TITMMOV.CODLOC não estiverem preenchidos, regrave o movimento para que os campos sejam preenchidos.

#### [014] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Inclusão de Motivo de Referência em outra coligada
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:35
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000626542-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Inclus%C3%A3o-de-Motivo-de-Refer%C3%AAncia-em-outra-coligada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000626542-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Inclus%C3%A3o-de-Motivo-de-Refer%C3%AAncia-em-outra-coligada)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como incluir um Motivo de Referência em outra coligada?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as Versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as Versões.
- Menu, etapa ou parametro citado: Para realizar a inclusão de um novo Motivo de Referência em outra coligada, acesse o menu Cadastros | Tabelas Auxiliares | Motivo de Referência:
- Menu, etapa ou parametro citado: Selecione o motivo usado como referência, acesse a aba Processos | Inclusão de Motivo de Referência:

#### [015] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como cadastrar Grade Numerada
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039858314-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-cadastrar-Grade-Numerada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039858314-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-cadastrar-Grade-Numerada)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como cadastrar novos produtos de Grade Numerada ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A Grade Numerada por Produto é utilizada para se fazer um controle detalhado do estoque físico. A utilização da grade numerada por produto facilita o cadastro e controle de estoque para produtos com especificações similares. Exemplo de Produto com Grade Numerada:
- Menu, etapa ou parametro citado: 2. Acesse Cadastros - Mais - Tabelas Auxiliares - Grade Numerada por produto e cadastre uma nova Grade informando o produto cadastrado como Base para Grade, Nome da Linha e Nome da Coluna.

#### [016] 1.2.3 Condição de Pagamento
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=551430151](https://tdn.totvs.com/pages/releaseview.action?pageId=551430151)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia inicial: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Evidencia inicial: O cadastro de Condição de Pagamento será necessário para o Processo Contrato Corporativo (PJ).
- Menu, etapa ou parametro citado: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Menu, etapa ou parametro citado: Para escolher o vencimento das parcelas sempre no mesmo dia (dia 10, por exemplo), após cadastrar a condição de pagamento acesse: Anexos | Dias de Carência | Incluir Novo:
- Menu, etapa ou parametro citado: Após cadastrada a condição de pagamento, é possível copiá-la para outra Coligada. Acesse Processos | Copiar Condição de Pagamento entre Coligadas
- Artefato tecnico citado: Ao inativar uma condição de pagamento (por DataServer), se houver movimentações pendentes o usuário vai ser alertado e informado sobre a quantidade de movimentos pendentes.

#### [017] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Para alterar Tipo do Produto não podem existir tributos cadastrados para este
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 10 de abril de 2025 às 09:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036741853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Para-alterar-Tipo-do-Produto-n%C3%A3o-podem-existir-tributos-cadastrados-para-este](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036741853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Para-alterar-Tipo-do-Produto-n%C3%A3o-podem-existir-tributos-cadastrados-para-este)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Ao tentar alterar o tipo do item (Produto ou Serviço) ocorre o erro: " Para alterar Tipo do Produto não podem existir tributos cadastrados para este "
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Conforme informado na mensagem de erro, não podem existir tributos vinculados ao produto para alterar o seu tipo. Nesse caso é necessário acessar no cadastro do produto o Menu Anexos Tributos do Produto e Anexos Tributos do Produto por Município e então deletar todos os tributos existentes nestas telas.

#### [018] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Grade Numerada
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036063454-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Grade-Numerada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036063454-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Grade-Numerada)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para que possa utilizar Grade Numerada nos itens?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Por esta opção, cadastra-se a Grade Numerada, este cadastro tem a finalidade de fazer um controle bem detalhado do estoque físico da empresa.

#### [019] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Valor inválido para o campo 'Cód. Unidade Base'
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035941774-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Valor-inv%C3%A1lido-para-o-campo-C%C3%B3d-Unidade-Base](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035941774-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Valor-inv%C3%A1lido-para-o-campo-C%C3%B3d-Unidade-Base)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:1:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: No módulo Gestão de Estoque, Compras e Faturamento, ao tentar cadastrar nova unidade de medida é apresentado o erro: Valor inválido para o campo 'Cód. Unidade Base'
- Menu, etapa ou parametro citado: No módulo Gestão de Estoque, Compras e Faturamento, ao tentar cadastrar nova unidade de medida é apresentado o erro: Valor inválido para o campo 'Cód. Unidade Base'
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [020] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como cadastrar nova Série
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:45
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035612534-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-cadastrar-nova-S%C3%A9rie](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035612534-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-cadastrar-nova-S%C3%A9rie)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como cadastrar nova série para coligada e configura-la para ser utilizada em inclusão de movimentação
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse o menu Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento - Numeração do movimento ;

#### [021] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Como Alterar Código de Produto
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:47
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102134-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Como-Alterar-C%C3%B3digo-de-Produto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102134-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Como-Alterar-C%C3%B3digo-de-Produto)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como alterar código de produto?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tabelas | Produto | Definições de Produto 1/3 .

#### [022] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Tributo não exibido em Anexos - Tributos do Produto
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:51
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034640713-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Tributo-n%C3%A3o-exibido-em-Anexos-Tributos-do-Produto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034640713-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Tributo-n%C3%A3o-exibido-em-Anexos-Tributos-do-Produto)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: No cadastro do produto, ao acessar Anexos - Tributos do Produto não são listados todos os tributos para inclusão.
- Menu, etapa ou parametro citado: No cadastro do produto, ao acessar Anexos - Tributos do Produto não são listados todos os tributos para inclusão.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [023] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Descrição Permissões por Tipo de movimento
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 17 de abril de 2025 às 09:49
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034607193-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Descri%C3%A7%C3%A3o-Permiss%C3%B5es-por-Tipo-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034607193-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Descri%C3%A7%C3%A3o-Permiss%C3%B5es-por-Tipo-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Qual a função/impacto de cada Permissão por Tipo de Movimento existente no anexo do Usuário?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: ross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da versão 11.80.
- Menu, etapa ou parametro citado: - Ativar/Tornar Inativo: Permite ao usuário ativar/inativar qualquer movimento deste tipo em Processos | Ativar/Inativar Movimento .

#### [024] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Definição de parcelas em condição de pagamento
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:53
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025150291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Defini%C3%A7%C3%A3o-de-parcelas-em-condi%C3%A7%C3%A3o-de-pagamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025150291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Defini%C3%A7%C3%A3o-de-parcelas-em-condi%C3%A7%C3%A3o-de-pagamento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Por que o cadastro de Condição de Pagamento apresenta apenas 5 linhas para a aba Composição das Parcelas?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [025] 1.2.3 Condição de Pagamento
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=551430151](https://tdn.totvs.com/pages/releaseview.action?pageId=551430151)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A Condição de Pagamento define os valores de cada parcela financeira assim como a data de vencimento.
- Evidencia inicial: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Evidencia inicial: O cadastro de Condição de Pagamento será necessário para o Processo Contrato Corporativo (PJ).
- Menu, etapa ou parametro citado: Para cadastrar uma condição de pagamento, o usuário deverá acessar BackOffice | TOTVS Gestão de Estoque, Compras e Faturamento | Cadastros | Tabelas Auxiliares | Condições de Pagamento | Incluir Novo .
- Menu, etapa ou parametro citado: Para escolher o vencimento das parcelas sempre no mesmo dia (dia 10, por exemplo), após cadastrar a condição de pagamento acesse: Anexos | Dias de Carência | Incluir Novo:
- Menu, etapa ou parametro citado: Após cadastrada a condição de pagamento, é possível copiá-la para outra Coligada. Acesse Processos | Copiar Condição de Pagamento entre Coligadas
- Artefato tecnico citado: Ao inativar uma condição de pagamento (por DataServer), se houver movimentações pendentes o usuário vai ser alertado e informado sobre a quantidade de movimentos pendentes.

#### [026] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Nível anterior ao produto não cadastrado
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 9 de abril de 2025 às 14:54
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024537271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-N%C3%ADvel-anterior-ao-produto-n%C3%A3o-cadastrado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024537271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-N%C3%ADvel-anterior-ao-produto-n%C3%A3o-cadastrado)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao incluir um novo produto o sistema apresenta a mensagem:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [027] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Não é possível alterar a Unidade de Controle
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 28 de outubro de 2021 às 04:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023604272-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-alterar-a-Unidade-de-Controle](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023604272-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-alterar-a-Unidade-de-Controle)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Produto XXXX: Não é possível alterar a Unidade de Controle, há movimentações existentes para o produto.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: SELECT \ FROM TMOV M (NOLOCK), TITMMOV T (NOLOCK)

#### [028] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Importação/Exportação de Produto via Conceito/Layout
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 10 de abril de 2025 às 09:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360007261092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Produto-via-Conceito-Layout](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360007261092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Produto-via-Conceito-Layout)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 minutos
- Evidencia inicial: Ocorrência
- Evidencia inicial: Auxilio na Importação/Exportação de Produto via Conceito/ Layout .
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Todo o processo será feito no Módulo Integração:

#### [029] RM - EST - Como tornar o anexo Dados Fiscais do Produto obrigatório
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 29 de abril de 2025 às 11:13
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003319992-RM-EST-Como-tornar-o-anexo-Dados-Fiscais-do-Produto-obrigat%C3%B3rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003319992-RM-EST-Como-tornar-o-anexo-Dados-Fiscais-do-Produto-obrigat%C3%B3rio)
- Classificacao inferida: geral
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Dúvida
- Evidencia inicial: Como tornar o anexo Dados Fiscais do Produto obrigatório durante a inclusão de um novo produto e para os já cadastrados?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: RM - Gestão de Estoque, Compras e Faturamento - A partir da 11.82

#### [030] PRD0001 Tornar Anexo Dados Fiscais do Produto Obrigatorio
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/PRD0001_Tornar_Anexo_Dados_Fiscais_do_Produto_Obrigatorio](https://tdn.totvs.com/display/public/LRM/PRD0001_Tornar_Anexo_Dados_Fiscais_do_Produto_Obrigatorio)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [031] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como utilizar editor de fórmulas no auxilio ao cadastro desta
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 10 de abril de 2025 às 09:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000580387-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-editor-de-f%C3%B3rmulas-no-auxilio-ao-cadastro-desta](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000580387-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-utilizar-editor-de-f%C3%B3rmulas-no-auxilio-ao-cadastro-desta)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min
- Evidencia inicial: Dúvida Como identificar a sintaxe de funções de fórmula e aplicabilidade destas?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como identificar a sintaxe de funções de fórmula e aplicabilidade destas?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Toda função é composta por um código e quando há parênteses () em sua sintaxe haverá então uma passagem de parâmetros (valores a serem utilizados na função).
- Artefato tecnico citado: 4\. No caso deste parâmetro como a função em si não possui uma tabela específica no banco de dados (a TABITMMOV tem a tabela TITMMOV , esta em questão é um select em mais de uma tabela por isso não tem tabela específica), para buscarmos o IDMOV a ser consistido na função deveremos buscar outra função de fórmula que no caso será a TABITMRELACPED (busca dados do movimento relacionado onde passaremos como parâmetro o campo IDMOV com o tipo I de inteiro ) diferentemente da função principal esta solicita como passagem de parâmetro o campo propriamente dito e não outra função:

#### [032] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Chave Duplicada TXPRDRED
- Secao de indice: Cadastros
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
- Data: 10 de abril de 2025 às 09:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350708-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Chave-Duplicada-TXPRDRED](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350708-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Chave-Duplicada-TXPRDRED)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao cadastrar um novo produto é apresentado a mensagem:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da 11.80.
- Menu, etapa ou parametro citado: Para igualar os valores do MAX(CODIGOREDUZIDO) – Maior valor encontrado para o código reduzido na coligada \- e da sequência atual nos parâmetros do módulo, basta executar a consulta abaixo:
- Artefato tecnico citado: SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODCOLPRD = X

#### [033] PRD0002 Violacao de chave TXPRDRED
- Secao de indice: Cadastros
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/PRD0002_Violacao_de_chave_TXPRDRED](https://tdn.totvs.com/display/public/LRM/PRD0002_Violacao_de_chave_TXPRDRED)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto:
- Evidencia inicial: TOTVS Gestão de Estoque, Compras e Faturamento
- Evidencia inicial: Versões:
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque, Compras e Faturamento
- Menu, etapa ou parametro citado: Ambiente:
- Menu, etapa ou parametro citado: Para igualar os valores do MAX(CODIGOREDUZIDO) – Maior valor encontrado para o código reduzido na coligada - e da sequência atual nos parâmetros do sistema, basta executar a consulta abaixo:
- Artefato tecnico citado: SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODCOLPRD = X
- Artefato tecnico citado: SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODCOLPRD = X

### Fonte: Controle_Orçamentário.md (10 artigos capturados)

#### [034] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária/Financeira Global
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 16 de setembro de 2022 às 12:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7297495813655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-Global](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7297495813655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-Global)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar a Natureza Orçamentária/Financeira como Global?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para isso deve acessar os parâmetros do Gestão de Estoque, Compras e Faturamento | Tabelas | Natureza Orçamentária/Financeira e marcar o check box Permite Globais .

#### [035] Natureza Orçamentária Financeira
- Secao de indice: Controle_Orçamentário
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423937949](https://tdn.totvs.com/pages/releaseview.action?pageId=423937949)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Atualmente já existe no TOTVS Gestão de Estoque, Compras e Faturamento, uma tabela de Natureza do Orçamento.
- Evidencia inicial: Identificamos que essa tabela tem o mesmo conteúdo que a Tabela de Natureza Financeira, portanto, decidimos evoluir a Tabela de Natureza do Orçamento tendo em vista que as duas teriam as mesmas informações tanto no Gestão de Estoque, Compras e Faturamento através do processo de controle orçamentário quanto no TOTVS Gestão Financeira através do processo de Fluxo de Caixa.
- Evidencia inicial: Natureza : Referente a visualização da natureza financeira nos lançamentos classificados a pagar, receber ou ambos.
- Menu, etapa ou parametro citado: Atualmente já existe no TOTVS Gestão de Estoque, Compras e Faturamento, uma tabela de Natureza do Orçamento.
- Menu, etapa ou parametro citado: Identificamos que essa tabela tem o mesmo conteúdo que a Tabela de Natureza Financeira, portanto, decidimos evoluir a Tabela de Natureza do Orçamento tendo em vista que as duas teriam as mesmas informações tanto no Gestão de Estoque, Compras e Faturamento através do processo de controle orçamentário quanto no TOTVS Gestão Financeira através do processo de Fluxo de Caixa.
- Menu, etapa ou parametro citado: Não Permite transferir Valores: Com este parâmetro habilitado o sistema não permite transferir valores de uma natureza a outra. Muito útil no processo de realocação orçamentária no modulo TOTVS Gestão de Estoque, Compras e Faturamento.

#### [036] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Natureza Orçamentária inválida para o Tipo de Orçamento informado!
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 9 de abril de 2025 às 15:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403929187607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-inv%C3%A1lida-para-o-Tipo-de-Or%C3%A7amento-informado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403929187607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Natureza-Or%C3%A7ament%C3%A1ria-inv%C3%A1lida-para-o-Tipo-de-Or%C3%A7amento-informado)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Ocorrência Ao realizar o processo de Importação de Arquivo de Orçamento ocorre a mensagem: Natureza Orçamentária inválida para o Tipo de Orçamento informado!
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.
- Menu, etapa ou parametro citado: Solução Acesse os parâmetros do tipo de movimento que está importando, etapa Orçamento e confira o campo Tipo Orçamento (caso encontre dificuldades para localizar os parâmetros do tipo de movimento https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento):
- Menu, etapa ou parametro citado: ​Confira também qual a natureza da Natureza Orçamentária Financeira , acessando menu Orçamento | Tabelas do Orçamento | Natureza Orçamentária Financeira:

#### [037] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como aumentar número de registros em Visão de Consulta de Orçamento
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 9 de abril de 2025 às 15:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360050379874-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-aumentar-n%C3%BAmero-de-registros-em-Vis%C3%A3o-de-Consulta-de-Or%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360050379874-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-aumentar-n%C3%BAmero-de-registros-em-Vis%C3%A3o-de-Consulta-de-Or%C3%A7amento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como aumentar número de registros em Visão de Consulta de Orçamento ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.
- Menu, etapa ou parametro citado: Outras formas para identificar actions do sistema clique https://centraldeatendimento.totvs.com/hc/pt-br/articles/360010960271-RM-FOP-Como-identificar-uma-Action-ou-um-DataServer-?source=search ou https://centraldeatendimento.totvs.com/hc/pt-br/articles/115016079668-RM-Frame-ID-do-Server-Action-Gerenciamento-de-Jobs?source=search.
- Artefato tecnico citado: Outras formas para identificar actions do sistema clique https://centraldeatendimento.totvs.com/hc/pt-br/articles/360010960271-RM-FOP-Como-identificar-uma-Action-ou-um-DataServer-?source=search ou https://centraldeatendimento.totvs.com/hc/pt-br/articles/115016079668-RM-Frame-ID-do-Server-Action-Gerenciamento-de-Jobs?source=search.

#### [038] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como desvincular Classificação de Período a Centro de Custo
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 9 de abril de 2025 às 15:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028066652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-desvincular-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-a-Centro-de-Custo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028066652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-desvincular-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-a-Centro-de-Custo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar o processo Desvincula Centro de Custo da Classificação de período é apresentada a mensagem:
- Evidencia inicial: Falha ao desvincular o Registro abaixo:
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar o processo Desvincula Centro de Custo da Classificação de período é apresentada a mensagem:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ao editar o vinculo existente observe que o campo se encontra desativado para alteração. O campo de classificação não pode ser alterado caso o Centro de Custo vinculado já tenha feito parte de algum Valor Orçado . Sendo assim o processo para Desvincular os cadastros não pode ser executado.

#### [039] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como utilizar Classificação de Período de Orçamento
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 9 de abril de 2025 às 15:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028064612-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-utilizar-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-de-Or%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028064612-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-utilizar-Classifica%C3%A7%C3%A3o-de-Per%C3%ADodo-de-Or%C3%A7amento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Qual a finalidade do cadastro e vínculo à uma Classificação de Período ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [040] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 10 de abril de 2025 às 09:33
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-O-Centro-de-Custo-Agrupado-j%C3%A1-existe-no-Or%C3%A7amento-para-o-mesmo-per%C3%ADodo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-O-Centro-de-Custo-Agrupado-j%C3%A1-existe-no-Or%C3%A7amento-para-o-mesmo-per%C3%ADodo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência Ao cadastrar um vínculo de centro de custo agrupador o sistema apresenta a mensagem: O Centro de Custo Agrupado já existe no Orçamento para o mesmo período!
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80.
- Menu, etapa ou parametro citado: Excluir o registro de valor orçado para o centro de custo agrupado pelo menu Orçamento | Cadastros de Valores Orçados:

#### [041] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Controle Orçamentário
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 9 de abril de 2025 às 15:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Controle-Or%C3%A7ament%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Controle-Or%C3%A7ament%C3%A1rio)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar/parametrizar todo o Controle Orçamentário do TOTVS Gestão de Estoque, Compras e Faturamento e seus processos como a inclusão de movimento dentro de um processo de compra
- Menu, etapa ou parametro citado: Como configurar/parametrizar todo o Controle Orçamentário do TOTVS Gestão de Estoque, Compras e Faturamento e seus processos como a inclusão de movimento dentro de um processo de compra
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [042] ORC0002 Controle Orcamentario
- Secao de indice: Controle_Orçamentário
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/ORC0002_Controle_Orcamentario](https://tdn.totvs.com/display/public/LRM/ORC0002_Controle_Orcamentario)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [043] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como importar Orçamento via arquivo TXT/Excel
- Secao de indice: Controle_Orçamentário
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
- Data: 10 de abril de 2025 às 09:20
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-importar-Or%C3%A7amento-via-arquivo-TXT-Excel](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-importar-Or%C3%A7amento-via-arquivo-TXT-Excel)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:08:30 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como realizar a Importação de Orçamento e seus valores através de arquivo txt/excel ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12
- Menu, etapa ou parametro citado: Caminho Módulo exe: Menu Utilitários | Importações / Exportações | Importar Orçamento

### Fonte: Gestão_De_Compras.md (34 artigos capturados)

#### [044] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Desconto por Item de Movimento na cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:33
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/20770503614743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Desconto-por-Item-de-Movimento-na-cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/20770503614743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Desconto-por-Item-de-Movimento-na-cota%C3%A7%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como levar o desconto preenchido na cotação para o Item do Movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acesse: menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Gestão de Compras Cotação Orçamento1/2 e habilite a flag Usa desconto no Item do Orçamento .

#### [045] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Desconto por Movimento na cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/20764246737175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Desconto-por-Movimento-na-cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/20764246737175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Desconto-por-Movimento-na-cota%C3%A7%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como levar o desconto preenchido na cotação para o movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acesse: menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Gestão de Compras Cotação Orçamento1/2 e habilite a flag Usa desconto no Orçamento .

#### [046] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Erro Portal do Fornecedor: Usuário e Senha inválidos!
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8736774773015-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Erro-Portal-do-Fornecedor-Usu%C3%A1rio-e-Senha-inv%C3%A1lidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8736774773015-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Erro-Portal-do-Fornecedor-Usu%C3%A1rio-e-Senha-inv%C3%A1lidos)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, portal do fornecedor
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar logar no Portal com o usuário e senha recebido por e-mail pelo fornecedor apresenta o erro abaixo:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Mais informações: https://tdn.totvs.com/pages/releaseview.action?pageId=639955763 id-01.PortaldoFornecedor|Pr%C3%A9requisitos-Usuario e autenticacao
- Menu, etapa ou parametro citado: Mais informações: https://tdn.totvs.com/pages/releaseview.action?pageId=639955763 id-01.PortaldoFornecedor|Pr%C3%A9requisitos-Usuario e autenticacao

#### [047] 01. Portal do Fornecedor | Pré-requisitos
- Secao de indice: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=639955763](https://tdn.totvs.com/pages/releaseview.action?pageId=639955763)
- Classificacao inferida: compras
- Gatilhos de busca observados: portal do fornecedor
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: - "API"
- Evidencia inicial: -
- Evidencia inicial: -
- Menu, etapa ou parametro citado: Acesso a menus → \[01\] Cadastros
- Menu, etapa ou parametro citado: Acesso a menus → \[03\] Compras → \[03.01\] Gestão de Compras → \[03.01.02\] Cotação
- Menu, etapa ou parametro citado: Parâmetros da cotação
- Artefato tecnico citado: O aplicativo RM.Host é responsável por hospedar e expor os serviços de APIs.
- Artefato tecnico citado: A execução do Host precisa ser como administrador:

#### [048] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Quais são as API's disponíveis?
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 24 de abril de 2025 às 10:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8554242302743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Quais-s%C3%A3o-as-API-s-dispon%C3%ADveis](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8554242302743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Quais-s%C3%A3o-as-API-s-dispon%C3%ADveis)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Neste documento iremos apresentar os documentos de referência das API's disponíveis no módulo Gestão de Estoque, Compras e Faturamento.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Neste documento iremos apresentar os documentos de referência das API's disponíveis no módulo Gestão de Estoque, Compras e Faturamento.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Inicialmente para realizar a integração do RM com as API's deverá configurar a https://centraldeatendimento.totvs.com/hc/pt-br/articles/360044519633-Cross-Segmentos-Backoffice-RM-Integra%C3%A7%C3%A3o-O-que-%C3%A9-e-como-configurar-a-HttpPort-e-ApiPort-?source=search.

#### [049] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como instalar o Portal do Fornecedor
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:31
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8552231173015-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-instalar-o-Portal-do-Fornecedor](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8552231173015-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-instalar-o-Portal-do-Fornecedor)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, portal do fornecedor
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como realizar a instalação do Portal do Fornecedor?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Artefato tecnico citado: É nesse momento que precisamos informar as portas do Host ( Port ) e do serviço de API ( ApiPort ) da Biblioteca RM.

#### [050] Portal do Fornecedor
- Secao de indice: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Portal+do+Fornecedor](https://tdn.totvs.com/display/public/LRM/Portal+do+Fornecedor)
- Classificacao inferida: compras
- Gatilhos de busca observados: portal do fornecedor
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: O Portal do fornecedor tem como objetivo oferecer uma melhor experiência na gestão de compras para nossos clientes e seus fornecedores , com uma ferramenta que irá conferir praticidade e agilidade ao processo, garantindo sempre qualidade e segurança ao negócio.
- Evidencia inicial: - /pages/viewpage.action?pageId=639955763
- Evidencia inicial: - /pages/viewpage.action?pageId=639955621
- Menu, etapa ou parametro citado: O Portal do fornecedor tem como objetivo oferecer uma melhor experiência na gestão de compras para nossos clientes e seus fornecedores , com uma ferramenta que irá conferir praticidade e agilidade ao processo, garantindo sempre qualidade e segurança ao negócio.

#### [051] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como parametrizar o campo "frete" do orçamento de cotação para trabalhar como valor
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:30
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7327433392279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-parametrizar-o-campo-frete-do-or%C3%A7amento-de-cota%C3%A7%C3%A3o-para-trabalhar-como-valor](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7327433392279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-parametrizar-o-campo-frete-do-or%C3%A7amento-de-cota%C3%A7%C3%A3o-para-trabalhar-como-valor)
- Classificacao inferida: parametrizacao, compras, estoque
- Gatilhos de busca observados: parametrizacao, cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o campo "frete" do orçamento de cotação para trabalhar como valor.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1
- Menu, etapa ou parametro citado: Além disso, para que o valor do frete seja carregado para o movimento como valor é necessário acessar os parâmetros do tipo de movimento na etapa Mov - Valores Financeiros 1/4 e selecionar "Valor" no campo Tipo de Frete .

#### [052] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Editar Preço Cotado após calcular Quadro Comparativo
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 14 de abril de 2025 às 14:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7111259070743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Editar-Pre%C3%A7o-Cotado-ap%C3%B3s-calcular-Quadro-Comparativo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7111259070743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Editar-Pre%C3%A7o-Cotado-ap%C3%B3s-calcular-Quadro-Comparativo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, quadro comparativo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: No processo de Cotação, após incluídos os Orçamentos dos fornecedores e calculado o Quadro Comparativo, se houver algum erro de digitação por exemplo, o sistema não permite mais voltar no Orçamento e alterar o Preço Cotado do item.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [053] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Webservices Cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 29 de setembro de 2021 às 13:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409693264151-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Webservices-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409693264151-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Webservices-Cota%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Quais Webservices podem ser utilizados para integrar uma cotação.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.
- Artefato tecnico citado: Nome do Método: SaveRecord
- Artefato tecnico citado: Nome do DataServer: CmpCotacaoData

#### [054] Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como utilizar a opção Usar Preço Total no Item, dentro da Cotação.
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409391460119-Cross-Segmentos-TOTVS-Backoffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-utilizar-a-op%C3%A7%C3%A3o-Usar-Pre%C3%A7o-Total-no-Item-dentro-da-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409391460119-Cross-Segmentos-TOTVS-Backoffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-utilizar-a-op%C3%A7%C3%A3o-Usar-Pre%C3%A7o-Total-no-Item-dentro-da-Cota%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como utilizar a opção Usar Preço Total no Item, dentro da Cotação.
- Menu, etapa ou parametro citado: Ambiente Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões\]
- Menu, etapa ou parametro citado: Essa opção e recomendada quando o cliente tem a opção de compras por atacado.
- Menu, etapa ou parametro citado: Acesse ao menu, Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Gestão de Compras Cotação Definições Gerais 2/5

#### [055] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cotação cancelada ao cancelar Ordem de Compra.
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402319211287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-cancelada-ao-cancelar-Ordem-de-Compra](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402319211287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-cancelada-ao-cancelar-Ordem-de-Compra)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento, ordem de compra
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao cancelar uma Ordem de Compra que foi gerada a partir de uma Cotação , a cotação também é cancelada.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - a partir da versão 12.1.
- Menu, etapa ou parametro citado: Quando nos parâmetros da cotação a flag Permite Cotação Parcialmente Gerada está desmarcada, ao cancelar a ordem de compra gerada, a cotação também é cancelada.

#### [056] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Processo de Cotação (Compras)
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:28
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012581821-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Processo-de-Cota%C3%A7%C3%A3o-Compras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012581821-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Processo-de-Cota%C3%A7%C3%A3o-Compras)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:10:00 min Dúvida
- Evidencia inicial: O processo de compras indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A Cotação é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. Ambiente
- Evidencia inicial: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O processo de compras indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A Cotação é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O processo inicia-se na criação de uma Solicitação de Compra onde é gerado um Movimento do tipo 1.1.xx onde são solicitados os produtos que a empresa precisa comprar. Após a criação do Movimento de Solicitação é iniciada então a Cotação, onde a relação dos produtos será enviada para determinados Fornecedores que darão a resposta do orçamento. É utilizado então o Quadro Comparativo para que seja definido qual é a compra que será mais benéfica para a empresa. Após o cálculo do Quadro Comparativo, temos o vencedor da Cotação. A partir desse momento geramos a Ordem de Compra num outro Movimento do tipo 1.1.xx. Este parametrizado para ser um Pedido de compra que posteriormente dará origem ao Movimento final de compras do tipo 1.2.xx.

#### [057] Parâmetros - Cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938121](https://tdn.totvs.com/pages/releaseview.action?pageId=423938121)
- Classificacao inferida: parametrizacao, compras
- Gatilhos de busca observados: cotacao
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Para conseguir atender os casos onde existem parametrizações diferentes/específicas do processo de cotação entre as filiais da mesma coligada. Os parâmetros da cotação pode ser definidos em dois niveis:
- Evidencia inicial: - Geral
- Evidencia inicial: A parametrização geral é considerada nos casos onde a cotação abrange solicitações de diferentes filiais.
- Menu, etapa ou parametro citado: Para conseguir atender os casos onde existem parametrizações diferentes/específicas do processo de cotação entre as filiais da mesma coligada. Os parâmetros da cotação pode ser definidos em dois niveis:
- Menu, etapa ou parametro citado: Quantidade de últimas compras do fornecedor para um determinado item: Esse parâmetro terá o número dos últimos movimentos de compra a serem mostrados no quadro comparativo. Esses movimentos serão por item e por fornecedor. Para visualizar este recurso, deve-se clicar Ctrl + clique no item desejado do quadro comparativo.
- Menu, etapa ou parametro citado: O fornecedor receberá um e-mail contendo a senha para acessar este orçamento no RM http://Nucleus.com, este irá informar os valores no RM http://Nucleus.com e será salvo. O servidor verificará a data limite de resposta e enviará para o TOTVS Gestão de Estoque, Compras e Faturamento todas as cotações que estiverem marcadas para esta data.

#### [058] Cotação (Compras)
- Secao de indice: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938220](https://tdn.totvs.com/pages/releaseview.action?pageId=423938220)
- Classificacao inferida: compras
- Gatilhos de busca observados: cotacao, compras
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: O processo de compras Indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A cotação é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. O processo inicia-se na criação de uma solicitação de compras onde é gerado um movimento do tipo 1.1.xx onde são solicitados os produtos que a empresa precisa comprar. Após a criação do movimento de solicitação, é iniciada então a Cotação, onde a relação dos produtos será enviada para determinados Fornecedores que darão a resposta do orçamento. É utilizado então o quadro comparativo para que seja definido qual é a compra que será mais benéfica para a empresa. Após o cálculo do quadro comparativo, temos o vencedor da cotação. A partir desse momento geramos a ordem de compras num outro movimento do tipo 1.1.xx. Este parametrizado para ser um "Pedido de compra" que posteriormente dará origem ao movimento final de compras do tipo 1.2.xx, neste tipo de movimento obrigatoriamente deverá ter um Fornecedor vinculado, este deverá ser cadastrado no sistema antes de iniciar o processo de compras.
- Evidencia inicial: Para trabalhar com cotação, devemos ter a seguinte parametrização nos tipos de movimento:
- Evidencia inicial: Movimento de Solicitação de Compras
- Menu, etapa ou parametro citado: O processo de compras Indireto no TOTVS Gestão de Estoques, Compras e Faturamento é feito através da Cotação. A cotação é utilizada para definir de qual fornecedor a empresa irá realizar a compra de seus materiais. O processo inicia-se na criação de uma solicitação de compras onde é gerado um movimento do tipo 1.1.xx onde são solicitados os produtos que a empresa precisa comprar. Após a criação do movimento de solicitação, é iniciada então a Cotação, onde a relação dos produtos será enviada para determinados Fornecedores que darão a resposta do orçamento. É utilizado então o quadro comparativo para que seja definido qual é a compra que será mais benéfica para a empresa. Após o cálculo do quadro comparativo, temos o vencedor da cotação. A partir desse momento geramos a ordem de compras num outro movimento do tipo 1.1.xx. Este parametrizado para ser um "Pedido de compra" que posteriormente dará origem ao movimento final de compras do tipo 1.2.xx, neste tipo de movimento obrigatoriamente deverá ter um Fornecedor vinculado, este deverá ser cadastrado no sistema antes de iniciar o processo de compras.
- Menu, etapa ou parametro citado: Movimento de Solicitação de Compras
- Menu, etapa ou parametro citado: Movimento do tipo 1.1.xx de solicitação de compras parametrizado da seguinte maneira: Compra/Venda – Características • Parâmetro "Gera movimento de compras" marcado. • Movimento gerado deafult: Informar um tipo de movimento parametrizado como "Pedido de compras". Compra/Venda – Outros Dados • Parâmetro "Tipo do movimento de compra" marcado como "Solicitação de compras".

#### [059] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Registro de Orçamento via Planilha.NET sem Conceito
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:27
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360051540954-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Registro-de-Or%C3%A7amento-via-Planilha-NET-sem-Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360051540954-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Registro-de-Or%C3%A7amento-via-Planilha-NET-sem-Conceito)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como registrar Orçamento em Cotação utilizando planilha de sem Conceito?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.28.
- Menu, etapa ou parametro citado: Para importar a Planilha Net de modelo é necessário realizar a importação da Planilha NUCPLA0004 - Exportação de Cotação V2.PlanNetTotvs , menu Gestão | Planilha Net | Importação de Planilha.NET .
- Menu, etapa ou parametro citado: 1. Como dito anteriormente não será mais necessário utilizar um conceito, bastando apenas a parametrização de um caminho padrão de onde as planilhas serão buscadas para importação. Este parâmetro pode ser encontrado em Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão Compras | Cotação | Etapa 3 - Definições Gerais 3/5 | Grupo 'Importação de Planilha' (img01).

#### [060] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Central de Compras
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:27
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039896393-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Central-de-Compras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039896393-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Central-de-Compras)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como funciona a Central de Compras?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como funciona a Central de Compras?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A 'Central de Compras' é uma entidade na qual pode ser realizado o processo de cotação / negociação da melhor oferta para as compras de todas as coligadas/filiais cadastradas na base. Desde que corretamente parametrizada. Pode ser utilizada/parametrizada em qualquer coligada e tem a indicação das coligadas e filiais que irá atender. A empresa pode trabalhar com mais de uma 'Central de Compras', desde que em Coligadas diferentes. A Coligada que optar em trabalhar com 'Central de Compras', terá uma única parametrização para as cotações quando realizar o processo com mais de uma filial ou com filial de outra coligada. A 'Central de Compras' não trata diferenciadamente os parâmetros de cotação por coligada/filial. No entanto, para cotações locais em sua coligada, o comportamento continua sendo feito de forma geral ou por filial. Já a coligada que não trabalha com a 'Central de Compras' (para compras realizadas na própria coligada/filial solicitante do material – compras locais ou descentralizadas) continua tendo a parametrização diferenciada por coligada/filial.

#### [061] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Parametrização Cotação Web
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039895753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Parametriza%C3%A7%C3%A3o-Cota%C3%A7%C3%A3o-Web](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039895753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Parametriza%C3%A7%C3%A3o-Cota%C3%A7%C3%A3o-Web)
- Classificacao inferida: parametrizacao, compras, estoque
- Gatilhos de busca observados: parametrizacao, cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como parametrizar o sistema para utilizar a Cotação Web?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acessar o Módulo de Gestão de Estoque, Compras e Faturamento | Vá no menu Ambiente | Parâmetros | Estoque, Compras e Faturamento | Gestão de Compras | Cotação ( Verificar o escopo necessário, Geral ou por filial ) | Etapa Definições Gerais 2/4 | Marcar o parâmetro "Usar Orçamento na Web" conforme print abaixo:

#### [062] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Permitir Cotação Parcialmente Gerada
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036979453-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Permitir-Cota%C3%A7%C3%A3o-Parcialmente-Gerada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036979453-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Permitir-Cota%C3%A7%C3%A3o-Parcialmente-Gerada)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como solucionar o erro:
- Evidencia inicial: Sistema parametrizado para não permitir cotação parcialmente gerada .
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80
- Menu, etapa ou parametro citado: Solução É necessário acessar o menu Ambiente | Parâmetros | Gestão de Estoque Compras e Faturamento | Gestão de Compras | Cotação | Definições gerais 2/5 | Marcar a flag Permite cotação parcialmente gerada .

#### [063] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cotação não permite Alterar Tipo de Julgamento de Melhor oferta
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036123533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-n%C3%A3o-permite-Alterar-Tipo-de-Julgamento-de-Melhor-oferta](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036123533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Cota%C3%A7%C3%A3o-n%C3%A3o-permite-Alterar-Tipo-de-Julgamento-de-Melhor-oferta)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Por que ao tentar editar uma cotação o ícone Alterar o Tipo de Julgamento de Melhor oferta se encontra desabilitado para utilização?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Em exemplo, o mesmo comportamento acontece quando nos parâmetros do tipo de movimento for parametrizado para utilizar Histórico Longo. O sistema não permite que seja alterado a parametrização para Histórico Curto.

#### [064] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Tipo de Movimento Usado para Geração de Ordem de Compra pela Cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:23
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034915354-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Tipo-de-Movimento-Usado-para-Gera%C3%A7%C3%A3o-de-Ordem-de-Compra-pela-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034915354-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Tipo-de-Movimento-Usado-para-Gera%C3%A7%C3%A3o-de-Ordem-de-Compra-pela-Cota%C3%A7%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, cotacao, estoque, compras, faturamento, ordem de compra
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como definir para qual tipo de movimento a Ordem de Compra será criada ao executar o processo Gerar Ordem de Compra pela Cotação?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as Versões
- Menu, etapa ou parametro citado: Por padrão, Ordens de Compra geradas pela cotação através de Processos Gerar Ordem de Compra , são criadas para o tipo de movimento selecionado nos parâmetros da Solicitação de Compra cotada, etapa Compra/Venda - Características, campo Tipo Movimento Gerado Default .

#### [065] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Copiar Campos da Solicitação Para a Ordem de Compra através da cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035403633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-Para-a-Ordem-de-Compra-atrav%C3%A9s-da-cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035403633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-Para-a-Ordem-de-Compra-atrav%C3%A9s-da-cota%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento, ordem de compra
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como copiar informações de campos na Solicitação de Compra para a Ordem de Compra após a cotação ser realizada?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução É necessário parametrizar para que a cotação permita cotar apenas uma solicitação de compra por vez. Acesse os parâmetros da cotação, etapa "Definições Gerais 3/5" e marque a flag "Cotar itens de uma única solicitação de compra" , salve e exclua a cotação e inclua novamente.
- Menu, etapa ou parametro citado: Sem esta configuração os campos preenchidos na solicitação não serão copiados para a ordem de compras uma vez que a cotação pode ter mais de uma solicitação sendo cotada, e assim não há como definir de qual solicitação a informação seria copiada.

#### [066] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Usuário não cadastrado na base de dados
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025584173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Usu%C3%A1rio-n%C3%A3o-cadastrado-na-base-de-dados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025584173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Usu%C3%A1rio-n%C3%A3o-cadastrado-na-base-de-dados)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar realizar Exportação da Cotação para Web é apresentada a mensagem:
- Evidencia inicial: 'Usuário "rm" não cadastrado na base de dados'.
- Menu, etapa ou parametro citado: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar realizar Exportação da Cotação para Web é apresentada a mensagem:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [067] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Agrupar/Não Agrupar itens iguais na Cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028380232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Agrupar-N%C3%A3o-Agrupar-itens-iguais-na-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028380232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Agrupar-N%C3%A3o-Agrupar-itens-iguais-na-Cota%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como Agrupar/Não Agrupar itens iguais em orçamento da cotação?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução Quando a Solicitação de Compra cotada possuir itens iguais (com mesmo código), é possível que no orçamento estes sejam agrupados ou não. Tal comportamento é definido nos parâmetros da cotação, etapa Movimentos 1/2, através da flag Não agrupar Itens Iguais na Cotação (quando marcada, os itens não serão agrupados).
- Menu, etapa ou parametro citado: Caso estejam sendo cotadas Solicitações de Compras de uma filial somente, a parametrização a ser respeitada será definida em Definição de Escopo - Filial.

#### [068] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Copiar Campos da Solicitação de Compras para Ordem de Compra na Geração por Cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:20
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028657771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-de-Compras-para-Ordem-de-Compra-na-Gera%C3%A7%C3%A3o-por-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028657771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Copiar-Campos-da-Solicita%C3%A7%C3%A3o-de-Compras-para-Ordem-de-Compra-na-Gera%C3%A7%C3%A3o-por-Cota%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento, ordem de compra
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como copiar campos como Segundo Número (Não Sequencial), Data Extra, Funcionários e Campos Livres do movimento de Solicitação de Compra para o movimento destino, na geração de Ordem de Compra pela Cotação?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução Os campos da Solicitação de Compra serão copiados para a Ordem de Compra, quando esta for gerada por Cotação, somente se nos parâmetros da Cotação, menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Gestão Compras Cotação Definições de Escopo - Filial (se estiver cotando itens de uma única filial) etapa Definições Gerais 3/5, a flag Cotar Itens de uma Única Solicitação de Compra estiver marcada.

#### [069] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Permitir cotar solicitação de compra de outros compradores
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:20
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026129631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Permitir-cotar-solicita%C3%A7%C3%A3o-de-compra-de-outros-compradores](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026129631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Permitir-cotar-solicita%C3%A7%C3%A3o-de-compra-de-outros-compradores)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como permitir que um Comprador possa Cotar Solicitações feitas por outros compradores?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ao atribuir tal permissão a solicitação de compras precisa possuir um comprador informado para que o usuário que não possua tal permissão não consiga cotar solicitações de outros compradores.

#### [070] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - O comprador responsável por esta cotação não tem um e-mail definido
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 10 de abril de 2025 às 09:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025960911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-O-comprador-respons%C3%A1vel-por-esta-cota%C3%A7%C3%A3o-n%C3%A3o-tem-um-e-mail-definido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025960911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-O-comprador-respons%C3%A1vel-por-esta-cota%C3%A7%C3%A3o-n%C3%A3o-tem-um-e-mail-definido)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao Comunicar Fornecedores no processo de Cotação, sistema exibe a mensagem abaixo:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [071] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - O preço unitário do item do movimento tem um valor inferior ao seu preço cotado
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 10 de abril de 2025 às 09:35
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024585191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-O-pre%C3%A7o-unit%C3%A1rio-do-item-do-movimento-tem-um-valor-inferior-ao-seu-pre%C3%A7o-cotado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024585191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-O-pre%C3%A7o-unit%C3%A1rio-do-item-do-movimento-tem-um-valor-inferior-ao-seu-pre%C3%A7o-cotado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao gerar ordem de compras a partir de uma cotação sistema apresenta a mensagem abaixo:
- Evidencia inicial: O preço unitário do item do movimento tem um valor inferior ao seu preço cotado. O valor do item na solicitação de compra é de O valor do item cotado é de
- Menu, etapa ou parametro citado: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao gerar ordem de compras a partir de uma cotação sistema apresenta a mensagem abaixo:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [072] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Cálculo do Quadro Comparativo solicita cotação de moeda
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 10 de abril de 2025 às 09:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023802752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-C%C3%A1lculo-do-Quadro-Comparativo-solicita-cota%C3%A7%C3%A3o-de-moeda](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023802752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-C%C3%A1lculo-do-Quadro-Comparativo-solicita-cota%C3%A7%C3%A3o-de-moeda)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento, quadro comparativo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: No módulo Gestão de Estoque, Compras e Faturamento ao tentar realizar cálculo do Quadro Comparativo de uma cotação é apresentada a mensagem: Ocorreu um erro ao efetuar a leitura da visão: CmpQuadroComparativoAction Não foi localizada uma cotação para os símbolos na data
- Menu, etapa ou parametro citado: No módulo Gestão de Estoque, Compras e Faturamento ao tentar realizar cálculo do Quadro Comparativo de uma cotação é apresentada a mensagem: Ocorreu um erro ao efetuar a leitura da visão: CmpQuadroComparativoAction Não foi localizada uma cotação para os símbolos na data
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 2. Em anexos Cotações cadastre uma nova cotação onde a moeda Símbolo de referência será a moeda informada na cotação.

#### [073] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Não é possível inserir uma cotação com mais de 0 fornecedores
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022143112-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-N%C3%A3o-%C3%A9-poss%C3%ADvel-inserir-uma-cota%C3%A7%C3%A3o-com-mais-de-0-fornecedores](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022143112-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-N%C3%A3o-%C3%A9-poss%C3%ADvel-inserir-uma-cota%C3%A7%C3%A3o-com-mais-de-0-fornecedores)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência Ao executar o processo de assistente de cotação, após informar os fornecedores avançar, o sistema apresenta mensagem: Não é possível inserir uma cotação com mais de X fornecedores
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1. Acessar o menu Ambiente | Parâmetros | Gestão de estoque, Compras e Faturamento | Gestão de Compras | Cotação e clique em avançar;

#### [074] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Importar Planilha de Orçamento/Negociação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 9 de abril de 2025 às 15:13
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019491211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Importar-Planilha-de-Or%C3%A7amento-Negocia%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019491211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Importar-Planilha-de-Or%C3%A7amento-Negocia%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min.
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar importar a planilha Excel de Orçamento/Negociação da cotação é apresentado o erro abaixo:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Após esta configuração de ambiente, iremos configurar o conceito. Acesse o módulo de Integração e no menu Integração, acesse a opção Conceito (ETL).
- Artefato tecnico citado: A principal causa para este erro é a versão do driver do Excel(OLEDB) instalada no servidor de job (ambientes N camadas) ou máquina local que está executando o processo. Porém, outros fatores também podem influenciar no processo.

#### [075] Importação de Orçamento
- Secao de indice: Gestão_De_Compras
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938015](https://tdn.totvs.com/pages/releaseview.action?pageId=423938015)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Para que seja possível realizar a importação do orçamento via arquivo texto (. txt) e/ou planilhas (.xls), deve-se, seguir as configurações conforme especificação abaixo:
- Evidencia inicial: Importação via arquivo TXT
- Evidencia inicial: A data deverá seguir o formato DD/MM/AAAA; - A importação sempre afetará o valor orçado. Caso este seja zero e tente importar um valor negativo, deverá ser gerada uma exceção e a importação não poderá ser concluída; - A importação pode ser feita inclusive para orçamentos que estejam bloqueados; - Importação de arquivo txt sem o campo Tipo (neste caso o orçamento deve ser incluído como Despesa ); - A coluna Tipo deve ser preenchida com ' R ' para Receita e ' D ' para Despesa .

#### [076] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como realizar Interferência por Produto
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 6 de outubro de 2025 às 17:06
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017738751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-realizar-Interfer%C3%AAncia-por-Produto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360017738751-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-realizar-Interfer%C3%AAncia-por-Produto)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como realizar Interferência no Novo Quadro Comparativo.\]
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 2406.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 2406.
- Menu, etapa ou parametro citado: Será necessário verificar no Menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Gestão de Compras Cotação Definições Gerais 2/6, se o campo Permite Cotação Parcialmente Gerada esta marcado:

#### [077] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Item não exibido durante a inclusão da Cotação
- Secao de indice: Gestão_De_Compras
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
- Data: 15 de agosto de 2025 às 12:25
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350888-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Item-n%C3%A3o-exibido-durante-a-inclus%C3%A3o-da-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350888-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Item-n%C3%A3o-exibido-durante-a-inclus%C3%A3o-da-Cota%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: cotacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Foi incluída Solicitação de Compras com um ou mais itens, porém estes não estão sendo apresentados no Assistente de Cotação para criação da mesma.
- Menu, etapa ou parametro citado: Foi incluída Solicitação de Compras com um ou mais itens, porém estes não estão sendo apresentados no Assistente de Cotação para criação da mesma.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.82.

### Fonte: Gestão_De_Contratos.md (57 artigos capturados)

#### [078] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Erro: Não é permitido excluir movimento originado de Faturamento de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 25 de setembro de 2025 às 15:25
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33822498226967-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Erro-N%C3%A3o-%C3%A9-permitido-excluir-movimento-originado-de-Faturamento-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33822498226967-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Erro-N%C3%A3o-%C3%A9-permitido-excluir-movimento-originado-de-Faturamento-de-Contrato)
- Classificacao inferida: movimento, compras, estoque, contratos
- Gatilhos de busca observados: movimento, estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar cancelar ou excluir movimentos é apresentado o erro: Não é permitido excluir movimento originado de Faturamento de Contrato. Para excluir esse Movimento, execute o processo de Cancelar Faturamento de Contrato.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: 1. Caso não saiba qual é o contrato de origem, selecione o movimento Anexos Dados Contrato Origem.

#### [079] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Abatimento ou Acréscimo na Parcela
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 16:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33820337646231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Abatimento-ou-Acr%C3%A9scimo-na-Parcela](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33820337646231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Abatimento-ou-Acr%C3%A9scimo-na-Parcela)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como realizar Abatimento ( Desconto ) ou Acréscimo ( Despesa ) nas parcelas do Contrato?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: - Ao realizar o faturamento de uma parcela que possui valor de abatimento e/ou acréscimo, o valor do movimento gerado poderá ser afetado conforme a fórmula de valor líquido parametrizada no tipo de movimento. Essas informações são passadas ao movimento através dos campos de despesa e desconto , conforme documentado no processo de faturamento do contrato.

#### [080] 03. Contratos 2.0 | Processos | Abatimento ou Acréscimo
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=938330409](https://tdn.totvs.com/pages/releaseview.action?pageId=938330409)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Este processo permite o acréscimo ou abatimento de valor em uma ou mais parcelas que não estejam faturadas ou inativas.
- Evidencia inicial: Exemplo de Aplicação:
- Evidencia inicial: Para contratos que envolvem a disponibilização de um serviço (como um provedor de internet), este processo pode ser executado quando houver a interrupção do serviço por alguma eventualidade, ou quando o uso do serviço for superior ao valor contratado.
- Menu, etapa ou parametro citado: Para contratos que envolvem a disponibilização de um serviço (como um provedor de internet), este processo pode ser executado quando houver a interrupção do serviço por alguma eventualidade, ou quando o uso do serviço for superior ao valor contratado.
- Menu, etapa ou parametro citado: Ao realizar o faturamento de uma parcela que possui valor de abatimento e/ou acréscimo, o valor do movimento gerado poderá ser afetado conforme a fórmula de valor líquido parametrizada no tipo de movimento. Essas informações são passadas ao movimento através dos campos de despesa e desconto , conforme documentado no processo de faturamento do contrato.

#### [081] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Redistribuir Valor Parcela do Item
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 29 de julho de 2025 às 16:56
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33790887070103-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Redistribuir-Valor-Parcela-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33790887070103-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Redistribuir-Valor-Parcela-do-Item)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como Redistribuir o Valor das Parcelas no Contrato 2.0?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir da Versão 12.1.2502
- Menu, etapa ou parametro citado: Existem contratos Periódicos e de Arrendamento que são negociados com valores diferentes nas parcelas, por exemplo:

#### [082] 03. Contratos 2.0 | Processos | Redistribuir Valor Parcela
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Redistribuir+Valor+Parcela](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Redistribuir+Valor+Parcela)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: O processo de Redistribuição dos Valores das Parcelas do item do contrato tem como objetivo atualizar os valores das parcelas, a fim de que as mesmas, tenham valores acordados, independente da distribuição igualitária do valor de um item.
- Evidencia inicial: Existem contratos Periódicos e de Arrendamento que são negociados valores diferentes nas parcelas, um exemplo muito comum é em contrato de aluguel de imóvel onde a negociação é variada, por exemplo:
- Evidencia inicial: Contrato de 36 meses:
- Menu, etapa ou parametro citado: Existem contratos Periódicos e de Arrendamento que são negociados valores diferentes nas parcelas, um exemplo muito comum é em contrato de aluguel de imóvel onde a negociação é variada, por exemplo:
- Menu, etapa ou parametro citado: Este processo também poderá ser aplicado aos contratos de medição, especialmente em contratos sazonais, nos quais se busca uma maior aderência das parcelas previstas à realidade contratual. Assim, será possível iniciar o contrato com parcelas previstas conforme a necessidada do contrato. No entanto, durante o processo de medição, caso os valores medidos sejam diferentes dos valores inicialmente previstos, o sistema realizará a redistribuição proporcional do saldo restante entre as parcelas.
- Menu, etapa ou parametro citado: Processos a nível de contrato:

#### [083] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 25 de setembro de 2025 às 15:20
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33145720807575-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33145720807575-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Quais são os requisitos para utilizar, e documentações referentes ao Contrato 2.0?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: - Clientes que nunca utilizaram o Contratos 1.0.

#### [084] 06. Contratos - Tabelas do Contrato 2.0
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/06.+Contratos+-+Tabelas+do+Contrato+2.0](https://tdn.totvs.com/display/public/LRM/06.+Contratos+-+Tabelas+do+Contrato+2.0)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tabelas
- Evidencia inicial: Nome
- Evidencia inicial: Tabelas
- Menu, etapa ou parametro citado: Histórico de execução de processos no contrato
- Menu, etapa ou parametro citado: Histórico de Reajustes dos Contratos
- Menu, etapa ou parametro citado: Parâmetros de Contratos
- Artefato tecnico citado: Na tabela TITMMOV é possivel identificar o contrato e item de contrato que originou o movimento

#### [085] Contratos 2.0
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Contratos+2.0](https://tdn.totvs.com/display/public/LRM/Contratos+2.0)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: [
- Evidencia inicial: ](https://tdn.totvs.com/x/iM9eNw)
- Evidencia inicial: [
- Menu, etapa ou parametro citado: - /display/LRM/02.+Contratos+2.0+%7C+Cadastros
- Menu, etapa ou parametro citado: - /display/LRM/03.+Contratos+2.0+%7C+Processos
- Menu, etapa ou parametro citado: - /display/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Aditivo

#### [086] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Conversor 1.0 para 2.0
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 16:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33144489978903-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Conversor-1-0-para-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33144489978903-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Conversor-1-0-para-2-0)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como converter um Contrato para a versão 2.0?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: O conversor tem como objetivo acelerar a transferência dos contratos cadastrados na versão 1.0 para a versão 2.0. Ambos os contratos utilizam as mesmas tabelas no banco de dados; desta forma, o conversor faz o ajuste dos campos que mudaram de localização e finalidade, além de solicitar os novos campos necessários para a geração das parcelas.

#### [087] 05. Contratos 2.0 | Conversor contrato 1.0 para 2.0
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/05.+Contratos+2.0+%7C+Conversor+contrato+1.0+para+2.0](https://tdn.totvs.com/display/public/LRM/05.+Contratos+2.0+%7C+Conversor+contrato+1.0+para+2.0)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: O conversor tem como objetivo acelerar a transferência dos contratos cadastrados na versão 1.0 para a versão 2.0. Ambos os contratos utilizam as mesmas tabelas no banco de dados; desta forma, o conversor faz o ajuste dos campos que mudaram de localização e finalidade, além de solicitar os novos campos necessários para a geração das parcelas.
- Evidencia inicial: Pré-requisitos
- Evidencia inicial: - Entender o conceito dos novos campos do Contrato 2.0 para preenchimento na conversão (Tipo de Faturamento — Medição Valor e Quantidade, Periodicidade, Dia de Vencimento e Número de Parcelas).
- Menu, etapa ou parametro citado: O conversor tem como objetivo acelerar a transferência dos contratos cadastrados na versão 1.0 para a versão 2.0. Ambos os contratos utilizam as mesmas tabelas no banco de dados; desta forma, o conversor faz o ajuste dos campos que mudaram de localização e finalidade, além de solicitar os novos campos necessários para a geração das parcelas.
- Menu, etapa ou parametro citado: - Realizar simulações em base de dados de homologação com diferentes tipos de contratos para entendimento do processo.
- Menu, etapa ou parametro citado: - Realizar backup antes de iniciar a conversão, pois, após convertidos, os contratos só serão visualizados na versão 2.0.

#### [088] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Anexo Dados Contrato Origem
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 18:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29005359086999-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Anexo-Dados-Contrato-Origem](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29005359086999-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Anexo-Dados-Contrato-Origem)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Qual a funcionalidade do Anexo Dados Contrato Origem no movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: A visualização do anexo do contrato 2.0 é realizada em tipo de movimentos, menu Anexos Dados Contrato Origem . Ao selecionar este menu, será exibida a tela de Anexos com os dados do contrato de origem selecionado.
- Menu, etapa ou parametro citado: O menu só será exibido quando o tipo de movimento estiver com o parâmetro Etapa 52 - Contratos , campo Integra com Contrato marcado.

#### [089] Dados Contrato Origem
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Dados+Contrato+Origem](https://tdn.totvs.com/display/public/LRM/Dados+Contrato+Origem)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A visualização do anexo do contrato 2.0 é realizada pelo tipo de movimento acessando o menu Anexos / Dados Contrato Origem . Ao selecionar este menu, será exibida a tela de Anexos com os dados do contrato origem selecionado.
- Evidencia inicial: Importante
- Evidencia inicial: O menu só será exibido quando o tipo de movimento estiver com o parâmetro Etapa 52 - Contratos , campo Integra com Contrato marcado. Para tal, acesse a aba Ambiente = Parâmetros = Gestão de Estoque, Compras e Faturamento , clique em Avançar , selecione o tipo de movimento desejado, vá para a Etapa 52 - Contratos e marque a opção Integra com Contrato.
- Menu, etapa ou parametro citado: A visualização do anexo do contrato 2.0 é realizada pelo tipo de movimento acessando o menu Anexos / Dados Contrato Origem . Ao selecionar este menu, será exibida a tela de Anexos com os dados do contrato origem selecionado.
- Menu, etapa ou parametro citado: O menu só será exibido quando o tipo de movimento estiver com o parâmetro Etapa 52 - Contratos , campo Integra com Contrato marcado. Para tal, acesse a aba Ambiente = Parâmetros = Gestão de Estoque, Compras e Faturamento , clique em Avançar , selecione o tipo de movimento desejado, vá para a Etapa 52 - Contratos e marque a opção Integra com Contrato.

#### [090] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Medição do Item
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 18:02
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004564508695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Medi%C3%A7%C3%A3o-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004564508695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Medi%C3%A7%C3%A3o-do-Item)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00 :03:00 min
- Evidencia inicial: Dúvida Como cancelar uma medição no item do Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: O processo de Cancelar Medição possibilita o cancelamento da última medição realizada nos itens de contratos selecionados.

#### [091] 03. Contratos 2.0 | Processos | Medição
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=938330369](https://tdn.totvs.com/pages/releaseview.action?pageId=938330369)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: O processo de geração da medição de um item de contrato tem como objetivo realizar uma nova medição de valor ou quantidade, conforme o tipo de faturamento definido na identificação do item. Dessa forma, caso um item tenha seu tipo de faturamento como medição de quantidade, por exemplo, será realizada uma medição de quantidade, e vice-versa.
- Menu, etapa ou parametro citado: Parâmetros do Processo
- Menu, etapa ou parametro citado: Parâmetros comuns a todos os tipos de medição:
- Menu, etapa ou parametro citado: O processo de Cancelar Medição possibilita o cancelamento da última medição realizada nos itens de contratos selecionados.

#### [092] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Medição do Item
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 18:01
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004243416343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Medi%C3%A7%C3%A3o-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29004243416343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Medi%C3%A7%C3%A3o-do-Item)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como gerar medição no item do Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Parâmetros comuns a todos os tipos de medição

#### [093] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Aditivo do Item
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 18:01
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003661265303-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Aditivo-do-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003661265303-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Aditivo-do-Item)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como cancelar o aditivo gerado no Contrato 2.0?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: - Histórico de Processos → O processo de cancelamento será gravado no histórico de processos.

#### [094] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Aditivo no Item
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 18:00
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003190528663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Aditivo-no-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003190528663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Aditivo-no-Item)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como gerar aditivo no item do Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Acesse o módulo Serviços Globais Segurança Perfis Sistema: Gestão de Estoque, Compras e Faturamento Selecione o Perfil Acesso a Menus Contratos Gestão de Contratos Atribuir permissão a Gerar Aditivo no Item.
- Menu, etapa ou parametro citado: Parâmetros comuns a todos os tipos de Aditivo:

#### [095] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Reajuste Preço
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:59
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29002054277143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Reajuste-Pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29002054277143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Reajuste-Pre%C3%A7o)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como cancelar o reajuste de preço no Contrato 2.0?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Esse processo possibilita o cancelamento do último reajuste de preço realizado nos contratos selecionados.

#### [096] 03. Contratos 2.0 | Processos | Reajuste Preço
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=937710134](https://tdn.totvs.com/pages/releaseview.action?pageId=937710134)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: O processo de Reajuste de Preço do contrato tem como objetivo atualizar o saldo pendente de cada item recalculando o valor das parcelas com base no indice indicado no item.
- Menu, etapa ou parametro citado: - Permite selecionar múltiplos contratos para reajuste simultâneo.
- Menu, etapa ou parametro citado: - Apenas contratos em andamento e com data final posterior à data do reajuste podem ser reajustados.
- Menu, etapa ou parametro citado: O Reajuste Preço só atende contratos administrativos, conforme a Lei nº 14.133/2021 (Nova Lei de Licitações) estabelece que o reajuste deve ser aplicado após 12 meses da data limite para apresentação da proposta ou do orçamento, e utiliza índices previamente definidos no edital e contrato. Além disso, o reajuste serve para recompor perdas inflacionárias, e não para reduzir valores de contrato. Então não será realizado ajuste quando o índice for negativo.

#### [097] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Reajustar Preço
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:58
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28958791831959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Reajustar-Pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28958791831959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Reajustar-Pre%C3%A7o)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como reajustar preços no contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: ⚠️ O Reajuste Preço só atende contratos administrativos , conforme a Lei nº 14.133/2021 (Nova Lei de Licitações) estabelece que o reajuste deve ser aplicado após 12 meses da data limite para apresentação da proposta ou do orçamento, e utiliza índices previamente definidos no edital e contrato.
- Menu, etapa ou parametro citado: - C álculo do reajuste: A fórmula para o cálculo geralmente envolve o valor contratual, o índice inicial (do período da proposta) e o índice atual (do período do reajuste).

#### [098] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Copiar Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 16:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28950161753879-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Copiar-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28950161753879-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Copiar-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como realizar a copia de contratos no Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Dúvida Como realizar a copia de contratos no Contrato 2.0?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Acesse o módulo Serviços Globais Segurança Perfis Sistema: Gestão de Estoque, Compras e Faturamento Selecione o Perfil Acesso a Menus Contratos Gestão de Contratos Atribuir permissão a Copia de contrato entre coligadas:

#### [099] 03. Contratos 2.0 | Processos | Copiar Contratos
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Copiar+Contratos](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Copiar+Contratos)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Este processo possibilita a cópia de um ou mais contratos simultaneamente para sua própria coligada/filial ou para outras coligadas/filiais, permitindo a cópia para mais de uma coligada por vez. Ao realizar a cópia, um novo contrato é gerado, herdando do contrato original os dados cadastrais relacionados (contrato, item do contrato e rateio por centro de custo).
- Evidencia inicial: Apesar de seu nome, o processo define o destino por coligada e filial. Isso significa que é possível copiar um contrato da coligada: 1, filial: 1 para a coligada: 1, filial: 1, 2, 3, etc., de uma única vez, assim como para qualquer outra coligada ou filial ativa.
- Evidencia inicial: O novo contrato é uma cópia fiel do original, com as seguintes diferenças:
- Menu, etapa ou parametro citado: Este processo possibilita a cópia de um ou mais contratos simultaneamente para sua própria coligada/filial ou para outras coligadas/filiais, permitindo a cópia para mais de uma coligada por vez. Ao realizar a cópia, um novo contrato é gerado, herdando do contrato original os dados cadastrais relacionados (contrato, item do contrato e rateio por centro de custo).
- Menu, etapa ou parametro citado: O perfil do usuário também deve ter permissão para Incluir contratos.
- Menu, etapa ou parametro citado: Esse alerta é especialmente importante quando a cópia é feita para coligadas diferentes, no caso de copiar para a mesma coligada apenas os cadastros com controle por filial precisam ser validados.

#### [100] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Alterar Status
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:57
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28949130017687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Alterar-Status](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28949130017687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Alterar-Status)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como alterar status no Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: O contrato pode ter seu status definido no momento da criação, no entanto, após iniciar as operações e processos com o contrato a alteração de status somente ser feita através do processo Alterar Status Contrato.
- Menu, etapa ou parametro citado: Para a execução deste processo é necessário, selecionar os contratos desejados e definir o parâmetro abaixo:

#### [101] 03. Contratos 2.0 | Processos | Alterar Status Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Alterar+Status+Contrato](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Alterar+Status+Contrato)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Durante a criação do contrato, é possível definir seu status inicial. No entanto, após o início das operações e processos relacionados, qualquer modificação de status só poderá ser feita através do processo "Alterar Status Contrato" .
- Evidencia inicial: Esse processo permite alterar o status de um ou mais contratos simultaneamente.
- Evidencia inicial: Como executar a alteração:
- Menu, etapa ou parametro citado: Durante a criação do contrato, é possível definir seu status inicial. No entanto, após o início das operações e processos relacionados, qualquer modificação de status só poderá ser feita através do processo "Alterar Status Contrato" .
- Menu, etapa ou parametro citado: Esse processo permite alterar o status de um ou mais contratos simultaneamente.
- Menu, etapa ou parametro citado: 1. Selecione os contratos desejados;

#### [102] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Previsão Financeira
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:56
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28948717153047-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Previs%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28948717153047-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Previs%C3%A3o-Financeira)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como cancelar a previsão financeira no Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Esse processo desfaz a Previsão Financeira, excluindo os lançamentos de previsão financeira de um ou mais contratos.
- Menu, etapa ou parametro citado: Para a execução deste processo é necessário selecionar os contratos desejados.

#### [103] 03. Contratos 2.0 | Processos | Previsão Financeira
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=937708534](https://tdn.totvs.com/pages/releaseview.action?pageId=937708534)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: Este processo possibilita a criação de lançamentos de previsão financeira para um ou mais contratos.
- Menu, etapa ou parametro citado: Este processo possibilita a criação de lançamentos de previsão financeira para um ou mais contratos.
- Menu, etapa ou parametro citado: 1. Selecionar os contratos desejados.
- Menu, etapa ou parametro citado: Após o preenchimento do parâmetro e a execução do processo, os lançamentos financeiros serão gerados com base nas parcelas dos itens dos contratos selecionados.

#### [104] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Previsão Financeira
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:55
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28948399099287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Previs%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28948399099287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Previs%C3%A3o-Financeira)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como gerar previsão financeira no Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Esse processo possibilita criar lançamentos de previsão financeira para um ou mais contratos.
- Menu, etapa ou parametro citado: Para a execução deste processo é necessário, selecionar os contratos desejados e definir o parâmetro abaixo:

#### [105] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Cancelar Faturamento
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:33
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28947616324247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28947616324247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Faturamento)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como cancelar o faturamento de um Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Esse processo possibilita o cancelamento do faturamento das parcelas de um ou mais contratos selecionados, nos modelos:
- Menu, etapa ou parametro citado: Para a execução deste processo é necessário a definição dos parâmetros abaixo.

#### [106] 03. Contratos 2.0 | Processos | Faturamento
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Faturamento](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Faturamento)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: Processo que possibilita o faturamento das parcelas de um ou mais contratos periódicos, de medição que podem ser por valor ou por quantidade e de arrendamento mercantil.
- Menu, etapa ou parametro citado: Processo que possibilita o faturamento das parcelas de um ou mais contratos periódicos, de medição que podem ser por valor ou por quantidade e de arrendamento mercantil.
- Menu, etapa ou parametro citado: Para a execução deste processo é necessário a definição dos parâmetros abaixo.
- Menu, etapa ou parametro citado: - Local de Estoque: corresponde ao campo Local de Estoque informado na aba Faturamento do item do contrato.

#### [107] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Faturar
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 1 de agosto de 2025 às 17:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28946751476247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Faturar](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28946751476247-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Faturar)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como realizar o faturamento do Contrato 2.0?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.
- Menu, etapa ou parametro citado: Esse processo possibilita o faturamento das parcelas de um ou mais contratos periódicos, de medição que podem ser por valor ou por quantidade e de arrendamento mercantil.
- Menu, etapa ou parametro citado: Esse processo possibilita o faturamento das parcelas de um ou mais contratos Periódicos ou contratos de Medição que podem ser por Valor ou por Quantidade.

#### [108] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Erro: O valor total das medições do item é maior que o seu valor total
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 10:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24295314663831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Erro-O-valor-total-das-medi%C3%A7%C3%B5es-do-item-%C3%A9-maior-que-o-seu-valor-total](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24295314663831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Erro-O-valor-total-das-medi%C3%A7%C3%B5es-do-item-%C3%A9-maior-que-o-seu-valor-total)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência Ao tentar incluir uma nova Medição no Item do Contrato é apresentado o erro: O valor total das medições do item é maior que o seu valor total.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [109] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Previsão de Faturamento de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 11:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24007188080663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Previs%C3%A3o-de-Faturamento-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24007188080663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Previs%C3%A3o-de-Faturamento-de-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Qual a finalidade do menu Previsão de Faturamento de Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Explicação O relatório de Previsão de Faturamento de Contratos, tem por finalidade, exibir as previsões de faturamento de contratos do tipo Periódico previamente cadastrados de um determinado período.
- Menu, etapa ou parametro citado: Esta funcionalidade está disponível no Menu Contratos Previsão de Faturamento de Contrato.

#### [110] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipo de Faturamento no Item do Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 12:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24005170501783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Faturamento-no-Item-do-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24005170501783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Faturamento-no-Item-do-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Qual a finalidade das opções apresentadas no Tipo de Faturamento do item do Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: - Diferente do faturamento Periódico, o faturamento das Medições NÃO é feito através do Processos Faturamento Contrato. Seu correto faturamento é executado ao selecionar no contrato a opção Anexos Visualizar Medições do Contrato Processos Faturamento Medição.

#### [111] Itens de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Itens+de+Contrato](https://tdn.totvs.com/display/public/LRM/Itens+de+Contrato)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Os itens de contrato são a parte principal do contrato.
- Evidencia inicial: Neles é que são discriminados os produtos e/ou serviços inerentes ao contrato.
- Evidencia inicial: Os itens de um contrato podem ser apenas de aquisição, apenas de venda ou permuta, onde no mesmo contrato se encontram itens de compra e de venda.
- Menu, etapa ou parametro citado: E ainda, caso o parâmetro "Vencimentos em dias fixos" em (Opções / Parâmetros / Contratos / Pasta Faturamento) estiver habilitado, na lista de opções de intervalo, só serão apresentadas as condições de Pagamento cadastradas com "Prazo" igual a 30 dias ou múltiplos de 30.
- Menu, etapa ou parametro citado: Faturar mês vencido : Quando em Opções/Parâmetros/Tipo de Movimentos/Contrato, o tipo de movimento a ser gerado para este movimento estiver com o campo "Integração Contrato" selecionado com Relacionar com item de contrato e o campo "faturar mês vencido" estiver marcado na pasta identificação do item do contrato, o faturamento deste item irá corresponder ao mês anterior, exemplo, de itens periódicos: Aluguel, Serviço de Limpeza, Financiamentos de Veículos.
- Menu, etapa ou parametro citado: Ao executar o processo de Proporcionalização de itens é gerado um novo item 'Não Periódico', pois será faturado apenas uma vez, no valor correspondente ao número de dias utilizados no período, dado pela fórmula:

#### [112] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tabelas de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 12:52
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23447060782999-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tabelas-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23447060782999-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tabelas-de-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: O que significa cada Tabela de Contrato?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: https://centraldeatendimento.totvs.com/hc/pt-br/articles/23396787043607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Contratos
- Menu, etapa ou parametro citado: https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato

#### [113] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Produtos por Filial no Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 14:50
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401463938327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-por-Filial-no-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401463938327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-por-Filial-no-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como Criar Tipos de Produtos por Filial no Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para cadastrar, acesse o Menu Contratos Tabelas de Contratos Tipos de Produtos por Filial:

#### [114] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Produtos para Faturamento no Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 15:00
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401211365783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-para-Faturamento-no-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23401211365783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Produtos-para-Faturamento-no-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como Criar Tipos de Produtos para Faturamento no Contrato?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para cadastrar, acesse o Menu Contratos Tabelas de Contratos Tipos de Produtos para Faturamento:

#### [115] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Motivos de Cancelamento no Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 15:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23400765765143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Motivos-de-Cancelamento-no-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23400765765143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Motivos-de-Cancelamento-no-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como Criar Motivos de Cancelamento para o Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Por esta opção serão cadastrados os motivos de cancelamento de contratos, ou seja, sempre que um contrato for cancelado deverá ser informado o motivo de seu cancelamento.
- Menu, etapa ou parametro citado: Para cadastrar, acesse o Menu Contratos Tabelas de Contratos Motivos de Cancelamento:

#### [116] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Status de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 14:59
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23397128231191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Status-de-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como Criar Status de Contrato?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Por esta opção são cadastrados os status do contrato, utilizados pela empresa durante a inclusão / manutenção de contratos.

#### [117] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipos de Contratos
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 19 de fevereiro de 2025 às 14:55
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23396787043607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Contratos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23396787043607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipos-de-Contratos)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como Criar Tipos de Contratos?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como Criar Tipos de Contratos?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução Por esta opção são cadastrados os tipos de contrato que serão utilizados na inclusão de novos contratos.

#### [118] Tipos de Contratos
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Tipos+de+Contratos](https://tdn.totvs.com/display/public/LRM/Tipos+de+Contratos)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Por esta opção são cadastrados os tipos de contrato que serão utilizados na inclusão de novos contratos.
- Evidencia inicial: Como há uma variedade de tipos de contratos que uma empresa pode utilizar, foi disponibilizado no sistema a possibilidade de se cadastrar estas variações, a fim de facilitar a identificação de um contrato nos controles que a empresa utilizar.
- Evidencia inicial: Exemplos de Tipos de Contrato: Locação de Imóveis, Compra e Venda de Imóveis, Prestação de Serviços, Representação, Contrato de Compra e Venda de produtos etc.
- Menu, etapa ou parametro citado: Por esta opção são cadastrados os tipos de contrato que serão utilizados na inclusão de novos contratos.
- Menu, etapa ou parametro citado: Como há uma variedade de tipos de contratos que uma empresa pode utilizar, foi disponibilizado no sistema a possibilidade de se cadastrar estas variações, a fim de facilitar a identificação de um contrato nos controles que a empresa utilizar.
- Menu, etapa ou parametro citado: Na tela de cadastro dos Tipos de Contratos é possível informar os seguintes campos:

#### [119] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Cancelar/Descancelar Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 17:37
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23396234642711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Cancelar-Descancelar-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23396234642711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Cancelar-Descancelar-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como cancelar ou desfazer o cancelamento de um contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O cancelamento de um contrato é realizado selecionando o contrato Processos Cancelar Contrato.
- Menu, etapa ou parametro citado: 2. Ao realizar este tipo de operação o status e o motivo de cancelamento serão únicos para todos os contratos selecionados para o cancelamento.

#### [120] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Como criar Campo Complementar para o Item do Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 15:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23392554294167-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-criar-Campo-Complementar-para-o-Item-do-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23392554294167-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-criar-Campo-Complementar-para-o-Item-do-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como criar Campo Complementar para o Item do Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Menu Cadastros Campos Complementares Itens de Contratos Ícone Incluir.
- Menu, etapa ou parametro citado: Caso a aba de Campos Complementares não seja visualizada, será necessário habilitar nos parâmetros.

#### [121] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Como criar Campo Complementar para o Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 15:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23392052815639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-criar-Campo-Complementar-para-o-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23392052815639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-criar-Campo-Complementar-para-o-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como criar Campo Complementar para o Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Menu Cadastros Campos Complementares Contratos Ícone Incluir.
- Menu, etapa ou parametro citado: Caso a aba de Campos Complementares não seja visualizada, será necessário habilitar nos parâmetros.

#### [122] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Como habilitar Campo Complementar no Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 15:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23391639043479-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-habilitar-Campo-Complementar-no-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23391639043479-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-habilitar-Campo-Complementar-no-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como parametrizar para que o Campo Complementar fique visível no Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Contratos Campos Opcionais 1/2 e habilite a flag Editar Campos Complementares :
- Menu, etapa ou parametro citado: - https://centraldeatendimento.totvs.com/hc/pt-br/articles/23392052815639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Como-criar-Campo-Complementar-para-o-Contrato

#### [123] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Cópia de Contratos Entre Coligadas
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 17:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23376496917527-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-C%C3%B3pia-de-Contratos-Entre-Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23376496917527-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-C%C3%B3pia-de-Contratos-Entre-Coligadas)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como habilitar o processo Cópia de Contratos Entre Coligadas no módulo Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2306 e superiores.
- Menu, etapa ou parametro citado: Dúvida Como habilitar o processo Cópia de Contratos Entre Coligadas no módulo Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2306 e superiores.
- Menu, etapa ou parametro citado: Módulo Serviços Globais Segurança Perfis Sistema: Gestão de Estoque, Compras e Faturamento Selecione o Perfil associado ao usuário Acesso a Menus e habilite a permissão Cópia de contrato entre coligadas:

#### [124] Cópia de contrato entre coligadas
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=744466761](https://tdn.totvs.com/pages/releaseview.action?pageId=744466761)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Importante
- Evidencia inicial: Recurso disponível a partir da release 12.1.2306
- Evidencia inicial: CONTEÚDO
- Menu, etapa ou parametro citado: Após a liberação do processo, selecione os contratos que deseja copiar e acesse o processo. O processo de " Cópia de contrato entre coligadas " é acessível no menu de processos da visão dos contratos.
- Menu, etapa ou parametro citado: Os contratos selecionados para cópia são exibidos para verificação
- Menu, etapa ou parametro citado: Após validar os contratos que se deseja copiar deve-se escolher para quais "coligadas|filiais" a cópia será feita, marque os desejados e clique em OK

#### [125] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Faturamento de Itens Periódicos Sem Vigência Definida
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 17:33
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408917896599-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Faturamento-de-Itens-Peri%C3%B3dicos-Sem-Vig%C3%AAncia-Definida](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408917896599-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Faturamento-de-Itens-Peri%C3%B3dicos-Sem-Vig%C3%AAncia-Definida)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00 :04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: É possível cadastrar itens de contrato sem data fim?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [126] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Gerar Contrato a partir do Pedido de Compras
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 15:30
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360048551213-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Contrato-a-partir-do-Pedido-de-Compras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360048551213-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Contrato-a-partir-do-Pedido-de-Compras)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 03:00 min
- Evidencia inicial: Dúvida Como gerar contrato a partir de um Pedido de compras?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como gerar contrato a partir de um Pedido de compras?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Caminho: Módulo Serviços Globais Segurança Usuários Sistema: Gestão de Estoque, Compras e Faturamento Selecione o Usuário Anexo Permissão por Tipo de Movimento Acesse o movimento habilite a flag Gerar Contrato.

#### [127] Gerar Contrato a partir do Pedido de Compras
- Secao de indice: Gestão_De_Contratos
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938166](https://tdn.totvs.com/pages/releaseview.action?pageId=423938166)
- Classificacao inferida: compras, contratos
- Gatilhos de busca observados: contrato, compras
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Esse processo gera contrato a partir de um pedido de compra criado através da cotação ou manualmente.
- Evidencia inicial: Principais Campos e Parâmetros
- Evidencia inicial: Para utilizar o recurso de Gerar Contrato é necessário habilitar a permissão Gerar Contrato para o tipo de movimento que irá executar o processo no anexo Permissão por Tipo de Movimento do cadastro de Usuários no Módulo de Serviços Globais.
- Menu, etapa ou parametro citado: Principais Campos e Parâmetros
- Menu, etapa ou parametro citado: 1. O movimento deve ser do tipo 1.1.XX e estar parametrizado como Pedido de Compra na Etapa 49 - Compra/Venda – Outros Dados Tipo de movimento de Compra. 2) O tipo de movimento não poderá afetar estoque (nenhum saldo) na Etapa 39 - Estoque - Estoque 1/3
- Menu, etapa ou parametro citado: 3. O parâmetro Gerar Contrato deverá ser marcado, Etapa 51 – Contratos e marcar a opção Gera Contrato. Esse parâmetro será responsável por habilitar no menu de Processos da visão do movimento o assistente de Geração de Contrato(s).

#### [128] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Previsão Financeira de Contrato por Medição
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 15:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039856974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Previs%C3%A3o-Financeira-de-Contrato-por-Medi%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039856974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Previs%C3%A3o-Financeira-de-Contrato-por-Medi%C3%A7%C3%A3o)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como gerar Previsão Financeira de Contrato de Medição?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acessar visão do contrato e clicar no menu Processos Inclusão Previsão Financeira:
- Menu, etapa ou parametro citado: Ao editar o item de contrato, aba Identificação o campo Status Previsão indicará que o item gerou previsão e poderá consultar os respectivos lançamentos, acessando a aba Informações Adicionais | Lançamentos Financeiros:

#### [129] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Nenhuma medição a faturar
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 17:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036455433-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Nenhuma-medi%C3%A7%C3%A3o-a-faturar](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036455433-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Nenhuma-medi%C3%A7%C3%A3o-a-faturar)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Ao faturar um contrato do tipo Medição é exibido o erro: Nenhuma medição a faturar.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [130] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Condição de Pagamento x Prazo
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 16:51
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024345772-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Condi%C3%A7%C3%A3o-de-Pagamento-x-Prazo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024345772-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Condi%C3%A7%C3%A3o-de-Pagamento-x-Prazo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Qual a diferença entre o campo Condição do Pagamento a Prazo na aba Cabeçalho do Item de Contrato e o campo Código da Condição de Pagamento aba Condições Gerais do Item de Contrato?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 2. Se no menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Contratos Definições Fat. de Contrato 2/3 estiver habilitado a flag Vencimento em dias fixos , somente condições de faturamento múltiplas de 30 dias poderão ser visualizadas nesse campo. Se esta opção estiver desmarcada, serão visualizadas, além das condições de pagamentos múltiplas de 30, as demais condições, desde que tenham as seguintes características: % do valor total igual a 100, número de vezes igual a 1, prazo para a parcela diferente de 0 (zero) e intervalo igual a 0 (zero).

#### [131] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Gerar Financeiro de acordo com a data de faturamento do contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 16:57
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021391472-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Financeiro-de-acordo-com-a-data-de-faturamento-do-contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021391472-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Financeiro-de-acordo-com-a-data-de-faturamento-do-contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como gerar o lançamento financeiro de acordo com a data de faturamento do contrato?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Menu Ambiente | Parâmetros | TOTVS Gestão de Estoque, Compras e Faturamento | Contratos | Faturamento | Avança:

#### [132] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Ícones de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 16:47
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004374991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-%C3%8Dcones-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004374991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-%C3%8Dcones-de-Contrato)
- Classificacao inferida: compras, estoque, contratos
- Gatilhos de busca observados: estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Qual o significado dos ícones apresentados dentro do cadastro de contrato do TOTVS Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Qual o significado dos ícones apresentados dentro do cadastro de contrato do TOTVS Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [133] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipo de Movimento Não Apresentado no Item de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 16:45
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345267-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Movimento-N%C3%A3o-Apresentado-no-Item-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345267-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Movimento-N%C3%A3o-Apresentado-no-Item-de-Contrato)
- Classificacao inferida: movimento, compras, estoque, contratos
- Gatilhos de busca observados: tipo de movimento, movimento, estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar informar um Tipo de Movimento na aba Condições Gerais do Item, no Parâmetros do Contrato ou no Faturamento por Lote, este não é apresentado.
- Menu, etapa ou parametro citado: Ao tentar informar um Tipo de Movimento na aba Condições Gerais do Item, no Parâmetros do Contrato ou no Faturamento por Lote, este não é apresentado.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [134] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Nenhum Movimento Gerado no Faturamento de Contrato
- Secao de indice: Gestão_De_Contratos
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
- Data: 20 de fevereiro de 2025 às 16:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345227-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Nenhum-Movimento-Gerado-no-Faturamento-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345227-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Nenhum-Movimento-Gerado-no-Faturamento-de-Contrato)
- Classificacao inferida: movimento, compras, estoque, contratos
- Gatilhos de busca observados: movimento, estoque, contrato, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar realizar o processo de faturamento de contrato, nenhum movimento é gerado.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - Todas as versões.
- Menu, etapa ou parametro citado: 11. O movimento está parametrizado para aceitar itens apenas do tipo Produto ou Serviço . Exemplo: o item do contrato é um Serviço mas nos parâmetros do tipo de movimento, etapa Item - Identificação 1/2 está parametrizado para o tipo Produto. Deve-se alterar para o tipo Ambos ou utilizar outro movimento que aceite o mesmo tipo .

### Fonte: Gestão_De_Estoque.md (36 artigos capturados)

#### [135] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Processo de Consignação - Empresa Remetente
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:52
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003177531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Processo-de-Consigna%C3%A7%C3%A3o-Empresa-Remetente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003177531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Processo-de-Consigna%C3%A7%C3%A3o-Empresa-Remetente)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar o sistema para o processo de consignação estando a empresa na posição de remetente da mercadoria?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [136] Parametrização do Processo de Consignação – Remetente
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=89621574](https://tdn.totvs.com/pages/releaseview.action?pageId=89621574)
- Classificacao inferida: parametrizacao, estoque
- Gatilhos de busca observados: parametrizacao
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto
- Evidencia inicial: :
- Evidencia inicial: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: Estoque DE/COM Terceiros
- Menu, etapa ou parametro citado: Estoque com Terceiros – Parametrização do Processo de Consignação – Remetente

#### [137] Demonstração Processo de Consignação – Remetente
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=89621662](https://tdn.totvs.com/pages/releaseview.action?pageId=89621662)
- Classificacao inferida: estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto
- Evidencia inicial: :
- Evidencia inicial: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: Estoque DE/COM Terceiros
- Menu, etapa ou parametro citado: Estoque com Terceiros – Demonstração Processo de Consignação – Remetente

#### [138] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Inventário de Estoque
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:51
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/13658495020311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Invent%C3%A1rio-de-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/13658495020311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Invent%C3%A1rio-de-Estoque)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Quais as parametrizações para Inventário de Estoque?
- Menu, etapa ou parametro citado: Quais as parametrizações para Inventário de Estoque?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Versão: 12.1.2205 ou superior.
- Menu, etapa ou parametro citado: O Inventário permite que seja informado no sistema o resultado da conferência física de mercadorias em estoque. Desta forma o processo de inventário garante os estoques da empresa com as quantidades corretas de seus produtos.

#### [139] Inventário de Estoque
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423937977](https://tdn.totvs.com/pages/releaseview.action?pageId=423937977)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: O Inventário permite que seja informado no sistema o resultado da conferência física de mercadorias em estoque. Desta forma o processo de inventário garante os estoques da empresa com as quantidades corretas de seus produtos.
- Evidencia inicial: -
- Evidencia inicial: -
- Menu, etapa ou parametro citado: O Inventário permite que seja informado no sistema o resultado da conferência física de mercadorias em estoque. Desta forma o processo de inventário garante os estoques da empresa com as quantidades corretas de seus produtos.
- Menu, etapa ou parametro citado: - Quando MARCADO, a diferença considerada no Inventário será o Valor Informado na Contagem subtraído do Saldo do Produto por local de estoque (TPRDLOC). O saldo pode ser o Saldo 2 e os Saldos de 5 a 10. Este saldo também está disponível através da Consulta de Saldos e Custos do Produto.
- Menu, etapa ou parametro citado: - Quando DESMARCADO, a diferença considerada no Inventário será a soma dos campos SALDOANTERIOR + QTDECOMSINAL (quantidade movimentada) da tabela TRELSLD (Ficha Física Financeira). Será buscada a última movimentação do produto em questão para a filial e local de estoque escolhidos cuja data de movimentação seja igual ou menor que a data base do inventário. O saldo pode ser o Saldo 2 e os Saldos de 5 a 10.

#### [140] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Instalação do APP Minha Contagem de Estoque
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:50
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/9161997069975-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Instala%C3%A7%C3%A3o-do-APP-Minha-Contagem-de-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/9161997069975-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Instala%C3%A7%C3%A3o-do-APP-Minha-Contagem-de-Estoque)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como realizar a instalação do aplicativo Minha Contagem de Estoque?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como realizar a instalação do aplicativo Minha Contagem de Estoque?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução O App "Minha Contagem de Estoque" tem como objetivo realizar a contagem do estoque, a partir da leitura por código de barras do endereçamento (locação) e na sequência o código de barras do produto, com isso será registrado a contagem física do estoque, de forma automática e sem interferências, trazendo mobilidade para etapa de contagem.

#### [141] Minha Contagem de Estoque - App
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Minha+Contagem+de+Estoque+-+App](https://tdn.totvs.com/display/public/LRM/Minha+Contagem+de+Estoque+-+App)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: O App "Minha Contagem de Estoque" tem como objetivo realizar a contagem do estoque, a partir da leitura por código de barras do endereçamento (locação) e na sequência o código de barras do produto, com isso será registrado a contagem física do estoque, de forma automática e sem interferências, trazendo mobilidade para etapa de contagem
- Evidencia inicial: Fique ligado!
- Evidencia inicial: Está disponível na Apple Store a versão de produção do app, disponível para todos os clientes.
- Menu, etapa ou parametro citado: O App "Minha Contagem de Estoque" tem como objetivo realizar a contagem do estoque, a partir da leitura por código de barras do endereçamento (locação) e na sequência o código de barras do produto, com isso será registrado a contagem física do estoque, de forma automática e sem interferências, trazendo mobilidade para etapa de contagem
- Menu, etapa ou parametro citado: Clique https://apps.apple.com/app/minha-contagem-de-estoque/id1639410691 para baixar o aplicativo ou leia o QR Code abaixo:
- Menu, etapa ou parametro citado: Todas as informações abaixo são relacionadas ao app "Minha Contagem de Estoque" relacionado ao sistema de Gestão de Estoque, Compras e Faturamento do TOTVS BackOffice (Linha RM)

#### [142] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - "Produto XXXXXX: Estoque COM terceiros com saldo maior que o saldo físico no local".
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:49
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7255420379287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Produto-XXXXXX-Estoque-COM-terceiros-com-saldo-maior-que-o-saldo-f%C3%ADsico-no-local](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7255420379287-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Produto-XXXXXX-Estoque-COM-terceiros-com-saldo-maior-que-o-saldo-f%C3%ADsico-no-local)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao incluir o movimento é apresentado a mensagem: Produto XXXXXX: Estoque COM terceiros com saldo maior que o saldo físico no local.
- Menu, etapa ou parametro citado: Ao incluir o movimento é apresentado a mensagem: Produto XXXXXX: Estoque COM terceiros com saldo maior que o saldo físico no local.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1. Solução

#### [143] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como fechar estoque?
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:49
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/6659756946711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-fechar-estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6659756946711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-fechar-estoque)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Quais cuidados devo ter ao fechar estoque de uma coligada?
- Menu, etapa ou parametro citado: Quais cuidados devo ter ao fechar estoque de uma coligada?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

#### [144] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Regerar Saldos e Custos
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:49
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/5727366487319-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Regerar-Saldos-e-Custos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/5727366487319-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Regerar-Saldos-e-Custos)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, regerar saldos e custos
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como realizar o processo de Regerar Saldos e Custos?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: O processo de Regerar Saldos e Custos , tem por finalidade regravar todas movimentações inclusas em tipos de movimentos parametrizados para afetar saldo em estoque e que tenham data de movimentação superior a data de fechamento de estoque .

#### [145] INV0003 Acerto de Saldo em Estoque através de Inventário
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813647](https://tdn.totvs.com/pages/releaseview.action?pageId=4813647)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [146] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Processo de Industrialização Retorno em 1 NF Remetente
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:47
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4415450241943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Processo-de-Industrializa%C3%A7%C3%A3o-Retorno-em-1-NF-Remetente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4415450241943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Processo-de-Industrializa%C3%A7%C3%A3o-Retorno-em-1-NF-Remetente)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:06:00min
- Evidencia inicial: Dúvida Como realizar o processo de Industrialização Retorno em 1 NF Remetente pelo Módulo Gestão de Estoque, Compras e Faturamento.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como realizar o processo de Industrialização Retorno em 1 NF Remetente pelo Módulo Gestão de Estoque, Compras e Faturamento.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Neste processo, consideramos que somente a Empresa Remetente possui o ERP RM e esta não exerce atividades industriais. Esta empresa também, NAO poderá controlar estoque de serviços no sistema .

#### [147] Demonstração do processo de Industrialização (Retorno em 1 NF) - Remetente
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=74646698](https://tdn.totvs.com/pages/releaseview.action?pageId=74646698)
- Classificacao inferida: estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto
- Evidencia inicial: :
- Evidencia inicial: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: Estoque DE/COM Terceiros
- Menu, etapa ou parametro citado: Estoque do produto antes do processo:

#### [148] Demonstração do processo de Industrialização (Retorno em 1 NF) - Remetente
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=74646698](https://tdn.totvs.com/pages/releaseview.action?pageId=74646698)
- Classificacao inferida: estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto
- Evidencia inicial: :
- Evidencia inicial: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque Compras e Faturamento Versão: 11.52 e posteriores
- Menu, etapa ou parametro citado: Estoque DE/COM Terceiros
- Menu, etapa ou parametro citado: Estoque do produto antes do processo:

#### [149] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Erro de estouro aritmético ao converter numérico em tipo de dados numérico
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:47
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409006939159-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Erro-de-estouro-aritm%C3%A9tico-ao-converter-num%C3%A9rico-em-tipo-de-dados-num%C3%A9rico](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409006939159-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Erro-de-estouro-aritm%C3%A9tico-ao-converter-num%C3%A9rico-em-tipo-de-dados-num%C3%A9rico)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min
- Evidencia inicial: Dúvida Este documento tem por finalidade auxiliar na tratativa do processo de Regerar Saldos e Custos , onde a mensagem apresentada é: Não foram regerados os dados do produto XX.XX – Mensagem original: Erro de estouro aritmético ao converter numérico em tipo de dados numérico.
- Evidencia inicial: A mbiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Alterar/Corrigir a parametrização do tipo de movimento que está ou não está afetando o estoque indevidamente.
- Menu, etapa ou parametro citado: Ex.: Movimento 2.2.02 está afetando o estoque, porém não deveria afetar. Logo, basta acessar os parâmetros deste tipo de movimento e tirar a parametrização que está afetando o estoque;

#### [150] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Flag Forçar Regeração Total não é exibida ao Regerar Saldos e Custos
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408766503959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Flag-For%C3%A7ar-Regera%C3%A7%C3%A3o-Total-n%C3%A3o-%C3%A9-exibida-ao-Regerar-Saldos-e-Custos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408766503959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Flag-For%C3%A7ar-Regera%C3%A7%C3%A3o-Total-n%C3%A3o-%C3%A9-exibida-ao-Regerar-Saldos-e-Custos)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, regerar saldos e custos
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao Regerar Saldos e Custos a flag Forçar Regeração Total não é exibida:
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A flag Forçar Regeração Total é exibida apenas nas coligadas que realizam o controle de estoque de forma geral. Coligadas que controlam o estoque por saldo não apresentaram essa opção, e sim a opção de Regerar Todos os Saldos que equivale a Forçar Regeração Total .

#### [151] Processo Produtivo Simples
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples](https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Processo Produtivo Simples
- Evidencia inicial: Avaliação
- Evidencia inicial: - Introdução
- Menu, etapa ou parametro citado: A criação do Processo Produtivo Simples, no RM Nucleus foi criado para ser um facilitador do controle de produção simples, sem a necessidade de utilizar o RM Factor. Para a utilização deste processo é necessário alguns cadastros e procedimentos como a criação da Estrutura, Atividade, Componentes, movimentos de Ordem de Produção, Baixa de Matéria Prima e a Entrada do Produto Acabado.
- Menu, etapa ou parametro citado: - Etapa – Compra/Vendas – Características: Caso deseje faturar este tipo de movimento para o de Baixa de Matéria Prima e depois o faturamento o mesmo pedido para um de faturamento (Nota Fiscal de Venda), recomenda-se que seja definido no parâmetro Baixar pedido de compra/venda após Geração de Movimento diferente de “Baixar Sempre” e “Não Baixar”, pois assim o status do movimento de Pedido será baixado apenas no segundo faturamento, ou seja, faturamento da nota fiscal de venda, no qual teve seus itens já baixados de estoque no primeiro faturamento.
- Menu, etapa ou parametro citado: \- Movimento de Compras: Pedido de Compras, Movimento de Compras.

#### [152] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como Importar e Gerar o Relatório de Ficha Física Financeira
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:42
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406594388119-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-Importar-e-Gerar-o-Relat%C3%B3rio-de-Ficha-F%C3%ADsica-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406594388119-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-Importar-e-Gerar-o-Relat%C3%B3rio-de-Ficha-F%C3%ADsica-Financeira)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento, ficha fisica financeira
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como importar e gerar o relatório de Ficha Física Financeira ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse o menu Gestão | RM Reports | clique em Processos | Importar Estrutura de Relatório | \ selecione a estrutura a ser importada e clique em Executar:

#### [153] Relatório de Ficha Física Financeira
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938204](https://tdn.totvs.com/pages/releaseview.action?pageId=423938204)
- Classificacao inferida: estoque
- Gatilhos de busca observados: ficha fisica financeira
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: É indispensavel a realização do processo Regerar Saldos e Custos no menu Estoque | Processos , antes de emitir a Ficha Fisica Financeira que alimenta a tabela TRELSLD.
- Evidencia inicial: Mais detalhe em https://tdn.totvs.com/x/JMtEGQ
- Evidencia inicial: Por esta opção, você emitirá o relatório de ficha física-financeira. Neste relatório você tem várias opções de filtro, selecionando os dados que serão impressos.
- Menu, etapa ou parametro citado: É indispensavel a realização do processo Regerar Saldos e Custos no menu Estoque | Processos , antes de emitir a Ficha Fisica Financeira que alimenta a tabela TRELSLD.
- Menu, etapa ou parametro citado: 1. Este filtro será aplicado aos produtos de acordo com as movimentações realizadas por Local de Estoque.
- Menu, etapa ou parametro citado: Nesta pasta, informe o intervalo de filiais e o intervalo dos locais de estoque dos quais o sistema deverá selecionar as movimentações. Ao marcar a opção de Totalizar o sistema emite o total por filial e por local.

#### [154] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Conversão de Unidades de Medida no Movimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:42
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008997122-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Convers%C3%A3o-de-Unidades-de-Medida-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008997122-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Convers%C3%A3o-de-Unidades-de-Medida-no-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Como pode ser feita a conversão entre unidades de medida ao incluir o item de movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para cálculo do custo unitário o sistema irá considerar o retorno da Fórmula do Valor Financeiro, (parâmetros do tipo de movimento, etapa Estoque - Estoque 2/3 ), dividido por (quantidade \ fator de conversão).

#### [155] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Acerto de Saldo em Estoque por Lote
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:42
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036281234-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Acerto-de-Saldo-em-Estoque-por-Lote](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036281234-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Acerto-de-Saldo-em-Estoque-por-Lote)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como parametrizar o sistema para acertar Saldo de Produto em Estoque por Lote?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como parametrizar o sistema para acertar Saldo de Produto em Estoque por Lote?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [156] Processo Produtivo Simples
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples](https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Processo Produtivo Simples
- Evidencia inicial: Avaliação
- Evidencia inicial: - Introdução
- Menu, etapa ou parametro citado: A criação do Processo Produtivo Simples, no RM Nucleus foi criado para ser um facilitador do controle de produção simples, sem a necessidade de utilizar o RM Factor. Para a utilização deste processo é necessário alguns cadastros e procedimentos como a criação da Estrutura, Atividade, Componentes, movimentos de Ordem de Produção, Baixa de Matéria Prima e a Entrada do Produto Acabado.
- Menu, etapa ou parametro citado: - Etapa – Compra/Vendas – Características: Caso deseje faturar este tipo de movimento para o de Baixa de Matéria Prima e depois o faturamento o mesmo pedido para um de faturamento (Nota Fiscal de Venda), recomenda-se que seja definido no parâmetro Baixar pedido de compra/venda após Geração de Movimento diferente de “Baixar Sempre” e “Não Baixar”, pois assim o status do movimento de Pedido será baixado apenas no segundo faturamento, ou seja, faturamento da nota fiscal de venda, no qual teve seus itens já baixados de estoque no primeiro faturamento.
- Menu, etapa ou parametro citado: \- Movimento de Compras: Pedido de Compras, Movimento de Compras.

#### [157] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Ajuste de Custo Médio
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035968873-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Ajuste-de-Custo-M%C3%A9dio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035968873-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Ajuste-de-Custo-M%C3%A9dio)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Como ajustar o Custo Médio de produtos na base?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ajuste de estoque via inventário:
- Menu, etapa ou parametro citado: É necessário acessar Ambiente | Parâmetros | Gestão de Estoque Compra e Faturamento | Gestão de estoque | Custos e parametrizar o sistema conforme o print abaixo:

#### [158] INV0003 Acerto de Saldo em Estoque através de Inventário
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813647](https://tdn.totvs.com/pages/releaseview.action?pageId=4813647)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [159] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Processo Produtivo Simples
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035154534-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Processo-Produtivo-Simples](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035154534-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Processo-Produtivo-Simples)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como utilizar o Processo Produtivo Simples?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O Processo Produtivo Simples, no RM Nucleus foi criado para ser um facilitador do controle de produção simples, sem a necessidade de utilizar o RM Factor. Para a utilização deste processo é necessário alguns cadastros e procedimentos como a criação da Estrutura, Atividade, Componentes, movimentos de Ordem de Produção, Baixa de Matéria Prima e a Entrada do Produto Acabado.

#### [160] Processo Produtivo Simples
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples](https://tdn.totvs.com/display/public/LRM/Processo+Produtivo+Simples)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Processo Produtivo Simples
- Evidencia inicial: Avaliação
- Evidencia inicial: - Introdução
- Menu, etapa ou parametro citado: A criação do Processo Produtivo Simples, no RM Nucleus foi criado para ser um facilitador do controle de produção simples, sem a necessidade de utilizar o RM Factor. Para a utilização deste processo é necessário alguns cadastros e procedimentos como a criação da Estrutura, Atividade, Componentes, movimentos de Ordem de Produção, Baixa de Matéria Prima e a Entrada do Produto Acabado.
- Menu, etapa ou parametro citado: - Etapa – Compra/Vendas – Características: Caso deseje faturar este tipo de movimento para o de Baixa de Matéria Prima e depois o faturamento o mesmo pedido para um de faturamento (Nota Fiscal de Venda), recomenda-se que seja definido no parâmetro Baixar pedido de compra/venda após Geração de Movimento diferente de “Baixar Sempre” e “Não Baixar”, pois assim o status do movimento de Pedido será baixado apenas no segundo faturamento, ou seja, faturamento da nota fiscal de venda, no qual teve seus itens já baixados de estoque no primeiro faturamento.
- Menu, etapa ou parametro citado: \- Movimento de Compras: Pedido de Compras, Movimento de Compras.

#### [161] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Saldo do Produto Negativo
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034944033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Saldo-do-Produto-Negativo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034944033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Saldo-do-Produto-Negativo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Porque mesmo com a aplicação parametrizada para barrar movimentações com saldo negativo, há produtos nesta situação?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Solução O parâmetro Saldo Menor que Zero = Barra, acessado em menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Gestão de Estoque Definições de Estoque etapa Saldos de Estoque 1/3, é responsável apenas por Barrar inclusão ou edição de movimentações que deixarão o saldo do produto em questão negativo. Entretanto, não será impedido que haja valores negativos na Ficha Física Financeira ou na Consulta de Saldos e Custos.
- Menu, etapa ou parametro citado: 1\. Alteração em parâmetro - O tipo de movimento não está parametrizado para afetar estoque e são incluídos alguns movimentos normalmente. Antes do Fechamento de Estoque, é alterado o parâmetro do tipo de movimento (etapa Estoque - Estoque 1/3) e agora o mesmo irá diminuir estoque, então ao regerar saldos e custos, todas as movimentações posteriores a data de fechamento de estoque serão regeradas e diminuirão saldo, deixando o saldo total do produto negativo.

#### [162] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RES - Produtos não são apresentados no “Processo” e na “Analise” do Ressuprimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564992-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Produtos-n%C3%A3o-s%C3%A3o-apresentados-no-Processo-e-na-Analise-do-Ressuprimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564992-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Produtos-n%C3%A3o-s%C3%A3o-apresentados-no-Processo-e-na-Analise-do-Ressuprimento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Ao realizar o "Processo" e a "Análise" do Ressuprimento, determinado produto não é exibido
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 3 - Não existe “Informações de Estoque” para o produto compatível com o Nível de Gestão parametrizado;

#### [163] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RES - Nenhum tipo de movimento é apresentado na analise de Ressuprimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:39
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564852-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Nenhum-tipo-de-movimento-%C3%A9-apresentado-na-analise-de-Ressuprimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564852-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Nenhum-tipo-de-movimento-%C3%A9-apresentado-na-analise-de-Ressuprimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Nenhum tipo de movimento é apresentado na analise de Ressuprimento
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1- O Tipo de movimento não é de solicitação de compras.

#### [164] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Como o custo médio é calculado.
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 24 de abril de 2025 às 10:16
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-o-custo-m%C3%A9dio-%C3%A9-calculado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-o-custo-m%C3%A9dio-%C3%A9-calculado)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como o sistema calcula o Custo Médio de um produto?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Através dos parâmetros de tipo de movimento (Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Selecione a classificação do tipo de movimento e avance | Duplo clique sobre o tipo de movimento), etapa Estoque - Estoque 2/2 existe o campo Fórmula do Valor Financeiro .
- Menu, etapa ou parametro citado: Esta fórmula retorna o valor exibido na coluna Tot. Entrada da Ficha Física Financeira que neste exemplo retorna o valor 100,00 a partir deste valor todos os outros valores exibidos em Ficha Física Financeira serão calculados, exceto as colunas Qtde.Entrada , Qtde.Saida e C.Méd.Saída .

#### [165] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Alterar Data de Fechamento do Estoque
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:38
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345107-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Alterar-Data-de-Fechamento-do-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345107-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Alterar-Data-de-Fechamento-do-Estoque)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao alterar a Data de Fechamento de Estoque o sistema apresenta a mensagem:
- Menu, etapa ou parametro citado: Ao alterar a Data de Fechamento de Estoque o sistema apresenta a mensagem:
- Menu, etapa ou parametro citado: Antes de alterar a data de fechamento do estoque, é necessário regerar saldos e custos dos produtos movimentados desde a última regeração.
- Menu, etapa ou parametro citado: Ambiente
- Artefato tecnico citado: SELECT DISTINCT CODIGOPRD FROM TPRD(NOLOCK) WHERE CODCOLIGADA= X
- Artefato tecnico citado: SELECT DISTINCT CODIGOPRD FROM TPRD WHERE CODCOLIGADA= X

#### [166] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Nenhum Movimento Apresentado Nos Parâmetros de Inventário
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque
- Data: 9 de abril de 2025 às 15:38
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345027-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Nenhum-Movimento-Apresentado-Nos-Par%C3%A2metros-de-Invent%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345027-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Nenhum-Movimento-Apresentado-Nos-Par%C3%A2metros-de-Invent%C3%A1rio)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar parametrizar as etapas de Inventário , nenhum Tipo de Movimento é apresentado para acerto de Entrada e/ou Saída.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [167] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Erro de conexão ao utilizar o Painel do Movimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
- Data: 9 de abril de 2025 às 15:53
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/21122007971479-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Erro-de-conex%C3%A3o-ao-utilizar-o-Painel-do-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/21122007971479-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Erro-de-conex%C3%A3o-ao-utilizar-o-Painel-do-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Na Tentativa de utilizar o Painel de Movimentos uma tela de falha de conexão é Demonstrada.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.2209
- Artefato tecnico citado: 2 - Os hosts devem ser iniciados como administrador e os Host Services também sendo algumas vezes necessárias a vinculação de um usuário do sistema operacional administrador da rede aos serviços dos hosts RM Conforme o Print abaixo:

#### [168] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Painel do Movimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
- Data: 9 de abril de 2025 às 16:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/13424877625367-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Painel-do-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/13424877625367-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Painel-do-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como acessar o Painel de Movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - 12.1.2209.171 - Superiores
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - 12.1.2209.171 - Superiores
- Menu, etapa ou parametro citado: O Painel do Movimento é acessado através do modulo Gestão de Estoque Compras e Faturamento | Utilitários | Painel do Movimento, ele pode ser aberto tanto ao clicar nesta opção do menu, como ao pressionar o conjunto de teclas "Ctrl + S".

#### [169] Painel do Movimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Painel+do+Movimento](https://tdn.totvs.com/display/public/LRM/Painel+do+Movimento)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: 01. VISÃO GERAL
- Evidencia inicial: O Painel do Movimento apresenta as informações necessárias para a tomada de decisão, em uma única interface de forma rápida, amigável e segura. É possível visualizar as movimentações de múltiplas coligadas, por filial(s), por produto(s), por fornecedor(s), grupo de produto(s), dentre outros, conforme seleção dos filtros. Para o seu desenvolvimento utilizamos tecnologias web, que estão de acordo com o novo modelo de interface do RM.
- Evidencia inicial: A funcionalidade "Painel do Movimento" conta com controle de segurança, sem ele o usuário não conseguirá visualizar as informações do Painel.
- Menu, etapa ou parametro citado: O painel de movimento é acessado através do modulo "Gestão de Estoque Compras e Faturamento" Utilitários Painel do Movimento, ele pode ser aberto tanto ao clicar nesta opção do menu, como ao pressionar o conjunto de teclas "Ctrl" + "S".
- Menu, etapa ou parametro citado: - Natureza Orçamentária Financeira - (Filtro incluido a partir da versão 12.1.2406) A exibição desse filtro será de acordo com a parametrização (04.01 - Parâmetros Gerais Tabelas Natureza Orçamentária/ Financeira) da coligada onde o usuário realizou a abertura do Painel. Para que esse filtro seja exibido ele deve estar parametrizado como Utiliza Natureza Orçamentária/Financeira. A tabela de Natureza Orçamentária Financeira é informada no item do movimento, portanto ao informar este filtro serão buscados os movimentos que possuem itens com as naturezas selecionadas.
- Menu, etapa ou parametro citado: - Tabela de Classificação - (Filtro incluido a partir da versão 12.1.2406) A exibição desses filtros, assim como a definição do nome de cada um deles será de acordo com a parametrização (04.01 - Parâmetros Gerais Tabelas Classificação) da coligada onde o usuário realizou a abertura do Painel. Para que esses filtros sejam exibidos eles devem estar parametrizados como Usar em Movimento e/ou Usar em Item de Movimento . Como essas tabelas podem ser usadas tanto no item como no movimento, ao informar este filtro, serão mostrados os movimentos que possuem essa classificação e/ou os movimentos que possuem itens com essa classificação.
- Artefato tecnico citado: A execução do Host precisa ser como administrador:
- Artefato tecnico citado: - Caso o Host seja iniciado como aplicativo (RM.Host.exe), certifique-se que ao executá-lo, tenha selecionado a opção " Executar como Administrador ".

#### [170] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Tela Branca ao utilizar o Painel do Movimento
- Secao de indice: Gestão_De_Estoque
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
- Data: 5 de fevereiro de 2024 às 12:28
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/21018257083671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tela-Branca-ao-utilizar-o-Painel-do-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/21018257083671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tela-Branca-ao-utilizar-o-Painel-do-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência n°1 Na Tentativa de utilizar o Painel de Movimentos uma tela branca é Demonstrada:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.2209
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.2209

### Fonte: Movimento.md (148 artigos capturados)

#### [171] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Natureza de rendimento default no tributo IRRF para o lançamento financeiro
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de setembro de 2023 às 17:38
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/17317866242327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-rendimento-default-no-tributo-IRRF-para-o-lan%C3%A7amento-financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/17317866242327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-rendimento-default-no-tributo-IRRF-para-o-lan%C3%A7amento-financeiro)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como levar a Natureza de Rendimento default no tributo IRRF para o lançamento financeiro?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmento - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento\- A partir da biblioteca 12.1.2209 Solução
- Menu, etapa ou parametro citado: Na geração dos lançamentos financeiros a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo Natureza de Rendimento será levado para o lançamento financeiro (aba Valores |Tributos), onde o lançamento financeiro tem o tipo de documento Gerar IRRF .

#### [172] Geração de IRRF Automático para o Totvs Gestão Financeira
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813078](https://tdn.totvs.com/pages/releaseview.action?pageId=4813078)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Geração de IRRF Automático para o Totvs Gestão Financeira
- Evidencia inicial: Avaliação
- Evidencia inicial: - Como Fazer
- Menu, etapa ou parametro citado: O lançamento de IRRF será gerado para o cliente/fornecedor " Pessoa Jurídica " obedecendo a alíquota do código de receita, e “ Pessoa Física ” obedecendo a tabela progressiva apresentada no Totvs Gestão Financeira em | Cadastros | Dados Fiscais | Tabela de Cálculo de INSS \\ IRRF | .
- Menu, etapa ou parametro citado: Acessar | Opções | Parâmetros | RMFluxus | Avançar | Contas a Pagar | e parametrizar as opções a seguir:
- Menu, etapa ou parametro citado: \- Origem Tab.Op.: Cliente / Fornecedor |

#### [173] Integração Financeira|Aba Tributos
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=761017178](https://tdn.totvs.com/pages/releaseview.action?pageId=761017178)
- Classificacao inferida: fiscal
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Regras para preenchimento do campo Natureza de Rendimento do Movimento para o Lançamento Financeiro
- Evidencia inicial: Na geração dos lançamentos financeiros a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo Natureza de Rendimento será levado para o lançamento financeiro (aba Valores |Tributos), conforme as regras abaixo:
- Evidencia inicial: Tributos
- Menu, etapa ou parametro citado: Na geração dos lançamentos financeiros a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo Natureza de Rendimento será levado para o lançamento financeiro (aba Valores |Tributos), conforme as regras abaixo:
- Menu, etapa ou parametro citado: Para as situações onde o lançamento financeiro tem o tipo de documento Gerar IRRF a natureza de rendimento preenchida em Movimento | Tributos e Valores | Tributos será enviado para o lançamento | Tributos | Valor do IRRF.
- Menu, etapa ou parametro citado: 1. Cadastro do Produto em: Anexos | Dados Fiscais do Produto | Código da Natureza de Rendimento;

#### [174] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipos de Vias de transporte e seu código no Banco de Dados
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 20 de dezembro de 2021 às 09:56
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008982602-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipos-de-Vias-de-transporte-e-seu-c%C3%B3digo-no-Banco-de-Dados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008982602-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipos-de-Vias-de-transporte-e-seu-c%C3%B3digo-no-Banco-de-Dados)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Quais as constantes referente ao campo Via de Transporte de um Movimento e como este é gravado no Banco de Dados?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80.

#### [175] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Faturamento/Recebimento de Movimentos gerados do Módulo Construção e Projetos
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de agosto de 2022 às 08:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686408-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-Recebimento-de-Movimentos-gerados-do-M%C3%B3dulo-Constru%C3%A7%C3%A3o-e-Projetos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686408-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-Recebimento-de-Movimentos-gerados-do-M%C3%B3dulo-Constru%C3%A7%C3%A3o-e-Projetos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: No momento de faturar um movimento no módulo Gestão de Estoque, Compras e Faturamento que foi originado da integração com o módulo Construção e Projetos, a mensagem abaixo pode ser apresentada impedindo que o faturamento seja concluído:
- Menu, etapa ou parametro citado: No momento de faturar um movimento no módulo Gestão de Estoque, Compras e Faturamento que foi originado da integração com o módulo Construção e Projetos, a mensagem abaixo pode ser apresentada impedindo que o faturamento seja concluído:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: Para poder identificar de forma rápida, pode-se executar o select abaixo:
- Artefato tecnico citado: SELECT USARETENCAOIT, \ FROM TTMVEXT WHERE CODTMV = '1.1.04' OR CODTMV = '1.2.11' SELECT VERPRJTRF, \ FROM TITMTMV WHERE CODTMV = '1.1.04' OR CODTMV = '1.2.11'

#### [176] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro Relatório do Movimento Inexistente na Coligada de Destino
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 15:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34837431816087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-Relat%C3%B3rio-do-Movimento-Inexistente-na-Coligada-de-Destino](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34837431816087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-Relat%C3%B3rio-do-Movimento-Inexistente-na-Coligada-de-Destino)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: Relatório do Movimento inexistente na Coligada
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Relatórios preenchidos nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [177] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVFATURAMENTO TTMVFAT
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34836421831831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVFATURAMENTO-TTMVFAT](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34836421831831-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVFATURAMENTO-TTMVFAT)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMVFATURAMENTO\ TTMVFAT"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui movimentos selecionados para faturamento com seleção específica preenchidos nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [178] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TTMVPED
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:16
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34835945425815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TTMVPED](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34835945425815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TTMVPED)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ TTMVPED"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Movimento Gerado (Default) preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [179] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TVEN1
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 15:44
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34834981778071-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TVEN1](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34834981778071-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TVEN1)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ TVEN1"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Funcionários preenchidos nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [180] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erros mais comuns ao copiar Tipo de Movimento entre Coligadas
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 17:35
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34819931650327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erros-mais-comuns-ao-copiar-Tipo-de-Movimento-entre-Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34819931650327-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erros-mais-comuns-ao-copiar-Tipo-de-Movimento-entre-Coligadas)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Quais erros podem ser apresentados no processo de Copia de Movimento Entre Coligadas?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Alguns cadastros preenchidos no Tipo de Movimento podem apresentar erros durante o processo de Copia de Movimento entre Coligadas. Alguns deles são: Fórmulas, Condições de Pagamento, Conta Caixa, Relatórios, etc.. , Caso apresente erro referenciando esses campos, será necessário fazer o processo de copia entre coligadas individualmente em cada informação ou retirá-las do movimento durante a execução do processo.

#### [181] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV FTDODUP
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34819336721815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTDODUP](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34819336721815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTDODUP)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ FTDODUP"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Tipo de Documento preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [182] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TLOC
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34818538177175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TLOC](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34818538177175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TLOC)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ TLOC"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Local de Estoque preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [183] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV FTB1
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de novembro de 2025 às 17:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34817893008791-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTB1](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34817893008791-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FTB1)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ FTB1"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Tabelas Opcionais preenchidas nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [184] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVSERIE TSERIE
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34816748200215-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVSERIE-TSERIE](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34816748200215-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVSERIE-TSERIE)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMVSERIE\ TSERIE"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Séries preenchidas nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [185] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV TCPG
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:02
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815838851607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TCPG](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815838851607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-TCPG)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ TCPG".
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui uma Condição de Pagamento preenchida nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [186] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV GFRMBRUTO
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 15:53
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815294207639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-GFRMBRUTO](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34815294207639-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-GFRMBRUTO)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ GFRMBRUTO"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui as Fórmulas preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [187] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMV FCXA
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 15:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/34811946939671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FCXA](https://centraldeatendimento.totvs.com/hc/pt-br/articles/34811946939671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMV-FCXA)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint "FKTTMV\ FCXA"
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem de erro é apresentada pois o movimento selecionado para realizar a Copia Entre Coligadas possui Conta Caixa Default preenchido nos parâmetros do tipo de movimento, mas a coligada de destino não possui essa informação.

#### [188] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Rastrear Movimentos
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de fevereiro de 2025 às 15:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/30203205414551-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Rastrear-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/30203205414551-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Rastrear-Movimentos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como ver a rastreabilidade de um movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Mais informações: https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Processo-Concluir-Pedido

#### [189] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro FKTTMVEXT GFORMULA
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de setembro de 2025 às 16:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23998519253655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVEXT-GFORMULA](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23998519253655-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-FKTTMVEXT-GFORMULA)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência Ao realizar o processo de Copia de Movimento entre Coligadas, é apresentado o erro: The INSERT statement conflicted with the FOREIGN KEY constraint FKTTMVEXT\ GFORMULA {...}
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para realizar o processo entre coligadas clique na fórmula contida nos parâmetros do movimento Processos Copia de Fórmulas entre Coligadas.
- Menu, etapa ou parametro citado: Outro caminho é no módulo Serviços Globais menu Administração Fórmulas Sistema: Gestão de Estoque, Compras e Faturamento Selecione a Fórmula Processos Copia de Fórmulas entre Coligadas.

#### [190] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Natureza de rendimento default no tributo IRRF PJ para o lançamento Fiscal (Liber)
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:16
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/17325964428951-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Natureza-de-rendimento-default-no-tributo-IRRF-PJ-para-o-lan%C3%A7amento-Fiscal-Liber](https://centraldeatendimento.totvs.com/hc/pt-br/articles/17325964428951-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Natureza-de-rendimento-default-no-tributo-IRRF-PJ-para-o-lan%C3%A7amento-Fiscal-Liber)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, fiscal, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como levar a Natureza de Rendimento default no tributo IRRF PJ para o Lançamento Fiscal (Liber)?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmento - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento \- A partir da biblioteca 12.1.2209
- Menu, etapa ou parametro citado: Na geração dos lançamentos fiscais a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo Natureza de Rendimento será levado para o lançamento fiscal considerando a seguinte hierarquia de cadastros:

#### [191] Serviço de Tributação
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=422546119](https://tdn.totvs.com/pages/releaseview.action?pageId=422546119)
- Classificacao inferida: fiscal
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Conteúdo
- Evidencia inicial: - 1 ServiçodeTributação-1.Oqueé
- Evidencia inicial: - 2 ServiçodeTributação-2.Regras
- Menu, etapa ou parametro citado: O serviço de tributação é um recurso do TOTVS Gestão Fiscal que auxilia a criação de movimentações carregando nelas, durante o cadastro, algumas informações de acordo com alguns parâmetros e outras informações cadastradas.
- Menu, etapa ou parametro citado: A Natureza padrão é definida no movimento conforme a seguinte hierarquia de cadastros:
- Menu, etapa ou parametro citado: 1. Cadastro do produto (Anexos | Dados Fiscais do Produto)

#### [192] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Natureza de Rendimento default para contribuições sociais retidas
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 16:30
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/17185384164375-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-Rendimento-default-para-contribui%C3%A7%C3%B5es-sociais-retidas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/17185384164375-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Natureza-de-Rendimento-default-para-contribui%C3%A7%C3%B5es-sociais-retidas)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min Dúvida Como levar para o financeiro natureza de rendimento default dos tributos PISRF, COFINSRF, CSLLRF e CSRF ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento a partir da biblioteca 12.1.2209
- Evidencia inicial: Solução
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento a partir da biblioteca 12.1.2209
- Menu, etapa ou parametro citado: hierarquia de cadastros:
- Menu, etapa ou parametro citado: Cadastro do produto \ Anexos Dados fiscais do produto

#### [193] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor inválido para o campo Natureza
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 1 de dezembro de 2025 às 17:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/13359803667863-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-campo-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/13359803667863-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-campo-Natureza)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Durante a inclusão de um Movimento é apresentada a mensagem: Valor inválido para o campo Natureza.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: No Movimento | Integrações | Fiscal:

#### [194] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [195] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitar Exclusão de Toda Operação Contábil
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 1 de julho de 2022 às 16:06
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7171682901271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7171682901271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: O que é o processo de Solicitar Exclusão de Toda Operação Contábil ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Parâmetros do Tipo de Movimento | etapa Contabilização

#### [196] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Estornar item parcialmente recebido
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de junho de 2022 às 11:29
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/6950991114007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Estornar-item-parcialmente-recebido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6950991114007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Estornar-item-parcialmente-recebido)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como utilizar recurso de Estornar Item parcialmente recebido?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: A utilização da rotina de Estornar Item parcialmente Recebido tem como objetivo reabrir uma cotação e a solicitação de compras relacionada a esta cotação, a partir de uma ordem de compra parcialmente recebida.

#### [197] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Cópia de Movimento a Partir de Outro Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4413843868311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3pia-de-Movimento-a-Partir-de-Outro-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4413843868311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3pia-de-Movimento-a-Partir-de-Outro-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min.
- Evidencia inicial: Dúvida
- Evidencia inicial: Funcionalidade do processo Cópia de Movimento a Partir de Outro Movimento.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Para realizar a Cópia de Movimento a Partir de Outro Movimento, selecione o movimento que deseja copiar menu Processos e clique em Cópia de Movimento a Partir de Outro Movimento.

#### [198] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- MOV - Movimento com itens relacionados pelo processo de cópia por referência!
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de agosto de 2022 às 08:30
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411682968983-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-itens-relacionados-pelo-processo-de-c%C3%B3pia-por-refer%C3%AAncia](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411682968983-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-itens-relacionados-pelo-processo-de-c%C3%B3pia-por-refer%C3%AAncia)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia inicial: Dúvida
- Evidencia inicial: Por que movimentos inclusos pelo processo de Cópia por Referência não permitem edição?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Para se cancelar qualquer movimento é fundamental que não haja nenhuma integração efetivada com outros módulos. Ou seja deverá, se necessário, voltar a escrituração, cancelar a baixa do lançamento financeiro, estornar a contabilização e cancelar o envio da nota fiscal eletrônica. O movimento também deve possuir data de movimentação posterior ao fechamento de estoque.

#### [199] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - É possível realizar o vínculo automático do adiantamento com a nota fiscal no financeiro?
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 8 de janeiro de 2024 às 12:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411214849687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-%C3%89-poss%C3%ADvel-realizar-o-v%C3%ADnculo-autom%C3%A1tico-do-adiantamento-com-a-nota-fiscal-no-financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4411214849687-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-%C3%89-poss%C3%ADvel-realizar-o-v%C3%ADnculo-autom%C3%A1tico-do-adiantamento-com-a-nota-fiscal-no-financeiro)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, fiscal, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: É possível realizar o vínculo automático do adiantamento com a nota fiscal no financeiro?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- A partir da 12.1.32.
- Menu, etapa ou parametro citado: O mesmo estará disponível ao salvar o Movimento e na visão de Movimentos, desde que o Perfil (Módulo Gestão de Estoque, Compras e Faturamento) do Usuário possua permissão no Item 08.03.02.01 - Vínculos .

#### [200] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo Código da Base de Crédito default
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 27 de dezembro de 2022 às 21:28
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409775013271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-C%C3%B3digo-da-Base-de-Cr%C3%A9dito-default](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409775013271-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-C%C3%B3digo-da-Base-de-Cr%C3%A9dito-default)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como tornar o campo Código da Base de Crédito default na inclusão de Movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: É possível inserir o default no campo Código da Base de Crédito acessando Cadastro de Produto | Anexos | Dados Fiscais do produto | Tributação | Código da Base de Crédito:

#### [201] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como fazer teste de fórmula
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 29 de setembro de 2021 às 14:16
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409688488343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-fazer-teste-de-f%C3%B3rmula](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409688488343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-fazer-teste-de-f%C3%B3rmula)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:06:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como testar execução de fórmula e seu resultado?
- Menu, etapa ou parametro citado: Como testar execução de fórmula e seu resultado?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Artefato tecnico citado: Se a fórmula utiliza variáveis de movimento a sentença SQL deverá ser aplicada à tabela TMOV.
- Artefato tecnico citado: Se a fórmula utiliza variáveis de item de movimento a sentença SQL deverá ser aplicada à tabela TITMMOV.

#### [202] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [203] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - FAT - Tolerância no faturamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 18 de janeiro de 2022 às 16:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409690094743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Toler%C3%A2ncia-no-faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409690094743-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Toler%C3%A2ncia-no-faturamento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 03:00 min
- Evidencia inicial: Dúvida Como parametrizar o módulo para o uso de tolerância no faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar Cadastros | Produtos | aba Preço e definir a margem de tolerância (%) de quantidade ou preço para o produto de acordo com as suas regras de negócio (neste exemplo utilizaremos quantidade) :
- Menu, etapa ou parametro citado: 2\. Acessar o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão de Compras | Ordem de Compra etapa Mov - Outros Dados e selecionar no campo Tolerância: Usar para Quantidade :

#### [204] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipo de Documento informado no movimento não carrega no Lançamento Financeiro
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 30 de setembro de 2021 às 17:12
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409357542935-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipo-de-Documento-informado-no-movimento-n%C3%A3o-carrega-no-Lan%C3%A7amento-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409357542935-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipo-de-Documento-informado-no-movimento-n%C3%A3o-carrega-no-Lan%C3%A7amento-Financeiro)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Tipo de Documento informado no movimento não carrega no Lançamento Financeiro.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O Tipo de Documento da aba Integração Fiscal tem por finalidade ser utilizado na https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023358211-RM-MOV-Escritura%C3%A7%C3%A3o-Processo-de-escritura%C3%A7%C3%A3o-migrado.

#### [205] Cross Segmentos - TOTVS BackOffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Não é permitido incluir itens de movimento com diferentes deduções de INSS para o Empregador
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:06
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409323275415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-%C3%A9-permitido-incluir-itens-de-movimento-com-diferentes-dedu%C3%A7%C3%B5es-de-INSS-para-o-Empregador](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409323275415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-%C3%A9-permitido-incluir-itens-de-movimento-com-diferentes-dedu%C3%A7%C3%B5es-de-INSS-para-o-Empregador)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência Ao tentar salvar o Movimento ocorre o erro: Não é permitido incluir itens de movimento com diferentes deduções de INSS para o Empregador.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O percentual para geração da base do tributo INSS é carregado mediante campos existentes no Cadastro de Produto | Anexos | Dados Fiscais do Produto :

#### [206] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Contabilização de Movimentos
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 30 de maio de 2025 às 14:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408868113559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabiliza%C3%A7%C3%A3o-de-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408868113559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabiliza%C3%A7%C3%A3o-de-Movimentos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar o Evento Contábil e contabilizar Movimentos?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Os Itens de Evento são executados somente quando existe default contábil no cadastro definido para buscar default ou existe conta contábil informada dentro do próprio Item de Evento e quando sua fórmula retornar valor maior que 0.

#### [207] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O registro foi cadastrado com sucesso, entretanto, o mesmo não atende as condições do filtro aplicado na visão
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de janeiro de 2022 às 09:31
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408802535191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-registro-foi-cadastrado-com-sucesso-entretanto-o-mesmo-n%C3%A3o-atende-as-condi%C3%A7%C3%B5es-do-filtro-aplicado-na-vis%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4408802535191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-registro-foi-cadastrado-com-sucesso-entretanto-o-mesmo-n%C3%A3o-atende-as-condi%C3%A7%C3%B5es-do-filtro-aplicado-na-vis%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao salvar um Movimento é apresentada a mensagem abaixo. Selecionando OK o Movimento não é exibido na visão.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [208] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Faturamento de Movimento Via Fórmula Visual
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 17 de abril de 2025 às 16:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539521559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-de-Movimento-Via-F%C3%B3rmula-Visual](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539521559-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Faturamento-de-Movimento-Via-F%C3%B3rmula-Visual)
- Classificacao inferida: movimento, compras, estoque, objetos-gerenciais
- Gatilhos de busca observados: movimento, estoque, formula visual, compras, faturamento
- Leitura segura para a skill: comece tratando este item como integracao-ou-automacao e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como utilizar a atividade Faturamento Movimento para faturar um movimento via fórmula visual?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como utilizar a atividade Faturamento Movimento para faturar um movimento via fórmula visual?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [209] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento específico para produtos não estocáveis em movimentações criadas pelo Protheus
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 9 de abril de 2025 às 15:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407532800023-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-espec%C3%ADfico-para-produtos-n%C3%A3o-estoc%C3%A1veis-em-movimenta%C3%A7%C3%B5es-criadas-pelo-Protheus](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407532800023-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-espec%C3%ADfico-para-produtos-n%C3%A3o-estoc%C3%A1veis-em-movimenta%C3%A7%C3%B5es-criadas-pelo-Protheus)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como parametrizar o sistema RM para que durante a geração de Ordens de Serviço no Protheus o movimento gerado para produtos não estocáveis seja específico.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para que seja gerado uma ordem de compra para um produto que não é estocável na filial basta acessar o módulo Gestão de Estoque Compras e Faturamento menu Ambiente Parâmetros Gestão de Estoque Compras e Faturamento Integrações Manutenção de Ativos (Protheus).

#### [210] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Código do Banco Obrigatório no Pagamento.
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 9 de abril de 2025 às 15:44
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406697595799-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-do-Banco-Obrigat%C3%B3rio-no-Pagamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4406697595799-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-do-Banco-Obrigat%C3%B3rio-no-Pagamento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência Ao incluir um Movimento parametrizado para utilizar Meios de Pagamento onde a Forma de Pagamento utilizado é Cheque , ao salvar o inclusão o Sistema apresenta a seguinte mensagem:
- Evidencia inicial: Código do Banco Obrigatório no Pagamento.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

#### [211] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação/Exportação de Movimento via Webservice
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404749414935-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Movimento-via-Webservice](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404749414935-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-Movimento-via-Webservice)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como realizar a Importação/E xportação de Movimento via Webservice utilizando protocolo SOAP ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Artefato tecnico citado: Através do protocolo SOAP é possível realizar o consumo de Webservice utilizando o DataServer MovMovimentoTBCData para obter o XML de movimentos já contidos na base, além de incluir novos registros e/ou enviar alterações à registros já existentes.
- Artefato tecnico citado: 1\. Acesse Projects Dataserver RM\ IwsDataServer ReadRecord clique com botão direito do mouse New request.

#### [212] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [213] Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Como habilitar o campo CEI no Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de setembro de 2021 às 19:04
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403912616471-Cross-Segmentos-TOTVS-Backoffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Como-habilitar-o-campo-CEI-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403912616471-Cross-Segmentos-TOTVS-Backoffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Como-habilitar-o-campo-CEI-no-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Dúvida
- Evidencia inicial: Qual parametrização realizar para habilitar o campo CEI (Cadastro Específico do INSS) no Movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - A partir da 11.00
- Menu, etapa ou parametro citado: 1. Acesse Menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | localize o Tipo de Movimento | etapa Fis - Escrituração 1/2 .

#### [214] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Quantidade máxima de itens no faturamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:19
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403911931415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quantidade-m%C3%A1xima-de-itens-no-faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4403911931415-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quantidade-m%C3%A1xima-de-itens-no-faturamento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar Faturamento/Recebimento de um Movimento, é exibido a seguinte mensagem: Quando configurada a edição de meios de pagamentos no tipo de movimento de destino de um faturamento, o número máximo de itens deste deve ser maior ou igual ao do tipo de movimento de origem.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 1. Analise a quantidade máxima de itens no movimento de origem. Para isso, acesse o menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Localize o tipo de movimento ORIGEM e avance até a etapa Item - Identificação 1/2 :

#### [215] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - The time zone ID 'E.South America Standard Time' was not found on the local computer.
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de dezembro de 2021 às 16:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402313039895-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-The-time-zone-ID-E-South-America-Standard-Time-was-not-found-on-the-local-computer](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402313039895-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-The-time-zone-ID-E-South-America-Standard-Time-was-not-found-on-the-local-computer)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Causa
- Evidencia inicial: Ao incluir um Movimento parametrizado para emissão de MDF-e é apresentado mensagem:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - A partir da versão 12.1.
- Menu, etapa ou parametro citado: Para realizar o ajuste acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Dados Fiscais | Parâmetros por Filial (Selecione a Filial desejada) | Etapa 7 - Ambiente CC-e | Identificação de Horário de Verão igual a Não:

#### [216] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O valor dessa nota ultrapassa o valor disponível para rateio do CTRC
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 6 de março de 2023 às 09:56
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012478301-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-valor-dessa-nota-ultrapassa-o-valor-dispon%C3%ADvel-para-rateio-do-CTRC](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500012478301-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-valor-dessa-nota-ultrapassa-o-valor-dispon%C3%ADvel-para-rateio-do-CTRC)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao associar Movimento de CT-e ao Movimento de Nota Fiscal é apresentado mensagem abaixo:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.

#### [217] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Inclusão de movimento com período de apuração encerrado para ISS
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de agosto de 2022 às 08:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008995602-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Inclus%C3%A3o-de-movimento-com-per%C3%ADodo-de-apura%C3%A7%C3%A3o-encerrado-para-ISS](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008995602-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Inclus%C3%A3o-de-movimento-com-per%C3%ADodo-de-apura%C3%A7%C3%A3o-encerrado-para-ISS)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida É possível incluir movimento com período de apuração do tributo ISS encerrado?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [218] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Gerar Boleto de Lançamento Financeiro ao Imprimir Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 28 de novembro de 2022 às 10:27
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008995022-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Boleto-de-Lan%C3%A7amento-Financeiro-ao-Imprimir-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008995022-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Boleto-de-Lan%C3%A7amento-Financeiro-ao-Imprimir-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Como gerar o boleto para pagamento do título financeiro originado na inclusão de movimento no módulo Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como gerar o boleto para pagamento do título financeiro originado na inclusão de movimento no módulo Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 4\. Deverá utilizar na inclusão do movimento, aba Integrações | Financeira uma Conta Caixa associada ao banco com layout bancário preenchido com as informações do retorno de cobrança.
- Artefato tecnico citado: - Quanto a impressão do boleto via tela do movimento: A tabela Master do detalhe1 deve ser a TMOV. Para o código de barras ser impresso, é fundamental relacionar as tabelas dos módulos Fluxus e Nucleus, para encontrar o registro correto. O código fica na tabela FBOLETO, campo CODIGOBARRAS.
- Artefato tecnico citado: Essa tabela não se relaciona diretamente com a TMOV, por isso deverá relacionar a TMOVLAN com FLAN, através do campo IDLAN, a FLAN com FLANBOLETO, através do IDLAN e a FBOLETO com FLANBOLETO através do campo IDBOLETO.

#### [219] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [220] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Alteração de Unidade de Medida na Inclusão do Item de Movimento.
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de agosto de 2022 às 08:27
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008978362-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Altera%C3%A7%C3%A3o-de-Unidade-de-Medida-na-Inclus%C3%A3o-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008978362-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Altera%C3%A7%C3%A3o-de-Unidade-de-Medida-na-Inclus%C3%A3o-do-Item-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min Dúvida É possível incluir item de movimento com unidade de medida diferente das definidas no cadastro de produto?
- Evidencia inicial: Ambiente
- Evidencia inicial: Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Para que seja possível alterar a unidade de medida do item de movimento é necessário que nos parâmetros por tipo de movimento na etapa Item - Identificação 2/2, em Critério para Alteração esteja marcado a opção Ter a mesma Unidade Base ou Estar definida no Produto .

#### [221] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Desabilitar campo Código de Verificação da NFS-e
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de fevereiro de 2022 às 13:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971842-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Desabilitar-campo-C%C3%B3digo-de-Verifica%C3%A7%C3%A3o-da-NFS-e](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971842-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Desabilitar-campo-C%C3%B3digo-de-Verifica%C3%A7%C3%A3o-da-NFS-e)
- Classificacao inferida: compras, estoque, colaboracao
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como remover o campo Código de Verificação da NFS-e no movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmento - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acesse os parâmetros do tipo de movimento, etapa Fis - Tributação - Item ou Fis - Tributação - Movimento (dependendo da parametrização utilizada) e exclua o tributo ISS. Para excluir basta clicar sobre a linha e pressionar a tecla Delete do teclado.

#### [222] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento com Status Não Processado
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 20 de dezembro de 2021 às 15:54
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003212141-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-Status-N%C3%A3o-Processado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003212141-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-com-Status-N%C3%A3o-Processado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao salvar o Movimento seu Status é exibido como Não Processado:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecione o Tipo de Movimento | Mov. - Identificação | opção Criar com Status Não-Processados :

#### [223] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [224] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Diferença Entre Preço Unitário e Valor Unitário do Item de Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 7 de dezembro de 2021 às 13:44
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003347142--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Diferen%C3%A7a-Entre-Pre%C3%A7o-Unit%C3%A1rio-e-Valor-Unit%C3%A1rio-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500003347142--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Diferen%C3%A7a-Entre-Pre%C3%A7o-Unit%C3%A1rio-e-Valor-Unit%C3%A1rio-do-Item-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Qual a diferença entre os campos Preço Unitário e Valor Unitário do item de movimento e porque esses campos nem sempre terão o mesmo valor?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões .
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões .
- Menu, etapa ou parametro citado: Solução O Preço Unitário é o campo que guarda o preço da compra ou venda de um produto e não tem relação com custos de estoque (médio, unitário, etc). Nos https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691, etapa Item - Preços é possível definir um default para Preço Unitário que será considerado apenas na inclusão ou edição manual do movimento .
- Menu, etapa ou parametro citado: O custo do estoque é outro valor distinto, guardado no item de movimento no campo Valor Unitário , visível no Anexo Itens de Movimento e via banco de dados na tabela TITMMOV , campo VALORUNITARIO . Esse campo, guarda o custo da compra (em movimentos de entrada) e o custo médio do produto (em movimentos de saída). Para entender como o custo médio é calculado, https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112.
- Artefato tecnico citado: O custo do estoque é outro valor distinto, guardado no item de movimento no campo Valor Unitário , visível no Anexo Itens de Movimento e via banco de dados na tabela TITMMOV , campo VALORUNITARIO . Esse campo, guarda o custo da compra (em movimentos de entrada) e o custo médio do produto (em movimentos de saída). Para entender como o custo médio é calculado, https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112.

#### [225] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Tipo de Documento Inválido
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 21 de abril de 2025 às 14:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002868202-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipo-de-Documento-Inv%C3%A1lido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002868202-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Tipo-de-Documento-Inv%C3%A1lido)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao salvar um movimento é apresentado o erro: Tipo de Documento Inválido
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esse erro ocorre pois o tipo de movimento está parametrizado para gerar integração financeira e na etapa Fin - Faturamento 1/6, no campo Tipo de Documento Duplicata foi selecionado a opção Utiliza do Cliente/Fornecedor e no respectivo cadastro não foi informado um default para o Tipo de Documento.

#### [226] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - EST - Obrigatoriedade do Local de Estoque
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 12 de agosto de 2022 às 09:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002770422-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Obrigatoriedade-do-Local-de-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500002770422-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Obrigatoriedade-do-Local-de-Estoque)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Um Movimento do tipo 1.2.XX pode ser criado sem Local de Estoque ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as Versões.
- Menu, etapa ou parametro citado: Dúvida Um Movimento do tipo 1.2.XX pode ser criado sem Local de Estoque ?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as Versões.
- Menu, etapa ou parametro citado: Solução Não é possível, uma vez que sem Local de Estoque não há como controlar o estoque e sendo esta a finalidade do sistema Gestão de Estoque, Compras e Faturamento , não é permitido inserir um movimento sem que este campo Local de Estoque esteja preenchido.

#### [227] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao editar Movimento: Violação da chave "FKFCAPTURACOB FLAN"
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 23 de julho de 2023 às 19:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063021753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-editar-Movimento-Viola%C3%A7%C3%A3o-da-chave-FKFCAPTURACOB-FLAN](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063021753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-editar-Movimento-Viola%C3%A7%C3%A3o-da-chave-FKFCAPTURACOB-FLAN)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao editar um Movimento e salvar é apresentado a mensagem de Violação da chave: FKFCAPTURACOB\ FLAN:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para conseguir regravar o movimento, será necessário acessar o contexto do TOTVS Gestão Financeira , ir no menu Movimentações Bancárias | DDA - Débito Direto Autorizado . Crie um novo filtro que considere a seguinte condição:

#### [228] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar o movimento: Movimento Id 'X' gerado para fornecedor 'Y'
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 11:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061155974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-o-movimento-Movimento-Id-X-gerado-para-fornecedor-Y](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360061155974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-o-movimento-Movimento-Id-X-gerado-para-fornecedor-Y)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao cancelar uma Ordem de Compra gerada por Cotação é apresentado a seguinte mensagem:
- Evidencia inicial: Erro ao cancelar o movimento de número:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: SELECT CFOVENCEDOR, \ FROM TCITMORCAMENTO WHERE CODCOTACAO = '202X.0000XX'

#### [229] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Dados Bancários não são exibidos no Lançamento Financeiro
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de dezembro de 2021 às 08:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000052182--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Dados-Banc%C3%A1rios-n%C3%A3o-s%C3%A3o-exibidos-no-Lan%C3%A7amento-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000052182--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Dados-Banc%C3%A1rios-n%C3%A3o-s%C3%A3o-exibidos-no-Lan%C3%A7amento-Financeiro)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao incluir um Movimento observa-se que no menu Lançamento Financeiro os dados bancários do Cliente/Fornecedor não são carregados na aba Integração Bancária .
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.
- Menu, etapa ou parametro citado: Ocorrência Ao incluir um Movimento observa-se que no menu Lançamento Financeiro os dados bancários do Cliente/Fornecedor não são carregados na aba Integração Bancária .
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.
- Menu, etapa ou parametro citado: 2\. Acesse os parâmetros do Tipo de Movimento desejado, avance até a etapa 53 - Fin-Condições de pagamento e marque a flag Edita condições de Pagamento do Cliente/Fornecedor:

#### [230] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Agrupar Itens Repetidos
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 11 de outubro de 2021 às 17:12
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000050402-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Agrupar-Itens-Repetidos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000050402-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Agrupar-Itens-Repetidos)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 02:00 min Ocorrência Ao selecionar mais de um Movimento que possui o mesmo Item e em seguida acessar a opção Processos | Faturar / Receber selecionando a opção Agrupar Todos ao visualizar o Movimento de Destino os Itens não são agrupados, mesmo com a Flag Agrupar Itens Repetidos selecionado nos Parâmetros do Tipo de Movimento de Destino:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da 11
- Evidencia inicial: Solução Acessar os parâmetros do Tipo de Movimento de origem e na Etapa Compra/Vendas - Outros Dados , desmarcar o parâmetro Não agrupar quantidade de itens iguais :
- Menu, etapa ou parametro citado: Tempo aproximado para leitura: 02:00 min Ocorrência Ao selecionar mais de um Movimento que possui o mesmo Item e em seguida acessar a opção Processos | Faturar / Receber selecionando a opção Agrupar Todos ao visualizar o Movimento de Destino os Itens não são agrupados, mesmo com a Flag Agrupar Itens Repetidos selecionado nos Parâmetros do Tipo de Movimento de Destino:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da 11
- Menu, etapa ou parametro citado: Solução Acessar os parâmetros do Tipo de Movimento de origem e na Etapa Compra/Vendas - Outros Dados , desmarcar o parâmetro Não agrupar quantidade de itens iguais :

#### [231] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Editar Campos Complementares na Visão de Movimentos?
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de dezembro de 2021 às 08:54
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360057753893-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Editar-Campos-Complementares-na-Vis%C3%A3o-de-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360057753893-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Editar-Campos-Complementares-na-Vis%C3%A3o-de-Movimentos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como editar Campos Complementares na visão de Movimentos?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar os parâmetros do tipo de movimento (caso encontre dificuldades para encontrar https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento);

#### [232] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Centro de Custo do Movimento Alterado Não Copia para Item de Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de dezembro de 2021 às 09:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360057088593-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Centro-de-Custo-do-Movimento-Alterado-N%C3%A3o-Copia-para-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360057088593-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Centro-de-Custo-do-Movimento-Alterado-N%C3%A3o-Copia-para-Item-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência Ao editar o Movimento parametrizado para copiar o Centro de Custo do movimento para o item de Movimento o Centro de Custo do movimento não é alterado.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

#### [233] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Número do documento deve ter X caracteres
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 10 de dezembro de 2021 às 08:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360047697694-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%BAmero-do-documento-deve-ter-X-caracteres](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360047697694-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%BAmero-do-documento-deve-ter-X-caracteres)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao salvar um movimento que possui Integração Financeira o sistema apresenta uma mensagem de erro:
- Menu, etapa ou parametro citado: Ao salvar um movimento que possui Integração Financeira o sistema apresenta uma mensagem de erro:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento | Fin – Faturamento 1/6;

#### [234] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Visualizar Apenas Movimentos Criados Pelo Usuário Logado
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 19 de janeiro de 2022 às 09:59
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360045630234-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Visualizar-Apenas-Movimentos-Criados-Pelo-Usu%C3%A1rio-Logado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360045630234-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Visualizar-Apenas-Movimentos-Criados-Pelo-Usu%C3%A1rio-Logado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como criar um filtro para visualizar somente os Movimentos que foram criados pelo usuário que está logado?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80
- Menu, etapa ou parametro citado: Acesse o menu Serviços Globais | Segurança | Usuários | sistema: Gestão de Estoque, Compras e Faturamento | Selecione o usuário | Clique em Anexos | Filtro por Usuário :
- Artefato tecnico citado: Selecione a tabela TMOV e clique em Novo :

#### [235] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Invalid Object Name 'TITMMOVPROCESSOJUD'
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 18 de janeiro de 2022 às 17:06
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360043360933-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Invalid-Object-Name-TITMMOVPROCESSOJUD](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360043360933-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Invalid-Object-Name-TITMMOVPROCESSOJUD)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como solucionar o erro Invalid Object Name 'TITMMOVPROCESSOJUD' ao salvar movimento.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.25.226.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.25.226.
- Menu, etapa ou parametro citado: Solução Em Ambiente de Homologação acesse a pasta de instalação do sistema e execute o RM.Atualizador.exe , existe um script interno para criação da tabela informada no erro, basta atualizar o sistema com a versão que é exibido em tela, conforme prints abaixo:

#### [236] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como copiar o número do movimento origem para o movimento destino?
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:33
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360041445114-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-copiar-o-n%C3%BAmero-do-movimento-origem-para-o-movimento-destino](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360041445114-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-copiar-o-n%C3%BAmero-do-movimento-origem-para-o-movimento-destino)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como fazer para que no Faturamento/Recebimento o sistema copie o número do movimento origem para o movimento destino?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acessar os parâmetros do tipo de movimento origem através do Menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Parametrize o tipo de Movimento | Etapa Compra/Venda - Outros Dados | Marcar a flag Copiar número do pedido para o movimento gerado.

#### [237] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Novo tipo de movimento não é exibido na Busca/Seleção/Parametrizador
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 1 de outubro de 2024 às 15:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360041627793-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Novo-tipo-de-movimento-n%C3%A3o-%C3%A9-exibido-na-Busca-Sele%C3%A7%C3%A3o-Parametrizador](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360041627793-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Novo-tipo-de-movimento-n%C3%A3o-%C3%A9-exibido-na-Busca-Sele%C3%A7%C3%A3o-Parametrizador)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Por que ao cadastrar um novo Tipo de Movimento (ou copiar entre coligadas) o Tipo de Movimento não é exibido quando verificado no Menu especifico?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: 2. Acessar o menu Segurança | Usuários ;
- Menu, etapa ou parametro citado: 4. Através do menu Anexos | Permissões por Tipo de Movimento busque o novo Tipo de Movimento;

#### [238] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Importação de Movimento com Relacionamento via Conceito
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:42
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039672113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Importa%C3%A7%C3%A3o-de-Movimento-com-Relacionamento-via-Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039672113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Importa%C3%A7%C3%A3o-de-Movimento-com-Relacionamento-via-Conceito)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como executar a importação de um movimento que possua relacionamento via conceito?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [239] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Identificação e Execução de XML de Processo
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 20 de dezembro de 2021 às 10:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038729334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Identifica%C3%A7%C3%A3o-e-Execu%C3%A7%C3%A3o-de-XML-de-Processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038729334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Identifica%C3%A7%C3%A3o-e-Execu%C3%A7%C3%A3o-de-XML-de-Processo)
- Classificacao inferida: compras, estoque, colaboracao
- Gatilhos de busca observados: movimento, estoque, xml, compras, faturamento
- Leitura segura para a skill: comece tratando este item como integracao-ou-automacao e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Qual DataProcess e como obter um XML de exemplo para execução de processos via consumo de Webservice ?
- Menu, etapa ou parametro citado: Qual DataProcess e como obter um XML de exemplo para execução de processos via consumo de Webservice ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.80.
- Artefato tecnico citado: Qual DataProcess e como obter um XML de exemplo para execução de processos via consumo de Webservice ?
- Artefato tecnico citado: Para obter um exemplo de XML de processo basta seguir os passos abaixo:

#### [240] TOTVS WS Client
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/TOTVS+WS+Client](https://tdn.totvs.com/display/public/LRM/TOTVS+WS+Client)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [241] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O movimento XXX com o número sequencial Y não foi encontrado na base do Solum
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037830173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-movimento-XXX-com-o-n%C3%BAmero-sequencial-Y-n%C3%A3o-foi-encontrado-na-base-do-Solum](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037830173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-movimento-XXX-com-o-n%C3%BAmero-sequencial-Y-n%C3%A3o-foi-encontrado-na-base-do-Solum)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar Estornar Item Não Recebido de solicitação de compras integrada ao TOP é exibida a mensagem abaixo: O movimento com o número sequencial não foi encontrado na base do Solum.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar Estornar Item Não Recebido de solicitação de compras integrada ao TOP é exibida a mensagem abaixo: O movimento com o número sequencial não foi encontrado na base do Solum.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.
- Menu, etapa ou parametro citado: 1. Acesse Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tipo de movimento | Projeto;

#### [242] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Total do movimento não deduz valor faturado
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 8 de outubro de 2021 às 16:58
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037768093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Total-do-movimento-n%C3%A3o-deduz-valor-faturado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037768093-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Total-do-movimento-n%C3%A3o-deduz-valor-faturado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 02:00 min
- Evidencia inicial: Dúvida Por que ao faturar movimento parcialmente por valor, o valor faturado não é deduzido do total do movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da 12.1.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da 12.1.
- Menu, etapa ou parametro citado: Solução Ao contrário do Faturamento Parcial por Quantidade que deduz automaticamente a quantidade faturada no item de movimento, o Faturamento Parcial por Valor não possui esta funcionalidade, uma vez que o valor de um movimento é definido por fórmula ( cadastro realizado pelo usuário ).
- Menu, etapa ou parametro citado: Sendo assim para que o valor faturado parcialmente seja deduzido do total do movimento se faz necessário que a fórmula de Valor Líquido do movimento contemple a subtração deste valor.

#### [243] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Agendar Faturamento Automático
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 28 de novembro de 2022 às 10:23
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037248154-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Agendar-Faturamento-Autom%C3%A1tico](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037248154-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Agendar-Faturamento-Autom%C3%A1tico)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como realizar o agendamento para faturamento automático?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Nos parâmetros do movimento origem, etapa Compra/Venda - Características o campo Opção de Faturamento deve estar como Automático e o movimento de destino deve receber todas as informações default do movimento de origem, pois no faturamento automático o sistema não abre a tela do movimento de destino para edição, ele simplesmente cria o movimento e se algum campo obrigatório não estiver default será apresentado erro durante o faturamento.
- Menu, etapa ou parametro citado: Caso encontre dificuldades para localizar os parâmetros do tipo de movimento, https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento.

#### [244] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como incluir Movimento onde Lançamento Financeiro seja gerado com status Baixado?
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035946194-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-Movimento-onde-Lan%C3%A7amento-Financeiro-seja-gerado-com-status-Baixado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035946194-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-Movimento-onde-Lan%C3%A7amento-Financeiro-seja-gerado-com-status-Baixado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como incluir Movimento onde Lançamento Financeiro seja gerado com status Baixado?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Localizar o Tipo de Movimento | Etapa Fin - Faturamento 2/6 .

#### [245] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Item não relacionado a uma origem
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036440113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Item-n%C3%A3o-relacionado-a-uma-origem](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036440113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Item-n%C3%A3o-relacionado-a-uma-origem)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao incluir um novo movimento é exibida a mensagem de erro abaixo:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao incluir um novo movimento é exibida a mensagem de erro abaixo:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [246] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Habilitar e Executar o Processo Alterar Valor Lançamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036165573-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Habilitar-e-Executar-o-Processo-Alterar-Valor-Lan%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036165573-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Habilitar-e-Executar-o-Processo-Alterar-Valor-Lan%C3%A7amento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como habilitar e executar o processo Alterar Valor Lançamento disponível no movimento, aba Lançamentos | Financeiro?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como habilitar e executar o processo Alterar Valor Lançamento disponível no movimento, aba Lançamentos | Financeiro?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [247] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Constantes do Módulo Gestão de Estoque, Compras e Faturamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 27 de setembro de 2023 às 13:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036100333-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Constantes-do-M%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036100333-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Constantes-do-M%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Qual o significado de cada sigla que representa o status de um movimento, cotação, produto, entre outros registros no módulo, quando este é gravado no banco de dados?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [248] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [249] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Processo Concluir Pedido
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Processo-Concluir-Pedido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Processo-Concluir-Pedido)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Qual o objetivo do processo Concluir Pedido?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: - Os itens que forem concluídos, terão seu estoque estornado.
- Artefato tecnico citado: SELECT \ FROM TMOTIVOCONCLPED WHERE IDMOV = X AND CODCOLIGADA = Y
- Artefato tecnico citado: Além disso, a quantidade concluída de cada item ficará gravada na tabela de Itens de Movimento TITMMOV , coluna QUANTIDADECONCLUIDA .

#### [250] Conclusão de Pedidos
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938174](https://tdn.totvs.com/pages/releaseview.action?pageId=423938174)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Com a utilização da rotina de Faturamento Parcial, o Usuário se vê, em certas situações, na necessidade de que este Pedido não seja mais Faturado. Isto pode ocorrer por situações corriqueiras dos processos da empresa como: indisponibilidade do material no Fornecedor, insatisfação na entrega, falta de espaço no transporte ou no armazenamento, dentre outras. Por conta das rotinas de Recebimento de Materiais, este processo alterará a Quantidade dos Itens que ainda estão pendentes de recebimento para 0 (zero), como se todos eles já estivessem sido 'recebidos'.
- Evidencia inicial: É possível rastrear a execução do processo (Data, Motivo da Conclusão e Usuário Responsável) consultando a tabela TMOTIVOCONCLPED no banco de dados ou em menu Gestão Visões de Dados, utilizando a consulta abaixo:
- Evidencia inicial: SELECT \ FROM TMOTIVOCONCLPED WHERE IDMOV = X AND CODCOLIGADA = Y
- Menu, etapa ou parametro citado: Com a utilização da rotina de Faturamento Parcial, o Usuário se vê, em certas situações, na necessidade de que este Pedido não seja mais Faturado. Isto pode ocorrer por situações corriqueiras dos processos da empresa como: indisponibilidade do material no Fornecedor, insatisfação na entrega, falta de espaço no transporte ou no armazenamento, dentre outras. Por conta das rotinas de Recebimento de Materiais, este processo alterará a Quantidade dos Itens que ainda estão pendentes de recebimento para 0 (zero), como se todos eles já estivessem sido 'recebidos'.
- Menu, etapa ou parametro citado: Com esta nova rotina, os Usuários passam a contar com uma ferramenta importante no processo de gestão de Compras/Vendas, agilizando as rotinas de entrega/recebimento de materiais, mantendo toda a documentação do que é executado dentro do sistema.
- Artefato tecnico citado: SELECT \ FROM TMOTIVOCONCLPED WHERE IDMOV = X AND CODCOLIGADA = Y
- Artefato tecnico citado: SELECT \ FROM TMOTIVOCONCLPED WHERE IDMOV = X AND CODCOLIGADA = Y

#### [251] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Alterar Filial Emissão no Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035451733-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Alterar-Filial-Emiss%C3%A3o-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035451733-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Alterar-Filial-Emiss%C3%A3o-no-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida É possível alterar a filial de emissão de um movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução O parâmetro referente a editar a Filial de Emissão existente na etapa Mov - Emitente Destinatário 1/2 dos parâmetros do tipo de movimento tem influencia apenas no campo de filial apresentado quando o tipo de movimento é selecionado.

#### [252] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Item X - Produto XXXX do Movimento ?11?!! - Série X: Item repetido
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:39
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035402953-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Item-X-Produto-XXXX-do-Movimento-11-S%C3%A9rie-X-Item-repetido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035402953-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Item-X-Produto-XXXX-do-Movimento-11-S%C3%A9rie-X-Item-repetido)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Ao incluir, faturar ou gerar movimento via cotação é apresentada a mensagem
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [253] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Integração Financeira: Controle de Adiantamento no Faturamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:16
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034893594-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Integra%C3%A7%C3%A3o-Financeira-Controle-de-Adiantamento-no-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034893594-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Integra%C3%A7%C3%A3o-Financeira-Controle-de-Adiantamento-no-Faturamento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para utilizar Controle de Adiantamento Financeiro?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [254] Controle de Adiantamento
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Controle+de+Adiantamento](https://tdn.totvs.com/display/public/LRM/Controle+de+Adiantamento)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Controle de Adiantamento
- Evidencia inicial: Avaliação
- Evidencia inicial: - Como Fazer
- Menu, etapa ou parametro citado: Acessar | Cadastro | Fórmula | Inserir | e cadastrar fórmula que será utilizada para geração do lançamento financeiro.
- Menu, etapa ou parametro citado: Acessar | Cadastro | Tabelas Auxiliares | Tipo de Documento | e incluir tipo de documento específico para este fim, onde deverá informar | Classificação : Adiantamento |
- Menu, etapa ou parametro citado: Acessar | Opções | Parâmetros | RMNucleus | e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

#### [255] Cross Segmentos - TOTVS BackOffice Linha RM - MOV - Integração Financeira: Geração de INSS Automático para o Totvs Gestão Financeira
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:37
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034892914-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-MOV-Integra%C3%A7%C3%A3o-Financeira-Gera%C3%A7%C3%A3o-de-INSS-Autom%C3%A1tico-para-o-Totvs-Gest%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034892914-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-MOV-Integra%C3%A7%C3%A3o-Financeira-Gera%C3%A7%C3%A3o-de-INSS-Autom%C3%A1tico-para-o-Totvs-Gest%C3%A3o-Financeira)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para gerar INSS Automático para o Totvs Gestão Financeira?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [256] Geração de INSS Automático para o Totvs Gestão Financeira através do TOTVS Gestão de Estoque, compras e Faturamento
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813068](https://tdn.totvs.com/pages/releaseview.action?pageId=4813068)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: - Como Fazer
- Evidencia inicial: Como parametrizar o sistema para gerar INSS Automático para o Totvs Gestão Financeira?
- Evidencia inicial: - Definição do Processo
- Menu, etapa ou parametro citado: Acessar | Opções | Parâmetros | RMFluxus | Contas a Pagar | e parametrizar as opções a seguir:
- Menu, etapa ou parametro citado: Origem Tab.Op.: Cliente / Fornecedor |
- Menu, etapa ou parametro citado: \- Empregador | Origem das Tabelas: Lançamento Original |

#### [257] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O Contador Sequencial Para Esta Série Não Foi Inicializado
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:13
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034890254-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Contador-Sequencial-Para-Esta-S%C3%A9rie-N%C3%A3o-Foi-Inicializado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034890254-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Contador-Sequencial-Para-Esta-S%C3%A9rie-N%C3%A3o-Foi-Inicializado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar salvar um Movimento ocorre a mensagem: O Contador Sequencial Para Esta Série Não Foi Inicializado. Vá em Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Numeração do Movimento Numeração Geral para fazê-lo.
- Menu, etapa ou parametro citado: Ao tentar salvar um Movimento ocorre a mensagem: O Contador Sequencial Para Esta Série Não Foi Inicializado. Vá em Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Numeração do Movimento Numeração Geral para fazê-lo.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

#### [258] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Botão Incluir não exibido em Movimentações Classificadas como Inventário
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 13 de julho de 2022 às 16:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034656053-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Bot%C3%A3o-Incluir-n%C3%A3o-exibido-em-Movimenta%C3%A7%C3%B5es-Classificadas-como-Invent%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034656053-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Bot%C3%A3o-Incluir-n%C3%A3o-exibido-em-Movimenta%C3%A7%C3%B5es-Classificadas-como-Invent%C3%A1rio)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao acessar movimento através do menu Estoque | Inventário | Movimentação botão Incluir não é exibido.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao acessar movimento através do menu Estoque | Inventário | Movimentação botão Incluir não é exibido.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esse incidente ocorre pois a movimentação classificada como Inventário deverá ser inserida apenas via encerramento de Inventário (Estoque | Inventário | Manutenção de Inventário).

#### [259] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [260] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Gerar Lançamento Financeiro Parcial no Faturamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 17 de maio de 2022 às 16:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034117814-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Lan%C3%A7amento-Financeiro-Parcial-no-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034117814-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Lan%C3%A7amento-Financeiro-Parcial-no-Faturamento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 02:00 min
- Evidencia inicial: Dúvida Ao faturar movimento parcialmente, como gerar lançamento financeiro com o valor restante?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da 12.1.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da 12.1.

#### [261] Cross Seguimentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Não permite incluir Rateio por Centro de Custo no movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 23 de agosto de 2021 às 10:02
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102414-Cross-Seguimentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-permite-incluir-Rateio-por-Centro-de-Custo-no-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034102414-Cross-Seguimentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-N%C3%A3o-permite-incluir-Rateio-por-Centro-de-Custo-no-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Ocorrência Ao acessar tela de Rateio por Centro de Custo do movimento botão Incluir não é exibido. E o botão Editar é exibido mas não permite editar o rateio exibido.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Evidencia inicial: Causa
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

#### [262] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Edição de Movimento Não Regrava Lançamento Contábil/Financeiro
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 13 de junho de 2024 às 15:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034640033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Edi%C3%A7%C3%A3o-de-Movimento-N%C3%A3o-Regrava-Lan%C3%A7amento-Cont%C3%A1bil-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034640033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Edi%C3%A7%C3%A3o-de-Movimento-N%C3%A3o-Regrava-Lan%C3%A7amento-Cont%C3%A1bil-Financeiro)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao alterar determinados campos em movimento a integração Contábil/Financeira não é regravada.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao alterar determinados campos em movimento a integração Contábil/Financeira não é regravada.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar o menu Ambiente | Gestão de Estoque, Compras e Faturamento | Integração Financeira | Definições Financeiras ;

#### [263] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Tributos Incompatíveis com a Definição de Natureza
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 26 de julho de 2022 às 17:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026595693-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tributos-Incompat%C3%ADveis-com-a-Defini%C3%A7%C3%A3o-de-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026595693-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tributos-Incompat%C3%ADveis-com-a-Defini%C3%A7%C3%A3o-de-Natureza)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como solucionar o erro "Movimento?!?!!!!!!!!!- Série A: Tributos incompatíveis com a definição de Natureza.".
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [264] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - TOP: Alterar Item Integrado em pedido do TOP
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 23 de fevereiro de 2024 às 09:43
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026038333-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-TOP-Alterar-Item-Integrado-em-pedido-do-TOP](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026038333-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-TOP-Alterar-Item-Integrado-em-pedido-do-TOP)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como gerenciar a permissão para alteração da Quantidade e Preço Unitário de itens de movimentos gerados a partir do módulo TOTVS Obras e Projetos (TOP).
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.
- Menu, etapa ou parametro citado: Solução Para liberar ou bloquear a alteração da Quantidade e Preço Unitário de itens de Movimento gerados a partir do módulo TOTVS Obras e Projetos (TOP) , deverá acessar módulo Serviços Globais| Administração | Usuários | Sistema: Gestão de Estoque, Compras e Faturamento | filtrar o cadastro do usuário | Anexos | Permissões por Tipo de Movimento.

#### [265] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como solucionar o erro "Quantidade do item inválida"?
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:08
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024608274-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Quantidade-do-item-inv%C3%A1lida](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024608274-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Quantidade-do-item-inv%C3%A1lida)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao alterar a quantidade do Item para mais durante o faturamento é retornada a mensagem: Quantidade do item 1 inválida! Valor Máximo
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as Versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as Versões.
- Menu, etapa ou parametro citado: 1. Acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecione o tipo de movimento destino e dê um duplo clique. (caso encontre dificuldades para encontrar, https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento.);

#### [266] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Aprovação Workflow: Movimento aprovado por outro usuário
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024708773-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Aprova%C3%A7%C3%A3o-Workflow-Movimento-aprovado-por-outro-usu%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024708773-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Aprova%C3%A7%C3%A3o-Workflow-Movimento-aprovado-por-outro-usu%C3%A1rio)
- Classificacao inferida: movimento, compras, estoque, fluig
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como integracao-ou-automacao e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Ocorrência
- Evidencia inicial: No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar alterar um Movimento aprovado pelo Gestão de Relacionamento com Cliente é apresentada a mensagem: Movimento aprovado por outro usuário.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) – Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.20
- Menu, etapa ou parametro citado: No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar alterar um Movimento aprovado pelo Gestão de Relacionamento com Cliente é apresentada a mensagem: Movimento aprovado por outro usuário.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) – Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.20

#### [267] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Ajustar o Valor do Bem na Integração Patrimonial
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 12 de agosto de 2022 às 17:06
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024708553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Ajustar-o-Valor-do-Bem-na-Integra%C3%A7%C3%A3o-Patrimonial](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024708553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Ajustar-o-Valor-do-Bem-na-Integra%C3%A7%C3%A3o-Patrimonial)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como integrar Movimentos de aquisição de compras com TOTVS Gestão Patrimonial somando ao valor do bem os impostos, descontos, frete e qualquer outro valor relativo ao item de movimento pertinente à regra de negócio.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como integrar Movimentos de aquisição de compras com TOTVS Gestão Patrimonial somando ao valor do bem os impostos, descontos, frete e qualquer outro valor relativo ao item de movimento pertinente à regra de negócio.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para embutir no Valor de Aquisição do Bem valores como impostos, descontos e frete do item de movimento é necessário que a Integração de Patrimônios (módulo Gestão Patrimonial Relatórios e Integrações Integrar Aquisições Compras) ocorra considerando a Fórmula do Valor do Patrimônio.
- Artefato tecnico citado: Desta forma, o valor considerado será o valor do bem gravado na tabela TITMMOV campo VALORBEM.
- Artefato tecnico citado: Após a alteração será necessário regravar o movimento e se certificar que o valor do bem foi preenchido na TITMMOV.VALORBEM.

#### [268] Inclusão de Bens via Integração com RM Nucleus
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4811188](https://tdn.totvs.com/pages/releaseview.action?pageId=4811188)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Inclusão de Bens via Integração com RM Nucleus
- Evidencia inicial: Produto:
- Evidencia inicial: Unspecified
- Menu, etapa ou parametro citado: FAQ: Inclusão de Bens via Integração com RM Nucleus
- Menu, etapa ou parametro citado: Ambiente:
- Menu, etapa ou parametro citado: Este módulo permite realizar a integração dos bens cadastrados no RM NUCLEUS com o RM BONUM.

#### [269] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Enviar E-mail do Movimento Para Contatos do Cliente/Fornecedor
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de outubro de 2021 às 12:38
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028982891-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Enviar-E-mail-do-Movimento-Para-Contatos-do-Cliente-Fornecedor](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028982891-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Enviar-E-mail-do-Movimento-Para-Contatos-do-Cliente-Fornecedor)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como enviar e-mail do movimento para os contatos do cliente/fornecedor, dados informados no cadastro do C liente/fornecedor Anexos Contato do Cli/For .
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as Versões
- Menu, etapa ou parametro citado: Dúvida Como enviar e-mail do movimento para os contatos do cliente/fornecedor, dados informados no cadastro do C liente/fornecedor Anexos Contato do Cli/For .
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as Versões
- Menu, etapa ou parametro citado: Solução Para usar os contatos do cliente/fornecedor no envio de e-mail deverá acessar menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento selecionar o tipo de movimento Parametrizar etapa Mov - Impressão 2/2 e marcar as flag's Envia E-mail e Usar contato do fornecedor no envio de email .

#### [270] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Diferença Entre Partidas de Débito e Crédito ao Contabilizar Movimentos
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028690871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Diferen%C3%A7a-Entre-Partidas-de-D%C3%A9bito-e-Cr%C3%A9dito-ao-Contabilizar-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028690871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Diferen%C3%A7a-Entre-Partidas-de-D%C3%A9bito-e-Cr%C3%A9dito-ao-Contabilizar-Movimentos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min Ocorrência Ao salvar um Movimento que possui Integração Contábil é retornada mensagem:
- Evidencia inicial: O Lançamento não pode ser salvo pois a soma das partidas a débito é diferente da soma das partidas a crédito .
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Tempo aproximado para leitura: 00:05:00min Ocorrência Ao salvar um Movimento que possui Integração Contábil é retornada mensagem:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esta situação possui duas causas prováveis, ou existe algum item de evento que está sendo contabilizado quando não deveria ser (vice e versa) ou a fórmula do item de evento retornou valor incorreto.

#### [271] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [272] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [273] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Evento contábil: Como funcionam as opções Buscar Centro de Custo em
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 18 de janeiro de 2022 às 15:27
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028217092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Evento-cont%C3%A1bil-Como-funcionam-as-op%C3%A7%C3%B5es-Buscar-Centro-de-Custo-em](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028217092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Evento-cont%C3%A1bil-Como-funcionam-as-op%C3%A7%C3%B5es-Buscar-Centro-de-Custo-em)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como funcionam as opções Buscar Centro de Custo em ?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Movimento : Tabelas | Centro de Custo do MOVIMENTO

#### [274] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Percentual de valor financeiro não poderá ser superior a 100%
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 27 de fevereiro de 2024 às 07:23
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027917792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Percentual-de-valor-financeiro-n%C3%A3o-poder%C3%A1-ser-superior-a-100](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027917792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Percentual-de-valor-financeiro-n%C3%A3o-poder%C3%A1-ser-superior-a-100)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 02:00 min
- Evidencia inicial: Ocorrência Ao incluir um Movimento, no momento de salvar, é apresentada a mensagem: Percentual de valor financeiro não poderá ser superior a 100%.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Solução 1- Acessar o menu Ambiente | Parâmetros | Gestão de estoque, Compras e Faturamento

#### [275] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aprovação de movimento: Valores preenchidos no campo TIPOAPROVACAO
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 12 de agosto de 2022 às 17:08
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026521571-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aprova%C3%A7%C3%A3o-de-movimento-Valores-preenchidos-no-campo-TIPOAPROVACAO](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026521571-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aprova%C3%A7%C3%A3o-de-movimento-Valores-preenchidos-no-campo-TIPOAPROVACAO)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Quais são os valores preenchidos no campo TIPOAPROCAVAO da TMOVAPROVA e o que eles representam?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [276] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MAT - Preenchimento Código de Receita em linha de Tributo
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 30 de agosto de 2021 às 19:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025848572-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MAT-Preenchimento-C%C3%B3digo-de-Receita-em-linha-de-Tributo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025848572-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MAT-Preenchimento-C%C3%B3digo-de-Receita-em-linha-de-Tributo)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Dúvida Qual a regra utilizada e de quais locais o sistema busca o Código de Receita dos Tributos ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) – A partir da versão 11.22
- Evidencia inicial: Solução
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) – A partir da versão 11.22
- Menu, etapa ou parametro citado: 2º - Carregar o Código de Receita informado no Anexo Tributos Default de Fornecedores no Cadastro do Cliente/Fornecedor (exceto a COSIRF este irá buscar sempre o código informado nos parâmetros do Tipo de Movimento).
- Menu, etapa ou parametro citado: - Caso esteja parametrizado para Buscar Alíquota no Cliente a regra muda e passa a carregar o Código de Receita informado em Anexos - Tributos Default de Fornecedores no Cadastro do Cliente/Fornecedor apenas.

#### [277] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturamento Automático: Valor dos pagamentos é inferior ao Valor do Documento (movimento)
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 3 de janeiro de 2025 às 11:29
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025844192-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturamento-Autom%C3%A1tico-Valor-dos-pagamentos-%C3%A9-inferior-ao-Valor-do-Documento-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025844192-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturamento-Autom%C3%A1tico-Valor-dos-pagamentos-%C3%A9-inferior-ao-Valor-do-Documento-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao realizar o processo de Faturamento Automático é apresentada a mensagem: Valor dos pagamentos é inferior ao Valor do Documento (movimento).
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as Versões
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao realizar o processo de Faturamento Automático é apresentada a mensagem: Valor dos pagamentos é inferior ao Valor do Documento (movimento).
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as Versões
- Menu, etapa ou parametro citado: Solução Para solucionar essa ocorrência, existem duas opções, será necessário escolher qual a melhor opção a ser aplicada em relação a sua regra de negócio. Acesse o menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Selecione a classificação do seu movimento Avançar:

#### [278] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Geração IRRF para TOTVS Gestão Financeira
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 8 de novembro de 2022 às 15:30
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024700871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Gera%C3%A7%C3%A3o-IRRF-para-TOTVS-Gest%C3%A3o-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024700871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Gera%C3%A7%C3%A3o-IRRF-para-TOTVS-Gest%C3%A3o-Financeira)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:30 min
- Evidencia inicial: Dúvida Como parametrizar o sistema para gerar IRRF Automático para o TOTVS Gestão Financeira ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O lançamento de IRRF será gerado para o cliente/fornecedor Pessoa Jurídica obedecendo a alíquota do código de receita, e Pessoa Física obedecendo a tabela progressiva apresentada no TOTVS Gestão Financeira em | Cadastros | Dados Fiscais | Tabela de Cálculo de INSS \\ IRRF | .
- Menu, etapa ou parametro citado: No cadastro do Cliente Fornecedor, na guia Outros | Tributos , caso a flag Optante pelo Simples esteja marcada o Sistema não vai gerar os valores do Tributo para o Financeiro!

#### [279] Geração de IRRF Automático para o Totvs Gestão Financeira
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813078](https://tdn.totvs.com/pages/releaseview.action?pageId=4813078)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Geração de IRRF Automático para o Totvs Gestão Financeira
- Evidencia inicial: Avaliação
- Evidencia inicial: - Como Fazer
- Menu, etapa ou parametro citado: O lançamento de IRRF será gerado para o cliente/fornecedor " Pessoa Jurídica " obedecendo a alíquota do código de receita, e “ Pessoa Física ” obedecendo a tabela progressiva apresentada no Totvs Gestão Financeira em | Cadastros | Dados Fiscais | Tabela de Cálculo de INSS \\ IRRF | .
- Menu, etapa ou parametro citado: Acessar | Opções | Parâmetros | RMFluxus | Avançar | Contas a Pagar | e parametrizar as opções a seguir:
- Menu, etapa ou parametro citado: \- Origem Tab.Op.: Cliente / Fornecedor |

#### [280] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Buscar Filial no Cadastro de Default Contábil
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 7 de dezembro de 2021 às 13:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024597151-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Buscar-Filial-no-Cadastro-de-Default-Cont%C3%A1bil](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024597151-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Buscar-Filial-no-Cadastro-de-Default-Cont%C3%A1bil)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min
- Evidencia inicial: Dúvida Como usar o campo Filial, localizado nos Defaults Contábeis dos cadastros do módulo (Produto, Tabela de Classificação, Natureza Orçamentária/Financeira, etc.) para contabilização de movimentos, identificando a conta contábil correspondente à filial informada.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como usar o campo Filial, localizado nos Defaults Contábeis dos cadastros do módulo (Produto, Tabela de Classificação, Natureza Orçamentária/Financeira, etc.) para contabilização de movimentos, identificando a conta contábil correspondente à filial informada.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [281] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Permissão menu Solicitar Exclusão de Toda Operação Contábil
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 7 de dezembro de 2021 às 13:39
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024053591-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Permiss%C3%A3o-menu-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024053591-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Permiss%C3%A3o-menu-Solicitar-Exclus%C3%A3o-de-Toda-Opera%C3%A7%C3%A3o-Cont%C3%A1bil)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como atribuir/retirar permissão ao menu Solicitar Exclusão de Toda Operação Contábil ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução A permissão referente ao processo Solicitar Exclusão de Toda Operação Contábil é dada dentro do cadastro do Perfil , aba Acesso a Menus . Para que o usuário tenha permissão à executar este processo, será necessário atribuir a permissão de Excluir movimentos , pois esta permissão é compartilhada entre os processos.

#### [282] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Alterar a Data Default de contabilização de Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 8 de março de 2023 às 12:06
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024043991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Alterar-a-Data-Default-de-contabiliza%C3%A7%C3%A3o-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024043991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Alterar-a-Data-Default-de-contabiliza%C3%A7%C3%A3o-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como alterar a data default de contabilização do Movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para isto, acesse Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | localize o Tipo de Movimento e avance até a etapa Mov - Datas 1/2 . Altere a opção Data do Movimento Default para a data que deseja carregar na contabilidade.
- Menu, etapa ou parametro citado: A opção Data do Movimento Default também define a data usada para afetar estoque. A data de contabilização também poderá ser alterada pontualmente acessando a aba Lançamentos | Contábil do movimento, se a contabilização estiver definida como Edita.

#### [283] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Data de Movimentação do Estoque deve ser maior que a Data de Fechamento do mesmo
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Data-de-Movimenta%C3%A7%C3%A3o-do-Estoque-deve-ser-maior-que-a-Data-de-Fechamento-do-mesmo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005991-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Data-de-Movimenta%C3%A7%C3%A3o-do-Estoque-deve-ser-maior-que-a-Data-de-Fechamento-do-mesmo)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao incluir um Movimento que afeta estoque é retornado o erro: Data de Movimentação do Estoque deve ser maior que a Data de Fechamento do mesmo.
- Menu, etapa ou parametro citado: Ao incluir um Movimento que afeta estoque é retornado o erro: Data de Movimentação do Estoque deve ser maior que a Data de Fechamento do mesmo.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [284] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MOV - Lote de produto não é exibido na inclusão do item de movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 23 de setembro de 2021 às 14:19
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023999091-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Lote-de-produto-n%C3%A3o-%C3%A9-exibido-na-inclus%C3%A3o-do-item-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023999091-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MOV-Lote-de-produto-n%C3%A3o-%C3%A9-exibido-na-inclus%C3%A3o-do-item-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Ao incluir um movimento parametrizado para consistir lotes, os lotes do produto não são exibidos durante a inclusão de item de movimento.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 11.
- Menu, etapa ou parametro citado: Solução 1 - Ao incluir um movimento parametrizado para Baixar/Diminuir estoque dos produtos etapa Estoque - Estoque 1/2 , o sistema irá apresentar apenas o(s) lote(s) do produto quando estes possuírem saldo em estoque para o Saldo que o movimento estiver parametrizado para afetar.

#### [285] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento/Item Inconsistente
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023744832-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-Item-Inconsistente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023744832-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-Item-Inconsistente)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao salvar um movimento sistema apresenta a mensagem Movimento Inconsistente : \[TEXTO\ MOTIVO\] ou Item Inconsistente: \[TEXTO\ MOTIVO\]
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A mensagem ocorre pois nos parâmetros do Tipo de Movimento, etapa Mov - Outros Dados possui informação no campo Fórmula de Consistência para o erro que indique ser no movimento:

#### [286] MOV0002 Formula de Consistencia
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/MOV0002_Formula_de_Consistencia](https://tdn.totvs.com/display/public/LRM/MOV0002_Formula_de_Consistencia)
- Classificacao inferida: movimento
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [287] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Executando log de evento contábil - Diferença entre débito e crédito
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 9 de maio de 2022 às 11:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023744592-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Executando-log-de-evento-cont%C3%A1bil-Diferen%C3%A7a-entre-d%C3%A9bito-e-cr%C3%A9dito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023744592-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Executando-log-de-evento-cont%C3%A1bil-Diferen%C3%A7a-entre-d%C3%A9bito-e-cr%C3%A9dito)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:06:00 min
- Evidencia inicial: Dúvida Ao salvar um movimento o sistema apresenta a mensagem: Diferença na contabilização do movimento O Lançamento não pode ser salvo pois a soma das partidas de débito é diferente da soma das partidas de crédito.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [288] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo Identificador de Movimento Impresso não é alterado após imprimir o relatório de movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de janeiro de 2022 às 09:08
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023631691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-Identificador-de-Movimento-Impresso-n%C3%A3o-%C3%A9-alterado-ap%C3%B3s-imprimir-o-relat%C3%B3rio-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360023631691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-Identificador-de-Movimento-Impresso-n%C3%A3o-%C3%A9-alterado-ap%C3%B3s-imprimir-o-relat%C3%B3rio-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Porque o campo Identificador de Movimento Impresso não é alterado após imprimir o relatório de movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [289] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - IRRF apresentado na tela de tributos do lançamento financeiro
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 18 de janeiro de 2024 às 16:32
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022995651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-IRRF-apresentado-na-tela-de-tributos-do-lan%C3%A7amento-financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022995651-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-IRRF-apresentado-na-tela-de-tributos-do-lan%C3%A7amento-financeiro)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Ao incluir um movimento com integração financeira, o lançamento gerado apresenta o IRRF na tela de Tributos Valores das Retenções
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Ao incluir um movimento com integração financeira, o lançamento gerado apresenta o IRRF na tela de Tributos Valores das Retenções
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: \- O cadastro do cliente/fornecedor estiver configurado como órgão publico Federal ( Aba Outros | Tributos );

#### [290] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Menu "Excluir Contabilidade" não é exibido
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 12 de agosto de 2022 às 17:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022203012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Menu-Excluir-Contabilidade-n%C3%A3o-%C3%A9-exibido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022203012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Menu-Excluir-Contabilidade-n%C3%A3o-%C3%A9-exibido)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao pressionar o botão Processos existente na tela de movimentos o menu Excluir Contabilidade não é exibido.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao pressionar o botão Processos existente na tela de movimentos o menu Excluir Contabilidade não é exibido.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar os parâmetros do tipo de movimento;

#### [291] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 19 de fevereiro de 2025 às 09:41
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022270871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Rateio-por-Centro-de-Custo-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-%C3%A9-obrigat%C3%B3rio-para-o-lan%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022270871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-Rateio-por-Centro-de-Custo-Natureza-Or%C3%A7ament%C3%A1ria-Financeira-%C3%A9-obrigat%C3%B3rio-para-o-lan%C3%A7amento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura : 00:04:00 min
- Evidencia inicial: Ocorrência Ao incluir um movimento que possui integração com o lançamento financeiro o sistema emite a mensagem: " O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento"
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência Ao incluir um movimento que possui integração com o lançamento financeiro o sistema emite a mensagem: " O Rateio por Centro de Custo/Natureza Orçamentária Financeira é obrigatório para o lançamento"
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O módulo financeiro está configurado para utilizar rateio por centro de custo e/ou natureza orçamentária financeira Ambiente Parâmetros Gestão de estoque Integrações Financeira Contas a pagar // Contas a receber Etapa Recursos adicionais mas o movimento não possui os campos necessários preenchidos:

#### [292] Parâmetro de Rateio de Centro de Custo e Departamento
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938848](https://tdn.totvs.com/pages/releaseview.action?pageId=423938848)
- Classificacao inferida: parametrizacao, estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tipo de Rateio: Indique se o rateio será do tipo percentual ou valor.
- Evidencia inicial: Rateio do Movimento: Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.
- Evidencia inicial: Rateio do Item: Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.
- Menu, etapa ou parametro citado: - Parametrizando centro de custo e departamento no item como edita, podemos copiá-los de uma solicitação para a ordem de compra via cotação. Quando agrupamos itens iguais, estes deverão ser somados para o rateio. Caso um item tenha rateio e outro não, o valor total do item deverá ser rateado na ordem de compra. Gerando itens em ordens de compra já existentes, estes deverão ser rateados separadamente para cada ordem de compra específica. É necessário também que em opções/parâmetros/tipo de movimento/itens/preço, que o preço esteja como edita, tanto para a solicitação como ordem de compra.

#### [293] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - O lançamento não pode ser cancelado/alterado pois não é o último gerador de IRRF do período
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016721011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-lan%C3%A7amento-n%C3%A3o-pode-ser-cancelado-alterado-pois-n%C3%A3o-%C3%A9-o-%C3%BAltimo-gerador-de-IRRF-do-per%C3%ADodo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016721011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-O-lan%C3%A7amento-n%C3%A3o-pode-ser-cancelado-alterado-pois-n%C3%A3o-%C3%A9-o-%C3%BAltimo-gerador-de-IRRF-do-per%C3%ADodo)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura : 00:03:00 min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar editar/excluir/cancelar um movimento é apresentada a mensagem: O Lançamento não pode ser cancelado, pois não é o último gerador de IRRF do período.
- Evidencia inicial: O Último lançamento gerador de IRRF do período é o
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar editar/excluir/cancelar um movimento é apresentada a mensagem: O Lançamento não pode ser cancelado, pois não é o último gerador de IRRF do período.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - BackOffice Linha RM - Gestão de Estoque, Compras e Faturamento – A partir da versão 11.
- Menu, etapa ou parametro citado: Selecione o movimento desejado, acesse Processos | Reabrir Financeiro:

#### [294] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como utilizar Tabela de Preço
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 20 de outubro de 2022 às 23:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015272392-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-utilizar-Tabela-de-Pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360015272392-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-utilizar-Tabela-de-Pre%C3%A7o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como utilizar o recurso de Tabela de Preços?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O cadastro das tabelas deverá ser feito através do Menu Cadastros | Mais | Tabelas Auxiliares | Tabela de preço:
- Menu, etapa ou parametro citado: Ou seja, se for cadastrado uma tabela de preço, onde em Anexos | Estado for informado o Estado PR, sempre que for inserido um movimento que possua um Cli/For do estado PR os preços cadastrados para os produtos desta tabela serão acatados para os produtos participantes dela. Para que o estado MG possua outra lista de preços, se faz necessário cadastrar uma nova tabela de preços onde em Anexos - Estado seja informado apenas o Estado MG e assim ao incluir um movimento que possua um Cli/For do estado MG os preços dos produtos obedecerão esta tabela de preço e não a primeira cadastrada.

#### [295] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Utilização de natureza fiscal quando houver dados de Coleta e Entrega
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 30 de novembro de 2021 às 15:20
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360006655752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-natureza-fiscal-quando-houver-dados-de-Coleta-e-Entrega](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360006655752-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-natureza-fiscal-quando-houver-dados-de-Coleta-e-Entrega)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, fiscal, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Qual natureza fiscal ( CFOP ) utilizar em movimentos de entrada quando o mesmo estiver parametrizado para cadastrar CTRC/CT-e (parâmetros do tipo de movimento, etapa Fis - Conhecimento de Transporte )?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12
- Menu, etapa ou parametro citado: Dúvida Qual natureza fiscal ( CFOP ) utilizar em movimentos de entrada quando o mesmo estiver parametrizado para cadastrar CTRC/CT-e (parâmetros do tipo de movimento, etapa Fis - Conhecimento de Transporte )?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12
- Menu, etapa ou parametro citado: Solução Para movimentações de entrada de CT-e/CTRC, será habilitado a aba CTRC | Coleta e Entrega e o sistema fará as seguintes validações para seleção de natureza:

#### [296] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como solucionar o erro Movimento teve seus lançamentos contábeis exportados!
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de junho de 2023 às 17:45
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005113692-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Movimento-teve-seus-lan%C3%A7amentos-cont%C3%A1beis-exportados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005113692-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-solucionar-o-erro-Movimento-teve-seus-lan%C3%A7amentos-cont%C3%A1beis-exportados)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência Ao tentar realizar o cancelamento ou exclusão de um movimento é apresentada a mensagem:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: 1\. Selecionar o movimento | Processos | Estornar Contabilidade ;
- Menu, etapa ou parametro citado: 2\. Selecionar o movimento | Processos | Solicitar Exclusão de Toda Operação Contábil ;

#### [297] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Campo complementar na visão de movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 30 de novembro de 2021 às 12:02
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005049191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-complementar-na-vis%C3%A3o-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005049191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Campo-complementar-na-vis%C3%A3o-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Após migração para o novo modelo de BackOffice, os campos complementares de Movimento não são mais apresentados na visão de Movimento. Para que isso seja possível, é necessário a criação de uma Fórmula visual.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.40.
- Menu, etapa ou parametro citado: Dúvida Após migração para o novo modelo de BackOffice, os campos complementares de Movimento não são mais apresentados na visão de Movimento. Para que isso seja possível, é necessário a criação de uma Fórmula visual.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.40.
- Menu, etapa ou parametro citado: Acessar o menu | Utilitários | Consulta SQL | Incluir | e cadastrar a Consulta SQL que será considerada quando a Fórmula visual for executada.
- Artefato tecnico citado: SELECT REAL

#### [298] Criar coluna de campo complementar na visão de movimentos - TOTVS Gestão de Estoque, Compras e Faturamento
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=196811606](https://tdn.totvs.com/pages/releaseview.action?pageId=196811606)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Linha
- Evidencia inicial: RM
- Evidencia inicial: Produto
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque, Compra e Faturamento
- Menu, etapa ou parametro citado: Fórmula visual
- Menu, etapa ou parametro citado: \- Acessar o menu | Utilitários | Consulta SQL | Incluir | e cadastrar a Consulta SQL que será considerada quando a Fórmula visual for executada:
- Artefato tecnico citado: SELECT REAL

#### [299] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Natureza de Operação não é exibida durante a inclusão do movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 20 de dezembro de 2021 às 10:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003531771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Natureza-de-Opera%C3%A7%C3%A3o-n%C3%A3o-%C3%A9-exibida-durante-a-inclus%C3%A3o-do-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003531771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Natureza-de-Opera%C3%A7%C3%A3o-n%C3%A3o-%C3%A9-exibida-durante-a-inclus%C3%A3o-do-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Durante a inclusão de um Movimento a CFOP determinada para a operação não é apresentada para ser selecionada no lookup do campo Cod. Natureza de Operação do movimento ou item. Podem ocorrer situações onde nenhuma CFOP é exibida.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 1.1 - Menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Fiscal | Apuração de Tributos | Regras Apur. ICMS | Lançamento Fiscal 5/7 | Campo Tipo de Seleção de Natureza:

#### [300] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Cancelar ou Excluir Movimento - Pedido já Recebido!
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 19 de junho de 2024 às 18:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003397211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Cancelar-ou-Excluir-Movimento-Pedido-j%C3%A1-Recebido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003397211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Cancelar-ou-Excluir-Movimento-Pedido-j%C3%A1-Recebido)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar Excluir ou Cancelar um movimento apresenta a mensagem de erro " Pedido já recebido!" e não é possível concluir o processo.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Processo-Concluir-Pedido

#### [301] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Situação Tributária de PIS e COFINS
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 30 de setembro de 2021 às 09:55
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003026972-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Situa%C3%A7%C3%A3o-Tribut%C3%A1ria-de-PIS-e-COFINS](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003026972-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Situa%C3%A7%C3%A3o-Tribut%C3%A1ria-de-PIS-e-COFINS)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Qual a regra utilizada pelo sistema para preenchimento do campo Situação Tributária na linha do tributo no Movimento/Item?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1 . Natureza de Operação: Menu Cadastros | Natureza Fiscal | Anexos | Tributos da Natureza:
- Menu, etapa ou parametro citado: 2. Produto : Menu Cadastros | Produtos e Serviços (Este nome é definido pela empresa nos parâmetros de produto, por tanto, poderá ser outro) \- Anexos | Tributos do Produto:

#### [302] Cross Segmentos - TOTVS BackOffice - Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - RM - MOV - Movimento com status Em Faturamento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 17 de maio de 2022 às 14:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000641587-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RM-MOV-Movimento-com-status-Em-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000641587-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RM-MOV-Movimento-com-status-Em-Faturamento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência Ao faturar movimento sistema apresenta a seguinte mensagem:
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar menu Utilitários | Corrigir Movimentos | Status em Faturamento
- Artefato tecnico citado: Faturamento de movimento foi interrompido (queda de energia, queda do serviço de host, etc), onde o movimento fica com status Em Faturamento , não permitindo assim seu Faturamento/Recebimento.

#### [303] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor do Documento considerando somente o valor bruto do primeiro item
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 13 de dezembro de 2021 às 14:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000605868-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-do-Documento-considerando-somente-o-valor-bruto-do-primeiro-item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000605868-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-do-Documento-considerando-somente-o-valor-bruto-do-primeiro-item)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:06:00min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao criar um movimento com integração financeira o valor original do lançamento financeiro está considerando apenas o valor do primeiro item de movimento.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao criar um movimento com integração financeira o valor original do lançamento financeiro está considerando apenas o valor do primeiro item de movimento.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [304] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento fora das datas parametrizadas de movimentação!
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000591688-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-fora-das-datas-parametrizadas-de-movimenta%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000591688-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-fora-das-datas-parametrizadas-de-movimenta%C3%A7%C3%A3o)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar incluir ou alterar algum movimento é apresentado a mensagem: Movimento fora das datas parametrizadas de movimentação!
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 2. Acesse o menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Parâmetros Gerais Definições Gerais Definições Gerais 2/3 e verifique qual o Período de Movimentação definido no campos Início e Fim:
- Menu, etapa ou parametro citado: 3. Nos parâmetros do tipo de movimento etapa Mov - Datas 1/2 , verificar a data default do campo Data do Movimento Default . Caso não esteja informada, defina uma data para ser considerada no período de movimentação. Lembrando que a data escolhida também deverá estar habilitada para ser utilizada no tipo de movimento, onde sua edição deverá ser diferente de Não Edita.

#### [305] Data do movimento está fora do exercício fiscal
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813339](https://tdn.totvs.com/pages/releaseview.action?pageId=4813339)
- Classificacao inferida: movimento, fiscal
- Gatilhos de busca observados: movimento, fiscal
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Data do movimento está fora do exercício fiscal
- Evidencia inicial: Produto:
- Evidencia inicial: RM
- Menu, etapa ou parametro citado: Ambiente:
- Menu, etapa ou parametro citado: 2. Acessar o Menu Cadastros / Tabelas de Tributação / Exercício Fiscal / escolher o exercício fiscal corrente e verificar qual o período do exercício definido nos campos “Data Inicial” e “Data Final”.
- Menu, etapa ou parametro citado: 3. Nos parâmetros do tipo de movimento e na etapa Movimento – Datas e verificar a data default do campo “Data do Movimento Default”, caso não esteja informada, defina uma data para ser considerada no período de movimentação. Lembrando que a data escolhida também deverá estar habilitada para ser utilizada no tipo de movimento, onde sua edição deverá ser diferente de “Não Edita”. Exemplo: A data default do movimento é a Data Extra1. No qual a Data Extra1 também deverá ser habilitada e sua edição deverá ser “Edita”, Edita Obrigatoriamente“ ou Mostra”, conforme conveniência do cliente.

#### [306] RMCTB00001 Alterações do Período Contábil e do Usuário
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=270909883](https://tdn.totvs.com/pages/releaseview.action?pageId=270909883)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [307] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Local de Estoque não é apresentado no Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Local-de-Estoque-n%C3%A3o-%C3%A9-apresentado-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Local-de-Estoque-n%C3%A3o-%C3%A9-apresentado-no-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Local de Estoque não é apresentado na inclusão do movimento.
- Menu, etapa ou parametro citado: Local de Estoque não é apresentado na inclusão do movimento.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: 4. O campo local ( TMOV.CODLOC ) não é apresentado na movimento.
- Artefato tecnico citado: 4. Quando o parâmetro Usar Local Único está parametrizado, o campo Local de Estoque (TMOV.CODLOC) não será apresentado no movimento;

#### [308] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturar/Receber Movimento Via WebService
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de dezembro de 2021 às 09:44
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345707-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturar-Receber-Movimento-Via-WebService](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345707-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturar-Receber-Movimento-Via-WebService)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Este artigo tem por finalidade ensinar como realizar o Faturamento/Recebimento de movimento via WebService. Será utilizado o aplicativo SoapUI para consumo do WebService do RM.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.80.
- Menu, etapa ou parametro citado: https://tdn.totvs.com/display/public/LRM/WSN0002 Faturar Receber Movimento Via WebService PassoaPasso--1101890723 para conferir os demais processos a serem realizados.
- Artefato tecnico citado: XML do Processo

#### [309] Manual Importação/Exportação de Arquivos Texto
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=185748810](https://tdn.totvs.com/pages/releaseview.action?pageId=185748810)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: /download/attachments/185748810/Manual%20de%20Importa%C3%A7%C3%A3o Exporta%C3%A7%C3%A3o%20de%20Arquivos%20Texto%20%282%29.pdf?version=1&modificationDate=1427312090000&api=v2
- Evidencia inicial: ---

#### [310] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Valor inválido para o Preço Unitário
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 3 de março de 2022 às 20:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000344887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-Pre%C3%A7o-Unit%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000344887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Valor-inv%C3%A1lido-para-o-Pre%C3%A7o-Unit%C3%A1rio)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao tentar gerar o(s) acerto(s) e encerrar o inventário é apresentado o erro abaixo impedindo a geração do movimento:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.82.

#### [311] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Mov - Violação FXLANOLDPRIM na inclusão de movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 18 de outubro de 2021 às 14:35
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115012431627-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Viola%C3%A7%C3%A3o-FXLANOLDPRIM-na-inclus%C3%A3o-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115012431627-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Viola%C3%A7%C3%A3o-FXLANOLDPRIM-na-inclus%C3%A3o-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00 min Ocorrência
- Evidencia inicial: Devido ao índice único FXLANOLDPRIM da tabela de lançamentos, não foi possível realizar a inserção pois já existe na base de dados o lançamento \[IDLAN\] com os mesmos dados para os campos abaixo, favor verificar:
- Evidencia inicial: Num. Documento: \[Número do movimento\]
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.8X.
- Menu, etapa ou parametro citado: Opção 2 - Neste caso, será necessário alterar o tamanho do documento nos parâmetros.

#### [312] TOTVS Identity
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://totvs.fluigidentity.com/ui/login-saml?forward=%2FSPInitPost%2FreceiveSSORequest%2Fzf0y84vo717g8hjx%2F30940ee9cb854dd6bc011ff9a90029f3%3FSAMLRequest%3DpVJNj9owEP0rke%252BJnQBLYhEkPlQViZZow%252B6hN%252BNMwK1jZz0OLPvrG2BboVbdS6%252FP8%252BZ9eCYoGt3yWecP5hFeOkAfvDbaIL885KRzhluBCrkRDSD3kpezL2ueRIwLRHBeWUPuKO3HnNZZb6XVJJj9Yi%252Bswa4BV4I7KglPj%252BucHLxvkVPqrT9iiCKS2nZVrYUDISUgRtI2VFYmlHtFbxCVQuudkD9IsFrmxNQ4PHViM3g2s%252FiUrtOn89vmsNgM5ovdPDmLFxIs%252B7TKiIuJPySjWndqryowXvnzTezioO0z07JYGeULi546kKCOUJab9%252FLoW83O6fBox%252FF4nx6%252Bv9IBy4YMIJO7dDSsqoedZHFc15nIGEuyetC7RexgZdAL43OSsOQhZEmYjLfxiDPGkzTKRoNvJCjeu5srUymz%252F7jo3W0I%252BefttgiLTbklwTM4vGbtB8h0cvkufhV30%252F8qfELvV01uJ%252FW1t7RaFlYreQ5mWtvTot%252FlISfedUCCT9Y1wv87RBzFV0RVYX0d5Z3BFqSqFVS9e%252Fq3zG%252Fw%252FpynPwE%253D%26RelayState%3Dcdc7cd48811f0c1792604aeaa6a805b001ae6e0e46fac4916784242ad394fc9c.JTdCJTIyaWF0JTIyJTNBMTc3MjIwNDQyOSUyQyUyMmF1dGhEb21haW4lMjIlM0ElMjJ0b3R2cy1zYS5jbG91ZGZsYXJlYWNjZXNzLmNvbSUyMiUyQyUyMmhvc3RuYW1lJTIyJTNBJTIydGRuLnRvdHZzLmNvbSUyMiUyQyUyMnJlZGlyZWN0VVJMJTIyJTNBJTIyJTJGbG9naW4uYWN0aW9uJTNGb3NfZGVzdGluYXRpb24lM0QlMjUyRnBhZ2VzJTI1MkZ2aWV3cGFnZS5hY3Rpb24lMjUzRnNwYWNlS2V5JTI1M0RybSUyNTI2cG9zdGluZ0RheSUyNTNEMjAxMiUyNTI1MkYxMiUyNTI1MkY2JTI1MjZ0aXRsZSUyNTNERElDQVMlMjUyQi0lMjUyQkZYTEFOT0xEUFJJTSUyNnBlcm1pc3Npb25WaW9sYXRpb24lM0R0cnVlJTIyJTJDJTIyYXVkJTIyJTNBJTIyNmJlYWI0ZjhjMjNkOTBjZDZjZTk4YTdhZDE0NGMzYjU1NmI3ZTVmNzA0MmJlYWYwYTk4NmNkOTUwNmJiMjAwNiUyMiUyQyUyMmlzU2FtZVNpdGVOb25lQ29tcGF0aWJsZSUyMiUzQXRydWUlMkMlMjJpc0lEUFRlc3QlMjIlM0FmYWxzZSUyQyUyMmlzUmVmcmVzaCUyMiUzQWZhbHNlJTJDJTIybm9uY2UlMjIlM0ElMjJuQ3NRRnk4R1NkWmtvMm9NVSUyMiUyQyUyMmlkcElkJTIyJTNBJTIyZDhiOGJjNjMtYjcwNC00M2I4LWIzNWMtMTllYWViZDA4MzhjJTIyJTJDJTIyc2VydmljZV90b2tlbl9pZCUyMiUzQSUyMiUyMiUyQyUyMnNlcnZpY2VfdG9rZW5fc3RhdHVzJTIyJTNBZmFsc2UlMkMlMjJhdXRoX3N0YXR1cyUyMiUzQSUyMk5PTkUlMjIlMkMlMjJpc193YXJwJTIyJTNBZmFsc2UlMkMlMjJpc19nYXRld2F5JTIyJTNBZmFsc2UlMkMlMjJtdGxzX2F1dGglMjIlM0ElN0IlMjJjZXJ0X2lzc3Vlcl9za2klMjIlM0ElMjIlMjIlMkMlMjJjZXJ0X3ByZXNlbnRlZCUyMiUzQWZhbHNlJTJDJTIyY2VydF9zZXJpYWwlMjIlM0ElMjIlMjIlMkMlMjJjZXJ0X2lzc3Vlcl9kbiUyMiUzQSUyMiUyMiUyQyUyMmF1dGhfc3RhdHVzJTIyJTNBJTIyTk9ORSUyMiU3RCUyQyUyMmFwcFNlc3Npb25IYXNoJTIyJTNBJTIyYTkzZjYxZjhjMWIyYjQzMmQzMWRhYmQwZDU0YjA1ODVkZDgzMWZkMzgwMzBiODQ3YzdhYzZkYTNjZWEzNmU4YyUyMiUyQyUyMnNhbWxJZCUyMiUzQSUyMm5mczR3dWFPM1ZuQTF3OEw4VXl6T2hDTzNCQ2JCMnlhcSUyMiUyQyUyMnJlcGxheUlkJTIyJTNBJTIyZWQ4YTAzYmIzNTYyMTE2NWJmYWRiNGFmZDJkZmJkMjMyZDIwMzY2ZWY0NmY2MTVjM2JlMjQ2NGIxNDJiYjE3NiUyMiU3RA%253D%253D](https://totvs.fluigidentity.com/ui/login-saml?forward=%2FSPInitPost%2FreceiveSSORequest%2Fzf0y84vo717g8hjx%2F30940ee9cb854dd6bc011ff9a90029f3%3FSAMLRequest%3DpVJNj9owEP0rke%252BJnQBLYhEkPlQViZZow%252B6hN%252BNMwK1jZz0OLPvrG2BboVbdS6%252FP8%252BZ9eCYoGt3yWecP5hFeOkAfvDbaIL885KRzhluBCrkRDSD3kpezL2ueRIwLRHBeWUPuKO3HnNZZb6XVJJj9Yi%252Bswa4BV4I7KglPj%252BucHLxvkVPqrT9iiCKS2nZVrYUDISUgRtI2VFYmlHtFbxCVQuudkD9IsFrmxNQ4PHViM3g2s%252FiUrtOn89vmsNgM5ovdPDmLFxIs%252B7TKiIuJPySjWndqryowXvnzTezioO0z07JYGeULi546kKCOUJab9%252FLoW83O6fBox%252FF4nx6%252Bv9IBy4YMIJO7dDSsqoedZHFc15nIGEuyetC7RexgZdAL43OSsOQhZEmYjLfxiDPGkzTKRoNvJCjeu5srUymz%252F7jo3W0I%252BefttgiLTbklwTM4vGbtB8h0cvkufhV30%252F8qfELvV01uJ%252FW1t7RaFlYreQ5mWtvTot%252FlISfedUCCT9Y1wv87RBzFV0RVYX0d5Z3BFqSqFVS9e%252Fq3zG%252Fw%252FpynPwE%253D%26RelayState%3Dcdc7cd48811f0c1792604aeaa6a805b001ae6e0e46fac4916784242ad394fc9c.JTdCJTIyaWF0JTIyJTNBMTc3MjIwNDQyOSUyQyUyMmF1dGhEb21haW4lMjIlM0ElMjJ0b3R2cy1zYS5jbG91ZGZsYXJlYWNjZXNzLmNvbSUyMiUyQyUyMmhvc3RuYW1lJTIyJTNBJTIydGRuLnRvdHZzLmNvbSUyMiUyQyUyMnJlZGlyZWN0VVJMJTIyJTNBJTIyJTJGbG9naW4uYWN0aW9uJTNGb3NfZGVzdGluYXRpb24lM0QlMjUyRnBhZ2VzJTI1MkZ2aWV3cGFnZS5hY3Rpb24lMjUzRnNwYWNlS2V5JTI1M0RybSUyNTI2cG9zdGluZ0RheSUyNTNEMjAxMiUyNTI1MkYxMiUyNTI1MkY2JTI1MjZ0aXRsZSUyNTNERElDQVMlMjUyQi0lMjUyQkZYTEFOT0xEUFJJTSUyNnBlcm1pc3Npb25WaW9sYXRpb24lM0R0cnVlJTIyJTJDJTIyYXVkJTIyJTNBJTIyNmJlYWI0ZjhjMjNkOTBjZDZjZTk4YTdhZDE0NGMzYjU1NmI3ZTVmNzA0MmJlYWYwYTk4NmNkOTUwNmJiMjAwNiUyMiUyQyUyMmlzU2FtZVNpdGVOb25lQ29tcGF0aWJsZSUyMiUzQXRydWUlMkMlMjJpc0lEUFRlc3QlMjIlM0FmYWxzZSUyQyUyMmlzUmVmcmVzaCUyMiUzQWZhbHNlJTJDJTIybm9uY2UlMjIlM0ElMjJuQ3NRRnk4R1NkWmtvMm9NVSUyMiUyQyUyMmlkcElkJTIyJTNBJTIyZDhiOGJjNjMtYjcwNC00M2I4LWIzNWMtMTllYWViZDA4MzhjJTIyJTJDJTIyc2VydmljZV90b2tlbl9pZCUyMiUzQSUyMiUyMiUyQyUyMnNlcnZpY2VfdG9rZW5fc3RhdHVzJTIyJTNBZmFsc2UlMkMlMjJhdXRoX3N0YXR1cyUyMiUzQSUyMk5PTkUlMjIlMkMlMjJpc193YXJwJTIyJTNBZmFsc2UlMkMlMjJpc19nYXRld2F5JTIyJTNBZmFsc2UlMkMlMjJtdGxzX2F1dGglMjIlM0ElN0IlMjJjZXJ0X2lzc3Vlcl9za2klMjIlM0ElMjIlMjIlMkMlMjJjZXJ0X3ByZXNlbnRlZCUyMiUzQWZhbHNlJTJDJTIyY2VydF9zZXJpYWwlMjIlM0ElMjIlMjIlMkMlMjJjZXJ0X2lzc3Vlcl9kbiUyMiUzQSUyMiUyMiUyQyUyMmF1dGhfc3RhdHVzJTIyJTNBJTIyTk9ORSUyMiU3RCUyQyUyMmFwcFNlc3Npb25IYXNoJTIyJTNBJTIyYTkzZjYxZjhjMWIyYjQzMmQzMWRhYmQwZDU0YjA1ODVkZDgzMWZkMzgwMzBiODQ3YzdhYzZkYTNjZWEzNmU4YyUyMiUyQyUyMnNhbWxJZCUyMiUzQSUyMm5mczR3dWFPM1ZuQTF3OEw4VXl6T2hDTzNCQ2JCMnlhcSUyMiUyQyUyMnJlcGxheUlkJTIyJTNBJTIyZWQ4YTAzYmIzNTYyMTE2NWJmYWRiNGFmZDJkZmJkMjMyZDIwMzY2ZWY0NmY2MTVjM2JlMjQ2NGIxNDJiYjE3NiUyMiU3RA%253D%253D)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: [Conteúdo não encontrado ou vazio]
- Evidencia inicial: ---

#### [313] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação de Cadastro com Campos Complementares via Conceito
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 15 de julho de 2025 às 16:42
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686608-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-de-Cadastro-com-Campos-Complementares-via-Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686608-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-de-Cadastro-com-Campos-Complementares-via-Conceito)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Este documento tem por finalidade ensinar os usuários a importar os campos complementares existentes na base de dados.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.4.
- Artefato tecnico citado: Com a tela do layout aberta do lado direito (1), selecionar a aba de contexto (2), localize a tabela TMOV (3), e abra a

#### [314] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Importação/Exportação de movimentos via Conceito/Layout
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 24 de abril de 2025 às 10:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008531887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-movimentos-via-Conceito-Layout](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008531887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Importa%C3%A7%C3%A3o-Exporta%C3%A7%C3%A3o-de-movimentos-via-Conceito-Layout)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Auxilio na Importação de Movimento via Conceito.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A importação de arquivos txt evoluiu a partir da versão 12.1 sendo a mesma agora executada via Conceito. Todo processo é feito no aplicativo de Integração .

#### [315] Manual Importação/Exportação de Arquivos Texto
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=185748810](https://tdn.totvs.com/pages/releaseview.action?pageId=185748810)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: /download/attachments/185748810/Manual%20de%20Importa%C3%A7%C3%A3o Exporta%C3%A7%C3%A3o%20de%20Arquivos%20Texto%20%282%29.pdf?version=1&modificationDate=1427312090000&api=v2
- Evidencia inicial: ---

#### [316] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Chave Duplicada TXMOVCFX
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 22 de abril de 2025 às 12:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008352887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Chave-Duplicada-TXMOVCFX](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008352887-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Chave-Duplicada-TXMOVCFX)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 06:00 min
- Evidencia inicial: Ocorrência:
- Evidencia inicial: Ao tentar incluir um movimento é apresentada uma das seguintes mensagens:
- Menu, etapa ou parametro citado: Já Existe Nota do Emitente com este Número e Série. Verifique os parâmetros numeração desta série.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: - SQL - SP\ Help TMOV
- Artefato tecnico citado: - ORACLE - select index\ name from user\ indexes where table\ name = 'TMOV';

#### [317] MOV0009 Movimento Duplicado na Base TXMOVCFX
- Secao de indice: Movimento
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/MOV0009_Movimento_Duplicado_na_Base_TXMOVCFX](https://tdn.totvs.com/display/public/LRM/MOV0009_Movimento_Duplicado_na_Base_TXMOVCFX)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [318] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Produto Não Permitido para o Tipo de Movimento
- Secao de indice: Movimento
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
- Data: 14 de abril de 2025 às 12:48
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008502908-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Produto-N%C3%A3o-Permitido-para-o-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008502908-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Produto-N%C3%A3o-Permitido-para-o-Tipo-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao salvar um movimento a mensagem abaixo é apresentada impedindo o processo de inclusão do movimento: Item Produto do Movimento: Produto Não permitido para o tipo de movimento.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Acesse o menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Selecione a classificação do seu movimento etapa Item - Identificação 1/2 , campo Tipo dos Itens:

### Fonte: Parametrização.md (144 artigos capturados)

#### [319] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como gerar IRRF PJ automático na primeira parcela
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 9 de abril de 2025 às 16:04
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008529847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-gerar-IRRF-PJ-autom%C3%A1tico-na-primeira-parcela](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008529847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-gerar-IRRF-PJ-autom%C3%A1tico-na-primeira-parcela)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para gerar IRRF Automático para o TOTVS Gestão Financeira na primeira parcela quando o movimento deverá gerar parcelamento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1. Acesse o menu Ambiente - Parâmetros - TOTVS Gestão Financeira - Contas a Pagar;

#### [320] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como utilizar Local de Estoque por Item
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 22 de abril de 2025 às 12:19
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/31501428252951-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-utilizar-Local-de-Estoque-por-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/31501428252951-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-utilizar-Local-de-Estoque-por-Item)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o movimento para utilizar Local de Estoque Por Item?
- Menu, etapa ou parametro citado: Como parametrizar o movimento para utilizar Local de Estoque Por Item?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

#### [321] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como gravar Vídeos para o suporte?
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 9 de setembro de 2024 às 17:29
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/26251413600279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-gravar-V%C3%ADdeos-para-o-suporte](https://centraldeatendimento.totvs.com/hc/pt-br/articles/26251413600279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-gravar-V%C3%ADdeos-para-o-suporte)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como gravar vídeos para enviar ao suporte?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 4\. Configure as informações básicas para gravação do vídeo como o tamanho da tela, que também poderá ser ajustado manualmente. Para gravar da tela inteira, clique em Tamanho | Tela Cheia. Caso queira configurar as preferências do aplicativo, clique em Preferências.

#### [322] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Etapas referente aos parâmetros do movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 11 de setembro de 2024 às 15:12
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/26030252154391-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Etapas-referente-aos-par%C3%A2metros-do-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/26030252154391-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Etapas-referente-aos-par%C3%A2metros-do-movimento)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Qual a documentação referente a cada etapa que possui nos parâmetros do tipo de movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Dúvida Qual a documentação referente a cada etapa que possui nos parâmetros do tipo de movimento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Solução Os parâmetros do movimento são acessados pelo menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento:
- Artefato tecnico citado: - Importação/Envio de Arquivo XML: Nessa etapa você parametriza se o movimento utiliza integração de XML ou não:

#### [323] Identificação
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=461918521](https://tdn.totvs.com/pages/releaseview.action?pageId=461918521)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Código: Neste campo, informe o código do tipo de movimento, este deverá ser de acordo com a máscara padrão dos tipos ( . . ), lembrando que os movimentos do grupo do tipo 1.1 são ordens de compra, e do tipo 1.2 são compras, e o movimento do grupo 1.1 pode gerar um movimento no grupo 1.2. Os movimentos do grupo do tipo 2.1 são pedidos de venda, do tipo 2.2 são vendas, e do tipo 3.1 de transferência, o movimento do grupo 2.1 pode gerar um movimento no grupo 2.2 ou do grupo 3.1.
- Evidencia inicial: Classificação: Esse campo tem como objetivo o usuário poder classificar o tipo de movimento. Essas classificações serão valores fixos e poderá ser um dos seguintes abaixo:
- Evidencia inicial: - Ajuste de Estoque;
- Menu, etapa ou parametro citado: Código: Neste campo, informe o código do tipo de movimento, este deverá ser de acordo com a máscara padrão dos tipos ( . . ), lembrando que os movimentos do grupo do tipo 1.1 são ordens de compra, e do tipo 1.2 são compras, e o movimento do grupo 1.1 pode gerar um movimento no grupo 1.2. Os movimentos do grupo do tipo 2.1 são pedidos de venda, do tipo 2.2 são vendas, e do tipo 3.1 de transferência, o movimento do grupo 2.1 pode gerar um movimento no grupo 2.2 ou do grupo 3.1.
- Menu, etapa ou parametro citado: - Ajuste de Estoque;
- Menu, etapa ou parametro citado: - Baixa de Estoque;

#### [324] Emitente e Destinatário
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938089](https://tdn.totvs.com/pages/releaseview.action?pageId=423938089)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Emitente: Informe qual será o emitente dos movimentos deste tipo, as opções são:
- Evidencia inicial: - Empresa: se o emitente for sua empresa.
- Evidencia inicial: - Cliente: se for o cliente.
- Menu, etapa ou parametro citado: Edição da Filial de Emissão: Se a filial do movimento é "Edita" ou "Mostra". Se a filial for "Edita", então o local de estoque dever ser "Edita". Caso a filial seja "Mostra", o local de estoque pode ser "Edita" ou "Mostra". Em ambos os casos, "Edita" ou "Mostra", podem ser informados uma filial e local de estoque default.
- Menu, etapa ou parametro citado: Edição do local de Emissão: Informe "Edita" se o local de estoque do movimento poderá ser acessado e informado pelo usuário, "Mostra" se o campo somente será mostrado e não poderá ser acessado. Neste caso, os campos "filial" e "Local de Estoque" serão preenchidos com os dados informados nos campos pode afetar a performance na inclusão do movimento e em sua alteração.
- Menu, etapa ou parametro citado: Local de estoque : Informe o local de estoque para os movimentos deste tipo.

#### [325] Datas
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Datas](https://tdn.totvs.com/display/public/LRM/Datas)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Data de Emissão: Informe qual será o tipo de edição da Data de Emissão, as opções são:
- Evidencia inicial: - Edita: A data de emissão do movimento será editada no movimento.
- Evidencia inicial: - Mostra: se esta deverá ser utilizada, mas, não poderá ser editada.
- Menu, etapa ou parametro citado: - Data Processamento: deverá ser igual a data de processamento do movimento, no qual o estoque é afetado.
- Menu, etapa ou parametro citado: - Data Processamento: deverá ser igual a data de processamento do movimento, no qual o estoque é afetado.
- Menu, etapa ou parametro citado: - São quatro parâmetros disponíveis:
- Artefato tecnico citado: O movimento considera Horário conforme o horário obtido do servidor onde o host está habilitado.

#### [326] Outros Dados
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Outros+Dados](https://tdn.totvs.com/display/public/LRM/Outros+Dados)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Usar Cópia de Movimentos por Referência: Marcando esta opção, será possível copiar dados de um movimento já existente na base para um novo, relacionando-os internamente.
- Evidencia inicial: Observações :: Ao realizar cópia de movimentos por referência, o sistema irá obedecer às regras de natureza, informadas nos parâmetros do tipo de movimento (Opções/Parâmetros/Tipos de Movimentos/Pasta Identificação/Aba Dados Fiscais/campos \ Natureza' e \ Natureza Fora Estado'). A Cópia Simples é utilizada para facilitar a inserção de movimentos com a mesma característica. Neste tipo de cópia, a tabela TMOVRELAC não é preenchida.
- Evidencia inicial: Motivo de Referência: Cada tipo de movimento que utilizar do processo de cópia, utilizará uma configuração única definida na tabela "Motivo de Referência". Estes motivos estão em uma tabela fixa, com as operações pré-definidas para que seja possível efetuar consistências legais de forma adequada. São eles:
- Menu, etapa ou parametro citado: Observações :: Ao realizar cópia de movimentos por referência, o sistema irá obedecer às regras de natureza, informadas nos parâmetros do tipo de movimento (Opções/Parâmetros/Tipos de Movimentos/Pasta Identificação/Aba Dados Fiscais/campos \ Natureza' e \ Natureza Fora Estado'). A Cópia Simples é utilizada para facilitar a inserção de movimentos com a mesma característica. Neste tipo de cópia, a tabela TMOVRELAC não é preenchida.
- Menu, etapa ou parametro citado: Retorno de Remessa - Estoque de Terceiros
- Menu, etapa ou parametro citado: Retorno de Mercadoria não Aplicada na Industrialização - Estoque Terceiros
- Artefato tecnico citado: Utiliza TOTVS Colaboração / NeoGrid: Permite inclusão de movimentos com base em um XML validado pelo NeoGrid.

#### [327] Tabelas (Parâmetros do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938750](https://tdn.totvs.com/pages/releaseview.action?pageId=423938750)
- Classificacao inferida: movimento, parametrizacao
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tabelas de Classificação
- Evidencia inicial: Editar Tipo: Ao marcar confirmando a utilização, os seguintes campos serão acessados:
- Evidencia inicial: - Tipo Default: Informe qual o código da tabela correspondente será a default.
- Menu, etapa ou parametro citado: Relacionar Funcionário 1 com Usuário do Login: Marque este campo se desejar habilitar o relacionamento entre o usuário de login com o funcionário 1 do movimento. Durante a edição da movimentação, o campo relativo ao funcionário 1 é automaticamente calculado, não sendo permitida a sua edição. Para relacionar um funcionário a um usuário, este deve estar associado ao funcionário no cadastro de Pessoa, em Cadastros/Tabelas Auxiliares/Pessoa.
- Menu, etapa ou parametro citado: Observação: Se no cadastro do funcionário, o campo comissão 1 estiver preenchido, ao incluir um movimento utilizando esse funcionário, será levada para o movimento essa comissão informada no cadastro. Se não houver esta informação e nos parâmetros do tipo de movimento tenha sido cadastrado um default para comissão do funcionário, este valor default que será preenchido no campo comissão do movimento.
- Menu, etapa ou parametro citado: Editar Seção / Portador / Centro de Despesa / Natureza de Gasto / Contratos vendedor:

#### [328] Valores Financeiros
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Valores+Financeiros](https://tdn.totvs.com/display/public/LRM/Valores+Financeiros)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Valores Financeiros 1/4:
- Evidencia inicial: Descontos:
- Evidencia inicial: - Marque este campo se for utilizar descontos no tipo de movimento. Caso contrário, deixe desmarcado.
- Menu, etapa ou parametro citado: - Fórmula do Valor Bruto
- Menu, etapa ou parametro citado: - Fórmula do Sub Total
- Menu, etapa ou parametro citado: - Fórmula do Valor Líquido
- Artefato tecnico citado: - Estes valores somente serão visíveis através de consulta SQL pela tabela TMOV os campos VALORDESCCONDICIONAL , VALORDESPCONDICIONAL no TOTVS Gestão de Estoques, Compras e Faturamento.
- Artefato tecnico citado: Estes valores somente serão visíveis através de consulta SQL pela tabela TITMMOV os campos VALORDESCCONDICONALITM, VALORDESPCONDICIONALITM, no TOTVS Gestão de Estoques, Compras e Faturamento.

#### [329] Rateio dos Valores Financeiros
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Rateio+dos+Valores+Financeiros](https://tdn.totvs.com/display/public/LRM/Rateio+dos+Valores+Financeiros)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Rateio dos Valores Financeiros 1/2
- Evidencia inicial: Rateio: Nesta pasta são definidas as opções de rateio para Frete, Seguro, Desconto, Despesa, Frete do CTRC. As opções são:
- Evidencia inicial: - Não Aplicar.
- Menu, etapa ou parametro citado: - Aplicar Rateio Condicional: No rateio condicional o peso da participação de cada item é determinado por meio de fórmula similar àquela utilizada para calcular o valor bruto do movimento. Por meio desta fórmula será possível por exemplo distribuir para alguns itens do contexto, distribuir em partes iguais, distribuir em função do peso da mercadoria, e assim por diante.
- Menu, etapa ou parametro citado: - Nesta pasta, é possível determinar o tipo de rateio de cada valor financeiro, assim como a respectiva fórmula caso o rateio seja condicional.
- Menu, etapa ou parametro citado: - Caso utilize Rateio Proporcional ou Rateio Condicional, a pasta Outros Valores apresentará os valores no item do movimento. - No item de movimento, pasta 'Outros Valores', existe uma lista de campos com a participação do rateio de cada um dos valores financeiros do movimento. Todos estes campos podem ser acessados através de fórmula e podem ser utilizados na rotina de cálculo da base de cálculo.

#### [330] Transporte
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Transporte](https://tdn.totvs.com/display/public/LRM/Transporte)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Mov -Transporte 1/3
- Evidencia inicial: Editar Transportadora 1 e Transportadora 2:
- Evidencia inicial: - Marque os campos para confirmar a edição dos mesmos nos movimentos deste tipo.
- Menu, etapa ou parametro citado: Usa Soma / Fórmula: Soma: marque-o se deseja que o peso bruto dos produtos sejam somados.
- Menu, etapa ou parametro citado: - Fórmula: marque-o para definir uma fórmula que calcule o peso bruto.

#### [331] Campos Livres
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/Campos+Livres](https://tdn.totvs.com/display/public/LRM/Campos+Livres)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Campos Livres 1/2
- Evidencia inicial: Editar Campo Livre 1, 2, 3: O sistema permite a utilização de 3 (três) campos livre para cada tipo de movimento. Marque aquele(s) que deseja utilizar. Confirmando a utilização, os campos seguintes serão habilitados para que informe:
- Evidencia inicial: Nome: Informe o nome que o sistema deverá assumir para o campo indicado.
- Menu, etapa ou parametro citado: Editar Classificação do Movimento: Marque esta opção se deseja classificar o movimento de acordo com a tabela cadastrada através do menu Cadastro | Tabelas Auxiliares | Classificações de Movimento .
- Menu, etapa ou parametro citado: - Para copiar da Solicitação de Compra para a Ordem de Compra a Classificação do Movimento através de Cotação, é necessário configurar o parâmetro: Parâmetros de Cotações/Geral e habilitar: "Cotar Itens de uma única solicitação de compra".

#### [332] Campos Complementares (Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=461920532](https://tdn.totvs.com/pages/releaseview.action?pageId=461920532)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Será exibida neste campo a lista de campos complementares do movimento disponíveis. Selecione os campos que deverão estar disponíveis para este tipo de movimento e através das setas laterais arraste-os para a coluna campos complementares visíveis. A ordenação dos campos complementares na visão poderá ser feita através das setas disponibilizadas ao lado da coluna.
- Evidencia inicial: Observações :
- Evidencia inicial: - No movimento o sistema habilitará a pasta campos complementares para a informação de campos no movimento.
- Menu, etapa ou parametro citado: - Os campos complementares só serão visualizados após o seu cadastramento no Menu/Cadastros/Campos Complementares/Movimentos.

#### [333] Impressão
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938010](https://tdn.totvs.com/pages/releaseview.action?pageId=423938010)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Impressão 1/2
- Evidencia inicial: Formato do Relatório: Informe qual será o relatório default para Imprimir Movimentos, do tipo Genérico,Tipo Fatura ou Tipo Duplicata.
- Evidencia inicial: Formato de Relatório .Net: Informe qual será o relatório .Net default para Imprimir Movimentos, do tipo Genérico, Tipo Fatura ou Tipo Duplicata.
- Menu, etapa ou parametro citado: Imprime Boleto: Este campo só estará habilitado se os movimentos deste tipo geram lançamentos para o TOTVS Gestão Financeira, ou seja, se na pasta Faturamento, o campo "fatura o movimento" estiver marcado. Deste modo, ao imprimir um documento de um movimento, se estes parâmetros estiverem habilitados, e no layout do documento tiver também o layout do boleto, este será impresso juntamente com a nota fiscal. Portanto, para imprimir o boleto é necessário que o layout esteja montado e a habilitação deste campo tem como maior finalidade o incremento do campo "nosso número" e a criação do código de barras e do IPTE para emissão, a emissão poderá ser feita também sem vínculo com a nota fiscal. Se existir o layout montado no gerador, este deverá ser do tipo Documento e não será impresso após a inclusão do movimento, só selecionando o movimento e imprimindo pela visão.

#### [334] Identificação (Item do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938130](https://tdn.totvs.com/pages/releaseview.action?pageId=423938130)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Identificação 1/2
- Evidencia inicial: Número Máximo de Itens: Informe qual o número máximo de itens que cada movimento poderá ter.
- Evidencia inicial: Observação : Se este item de movimento utiliza grade numerada, o número de itens é somado ao número de itens da grade, e xemplo :
- Menu, etapa ou parametro citado: Fórmula Consistência: Esta fórmula será utilizada para consistir produtos que serão informados no movimento, portanto, a utilização desta faz com que só seja possível incluir produtos no movimento que satisfaçam o resultado da execução desta fórmula que deve ser 1. Exemplo :
- Menu, etapa ou parametro citado: Se informarmos para um tipo de movimento a seguinte fórmula:
- Menu, etapa ou parametro citado: Só serão aceitos na inclusão dos movimentos itens que tenham a cor do produto preenchida. Para os demais será mostrada uma mensagem de produto inconsistente, e informará também o título da fórmula não atendida.

#### [335] Preços (Item do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938806](https://tdn.totvs.com/pages/releaseview.action?pageId=423938806)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Edição do Preço:
- Evidencia inicial: - Edita: O campo preço será apresentado e poderá ser editado;
- Evidencia inicial: - Mostra: O campo preço será apresentado, mas não poderá ser editado manualmente. Contudo, ao alterar a " seleção de preço ", o campo preço será alterado preenchido com o retorno da opção de preço selecionada.
- Menu, etapa ou parametro citado: Editar Preço Total: Para habilitar esta opção, deve-se marcar como edita ou mostra o parâmetro “Edição do Preço”. Quando esse parâmetro é marcado, é exibida a opção manter preço total no item de movimento. Marcando esta opção na edição dos itens deste movimento aparecerá o campo “Preço Total” para edição. O preço total do item somente será calculado levando-se em consideração o desconto do item se os parâmetros de tipo de movimento assumirem um dos seguintes valores: “Calcular Preço Total com Desconto” ou “Calcular Preço Total c/ Despesa e Desconto”. Caso o parâmetro de cotação Usar Preço Total no item estiver marcado o preço total da cotação (SEM DESCONTO) será copiado para a ordem de compra. No caso da cotação não utilizar preço total, o valor total do item da ordem de compra poderá ser calculado com o desconto. Selecione da lista de opções o cálculo que o sistema deverá fazer a partir ou para este campo, as opções são: Opção para Seleção - Descrição - Cálculo
- Menu, etapa ou parametro citado: Recalcular preço obtido por fórmula: Utilizado quando parametrizado para " Buscar Preço Em " utilizado "Formula de preço 1" ou "Formula de preço 2"
- Menu, etapa ou parametro citado: - Para o correto funcionamento do parâmetro " Recalcular somente quando a condição de pagamento é alterada ". É necessário que tenha apenas uma opção selecionada em "Buscar Preço Em", sendo: Fórmula de preço 1 OU Formula de preço 2. Caso tenha mais de uma opção, ao navegar entre as opções, o recalculo também será feito.

#### [336] Lote / Grade Numerada / Número de Série
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423937995](https://tdn.totvs.com/pages/releaseview.action?pageId=423937995)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Aceita Número de Série
- Evidencia inicial: Marcando esta opção poderão ser incluídos no movimento produtos que utilizam ou não número de série (o termo "Números de Série" de um produto se refere a um conjunto do mesmo que possuem, individualmente, uma identificação denominada Número de Série).
- Evidencia inicial: Observação : A opção Aceitar Número de Série ficará sempre habilitada quando o tipo de movimento afetar o saldo 2 do estoque.
- Menu, etapa ou parametro citado: Observação : A opção Aceitar Número de Série ficará sempre habilitada quando o tipo de movimento afetar o saldo 2 do estoque.
- Menu, etapa ou parametro citado: Marque esta opção, se para cada item deste movimento deseja utilizar o controle de grade numerada, as grades já deverão estar cadastradas em Cadastros/Tabelas Auxiliares/Grade Numerada.
- Menu, etapa ou parametro citado: Observações : Se o tipo de movimento afetar o Saldo 2 do estoque, umas das opções, Consiste Lote ou Carrega Lotes mais Antigos, deve estar obrigatoriamente marcada.

#### [337] Tabelas (Item do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938758](https://tdn.totvs.com/pages/releaseview.action?pageId=423938758)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tabelas de Classificação
- Evidencia inicial: Editar Tipo/Classe/Status do Produto: Ao marcar, confirmando a utilização, os seguintes campos serão acessados:
- Evidencia inicial: - Tipo Default: Informe, qual o código da tabela correspondente será a default.
- Menu, etapa ou parametro citado: Editar Seção / Portador / Centro de Despesa / Natureza de Gasto / Contratos vendedor:
- Menu, etapa ou parametro citado: - No default por tabela no Tipo de Movimento (Opções/Parâmetros do Tipo de Movimento/Tabelas/Movimento/Itens);
- Menu, etapa ou parametro citado: - No default por tabela no Cliente/Fornecedor (Cadastros/Cliente/Fornecedor/Default de Cliente Fornecedor);

#### [338] Valores Financeiros (Item do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938775](https://tdn.totvs.com/pages/releaseview.action?pageId=423938775)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Utiliza Desconto: Marque esta opção se os itens do movimento poderão ter desconto, caso contrário, desmarque o campo. Marcando, ou seja, confirmando o desconto, os seguintes campos estarão habilitados para preenchimento:
- Evidencia inicial: Nome do Desconto: Informe o nome que o sistema deverá assumir para o campo.
- Evidencia inicial: Tipo do Desconto:
- Menu, etapa ou parametro citado: Tipo de Uso dos Valores Opcionais 1 e 2: Habilite estes campos, caso queira inclui valores calculados por fórmulas no itens de movimento. Estes campos podem ser usados para desconto ou para despesa. Em cada um existe um campo para fórmula e outro indicando se o valor será despesa, desconto, outros. Estes campos não influenciam no desconto ou despesa do item, são independentes. Entretanto se a opção "Afeta Desc. do Mov." estiver parametrizada, o valor opcional do item que for desconto, entrará no cálculo do desconto do movimento, o mesmo vale para a despesa. Estes campos opcionais do item terão três opções:
- Menu, etapa ou parametro citado: Fórmula dos Valores Opcionais 1 e 2: Escolha uma fórmula para ser utilizada.

#### [339] Campos Livres (Item do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938265](https://tdn.totvs.com/pages/releaseview.action?pageId=423938265)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Campos Livres 1/2
- Evidencia inicial: Edita Mensagem: Clique neste campo e marque-se deseja editar uma mensagem para cada item do movimento, ou seja, para cada item incluído será informada uma mensagem, porém esta informação não é obrigatória e é indicada na pasta identificação itens na mesma janela que incluímos os itens do movimento. Marcando esta opção, o campo "Valor default" estará habilitado para que informe a mensagem default para os itens do movimento deste tipo, as mensagens já deverão estar cadastradas em Cadastros/Tabelas Auxiliares/Mensagens.
- Evidencia inicial: Editar Campo Livre: Clique neste campo e marque-o se desejar que cada item do movimento tenha um campo livre, que poderá ser utilizado para alguma informação adicional sobre o mesmo, este campo aparecerá na pasta identificação, campos valores na mesma janela que incluímos os itens do movimento. Marcando esta opção, o campo "Valor Default" estará habilitado para que informe um nome para o "Campo Livre".
- Menu, etapa ou parametro citado: Edita Mensagem: Clique neste campo e marque-se deseja editar uma mensagem para cada item do movimento, ou seja, para cada item incluído será informada uma mensagem, porém esta informação não é obrigatória e é indicada na pasta identificação itens na mesma janela que incluímos os itens do movimento. Marcando esta opção, o campo "Valor default" estará habilitado para que informe a mensagem default para os itens do movimento deste tipo, as mensagens já deverão estar cadastradas em Cadastros/Tabelas Auxiliares/Mensagens.

#### [340] Campos Complementares (Item do Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=461920647](https://tdn.totvs.com/pages/releaseview.action?pageId=461920647)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Campos Complementares Disponíveis: Será exibida neste campo a lista de campos complementares do movimento disponíveis. Selecione os campos que deverão estar disponíveis para este tipo de movimento e através das setas laterais arraste-os para a coluna campos complementares visíveis. A ordenação dos campos complementares na visão poderá ser feita através das setas disponibilizadas ao lado da coluna.
- Evidencia inicial: Observações :
- Evidencia inicial: - O sistema também abrirá uma pasta em cada item com a descrição campos complementares.
- Menu, etapa ou parametro citado: - Os campos complementares só serão visualizados após o seu cadastramento no Menu/Cadastros/Campos Complementares/Item.

#### [341] Estoque (Parâmetro Tipo de Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=461921700](https://tdn.totvs.com/pages/releaseview.action?pageId=461921700)
- Classificacao inferida: movimento, parametrizacao, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Estoque 1/3
- Evidencia inicial: Efeito sobre os Saldos Físicos: Indique qual o efeito que as quantidades deste tipo de movimento terão sobre os saldos físicos existentes (4 fixos, que são: Saldo de Balanço, Saldo Atual, Pedidos a Fornecedores e Pedidos a Clientes e 6 saldos criados através do menu Opções/Parâmetros TOTVS Gestão de Estoques, Compras e Faturamento/Gestão de Estoque/Saldos de estoque), todos os saldos existentes serão apresentados e em cada um deles deverá informar se no saldo físico, a quantidade:
- Evidencia inicial: - Não Altera: As quantidades deste tipo de movimento não irão alterar o saldo em questão.
- Menu, etapa ou parametro citado: Estoque 1/3
- Menu, etapa ou parametro citado: Efeito sobre os Saldos Físicos: Indique qual o efeito que as quantidades deste tipo de movimento terão sobre os saldos físicos existentes (4 fixos, que são: Saldo de Balanço, Saldo Atual, Pedidos a Fornecedores e Pedidos a Clientes e 6 saldos criados através do menu Opções/Parâmetros TOTVS Gestão de Estoques, Compras e Faturamento/Gestão de Estoque/Saldos de estoque), todos os saldos existentes serão apresentados e em cada um deles deverá informar se no saldo físico, a quantidade:
- Menu, etapa ou parametro citado: Estoque 2/3

#### [342] Custo (Parâmetro Tipo de Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938190](https://tdn.totvs.com/pages/releaseview.action?pageId=423938190)
- Classificacao inferida: movimento, parametrizacao, estoque
- Gatilhos de busca observados: tipo de movimento, movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Afeta Custo Reposição A / Custo Reposição B:
- Evidencia inicial: - Para cada um dos custos descritos acima, marque o campo se o custo em questão alterar quando forem incluídos os itens dos movimentos deste tipo e deixe desmarcado se não alterar.
- Evidencia inicial: - Marcando o campo, informe qual a fórmula que resultará no custo. As fórmulas já deverão estar cadastradas no menu Cadastro/Fórmulas.
- Menu, etapa ou parametro citado: - Marcando o campo, informe qual a fórmula que resultará no custo. As fórmulas já deverão estar cadastradas no menu Cadastro/Fórmulas.
- Menu, etapa ou parametro citado: Existe uma função de fórmula que retorna o valor do preço de um produto por fornecedor "TABPRDCFO". Utilizando esta função você pode atualizar o preço do produto baseado neste preço.
- Menu, etapa ou parametro citado: Fórmula para o preço: Informe a fórmula que deverá atualizar o preço do cadastro do produto.

#### [343] Separação (Parâmetro Tipo de Movimento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938739](https://tdn.totvs.com/pages/releaseview.action?pageId=423938739)
- Classificacao inferida: movimento, parametrizacao
- Gatilhos de busca observados: tipo de movimento, movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Usa Separação: Marcando este parâmetro para movimentos do tipo compra e venda, o módulo de separação estará habilitado. Este recurso é uma forma de distribuição de mercadoria entre cliente/fornecedor, fornecedor/cliente, através de leitura de código (leitor de código de barras).
- Evidencia inicial: Este movimento não deverá aceitar ser parametrizado com separação de lote e utilizar grade simultaneamente, pois o sistema não trabalha com separação de movimentos que contenham itens de grade. O item de movimento poderá ser identificado pelo código do produto, mas o código usado na separação poderá ser o código EAN ou código auxiliar, etc.
- Evidencia inicial: Formato do Código da Separação: Para ser possível a utilização deste recurso, também deverá ser preenchido com o formato do código EAN (preenchido com o código de número 1), o campo Formato código separação.
- Menu, etapa ou parametro citado: Observações : Na parametrização do tipo de movimento que irá utilizar o processo de Separação não é permitido configurar itens repetidos. É possível permitir/proibir acesso aos usuários para 'Colocar Movimentos em Separação' e 'Iniciar Separação', através do cadastro de perfil (Cadastros/Segurança/Perfis/Pasta Acesso a Menus).

#### [344] Ressuprimentos (Estoque)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938765](https://tdn.totvs.com/pages/releaseview.action?pageId=423938765)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Geração de Movimento: O movimento marcado com essa opção poderá ser usado dentro do assistente de análise de sugestão para gerar movimento desse tipo.
- Evidencia inicial: Cálculo de Consumo: O tipo de movimento marcado com essa opção poderá ser usado para calcular o histórico de consumo dos produtos em questão. Nesse caso, será feito um somatório de todos os movimentos desses tipos que não foram cancelados. Esse histórico do consumo será usado posteriormente no cálculo do consumo médio prático.
- Evidencia inicial: Saldos: Movimentos marcados com essa opção poderão ser utilizados para serem incluídos no somatório do saldo final dos produtos para serem comparados com o ponto de reposição. Exemplo: Todos os movimentos de ordem de compra pendentes para um determinado produto será usado para compor o saldo final.
- Menu, etapa ou parametro citado: - Consumo Normal: Marque esta opção se o consumo daquela quantidade diz respeito à saída de um determinado produto do estoque para vendas normais da empresa.
- Menu, etapa ou parametro citado: - Consumo Anormal: Esse tipo de consumo diz respeito à saída de um determinado produto do estoque dependendo da sazonalidade ou o consumo de produtos para projetos internos na empresa, exemplo :

#### [345] Parâmetro de Orçamento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=461922032](https://tdn.totvs.com/pages/releaseview.action?pageId=461922032)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Editar Natureza Orçamentária/Financeira do item:
- Evidencia inicial: - Não Edita: Fica indisponível.
- Evidencia inicial: - Edita: se esta natureza deverá ser utilizada e informada no momento da inclusão do movimento.
- Menu, etapa ou parametro citado: - Para Utilizar o Controle orçamentário por item, o campo “Não agrupar quantidades de itens iguais” deve ser marcado. Pasta integração Compras /Outras opções dos parâmetros do tipo de movimento.
- Menu, etapa ou parametro citado: - Pasta Tabelas/Itens dos parâmetros do tipo de movimento.
- Menu, etapa ou parametro citado: - Quando o tipo de movimento estiver parametrizado para controlar orçamento, todos os parâmetros do Orçamento devem ser preenchidos.

#### [346] Parâmetro de Rateio de Centro de Custo e Departamento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938848](https://tdn.totvs.com/pages/releaseview.action?pageId=423938848)
- Classificacao inferida: parametrizacao, estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tipo de Rateio: Indique se o rateio será do tipo percentual ou valor.
- Evidencia inicial: Rateio do Movimento: Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.
- Evidencia inicial: Rateio do Item: Informe se irá trabalhar com rateio de centro de custo, departamento. As opções são: Não edita, Edita, Edita obrigatoriamente.
- Menu, etapa ou parametro citado: - Parametrizando centro de custo e departamento no item como edita, podemos copiá-los de uma solicitação para a ordem de compra via cotação. Quando agrupamos itens iguais, estes deverão ser somados para o rateio. Caso um item tenha rateio e outro não, o valor total do item deverá ser rateado na ordem de compra. Gerando itens em ordens de compra já existentes, estes deverão ser rateados separadamente para cada ordem de compra específica. É necessário também que em opções/parâmetros/tipo de movimento/itens/preço, que o preço esteja como edita, tanto para a solicitação como ordem de compra.

#### [347] Parâmetros de Vinculações
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=463798432](https://tdn.totvs.com/pages/releaseview.action?pageId=463798432)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Classificação da Vinculação/Tipo de Vinculação
- Evidencia inicial: Este recurso tem por finalidade a associação de um movimento em outro, associar o movimento classificado como adiantamento em um movimento classificado como controla adiantamento. Para este processo será necessário trabalhar com dois tipos de movimentos distintos, onde um tipo de movimento, em sua parametrização, estará classificado como “Adiantamento” e o outro, classificado “Controla Adiantamento”.
- Evidencia inicial: Retenções
- Menu, etapa ou parametro citado: - Valor Bruto: Será considerado para o faturamento/recebimento parcial o valor bruto do movimento, definido através da Fórmula do Valor Bruto em https://tdn.totvs.com/display/LRM/Valores+Financeiros.
- Menu, etapa ou parametro citado: - Valor do Documento: Será considerado para o faturamento/recebimento parcial o valor do documento do movimento, definido através da Fórmula do Valor do Documento em https://tdn.totvs.com/display/LRM/Valores+Financeiros.
- Menu, etapa ou parametro citado: - Valor Sub-Total: Será considerado para o faturamento/recebimento parcial o valor sub-total do movimento, definido através da Fórmula do Sub-Total em https://tdn.totvs.com/display/LRM/Valores+Financeiros.

#### [348] Parâmetros de Compra e Venda
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938835](https://tdn.totvs.com/pages/releaseview.action?pageId=423938835)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: compras
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Esse parâmetro ficará visivel para mvoimentos do tipo 1.1, 2.1 ou 3.1
- Evidencia inicial: Compra/Venda - Outras Características
- Evidencia inicial: Gera Movimento de Venda / Compra: Marque esta opção se o tipo de movimento poderá gerar um movimento do tipo 2.2 (para de vendas) ou do tipo 1.2 (para compras). Marcando a opção acima, os seguintes campos serão habilitados para parametrização:
- Menu, etapa ou parametro citado: Gera Movimento de Venda / Compra: Marque esta opção se o tipo de movimento poderá gerar um movimento do tipo 2.2 (para de vendas) ou do tipo 1.2 (para compras). Marcando a opção acima, os seguintes campos serão habilitados para parametrização:
- Menu, etapa ou parametro citado: Observações : O sistema não altera o valor do lançamento gerado pelo pedido que originou o desdobramento. Os campos descritos a seguir são parâmetros exclusivos de movimentos do grupo 1.1 (compras). Portanto, só aparecerão na pasta Integração Compras.
- Menu, etapa ou parametro citado: Baixar Pedido de Compras/Vendas após Geração:

#### [349] Contabilidade (Parâmetros de Integrações)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938212](https://tdn.totvs.com/pages/releaseview.action?pageId=423938212)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Habilita Evento Contábil:
- Evidencia inicial: - Não Utiliza evento.
- Evidencia inicial: - Utiliza Evento da Natureza: Por esta opção o evento contábil será buscado diretamente na Natureza, caso não exista, buscará o evento informado no tipo de movimento.
- Menu, etapa ou parametro citado: - No menu Movimentos, para aqueles que têm a contabilização ativa, haverá a opção de menu Estornar a Contabilidade. Ao selecionar um movimento e acioná-la, o sistema gerará no lote de estorno indicado a contrapartida dos lançamentos contábeis anteriores, que já estão no lote de integração, e apagará a contabilidade no TOTVS Gestão de Estoques, Compras e Faturamento possibilitando alterar e gerar nova contabilização para o movimento.

#### [350] Integração de Contratos
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938836](https://tdn.totvs.com/pages/releaseview.action?pageId=423938836)
- Classificacao inferida: contratos
- Gatilhos de busca observados: contrato
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Esta opção tem a finalidade de vincular um item de movimento a um contrato ou a um item de contrato. Escolha, na lista de opções a desejada:
- Evidencia inicial: - Não relacionar : Os itens incluídos para o tipo de movimento não serão relacionados a nenhum contrato.
- Evidencia inicial: - Editar Contrato (somente do cliente) : Poderá relacionar um movimento a um determinado contrato deste que seja do mesmo Cliente.
- Menu, etapa ou parametro citado: - Editar Contrato (Todos os Contratos) : Poderá relacionar um movimento a um determinado contrato.
- Menu, etapa ou parametro citado: Exemplo : Vamos supor que tem um contrato cadastrado através do menu Contratos / Manutenção de Contratos , e alguma despesa extra contrato deve ser cobrada do cliente, porém deve ser faturada separadamente, desta forma, ao informarmos que nos itens deste tipo de movimento o contrato poderá ser editado, significa que ao incluirmos o item, ao indicarmos o número do contrato saberemos que aquela despesa, cobrada do cliente é referente a despesas daquele contrato.
- Menu, etapa ou parametro citado: Relacionar com item de Contrato : Escolhendo esta opção poderá incluir movimentos referentes a um contrato diretamente, ou seja, através do menu Movimentos, desta forma, ao indicar o item no movimento, você informará o período inicial e final de faturamento deste, assim, ao faturar um contrato através do menu Contratos / Faturamento por Lote, o sistema verificará se para o cliente, para a data de faturamento já existe um movimento com aquele item de contrato.

#### [351] Financeiro (Estoque, Compras e Faturamento)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938167](https://tdn.totvs.com/pages/releaseview.action?pageId=423938167)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Edita Condição de Pagamento : Disponíveis as três opções relacionadas abaixo:
- Evidencia inicial: - Edita : para os movimentos deste tipo, a condição será utilizada e o campo poderá ser acessado para alterações.
- Evidencia inicial: - Mostra : a condição de pagamento será utilizada para os movimentos deste tipo porém, o campo não poderá ser acessado.
- Menu, etapa ou parametro citado: - É possível ao utilizar Meios de pagamento enviar lançamentos para o TOTVS Gestão Financeira com a previsão de pagamento pela data dos itens. Para isso é necessário inicialmente no menu Opções/Parâmetros/Tipos de movimentos/pasta Itens/Outros dados, deixar a data de entrega definida como "edita". Após a inclusão do movimento com vários itens e que apresentem datas diferentes de entrega, na janela de edição do movimento clique no botão de Pagamentos, então é preciso que se informe o tipo de documento na opção Geração Automática de Formas de Pagamento e finalize clicando no botão 'Gerar'.
- Menu, etapa ou parametro citado: Gerar Lançamento para Administradora de Cartão : Marcando esta opção ao incluir o tipo de movimento que possui integração com o TOTVS Gestão Financeira, o sistema irá levar para o campo Cliente/Fornecedor do lançamento financeiro a Administradora do Cartão que deverá esta informada no Meio de Pagamento, exemplos, cadastrar um CF para cada uma das administradoras de cartão: REDECARD, VISANET, AMEX e TECBAN. Associar os diversos meios de pagamento de cartão conforme indicado abaixo:
- Menu, etapa ou parametro citado: - Usa com Data Entrega Item : O Parcelamento poderá ser gerado automaticamente pelo sistema, gerando lançamentos financeiros para cada item, considerando como valor original o valor calculado conforme a Fórmula do Valor a Ratear e o vencimento de cada parcela com base na Data de Entrega do respectivo item de movimento.

#### [352] Fiscal (Parâmetros de Integrações)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938168](https://tdn.totvs.com/pages/releaseview.action?pageId=423938168)
- Classificacao inferida: parametrizacao, fiscal
- Gatilhos de busca observados: fiscal
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: -
- Evidencia inicial: -
- Evidencia inicial: -
- Menu, etapa ou parametro citado: - Este campo só aparecerá se houver integração TOTVS Gestão de Estoques, Compras e Faturamento/TOTVS Gestão Fiscal.
- Menu, etapa ou parametro citado: - Se você trabalha com integração TOTVS Gestão de Estoques, Compras e Faturamento/RM Líber , deve-se verificar a necessidade de confirmar a utilização da seleção da natureza por item caso exista em um mesmo movimento - Nota Fiscal de Entrada e ou Saída situações tributárias diferentes. Em caso afirmativo, na inclusão do movimento, o sistema irá apresentar e ou selecionar automaticamente (de acordo com as regras de seleção dada a Natureza), o campo "Natureza da Operação" para que se faça a relação entre o item e a sua Natureza Fiscal.
- Menu, etapa ou parametro citado: - No momento da escrituração dos movimentos, ou seja, da exportação para o TOTVS Gestão Fiscal, o TOTVS Gestão de Estoques, Compras e Faturamento irá exportar parcelas fiscais tantas quantas as naturezas analíticas do item (natureza de último nível). Caso exista no mesmo movimento produtos de uma mesma natureza, esses serão agrupados para geração de uma mesma parcela fiscal. Se este parâmetro estiver desabilitado, a Natureza dos itens do movimento será igual a Natureza do movimento.

#### [353] Manutenção (Parâmetros de Integrações)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938077](https://tdn.totvs.com/pages/releaseview.action?pageId=423938077)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Integrar objeto de oficina ao item de movimento: Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.
- Evidencia inicial: Integração por API de Reporte: Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: Reporte de Itens Atendidos.
- Evidencia inicial: Na tela de parâmetros - Manutenção é possível escolher se o tipo de movimento selecionado terá integração com a API de Reporte, e qual fórmula poderá ser utilizado no valor reportado.
- Menu, etapa ou parametro citado: Integrar objeto de oficina ao item de movimento: Habilitando esta opção será disponibilizado na pasta Integração do Item do Movimento/"TOTVS Manutenção/Objeto" o campo onde o usuário poderá associar um objeto do Officina ao item. Ao indicar o objeto de manutenção será habilitado o botão que informa o valor de indicador de uso do objeto de manutenção selecionado.
- Menu, etapa ou parametro citado: Integração por API de Reporte: Habilitando esta opção será marcado o tipo de movimento que reportará os dados para API: Reporte de Itens Atendidos.
- Menu, etapa ou parametro citado: Na tela de parâmetros - Manutenção é possível escolher se o tipo de movimento selecionado terá integração com a API de Reporte, e qual fórmula poderá ser utilizado no valor reportado.

#### [354] Patrimônio (Parâmetro de Integração)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938845](https://tdn.totvs.com/pages/releaseview.action?pageId=423938845)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Integrar TOTVS Gestão Patrimonial: As opções para este campo para movimentos de Entrada são:
- Evidencia inicial: - Não Integrado: Os itens deste tipo de movimento não serão ativos imobilizados.
- Evidencia inicial: - Compra de Imobilizado: Os itens deste movimento serão ativos imobilizados. Desta forma, ao realizar a integração deste movimento no TOTVS Gestão Patrimonial, serão gerados automaticamente os respectivos bens de acordo com as opções de integração do TOTVS Gestão Patrimonial. Para que este processo ocorra será necessário: inicialmente incluir o movimento no TOTVS Gestão de Estoques, Compras e Faturamento. Logo após, deve-se indicar no TOTVS Gestão Patrimonial, menu Utilitários/Integrações/Integração TOTVS Gestão de Estoques, Compras e Faturamento as opções de integração para a geração de bens.
- Menu, etapa ou parametro citado: - Compra de Imobilizado: Os itens deste movimento serão ativos imobilizados. Desta forma, ao realizar a integração deste movimento no TOTVS Gestão Patrimonial, serão gerados automaticamente os respectivos bens de acordo com as opções de integração do TOTVS Gestão Patrimonial. Para que este processo ocorra será necessário: inicialmente incluir o movimento no TOTVS Gestão de Estoques, Compras e Faturamento. Logo após, deve-se indicar no TOTVS Gestão Patrimonial, menu Utilitários/Integrações/Integração TOTVS Gestão de Estoques, Compras e Faturamento as opções de integração para a geração de bens.
- Menu, etapa ou parametro citado: Observações : Estes campos só aparecerão se existir integração com o TOTVS Gestão Patrimonial.
- Menu, etapa ou parametro citado: - Para que haja a perfeita integração, é necessário que no cadastro de produtos, informe o Grupo de Contas do TOTVS Gestão Patrimonial, ao qual o produto a ser integrado pertence (isto vai indicar que este produto é um bem no TOTVS Gestão Patrimonial).

#### [355] Projeto (Parâmetro de Integração)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938857](https://tdn.totvs.com/pages/releaseview.action?pageId=423938857)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Informar Projeto/Tarefa:
- Evidencia inicial: - Não informar: selecione esta opção para que campo 'Projeto' não seja apresentado na pasta Integração do movimento.
- Evidencia inicial: - Obrigatório por Movimento: selecione esta opção para que o campo 'Projeto' seja apresentado na pasta Integrações no movimento. Este aparecerá no movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o movimento sem que este campo esteja informado.
- Menu, etapa ou parametro citado: - Não informar: selecione esta opção para que campo 'Projeto' não seja apresentado na pasta Integração do movimento.
- Menu, etapa ou parametro citado: - Obrigatório por item de Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integração no item de movimento. Este aparecerá no item do movimento e o preenchimento do mesmo será obrigatório. Não será permitido salvar o item do movimento sem que este campo esteja informado.
- Menu, etapa ou parametro citado: - Opcional por item de Movimento: selecione esta opção para que campo 'Projeto' seja apresentado na pasta Integração no item do movimento, para que informe para qual 'Projeto' e 'Tarefa' do TOTVS Construção e Projetos está sendo inserida no item da movimentação.

#### [356] Recursos Humanos (Parâmetro de Integração)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938854](https://tdn.totvs.com/pages/releaseview.action?pageId=423938854)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Movimento gera controles de EPI no TOTVS Gestão de Pessoas:
- Evidencia inicial: - Não Integrado: Não utilizará a integração.
- Evidencia inicial: - Compras: Realizar acréscimo em estoque.
- Menu, etapa ou parametro citado: - Não Integrado: Não utilizará a integração.
- Menu, etapa ou parametro citado: - Compras: Realizar acréscimo em estoque.
- Menu, etapa ou parametro citado: - Baixa de EPI: Baixa o estoque.

#### [357] Aprovação por Work Flow
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938301](https://tdn.totvs.com/pages/releaseview.action?pageId=423938301)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A integração entre o TOTVS Gestão de Estoque, Compras e Faturamento e o TOTVS Gestão de Relacionamento com Clientes consiste em ter uma aprovação de movimentos, cotações por fluxo de trabalho. No momento que o movimento está sendo criado, um atendimento é inserido no TOTVS Gestão de Relacionamento com Clientes, e até que o mesmo seja concluído ou cancelado, o movimento não estará apto para o faturamento.
- Evidencia inicial: Observação : Disponibilizado no TOTVS Gestão de Relacionamento com Clientes dois serviços do TOTVS Gestão de Estoque, Compras e Faturamento que poderão ser executados assim que um atendimento vinculado a um movimento do TOTVS Gestão de Estoque, Compras e Faturamento seja encaminhado para uma determinada etapa configurado pelo usuário. Os serviços disponibilizados são:
- Evidencia inicial: 1. Faturamento automático do movimento caso o atendimento no TOTVS Gestão de Relacionamento com Clientes seja "Aprovado"
- Menu, etapa ou parametro citado: A integração entre o TOTVS Gestão de Estoque, Compras e Faturamento e o TOTVS Gestão de Relacionamento com Clientes consiste em ter uma aprovação de movimentos, cotações por fluxo de trabalho. No momento que o movimento está sendo criado, um atendimento é inserido no TOTVS Gestão de Relacionamento com Clientes, e até que o mesmo seja concluído ou cancelado, o movimento não estará apto para o faturamento.
- Menu, etapa ou parametro citado: Observação : Disponibilizado no TOTVS Gestão de Relacionamento com Clientes dois serviços do TOTVS Gestão de Estoque, Compras e Faturamento que poderão ser executados assim que um atendimento vinculado a um movimento do TOTVS Gestão de Estoque, Compras e Faturamento seja encaminhado para uma determinada etapa configurado pelo usuário. Os serviços disponibilizados são:
- Menu, etapa ou parametro citado: Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | editar o tipo de movimento | Etapa 73 - WorkFlow:

#### [358] WorkFlow Fluig (Parâmetro de Integração)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938700](https://tdn.totvs.com/pages/releaseview.action?pageId=423938700)
- Classificacao inferida: parametrizacao, fluig
- Gatilhos de busca observados: workflow fluig
- Leitura segura para a skill: comece tratando este item como integracao-ou-automacao e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Aprovação: Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:
- Evidencia inicial: - Não Utiliza: a aprovação pelo Fluig não é habilitada.
- Evidencia inicial: - Utiliza no Faturamento: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser faturados.
- Menu, etapa ou parametro citado: Aprovação: Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:
- Menu, etapa ou parametro citado: - Não Utiliza: a aprovação pelo Fluig não é habilitada.
- Menu, etapa ou parametro citado: - Utiliza no Faturamento: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser faturados.

#### [359] Biblioteca (Parâmetro de Integração)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=423938238](https://tdn.totvs.com/pages/releaseview.action?pageId=423938238)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tipo de Integração com TOTVS Gestão Bibliotecária:
- Evidencia inicial: Através dessa integração será possível solicitar compra de exemplares através do TOTVS Gestão Bibliotecária, faturar o movimento no TOTVS Gestão de Estoques, Compras e Faturamento e então verificar o novo saldo de Exemplares no TOTVS Gestão Bibliotecária.
- Evidencia inicial: As parametrizações disponíveis são:
- Menu, etapa ou parametro citado: Tipo de Integração com TOTVS Gestão Bibliotecária:
- Menu, etapa ou parametro citado: Através dessa integração será possível solicitar compra de exemplares através do TOTVS Gestão Bibliotecária, faturar o movimento no TOTVS Gestão de Estoques, Compras e Faturamento e então verificar o novo saldo de Exemplares no TOTVS Gestão Bibliotecária.
- Menu, etapa ou parametro citado: - Não integrado : O sistema não realizará a integração;

#### [360] Integração Mensagem Única (Parâmetros de Integrações)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=493625821](https://tdn.totvs.com/pages/releaseview.action?pageId=493625821)
- Classificacao inferida: parametrizacao
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Mensagem de Integração : Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:
- Evidencia inicial: - Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção Integração com SigaMNT ou
- Evidencia inicial: - Integração Quirons x BackOffice RM
- Menu, etapa ou parametro citado: Mensagem de Integração : Essa opção é habilitada quando existir pacotes de integrações EAI 2.0 ativos na base. Os pacotes que habilitam esta etapa são:
- Menu, etapa ou parametro citado: - Integração Manutenção de Ativos x BackOffice RM (EAI 2.0) e na etapa Manutenção do Tipo de Movimento está marcada a opção Integração com SigaMNT ou
- Menu, etapa ou parametro citado: - Integração Quirons x BackOffice RM

#### [361] TOTVS Gestão de Estoque, Compras e Faturamento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=198948835](https://tdn.totvs.com/pages/releaseview.action?pageId=198948835)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: [
- Evidencia inicial: ](https://tdn.totvs.com/display/LRM/Jornada+de+Estoque)
- Evidencia inicial: [
- Menu, etapa ou parametro citado: ](https://tdn.totvs.com/display/LRM/Jornada+de+Estoque)
- Menu, etapa ou parametro citado: ](https://tdn.totvs.com/display/LRM/Jornada+de+Compras)
- Menu, etapa ou parametro citado: ](https://tdn.totvs.com/display/LRM/Jornada+de+Contratos)

#### [362] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Integração File Repo
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 10 de setembro de 2024 às 15:19
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24414976361623-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Integra%C3%A7%C3%A3o-File-Repo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24414976361623-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Integra%C3%A7%C3%A3o-File-Repo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como utilizar o FileRepo no Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2402 e superiores.
- Menu, etapa ou parametro citado: Dúvida Como utilizar o FileRepo no Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2402 e superiores.
- Menu, etapa ou parametro citado: No módulo Gestão de Estoque, Compras e Faturamento , essa funcionalidade está disponível nas seguintes telas:

#### [363] File Repo - TOTVS Backoffice (Linha RM)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=821187457](https://tdn.totvs.com/pages/releaseview.action?pageId=821187457)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizada para atender às necessidades de armazenamento de arquivos de forma rápida, simples e segura no sistema, sem a necessidade de um conhecimento técnico aprofundado. A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.
- Evidencia inicial: Confira abaixo em quais telas dos produtos TOTVS Backoffice - Linha RM o recurso está disponível.

#### [364] Armazenamento de Arquivos (FileRepo)
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=784778828](https://tdn.totvs.com/pages/releaseview.action?pageId=784778828)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: A funcionalidade de armazenamento de arquivos (FileRepo) foi idealizado para atender à necessidade de armazenamento de arquivos de forma rápida e simples no sistema.
- Evidencia inicial: Com ele, será possível armazenar e acessar arquivos de forma rápida e segura, sem a necessidade de um conhecimento técnico aprofundado.
- Evidencia inicial: A solução oferece uma interface amigável e funcionalidades que permitem gerenciar arquivos de maneira eficiente.

#### [365] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como Vincular um usuário ao Centro de Custo?
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 31 de outubro de 2022 às 15:52
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/9911798952727-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-Vincular-um-usu%C3%A1rio-ao-Centro-de-Custo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/9911798952727-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-Vincular-um-usu%C3%A1rio-ao-Centro-de-Custo)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como associar/vincular um usuário ao Centro de Custo?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Orçamento | Tabelas de Orçamento | "Vinculo de usuário ao Centro de Custo".
- Menu, etapa ou parametro citado: Anexos | Vinculação Usuário a Centro de Custo.

#### [366] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Cliente/Fornecedor não permitido para o tipo de movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de setembro de 2022 às 14:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8582355524759-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Cliente-Fornecedor-n%C3%A3o-permitido-para-o-tipo-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8582355524759-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Cliente-Fornecedor-n%C3%A3o-permitido-para-o-tipo-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Ocorrência Ao tentar salvar um movimento é apresentado a mensagem de erro:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Essa mensagem ocorre pois nos parâmetros do tipo de movimento, etapa 2 - Mov - Emitente/Destinatário 1/2, o Emitente ou Destinatário está como Cliente ou Fornecedor . É necessário que seja verificado se de fato o cli/for selecionado se encaixa na opção do parâmetro.
- Menu, etapa ou parametro citado: Exemplo: O Destinatário do meu movimento é Cliente , portanto, apenas cadastros do tipo Cliente ou Ambos poderão ser utilizados.

#### [367] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Tipos de Documento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 31 de agosto de 2022 às 15:56
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8550418462487-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tipos-de-Documento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8550418462487-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tipos-de-Documento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Como cadastrar os Tipos de Documentos utilizando o módulo de Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: Dúvida Como cadastrar os Tipos de Documentos utilizando o módulo de Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões
- Menu, etapa ou parametro citado: - Acesse o módulo Gestão de Estoque, Compras e Faturamento Cadastros Mais Tipo de Documento.

#### [368] FIN - Tipos de Documento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=421388695](https://tdn.totvs.com/pages/releaseview.action?pageId=421388695)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Através deste cadastro é possível controlar os tipos de documentos e classificar os lançamentos financeiros.
- Evidencia inicial: Na janela principal é possível visualizar de forma simplificada, informações de um ou de vários tipos de documento, de acordo com os filtros criados através do Gerenciador de Filtros (localizado na Barra de Ferramentas). Ao executar um filtro cada cadastro será apresentado em uma linha e as informações em colunas.
- Evidencia inicial: Identificação
- Menu, etapa ou parametro citado: Se marcada a opção o cadastro é classificado como “Inativo” e não será apresentado para seleção nos lookups disponíveis nos processos do financeiro.
- Menu, etapa ou parametro citado: Existem alguns processos que necessitam de tipos de documento específicos. Para identificar estes tipos é necessário definir uma classificação para o tipo de documento:
- Menu, etapa ou parametro citado: - Quando o parâmetro "Gera número do documento de acordo com os parâmetros dos lançamentos" estiver marcado, o sistema gera os lançamentos de IRRF e INSS com o número do documento sequencial de acordo com o seu tipo de documento. (Cada documento com sua numeração).

#### [369] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como realizar a emissão de Nota Fiscal Complementar
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 31 de agosto de 2022 às 14:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8526729528087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-realizar-a-emiss%C3%A3o-de-Nota-Fiscal-Complementar](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8526729528087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-realizar-a-emiss%C3%A3o-de-Nota-Fiscal-Complementar)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: parametrizacao, estoque, fiscal, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Este Documento auxilia a criação de um movimento básico para complementar impostos de uma NF-e no sistema. Qualquer NF-e complementar deve ser emitida de acordo com a legislação vigente mesmo que esteja em desacordo com este documento.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: 2. Acesse os parâmetros do movimento em: Opções | Parâmetros | RMNucleus | selecione onde o tipo de movimento esta inserido (compras, vendas, outras movimentações);
- Menu, etapa ou parametro citado: 3. Habilite nos parâmetros do Tipo de Movimento o parâmetro “Usar Cópia de Movimento por referência”, na etapa “Mov – Outros Dados”. O motivo da referencia deve ser “6 – Complementar/Retificadora”;

#### [370] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Utilização de máscaras no módulo Gestão de Estoque, Compras e Faturamento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de setembro de 2022 às 14:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7290884213399-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Utiliza%C3%A7%C3%A3o-de-m%C3%A1scaras-no-m%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7290884213399-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Utiliza%C3%A7%C3%A3o-de-m%C3%A1scaras-no-m%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como utilizar e a representação de máscaras no módulo TOTVS Gestão de Estoque, Compras e Faturamento.
- Menu, etapa ou parametro citado: Como utilizar e a representação de máscaras no módulo TOTVS Gestão de Estoque, Compras e Faturamento.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [371] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - O campo "Gerar Lançamentos (Faturamento)" deve ser preenchido
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de julho de 2022 às 15:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/7163264074135-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-O-campo-Gerar-Lan%C3%A7amentos-Faturamento-deve-ser-preenchido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/7163264074135-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-O-campo-Gerar-Lan%C3%A7amentos-Faturamento-deve-ser-preenchido)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como solucionar o erro: O campo "Gerar Lançamentos (Faturamento) " deve ser preenchido.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [372] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Desconsiderar Regra de Seleção de Natureza
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 12:55
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4501076417815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Desconsiderar-Regra-de-Sele%C3%A7%C3%A3o-de-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4501076417815-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Desconsiderar-Regra-de-Sele%C3%A7%C3%A3o-de-Natureza)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00 :02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como funciona o Parâmetros | Movimento | Etapa Fis-Natureza | Desconsiderar Regra de Seleção de Natureza ?
- Menu, etapa ou parametro citado: Como funciona o Parâmetros | Movimento | Etapa Fis-Natureza | Desconsiderar Regra de Seleção de Natureza ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - 12.1.33.

#### [373] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Exibir Razão Social do Cliente/Fornecedor ao incluir Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:02
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4445329610519-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Exibir-Raz%C3%A3o-Social-do-Cliente-Fornecedor-ao-incluir-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4445329610519-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Exibir-Raz%C3%A3o-Social-do-Cliente-Fornecedor-ao-incluir-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura : 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para que ao incluir um movimento, o campo Cliente/Fornecedor exiba a Razão Social e não o Nome Fantasia ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Financeira | etapa Definições Financeira, campo Descreve Cliente/Fornecedor e altere para a opção Nome.

#### [374] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Ativar/Inativar Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de outubro de 2021 às 16:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4410718222231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Ativar-Inativar-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4410718222231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Ativar-Inativar-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Processo Ativar/Inativar Movimento.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O processo executado não altera seu estoque, contabilidade, financeiro e fiscal, ele só irá bloquear a edição e ao tentar editar ocorrerá a mensagem abaixo:

#### [375] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como configurar Produto para editar código de barras?
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 21 de abril de 2025 às 15:01
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4410246418199-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-configurar-Produto-para-editar-c%C3%B3digo-de-barras](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4410246418199-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-configurar-Produto-para-editar-c%C3%B3digo-de-barras)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida:
- Evidencia inicial: Como configurar Produto para editar código de barras?
- Menu, etapa ou parametro citado: Ambiente:
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tabelas | Produtos | Etapa 8 - Lote | Na flag "Uso código EAN" use:

#### [376] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Job Agendado executa sempre o mesmo registro
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 12:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409306337943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Job-Agendado-executa-sempre-o-mesmo-registro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409306337943-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Job-Agendado-executa-sempre-o-mesmo-registro)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como integracao-ou-automacao e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00 :01:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao realizar o agendamento do um JOB este é executado sempre para os mesmo registros todas as vezes.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmento - TOTVS Backoffice (Linha RM) - TOTVS Gestão Estoque, Compras e Faturamento - Todas as versões.
- Artefato tecnico citado: Ao realizar o agendamento do um JOB este é executado sempre para os mesmo registros todas as vezes.
- Artefato tecnico citado: Esse incidente ocorre pois o JOB agendado necessita da seleção do registro a ser processado.

#### [377] Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Flag "Não calcular movimento ao abrir edição (Faturamento)" Não é Exibida nos Parâmetros do Tipo de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 12:08
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407617084695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Flag-N%C3%A3o-calcular-movimento-ao-abrir-edi%C3%A7%C3%A3o-Faturamento-N%C3%A3o-%C3%A9-Exibida-nos-Par%C3%A2metros-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407617084695-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Flag-N%C3%A3o-calcular-movimento-ao-abrir-edi%C3%A7%C3%A3o-Faturamento-N%C3%A3o-%C3%A9-Exibida-nos-Par%C3%A2metros-do-Tipo-de-Movimento)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: A flag Não calcular movimento ao abrir edição (Faturamento) não é exibida nos parâmetros do Tipo de Movimento para seleção:
- Menu, etapa ou parametro citado: A flag Não calcular movimento ao abrir edição (Faturamento) não é exibida nos parâmetros do Tipo de Movimento para seleção:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

#### [378] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Não é possível Gerar Ordem de Compra na Cotação.
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 21 de fevereiro de 2022 às 15:44
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407497682583-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-Gerar-Ordem-de-Compra-na-Cota%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407497682583-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-N%C3%A3o-%C3%A9-poss%C3%ADvel-Gerar-Ordem-de-Compra-na-Cota%C3%A7%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, cotacao, estoque, compras, faturamento, ordem de compra
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Ao executar o processo de Gerar Ordem de Compra a partir de uma Cotação, sistema apresenta a seguinte mensagem:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 3\. Verifique se nos parâmetros da Solicitação de Compra que está sendo cotada, etapa Compra/Venda - Características, foi preenchido o campo Movimento Gerado (Default) com a Ordem de Compra a ser gerada pela cotação.
- Menu, etapa ou parametro citado: Para isso acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão de Compras | Solicitação de Compras | Selecionar o tipo de movimento utilizado | Etapa 49: Compra/Venda - Características:

#### [379] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Condição de Pagamento não permitida para o tipo de movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de fevereiro de 2022 às 12:38
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404367309975-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Condi%C3%A7%C3%A3o-de-Pagamento-n%C3%A3o-permitida-para-o-tipo-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4404367309975-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Condi%C3%A7%C3%A3o-de-Pagamento-n%C3%A3o-permitida-para-o-tipo-de-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Causa
- Evidencia inicial: Ao incluir um Movimento é apresentada a mensagem:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.00.
- Menu, etapa ou parametro citado: A mensagem é apresentada pois nos parâmetros do Tipo de Movimento, etapa Fin - Condições de Pagamento a flag Edita Condições Pagamento do Cliente\\Fornecedor ​​ está selecionada mas não há nenhuma Condição de Pagamento Default informada no cadastro do Cliente\\Fornecedor.

#### [380] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Descontar o Valor do ICMS da Base de Cálculo das Contribuições Sociais
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 4 de novembro de 2025 às 18:12
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402705309335-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Descontar-o-Valor-do-ICMS-da-Base-de-C%C3%A1lculo-das-Contribui%C3%A7%C3%B5es-Sociais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402705309335-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Descontar-o-Valor-do-ICMS-da-Base-de-C%C3%A1lculo-das-Contribui%C3%A7%C3%B5es-Sociais)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida Como descontar o valor do ICMS da base de cálculo das contribuições PIS e COFINS?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Para abater o valor do ICMS da base de cálculo das contribuições PIS/COFINS e demais tributos conforme regra de negócio é necessário acessar os parâmetros do tipo de movimento, etapa Fis - Tributação Item, editar a fórmula de base de cálculo do PIS e COFINS e subtrair o ICMS usando a função LVL('ICMS').
- Menu, etapa ou parametro citado: A partir da versão 12.1.31.200 o sistema irá seguir a seguinte sequência de cálculo para definir os valores de integração fiscal do movimento:

#### [381] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – MAT - Filial 0 não possui estado cadastrado! Não é possível escriturar movimento.
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de fevereiro de 2022 às 11:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402269351191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Filial-0-n%C3%A3o-possui-estado-cadastrado-N%C3%A3o-%C3%A9-poss%C3%ADvel-escriturar-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402269351191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Filial-0-n%C3%A3o-possui-estado-cadastrado-N%C3%A3o-%C3%A9-poss%C3%ADvel-escriturar-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao escriturar NF sistema apresenta a seguinte mensagem:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Sendo assim, é necessários que acesse Parâmetros | Gestão de Estoque, Compras e Faturamento | acesse o tipo de movimento desejado, etapa Mov – Emitente/Destinatário 1/2:

#### [382] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Devolução de Compra
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 20 de junho de 2022 às 15:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360060744853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Compra](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360060744853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Compra)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00 min Dúvida
- Evidencia inicial: Como realizar Devolução de Compra ?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar Cadastros | Financeiros | Mais... | Tipo de Documento :

#### [383] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Importar/Exportar Parâmetros do Tipo de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 24 de abril de 2025 às 10:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360053978214-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Importar-Exportar-Par%C3%A2metros-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360053978214-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Importar-Exportar-Par%C3%A2metros-do-Tipo-de-Movimento)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como importar ou exportar parametrização de um Tipo de Movimento gerando arquivo XML ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1. Acesse o menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Selecione os parâmetros do tipo de movimento desejado (caso encontre dificuldades em localizar o movimento https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento );
- Artefato tecnico citado: Como importar ou exportar parametrização de um Tipo de Movimento gerando arquivo XML ?
- Artefato tecnico citado: - Caso deseje exportar, será gerado um arquivo XML que poderá ser salvo em qualquer diretório de sua máquina;

#### [384] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Usuário Logado Como Remente do Envio de E-mail
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 26 de outubro de 2021 às 12:37
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360041480114-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Usu%C3%A1rio-Logado-Como-Remente-do-Envio-de-E-mail](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360041480114-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Usu%C3%A1rio-Logado-Como-Remente-do-Envio-de-E-mail)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como utilizar o e-mail do Usuário Logado como remetente?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse o menu Ambiente | Parâmetros;

#### [385] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV- Movimento de Exportação
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 12:31
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038990334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-de-Exporta%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038990334-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-de-Exporta%C3%A7%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como parametrizar o sistema para incluir movimento de exportação?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [386] Movimento de Exportação
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813144](https://tdn.totvs.com/pages/releaseview.action?pageId=4813144)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Movimento de Exportação
- Evidencia inicial: Produto:
- Evidencia inicial: RMNucleus
- Menu, etapa ou parametro citado: Ambiente:
- Menu, etapa ou parametro citado: - Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento
- Menu, etapa ou parametro citado: Acessar | Opções | Parâmetros | RMNucleus | e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

#### [387] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como preencher município no movimento automaticamente
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 18 de agosto de 2022 às 15:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038209473-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-preencher-munic%C3%ADpio-no-movimento-automaticamente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360038209473-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-preencher-munic%C3%ADpio-no-movimento-automaticamente)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como parametrizar o sistema para buscar alíquota ISS do município da filial ou do fornecedor?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: - Ao utilizar Município por Item os dados de município serão apresentados item a item e replicados para o campo | Município | Integrações | Fiscal | do movimento apenas se todos os itens inclusos possuírem o mesmo município ;

#### [388] INT0005 Integracao Financeira Valores Opcionais
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [389] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Faturamento Automático
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de junho de 2024 às 09:02
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037246674-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Faturamento-Autom%C3%A1tico](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360037246674-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Faturamento-Autom%C3%A1tico)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como parametrizar o movimento para faturamento automático?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.80.
- Menu, etapa ou parametro citado: Acesse os parâmetros do movimento origem, etapa Compra/Venda - Características e altere o campo Opção de Faturamento para Automático , onde o faturamento irá ocorrer para o Tipo de Movimento Gerado (Default) informado.
- Menu, etapa ou parametro citado: Caso encontre dificuldades para localizar os parâmetros do tipo de movimento, https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento .

#### [390] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Inclusão de Movimento de Importação
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 11:59
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036935393-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Inclus%C3%A3o-de-Movimento-de-Importa%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036935393-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Inclus%C3%A3o-de-Movimento-de-Importa%C3%A7%C3%A3o)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como parametrizar o sistema para incluir movimento de importação?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [391] Movimento de Importação
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=4813042](https://tdn.totvs.com/pages/releaseview.action?pageId=4813042)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: FAQ: Movimento de Importação
- Evidencia inicial: Avaliação
- Evidencia inicial: - Como Fazer
- Menu, etapa ou parametro citado: - Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento
- Menu, etapa ou parametro citado: Acessar | Opções | Parâmetros | RMNucleus | e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:
- Menu, etapa ou parametro citado: \- Data do Movimento Default: informar qual será a data considerada para afetar estoque e apresentação dos dados da ficha física financeira.

#### [392] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Buscar preço em fórmula de preço
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 5 de outubro de 2021 às 09:48
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036630853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Buscar-pre%C3%A7o-em-f%C3%B3rmula-de-pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036630853-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Buscar-pre%C3%A7o-em-f%C3%B3rmula-de-pre%C3%A7o)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 03:00 min
- Evidencia inicial: Dúvida: Como parametrizar o sistema para "Buscar preço em" utilizando uma Fórmula de Preço ?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Dúvida: Como parametrizar o sistema para "Buscar preço em" utilizando uma Fórmula de Preço ?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: Solução Ao parametrizar o tipo de movimento para Buscar Preço Em Fórmula de Preço 1/2 será necessário criar e associar esta fórmula a uma condição de pagamento. Para criar tal fórmula será necessário acessar o módulo de Serviços Globais Administração Fórmulas , vale lembrar que o Sistema selecionado deverá ser o Gestão de Estoque, Compras e Faturamento .

#### [393] Definições dos Parâmetros de Ressuprimento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=64651723](https://tdn.totvs.com/pages/releaseview.action?pageId=64651723)
- Classificacao inferida: parametrizacao, estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Evidencia inicial: Processo de Negocio: Ressuprimento
- Evidencia inicial: Subprocesso: Definições dos Parâmetros de Ressuprimento
- Menu, etapa ou parametro citado: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Menu, etapa ou parametro citado: Subprocesso: Definições dos Parâmetros de Ressuprimento
- Menu, etapa ou parametro citado: PARÂMETROS DE RESSUPRIMENTO

#### [394] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Calcular o Valor Original do Lançamento Financeiro?
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 12:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036106553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Calcular-o-Valor-Original-do-Lan%C3%A7amento-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036106553-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Calcular-o-Valor-Original-do-Lan%C3%A7amento-Financeiro)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como o Valor Original do Lançamento Financeiro é calculado, de acordo com a parametrização da Condição de Pagamento estabelecida nos parâmetros do tipo de movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como o Valor Original do Lançamento Financeiro é calculado, de acordo com a parametrização da Condição de Pagamento estabelecida nos parâmetros do tipo de movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [395] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimentação de Transferência de Produtos
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 24 de abril de 2025 às 10:15
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034890894-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimenta%C3%A7%C3%A3o-de-Transfer%C3%AAncia-de-Produtos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034890894-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimenta%C3%A7%C3%A3o-de-Transfer%C3%AAncia-de-Produtos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como realizar uma transferência de saldo de mercadorias para diferentes Locais de Estoque e Filiais em uma mesma Coligada?
- Menu, etapa ou parametro citado: Como realizar uma transferência de saldo de mercadorias para diferentes Locais de Estoque e Filiais em uma mesma Coligada?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as Versões.
- Menu, etapa ou parametro citado: Solução As movimentações de transferências de mercadorias são tipos de movimento 3.1.XX que envolvem diferentes locais de estoque da mesma filial ou de filiais distintas de uma mesma coligadas. São realizadas com objetivo de retirar um determinado saldo de produto do estoque do remetente para o estoque de outro estabelecimento pertencente à própria empresa.

#### [396] TRF0002 Transferencia de Mercadoria Utilizando Local de Estoque Transitorio
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio](https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [397] TRF0002 Transferencia de Mercadoria Utilizando Local de Estoque Transitorio
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio](https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [398] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como aplicar redução de Base de Cálculo para os tributos ISS e ICMS aplicação do parâmetro Base Cheia
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de setembro de 2022 às 10:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034641633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-aplicar-redu%C3%A7%C3%A3o-de-Base-de-C%C3%A1lculo-para-os-tributos-ISS-e-ICMS-aplica%C3%A7%C3%A3o-do-par%C3%A2metro-Base-Cheia](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034641633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-aplicar-redu%C3%A7%C3%A3o-de-Base-de-C%C3%A1lculo-para-os-tributos-ISS-e-ICMS-aplica%C3%A7%C3%A3o-do-par%C3%A2metro-Base-Cheia)
- Classificacao inferida: movimento, parametrizacao, compras, estoque, fiscal
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como aplicar automaticamente na base de cálculo dos tributos ICMS ou ISS sua redução previamente cadastrada.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar o cadastro de Produto | Anexos | Tributos do Produto por Município selecione o município em questão e informe a redução no campo Base Redução ISS (%) .
- Menu, etapa ou parametro citado: 3\. Acesse Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento | Fis - Tributação Item e para o tributo em questão selecione a opção Sim para a coluna Base Cheia .

#### [399] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Permite Visualização dos dados no Filtro por Usuário
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 22 de abril de 2025 às 12:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034074054-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Permite-Visualiza%C3%A7%C3%A3o-dos-dados-no-Filtro-por-Usu%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034074054-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Permite-Visualiza%C3%A7%C3%A3o-dos-dados-no-Filtro-por-Usu%C3%A1rio)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar acessar tela de lookup onde usuário possui filtro sistema não restringe a visualização dos dados restritos.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento, ao tentar acessar tela de lookup onde usuário possui filtro sistema não restringe a visualização dos dados restritos.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [400] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Controlar Permissão para Visualizar/Alterar Parâmetros do Módulo Gestão de Estoque, Compras e Faturamento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:47
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026576454-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Controlar-Permiss%C3%A3o-para-Visualizar-Alterar-Par%C3%A2metros-do-M%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026576454-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Controlar-Permiss%C3%A3o-para-Visualizar-Alterar-Par%C3%A2metros-do-M%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como controlar o acesso do usuário para visualizar ou alterar os parâmetros do módulo Gestão de Estoque, Compras e Faturamento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como controlar o acesso do usuário para visualizar ou alterar os parâmetros do módulo Gestão de Estoque, Compras e Faturamento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução Se o usuário não precisar visualizar ou alterar nenhum parâmetro, poderá acessar módulo Serviços Globais Segurança Perfis Sistema: Gestão de Estoque, Compras e Faturamento editar o perfil do usuário aba Acesso a Menus e desmarcar a permissão para acessar parâmetros do módulo \[12.02.03.01\] .

#### [401] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Default Para Modalidade de Base de Cálculo do ICMS e ICMS ST na Tributação do Item de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:47
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025941434-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Default-Para-Modalidade-de-Base-de-C%C3%A1lculo-do-ICMS-e-ICMS-ST-na-Tributa%C3%A7%C3%A3o-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025941434-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Default-Para-Modalidade-de-Base-de-C%C3%A1lculo-do-ICMS-e-ICMS-ST-na-Tributa%C3%A7%C3%A3o-do-Item-de-Movimento)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como preencher a Modalidade de Base de Cálculo do ICMS e ICMS ST automaticamente na aba Tributos e Valores | Tributos do item de movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como preencher a Modalidade de Base de Cálculo do ICMS e ICMS ST automaticamente na aba Tributos e Valores | Tributos do item de movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [402] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Relacionar o Funcionário ao Usuário de Login no Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025696533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Relacionar-o-Funcion%C3%A1rio-ao-Usu%C3%A1rio-de-Login-no-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025696533-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Relacionar-o-Funcion%C3%A1rio-ao-Usu%C3%A1rio-de-Login-no-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como relacionar o Funcionário ( Vendedor/Comprador ) ao usuário logado na aplicação ao incluir um movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1. Acesse menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Selecione o tipo de movimento a ser parametrizado com um duplo clique na Etapa Mov - Tab - Funcionário e marque a flag Relacionar Funcionário 1 ao Usuário de Login .

#### [403] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir aba "Processos Judiciais" e "Normas Referenciadas" no movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025624113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-aba-Processos-Judiciais-e-Normas-Referenciadas-no-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025624113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-aba-Processos-Judiciais-e-Normas-Referenciadas-no-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Qual a parametrização necessária para que as abas Processos Judiciais e Normas Referenciadas sejam exibidas ao incluir um movimento
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Qual a parametrização necessária para que as abas Processos Judiciais e Normas Referenciadas sejam exibidas ao incluir um movimento
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [404] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Departamento Default desabilitado
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:45
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024615854-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Departamento-Default-desabilitado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024615854-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Departamento-Default-desabilitado)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento para que possua um Departamento default o campo se encontra desabilitado para edição.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento para que possua um Departamento default o campo se encontra desabilitado para edição.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esse incidente ocorre pois o cadastro de Departamento é vinculado ao cadastro de Filial, portanto se não houver uma Filial Default nos parâmetros do tipo de movimento o campo permanecerá desabilitado para edição.

#### [405] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Desabilitar os Campos Filial de Saída e Local de Saída em Movimentos
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:44
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028660412-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Desabilitar-os-Campos-Filial-de-Sa%C3%ADda-e-Local-de-Sa%C3%ADda-em-Movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028660412-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Desabilitar-os-Campos-Filial-de-Sa%C3%ADda-e-Local-de-Sa%C3%ADda-em-Movimentos)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência Ao incluir um movimento os campos Filial de Saída (ou Entrega) e Local de Saída são visualizados na parte inferior da aba Identificação | Cabeçalho para preenchimento obrigatório.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência Ao incluir um movimento os campos Filial de Saída (ou Entrega) e Local de Saída são visualizados na parte inferior da aba Identificação | Cabeçalho para preenchimento obrigatório.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento;
- Artefato tecnico citado: Solução Para desabilitar os campos referentes a Filial (TMOV.CODFILIALENTREGA) e Local de Entrega ou Saída (TMOV.CODLOCENTREGA), realize os seguintes passos:

#### [406] TRF0002 Transferencia de Mercadoria Utilizando Local de Estoque Transitorio
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio](https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio)
- Classificacao inferida: estoque
- Gatilhos de busca observados: estoque
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [407] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Tipo de movimento classificado como Solicitação de Compras deve ter as seguintes configurações
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 17 de abril de 2025 às 16:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028659092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Tipo-de-movimento-classificado-como-Solicita%C3%A7%C3%A3o-de-Compras-deve-ter-as-seguintes-configura%C3%A7%C3%B5es](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028659092-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Tipo-de-movimento-classificado-como-Solicita%C3%A7%C3%A3o-de-Compras-deve-ter-as-seguintes-configura%C3%A7%C3%B5es)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento referente a Solicitação de Compras sistema exibe a mensagem abaixo: Tipo de movimento classificado como 'Solicitação de Compras ( Gestão Compras)' deve ter as seguintes configurações:
- Evidencia inicial: Tipo de Movimento do Grupo 1.1
- Menu, etapa ou parametro citado: Ocorrência No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar parametrizar Tipo de Movimento referente a Solicitação de Compras sistema exibe a mensagem abaixo: Tipo de movimento classificado como 'Solicitação de Compras ( Gestão Compras)' deve ter as seguintes configurações:
- Menu, etapa ou parametro citado: Tipo de Movimento de Compras igual "Solicitação de Compras" ( Compra/Venda - Outros )
- Menu, etapa ou parametro citado: Ambiente RM – Gestão de Estoque, Compras e Faturamento – Todas as Versões

#### [408] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Composição de Parcela em Branco
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:37
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028696911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Composi%C3%A7%C3%A3o-de-Parcela-em-Branco](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028696911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Composi%C3%A7%C3%A3o-de-Parcela-em-Branco)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao acessar cadastro de Condição de Pagamento , a aba de Composição de Parcelas não exibe nenhuma linha para definir regras
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esse incidente ocorre, pois a parametrização do sistema a etapa Integração | Financeira | Condição de Pagamento não foi configurada para exibir tais linhas

#### [409] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Utilizar Produtos Compostos em Movimentações
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028609771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Utilizar-Produtos-Compostos-em-Movimenta%C3%A7%C3%B5es](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360028609771-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Utilizar-Produtos-Compostos-em-Movimenta%C3%A7%C3%B5es)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como cadastrar produtos compostos e utiliza-los em movimentos?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acessar menu Cadastros | Produtos | Cadastrar o produto composto (Kit) ;
- Menu, etapa ou parametro citado: 2\. Ainda no cadastro do produto acesse Anexos | Produtos Compostos e informe quais são os subprodutos deste kit, definindo também a quantidade de cada um na composição e unidade de medida;

#### [410] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Habilitar o Uso de Código de Barras (EAN)
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027312251-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Habilitar-o-Uso-de-C%C3%B3digo-de-Barras-EAN](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027312251-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Habilitar-o-Uso-de-C%C3%B3digo-de-Barras-EAN)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como habilitar o uso de código de barras (EAN) no cadastro de produto?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução Para habilitar o uso de Código de Barras no cadastro de produto, também chamado de Código EAN é necessário acessar menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Tabelas Produtos etapa Lote e escolher opção diferente de Não usa, para o campo Usa Código EAN .

#### [411] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Tipo de movimento: Habilitar o campo Usar Mensagens Definidas na Natureza
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:33
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026414191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Tipo-de-movimento-Habilitar-o-campo-Usar-Mensagens-Definidas-na-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026414191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Tipo-de-movimento-Habilitar-o-campo-Usar-Mensagens-Definidas-na-Natureza)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Como habilitar o campo Usar Mensagens Definidas na Natureza no Parâmetro do Tipo de Movimento etapa Fis - Dados ?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Solução \- Acesse o menu Ambiente - Parâmetros - Gestão de estoque - Integrações - Fiscais

#### [412] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - S-1250: Parametrizar Tipo de movimento NF Emissão Produtor Rural
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 2 de agosto de 2022 às 16:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026244351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-S-1250-Parametrizar-Tipo-de-movimento-NF-Emiss%C3%A3o-Produtor-Rural](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026244351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-S-1250-Parametrizar-Tipo-de-movimento-NF-Emiss%C3%A3o-Produtor-Rural)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Qual a Parametrização necessária para inclusão de Movimento referente aquisição de mercadoria onde a nota fiscal foi emitida pelo Produtor Rural a fim de atender a geração do Registro S-1250 do eSocial
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esta parametrização irá habilitar o campo Código Natureza de Operação na aba Integração - Fiscal do movimento. (Corresponde ao campo CODNAT).
- Menu, etapa ou parametro citado: As demais parametrizações devem ser realizadas de acordo com a regra específica do seu negócio. Foram listados apenas os parâmetros necessários par a geração do registro S-1250.
- Artefato tecnico citado: Em virtude disso, foi criado um serviço de geração de arquivo .xml para uso do módulo Gestão de Folha de Pagamento, que retornará dados necessários para a geração da rotina eSocial, mais especificamente o registro S-1250 - Aquisição de Produção Rural, conforme leiaute definido pela Receita Federal do Brasil.
- Artefato tecnico citado: SELECT TMOV.CODCOLIGADA, TMOV.CODFILIAL, TMOV.IDMOV, TITMMOV.VALORBRUTOITEM VALORBRUTO,

#### [413] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - S-1250: Parametrizar Tipo de movimento NF Emissão Produtor Rural
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 2 de agosto de 2022 às 16:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026244351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-S-1250-Parametrizar-Tipo-de-movimento-NF-Emiss%C3%A3o-Produtor-Rural](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026244351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-S-1250-Parametrizar-Tipo-de-movimento-NF-Emiss%C3%A3o-Produtor-Rural)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Qual a Parametrização necessária para inclusão de Movimento referente aquisição de mercadoria onde a nota fiscal foi emitida pelo Produtor Rural a fim de atender a geração do Registro S-1250 do eSocial
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esta parametrização irá habilitar o campo Código Natureza de Operação na aba Integração - Fiscal do movimento. (Corresponde ao campo CODNAT).
- Menu, etapa ou parametro citado: As demais parametrizações devem ser realizadas de acordo com a regra específica do seu negócio. Foram listados apenas os parâmetros necessários par a geração do registro S-1250.
- Artefato tecnico citado: Em virtude disso, foi criado um serviço de geração de arquivo .xml para uso do módulo Gestão de Folha de Pagamento, que retornará dados necessários para a geração da rotina eSocial, mais especificamente o registro S-1250 - Aquisição de Produção Rural, conforme leiaute definido pela Receita Federal do Brasil.
- Artefato tecnico citado: SELECT TMOV.CODCOLIGADA, TMOV.CODFILIAL, TMOV.IDMOV, TITMMOV.VALORBRUTOITEM VALORBRUTO,

#### [414] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Tipo de Movimento não exibido em nenhum menu
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 25 de novembro de 2021 às 11:01
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026070031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipo-de-Movimento-n%C3%A3o-exibido-em-nenhum-menu](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026070031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipo-de-Movimento-n%C3%A3o-exibido-em-nenhum-menu)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Ocorrência
- Evidencia inicial: O Tipo de Movimento não é exibido em nenhum menu da nova MDI mesmo que o usuário possua permissão.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.40.
- Menu, etapa ou parametro citado: Causa Esta situação ocorre pois o Tipo de Movimento não possui uma Classificação preenchida em seus parâmetros. Ao configurar um tipo de movimento, se faz necessário que sua Classificação existente na etapa Mov - Identificação seja preenchida, uma vez que esta informação é quem irá definir qual menu do sistema este tipo de movimento será acessado.

#### [415] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - A unidade está incompatível quando o tipo de movimento é integrado com o RM Vitae
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 19 de julho de 2023 às 15:29
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025809531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-A-unidade-est%C3%A1-incompat%C3%ADvel-quando-o-tipo-de-movimento-%C3%A9-integrado-com-o-RM-Vitae](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025809531-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-A-unidade-est%C3%A1-incompat%C3%ADvel-quando-o-tipo-de-movimento-%C3%A9-integrado-com-o-RM-Vitae)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como fora e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Ocorrência Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência Ao salvar os parâmetros do tipo de movimento o sistema apresenta a mensagem:
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [416] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Valores Opcionais de Item desabilitados
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 9 de dezembro de 2021 às 16:07
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025143971-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Valores-Opcionais-de-Item-desabilitados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025143971-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Valores-Opcionais-de-Item-desabilitados)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00 min.
- Evidencia inicial: Ocorrência Ao parametrizar tipo de movimento a etapa Item - Valores Financeiros 1/2 os campos Valor Opcional 1 e Valor opcional 2 não se encontram habilitados para utilização
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [417] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - FAT - Como consistir base de CNPJ de Cli/For no Faturamento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 9 de março de 2023 às 15:20
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Como-consistir-base-de-CNPJ-de-Cli-For-no-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024005911-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-FAT-Como-consistir-base-de-CNPJ-de-Cli-For-no-Faturamento)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 02:00 min
- Evidencia inicial: Dúvida Como faturar movimento onde apenas a base do CNPJ será mantida no movimento de destino?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da versão 11
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da versão 11

#### [418] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Executável Delphi não abre
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 17:19
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022342652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Execut%C3%A1vel-Delphi-n%C3%A3o-abre](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022342652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Execut%C3%A1vel-Delphi-n%C3%A3o-abre)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida Ao abrir executável Delphi do sistema a mensagem abaixo é apresentada:
- Evidencia inicial: Ou ao clicar no botão "Iniciar executável do módulo"
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A partir da versão 12.1.21 a visão Delphi do módulo de Gestão de Estoque, Compras e Faturamento se encontra descontinuada uma vez que todos os recursos do módulo se encontram migrados para .Net.
- Artefato tecnico citado: Para que relatórios Delphi sejam impressos via nova MDI a flag "Executa em Job Server" precisa estar marcada na configuração de seu relatório.

#### [419] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como realizar movimentação com moeda estrangeira
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de dezembro de 2021 às 14:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022287012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-realizar-movimenta%C3%A7%C3%A3o-com-moeda-estrangeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022287012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-realizar-movimenta%C3%A7%C3%A3o-com-moeda-estrangeira)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como posso incluir movimentação no sistema onde a moeda utilizada seja estrangeira?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM – TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM – TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.
- Menu, etapa ou parametro citado: Solução A movimentação que caracteriza uma transação em valor estrangeiro nada difere dos demais movimentos a não ser a moeda informada para o movimento através da aba Tributos e Valores | Valores:
- Menu, etapa ou parametro citado: A conversão de moeda ocorre antes da abertura do movimento de destino para edição, sendo assim a conversão sempre ocorrerá da moeda do movimento de origem para a moeda default informada nos parâmetros do tipo de movimento de destino.

#### [420] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Etapas de Integração desabilitadas nos Parâmetros do Tipo de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 17:21
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022405631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Etapas-de-Integra%C3%A7%C3%A3o-desabilitadas-nos-Par%C3%A2metros-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022405631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Etapas-de-Integra%C3%A7%C3%A3o-desabilitadas-nos-Par%C3%A2metros-do-Tipo-de-Movimento)
- Classificacao inferida: movimento, parametrizacao, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Ocorrência Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ocorrência Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Esse incidente ocorre porque em Parâmetros Integrações de Sistemas as integrações entre o Nucleus e os demais módulos não estão ativas.
- Artefato tecnico citado: 3\. No diretório de instalação do RM (totvs\\RM.Net), localize o arquivo RM.Host.ServiceManager.exe e desinstale o host, marcando a flag "Apagar \ Broker.dat".
- Artefato tecnico citado: 4. Reinicie o host, acesse o sistema novamente e verifique se as etapas de integração serão habilitadas nos parâmetros do tipo de movimento.

#### [421] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Contabilizar Movimento pelo Custo do Estoque
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de julho de 2022 às 17:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022152652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabilizar-Movimento-pelo-Custo-do-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022152652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabilizar-Movimento-pelo-Custo-do-Estoque)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como realizar a contabilização do movimento de modo que os custos do estoque sejam iguais aos valores da contabilidade gerada?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Dúvida Como realizar a contabilização do movimento de modo que os custos do estoque sejam iguais aos valores da contabilidade gerada?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [422] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Cópia de Tipo de Movimento entre Coligadas
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 24 de abril de 2025 às 10:16
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022041691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3pia-de-Tipo-de-Movimento-entre-Coligadas)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00 min
- Evidencia inicial: Dúvida Quais os pré-requisitos para efetuar a cópia de Tipo de Movimento entre Coligadas?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Menu Ambiente Parâmetros Gestão de Estoque, Compras e Faturamento Acesse qualquer classificação dos tipos de movimento Processos Cópia de Tipo de Movimento:
- Menu, etapa ou parametro citado: Antes de efetuar a cópia, todos os cadastros existentes na coligada de origem e que estejam associados ao Tipo de Movimento deverão existir também na coligada de destino, o conteúdo desses cadastros não precisa ser idêntico entre as coligadas mas sim o seu código .

#### [423] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aprovação de Movimento por Fórmula
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 17:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021669352-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aprova%C3%A7%C3%A3o-de-Movimento-por-F%C3%B3rmula](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021669352-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aprova%C3%A7%C3%A3o-de-Movimento-por-F%C3%B3rmula)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida Como realizar aprovação de movimento por formula?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [424] MOV0004 Aprovacao de Movimento por Formula
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/MOV0004_Aprovacao_de_Movimento_por_Formula](https://tdn.totvs.com/display/public/LRM/MOV0004_Aprovacao_de_Movimento_por_Formula)
- Classificacao inferida: movimento
- Gatilhos de busca observados: movimento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [425] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- RES - Definições dos Parâmetros de Ressuprimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 23 de julho de 2023 às 17:40
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Defini%C3%A7%C3%B5es-dos-Par%C3%A2metros-de-Ressuprimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021564652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-RES-Defini%C3%A7%C3%B5es-dos-Par%C3%A2metros-de-Ressuprimento)
- Classificacao inferida: parametrizacao, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para utilização do processo de Ressuprimento.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O processo de Ressuprimento tem como função básica à análise quantitativa do estoque de forma a aumentar a agilidade de resposta para demanda da empresa. Sendo uma ferramenta de Controle, o Ressuprimento auxilia o usuário a evitar erros de previsão de vendas gerando falta ou obsolescência de estoques, atrasos de entregas, divergências entre pedidos e nota fiscal.
- Menu, etapa ou parametro citado: Objetivo: Auxiliar o usuário na análise constante dos produtos em estoque, otimizando-os e dimensionando-os.

#### [426] Definições dos Parâmetros de Ressuprimento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=64651723](https://tdn.totvs.com/pages/releaseview.action?pageId=64651723)
- Classificacao inferida: parametrizacao, estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Evidencia inicial: Processo de Negocio: Ressuprimento
- Evidencia inicial: Subprocesso: Definições dos Parâmetros de Ressuprimento
- Menu, etapa ou parametro citado: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Menu, etapa ou parametro citado: Subprocesso: Definições dos Parâmetros de Ressuprimento
- Menu, etapa ou parametro citado: PARÂMETROS DE RESSUPRIMENTO

#### [427] Definições dos Parâmetros de Ressuprimento
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=64651723](https://tdn.totvs.com/pages/releaseview.action?pageId=64651723)
- Classificacao inferida: parametrizacao, estoque
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Evidencia inicial: Processo de Negocio: Ressuprimento
- Evidencia inicial: Subprocesso: Definições dos Parâmetros de Ressuprimento
- Menu, etapa ou parametro citado: Produto: TOTVS Gestão Estoque Compras e Faturamento Versão: 11.52 / 11.82
- Menu, etapa ou parametro citado: Subprocesso: Definições dos Parâmetros de Ressuprimento
- Menu, etapa ou parametro citado: PARÂMETROS DE RESSUPRIMENTO

#### [428] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturamento de Tipo de Movimento Específico
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 30 de novembro de 2022 às 11:36
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021361091-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturamento-de-Tipo-de-Movimento-Espec%C3%ADfico](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360021361091-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturamento-de-Tipo-de-Movimento-Espec%C3%ADfico)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência Porque ao faturar o movimento o código de tipo de movimento não aparece na tela Faturar / Receber
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [429] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como incluir o rateio por centro de custo, projeto e tarefa automaticamente
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 20 de setembro de 2022 às 23:35
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005050291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-o-rateio-por-centro-de-custo-projeto-e-tarefa-automaticamente](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360005050291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-incluir-o-rateio-por-centro-de-custo-projeto-e-tarefa-automaticamente)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Dúvida Como incluir o rateio de centro de custo, projeto e tarefa automaticamente ao salvar o movimento, baseando nos campos do item de movimento Tabelas | Centro de Custo , Integrações | Projetos | Identificador do Projeto e Identificador da Tarefa?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Como incluir o rateio de centro de custo, projeto e tarefa automaticamente ao salvar o movimento, baseando nos campos do item de movimento Tabelas | Centro de Custo , Integrações | Projetos | Identificador do Projeto e Identificador da Tarefa?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: - 1\. Acesse menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecione o tipo de movimento (duplo clique) e Avance;

#### [430] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como configurar o código de receita para as retenções de contribuições
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 17:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234611-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-configurar-o-c%C3%B3digo-de-receita-para-as-reten%C3%A7%C3%B5es-de-contribui%C3%A7%C3%B5es](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004234611-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-configurar-o-c%C3%B3digo-de-receita-para-as-reten%C3%A7%C3%B5es-de-contribui%C3%A7%C3%B5es)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar o sistema para levar o Código de Receita das Retenções de Contribuições PIS, COFINS E CSLL para o lançamento financeiro buscando o default do Cliente/Fornecedor?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Feita a configuração do tributo, deverá informa-lo na etapa Fis - Tributação - Movimento nos parâmetros do tipo de movimento que será utilizado para esta finalidade. Após informar o tributo, na própria linha, configure o campo de Procurar Alíquota Em para buscar o valor do Código de Receita conforme print:

#### [431] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como contabilizar Movimento a partir do Rateio por Centro de Custo
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de abril de 2025 às 15:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004090652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-contabilizar-Movimento-a-partir-do-Rateio-por-Centro-de-Custo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004090652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-contabilizar-Movimento-a-partir-do-Rateio-por-Centro-de-Custo)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura : 00:04:00 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar o Evento Contábil para poder buscar as contas contábeis e os valores da linha do rateio por centro de custo do Movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: - Fórmula: Para poder buscar o valor correto da linha do rateio, deverá utilizar a função TABMOVRATCCU.

#### [432] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como selecionar Exercício Fiscal
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 23 de julho de 2023 às 19:34
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004046852-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-selecionar-Exerc%C3%ADcio-Fiscal](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004046852-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-selecionar-Exerc%C3%ADcio-Fiscal)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: parametrizacao, estoque, fiscal, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como selecionar Exercício Fiscal por usuário?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

#### [433] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Código de Receita IRRF default para o movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 21 de março de 2022 às 12:52
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004019872-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-de-Receita-IRRF-default-para-o-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360004019872-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-C%C3%B3digo-de-Receita-IRRF-default-para-o-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:05:30 min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como configurar o Código de Receita do IRRF de forma a ser levado ao movimento automaticamente e consequentemente ser levado ao lançamento financeiro ?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Cadastro do Cliente/Fornecedor | Integrações | Tributos

#### [434] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como Aumentar o Número de Casas Decimais do Preço Unitário do Item de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de agosto de 2022 às 08:31
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003947371-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-Aumentar-o-N%C3%BAmero-de-Casas-Decimais-do-Pre%C3%A7o-Unit%C3%A1rio-do-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003947371-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-Aumentar-o-N%C3%BAmero-de-Casas-Decimais-do-Pre%C3%A7o-Unit%C3%A1rio-do-Item-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Como aumentar o número de casas decimais a ser utilizado em preço unitário de um item de movimento sem afetar o número de casas decimais dos demais valores do sistema?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1\. Acesse o menu Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento - Tabelas - Produtos - Definições de Produto 3/3 , marque a flag Casas Decimais Preço e salve a parametrização:

#### [435] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Exercício Fiscal cadastrado não é exibido em Seleção de Contexto
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 30 de novembro de 2021 às 17:11
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003903012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exerc%C3%ADcio-Fiscal-cadastrado-n%C3%A3o-%C3%A9-exibido-em-Sele%C3%A7%C3%A3o-de-Contexto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003903012-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Exerc%C3%ADcio-Fiscal-cadastrado-n%C3%A3o-%C3%A9-exibido-em-Sele%C3%A7%C3%A3o-de-Contexto)
- Classificacao inferida: compras, estoque, fiscal
- Gatilhos de busca observados: parametrizacao, estoque, fiscal, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min
- Evidencia inicial: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar a Seleção de Exercício Fiscal via seleção de contexto nenhum exercício é apresentado neste havendo exercício cadastrado para a filial selecionada.
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.
- Menu, etapa ou parametro citado: Ocorrência No módulo Gestão de Estoque, Compras e Faturamento , ao tentar realizar a Seleção de Exercício Fiscal via seleção de contexto nenhum exercício é apresentado neste havendo exercício cadastrado para a filial selecionada.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.
- Menu, etapa ou parametro citado: Esse incidente ocorre, pois a parametrização do sistema em Integração | Fiscal não foi efetuada para a coligada em questão.

#### [436] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Apuração de Tributos - FUNRURAL, GILRAT, SENAR \ INSS, INSS15, INSS20, INSS25
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 21 de abril de 2025 às 14:18
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003850232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Apura%C3%A7%C3%A3o-de-Tributos-FUNRURAL-GILRAT-SENAR-INSS-INSS15-INSS20-INSS25](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003850232-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Apura%C3%A7%C3%A3o-de-Tributos-FUNRURAL-GILRAT-SENAR-INSS-INSS15-INSS20-INSS25)
- Classificacao inferida: movimento, compras, estoque, fiscal
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como Configurar o sistema para atendimento ao regime especial de aposentadoria para os Tributos FUNRURAL, GILRAT E SENAR \\ INSS, INSS15, INSS20 E INSS25?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Caso possua integração com o NUCLEUS e execute o processo de Escrituração do Nucleus x LIBER siga os passos abaixo para parametrização do Movimento. (Caso não exista integração com o NUCLEUS avance para o passo 2 – Apuração).

#### [437] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir os Dados de Inclusão no movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de fevereiro de 2022 às 13:22
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003715552-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-os-Dados-de-Inclus%C3%A3o-no-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003715552-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-os-Dados-de-Inclus%C3%A3o-no-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para apresentar os Dados da Inclusão de movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 11.82.
- Menu, etapa ou parametro citado: 1. Acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento ;

#### [438] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como habilitar os campos Valor do Material e Valor Sub Empreitada
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 17:28
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003171871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-os-campos-Valor-do-Material-e-Valor-Sub-Empreitada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003171871-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-os-campos-Valor-do-Material-e-Valor-Sub-Empreitada)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida Qual parametrização realizar para habilitar os campo Valor do Material e Valor Sub Empreitada na integração Fiscal do movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Dúvida Qual parametrização realizar para habilitar os campo Valor do Material e Valor Sub Empreitada na integração Fiscal do movimento?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 2. Menu Ambiente | Parâmetros | TOTVS Gestão Fiscal;

#### [439] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como descobrir a classificação e menu do Tipo de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 24 de abril de 2025 às 10:13
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como descobrir qual a classificação e em qual menu o Tipo de Movimento está listado?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: A informação importante deste retorno é a coluna CLASSIFICACAO . Esta coluna guarda a classificação e menu que o movimento está nos parâmetros.
- Artefato tecnico citado: SELECT CLASSIFICACAO, \ FROM TTMV WHERE CODTMV = 'X' AND CODCOLIGADA = 'Y'

#### [440] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Utilização de Preço Total no Item de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 8 de dezembro de 2021 às 10:10
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000643827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-Pre%C3%A7o-Total-no-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000643827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-Pre%C3%A7o-Total-no-Item-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura : 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para utilização de Preço Total no Item de Movimento e levar este valor para o Lançamento Financeiro?
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80.
- Menu, etapa ou parametro citado: 1. Acesse os parâmetros do tipo de movimento em Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecionar o Tipo de Movimento utilizado (caso encontre dificuldades para localizar o tipo de movimento, https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search) avance até a etapa 28 - Item - Preços , marque a opção Editar Preço Total e coloque a forma de calculo como Calcular Preço Total:
- Menu, etapa ou parametro citado: 2. Após esta edição, acesse a etapa 13 - Mov - Valores Financeiros 2/4 e informe uma fórmula para o valor bruto que tenha a função responsável pela busca do valor Preço Total .

#### [441] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como habilitar mais de 4 casas decimais para Preço Unitário
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 5 de julho de 2024 às 17:37
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000650788-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-mais-de-4-casas-decimais-para-Pre%C3%A7o-Unit%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000650788-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-habilitar-mais-de-4-casas-decimais-para-Pre%C3%A7o-Unit%C3%A1rio)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para habilitar a edição de mais de 4 casas decimais para o preço unitário do item de movimento?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.82.
- Menu, etapa ou parametro citado: 1. Acessar os parâmetros em Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Tabelas | Produtos e avance até a etapa Definições de Produto 3/3 e marque a opção Casas Decimais Preço conforme destaque do print abaixo:

#### [442] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como buscar Alíquota no Tipo de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 19 de janeiro de 2022 às 09:55
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000629948-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-no-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000629948-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-no-Tipo-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida Como parametrizar o Movimento para utilizar a Alíquota definida no Tributo do Tipo de Movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 1. Acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | de acordo com a classificação, avance, marque o tipo de movimento desejado e clique sobre a opção parametrizar. Na etapa 64 - Fis - Tributação - Item ou na etapa 65 Fis - Tributação - Movimento , e informe no campo Procurar Alíquota em o valor Tipo Movimento .

#### [443] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como alterar a máscara do número do movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 4 de outubro de 2021 às 15:09
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000598607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-alterar-a-m%C3%A1scara-do-n%C3%BAmero-do-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000598607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-alterar-a-m%C3%A1scara-do-n%C3%BAmero-do-movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 03:00 min
- Evidencia inicial: Dúvida Como alterar a máscara do número do movimento?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento – Todas as versões.
- Menu, etapa ou parametro citado: 1. Acesse o menu Ambiente | Parâmetros .

#### [444] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como atribuir Permissão ao Usuário em Tipo de Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2025 às 17:26
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-atribuir-Permiss%C3%A3o-ao-Usu%C3%A1rio-em-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-atribuir-Permiss%C3%A3o-ao-Usu%C3%A1rio-em-Tipo-de-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: tipo de movimento, movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00 min
- Evidencia inicial: Dúvida Como atribuir permissão ao usuário para o Tipo de Movimento?
- Evidencia inicial: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: Ambiente Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: 2. Vá ao menu Segurança | Usuários ;
- Menu, etapa ou parametro citado: 3. Verifique qual o Sistema está selecionado. Caso não seja o Gestão de Estoque, Compras e Faturamento, faça a alteração para ele;

#### [445] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Horário de Verão (2018) Para Documentos Eletrônicos
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 1 de agosto de 2022 às 17:30
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000390068-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Hor%C3%A1rio-de-Ver%C3%A3o-2018-Para-Documentos-Eletr%C3%B4nicos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000390068-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Hor%C3%A1rio-de-Ver%C3%A3o-2018-Para-Documentos-Eletr%C3%B4nicos)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:01:00min
- Evidencia inicial: Ocorrência
- Evidencia inicial: Ao executar um processo para qualquer documento eletrônico o sistema apresenta o erro:
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões. - Documentos Eletrônicos (NF-e/CT-e/MDF-e/NFS-e)
- Menu, etapa ou parametro citado: Ambiente | Parâmetros | Gestão de estoque, compras e faturamento | Integrações | Fiscal | Parâmetros por filial, clica duas vezes em cima da Filial, na etapa "Ambiente CC-e".

#### [446] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Quais variáveis utilizar no Complemento de Histórico do Item de Evento Contábil
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 28 de setembro de 2021 às 17:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000371488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quais-vari%C3%A1veis-utilizar-no-Complemento-de-Hist%C3%B3rico-do-Item-de-Evento-Cont%C3%A1bil](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000371488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quais-vari%C3%A1veis-utilizar-no-Complemento-de-Hist%C3%B3rico-do-Item-de-Evento-Cont%C3%A1bil)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00 min Dúvida
- Evidencia inicial: Quais variáveis utilizar no Complemento de Histórico do Item de Evento Contábil ?
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - A partir da 11.80.
- Menu, etapa ou parametro citado: 1. Menu Cadastros | Eventos Contábeis;
- Artefato tecnico citado: Observação: Ao utilizar a variável \[REL\] o histórico irá buscar informações da tabela TMOV no campo IDMOVRELAC .

#### [447] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Como parametrizar o processo de Qualificação de Fornecedores
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de fevereiro de 2022 às 14:05
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352708-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-parametrizar-o-processo-de-Qualifica%C3%A7%C3%A3o-de-Fornecedores](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352708-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Como-parametrizar-o-processo-de-Qualifica%C3%A7%C3%A3o-de-Fornecedores)
- Classificacao inferida: parametrizacao, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Com o objetivo de assegurar aos clientes que os produtos e serviços adquiridos estão em conformidade com as suas expectativas e/ou critérios específicos, a TOTVS passa a disponibilizar no sistema TOTVS Gestão de Estoque, Compras e Faturamento o módulo de Qualificação de Fornecedores, onde os mesmos serão avaliados, conforme critérios específicos e pré-definidos, quanto à capacidade de fornecimento de materiais e/ou prestação dos serviços.
- Menu, etapa ou parametro citado: Com o objetivo de assegurar aos clientes que os produtos e serviços adquiridos estão em conformidade com as suas expectativas e/ou critérios específicos, a TOTVS passa a disponibilizar no sistema TOTVS Gestão de Estoque, Compras e Faturamento o módulo de Qualificação de Fornecedores, onde os mesmos serão avaliados, conforme critérios específicos e pré-definidos, quanto à capacidade de fornecimento de materiais e/ou prestação dos serviços.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento \- A partir da 12.1. Solução

#### [448] COT0001 Qualificacao de fornecedores
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/COT0001_Qualificacao_de_fornecedores](https://tdn.totvs.com/display/public/LRM/COT0001_Qualificacao_de_fornecedores)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [449] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como buscar Alíquota do Pedido
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 19 de janeiro de 2022 às 09:46
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000347007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-do-Pedido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000347007-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-buscar-Al%C3%ADquota-do-Pedido)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como parametrizar o sistema para que no Faturamento/Recebimento, a alíquota do Movimento de Pedido seja levado para o Movimento de Nota Fiscal?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.
- Menu, etapa ou parametro citado: 1\. O primeiro local onde o sistema verifica de onde deve buscar alíquota é no cadastro do Tributo. Acessar Cadastros | Mais | Tributo , dentro deste cadastro na aba Outros Dados, existe o campo Procurar Alíquota no conforme destaque do print abaixo:

#### [450] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Devolução de Venda
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 4 de outubro de 2021 às 14:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352288-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Venda](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000352288-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Devolu%C3%A7%C3%A3o-de-Venda)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 05:00 min
- Evidencia inicial: Ocorrência Descrição do Processo de Devolução de Venda. A devolução de mercadoria se refere anulação de um procedimento de venda realizado junto á um cliente. A devolução pode ser feita considerando todos os itens do movimento ou parte deles, onde será afetado tanto o saldo financeiro quanto o saldo físico.
- Evidencia inicial: Ambiente
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - A Partir da Versão 11.80
- Menu, etapa ou parametro citado: 2 - Feito o cadastro do documento, vamos parametrizar o movimento em Ambiente | Parâmetros | TOTVS Gestão de Estoque, Compras e Faturamento | Vendas | Devolução de Venda . Poderá criar ou editar um movimento já existente. No exemplo abaixo, utilizaremos um movimento do tipo 1.2.XX .

#### [451] DEV0002 Devolucao de Venda de Mercadoria Emissão da Nota pelo Cliente
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/pages/releaseview.action?pageId=315902787](https://tdn.totvs.com/pages/releaseview.action?pageId=315902787)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [452] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Venda para Entrega Futura
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de dezembro de 2021 às 20:00
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000346147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Venda-para-Entrega-Futura](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000346147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Venda-para-Entrega-Futura)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Descrição do processo de Venda para Entrega Futura. Essa operação ocorre quando um faturamento é realizado de maneira antecipada à entrega. Nesse caso, portanto, ocorre uma compra, mas a circulação de mercadorias não acontece de fato , ainda. Ela só acontecerá em uma data posterior , ainda que, em termos fiscais, a venda já tenha ocorrido.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.82.
- Menu, etapa ou parametro citado: Para cadastrar ou editar um tipo de movimento de Venda para Entrega Futura, acesse o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Venda | Faturamento .

#### [453] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Cálculo de MVA/IVA por Produto
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de dezembro de 2021 às 17:14
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345647-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%A1lculo-de-MVA-IVA-por-Produto](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345647-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%A1lculo-de-MVA-IVA-por-Produto)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Aplicação de Margem de valor agregado em base de cálculo de tributo.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.82.

#### [454] INT0005 Integracao Financeira Valores Opcionais
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [455] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Cálculo de MVA/IVA por Natureza
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 15 de dezembro de 2021 às 17:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%A1lculo-de-MVA-IVA-por-Natureza](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345607-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%A1lculo-de-MVA-IVA-por-Natureza)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:02:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Aplicação de Margem de valor agregado em base de cálculo de tributo.
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.82.

#### [456] INT0005 Integracao Financeira Valores Opcionais
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [457] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Faturamento Parcial por Valor do Item ou Movimento
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 21 de abril de 2025 às 14:17
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Faturamento-Parcial-por-Valor-do-Item-ou-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008686528-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Faturamento-Parcial-por-Valor-do-Item-ou-Movimento)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Qual a parametrização necessária para realizar o processo de Faturamento Parcial por Valor? ( Item ou Movimento )
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
- Menu, etapa ou parametro citado: O Tipo do Movimento de Compra deve estar classificado como Solicitação de Compras ou Pedido de Compras:

#### [458] MOV0012 Faturamento Parcial Por Valor
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/MOV0012_Faturamento_Parcial_Por_Valor](https://tdn.totvs.com/display/public/LRM/MOV0012_Faturamento_Parcial_Por_Valor)
- Classificacao inferida: movimento
- Gatilhos de busca observados: faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [459] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Integração Financeira/Valores Opcionais
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 14 de janeiro de 2022 às 08:24
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008503488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Integra%C3%A7%C3%A3o-Financeira-Valores-Opcionais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008503488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Integra%C3%A7%C3%A3o-Financeira-Valores-Opcionais)
- Classificacao inferida: compras, estoque
- Gatilhos de busca observados: parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:04:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Para que o lançamento financeiro possa conter valores adicionais oriundos de campos existentes no movimento inserido via TOTVS Gestão de Estoque, Compras e Faturamento, deve-se utilizar a opção de Valores Opcionais .
- Menu, etapa ou parametro citado: Para que o lançamento financeiro possa conter valores adicionais oriundos de campos existentes no movimento inserido via TOTVS Gestão de Estoque, Compras e Faturamento, deve-se utilizar a opção de Valores Opcionais .
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

#### [460] INT0005 Integracao Financeira Valores Opcionais
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais](https://tdn.totvs.com/display/public/LRM/INT0005_Integracao_Financeira_Valores_Opcionais)
- Classificacao inferida: geral
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.

#### [461] Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir o campo Chave de Acesso em Movimento de Entrada
- Secao de indice: Parametrização
- Caminho documental: Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
- Data: 2 de dezembro de 2021 às 17:03
- Fonte: [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008349147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-o-campo-Chave-de-Acesso-em-Movimento-de-Entrada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008349147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-o-campo-Chave-de-Acesso-em-Movimento-de-Entrada)
- Classificacao inferida: movimento, compras, estoque
- Gatilhos de busca observados: movimento, parametrizacao, estoque, compras, faturamento
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Tempo aproximado para leitura: 00:03:00min
- Evidencia inicial: Dúvida
- Evidencia inicial: Como fazer para exibir o campo Chave de Acesso em Movimento de entrada?
- Menu, etapa ou parametro citado: Ambiente
- Menu, etapa ou parametro citado: Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da 11.82.
- Menu, etapa ou parametro citado: 1. Acessar o menu Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | localizar o tipo de movimento que irá aplicar a parametrização e Avançar .

#### [462] MOV0005 Exibicao do campo Chave de Acesso
- Secao de indice: Parametrização
- Caminho documental: nao informado no artigo convertido
- Data: nao informada no artigo convertido
- Fonte: [https://tdn.totvs.com/display/public/LRM/MOV0005_Exibicao_do_campo_Chave_de_Acesso](https://tdn.totvs.com/display/public/LRM/MOV0005_Exibicao_do_campo_Chave_de_Acesso)
- Classificacao inferida: movimento
- Gatilhos de busca observados: sem gatilho extraido do titulo
- Leitura segura para a skill: comece tratando este item como nucleus-forte e declare o dominio principal antes de aprofundar.
- Evidencia inicial: Produto:
- Evidencia inicial: TOTVS Gestão de Estoque, Compras e Faturamento
- Evidencia inicial: Versões:
- Menu, etapa ou parametro citado: TOTVS Gestão de Estoque, Compras e Faturamento
- Menu, etapa ou parametro citado: Acessar | Ambiente | Parâmetros | Gestão de estoque, compras e faturamento | Localizar o tipo de movimento que irá aplicar a parametrização.
- Menu, etapa ou parametro citado: Depois de efetuar as devidas parametrizações será apresentado o campo em Integrações | Fiscal | NF-e Estadual (Caso utilizado o código do modelo do documento '55')
<!-- AUTO-GENERATED END: NUCLEUS-DETAIL -->
