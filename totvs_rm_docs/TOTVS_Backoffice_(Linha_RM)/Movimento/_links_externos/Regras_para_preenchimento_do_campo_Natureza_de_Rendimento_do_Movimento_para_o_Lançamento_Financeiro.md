# Integração Financeira|Aba Tributos

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=761017178](https://tdn.totvs.com/pages/releaseview.action?pageId=761017178)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Regras para preenchimento do campo Natureza de Rendimento do Movimento para o Lançamento Financeiro**

Na geração dos lançamentos financeiros a partir de um movimento inserido no TOTVS Gestão de Estoque, Compras e Faturamento, o campo Natureza de Rendimento será levado para o lançamento financeiro (aba Valores |Tributos), conforme as regras abaixo:



**Tributos**

**Seleção**

IRRF

Para as situações onde o lançamento financeiro tem o tipo de documento **Gerar IRRF** a natureza de rendimento preenchida em  Movimento | Tributos e Valores | Tributos será enviado para o lançamento | Tributos | Valor do IRRF.

Para mais informações de Geração de IRRF Automático para o Totvs Gestão Financeira acesse **[Geração de IRRF Automático para o Totvs Gestão Financeira](/pages/viewpage.action?pageId=4813078)**

Para preenchimento automático (Default) é seguido a seguinte hierarquia:

     1. Cadastro do Produto em: Anexos | Dados Fiscais do Produto | Código da Natureza de Rendimento;

     2. Cadastro do Cliente Fornecedor em:  Outros | Tributos | Código da Receita;

**Importante:** Caso o campo Natureza de Rendimento  (Tributos e Valores | Tributos ) no movimento esteja preenchido, o valor default não serão aplicados.

PISRF, COFINSRF, CSLLRF e CSRF

A Natureza padrão definida nos tributos do item de movimento ou no movimento será copiada para o lançamento financeiro



Para conhecer as regras do preenchimento automático do campo "natureza de rendimento" no movimento, acesse a documentação: [Fiscal (Parâmetros de Integrações)](/pages/viewpage.action?pageId=423938168)

Para mais informações acesse também os documentos abaixo:

[Natureza de Rendimentos](/display/LRM/Natureza+de+Rendimentos)

[Tributos (Movimento)](/pages/viewpage.action?pageId=732687708)
