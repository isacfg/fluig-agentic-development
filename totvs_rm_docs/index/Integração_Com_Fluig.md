# Integração Com Fluig

> **9 artigos**

---

## Sumário

- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar Movimento: Não foi possível cancelar Workflow Fluig para este movimento
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao criar movimento integrado com o Fluig - Erro ao criar uma instância no Servidor do Fluig: Could not send Message
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitação aprovada no Fluig não aprovada no RM
- Workflow Processo BPM Fluig de Aprovação de Movimento 🔗 _(_links_externos)_
- Aprovação de Contrato por Workflow no Fluig 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - RM x Fluig Como alterar valor mínimo da aprovação automática
- Workflow Processo BPM Fluig de Solicitação de Compra 🔗 _(_links_externos)_
- Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fluig: NOK Usuário Não Encontrado!
- GED - Gerenciamento Eletrônica de Documentos 🔗 _(_links_externos)_

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao cancelar Movimento: Não foi possível cancelar Workflow Fluig para este movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971782-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-Movimento-N%C3%A3o-foi-poss%C3%ADvel-cancelar-Workflow-Fluig-para-este-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971782-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-cancelar-Movimento-N%C3%A3o-foi-poss%C3%ADvel-cancelar-Workflow-Fluig-para-este-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 10 de abril de 2025 às 09:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31312105547543)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**

Ao cancelar um Movimento que possui Integração Workflow Fluig é apresentado mensagem: **Não foi possível cancelar Workflow Fluig para este movimento Usuário não é o usuário requisitante ou gestor do processo. Não será possível cancelar a solicitação!**

![Imagem](https://totvssuporte.zendesk.com/attachments/token/z0rpM7ECWMWq5EV0407s6EnQm/?name=inline-30354597.png)

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Essa mensagem é exibida pois não foi definido um usuário específico para ser utilizado no cancelamento de **Workflows no Fluig**.
A regra do Fluig é permitir a exclusão/cancelamento da solicitação apenas pelo **criador ou por um usuário administrador do processo**. Desta forma, mesmo que um usuário tenha o mesmo papel do criador, ele não pode cancelar pois não é o gestor do processo nem o criador.

Com a criação desta funcionalidade, será possível informar um usuário específico para ser utilizado no cancelamento de **Workflows no Fluig**.


Acesse os parâmetros do **Gestão de Estoque, Compras e Faturamento | Definições Gerais 3/3:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013535822)

Para maiores informações, verifique a documentação: [Usuário Padrão de Cancelamento do Workflow Fluig](https://tdn.totvs.com.br/pages/releaseview.action?pageId=381037182)

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Erro ao criar movimento integrado com o Fluig - Erro ao criar uma instância no Servidor do Fluig: Could not send Message

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360009343712-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-criar-movimento-integrado-com-o-Fluig-Erro-ao-criar-uma-inst%C3%A2ncia-no-Servidor-do-Fluig-Could-not-send-Message](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360009343712-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Erro-ao-criar-movimento-integrado-com-o-Fluig-Erro-ao-criar-uma-inst%C3%A2ncia-no-Servidor-do-Fluig-Could-not-send-Message)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 10 de abril de 2025 às 09:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/25452694305815)**Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência
**Ao tentar criar um movimento com integração Fluig utilizando o Fluxo Padrão, é apresentado a mensagem abaixo: **Erro ao criar uma instância no Servidor do Fluig: Could not send Message..**

**
![Imagem](https://totvssuporte.zendesk.com/attachments/token/LiyKIQkS736RjclbkPkNPDvLY/?name=inline-1198964252.png)

**

**Ambiente
**Cross Segmentos - TOTVS Backoffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento - A partir da versão 12.1.4.**

Causa
**Esta mensagem ocorre devido a não autenticação do usuário informado para consumo do WebService de Consulta SQL do RM.

**Solução
**Para poder solucionar este demanda, deverá editar o arquivo **dsGetFormulaWf.js** e ir até a linha 25. Caso não esteja nesta linha, procure pela linha de código abaixo:
***var authService = serviceHelper.getBasicAuthenticatedClient(ws, "com.totvs.IwsConsultaSQL", 'mestre', 'totvs');***

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360008257671)
**

A mensagem ocorre pois o usuário e senha passados neste arquivo estão **diferentes** dos dados do RM, sendo usuário inexistente ou senha incorreta. Desta forma, altere o usuário e senha de forma que fique com os dados consistente e realize a integração novamente.


**Observação Complementar**

Verificar se no **Gerenciamento do Alias** o conteúdo do campo **Alias** está diferente do que foi definido nos arquivos Config referente à tag <add key="DefaultDB" value="**Nome do Alias**"  />:

**RM.Host.exe.config;**
**RM.Host.Service.exe.config;**
**RM.Host.JobRunner.exe.config;

Documentação complementar:
[Cross Segmentos - Backoffice RM - Integração - WebServices - Como Habilitar Webservice via RM Host](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003035312-Cross-Segmentos-Backoffice-RM-Integra%C3%A7%C3%A3o-WebServices-Como-Habilitar-Webservice-via-RM-Host?source=search)
**

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Solicitação aprovada no Fluig não aprovada no RM

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003817011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicita%C3%A7%C3%A3o-aprovada-no-Fluig-n%C3%A3o-aprovada-no-RM](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003817011-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Solicita%C3%A7%C3%A3o-aprovada-no-Fluig-n%C3%A3o-aprovada-no-RM)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 9 de abril de 2025 às 15:56

---

 ***![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)*Tempo aproximado para leitura: 00:03:00 min
Ocorrência**
Uma solicitação foi incluída no Fluig e movimentada até um estado final de aprovação. Ao consultar a solicitação no RM, ela continua com o Status **Aprovação** como **Não Aprovado**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004668572/mceclip2.png)

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.16

**Causa**
Este incidente possui duas causas prováveis.
A primeira é a configuração do parâmetro **Id da Empresa Centralizadora do Workflow do Fluig**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004668332/mceclip1.png)

A segunda é a configuração dos **Estados de Aprovação**.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004678352/mceclip0.png)

**Solução**
A primeira verificação a ser feita é nos parâmetros Gerais do Gestão de Estoque, Compras e Faturamento:

1.  Acesse o menu **Ambiente**
2.  **Parâmetros**
3.  Gestão de Estoque, Compras e Faturamento
4.  04.01.01 **Definições Gerais**
5.  Etapa 3 - **Definições Gerais 3/3**
6.  Verifique o valor informado no campo ***Id da Empresa Centralizadora do Workflow do Fluig*** e se necessário o altere. Por padrão, esse campo vem com valor 0.
    **Dica:** Este valor geralmente é igual ao valor informado para o campo *Id da Empresa do Fluig* nos Parâmetros Globais, etapa Integração Fluig.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004670771/mceclip0.png)

