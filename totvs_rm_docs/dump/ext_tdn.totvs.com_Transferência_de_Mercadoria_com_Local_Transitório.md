# TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio](https://tdn.totvs.com/display/public/LRM/TRF0002_Transferencia_de_Mercadoria_Utilizando_Local_de_Estoque_Transitorio)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

11.50 e superiores

**Ocorrência:**

Transferência de Mercadoria utilizando Local de Estoque Transitório

**Ambiente:**

Transferência

**Passo a passo:**

Este documento tem como finalidade auxiliar ao usuário a parametrizar um movimento para Transferência de Mercadoria utilizando um Local de Estoque Transitório. 

As movimentações de transferências de mercadorias são realizadas no estoque do estabelecimento do remetente para o estoque de outro estabelecimento pertencente ao mesmo titular, ou seja, a transferência de mercadorias ocorre entre filiais e locais de estoque da própria empresa. 

Tem por finalidade fazer transferência de mercadorias entre filiais onde a data de saída do local de estoque de origem da mercadoria é diferente da data de entrada do local de estoque de destino da mercadoria. Este processo é muito comum em transferências entre filiais que possuem locais de estoque distantes, como no caso de uma transferência interestadual, ou seja, entre filiais de estados diferentes. Neste caso o saldo que sai da filial de origem não aumenta automaticamente o saldo da filial de destino tendo que ficar transitoriamente em um local de estoque até concluir o processo.

# Passo a Passo

Deverá ir no menu **Ambiente - Parâmetros - Gestão de Estoque, Compras e Faturamento**. Após carregado os parâmetros, deverá expandir a área **04.04 - Gestão de Estoque** e ir em **04.04.06 - Transferências.**

Selecione o tipo de movimento para ser configurado e clique em parametrizar ou dê duplo clique sobre a linha do movimento.



~~ Movimento de Origem - 3.1.XX

-   **Etapa Mov – Emitente / Destinatário 1/2**

Emitente: Empresa 

Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

Destinatário: Empresa 

Edição do Local de Destino: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

-   **Etapa Mov – Emitente / Destinatário 2/2**
    Local de Saída: Edita



-   **Etapa Mov - Datas 1/2**

Data do Movimento Default: informar qual será a data considerada para afetar estoque e apresentação dos dados da ficha física financeira.

Exemplo: Se for informado “Data Emissão” significa que as movimentações vão afetar estoque de acordo com a data de emissão apresentada na inclusão do movimento.

-   **Etapa Item – Preço**
    Edição do Preço: Mostra
    Buscar preço em: **Custo Médio** para considerar o “Custo Médio por Local” ou **Custo Médio Filial** para considerar o “Custo Médio por Filial”. Esta informação será considerada para composição do custo entre as filiais x local de estoque.


    O campo “Edição do Preço” é parametrizado como “mostra” para evitar que o preço unitário seja alterado manualmente pelo usuário, visto que, será apresentado “custo médio” default.

    Se necessário, retire uma Ficha Física Financeira do produto para análise do Custo Médio.





-   **Etapa Estoque - Estoque 1/3**
    Efeito sobre os saldos Físico
    2 - Saldo Atual: Diminui


-   **Etapa Estoque - Estoque 2/3**
    Saldo Financeiro
    Efeito Sobre o Saldo Atual: Diminui

-   **Etapa Compra/Venda - Características**
    Gera Movimento de Transferência: Habilitar
    Movimento Gerado Default: informar o código do tipo de movimento para o qual será gerado faturamento
    Pedir Confirmação da Baixa de Transferência: Desmarcado


-   **Etapa Fis - Dados**
    Campo Tipo: Saída


-   **Etapa Fis- Escrituração 1/2**
    Gerar Escrituração: Habilitar
    Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal


-    **Etapa Fis- Escrituração 2/2**
    Tipo do Lançamento Fiscal da Transferência: Ambos

Outras parametrizações ficam de acordo com a regra de negócio da empresa.



~~ Movimento de Destino - 3.1.YY

-   **Etapa Mov – Emitente / Destinatário 1/2**

Emitente: Empresa

Edição da Filial de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

Edição do Local de Emissão: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido

Destinatário: Empresa

Edição do Local de Destino: informar “Edita” para permitir que o usuário preencha os dados da filial, ou “Mostra” se quiser deixar um default preenchido



-   **Etapa Mov – Emitente / Destinatário 2/2**
    Local de Saída: Edita


-   **Etapa Mov - Datas 1/2**
    Data do Movimento Default: informar qual será a data considerada para afetar estoque e apresentação dos dados da ficha física financeira.
    Exemplo: Se for informado “Data Emissão” significa que as movimentações vão afetar estoque de acordo com a data de emissão apresentada na inclusão do movimento.


