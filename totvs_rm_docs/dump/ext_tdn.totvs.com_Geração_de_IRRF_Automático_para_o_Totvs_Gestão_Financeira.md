# Geração de IRRF Automático para o Totvs Gestão Financeira

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=4813078](https://tdn.totvs.com/pages/releaseview.action?pageId=4813078)
> **Domínio:** TDN (TOTVS Developer Network)

---





FAQ: **Geração de IRRF Automático para o Totvs Gestão Financeira**

Avaliação

-   ***Como Fazer***

Como parametrizar o sistema para gerar IRRF Automático para o Totvs Gestão Financeira?

-   ***Definição do Processo***

Tem por finalidade gerar lançamento automático de IRRF– DARF no Totvs Gestão Financeira. Desta forma será gerado um lançamento financeiro e um lançamento de DARF obedecendo “Fato Gerador” parametrizado no Totvs Gestão Financeira que pode ser “Emissão ou Vencimento”.

O lançamento de IRRF será gerado para o cliente/fornecedor "**Pessoa Jurídica**" obedecendo a alíquota do código de receita, e “**Pessoa Física**” obedecendo a tabela progressiva apresentada no Totvs Gestão Financeira em **| Cadastros | Dados Fiscais | Tabela de Cálculo de INSS \\ IRRF |**.

O lançamento de IRRF será gerado automaticamente **independente da existência do tributo no movimento ou no item**, visto que, será obedecida parametrização do “**tipo de documento**” informado na parametrização tipo de movimento.

Solução



-   ***Parametrizações Necessárias - Totvs Gestão Financeira***

Acessar **| Opções | Parâmetros | RMFluxus | Avançar > | Contas a Pagar |** e parametrizar as opções a seguir:

**Etapa Inclusão**

\- Origem Tab.Op.: Cliente / Fornecedor |

**Etapa Geração de IRRF**

\- Habilitar: Gerar Imposto de Renda Automaticamente

\- Origem Default das Tabelas: Lançamento Original

\- Valor Mínimo: informar valor mínimo para geração do lançamento. A receita aceita pagamentos a partir de 10,00 |

**Etapa Geração de IRRF – PF/ **IRRF –** PJ**

\- Data Base para Geração: informar data a ser considerada para geração da DARF

\- Fornecedor: informar código do cliente \\ fornecedor que será apresentado no lançamento gerado

\- Tipo de Documento: informar tipo de documento que deve ser apresentado no lançamento que será gerado

-   ***Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento***

Acessar | **Cadastro | Tabelas Auxiliares | Tipo de Documento |** e incluir tipo de documento específico para este fim, onde deverá informar | **Classificação : Gera IRRF |**.

Acessar | **Opções | Parâmetros | RMNucleus |** e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

**Etapa Fin – Faturamento**

Fatura o movimento: Habilita

Fatura na Inclusão: Habilita

Tipo de Geração: Edita

Tipo de Documento Gerado: Outros

Tipo de Documento Duplicata: informar local de onde será buscado tipo de documento a ser considerado para este fim. Se escolher a opção “Utiliza do Tipo de Movimento” será apresentado campo **| Tipo de Documento Duplicata Default** | para informar o tipo de documento, caso contrário será consistido código do tipo de documento informado no cadastro do cliente \\ fornecedor preenchido no movimento.

Tipo de Documento Duplicada Default: informar o tipo de documento que será utilizado neste tipo de movimento

Numeração do Lançamento: informar se deseja utilizar “número do movimento + sequencial” ou apenas “sequência”

Caso queira que a base de cálculo do IRRF tenha a mesma informação do “Valor Original do lançamento financeiro” deve preencher o mesmo código da “Fórmula de Valor a Ratear” no campo **| Fórmula para Cálculo de IRRF |**. Se a base de cálculo de IRRF for considerar outra informação, deverá cadastrar uma fórmula com o conteúdo desejado e referenciar no campo em questão.

Importante:

Todo tributo do tipo “RF – Retido na Fonte” necessita de um Código da Receita para que o lançamento financeiro seja incluso. Para buscar o código da receita do cadastro de Cliente \\ Fornecedor o campo | **Fórmula para Cálculo de IRRF** | tem que estar preenchido, caso contrário será considerado código da receita preenchido no cadastro do produto.

-   ***Descrição do Processo***

A inclusão dos movimentos será feita como de costume e a informação do IRRF Automático será visualizado ao editar a aba **| Contas a Pagar | Lançamento Financeiro | Valores | Impostos \\ Tributos |** no campo **| IRRF |**. No campo em questão serão apresentados:

Valor do Serviço: resultado da fórmula utilizada para composição da base de cálculo deste tributo

Código da Receita: código utilizado para geração da DARF

Valor IRRF: valor calculado do tributo considerando tabela progressiva inclusa no RMFluxus

O valor calculado também pode ser consultado na visão de movimento na aba | Identificação | **Vl Líquido Fin |**. Neste campo será possível visualizar o valor financeiro considerando a dedução do tributo em questão. Esta informação não tem “nenhuma” relação com o “valor líquido” do movimento.

-   ***Informações Adicionais***

**Composição do Valor do IRRF**

O cálculo do IRRF é feito considerando o conteúdo da tabela progressiva do IRRF com vigência a partir de 2010. O tributo tem cumulatividade mensal até que seja atingido teto máximo de dedução.

Já para o IRRF, o mesmo será calculado a partir da alíquota do código de receita informado para o cálculo. O tributo tem cumulatividade diária.

Se o cliente \\ fornecedor do movimento possuir “dependentes” (IRRF-PF) será deduzido valor **| 150,69 |** para cada dependente independente da geração de INSS.

[
![clip_image002](https://lh5.ggpht.com/_G7KXZLoZDsY/TKsw_cHogmI/AAAAAAAABpA/OGDPp_yLOAw/clip_image002_thumb%5B1%5D.jpg?imgmax=800)
](https://lh4.ggpht.com/_G7KXZLoZDsY/TKsw-NqI6EI/AAAAAAAABo8/GYBkQ-cSRMM/s1600-h/clip_image002%5B4%5D.jpg)

**Cálculo do IRRF**

Base de Cálculo: 3.500,00 Parcela a Deduzir: 505,62 Alíquota: 22,50%

(Base de cálculo x Alíquota) – Parcela a Deduzir = Valor de IRRF

3.500,00 x 22,50% = 787,50

787,50 – 505,62 = 281,88

**Valor do IRRF : 281,88**

Cálculo considerando um cliente \\ fornecedor com 02 dependentes

Base de Cálculo: 3.500,00

Parcela a Deduzir: 505,62

Dedução por Dependente: 150,69

Alíquota: 22,50%

((Base de cálculo – Dedução por Dependente) x Alíquota) – Parcela a Deduzir = Valor de IRRF

3.500,00 – 301,38 = 3.198,62

3.198,62 x 22,50% = 719,69

719,69 – 505,62 = 214,07

**Valor do IRRF : 214,07**

Para maiores informações:

Consulte o [WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/Rpt/Rpt.Reports.aspx)



 **[
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/61934230/image2013-6-10%2015%3A3%3A33.png?version=1&modificationDate=1370887580000&api=v2)
](https://www.byyou.com/static/resources/hotsite/index.html) COMUNIDADE  **[R@Materiais e Finanças](https://totvs.byyou.com/?space=rmateriais)****

**Canais de Atendimento:
**

**Chamado:** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015