Se apenas esta alteração não surtir efeito positivo, deve-se acessar os parâmetros do tipo de movimento que está integrado com o Fluig e verificar na **etapa Workflow Fluig** e seus estados de aprovação. Para isso, siga os seguintes passos:

1.  Acesse o menu **Ambiente**
2.  **Parâmetros**
3.  Gestão de Estoque, Compras e Faturamento
4.  Avançar
5.  04.06 - Gestão Compras, 04.08 - Vendas ou 04.09 - **Outras Movimentações**
6.  Avançar
7.  Dê um duplo clique no **Tipo de Movimento** a ser configurado
8.  Avançar
9.  Etapa **Workflow Fluig**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004669272/mceclip3.png)

Nesta etapa, o agrupamento de Estados de Aprovação deve conter apenas os estados que quando atingidos, serão considerados aprovados pelo RM. Assim, quando a solicitação chegar nesta atividade, o RM irá alterar a coluna de Status Aprovação para aprovada.


Deve-se analisar bem quais serão os estados à serem utilizados neste campo pois, caso seja selecionado um estado Rejeitado, Cancelado, etc., o RM irá considera-lo como Aprovado.

**Saiba mais
**Para mais informações à respeito da aprovação de solicitação através do Fluig, acesse:

-   #### **[Workflow Processo BPM Fluig de Aprovação de Movimento](https://tdn.totvs.com/pages/viewpage.action?pageId=189311336)**

-   #### **[Aprovação de Contrato por Workflow no Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938705)**

---

# Workflow Processo BPM Fluig de Aprovação de Movimento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=189311336](https://tdn.totvs.com/pages/releaseview.action?pageId=189311336)
> **Domínio:** TDN (TOTVS Developer Network)

---

-   1[1\. Objetivo](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-1.Objetivo)
-   2[2\. Benefícios](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-2.Benefícios)
-   3[3. Ambiente de Negócio](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.AmbientedeNegócio)
    -   3.1[3.1 Segmento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.1Segmento)
    -   3.2[3.2 Áreas de Negócios](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.2ÁreasdeNegócios)
    -   3.3[3.3 Processo Workflow](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.3ProcessoWorkflow)
    -   3.4[3.4. Atividades do Processo](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.4.AtividadesdoProcesso)
    -   3.5[3.5. Regras de Negócio](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.RegrasdeNegócio) 
        -   3.5.1[3.5.1.Inclusão de Movimento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.1.InclusãodeMovimento) 
        -   3.5.2[3.5.2.Alteração de Movimento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.2.AlteraçãodeMovimento) 
        -   3.5.3[3.5.3.Cancelamento de movimento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.3.Cancelamentodemovimento)
        -   3.5.4[3.5.4.Estorno de Item Não Recebido](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.4.EstornodeItemNãoRecebido)
        -   3.5.5[3.5.5.Faturamento do Movimento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.5.FaturamentodoMovimento)
        -   3.5.6[3.5.6.Conclusão de Pedido](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.6.ConclusãodePedido)
        -   3.5.7[3.5.7.Outros Processos](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.7.OutrosProcessos)
        -   3.5.8[3.5.8.Formulário do Workflow](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.8.FormuláriodoWorkflow)
        -   3.5.9[3.5.9.Visão do Movimento e Itens de Movimento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.9.VisãodoMovimentoeItensdeMovimento)
        -   3.5.10[3.5.10.Avanço Automático do Estado Inicial](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-3.5.10.AvançoAutomáticodoEstadoInicial)
-   4[4\. Como Utilizar](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-4.ComoUtilizar)
    -   4.1[4.1. Iniciando Processo BPM pelo RM](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-4.1.IniciandoProcessoBPMpeloRM)
    -   4.2[4.2. Movimentando e Consultando Processo BPM pelo Fluig](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-4.2.MovimentandoeConsultandoProcessoBPMpeloFluig)
    -   4.3[4.3. Vídeo Demonstrativo](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-4.3.VídeoDemonstrativo)
-   5[5\. Como Instalar](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-5.ComoInstalar)
    -   5.1[5.1. Fluig](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-5.1.Fluig)
        -   5.1.1[a)    Instalar o ambiente de Desenvolvimento Fluig](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-a\)InstalaroambientedeDesenvolvimentoFluig) 
        -   5.1.2[b)    Buscar os Arquivos para Instalação do Processo BPM](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-b\)BuscarosArquivosparaInstalaçãodoProcessoBPM) 
        -   5.1.3[c)    Abrir o Arquivo do Instalação do Processo BPM no TDS](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-c\)AbriroArquivodoInstalaçãodoProcessoBPMnoTDS) 
        -   5.1.4[d)    Componentes dos Processos BPM](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-d\)ComponentesdosProcessosBPM)
        -   5.1.5[e)    Envio do Processo BPM para o Fluig](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-e\)EnviodoProcessoBPMparaoFluig)
    -   5.2[5.2. ERP RM](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-5.2.ERPRM)
        -   5.2.1[a) Configurar nos parâmetros globais do sistema](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-a\)Configurarnosparâmetrosglobaisdosistema)
        -   5.2.2[b) Configurar os parâmetros de Tipo de Movimento](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-b\)ConfigurarosparâmetrosdeTipodeMovimento)
        -   5.2.3[c) Importação da Consulta SQL](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-c\)ImportaçãodaConsultaSQL)
-   6[6.Considerações](#WorkflowProcessoBPMFluigdeAprovaçãodeMovimento-6.Considerações) 

## **1\. Objetivo**

Processo BPM de Aprovação de Faturamento é uma solução desenvolvida sobre a plataforma Fluig e integrada nativamente com ERP RM para permitir que o usuário envie dados da Aprovação  de Faturamento para aprovação através do fluxo de workflow do Fluig e possibilitar que apenas os itens aprovados através do Fluig sejam visualizados durante o processo de inclusão de um faturamento.

## **2\. Benefícios**

Os principais benefícios na utilização deste processo BPM são:

-   Rastreabilidade;
-   Governança;
-   Aprovação via mobile ¹;



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

**Descrição:** Analise para a aprovação para utilização do Movimento ou Item de Movimento para o faturamento.

**Instruções:** Por meio dessa atividade você poderá aprovar, aprovar e faturar, reprovar, reprovar e cancelar o movimento, reprovar e concluir o movimento ou reprovar e estornar item de movimento.

**Atividade:** Aprovado.

**Descrição:** Aprova a utilização do Movimento ou Item de Movimento para realizar o faturamento.

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
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/189311336/Movimento.PNG?version=1&modificationDate=1469558845000&api=v2)

    **


