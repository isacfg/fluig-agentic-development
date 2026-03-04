# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento  - MOV - Nota Fiscal de Serviços Eletrônica (NFS-e) ainda não foi autorizada pela Prefeitura

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024571754-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Nota-Fiscal-de-Servi%C3%A7os-Eletr%C3%B4nica-NFS-e-ainda-n%C3%A3o-foi-autorizada-pela-Prefeitura](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024571754-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Nota-Fiscal-de-Servi%C3%A7os-Eletr%C3%B4nica-NFS-e-ainda-n%C3%A3o-foi-autorizada-pela-Prefeitura)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 30 de maio de 2025 às 09:52

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24182348570903)
 Tempo aproximado para leitura: 00:01:00 min.**

**O****corrência**No módulo Faturamento, ao tentar realizar a escrituração de uma nota de serviço é apresentada a mensagem abaixo, mesmo a nota estando autorizada ou cancelada.
**"Erro: Nota Fiscal de Serviços Eletrônica (NFS-e) ainda não foi autorizada pela Prefeitura** **OU a NFS-e está Cancelada e o Movimento correspondente ainda não foi Cancelado."**

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.
**Causa
**Esse incidente ocorre pois o tipo de movimento de Retorno da prefeitura (2.2.xx) se encontra parametrizado para integrar com NFS-e.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Acesse os parâmetros do tipo de movimento de retorno do RPS (2.2.xx).
2\. Etapa **Fis - NFe** e selecione a opção **Não integrado** para o campo **NFs-e Municipal**.
3\. Salve e escriture novamente. 

![screenshot_20190612_155710.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360038671293)

**Saiba mais em :**

[Fiscal (Parâmetros de Integrações)](https://tdn.totvs.com/pages/releaseview.action?pageId=423938168#Abas--834805912)
