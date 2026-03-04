# Workflow Processo BPM Fluig de Solicitação de Compra

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=192093006](https://tdn.totvs.com/pages/releaseview.action?pageId=192093006)
> **Domínio:** TDN (TOTVS Developer Network)

---

-   1[1\. Objetivo](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-1.Objetivo)
-   2[2\. Benefícios](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-2.Benefícios)
-   3[3. Ambiente de Negócio](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.AmbientedeNegócio)
    -   3.1[3.1 Segmento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.1Segmento)
    -   3.2[3.2 Áreas de Negócios](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.2ÁreasdeNegócios)
    -   3.3[3.3 Processo Workflow](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.3ProcessoWorkflow)
    -   3.4[3.4. Atividades do Processo](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.4.AtividadesdoProcesso)
    -   3.5[3.5. Regras de Negócio](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.RegrasdeNegócio) 
        -   3.5.1[3.5.1.Inclusão de Movimento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.1.InclusãodeMovimento) 
        -   3.5.2[3.5.2.Alteração de Movimento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.2.AlteraçãodeMovimento) 
        -   3.5.3[3.5.3.Cancelamento de movimento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.3.Cancelamentodemovimento)
        -   3.5.4[3.5.4.Estorno de Item Não Recebido](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.4.EstornodeItemNãoRecebido)
        -   3.5.5[3.5.5.Faturamento do Movimento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.5.FaturamentodoMovimento)
        -   3.5.6[3.5.6.Conclusão de Pedido](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.6.ConclusãodePedido)
        -   3.5.7[3.5.7.Outros Processos](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.7.OutrosProcessos)
        -   3.5.8[3.5.8.Formulário do Workflow](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.8.FormuláriodoWorkflow)
        -   3.5.9[3.5.9.Visão do Movimento e Itens de Movimento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.9.VisãodoMovimentoeItensdeMovimento)
        -   3.5.10[3.5.10.Avanço Automático do Estado Inicial](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-3.5.10.AvançoAutomáticodoEstadoInicial)
-   4[4\. Como Utilizar](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-4.ComoUtilizar)
    -   4.1[4.1. Iniciando Processo BPM pelo RM](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-4.1.IniciandoProcessoBPMpeloRM)
    -   4.2[4.2. Movimentando e Consultando Processo BPM pelo Fluig](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-4.2.MovimentandoeConsultandoProcessoBPMpeloFluig)
    -   4.3[4.3. Vídeo Demonstrativo](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-4.3.VídeoDemonstrativo)

-   6[5\. Como Instalar](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-5.ComoInstalar)
    -   6.1[5.1. Fluig](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-5.1.Fluig)
        -   6.1.1[a)    Instalar o ambiente de Desenvolvimento Fluig](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-a\)InstalaroambientedeDesenvolvimentoFluig) 
        -   6.1.2[b)    Buscar os Arquivos para Instalação do Processo BPM](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-b\)BuscarosArquivosparaInstalaçãodoProcessoBPM) 
        -   6.1.3[c)    Abrir o Arquivo do Instalação do Processo BPM no TDS](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-c\)AbriroArquivodoInstalaçãodoProcessoBPMnoTDS) 
        -   6.1.4[d)    Componentes dos Processos BPM](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-d\)ComponentesdosProcessosBPM)
        -   6.1.5[e)    Envio do Processo BPM para o Fluig](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-e\)EnviodoProcessoBPMparaoFluig)
    -   6.2[5.2. ERP RM](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-5.2.ERPRM)
        -   6.2.1[a) Configurar nos parâmetros globais do sistema](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-a\)Configurarnosparâmetrosglobaisdosistema)
        -   6.2.2[b) Configurar os parâmetros de Tipo de Movimento](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-b\)ConfigurarosparâmetrosdeTipodeMovimento)
        -   6.2.3[c) Importação da Consulta SQL](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-c\)ImportaçãodaConsultaSQL)