-    Defina o Item de Movimento e o respectivo produto a ser utilizado para aprovação.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/189311336/ItemMovimento.PNG?version=1&modificationDate=1469558862000&api=v2)


-   Ao final do processo verifique no anexo ao lado os Itens de Movimento e seus respectivos workflows, conforme figura abaixo.

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/189311336/MovimentoVisao.PNG?version=1&modificationDate=1469558947000&api=v2)


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
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/189311336/FluigVisao.PNG?version=1&modificationDate=1469558972000&api=v2)

    **


-   Será aberto o Workflow com os dados do Movimento e Item de Movimento, de acordo com a parametrização realizada para o Tipo de Movimento os campos serão apresentados no formulário. Todos os dados são apenas para consulta, portanto não será possível realizar alterações no movimento através do formulário.

    **
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/189311336/MovimentoFluig.PNG?version=1&modificationDate=1469559013000&api=v2)

    **


-   Para Aprovar ou Reprovar o *workflow* escolha no combo do lado superior direito o botão Enviar. Veja abaixo na figura um exemplo de Aprovação do Workflo*w*:

    **
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/189311336/MovimentoFluigEnviar.png?version=2&modificationDate=1469559035000&api=v2)

    **

-   O Workflow por Item de Movimento apresenta as opções para que seja possível aprovar ou reprovar o workflow.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/185739363/Passo4Fluig.PNG?version=1&modificationDate=1459857360000&api=v2)

-    Uma vez que o Workflow esteja Aprovado, já podemos faturar o Movimento.