-   **Etapa Item – Preço**
    Edição do Preço: Mostra
    Buscar Preço Em: Deixar todas as opções Desmarcadas


-   **Etapa Estoque - Estoque 1/3**
    Efeito sobre os saldos Físico
    2 - Saldo Atual: Diminui


-   **Etapa Estoque - Estoque 2/3**
    Saldo Financeiro
    Efeito Sobre o Saldo Atual: Diminui

-   **Etapa Estoque - Custo**

Utilizar fórmula de valor financeiro na transferência: Deverá averiguar a funcionalidade do parâmetro e habilitar de acordo com a necessidade da empresa.

\*\*O exemplo deste documento está considerando o saldo 2 (Atual) para efeito de transferência\*\*



Importante

O parâmetro **| Utilizar Fórmula de Valor Financeiro na Transferência |** tem a seguinte funcionalidade: 

Parâmetro habilitado: o sistema vai calcular o valor financeiro da entrada da transferência através da fórmula indicada na pasta **| Estoque | Fórmula Valor Financeiro |**

Parâmetro desabilitado: o valor financeiro da entrada da transferência será buscado no valor financeiro da saída do movimento anterior.

Como se trata de uma movimentação de transferência o custo deve ser o mesmo entre as filias x locais de estoque envolvidos. Diante disto, este exemplo vai considerar o parâmetro **| Utilizar fórmula de valor financeiro na transferência |** habilitado.



-   **Etapa Fis - Dados**
    Campo Tipo: Saída


-   **Etapa Fis- Escrituração 1/2**
    Gerar Escrituração: Habilitar
    Tipo de Documento Escrituração: informar o tipo de documento que deve ser apresentado no Totvs Gestão Fiscal


-   **Etapa Fis- Escrituração 2/2**
    Tipo do Lançamento Fiscal da Transferência: Entrada/Saída

    A transferência transitória deve possuir 2 tipos de movimento, um parametrizado como Entrada e outro parametrizado como Saída.
    (Apenas a transferência direta deve utilizar o tipo Ambos).



Outras parametrizações ficam de acordo com a regra de negócio da empresa.



Após a parametrização do tipo de movimento, deverá configurar a Natureza De Operação que será utilizada na movimentação. Acesse o menu Cadastros, na Seção "Fiscais", clique em Natureza Fiscal.

Deverá incluir duas naturezas compatíveis com os dados da movimentação de transferência.

\- Uma Natureza Fiscal de Entrada - Transferência de dentro ou fora do Estado (de acordo com a necessidade da operação)

\- Uma Natureza Fiscal de Saída - Transferência para dentro ou fora do Estado (de acordo com a necessidade da operação)

Depois de incluir as naturezas, deve editá-las e acessar a aba **Outros Dados** onde deve informar:

Tipo de Devolução: Transferência

Código da Natureza Inversa: Para **Na****tureza de saída** deve informar o código da natureza fiscal de entrada que será relacionada a ela. Se tratando de **N****atureza de entrada** deve informar o código da natureza fiscal de saída que será relacionada a mesma.



Importante

O sistema irá utilizar a Natureza Inversa parametrizada na Natureza de Saída do movimento para geração automática do lançamento fiscal de Entrada na Empresa Destino, sendo necessário que as configurações fiscais das naturezas de Entrada e Saída sejam equivalentes.



# Descrição do Processo

A movimentação 3.1.XX(exemplo) será inclusa como de costume tendo como particularidades o preenchimento dos campos abaixo:



**Aba Identificação:**

\- Local de Estoque: informar o local de estoque de origem da mercadoria

\- Cód.Filial de Destino: informar o código da filial onde a mercadoria vai ficar “transitoriamente” até a entrega em seu destino

\- Local de Destino: informar o local de estoque transitório da mercadoria

\- Natureza de Operação: informar o código da natureza de operação compatível com estado da filial de destino, ou seja, com o estado da filial preenchido na aba **| Cabeçalho |** do movimento.



**Aba Cabeçalho**

\- Filial de Saída: informar o código da filial de destino final da mercadoria

\- Local de Saída: informar o local de estoque de destino final da mercadoria



Depois de inclusa movimentação do tipo 3.1.XX deve selecionar a mesma através da visão de movimentos e clicar no ícone **| 
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/286001051/image2017-11-22_13-25-38.png?version=1&modificationDate=1511367939000&api=v2)**  **- Receber |** de forma que será feito “estorno” do saldo apresentado na filial transitória para filial de destino. Desta forma, a filial transitória que inicialmente estava preenchida no movimento de origem em **| Identificação | Filial de Destino |** passa a ser a filial de origem do movimento 3.1.YY, e a informação preenchida na aba **| Cabeçalho | Filial de Saída |** passa a ser a filial de destino final da mercadoria.