-   7[6.Considerações](#WorkflowProcessoBPMFluigdeSolicitaçãodeCompra-6.Considerações) 

## **1\. Objetivo**

Processo BPM de Aprovação de Faturamento é uma solução desenvolvida sobre a plataforma Fluig e integrada nativamente com ERP RM para permitir que o usuário envie dados da Aprovação  de Faturamento para aprovação através do fluxo de workflow do Fluig e possibilitar que apenas os itens aprovados através do Fluig sejam visualizados durante o processo de inclusão de um faturamento.

## **2\. Benefícios**

Os principais benefícios na utilização deste processo BPM são:

-   Rastreabilidade;
-   Governança;
-   Aprovação via mobile¹;



## **3. **Ambiente de Negócio****

### **3.1 Segmento**

Construção e Projeto.

### **3.2 Áreas de Negócios**

Materias.

### 3.3 Processo Workflow

-   [Processo de Negócio](#)
-   [Processo Fluig](#)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192091976/MovimentoAprova%C3%A7%C3%A3o.png?version=1&modificationDate=1459866495000&api=v2)
 

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/wfMovimento.png?version=1&modificationDate=1454009139000&api=v2)
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/wfItemMovimento.png?version=1&modificationDate=1454009138000&api=v2)

### 3.4. Atividades do Processo

**Atividade:** Início.

**Descrição:** Tarefa inicial do Workflow.

**Instruções:** Definir o início do Workflow.

**Atividade:** Aprovação Automática / Manual.

**Descrição:** Atividade para avançar automaticamente para os estados de Aprovado, caso o valor dos Itens de Movimento for menos que R$ 10 mil reais ou  para o estado de Aprovação.

**Instruções:** Por meio dessa atividade o workflow decidirá se irá aprovar ou enviar para o estado de aprovação.

**Atividade:** Aprovação.

**Descrição:** Analise para a aprovação para utilização do Movimento ou Item de Movimento.

**Instruções:** Por meio dessa atividade você poderá aprovar, aprovar e faturar, reprovar, reprovar e cancelar o movimento, reprovar e concluir o movimento ou reprovar e estornar item de movimento.

**Atividade:** Aprovado.

**Descrição:** Aprova a utilização do Movimento ou Item de Movimento para realizar o faturamento.

**Instruções:** Aprovação e finalização do workflow.

**Atividade:** Reprovado.

**Descrição:** Reprova a utilização do Movimento ou Item de Movimento para realizar o faturamento.

**Instruções:** Reprovação e finalização do workflow.

**Atividade:** Reprova e Cancela o Movimento.

**Descrição:** Reprova a utilização do Movimento e Cancela o Movimento associado ao workflow.

**Instruções:** Reprovação com ação de cancelamento do movimento e finalização do workflow.

**Atividade:** Reprova e Conclui o Movimento.

**Descrição:** Reprova a utilização do Movimento e Conclui o Movimento associado ao workflow.

**Instruções:** Reprovação com ação de conclusão do movimento e finalização do workflow.

**Atividade:** Reprova e Estorna Item de Movimento.

**Descrição:** Reprova a utilização do Movimento e Estorna o Item de Movimento associado ao workflow.

**Instruções:** Reprovação com ação de estorno do item de movimento e finalização do workflow.

**Atividade:** Aprova e Fatura o Movimento.

**Descrição:** Aprova a utilização do Movimento e Fatura o Movimento associado ao workflow.

**Instruções:** Aprovação com ação de faturamento do movimento e finalização do workflow.

OBSERVAÇÃO

O usuário ao aprovar um workflow poderá decidir a ação de Faturar o movimento. Caso usuário selecione esta atividade o movimento associado ao workflow será faturado, portanto será necessário definir a opção de faturamento como Automático e o tipo de movimento (Default) que será gerado nos parâmetros de tipo de movimento.

### 3.5. Regras de Negócio 

#### **3.5.1.****Inclusão de Movimento** 

Ao incluir um novo movimento, caso o tipo de movimento esteja parametrizado para utilizar o Workflow de Aprovação no Fluig para o Faturamento, será incluído um novo Workflow de acordo com os parâmetros definidos.

#### **3.5.2.****Alteração de Movimento** 

Ao alterar um movimento, caso o tipo de movimento esteja parametrizado para utilizar o Workflow de Aprovação no Fluig para Faturamento, se o campo Item Utilizado da tabela TITMMOVWFLUIG tenha o seu valor como verdadeiro é criado um novo workflow com a nova quantidade, caso contrário, se o campo Item Utilizado tenha o seu valor como falso será realizado o estorno do Workflow de Aprovação no Fluig e em seguida uma inclusão de um novo Workflow.

-   Caso esteja parametrizado para Agrupamento por Movimento será gerado um novo Workflow com todos os itens que possuam quantidade maior que zero.
-   Caso esteja parametrizado para Agrupamento por Item de Movimento será gerado um novo Workflow para este item. Neste caso os Workflows dos demais itens não serão afetados.
-   Somente serão gerados novos workflows para os itens de movimento que não estão participando de cotação.



#### **3.5.3.Cancelamento de movimento**

Ao cancelar um movimento, caso o tipo de movimento esteja parametrizado para utilizar o Workflow de Aprovação no Fluig para o Faturamento, será realizado o estorno do Workflow de Aprovação no Fluig de acordo com a regra de alteração de movimento.

Ao cancelar um movimento, o campo Item Utilizado da tabela TITMMOVWFLUIG dos itens de movimentos de origem relacionados terão o seu valor alterado para falso. Não haverá alteração nos workflows existentes para o movimento de origem.

#### **3.5.4.****Estorno de Item Não Recebido**

Ao executar o processo de estornar item não recebido o campo Item Utilizado da tabela TITMMOVWFLUIG dos itens de movimentos de origem relacionados terão o seu valor alterado para falso.  Não haverá alteração nos workflows existentes para o movimento de origem.

#### **3.5.5.Faturamento do Movimento**

No Faturamento do Movimento é realizada a consulta no estado do *workflow,* e de acordo com a parametrização se a aprovação for por Item, portanto, somente serão faturados os Itens aprovados e o movimento ficará com o Status de Parcialmente Faturado caso apenas um Item de Movimento estiver aprovado dentre outros no Movimento, caso a aprovação seja por Movimento todos os itens serão faturados se o *workflow* estiver aprovado e o Status do será alterado para Faturado. O campo Item Utilizado da tabela TITMMOVWFLUIG terá o seu valor alterado para verdadeiro.

#### **3.5.6.****Conclusão de Pedido**

Ao executar o processo de concluir pedido não é executado nem o estorno, nem a inclusão de um novo workflow no Fluig, sendo que os workflows que já tiverem sido criados e estejam no Fluig não serão mais utilizados neste processo, pois os itens de movimento já foram finalizados. 

#### **3.5.7.****Outros Processos**

Para os demais processos abaixo será respeitada a regra de Inclusão de Movimento de acordo com parametrização adotada para o Tipo de Movimento:

-   Ordem de Compra gerada pela Cotação.
-   Cópia de Movimento.
-   Copia por referência.
-   Movimento não processado.

#### **3.5.8.Formulário do Workflow**

Para o Formulário será considerado para apresentação dos Campos a parametrização do Tipo de Movimento.

**Os principais campos apresentados para o Workflow associado a uma Solicitação de Compras são:**

**Movimento:** 

\- Filial, Data Emissão e N° do movimento. 

**Item de Movimento:** 

\- Nome Fantasia do Produto, Unidade, Quantidade, Rateio: Centro de Custo e Departamento, Histórico, Preço Unitário (Preço Orçado, caso o Movimento veio do TOP), Valor Bruto e Valor Total.

Os principais campos apresentados para o Workflow associado a uma Ordem de Compras são:

**Movimento:** 

\- Filial, Código Cli/For e Nome Fantasia do Cli/For, Data Emissão, N° do movimento e Valor Líquido do movimento.

**Item de Movimento:** 

Nome Fantasia do Produto, Unidade, Quantidade, Valor unitário, Valor total (Valor Bruto Item), Rateio: Centro de Custo e Departamento, Histórico e -alor Orçado (Preço da Solicitação de Compra).

**Informações Adicionais:** 

Será exibida na aba, próxima ao Item de Movimento, os últimos Pedidos do Produto com os campos: Tipo de Movimento, Fornecedor, Condição de Pagamento, Valor Bruto Item, Quantidade, Data de Emissão e Unidade.

Tanto para os Workflows de Solicitação de Compras quanto para Ordens de Compra será apresentada uma aba “Medições” para informações provenientes do Totvs Obras e Projetos, obtidos através de Serviço, quando o movimento for originado do mesmo. Os campos que serão apresentados nesta aba são: 

**Se a Origem do Movimento for Pedido do TOP:** Percentual do pedido em relação ao Histograma (Total da Obra), Preço médio de compra na Obra, no Estado e Último preço de compra na Obra, no Estado.

**Se a Origem for de contratos do TOP:** Medições que originaram o Movimento, Para cada Item medido o percentual dele em relação a tarefa e o percentual em relação ao contrato, Deduções de faturamento direto nesta medição, Outras Deduções e Retenções.

Independente da origem dos dados provenientes do Totvs Obras e Projetos serão apresentados os campos Código e Nome do Projeto. Deverá ser considerado Contratos de Compra e Venda para que seja retornado os valores para o Movimento.

#### **3.5.9.Visão do Movimento e Itens de Movimento**

Será possível filtrar os Movimentos aprovados e não aprovados de acordo com os botões que estarão disponíveis na Visão do Movimento.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/image2015-3-9%2011%3A38%3A35.png?version=1&modificationDate=1425911821000&api=v2)