### 4.3. Vídeo Demonstrativo

 
[🎥 Vídeo](//www.youtube.com/embed/P5h_lgachZI?wmode=opaque)

## **5\. Como Instalar**

### **5.1. Fluig**

#### **a)**    **Instalar o ambiente de Desenvolvimento Fluig** 

Para realizar a instalação do Processo BPM é preciso ter instalado o TDS (TOTVS Developer Studio) e o plugin do FLUIG para o mesmo. Para instalar o TDS e o plugin do FLUIG visite esta página que contém detalhes para tal: [http://tdn.totvs.com/pages/releaseview.action?pageId=73078179](https://tdn.totvs.com/pages/releaseview.action?pageId=73078179).

#### **b)**    **Buscar os Arquivos para Instalação do Processo BPM** 

O nome do arquivo do projeto processo BPM Fluig de Aprovação de Movimentos é: Materiais.zip. Estão na pasta de instalação dentro da pasta objetos gerenciais: <pasta de instalação do RM>\\ObjetosGerenciais\\Fluig\\Workflow\\Materiais.zip.

#### **c)**    **Abrir o Arquivo do Instalação do Processo BPM no TDS** 

No link estão as instruções de como fazer a abertura do arquivo do processo BPM dentro do TDS.

[http://tdn.totvs.com/pages/releaseview.action;jsessionid=D2A6F7626B6B8CB061A77A89F9693875?pageId=128681226#ExpediçãodeProcessosdeWorkflowpeloFluigStudio-ExpediçãodeprocessodeworkflowpelopluginFluignoTDS](https://tdn.totvs.com/pages/releaseview.action;jsessionid=D2A6F7626B6B8CB061A77A89F9693875?pageId=128681226#ExpediçãodeProcessosdeWorkflowpeloFluigStudio-ExpediçãodeprocessodeworkflowpelopluginFluignoTDS).)

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

Uma vez instalado TDS deve de importar o Processo BPM para o TDS para manipularmos e posteriormente importá-lo para o servidor Fluig do cliente. Para importar o Workflow siga os passos explicados nesta página:[http://tdn.totvs.com/pages/releaseview.action;jsessionid=D2A6F7626B6B8CB061A77A89F9693875?pageId=128681226#ExpediçãodeProcessosdeWorkflowpeloFluigStudio-ExpediçãodeprocessodeworkflowpelopluginFluignoTDS](https://tdn.totvs.com/pages/releaseview.action;jsessionid=D2A6F7626B6B8CB061A77A89F9693875?pageId=128681226#ExpediçãodeProcessosdeWorkflowpeloFluigStudio-ExpediçãodeprocessodeworkflowpelopluginFluignoTDS).  

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

Para mais informações sobre a integração Fluig x RM consulte: [Fluig Framework](https://tdn.totvs.com/display/public/rm/Fluig+-+Framework)*.*

***1: Não é suportado o Windows Phone e Windows Mobile. Para Android a versão suportada é 4.1.1 ou superior. Para mais informações sobre portabilidade consulte: [Matriz de Portabilidade](https://tdn.totvs.com/display/public/fluig/Matriz+de+Portabilidade).***

---

# Aprovação de Contrato por Workflow no Fluig

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938705](https://tdn.totvs.com/pages/releaseview.action?pageId=423938705)
> **Domínio:** TDN (TOTVS Developer Network)

---

Através da integração do Fluig com o TOTVS Gestão de Estoque, Compras e Faturamento é possível realizar a aprovação de Contratos, Itens de Contrato e Medições para faturamento.
Nesse processo ao incluir ou alterar um Item de Contrato será gerado um workflow no Fluig com os dados do Contrato, Item de Contrato ou Medição, onde um usuário com papel de aprovador deve acessar o Formulário no Fluig e conforme análise dos dados aprovar ou não o workflow.

****************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
**************Parametrização de Integração Fluig**

Para a utilização da integração com o Fluig é necessário configurar em Parâmetros | Globais |Integração Fluig informando o Endereço do Servidor do Fluig, Usuário/Senha do administrador do Fluig e Id da Empresa do Fluig.
Importante: para maiores informações sobre a instalação e configuração do Fluig, [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=257623022). 

******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************Parametrização de Contrato para Geração de Workflow no Fluig**

Para que os Contratos possam geram workflow no Fluig o sistema deve estar parametrizado com as seguintes opções:
 
******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************Parametrização Geral:**

Em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Workflow Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) deve estar selecionada a opção "Usa" em "Usa Aprovação".
 
******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Geração Automática de Workflow**

Em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Workflow Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) se o parâmetro "Geração Automática de Workflow" estiver marcado, ao incluir um contrato com um tipo de contrato que gera workflow, após salvar o contrato será gerado automaticamente o workflow no Fluig.
Caso esse parâmetro esteja desmarcado, é habilitado na visão de Manutenção de Contrato o processo "Geração de Workflow Fluig para Contrato", dessa forma somente será gerado o workflow no Fluig após selecionar o Contrato e executar esse processo. 

**Observação**:

-   O solicitante da aprovação é o usuário que dispara o WorkFlow, no caso da geração automática é o mesmo usuário que criou o contrato. Quando utilizado a geração manual do Workflow o usuário solicitante é quem executa o processo.

******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************Parametrização Tipo de Contrato:**

Em [Parâmetros | Gestão de Estoque, Compras e Faturamento | Contratos | Workflow Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) deve ser parametrizada com pelo menos uma das seguintes opções:
 
******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Aprovação no Item Periódico e Item Não Periódico**

Ao informar os campos nesse grupo será gerado workflow de aprovação para os itens periódicos e não periódicos do contrato, conforme as seguintes opções: 



-   **Nível de Aprovação**: define o Nível de Aprovação utilizado. As opções disponíveis são: Contrato e Item de Contrato. Caso, seja selecionado a opção de Contrato, será gerado um único Workflow por Contrato, contendo as informações de todos os Itens de Contrato. Para a opção selecionada de Item de Contrato será incluído um workflow por Item de Contrato.
-   **Processo**: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para aprovação de Contratos do TOTVS Gestão de Estoque Compras e Faturamento está disponível um workflow de exemplo nomeado como "Contrato".
-   **Estados de Aprovação**: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que o Contrato/Item serão considerados aprovados. Exemplo: "Aprovado"; "Aprovação Automática".



 ******************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Aprovação na Medição**

Ao informar os campos nesse grupo será gerado workflow de aprovação para os itens por medição do contrato, conforme as seguintes opções:

-   Nível de Aprovação: define o Nível de Aprovação utilizado.

    -   As opções disponíveis são: Contrato:
    -   Item de Contrato:
    -   Medição.

    Caso, seja selecionado a opção de Contrato, será gerado um único Workflow por Contrato, contendo as informações de todos os Itens de Contrato.
    Para a opção selecionada de Item de Contrato será incluído um workflow por Item de Contrato, e caso seja selecionada a opção Medição será gerado um Workflow para cada medição incluída, com as suas respectivas informações.
-   **Processo**: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para aprovação de Medições de Contratos do TOTVS Gestão de Estoque Compras e Faturamento está disponível um workflow de exemplo nomeado como "Contrato".
-   **Estados de Aprovação**: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que a Medição será considerada aprovada. Exemplo: "Aprovado"; "Aprovação Automática".

***Observação***: uma vez informado o Nível de Aprovação será obrigatório informar o Processo e os Estados de Aprovação. Caso seja selecionado o Nível de Aprovação para Contrato, para dois ou mais Itens de Contrato será gerado apenas um workflow para aprovação para os mesmos, devendo respeitar a restrição de que o processo e o estado de aprovação para ambos deverá ser o idêntico.

********************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
******************Inclusão de Contrato**

Ao incluir um Contrato será criado no Fluig o workflow conforme parametrização. O usuário aprovador deve acessar seu painel de tarefas no Fluig e movimentar o workflow gerado para alguma das etapas possíveis.
Os workflows gerados para o Contrato podem ser visualizados a partir da visão de Manutenção de Contrato em Anexos | [Item de Aprovação Fluig](https://tdn.totvs.com/x/scdEGQ), nessa visão é possível verificar o Identificador do workflow no Fluig e o Status de Aprovação (Aprovado ou Não Aprovado). 
Na visão de Manutenção de Contrato são disponibilizados os botões "Aprovados Fluig" e "Não Aprovados Fluig", para filtrar na visão os Contratos com workflow aprovado no Fluig e Contratos com workflow não aprovado, respectivamente

**********************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Inclusão de Itens Periódicos e Não Periódicos**

Na Inclusão do Contrato, caso o nível de aprovação selecionado seja Contrato, será gerado para todos os Itens Periódicos/Não periódicos apenas um Workflow, caso seja selecionada a opção de Item de Contrato será gerado um workflow para cada Item de Contrato.
Será gerado o workflow somente para os Itens que possuírem Status "À Faturar", para que o usuário possa realizar a aprovação no Fluig. Caso o workflow não tenha sido aprovado o usuário não poderá faturar o Item de Contrato.

**********************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************Inclusão de Itens por Medição**

Na Inclusão do Contrato, caso o nível de aprovação selecionado seja Contrato, é gerado para todos os Itens de Medição apenas um Workflow, caso seja selecionada a opção de Item de Contrato é gerado um workflow para cada Item de Contrato. Se o Nível de aprovação for igual a Medição é gerado um workflow para cada medição incluída com os seus respectivos dados. Será gerado o workflow somente para as medições que possuem Status igual a "À Faturar", para que se possa realizar a aprovação do Fluig. Caso o workflow não tenha sido aprovado não será possível faturar a Medição.
Para todas as inclusões, se dois ou mais Tipos de Faturamento estiverem utilizando o Nível de Aprovação para Contrato, os Itens de Contrato serão agrupados e será gerado apenas um workflow.
 
************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
**********************Alteração de Contrato - Itens Periódicos e Não Periódicos**

Na alteração do Item de Contrato, caso o Nível de aprovação selecionado seja Contrato, somente é incluído o workflow para os Itens de Contrato que estejam com esta parametrização. Caso, seja selecionado o Nível de aprovação por Item de Contrato, somente os Itens que possuem esta parametrização terão os seus workflows incluídos.  
***Importante!*** na alteração do Item de Contrato, se o Item já tiver sido faturado (Campo ITEMUTILIZADO = 1 na tabela TITMCNTWFLUIG) e o Nível de aprovação for Contrato ou Item de Contrato é realizado a inclusão de um novo Workflow, caso o item ainda não tenha sido faturado (Campo ITEMUTILIZADO = 0 na tabela TITMCNTWFLUIG) é estornado o workflow em aberto e incluído um novo workflow.
 
**************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
************************Alteração de Contrato - Itens por Medição**

Na alteração de Item de Contrato, caso o Nível de aprovação selecionado seja Contrato, somente será incluído o workflow para as Medições dos Itens de Contrato que estejam com esta parametrização. Caso, seja selecionado o Nível de aprovação por Item de Contrato, somente serão incluídos workflows para as Medições dos Itens de Contrato que possuem esta parametrização.  Se o Nível de aprovação for igual a Medição será gerado um workflow para cada medição na alteração da Medição.
***Importante!*** na alteração da Medição, se a Medição já tiver sido faturada (Campo ITEMUTILIZADO = 1 na tabela TITMCNTMEDICAOWFLUIG) e o Nível de aprovação for Contrato ou Item de Contrato será realizado a inclusão de um novo Workflow, caso a Medição ainda não tenha sido faturada (Campo ITEMUTILIZADO = 0 na tabela TITMCNTMEDICAOWFLUIG) é estornado o workflow em aberto e incluído um novo workflow.
***Atenção!*** não é permitido alterar o Cadastro de Tipos de Contrato ([Contratos | Tabelas de Contrato | Tipo de Contrato](/display/LRM/Tipos+de+Contratos)) e o campo "Tipo de Contrato" no Cadastro do Contrato ([Contratos | Manutenção de Contrato | Edição do Contrato | Aba Cabeçalho](/pages/viewpage.action?pageId=423938074)) caso exista algum Item de Contrato ou Medição faturados.  

****************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************************Cancelamento de Contrato/Item de Contrato

Ao cancelar um Contrato ou Item de Contrato, se existir Workflow que não gerou faturamento (Campo ITEMUTILIZADO = 0 na tabela TITMCNTWFLUIG ou TITMCNTMEDICAOWFLUIG) o mesmo é excluído. Caso o workflow já tenha gerado faturamento (Campo ITEMUTILIZADO = 1 na tabela TITMCNTWFLUIG ou TITMCNTMEDICAOWFLUIG) o mesmo é mantido como histórico. 

******************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
****************************Desfazer Cancelamento de Contrato/Item de Contrato**

Ao Desfazer Cancelamento de Contrato/Item de Contrato o Workflow é incluído da mesma forma supracitada para alterações em Contrato/Item de Contrato/Medições. 
 
********************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
******************************Cancelamento de Movimento**

Ao realizar o Cancelamento do Movimento gerado a partir de Item de Contrato ou Medição, será alterado o Item Utilizado (Campo ITEMUTILIZADO = 1 na tabela TITMCNTWFLUIG ou TITMCNTMEDICAOWFLUIG) do último workflow aprovado e utilizado.
Se houver um novo workflow não utilizado ao realizar cancelamento do Movimento não será alterado o valor do Item Utilizado. Portanto, no cancelamento, o Item Utilizado voltará para não utilizado apenas quando o Item de Contrato tiver o Status "À Faturar'. Exemplo: no caso de Itens de Contrato de Tipo de Faturamento Periódico somente irá alterar o Item Utilizado para não utilizado quando o último movimento gerado for cancelado/excluído. 

********************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
******************************Faturamento**

Quando utilizado aprovação por workflow no Fluig, somente será possível faturar um item de contrato ou medição se o workflow gerado pelo mesmo estiver aprovado.
O faturamento pode ser realizado para Itens Periódico e Não Periódicos a partir da visão de Manutenção de Contrato, processo "Faturamento de Contrato" ou também através de Faturamento por Lote, menu [Contratos | Faturamento por Lote](/display/LRM/Faturamento+por+Lote).
Para Itens por Medição o faturamento é realizado através do Anexo | Visualizar Medições do Contrato | Faturamento de Medição. 
 
**********************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
********************************Workflow de Exemplo**

É disponibilizado um workflow de exemplo para que se possa utilizar a Aprovação de Contrato através do Fluig.
Os estados de Aprovação e Reprovação são "Aprovado" e "Reprovado", respectivamente.
Ao movimentar o Workflow de exemplo é possível realizar as seguintes ações:

-   **Aprovação Automática**: No workflow de exemplo está predefinido que Contratos que o somatório dos valores dos itens de contrato que participam do workflow tenham valor até 10.000 sejam aprovados automaticamente, ou seja, se o valor do contrato é até 10.000, ao gerar o workflow o mesmo é avançado automaticamente para "Aprovado", se for o valor for superior a 10.000 o workflow é avançado para a etapa de "Aprovação", onde será analisado por um usuário definido como aprovador se a solicitação deve ser aprovada ou reprovada.
    ***Importante!*** por padrão, o sistema realiza o avanço automático do WorkFlow para o estado de Aprovação, para que o avanço automático NÃO seja realizado, ou seja, para que o WorkFlow seja mantido em seu estado inicial é necessário:
    Realizar a importação da Fórmula Visual "MOVWKF0024 - Fluig - Manter WF do Contrato no Estado Inicial" e marcar no momento da importação a opção "Importar Gatilhos" e também a opção "Todas Coligadas" em Seleção de Coligada (Menu Gestão | Fórmula Visual | Fórmula Visual | Importação de Fórmula Visual). A [Fórmula Visual](https://tdn.totvs.com/pages/viewpage.action?pageId=403746948) se encontra disponível na Pasta C:\\Totvs\\CorporeRM\\ObjetosGerenciais\\Fórmulas Visuais (Caminho padrão de instalação da Biblioteca RM, que pode ser alterado conforme necessidade no momento da instalação).
-   **Aprovado**: Ao escolher essa ação o workflow é Aprovado e o item de contrato ou medição que o gerou estará disponível para faturamento.
-   **Reprovado**: Ao escolher essa ação o workflow é Reprovado e o item de contrato ou medição que o gerou não será liberado para faturamento.
    ***Observação***:
    -   Os workflows são customizáveis, sendo assim possível criar as etapas do mesmo conforme necessidade da empresa. Para verificar os procedimentos para configuração dos Workflows clique aqui. 

************************************
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938705/image_preview.png?version=1&modificationDate=1550832518383&api=v2)
**********************************Aprovação de Contrato via aplicativo Mobile**

O processo de aprovação de contrato por workflow está disponível também via aplicativo mobile. Disponível para as plataformas IOS e Android.

-   Pré Requisitos:

**Android**
Versão: 4.1 ou superior
Dispositivos suportados: Smartphones ou tablets

**IOS**
Versão: 8 ou superior
Dispositivos suportados: IPhone 4 ou superior, IPad 2 ou superior
Para maiores informações sobre o Fluig Mobile [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=107940624).

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - RM x Fluig Como alterar valor mínimo da aprovação automática

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000572468-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-RM-x-Fluig-Como-alterar-valor-m%C3%ADnimo-da-aprova%C3%A7%C3%A3o-autom%C3%A1tica](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000572468-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-RM-x-Fluig-Como-alterar-valor-m%C3%ADnimo-da-aprova%C3%A7%C3%A3o-autom%C3%A1tica)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 9 de abril de 2025 às 15:56

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: 00:02:00 min
Dúvida**Como alterar o valor mínimo para aprovação automática da solicitação de compras integrada ao Fluig?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.4

**Solução
**Para alterar o valor padrão para aprovação automática da solicitação de compras integrada ao Fluig, basta seguir as orientações abaixo:
Após a importação do projeto padrão para o Eclipse, será necessário editar o arquivo WorkflowNucleus.beforeStateEntry.js conforme destaque abaixo:

![Capturar.PNG](https://centraldeatendimento.totvs.com/hc/article_attachments/360000920867/Capturar.PNG)

Ao carregar o conteúdo do arquivo, a partir da linha 85, estará o código responsável por essa validação. O valor foi definido como R$10000,00, porém, pode ser alterado manualmente na linha 86 conforme pode ser visto abaixo:

![Capturar1111.PNG](https://centraldeatendimento.totvs.com/hc/article_attachments/360000921067/Capturar1111.PNG)

Feita alteração do valor, salve o arquivo e refaça o processo no RM.

**Saiba Mais
**Para mais informações sobre a aprovação de solicitação de compras, acesse o link abaixo:
[Workflow Processo BPM Fluig de Solicitação de Compra](http://tdn.totvs.com/pages/viewpage.action?pageId=192093006)

---

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

---

# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fluig: NOK Usuário Não Encontrado!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Fluig-NOK-Usu%C3%A1rio-N%C3%A3o-Encontrado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350628-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Fluig-NOK-Usu%C3%A1rio-N%C3%A3o-Encontrado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Fluig
> **Data:** 9 de abril de 2025 às 15:55

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31294419363479)
 Tempo aproximado para leitura: 00:02:00 min**

**Ocorrência**Ao acessar a etapa Workflow Fluig nos parâmetros do tipo de movimento ou ao tentar criar um movimento integrado ao Fluig é apresentado o erro: **NOK Usuário Não Encontrado!**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/7728599090839)

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**1- Parâmetro "Id da Empresa Centralizadora do Workflow no Fluig" não definido com o "id empresa" do fluig correto
2- Não sincronização do usuário logado durante a parametrização/inclusão.

**Solução
**1- Acessar o caminho: "Parâmetros > Gestão de Estoque, Compras e Faturamento > Parâmetros Gerais > Definições Gerais > Definições Gerais 3/3" e preencher o campo "Id da Empresa Centralizadora do Workflow no Fluig" com o ID da Empresa Fluig correto
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360020336632)

2- A partir do RM, existe o processo chamado Sincroniza Usuários do Corpore com o GED. Este processo irá verificar a existência dos usuários entre as plataformas e sincroniza-los caso existam. 

No RM o campo USERID da tabela GUSUARIO deve ser igual ao campo MATRICULA DO FLUIG. Além disso o campo e-mail também deve ser igual entre as plataformas.

Por tanto:

**RM**

**FLUIG**

USERID

MATRICULA

E-MAIL

E-MAIL

**Saiba Mais
**Mais detalhes sobre o processo e sua configuração, acesse:**
[GED - Gerenciamento Eletrônica de Documentos](http://tdn.totvs.com/pages/releaseview.action?pageId=270899168)
**

---

# GED - Gerenciamento Eletrônica de Documentos

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=270899168](https://tdn.totvs.com/pages/releaseview.action?pageId=270899168)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Índice:

* * *

-   1[Objetivo:](#GEDGerenciamentoEletrônicadeDocumentos-Objetivo:)
-   2[Introdução:](#GEDGerenciamentoEletrônicadeDocumentos-Introdução:)
-   3[Configuração:](#GEDGerenciamentoEletrônicadeDocumentos-Configuração:)
-   4[Sincronismo do Usuário:](#GEDGerenciamentoEletrônicadeDocumentos-SincronismodoUsuário:)
-   5[Realizando Mapeamento:](#GEDGerenciamentoEletrônicadeDocumentos-RealizandoMapeamento:)
-   6[Envio de Arquivos:](#GEDGerenciamentoEletrônicadeDocumentos-EnviodeArquivos:)
-   7[Visualização do Arquivo:](#GEDGerenciamentoEletrônicadeDocumentos-VisualizaçãodoArquivo:)
-   8[Visualização de Logs:](#GEDGerenciamentoEletrônicadeDocumentos-VisualizaçãodeLogs:)
-   9[Envio de Relatórios](#GEDGerenciamentoEletrônicadeDocumentos-EnviodeRelatórios)

# Objetivo:

* * *

     O objetivo deste documento é trazer uma visão do que é e como funciona a funcionalidade GED - Gerenciamento Eletrônica de Documentos, e como é feita a sua configuração. 

# Introdução:

* * *

     O RM permite a integração com o Fluig para a sua utilização como servidor GED – Gerenciamento eletrônico de documentos. Está integração é realiza de uma base do RM para um servidor GED, ou seja, não permite múltiplos servidores GED. Após sua configuração, qualquer cadastro do RM passa a ter possibilidade de realizar o seu gerenciamento de arquivos, bastando apenas realizar os passos de mapeamento da pasta destino. 

# Configuração:

* * *

     Processo de Configuração da Linha RM x GED - Gerenciamento eletrônico de documentos:

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)

Para configurar a integração GED, acesse o módulo Integração, e os menus "Ferramentas | Parâmetros | 50.07 - Linha RM x GED (Gerenciamento Eletrônico de Documentos)".

 Clique para ver o Menu

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-31-3.png?version=1&modificationDate=1592335863737&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-32-50.png?version=1&modificationDate=1592335970123&api=v2)

Em seguida preencha as informações do servidor Fluig com as informações abaixo, para que o RM faça a comunicação com o Fluig.

-   Servidor: Endereço do servidor (Nome ou IP)
-   Porta: Porta a qual o Fluig está configurado
-   Porta FTP: Porta FTP a qual o Fluig está configurado (Padrão: 21)

     Clique aqui

    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-5-27_17-28-11.png?version=1&modificationDate=1622147291173&api=v2)

-   Usuário: Nome do usuário administrador do Fluig
-   Senha: Senha do usuário administrador do Fluig
-   Empresa: Empresa cadastrada no Fluig
-   Integração Fluig: Marcar o flag caso seja o servidor Fluig
-   Matrícula: Preencher com o Usuário de Integração. (Obrigatório se a integração foi com o Fluig)
-   Protocolo: Protocolo a qual o Fluig está configurado
-   Grupo de Usuário: Nome do Grupo ao qual usuários do RM serão associados no Fluig após o Sincronismo
-   Senha Padrão: Senha padrão para o usuário sincronizado com o GED acessar o Fluig
-   Tipo Log: Quais eventos serão inseridos no Log



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2018-1-15_17-7-53.png?version=1&modificationDate=1516046874000&api=v2)




**Observação:**

O ambiente físico de intra-estrutura dos sistemas ECM e Fluig precisam estar configurados para permitir o tráfego de informações do RM pelas portas configuradas pelo FTP. Quando não são feitas alterações nas portas utilizadas pelo FTP, as portas padrões 20 e 21 são utilizadas pelo RM para fazer o upload dos arquivos.
Na estrutura dos sistemas ECM e Fluig existe um diretório utilizado para fazer o upload dos arquivos do RM através do FTP. É necessário dar permissão de escrita nesta pasta (no ambiente ECM ou Fluig) para o Usuário de Integração utilizado na parametrização da integração conseguir fazer o upload pelo FTP:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-41-20.png?version=1&modificationDate=1592336480333&api=v2)

Ao publicar um documento do RM para o ECM, a matrícula utilizada para registrar quem fez a publicação é àquela correspondente ao Usuário de Integração:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-41-48.png?version=1&modificationDate=1592336508117&api=v2)

Após a configuração, clique em Testar conexão para garantir que os dados estão corretos e em seguida clique em avançar até a finalização do processo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A7%3A19.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

# Sincronismo do Usuário:

* * *

     Após realizarmos a configuração da Linha RM x GED precisamos enviar para o Fluig os usuários que terão acesso a está funcionalidade. No módulo Serviços Globais, acesse o menu "Segurança | Usuários".

     Em nosso exemplo, iremos integrar apenas o usuário corrente (mestre).

-   [1º Passo:](#)
-   [2º Passo:](#)

Selecione os usuários e execute o processo “Sincronizar usuários do Corpore com o GED”.



Atenção

Caso o **Usuário** possua uma associação com **Funcionário** os dados Nome e E-mail que serão sincronizados serão o do **Funcionário**.



Obs.: Na tela de sincronização, a coluna "Integrado" irá mostrar um ícone caso aquele usuário ja tenha sido sincronizado.

Obs:2: Caso o usuário selecionado para executar a sincronização **NÃO** exista no Fluig, ele será criado de acordo com as informações do usuário em questão no RM: 
E-mail: mesmo do RM 
Login: mesmo do RM 
Matrícula: HASH de Segurança 
Nome: mesmo do RM 
Sobrenonme: mesmo do RM"



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-10-9_9-34-34.png?version=1&modificationDate=1507552475000&api=v2&effects=drop-shadow)



Cache com informação do UserID.

Após finalizado o processo de sincronização será apresentado um aviso informando o tempo de renovação do cache, que deverá ser respeitado para utilizar qualquer outro processo seguinte.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2022-12-22_9-25-9.png?version=1&modificationDate=1671711910357&api=v2&effects=drop-shadow)

Após a execução do processo, o usuário será criado no Fluig.

Caso o campo 'Senha padrão' esteja em branco na configuração da integração, a senha desse novo usuário no FLUIG é "123456789".

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A8%3A55.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A9%3A4.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)









# Realizando Mapeamento:

* * *

    Após os parâmetros estarem configurados e o usuário sincronizado com o Fluig, é necessário realizar o mapeamento da pasta para a integração com o Fluig.

    Em nosso exemplo, utilizaremos o cadastro de Alunos do RM.

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)

No Fluig, crie a pasta “Documentos Alunos”

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A9%3A35.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

No módulo Educacional, acesse o menu Currículo e Oferta -> Alunos

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A9%3A56.png?version=1&modificationDate=1483366942000&api=v2&effects=drop-shadow)

Acesse Anexos -> GED -> Gerenciar

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A10%3A32.png?version=1&modificationDate=1483366941000&api=v2&effects=drop-shadow)

   Depois de executar o passo 3 descrito acima e após clicar em avançar, teremos 6 (seis) opções de mapeamentos distintos:

  **1.Utilizar pasta mapeada**:

-   Todos os arquivos de todos os registros serão enviados para a mesma pasta mapeada no GED.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_15-53-53.png?version=1&modificationDate=1592333633170&api=v2)

Neste exemplo, todos os arquivos serão salvos na pasta "Teste\_Pasta Mapeada".

  **2. Permitir o usuário escolher uma das sub-pastas de pasta mapeada**:

-   O usuário pode selecionar uma Sub-Pasta dentro da pasta configurada, no momento do envio do arquivo.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_15-56-3.png?version=1&modificationDate=1592333763873&api=v2)

Neste exemplo, o usuário poderá salvar os arquivos nas pastas filhas da "Teste\_Sub Pasta Mapeada", sendo "Pasta1" ou "Pasta2".

Essas opções serão exibidas para o usuário na hora de enviar o arquivo.

  **3.**  **Utilizar o retorno de uma coluna do dataServer como nome da pasta:**

-   A estrutura de dados da tabela do cadastro é exibida, e o usuário pode selecionar uma coluna para que o RM crie no GED uma pasta com o nome referente a coluna selecionada.
    Ex.: Caso selecionado o RA do aluno, dentro da pasta selecionada como mapeamento será criada uma pasta para cada registro, sendo seu nome o RA do registro selecionado na hora de envio do arquivo.
    **Obs**: Caso a coluna selecionada não seja única por registro, os arquivos de registro que contém o mesmo conteúdo para a coluna selecionada ficaram na mesma pasta no servidor GED. Ex.: Selecionar a coluna CODCOLIGADA, todos os registros que estiverem na mesma coligada terão o seus arquivos enviados para a mesma pasta no servidor GED.
-   Ao selecionar mais de uma coluna do DataServer, é possível criar estruturas de pastas. 

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-3-38.png?version=1&modificationDate=1592334218897&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Estado > Nome Fantasia.

Por exemplo:

...Teste\_Coluna DataServer/MG/Coligada1

...Teste\_Coluna DataServer/MG/Coligada2

...Teste\_Coluna DataServer/SP/Coligada3

  **4.**  **Utilizar o retorno de uma coluna do dataServer como nome da pasta com o CheckBox “Permitir sincronismo automático dos arquivos postados através GED” marcado:**

-   Idem ao item 3, mas acrescentando o sincronismo da pasta do servidor GED com os registros no RM. Ou seja, caso um arquivo seja postado diretamente no GED, na pasta do registro especifico, o RM também exibirá este registro. Da mesma forma, se o arquivo for removido diretamente no GED, ele não será mais listado no RM.
    Cuidado: a marcação deste parâmetro pode ocasionar a exibição de arquivos de outros registros caso o mapeamento seja igual o exemplo do CODCOLIGADA citado acima.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-8-48.png?version=1&modificationDate=1592334528847&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Estado > Nome Fantasia.

Por exemplo:

...Teste\_Coluna DataServer/MG/Coligada1

...Teste\_Coluna DataServer/MG/Coligada2

...Teste\_Coluna DataServer/SP/Coligada3

Os arquivos adicionados/removidos diretamente no GED, também serão listados/ou não no RM.

  **5.**  **Utilizar uma pasta para cada registro de acordo com a chave primária:**

-   Dentro da pasta selecionada para o mapeamento, quando o usuário incluir um arquivo novo, será criada automaticamente uma pasta tendo seu nome como a combinação da chave primaria da tabela referente ao cadastro. 

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-16-5.png?version=1&modificationDate=1592334965430&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Chave primária

Por exemplo:

...Teste\_ChavePrimária/{PK\_Tabela}

  **6.**  **Utilizar uma pasta para cada registro de acordo com a chave primária pasta com o CheckBox “Permitir sincronismo automático dos arquivos postados através GED” marcado:**

-   Idem ao item 5, mas acrescentando o sincronismo da pasta do servidor GED com os registros no RM. Ou seja, caso um arquivo seja postado no GED na pasta do registro especifico, o RM também exibirá este registro. Da mesma forma, se o arquivo for removido diretamente no GED, ele não será mais listado no RM.

 Clique para ver imagem

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2020-6-16_16-19-14.png?version=1&modificationDate=1592335154327&api=v2)

Neste exemplo, os arquivos serão organizados no GED por diretórios criados automaticamente por: Chave primária

Por exemplo:

...Teste\_ChavePrimária/{PK\_Tabela}

Os arquivos adicionados/removidos diretamente no GED, também serão listados/ou não no RM.

Importante!

Apenas mapeamentos com a opção "Permitir sincronismo automático dos arquivos postados através GED" marcada terão as inclusões/remoções de arquivos feitas diretamente no GED refletidas no RM. 

Caso essa configuração não esteja disponível para algum tipo mapeamento ou esteja desmarcada, ao incluir um arquivo diretamente no GED ele não será listado no RM. E se algum arquivo for excluído diretamente no GED, ele continuará a ser listado no RM até que seja excluído pelo RM.exe.

-   [1º Passo:](#)
-   [2º Passo:](#)

Vamos selecionar a opção número 1 – Utilizar pasta mapeada e selecionar a pasta “Documentos Alunos”

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A10%3A47.png?version=1&modificationDate=1483366942000&api=v2)

Avançar e finalizar o processo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A0.png?version=1&modificationDate=1483366942000&api=v2)

# Envio de Arquivos:

* * *

    Passo a passo de envio de arquivos para o GED

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)
-   [4º Passo:](#)
-   [5º Passo:](#)

Para enviar arquivos para o GED, clique em Anexo -> GED -> Integração GED

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A11.png?version=1&modificationDate=1483366942000&api=v2)

Uma aba será apresentada. Para enviar um arquivo, clique em novo. Teremos a opção de alterar o nome do arquivo ou Utilizar o próprio nome do arquivo. No exemplo a seguir vamos selecionar Utilizar o próprio nome do arquivo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A19.png?version=1&modificationDate=1483366942000&api=v2)

