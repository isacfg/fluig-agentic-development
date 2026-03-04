# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - S-1250: Parametrizar Tipo de movimento NF Emissão Produtor Rural

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026244351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-S-1250-Parametrizar-Tipo-de-movimento-NF-Emiss%C3%A3o-Produtor-Rural](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026244351-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-S-1250-Parametrizar-Tipo-de-movimento-NF-Emiss%C3%A3o-Produtor-Rural)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 2 de agosto de 2022 às 16:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**Qual a **Parametrização** necessária para inclusão de **Movimento** referente aquisição de mercadoria onde a nota fiscal foi emitida pelo **Produtor Rural** a fim de atender a geração do **Registro S-1250** do **eSocial**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Solução
**O Decreto nº 8373/2014 instituiu o **Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas (****eSocial****).** Por esse sistema, os empregadores passarão a comunicar ao Governo, de forma unificada, as informações relativas aos trabalhadores, como vínculos, contribuições previdenciárias, folha de pagamento, comunicações de acidente de trabalho, aviso prévio, escriturações fiscais e informações sobre o FGTS.

O eSocial tornou-se obrigatório a partir de janeiro de 2018 para empresas com faturamento acima de 78 milhões e em junho de 2018 para todas as outras.

Em virtude disso, foi criado um serviço de geração de arquivo .xml para uso do módulo Gestão de Folha de Pagamento, que retornará dados necessários para a geração da rotina eSocial, mais especificamente o registro S-1250 - Aquisição de Produção Rural, conforme leiaute definido pela Receita Federal do Brasil.

**Parametrização necessária (Mov 1.2.xx)**

Etapa **Mov - Emitente/Destinatário 1/2**:
Emitente = Fornecedor
Destinatário = Empresa

(Corresponde ao campo **CODCFO**)

![screenshot_20190403_091307.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025371232/screenshot_20190403_091307.png)

Ao incluir o movimento será apresentado o campo conforme print abaixo

![screenshot_20190405_094303.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025618272/screenshot_20190405_094303.png)

Etapa **Fis - Escrituração 1/2:
**Tipo de Documento Escrituração: Deverá conter um **Tipo de Documento** referente ao modelo 55 (Nota Fiscal Eletrônica), 04 (Nota Fiscal de Produtor) ou 1B (Nota Avulsa).

![screenshot_20190403_090857.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025385631/screenshot_20190403_090857.png)

Tela do movimento onde este código será informado (corresponde ao campo **CODMODDOC**)

![screenshot_20190403_114742.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025399351/screenshot_20190403_114742.png)

Etapa **Fis - Natureza:
**Edição = Edita
Seleção Automática da Natureza = Seleciona por movimento

**Atenção: O movimento com natureza de Operação dos tipos "Y.451%, Y.921%" e "Y.949%" (onde Y é um prefixo que será substituído por um dos algarismos seguintes: "5", "6", "7" e "9"), na aquisição de produtos deve ser ignorada**

Esta parametrização irá habilitar o campo **Código Natureza de Operação** na aba **Integração - Fiscal** do movimento. (Corresponde ao campo CODNAT).

![screenshot_20190806_083245.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360043921133/screenshot_20190806_083245.png)

Etapa **Fis - Tributação Item:**
[Clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003850232-RM-MOV-Apura%C3%A7%C3%A3o-de-Tributos-FUNRURAL-GILRAT-SENAR-INSS-INSS15-INSS20-INSS25) e confira as parametrizações necessárias.

As demais parametrizações devem ser realizadas de acordo com a regra específica do seu negócio. Foram listados apenas os parâmetros necessários par a geração do registro S-1250.

**Inclusão do movimento**
A movimentação será inserida como de costume, sendo necessário atenção apenas a algumas particularidades.

São elas:
Apenas Cliente/Fornecedor pertencente ao **Ramo de Atividade** **Produtor Rural** será considerado na geração do registro S-1250.

(Corresponde ao campo RAMOATIV)

![screenshot_20190403_103245.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025377452/screenshot_20190403_103245.png)

