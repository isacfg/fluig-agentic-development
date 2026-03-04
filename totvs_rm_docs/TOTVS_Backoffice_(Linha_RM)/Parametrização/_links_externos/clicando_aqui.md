# COT0001_Qualificacao_de_fornecedores

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/COT0001_Qualificacao_de_fornecedores](https://tdn.totvs.com/display/public/LRM/COT0001_Qualificacao_de_fornecedores)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

RM Gestão de Estoques, Compras e Faturamento

**Versões:**

12.1.4 e superiores

**Ocorrência:**

Módulo Qualificação de Fornecedores

**Ambiente:**

Cadastros de Cotação, Movimentos, Produtos, Cliente/Fornecedor

**Passo a passo:**

Com o objetivo de assegurar aos clientes que os produtos e serviços adquiridos estão em conformidade com as suas expectativas e/ou critérios específicos, a TOTVS passa a disponibilizar no sistema TOTVS Gestão de Estoque, Compras e Faturamento o módulo de Qualificação de Fornecedores, onde os mesmos serão avaliados, conforme critérios específicos e pré-definidos, quanto à capacidade de fornecimento de materiais e/ou prestação dos serviços.

Este módulo irá avaliar e definir se o fornecedor está qualificado para fornecer produtos/serviços para a empresa, dentro de requisitos pré-definidos pela empresa.

# DESENVOLVIMENTO/PROCEDIMENTO

**Parametrização do Sistema**

O processo de qualificação começa com a parametrização do sistema, através do menu | 04.06.09 – Qualificação de Fornecedores | Definições Gerais |, selecionando uma das opções de qualificação de fornecedores como na figura abaixo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A31%3A14.png?version=1&modificationDate=1465408428000&api=v2)

Em seguida é necessário informar a(s) fórmula(s) para o cálculo da qualificação dos fornecedores (dependendo do tipo de controle), e a pontuação mínima necessária para a qualificação do fornecedor:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A31%3A24.png?version=1&modificationDate=1465408430000&api=v2)

O próximo passo é parametrizar a cotação para utilizar a qualificação de fornecedores em | 04.06.02 – Cotação | Definições Gerais 3/4 | Utiliza fornecedores qualificados:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A31%3A40.png?version=1&modificationDate=1465408431000&api=v2)

As opções permitidas são:

-   -   Utiliza apenas Fornecedores Qualificados: Permite realizar a cotação apenas com fornecedores qualificados, essa opção é consistida na inclusão de orçamentos.
    -   Utiliza Fornecedores Qualificados e não Qualificados: Permite realizar a cotação com fornecedores qualificados e não qualificados.

Por fim o movimento de Recebimento de Compras deve ser parametrizado para qualificar os fornecedores selecionando a opção | Item – Identificação 2/2 | Afeta a qualificação do fornecedor |:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A32%3A37.png?version=1&modificationDate=1465408432000&api=v2)

Esta opção habilita o anexo “Qualificação dos itens de movimento” na tela de movimentações.
**Observação:** Após a parametrização, as permissões especificas por usuários devem ser concedidas para as telas que são habilitadas pelas parametrizações realizadas

**Preparação da base de Dados**

Após a parametrização do sistema, deve-se realizar a preparação da base de dados cadastrando requisitos a serem qualificados em | Cadastros | Tabelas Auxiliares | Requisitos para Qualificação | e a preparação dos produtos a serem qualificados:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A33%3A22.png?version=1&modificationDate=1465408433000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A33%3A47.png?version=1&modificationDate=1465408435000&api=v2)

Os requisitos podem ser aplicados apenas ao fornecedor (Fornecedor) ou aos produtos fornecidos pelo fornecedor (Produto/Fornecedor).

Os requisitos do Fornecedor poderão ser calculados por uma fórmula cadastrada ou de forma manual.

Os requisitos do Produto/fornecedor serão sempre calculados por formula e podem ser ou não utilizados na qualificação do produto no recebimento através da opção “Editar no Item de Movimento”.