Após clique em Localizar e Enviar. Uma caixa de seleção de arquivo será exibida. Selecione o arquivo e clique em Abrir

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A28.png?version=1&modificationDate=1483366942000&api=v2)



 Ao clicar em Abrir, o arquivo é enviado para o servidor GED e listado na aba Integração GED

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A41.png?version=1&modificationDate=1483366942000&api=v2)

Como no tipo de mapeamento selecionamos “Utilizar pasta mapeada” o arquivo foi postado na pasta “Documentos Alunos” no Fluig

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A11%3A53.png?version=1&modificationDate=1483366942000&api=v2)

Mais informações sobre erros

Caso algum erro seja apresentado ao enviar um arquivo, consulte [Erro na consulta de Dataset](/display/LRM/Erro+na+consulta+de+Dataset)

# Visualização do Arquivo:

* * *

-   [1º Passo:](#)
-   [2º Passo:](#)
-   [3º Passo:](#)

Após realizar a importação do arquivo, é possível visualiza-lo. Para isso, edite o registro inserido e clique em Visualizar

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A12%3A1.png?version=1&modificationDate=1483366942000&api=v2)

Caso o usuário não esteja logado no Fluig, será solicitado o usuário e senha para acessar o sistema

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A12%3A8.png?version=1&modificationDate=1483366942000&api=v2)

Após acessar o sistema o arquivo é aberto e exibido para o usuário

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2017-1-2%2011%3A12%3A18.png?version=1&modificationDate=1483366942000&api=v2)

