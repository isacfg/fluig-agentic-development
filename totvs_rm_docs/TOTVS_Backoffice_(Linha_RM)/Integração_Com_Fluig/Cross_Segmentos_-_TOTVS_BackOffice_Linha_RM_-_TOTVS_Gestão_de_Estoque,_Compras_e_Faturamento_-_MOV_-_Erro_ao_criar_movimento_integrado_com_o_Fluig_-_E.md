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