Na visão do Movimento será disponibilizado um anexo de consulta dos Itens de Movimento onde haverá as informações de Id. Do Fluig, Status Atual do Workflow e Status de Aprovação.

#### **3.5.10.Avanço Automático do Estado Inicial**

O sistema realiza automaticamente o avanço do Estado Inicial do Workflow. Caso queira manter o Workflow em seu Estado Inicial, deverá ser incluída a Formula Visual “MOVWKF0023 - Fluig - Manter WF no Estado Inicial.TotvsWF” disponível nos Objetos Gerenciais associado no Gatilho ao evento Antes de Preparar Contexto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192091976/image2016-1-28%2019%3A34%3A55.png?version=1&modificationDate=1454009710000&api=v2)

## **4\. Como Utilizar**

### 4.1. Iniciando Processo BPM pelo RM

-   [Passo 1](#)
-   [Passo 2](#)
-   [Passo 3](#)
-   [Passo 4](#)

-   No Tipo de Movimento configurado realizar a inclusão do Movimento.

    **
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192093006/Movimento.PNG?version=1&modificationDate=1469559314000&api=v2)

    **


-    Defina o Item de Movimento e o respectivo produto a ser utilizado para aprovação.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192093006/ItemMovimento.PNG?version=1&modificationDate=1469559332000&api=v2)


-   Ao final do processo verifique no anexo ao lado os Itens de Movimento e seus respectivos workflows, conforme figura abaixo.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192093006/MovimentoVisao.PNG?version=1&modificationDate=1469559343000&api=v2)


-   Enquanto não é realizada a aprovação não será possível faturar o movimento, apresentando a mensagem conforme figura abaixo.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192091976/Passo5.PNG?version=1&modificationDate=1459877978000&api=v2)
     