Descrição dos dados do movimento

\- Filial de Origem: 01, Local de Estoque de Origem: 01

\- Filial Transitória: 01, Local de Estoque de Transitório: 02

\- Filial de Destino: 14, Local de Estoque de Destino: 14

\- Quantidade Transferida: 300



Saldo na filial antes de incluir movimentação de transferência

\- Filial de Origem Saldo Físico: 1500 C.M: 3,00 Saldo Financeiro: 4.500

\- Filial Transitória Saldo Físico: 500 C.M: 5,00 Saldo Financeiro: 2.500

\- Filial de Destino Saldo Físico: 0 C.M: 0,00 Saldo Financeiro: 0



Saldo na filial após incluir 1ª movimentação de transferência

\- Filial de Origem Saldo Físico: 1200 C.M: 3,00 Saldo Financeiro: 3.600

\- Filial Transitória: Saldo Físico: 800 C.M: 4,25 Saldo Financeiro: 3.400

\- Filial de Destino: Saldo Físico: 0 C.M: 0,00 Saldo Financeiro: 0

Importante:

Considerando parametrização de preço destacada anteriormente a mercadoria saiu da filial de origem e entrou na filial transitória a um custo médio de 3,00. A informação em questão afetou o saldo físico e financeiro da filial transitória fazendo com que o custo médio fosse alterado para 4,25.



Saldo na filial após faturar para o 2º movimento de transferência

\- Filial de Origem Saldo Físico: 1200 C.M: 3,00 Saldo Financeiro: 3.600

\- Filial Transitória: Saldo Físico: 500 C.M: 4,25 Saldo Financeiro: 2.125

\- Filial de Destino: Saldo Físico: 300 C.M: 3,00 Saldo Financeiro: 900

Importante:

Toda movimentação de saída é feita a custo médio, diante disto, a transferência da mercadoria da filial transitória para filial de destino ocorreu ao custo de 4,25 e entrou na filial de destino ao custo de 3,00 obedecendo custo da filial de origem da mercadoria.



-   ***Escrituração do Movimento de Transferência***

A primeira transferência será escriturada considerando a natureza de operação informada no movimento e o segundo movimento gerado será escriturado considerando sua natureza inversa, e registrado no Totvs Gestão Fiscal como uma entrada.

Para isto o usuário deverá incluir 02(dois) lotes de escrituração no Totvs Gestão de Estoque, Compras e Faturamento onde vai informar:



Lote para escriturar movimento 3.1.XX - Saída da mercadoria para transferência

\- Tipo de Exportação: Normal

\- Tipo de Movimento: Saída

\- Filial: informar o código da filial onde foi inclusa 1ª movimentação de transferência

\- Movimentos: informar o código do tipo de movimento 3.1.XX(exemplo)

\- Período: informar a data de lançamento em que a movimentação foi inclusa



Lote para escriturar movimento 3.1.YY - Entrada da mercadoria transferida

\- Tipo de Exportação: Normal

\- Tipo de Movimento: Entrada

\- Filial: informar o código da filial de destino da mercadoria

\- Movimentos: informar o código do tipo de movimento 3.1.YY(exemplo)

\- Período: informar a data de lançamento em que a movimentação foi inclusa



Importante:

O tipo de movimento informado em cada filtro vai obedecer parametrização definida no tipo de movimento utilizado para inclusão das transferências.



Depois de feita escrituração dos lançamentos para o Totvs Gestão Fiscal deverá acessar o mesmo e selecionar opção **| Contexto | Selecionar Filial |** onde deve escolher filial onde a primeira movimentação foi inclusa. A seguir acessar **| Obrigações Principais | Saídas |** e editar o lançamento fiscal. Na aba Identificação | Cabeçalho do lançamento fiscal serão apresentados dados do destinatário e filial da mercadoria.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286001051/image2017-11-22_13-26-22.png?version=1&modificationDate=1511367982000&api=v2)



Para visualizar os dados do lançamento de entrada da transferência deve acessar **| Contexto | Selecionar Filial |** e escolher filial de destino da mercadoria, o código em questão pode ser visualizado no lançamento anterior. A seguir acessar **| Lançamentos | Manutenção Lançamentos Entrada |** e editar o lançamento fiscal. Na aba identificação do lançamento serão apresentados dados do emitente e filial de origem do lançamento. Como foi usado local de estoque transitório(intermediário) o emitente da mercadoria será o destinatário informado na inclusão do primeiro movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/286001051/image2017-11-22_13-26-38.png?version=1&modificationDate=1511367998000&api=v2)









**Observações:**

Para mais informações: 



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)



**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
