# Geração de INSS Automático para o Totvs Gestão Financeira através do TOTVS Gestão de Estoque, compras e Faturamento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=4813068](https://tdn.totvs.com/pages/releaseview.action?pageId=4813068)
> **Domínio:** TDN (TOTVS Developer Network)

---

-   ***Como Fazer***

Como parametrizar o sistema para gerar INSS Automático para o Totvs Gestão Financeira?



-   ***Definição do Processo***

Tem por finalidade gerar lançamento automático de INSS – DARF no Totvs Gestão Financeira. Desta forma, será gerado um lançamento financeiro e um lançamento de DARF obedecendo “Fato Gerador” parametrizado no Totvs Gestão Financeira que pode ser “Emissão ou Vencimento”.

O lançamento de INSS será gerado apenas para o cliente / fornecedor que seja “**Pessoa Física**” e vai considerar sempre a alíquota de 11% por se tratar de prestação de serviço de autônomo.

O lançamento de INSS será gerado automaticamente independente da existência do tributo no movimento ou no item, visto que, será obedecida parametrização do “tipo de documento” informado na parametrização tipo de movimento.

-   ***Parametrizações Necessárias - Totvs Gestão Financeira***

Acessar **| Opções | Parâmetros | RMFluxus | Contas a Pagar |** e parametrizar as opções a seguir:

**Etapa Inclusão**

Origem Tab.Op.: Cliente / Fornecedor |

**Etapa Geração de INSS**

\- Habilitar a opção: Gerar INSS Automaticamente

\- Empregador | Origem das Tabelas: Lançamento Original |

\- Empregador | Tipo de documento: qual será o tipo de documento apresentado na DARF gerada *( Este tipo de documento deve ser do tipo "Sem Classificação")*

\- Empregado | Origem das Tabelas: Lançamento Original |

\- Empregado | Tipo de documento: qual será o tipo de documento apresentado na DARF gerada *( Este tipo de documento deve ser do tipo "Sem Classificação")*

\- Fornecedor: qual deve o código do cliente \\ fornecedor apresentado na DARF gerada

\- Data base para Geração:qual data será considerada para geração da DARF, emissão ou vencimento.

\- Valor Mínimo: 10,00 |


-   ***Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento***

Acessar | **Cadastro | Tabelas Auxiliares | Tipo de Documento |** e incluir tipo de documento específico para este fim, onde deverá informar | **Classificação : Gera INSS |**.

Se o cliente \\ fornecedor a ser utilizado possuir “Valor pago em outra empresa” e/ou “SEST/SENAT” a informação deverá ser preenchida em **| Cadastro | Cliente \\ Fornecedor | Dados Fiscais | Tributos | Dados Relacionados ao INSS | Pessoa Física | Categoria do Autônomo |**.

Acessar **| Cadastro | Produto | Dados Fiscais do Produto | INSS |** e definir os percentuais de INSS a serem considerados para **INSS Empregado - INSS Empregador**

Acessar | **Opções | Parâmetros | RMNucleus |** e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

**
Etapa Fin – Faturamento**

Fatura o movimento: Habilita

Fatura na Inclusão: Habilita

Tipo de Geração: Edita

Tipo de Documento Gerado: Outros

Tipo de Documento Duplicata: informar local de onde será buscado tipo de documento a ser considerado para este fim. Se escolher a opção “Utiliza do Tipo de Movimento” será apresentado campo **| Tipo de Documento Duplicata Default** | para informar o tipo de documento, caso contrário será consistido código do tipo de documento informado no cadastro do cliente \\ fornecedor preenchido no movimento.

Tipo de Documento Duplicada Default: informar o tipo de documento que será utilizado neste tipo de movimento

Numeração do Lançamento: informar se deseja utilizar “número do movimento + sequencial” ou apenas “sequência”

\- Caso queira que a base de cálculo do INSS tenha a mesma informação do “Valor Original do lançamento financeiro” deve preencher o mesmo código da “Fórmula de Valor a Ratear” no campo **| Fórmula para Cálculo Valor de Serviço |**. Se a base de cálculo de INSS for considerar outra informação, deverá cadastrar uma fórmula com o conteúdo desejado e referenciar no campo em questão.


-   ***Descrição do Processo***

A inclusão dos movimentos será feita como de costume, porém se o cliente \\ fornecedor possuir “Valor pago em outra empresa” ou “SEST/SENAT” deverá acessar a aba **| Tributos | INSS Pessoa Física |** e preencher os dados:

Ocorrência do Autônomo: seu preenchimento é obrigatório quando o autônomo prestar serviço em mais de uma empresa. O campo “Valor Pago em Outra Empresa” deve ser preenchido quando a ocorrência de autônomo for de | 5 a 8 |.

Valor Retido em outra Empresa: se refere ao valor do INSS referente serviço prestado em outra empresa. O mesmo se refere a 11% do valor preenchido em “Base INSS Outras Empresas”.

Base INSS Outras Empresas: se refere á base de calculo do INSS retido em outras empresas onde o trabalhador prestou serviço dentro do período de inclusão do movimento.

% sobre Vr. Serviço Empregado: percentual definido em **| Cadastro | Produto | Dados fiscais do Produto | INSS | Percentual de Dedução Empregado |** *(Percentual da base de cálculo em relação ao valor do lançamento. Não é alíquota)*

% sobre Vr. Serviço Empregador: percentual definido em **| Cadastro | Produto | Dados fiscais do Produto | INSS | Percentual de Dedução Empregador |** *(Percentual da base de cálculo em relação ao valor do lançamento. Não é alíquota)*

Cli\\For Origem: em que cliente o fornecedor autônomo prestou serviços

O valor do INSS calculado será visualizado ao editar a aba **| Contas a Pagar | Lançamento Financeiro | Valores | Impostos \\ Tributos |** no campo **| INSS |** onde serão apresentados:

Valor do Serviço: resultado da fórmula utilizada para composição da base de cálculo deste tributo

Ocorrência do Autônomo: informação preenchida na aba | Tributos | INSS Pessoa Física |

Cat. do Autônomo: informação preenchida em **| Dados Fiscais | Tributos | Dados Relacionados ao INSS | Pessoa Física | Categoria do Autônomo |**. Esta informação não pode ser preenchida na inclusão do movimento.

Vr. Base em outra empresa: base de cálculo do INSS paga em outra empresa

Valor INSS: Valor do INSS calculado considerando o valor pago em outra empresa se houver

Cliente Origem: código do cliente onde o fornecedor autônomo prestou serviço

O valor do tributo pode ser consultado através da aba **| Identificação |** do Movimento em **| Contas a Pagar | Valores | Impostos \\ Tributos | INSS |**.

Outra alternativa, é através do campo | **Vl Líquido Fin |** também na aba **| Identificação |**. Esta informação não tem “nenhuma” relação com o “valor líquido” do movimento.


-   ***Informações Adicionais***

**Composição do Valor do INSS**

O cálculo do INSS é feito obedecendo conteúdo da tabela de INSS com vigência a partir de 01/02/2010.

O valor será acumulativo no mês até que seja atingido teto máximo 3.416,54(base de cálculo) para dedução, desta forma, o INSS será deduzido no máximo até 375,81(Vr calculado).

Por se tratar de “autônomo” será considerada alíquota fixa de 11% sobre o valor do serviço prestado.