### 4.2. Movimentando e Consultando Processo BPM pelo Fluig

-   [Passo 1](#)
-   [Passo 2](#)
-   [Passo 3](#)
-   [Passo 4](#)

-   Faça login no Fluig e clique no link Tarefas a concluir, conforme figura abaixo:

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/Passo0Fluig.PNG?version=2&modificationDate=1459856325000&api=v2)


-    A página que irá se abrir irá mostrar todas as suas tarefas à concluir. Encontre na tabela de tarefas o Workflow gerado através da inclusão / edição do movimento e dê um clique sobre ele, conforme figura abaixo:

    **
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192093006/FluigVisao.PNG?version=1&modificationDate=1469559426000&api=v2)

    **


-   Será aberto o Workflow com os dados do Movimento e Item de Movimento, de acordo com a parametrização realizada para o Tipo de Movimento os campos serão apresentados no formulário. Todos os dados são apenas para consulta, portanto não será possível realizar alterações no movimento através do formulário.

    **
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192093006/MovimentoFluig.PNG?version=1&modificationDate=1469559444000&api=v2)

    **


-   Para Aprovar ou Reprovar o *workflow* escolha no combo do lado superior direito o botão Enviar. Veja abaixo na figura um exemplo de Aprovação do Workflo*w*:

    **
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/192093006/MovimentoFluigEnviar.png?version=1&modificationDate=1469559457000&api=v2)

    **