Serão aceitos os seguintes caracteres especiais no nome do arquivo enviado, mais espaços em branco.

-   ´\`' !@#$%& -\_+=()\[\]{}\[\] ªº^~, . ; ¨§¢¬£ ³²¹

Exemplo: Nome do arquivo **"teste!@#$%¨& - 123.txt",** tudo será mantido, nada será alterado.



**Os seguintes caracteres não serão aceitos e o envio do arquivo será recusado:**   

-   **\\ / ? : \* <>"** Estes caracteres por padrão não são aceitos pelo sistema operacional, portanto não é permitido definir um nome de arquivo que os contenha.





# Visualização de Logs:

* * *

Ao marcar a configuração de Tipo de Log's ao configurar a integração os Log's podem ser vistos em 

Menu Integrações | Integração | Monitor da Fila de Integração
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/270899168/image2021-12-20_16-36-51.png?version=1&modificationDate=1640029012050&api=v2)
, onde todos os tipos de requisições serão logadas nesta visão. A coluna Status informa se a mensagem foi processada com sucesso ou não.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-12-20_16-38-27.png?version=1&modificationDate=1640029107737&api=v2&effects=drop-shadow)

# Envio de Relatórios

* * *

Ao enviar um relatório para o GED, é necessário que o mapeamento na visão de relatórios (Anexo → GED → Gerenciar) tenha sido executado. Sem esta execução, será apresentando um erro informando para verificar o mapeamento da pasta.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-12-20_16-40-35.png?version=1&modificationDate=1640029235810&api=v2&effects=drop-shadow)
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/270899168/image2021-12-20_16-42-14.png?version=1&modificationDate=1640029334627&api=v2&effects=drop-shadow)

Para envio de relatórios do RMReports para o GED, estão disponíveis as opções de mapeamento "*Utilizar pasta mapeada*" e "*Utilizar uma pasta para cada registro de acordo com a chave primária*".





**Produto:** Framework

**Versão:** 12.01.XX

**Processo:** GED - Gerenciamento Eletrônico de Documentos

**Status:** Finalizado

**Data:** 20/08/2021

**Autores:**

**[Adriano Diniz Agrizzi](/display/~adriano.diniz)**

**[Douglas Maxwell de Oliveira](/display/~douglas.maxwell)**

**[Karina Dos Santos Costa](/display/~karina.santos)**

**[Stella Gleyse Macedo Vilaca](/display/~stella.vilaca)
**

**[Wesley Avelino De Carvalho](/display/~wesley.carvalho)**

* * *

---