Para cada requisito deve-se informar o respectivo peso com um valor variando de 0 a 10.

Os produtos que serão objetos de qualificação também devem ter a opção “Exige Fornecedor Qualificado” marcada em | Detalhes | Outros Dados |

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A34%3A23.png?version=1&modificationDate=1465408437000&api=v2)

**Processo de Qualificação de Fornecedores**

Após a preparação da base de dados para trabalhar com a qualificação, é realizada a análise dos requisitos de qualificação. Este processo é acessado pela visão do cadastro dos requisitos de qualificação de fornecedores em |Processos | Análise de Requisitos de Qualificação|.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A34%3A47.png?version=1&modificationDate=1465408438000&api=v2)

O processo realizará o calculo da pontuação dos requisitos definidos como calculados. O sistema irá executar as fórmulas cadastradas em cada requisito e atualizar seu valor nos respectivos anexos de | Requisitos para Qualificação.

Após a execução desse processo, é possível alterar as pontuações que foram calculadas. Neste caso a pontuação estará indicada que foi editada nos anexos de produto e de fornecedor (Requisitos de Qualificação do Produto / Fornecedor).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A35%3A17.png?version=1&modificationDate=1465408439000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A35%3A24.png?version=1&modificationDate=1465408440000&api=v2)

Depois da análise dos requisitos, os fornecedores são qualificados utilizando as fórmulas de qualificação informadas nos parâmetros através do processo | Qualificação de Fornecedores:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A35%3A56.png?version=1&modificationDate=1465408441000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A36%3A7.png?version=1&modificationDate=1465408445000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A36%3A14.png?version=1&modificationDate=1465408443000&api=v2)

Após execução do processo de Qualificação, a pontuação calculada automaticamente pelo sistema poderá ser editada nos anexos do cadastro de produtos (Qualificação do Produto / Fornecedor|) ou cadastro de fornecedores (Qualificação do Fornecedor) caso necessário. Neste caso o campo “Observação” é de preenchimento obrigatório.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A36%3A39.png?version=1&modificationDate=1465408444000&api=v2)

**Cotação de Produtos**

No Wizard de inclusão de cotação a etapa para seleção de fornecedores passa a apresentar dados da qualificação do fornecedor e um botão que fornece detalhes sobre a qualificação dos produtos fornecidos pelo fornecedor selecionado:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A37%3A2.png?version=1&modificationDate=1465408447000&api=v2)

O mesmo botão pode ser acessado na edição da cotação:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A37%3A13.png?version=1&modificationDate=1465408446000&api=v2)

Na tela do quadro comparativo também são apresentadas as informações relativas a qualificação dos fornecedores e um novo botão para informar a justificativa para a escolha de um fornecedor não qualificado para a compra:

Neste caso a justificativa é obrigatória pois é necessário justificar a escolha por um fornecedor desqualificado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A39%3A22.png?version=1&modificationDate=1465408451000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A37%3A53.png?version=1&modificationDate=1465408450000&api=v2)

Com a cotação realizada e as justificativas realizadas podemos gerar a ordem de compras para o fornecedor escolhido e o faturamento/recebimento da nota.

**Qualificação dos Produtos no Recebimento**

No recebimento dos produtos agora é possível qualificar/ desqualificar cada produto em relação aos requisitos cadastrados, através do anexo | Qualificação dos itens de Movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/239022209/image2016-6-8%2015%3A40%3A55.png?version=1&modificationDate=1465408452000&api=v2)

# INFORMAÇÕES ADICIONAIS

**Tabelas Utilizadas**

TITMTMV, TPAR, TCPARAMETROS, TPRODUTODEF, TQUALIFICACAOCFO, TQUALIFICACAOPRODCFO, TREQUISITOQUALIFIC, TREQUISITOQUALIFICCFO, TREQUISITOQUALIFICPRODCFO, TITMMOVQUALIFIC, TCITMORCAMENTO

**Observações:**

Para mais informações:



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)

**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