**[
![clip_image002](https://lh3.ggpht.com/_G7KXZLoZDsY/TKstl-vUjcI/AAAAAAAABoo/3XfELPuax64/clip_image002_thumb%5B2%5D.jpg?imgmax=800)
](https://lh5.ggpht.com/_G7KXZLoZDsY/TKstlJwl30I/AAAAAAAABok/bY8SRYI1Zdk/s1600-h/clip_image002%5B5%5D.jpg)**

**Exemplo de Cálculo do INSS sem Valor Pago em Outra Empresa**

Base de Cálculo: 5.000,00 Teto Máximo de INSS: 3.416,54 Alíquota: 11%

(Base de cálculo x Alíquota) = Valor de INSS

3.416,54 x 11% = 375,81

**Valor do INSS : 375,81**

**Exemplo de Cálculo do INSS com Valor Pago em Outra Empresa**

Base de Cálculo: 5.000,00

Valor pago em outra empresa: 1.000,00 Teto Máximo de INSS: 3.416,54 Alíquota: 11%

(Base de cálculo – Valor pago em Outra Empresa) x Alíquota) = Valor de INSS

3.416,54 – 1.000,00 = 2.416,54

2.416,54 x 11% = 265,81

**Valor do INSS : 265,81**

Em função do valor do “teto máximo de INSS” a base de cálculo vai considerar esta informação para composição do tributo.






-   ***Como Fazer***

Como parametrizar o sistema para gerar INSS Automático para o Totvs Gestão Financeira?



-   ***Definição do Processo***

Tem por finalidade gerar lançamento automático de INSS – DARF no Totvs Gestão Financeira. Desta forma, será gerado um lançamento financeiro e um lançamento de DARF obedecendo “Fato Gerador” parametrizado no Totvs Gestão Financeira que pode ser “Emissão ou Vencimento”.

O lançamento de INSS será gerado apenas para o cliente / fornecedor que seja “**Pessoa Física**” e vai considerar sempre a alíquota de 11% por se tratar de prestação de serviço de autônomo.

O lançamento de INSS será gerado automaticamente independente da existência do tributo no movimento ou no item, visto que, será obedecida parametrização do “tipo de documento” informado na parametrização tipo de movimento.

Solução

-   ***Parametrizações Necessárias - Totvs Gestão Financeira***

Acessar **| Opções | Parâmetros | RMFluxus | Contas a Pagar |** e parametrizar as opções a seguir:

**Etapa Inclusão**

Origem Tab.Op.: Cliente / Fornecedor |

**Etapa Geração de INSS**

\- Habilitar a opção: Gerar INSS Automaticamente

\- Empregador | Origem das Tabelas: Lançamento Original |

\- Empregador | Tipo de documento: qual será o tipo de documento apresentado na DARF gerada *( Este tipo de documento deve ser do tipo "Sem Classificação")*

\- Empregado | Origem das Tabelas: Lançamento Original |

\- Empregado | Tipo de documento: qual será o tipo de documento apresentado na DARF gerada *( Este tipo de documento deve ser do tipo "Sem Classificação")*

\- Fornecedor: qual deve o código do cliente \\ fornecedor apresentado na DARF gerada

\- Data base para Geração:qual data será considerada para geração da DARF, emissão ou vencimento.

\- Valor Mínimo: 10,00 |

-   ***Parametrizações Necessárias - Totvs Gestão de Estoque, Compras e Faturamento***

Acessar | **Cadastro | Tabelas Auxiliares | Tipo de Documento |** e incluir tipo de documento específico para este fim, onde deverá informar | **Classificação : Gera INSS |**.

Se o cliente \\ fornecedor a ser utilizado possuir “Valor pago em outra empresa” e/ou “SEST/SENAT” a informação deverá ser preenchida em **| Cadastro | Cliente \\ Fornecedor | Dados Fiscais | Tributos | Dados Relacionados ao INSS | Pessoa Física | Categoria do Autônomo |**.

Acessar **| Cadastro | Produto | Dados Fiscais do Produto | INSS |** e definir os percentuais de INSS a serem considerados para **INSS Empregado - INSS Empregador**

Acessar | **Opções | Parâmetros | RMNucleus |** e selecionar processo onde o tipo de movimento a ser utilizado para este fim foi configurado. A seguir editar o mesmo e informar:

**Etapa Fin – Faturamento**

Fatura o movimento: Habilita

Fatura na Inclusão: Habilita

Tipo de Geração: Edita

Tipo de Documento Gerado: Outros

Tipo de Documento Duplicata: informar local de onde será buscado tipo de documento a ser considerado para este fim. Se escolher a opção “Utiliza do Tipo de Movimento” será apresentado campo **| Tipo de Documento Duplicata Default** | para informar o tipo de documento, caso contrário será consistido código do tipo de documento informado no cadastro do cliente \\ fornecedor preenchido no movimento.

Tipo de Documento Duplicada Default: informar o tipo de documento que será utilizado neste tipo de movimento

Numeração do Lançamento: informar se deseja utilizar “número do movimento + sequencial” ou apenas “sequência”

\- Caso queira que a base de cálculo do INSS tenha a mesma informação do “Valor Original do lançamento financeiro” deve preencher o mesmo código da “Fórmula de Valor a Ratear” no campo **| Fórmula para Cálculo Valor de Serviço |**. Se a base de cálculo de INSS for considerar outra informação, deverá cadastrar uma fórmula com o conteúdo desejado e referenciar no campo em questão.

-   ***Descrição do Processo***

A inclusão dos movimentos será feita como de costume, porém se o cliente \\ fornecedor possuir “Valor pago em outra empresa” ou “SEST/SENAT” deverá acessar a aba **| Tributos | INSS Pessoa Física |** e preencher os dados:

Ocorrência do Autônomo: seu preenchimento é obrigatório quando o autônomo prestar serviço em mais de uma empresa. O campo “Valor Pago em Outra Empresa” deve ser preenchido quando a ocorrência de autônomo for de | 5 a 8 |.

Valor Retido em outra Empresa: se refere ao valor do INSS referente serviço prestado em outra empresa. O mesmo se refere a 11% do valor preenchido em “Base INSS Outras Empresas”.

Base INSS Outras Empresas: se refere á base de calculo do INSS retido em outras empresas onde o trabalhador prestou serviço dentro do período de inclusão do movimento.

% sobre Vr. Serviço Empregado: percentual definido em **| Cadastro | Produto | Dados fiscais do Produto | INSS | Percentual de Dedução Empregado |** *(Percentual da base de cálculo em relação ao valor do lançamento. Não é alíquota)*

% sobre Vr. Serviço Empregador: percentual definido em **| Cadastro | Produto | Dados fiscais do Produto | INSS | Percentual de Dedução Empregador |** *(Percentual da base de cálculo em relação ao valor do lançamento. Não é alíquota)*

Cli\\For Origem: em que cliente o fornecedor autônomo prestou serviços

O valor do INSS calculado será visualizado ao editar a aba **| Contas a Pagar | Lançamento Financeiro | Valores | Impostos \\ Tributos |** no campo **| INSS |** onde serão apresentados:

Valor do Serviço: resultado da fórmula utilizada para composição da base de cálculo deste tributo

Ocorrência do Autônomo: informação preenchida na aba | Tributos | INSS Pessoa Física |

Cat. do Autônomo: informação preenchida em **| Dados Fiscais | Tributos | Dados Relacionados ao INSS | Pessoa Física | Categoria do Autônomo |**. Esta informação não pode ser preenchida na inclusão do movimento.

Vr. Base em outra empresa: base de cálculo do INSS paga em outra empresa

Valor INSS: Valor do INSS calculado considerando o valor pago em outra empresa se houver

Cliente Origem: código do cliente onde o fornecedor autônomo prestou serviço

O valor do tributo pode ser consultado através da aba **| Identificação |** do Movimento em **| Contas a Pagar | Valores | Impostos \\ Tributos | INSS |**.

Outra alternativa, é através do campo | **Vl Líquido Fin |** também na aba **| Identificação |**. Esta informação não tem “nenhuma” relação com o “valor líquido” do movimento.

-   ***Informações Adicionais***

**Composição do Valor do INSS**

O cálculo do INSS é feito obedecendo conteúdo da tabela de INSS com vigência a partir de 01/02/2010.

O valor será acumulativo no mês até que seja atingido teto máximo 3.416,54(base de cálculo) para dedução, desta forma, o INSS será deduzido no máximo até 375,81(Vr calculado).

Por se tratar de “autônomo” será considerada alíquota fixa de 11% sobre o valor do serviço prestado.

**[
![clip_image002](https://lh3.ggpht.com/_G7KXZLoZDsY/TKstl-vUjcI/AAAAAAAABoo/3XfELPuax64/clip_image002_thumb%5B2%5D.jpg?imgmax=800)
](https://lh5.ggpht.com/_G7KXZLoZDsY/TKstlJwl30I/AAAAAAAABok/bY8SRYI1Zdk/s1600-h/clip_image002%5B5%5D.jpg)**

**Exemplo de Cálculo do INSS sem Valor Pago em Outra Empresa**

Base de Cálculo: 5.000,00 Teto Máximo de INSS: 3.416,54 Alíquota: 11%

(Base de cálculo x Alíquota) = Valor de INSS

3.416,54 x 11% = 375,81

**Valor do INSS : 375,81**

**Exemplo de Cálculo do INSS com Valor Pago em Outra Empresa**

Base de Cálculo: 5.000,00

Valor pago em outra empresa: 1.000,00 Teto Máximo de INSS: 3.416,54 Alíquota: 11%

(Base de cálculo – Valor pago em Outra Empresa) x Alíquota) = Valor de INSS

3.416,54 – 1.000,00 = 2.416,54

2.416,54 x 11% = 265,81

**Valor do INSS : 265,81**

Em função do valor do “teto máximo de INSS” a base de cálculo vai considerar esta informação para composição do tributo.