Para versões anteriores a versão 12.1.25 se faz necessário cadastrar um campo complementar de Cliente/Fornecedor **INDOPCCP** com tipo igual a **Alfanumérico** e Tamanho 10 a fim de identificar a opção do Produtor Rural pela forma de Tributação da Contribuição Previdenciária. Este campo deverá ser preenchido com o código 1 ou 2 conforme layout do eSocial 2.5.

**Esta é uma informação obrigatória no cadastro de Cliente/Fornecedor Produtor Rural para correta geração do registro S-1250.**

Campo complementar:

![screenshot_20190403_111840.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025396711/screenshot_20190403_111840.png)

Tabela dinâmica:

![screenshot_20190403_112033.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025396991/screenshot_20190403_112033.png)

Itens da tabela dinâmica:

![screenshot_20190403_112040.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025382692/screenshot_20190403_112040.png)

Caso o Produtor Rural seja do tipo **Pessoa Física** situado no estado de São Paulo mas possui CNPJ será necessário cadastrar o campo complementar **CPFCOMPLEMENTAR.** Este campo será destinado ao CPF do Produtor Rural e o CNPJ deste será inserido normalmente na aba **Identificação** do cadastro de Cliente/Fornecedor.

![screenshot_20190403_112231.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025382832/screenshot_20190403_112231.png)

Os campos complementares criados serão exibidos na tela de cadastro do Cliente/Fornecedor aba Campos Complementares:

![screenshot_20190403_113745.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025398751/screenshot_20190403_113745.png)

A partir do release **12.1.25** as informações acima de CPF do Produtor Rural e Indicativo da forma de tributação estarão disponíveis no cadastro de **Cliente/Fornecedor**.
Através de anexo **eSocial** do cadastro de **Cliente/Fornecedor** campos **CPF** e **Indicativo da opção pelo produtor rural pela forma de tributação da contribuição previdenciária.** (Correspondente á tabela PESOCIALCLIFOR campos TOMADORFOLHA e CPF)

![screenshot_20190806_084305.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360043081874/screenshot_20190806_084305.png)

Ao incluir o movimento a aba de tributos do item de movimento apresentará a coluna **Valor Ret. Suspensa Judicialmente** que tem por finalidade informar o valor que não foi retido do imposto devido decisão/ordem proferida em Processo Judicial e será preenchida manualmente pelo usuário para cada tributo em que couber tal informação.
Essa coluna vai estar sempre visível, mas somente poderá ser editada quando o tributo correspondente for do tipo **INSS** ou **FUNRural**.

![screenshot_20190403_114614.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025385172/screenshot_20190403_114614.png)

**Informações adicionais
**A sentença SQL abaixo contém todas as consistências referente a obrigatoriedade de informações para que o movimento gere ou não eSocial registro S-1250. Apenas para os registros em que o campo **INDAQUISICAO** for diferente de NULL é que o registro será gerado. Caso o campo seja igual a NULL então este movimento não fará parte do registro S-1250.

Para correta execução da sentença é necessário informar os parâmetros abaixo:

CODCOLIGADA;
CODFILIAL;
CODMODDOC: 55, 04 ou 1B
DATAEMISSAO: Data Emissão do Movimento


