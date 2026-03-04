# Serviço de Tributação

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=422546119](https://tdn.totvs.com/pages/releaseview.action?pageId=422546119)
> **Domínio:** TDN (TOTVS Developer Network)

---

## **Conteúdo**

-   1[1. O que é](#ServiçodeTributação-1.Oqueé)
-   2[2\. Regras](#ServiçodeTributação-2.Regras)
    -   2.1[Alíquota e Código de Receita](#ServiçodeTributação-AlíquotaeCódigodeReceita)
    -   2.2[Natureza de Rendimentos](#ServiçodeTributação-NaturezadeRendimentos)
    -   2.3[Natureza de Operação do ISS (NFS-e)](#ServiçodeTributação-NaturezadeOperaçãodoISS\(NFS-e\))

-   [Serviço de alíquotas vigentes dos tributos de uma regra tributária](/pages/viewpage.action?pageId=1036766765)
-   [Serviço de Local da Operação do IBS](/pages/viewpage.action?pageId=969138681)
-   [Serviço de seleção automática de Alíquota](/pages/viewpage.action?pageId=1005449135)
-   [Serviço de seleção de Regras Tributárias](/pages/viewpage.action?pageId=1002495035)
-   [Serviço de tributos CBS/IBS](/pages/viewpage.action?pageId=1008212461)
-   [Situação Tributária do PIS/COFINS](/pages/viewpage.action?pageId=676039701)

## **1. O que é**

O serviço de tributação é um recurso do TOTVS Gestão Fiscal que auxilia a criação de movimentações carregando nelas, durante o cadastro, algumas informações de acordo com alguns parâmetros e outras informações cadastradas.



***Exemplo.***: O usuário pode parametrizar um Tipo de Movimento de prestação de serviço para carregar a alíquota do ISSQN de acordo com o município da prestação de serviço.

Neste caso, quando o movimento for incluído, a alíquota do ISSQN será carregada para o município correspondente do anexo Tributos por Município do serviço (produto) informado no item do movimento.

## **2. Regras**

### **Alíquota e Código de Receita**

Regras para carregamento de alíquota e código de receita para os tributos federais retidos (IRRF, IRRF-PJ, IRRF IMPORTAÇÃO, PIS-RF, CSRF, COSIRF, CSLL-RF, COFINS-RF, INSS e FUNRURAL).

Procurar Alíquota em

Alíquota

Código de Receita

Procurar Alíquota em

Alíquota

Código de Receita

Estado

Carrega a alíquota interestadual informada no Cadastro de Estado para os tributos ICMS e ICMS ST.

Não preenche.

Município

Carrega a alíquota informada no Anexo Tributos por Município do Cadastro do Produto
para todos os tributos (só faz sentido para o ISS, traz junto o fator de redução que só aparece para o tributo ISS)
e não preenche o código de receita.

Não preenche.

Natureza

•  ICMS: Carrega a alíquota na Regra de ICMS.

•  ICMS ST: Carrega a Alíquota Interna do Produto se for MVA no produto, senão carrega da Regra de ICMS.

•  Outros Tributos: Carrega a alíquota do Anexo Tributos da Natureza

• IRRF, IRRF-PJ: (1) Tipo de Movimento, (2) Produto; (3) Cliente/Fornecedor.

• IRRF IMPORTAÇÃO: (1) Tipo de Movimento.

• CSRF, PIS-RF, COFINS-RF, CSLL\_RF e (COSIRF - Apenas do Tipo Movimento): (1) Tipo de Movimento; (2) Carregar o Código de Receita informado no Anexo "Tributos Default de Fornecedores" no Cadastro do Cliente/Fornecedor (exceto a COSIRF).

• INSS e Funrural: (1) Anexo Cliente/Fornecedor do Produto; (2) Anexo Defaults de Cli/For do Cliente/Fornecedor.

Pedido





Produto

Carrega a alíquota informada no Anexo Tributos do Produto para todos os tributos.

IPI do Tipo Outros - Não será carregado a Alíquota Default 

• CPRB: Traz o código de receita da CPRB do mesmo anexo.
• IRRF, IRRF-PJ: (1) Tipo de Movimento; (2) Produto; (3) Cliente/Fornecedor.

• CSRF, PIS-RF, COFINS-RF, CSLL\_RF e (COSIRF - Apenas do Tipo Movimento): (1) Tipo de Movimento; (2) Carregar o Código de Receita informado no Anexo "Tributos Default de Fornecedores" no Cadastro do Cliente/Fornecedor (exceto a COSIRF)..

• INSS e Funrural: (1) Anexo Cliente/Fornecedor do Produto; (2) Anexo Defaults de Cli/For do Cliente/Fornecedor.

Tipo de Movimento

Tipo de Movimento

• IRRF, IRRF-PJ: (1) Tipo de Movimento; (2) Produto; (3) Cliente/Fornecedor.

• IRRF IMPORTAÇÃO: (1) Tipo de Movimento.

• CSRF, PIS-RF, COFINS-RF, CSLL\_RF e COSIRF: (1) Tipo de Movimento; (2) Carregar o Código de Receita informado no Anexo "Tributos Default de Fornecedores" no Cadastro do Cliente/Fornecedor (exceto a COSIRF)..

• INSS e Funrural: (1) Anexo Cliente/Fornecedor do Produto; (2) Anexo Defaults de Cli/For do Cliente/Fornecedor.

Tipo de produto p/ Filial





Tributo

Cadastro de Tributo

• IRRF, IRRF-PJ: (1) Tipo de Movimento; (2) Produto; (3) Cliente/Fornecedor.

• IRRF IMPORTAÇÃO: (1) Tipo de Movimento.

• CSRF, PIS-RF, COFINS-RF, CSLL\_RF e COSIRF: (1) Tipo de Movimento; (2) Carregar o Código de Receita informado no Anexo "Tributos Default de Fornecedores" no Cadastro do Cliente/Fornecedor (exceto a COSIRF)..

• INSS e Funrural: (1) Anexo Cliente/Fornecedor do Produto; (2) Anexo Defaults de Cli/For do Cliente/Fornecedor.

Código de Receita

Carrega a alíquota informada no Código de Receita que foi selecionado conforme regra ao lado.

• IRRF, IRRF-PJ: (1) Tipo de Movimento; (2) Produto; (3) Cliente/Fornecedor.

• IRRF IMPORTAÇÃO: (1) Tipo de Movimento.

• CSRF, PIS-RF, COFINS-RF, CSLL\_RF e COSIRF: (1) Tipo de Movimento; (2) Carregar o Código de Receita informado no Anexo "Tributos Default de Fornecedores" no Cadastro do Cliente/Fornecedor (exceto a COSIRF)..

• INSS e Funrural: (1) Anexo Cliente/Fornecedor do Produto; (2) Anexo Defaults de Cli/For do Cliente/Fornecedor.

Cliente

• CSRF, PIS-RF, COFINS-RF e CSLL\_RF: Carregar a alíquota informada no Cadastro do Código de Receita retornado conforme regras ao lado;

•   INSS e Funrural: Carregar a alíquota informada no Cadastro de INSS/PJ retornado conforme regras ao lado.

•   CSRF, PIS-RF, COFINS-RF e CSLL\_RF: : Carregar o Código de Receita informado no Anexo Tributos Default de Fornecedores no Cadastro do Cliente/Fornecedor;

•   INSS e Funrural: Carregar o Código de Receita no Anexo Defaults de Cli/For no Cadastro do Cliente/Fornecedor.

Pauta do Produto

Carrega a alíquota no Cadastro de Pauta do Produto (Somente PIS, COFINS, IPI, ICMS e ICMSST).

Não preenche

Serviço

INSS: Carrega a alíquota informada no Código de Receita que foi selecionado conforme regra ao lado. Demais Tributos: Carrega a alíquota no Anexo Tributos do Produto.

Obs.: Regra para Zerar Alíquota no Movimento 2.1.x:

[Aplicação da Regra da Alíquota do ISS com Base na Aderência dos Municípios à NFS-e Nacional](/pages/viewpage.action?pageId=1022362481) 

INSS:

-   Se o Código de Receita (FIRRF) estiver informada no Tipo de Movimento, traz a alíquota da tabela INSS/PJ através do Código de Receita da FIRRF informado no Tipo de Movimento. o Se não tiver Código de Receita no TM, Carrega o Código do INSS no Anexo Cliente/Fornecedor do Produto; o Se não tiver, Carrega o Código do INSS no Default do Cadastro do Cliente/Fornecedor.
-   Demais Tributos: (1) Tipo de Movimento; (2) Anexo Cli/For do Produto; (3) Produto; (4) Cliente/Fornecedor. Obs. Todos esses defaults são referentes ao IRRF.

Simples Nacional

Carrega a alíquota no Cadastro de Alíquotas do Simples para o tributo que foi selecionado (não tem tributo retido, apenas tributos sobre o faturamento, ICMS, IPI e ISS).

Não preenche.

Dados Fiscais por UF

Carrega a Alíquota Interna no Anexo Dados Fiscais por UF para qualquer tributo (mas, só faz sentido para o ICMS e ICMS ST).

Não preenche.

### Natureza de Rendimentos

Tributos

Seleção

Tributos

Seleção

IRRF, IRRFPJ e IRRFIMPORT

A Natureza padrão é definida no movimento conforme a seguinte hierarquia de cadastros:

1.  Cadastro do produto (Anexos | Dados Fiscais do Produto)
2.  Cliente Fornecedor (IR na pasta Outros | Tributos)
3.  Tipo de Movimento (Parâmetros | Vendas | Faturamento (04.08.02))

PISRF, COFINSRF, COSIRF, CSLLRF e CSRF

A Natureza padrão é definida no movimento conforme a seguinte hierarquia de cadastros:

1.  Cadastro do produto (Anexos | Dados Fiscais do Produto)
2.  Cliente Fornecedor (Tributos, demais tributos na pasta Tributos Default do Fornecedor)
3.  Tipo de Movimento. (Parâmetros | Vendas | Faturamento (04.08.02))

 *OBS: para o preenchimento nos Tributos do Movimento não existe verificação no Produto e só será verificado no Cli\\for Se o mesmo estiver com preenchimento Default ao incluir o movimento.*

### Natureza de Operação do ISS (NFS-e)

[Natureza de Operação do](/pages/viewpage.action?pageId=422546109) [ISS](/pages/viewpage.action?pageId=422546109) [(NFS-e)](/pages/viewpage.action?pageId=422546109)