-   O Workflow por Item de Movimento apresenta as opções para que seja possível aprovar ou reprovar o workflow.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/Passo4Fluig.PNG?version=1&modificationDate=1459857360000&api=v2)

-    Uma vez que o Workflow esteja Aprovado, já podemos faturar Movimento.

### 4.3. Vídeo Demonstrativo

 
[🎥 Vídeo](//www.youtube.com/embed/P5h_lgachZI?wmode=opaque)

##

## **5\. Como Instalar**

### **5.1. Fluig**

#### **a)**    **Instalar o ambiente de Desenvolvimento Fluig** 

Para realizar a instalação do Processo BPM é preciso ter instalado o TDS (TOTVS Developer Studio) e o plugin do FLUIG para o mesmo. Para instalar o TDS e o plugin do FLUIG visite esta página que contém detalhes para tal: [Guia de instalação fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=73078179).

#### **b)**    **Buscar os Arquivos para Instalação do Processo BPM** 

O nome do arquivo do projeto processo BPM Fluig de Aprovação de Movimentos é: Materiais.zip. Estão na pasta de instalação dentro da pasta objetos gerenciais: <pasta de instalação do RM>\\ObjetosGerenciais\\Fluig\\Workflow\\Materiais.zip.

#### **c)**    **Abrir o Arquivo do Instalação do Processo BPM no TDS** 

No link estão as instruções de como fazer a abertura do arquivo do processo BPM dentro do TDS: [Importação e exportação de projeto no Fluig Studio](https://tdn.totvs.com/pages/viewpage.action?pageId=128681226).

#### **d)**    **Componentes dos Processos BPM**

Processo BPM

 Aprovação de Movimento para Faturamento

Processo BPM

 Aprovação de Movimento para Faturamento

**Tipo Arquivo**

**Nome do Arquivo**

**Descrição**

Formulário

mov\_formWfNucleus.html

Formulário com informações importantes do Movimento e Item de Movimento.

Evento Formulário

displayFields

Evento responsável por atualizar os campos no formulário.

Evento Processo

WorkflowNucleusItem.beforeStateEntry

Ao mudar de status do workflow de Item de Movimento esse evento atualiza os dados do formulário e define as regras de avanço automático.

Evento Processo

WorkflowNucleus.beforeStateEntry

Ao mudar de status do workflow de Movimento esse evento atualiza os dados do formulário e define as regras de avanço automático.

Diagrama

WorkflowNucleus.process 

Diagrama de processo Fluig para Movimento.

Diagrama

WorkflowNucleusItem.process 

Diagrama de processo Fluig para Item de Movimento.

Dataset

wsDataSetNucleus

Obtém informações do Movimento e Item de Movimento

Dataset

wsDataSetServiceMov

Dataset responsável por utilizar os serviços de Faturamento, Estorno de Item, Cancelamento e Conclusão de Movimento.

Consulta SQL

NUCSQL0004

Consulta SQL responsável por retornar o valor liquido do movimento para o avanço automático.

#### **e)**    **Envio do Processo BPM para o Fluig**

Uma vez instalado TDS deve de importar o Processo BPM para o TDS para manipularmos e posteriormente importá-lo para o servidor Fluig do cliente. Para importar o Workflow siga os passos explicados nesta página: [Expedição de Processos de Workflow pelo Fluig Studio](https://tdn.totvs.com/pages/releaseview.action;jsessionid=D2A6F7626B6B8CB061A77A89F9693875?pageId=128681226#ExpediçãodeProcessosdeWorkflowpeloFluigStudio-ExpediçãodeprocessodeworkflowpelopluginFluignoTDS)[.](https://tdn.totvs.com/pages/releaseview.action;jsessionid=D2A6F7626B6B8CB061A77A89F9693875?pageId=128681226#ExpediçãodeProcessosdeWorkflowpeloFluigStudio-ExpediçãodeprocessodeworkflowpelopluginFluignoTDS) 

### 5.2. ERP RM

#### **a)** **Configurar nos parâmetros globais do sistema**

Para a utilização da integração do Nucleus com o Fluig é necessário configurar em Parâmetros Globais o Servidor, Usuário, Senha e Id da Empresa para a integração do Nucleus (TOTVS Gestão de Estoque Compras e Faturamentos) com o Fluig.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/image2015-3-9%2011%3A7%3A32.png?version=1&modificationDate=1425909958000&api=v2)

#### **b) Configurar os parâmetros de Tipo de Movimento**

Nos parâmetros do módulo “Gestão de Estoque, Compras e Faturamento” por Tipo de Movimento estão disponíveis, na Etapa 73 - Workflow Fluig, os parâmetros para integração. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/image2015-3-9%2011%3A40%3A20.png?version=1&modificationDate=1425911926000&api=v2)

**Aprovação:**

Este parâmetro irá definir o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são: “Não Utiliza”, “Utiliza no Faturamento”, “Utiliza na Cotação” e “Utiliza em Ambos”.

Caso seja selecionado a opção de “Não Utiliza”, a aprovação pelo Fluig estará desabilitada. Caso seja selecionado a opção “Utiliza no Faturamento”, a aprovação pelo Fluig será habilitada para que somente itens aprovados no Fluig possam ser faturados. Para a opção de “Utiliza na Cotação”, a aprovação pelo Fluig será habilitada para que somente itens aprovados no Fluig possam ser selecionados ao se criar uma nova cotação. A opção “Utiliza em Ambos” será utilizada quando se deseja utilizar as duas aprovações, no Faturamento e na Cotação.

**Parâmetros referentes a Aprovação no Faturamento:**

**Processo:**

Este parâmetro irá definir o processo do Fluig que será utilizado para a inclusão do Workflow.

**Lista de Estados Finais de Aprovação:**

Este parâmetro irá definir todos os estados de aprovação final possíveis para o processo selecionado. Não será possível informar estados repetidos nesta lista.

**Agrupamento:**

Este parâmetro irá definir o tipo de agrupamento utilizado. As opção disponíveis são: “Movimento”, “Item de Movimento”.

Caso seja selecionado a opção de “Movimento”, será gerado um único workflow por movimento, contendo os dados de todos os itens de movimento. Uma vez aprovado este workflow todos os itens estarão liberados para serem utilizados. Caso seja selecionado a opção de “Item de Movimento” será gerado um workflow para cada item de movimento, possibilitando ao usuário que cada item seja aprovado de forma individual.

#### **c) Importação da Consulta SQL**

No cadastro de Consultas SQL é necessário realizar a importação do objeto gerencial NUCSQL0004 disponível na pasta de instalação dentro da pasta objetos gerenciais: <pasta de instalação do RM>\\ObjetosGerenciais\\SQL\\NUCSQL0004.TotvsSQL. 

## **6.Considerações** 

Informamos que é de suma importância conhecimento técnico para implantação do componente no Fluig. Caso necessite, sugerimos aquisição de horas de consultoria para auxiliar na Implantação desses componentes junto ao canal TOTVS que lhe atende ou através da Fluig Store. 

Todos os produtos comercializados e distribuídos na Fluig Store possuem como pré-requisito a plataforma Fluig para funcionamento.  

Para mais informações sobre a integração Fluig x RM consulte: [*Fluig Framework*](https://tdn.totvs.com/display/public/rm/Fluig+-+Framework)*.*

****1: Não é suportado o Windows Phone e Windows Mobile. Para Android a versão suportada é 4.1.1 ou superior. Para mais informações sobre portabilidade consulte: [Matriz de Portabilidade](https://tdn.totvs.com/display/public/fluig/Matriz+de+Portabilidade).****