Sentença versão 12.1.25:
SELECT  TMOV.CODCOLIGADA, TMOV.CODFILIAL, TMOV.IDMOV, TITMMOV.VALORBRUTOITEM VALORBRUTO,

                TMOV.DATAEMISSAO, TMOV.NUMEROMOV, TMOV.SERIE, TMOV.CODCFO,

                FCFO\_CFO.PESSOAFISOUJUR FPESSOAFISOUJUR, FCFO\_CFO.RAMOATIV FRAMOATIV, FCFO\_CFO.CGCCFO FCGCCFO,

                TMOV.CODCFONATUREZA,

                FCFO\_NAT.PESSOAFISOUJUR JPESSOAFISOUJUR, FCFO\_NAT.RAMOATIV JRAMOATIV, FCFO\_NAT.CGCCFO JCGCCFO,

                TITMMOV.NSEQITMMOV, TPRODUTODEF.PRDISENTOFUNRURAL,

                CASE  

                                  WHEN (DFILIAL.FILIALPAA <> 1 OR DFILIAL.FILIALPAA IS NULL)  AND FCFO\_NAT.PESSOAFISOUJUR = 'F' AND FCFO\_NAT.RAMOATIV = 16 AND TPRODUTODEF.PRDISENTOFUNRURAL <> 1THEN 1  

                                  WHEN DFILIAL.FILIALPAA = 1 AND FCFO\_NAT.PESSOAFISOUJUR = 'F' AND FCFO\_NAT.RAMOATIV = 16 AND TPRODUTODEF.PRDISENTOFUNRURAL <> 1 THEN 2

                                  WHEN DFILIAL.FILIALPAA = 1 AND FCFO\_CFO.PESSOAFISOUJUR = 'J' AND FCFO\_CFO.RAMOATIV = 16 AND TPRODUTODEF.PRDISENTOFUNRURAL <> 1 THEN 3 

                                  WHEN (DFILIAL.FILIALPAA <> 1 OR DFILIAL.FILIALPAA IS NULL) AND FCFO\_NAT.PESSOAFISOUJUR = 'F' AND FCFO\_NAT.RAMOATIV = 16 AND TPRODUTODEF.PRDISENTOFUNRURAL = 1 THEN 4

                                  WHEN DFILIAL.FILIALPAA = 1 AND FCFO\_NAT.PESSOAFISOUJUR = 'F' AND FCFO\_NAT.RAMOATIV = 16 AND TPRODUTODEF.PRDISENTOFUNRURAL = 1 THEN 5

                                  WHEN DFILIAL.FILIALPAA = 1 AND FCFO\_CFO.PESSOAFISOUJUR = 'J' AND FCFO\_CFO.RAMOATIV = 16 AND TPRODUTODEF.PRDISENTOFUNRURAL = 1 THEN 6

                                  END INDAQUISICAO

          FROM

                TMOV (NOLOCK)

                JOIN TITMMOV (NOLOCK)

                  ON TITMMOV.CODCOLIGADA = TMOV.CODCOLIGADA AND

                     TITMMOV.IDMOV = TMOV.IDMOV

                JOIN TPRODUTODEF (NOLOCK)

                  ON TPRODUTODEF.CODCOLIGADA = TITMMOV.CODCOLIGADA AND

                     TPRODUTODEF.IDPRD = TITMMOV.IDPRD

                JOIN FTDO (NOLOCK)

                  ON FTDO.CODCOLIGADA = TMOV.CODCOLIGADA AND

                      FTDO.CODTDO = TMOV.CODTDO

                LEFT JOIN FCFO FCFO\_CFO (NOLOCK)

                  ON FCFO\_CFO.CODCOLIGADA = TMOV.CODCOLCFO AND

                      FCFO\_CFO.CODCFO = TMOV.CODCFO AND

                      FCFO\_CFO.RAMOATIV = 16 AND

                      FCFO\_CFO.CGCCFO IS NOT NULL

                LEFT JOIN FCFO FCFO\_NAT (NOLOCK)

                  ON FCFO\_NAT.CODCOLIGADA = TMOV.CODCOLCFONATUREZA AND

                      FCFO\_NAT.CODCFO = TMOV.CODCFONATUREZA AND

                      FCFO\_NAT.RAMOATIV = 16 AND

                      FCFO\_NAT.CGCCFO IS NOT NULL

                LEFT JOIN DFILIAL

                             ON DFILIAL.CODCOLIGADA = TMOV.CODCOLIGADA AND

                                   DFILIAL.CODFILIAL = TMOV.CODFILIAL

                    WHERE TMOV.CODCOLIGADA = :CODCOLIGADA AND

                TMOV.CODFILIAL = :CODFILIAL AND

                TMOV.CODTMV LIKE '1.2%'  AND

                TMOV.DATAEMISSAO >= :DATAEMISSAO\_INI AND

                TMOV.DATAEMISSAO <= :DATAEMISSAO\_FIM AND

                FTDO.CODMODDOC = :CODMODDOC AND

TMOV.STATUS<> 'C' AND

                ((FCFO\_NAT.RAMOATIV IS NOT NULL) OR (FCFO\_CFO.RAMOATIV IS NOT NULL))
