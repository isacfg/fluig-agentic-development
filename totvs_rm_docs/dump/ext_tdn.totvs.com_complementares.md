# RMFIS00006_Apresentação ISS

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=269061429](https://tdn.totvs.com/pages/releaseview.action?pageId=269061429)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão Fiscal   

**Versões:**

 12.1.X

**Ocorrência:**

 Parametrizar o sistema para apurar o tributo ISS - Noções gerais.

**Ambiente:**



**Passo a passo:**



  **Apresentação  ISS**
 

**Lei Complementar N° 116, de 31 de Julho de 2003** 
Dispõe sobre o Imposto Sobre Serviços de Qualquer Natureza, de competência dos Municípios e do Distrito Federal, e dá outras providências. 
Art.3° O serviço considera-se prestado e o imposto devido no local do estabelecimento prestador ou, na falta do estabelecimento, no local do domicílio do prestador, exceto nas hipóteses previstas nos Incisos I a XXII, quando o imposto será devido no local: 
I - do estabelecimento do tomador ou intermediário do serviço, ou, na falta de estabelecimento, onde ele estiver domiciliado, na hipótese do § 1° do art. 1° desta Lei Complementar.; ... XXII – do porto, aeroporto, ferroporto, terminal rodoviário, ferroviário ou metroviário, no caso dos serviços descritos pelo item 20 da lista anexa. 
Art. 4° Considera-se estabelecimento prestador o local onde o contribuinte desenvolva a atividade de prestar serviços, de modo permanente ou temporário, e que configure unidade econômica ou profissional, sendo irrelevantes para caracterizá-lo as denominações de sede, filial, agência, posto de atendimento, sucursal, escritório de representação ou contato ou quaisquer outras que vem a ser utilizadas. 

**Lei Específica de Belo Horizonte** 
A partir de 01/01/2003, de acordo com a Lei 8.468/03, o tomador do serviço é responsável pelo imposto, e deve reter e recolher o seu montante quando:

-   -   Prestador de serviço, pessoa física ou jurídica, estabelecido em Belo Horizonte não inscrito no cadastro municipal;
    -   Construtores de outros municípios contratadas para executar obras em Belo Horizonte;
    -   Qualquer empresa que esteja obrigada a emissão de Nota Fiscal de Serviço e não o fizer; ...
    -   a empresa que tenha gasto, com o pagamento de serviços de terceiros, valor igual ou superior a R$ 240.000,00 (Duzentos e quarenta mil reais), apurado no exercício anterior
    -   a empresa que tomar serviços relacionados nos itens 13,14,15,16,18,19,58,74,75 e 84 da lista de serviços. 

                                                                Tipos de Recolhimento

Apenas uma situação tributária de ISS ocorre por vez em cada nota fiscal. De forma geral a tributação é definida na operação pelo tipo de serviço prestado e pela situação do tomador do serviço.
**Operações de Saída (A empresa é Prestadora)**

 *ISS Devido:*Ocorre quando o serviço é Devido no Município do Prestador. Ocorre quando o serviço é Devido no Município do Tomador e este não é responsável por reter o ISS.

*ISS Retido:* Ocorre quando o serviço é Devido no Município do Tomador e este é responsável por reter o ISS. Porém o valor documento fiscal não sofreu a dedução do ISS, apenas o Boleto Bancário.

 
*ISS Retido Deduzido:* Ocorre quando o serviço é Devido no Município do Tomador e este é responsável por reter o ISS. O valor do documento fiscal sofreu a dedução do ISS assim como o Boleto; A configuração deste item é idêntico ao anterior exceto que no valor da nota fiscal (fórmula de valor líquido) consta a dedução do imposto.

 
*Depósito Judicial:* Ocorre quando o município tanto do Prestador quanto do Tomador estabelece que o serviço é devido para ele. O Prestador discorda desta situação e entra com ação judicial, passando a fazer o depósito em juízo, até que a situação se resolva. Este caso deve ser tratado na fórmula verificando os municípios em que este problema ocorre.

 
**Operação de Entrada (A empresa é Tomadora)**

 
*ISS Retido:* Ocorre nos casos estabelecidos pela Lei municipal;
Ocorre quando o serviço é Devido no Município do Tomador e este é responsável por reter o ISS. Porém o valor documento fiscal não sofreu a dedução do ISS, apenas o Boleto Bancário.

 
*ISS Retido Deduzido:* Ocorre nos mesmos moldes do ISS Retido, porém ocorre a dedução do imposto tanto no valor do documento fiscal quanto no Boleto Bancário.

 Parametrização

1° Passo: 
Identificar onde os Serviços são devidos tanto os **Prestados** quanto os **Contratados.**
\=> Tabela de Produtos – Pasta Impostos - Campo: **ISS Devido Município Cliente**


2° Passo: (Empresa Prestadora)
Identificar se a Lei Municipal do Cliente autoriza que este retenha o ISS para o Prestador. Caso Positivo deve-se habilitar o campo **Responsável Retenção de ISS** – Pasta Impostos/ Tributos no cadastro de **Cliente/****Fornecedor**. Caso contrário, deixar campo desabilitado.


3° Passo: (Empresa Tomadora)
Para os casos dos Fornecedores – Identificar o Regime de ISS. Isso porque se o regime do Fornecedor for Imune, Estimativa, etc. mesmo a empresa Tomadora do Serviço tendo obrigação de reter o imposto, para estes casos não poderá fazer. Cadastro **de Cliente/ Fornecedor** Pasta Impostos/ Tributos campo **Regime de ISS Empresa**.


4° Passo: (Empresa Tomadora)
Para o caso de Belo Horizonte – Se a Empresa deve reter o ISS na Entrada. Tabela de Filial – Pasta Dados Fiscais/ Tipo Estabelecimento - Campo **Responsável retenção ISS.**


5° Passo: 
Definir os Tributos. 
***Caso do Cliente possuir RM Nucleus e escriturar noRM Liber:*** Será necessário definir um Tributo para cada Tipo de Recolhimento e mais o **Tributo Base**. Existirão os Tipos de Recolhimento do ISS (Retido, Retido Deduzido, Devido ou Depósito Judicial) de acordo com a operação (entrada / saída). Através das fórmulas de base de cálculo dos tributos no RM Nucleus apenas uma situação será verificada em cada nota fiscal registrada. O RM Líber irá escriturar apenas o tributo base.

 
***Caso o Cliente possua*** ***apenas o RM Liber:*** Será necessário definir um único Tributo do Tipo ISS. 


6° Passo 
Definir o Período de Apuração do ISS vinculado ao Tributo Base 

7° Passo 
Definir as Alíquotas de ISS por Serviço e Município => Tabela de Produtos – Pasta Impostos/ Municípios. 

8° Passo 
No **RM Nucleus** – Cadastro de Tipo de Movimento definir as Fórmulas com base nas Regras pré - definidas – com o respectivo Tipo de Recolhimento e não deixando de definir o Tributo Base. Deverá ser cadastrado no Tipo de Movimento de Entrada todos os tipos de recolhimento aplicáveis na Entrada e no Tipo de Movimento de Saída os tipos de recolhimento aplicáveis na saída. Para cada tipo associar a fórmula correspondente.


9° Passo 
Digitar os movimentos. No momento da Digitação o sistema irá selecionar o código do Município onde o ISS é Devido. De acordo com as regras definidas nos diversos cadastros.


10° Passo 
Escriturar os Movimentos para o RM Liber. A rotina de escrituração irá fazer a associação para o Tributo Base, agrupando por Tipo de Recolhimento e Alíquota.


11° Passo 
Encerrar o Período de ISS. O sistema irá gerar os valores Devidos na Saída por Alíquota e Município. O sistema irá gerar os valores Retidos na Entrada por Alíquota e Município. O sistema irá gerar os valores Depósito Judicial na Saída por Alíquota e Município.


12° Passo 
Gerar as Guias de ISS. 
O sistema irá gerar as Guias de Pagamento de imposto da mesma forma do Passo anterior. Não existe restrição quanto ao valor mínimo da Guia de ISS. 

13° Passo 
Gerar o Lançamento Financeiro a pagar para cada Guia.


14° Passo 
Considerações sobre a DES 
O campo Regime de ISS – Cadastro de Filial deve estar preenchido por exigência da DES. Campo Natureza de Operação – Notas Emitidas. 
O cadastro de AIDF deve estar preenchido e com a informação do Órgão Responsável. Para Lançamentos de Saída precisa estar vinculado ao AIDF para somente gerar para a DES Notas Conjugadas ou Notas apenas de Serviços. Demais Notas Fiscais não devem ser selecionadas. 
Dados referentes ao Tomador e Prestador como Endereço, Tipo de Rua e Tipo de Bairro, Inscrição Municipal, CNPJ, etc. devem estar informados.

### **Exemplo de Parametrização das Fórmulas no RM Nucleus:**

Listamos abaixo um padrão – o texto não está no formato exato aceito pelo Corpore - para as fórmulas a serem utilizadas em um tipo de movimento que precisa identificar e selecionar o ISS conforme o tipo de recolhimento. 


***Movimento de Saída – com incidência do ISS e Tipo de Recolhimento - Depósito Judicial***

Neste exemplo colocamos uma lista fixa dos municípios que possuem legislação conflitante com a do município da empresa. Se o cliente está em um destes municípios sabemos que o tipo de recolhimento será o depósito judicial. 
 

Se (TABCFO('CODMUNICIPIO') = 'X') OU (TABCFO('CODMUNICIPIO') = 'Y') Então

Retorna a Base

Senão 0

FimSe

 
***Movimento de Saída – com incidência do ISS e Tipo de Recolhimento - Retido ou Retido Deduzido*** Se o tipo de recolhimento não foi identificado como Depósito Judicial pela fórmula anterior então iremos verificar a necessidade de retenção do ISS. Se o serviço prestado é devido no município do tomador e este é responsável pela retenção então montamos a base para este tipo de recolhimento. 


Se For('Deposito Judicial') = 0

Então Se (TABPRD('ISSDEVIDONOMUNICIPIOPRESTADOR') = 0) E

(TABCFO('RETENCAOISS') = 1) Então

Retorna a Base

Senão

0

FimSe

Senão

0

FimSe

 
***Movimento de Saída – com incidência do ISS e Tipo de Recolhimento - Devido***

Se o tipo de recolhimento não foi identificado nos casos anteriores assumimos que o tipo de recolhimento é devido.


Se For('ISSRetido') = 0

Então

Retorna a Base

Senão

0

FimSe

 
***Movimento de Entrada – com incidência do ISS e Tipo de Recolhimento - Retido ou Retido Deduzido***

Neste exemplo a empresa está tomando o serviço. É preciso checar se o fornecedor não se encaixa em nenhum regime especial que o isenta de retenção. Não sendo este o caso, verificamos se a empresa está enquadrada em alguma legislação específica em seu próprio município havendo aí a necessidade de retenção do tributo. Este dado é apontado por um campo na tabela de filiais e o fornecedor deve pertencer ao mesmo município.  Não havendo nenhuma legislação específica, o que vai determinar a retenção do imposto vai ser a característica do serviço prestado.


Se TABCFO('REGIMEISS') = 'Não se Aplica' Então

Se (SELECT('GFILIAL.RETENCAOISS') = 1) E

(TABCFO('MUNICIPIO') = SELECT('DFILIAL.MUNICIPIO') Então

Retorna a Base

Senão

Se (TABPRD('ISSDEVIDONOMUNICIPIOPRESTADOR') = 0) Então

Retorna a Base

Senão

0

FimSe

FimSe

Senão

0

FimSe

**Observações:**
