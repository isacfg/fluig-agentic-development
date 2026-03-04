# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Etapas de Integração desabilitadas nos Parâmetros do Tipo de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022405631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Etapas-de-Integra%C3%A7%C3%A3o-desabilitadas-nos-Par%C3%A2metros-do-Tipo-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022405631-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Etapas-de-Integra%C3%A7%C3%A3o-desabilitadas-nos-Par%C3%A2metros-do-Tipo-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 17:21

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Ocorrência**Ao acessar os parâmetros do tipo de movimento, as etapas de integração com outros módulos (Contabilidade; Fin - Faturamento 1/6; Fis - Escrituração 1/2) estão desabilitadas para edição.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre porque em **Parâmetros > Integrações de Sistemas** as integrações entre o Nucleus e os demais módulos não estão ativas.

**Solução**Realize os seguintes passos:
1- No módulo Gestão de Estoque, Compras e Faturamento, acesse menu **Ambiente | Parâmetros | Integrações de Sistemas** e remarque as integrações RM FLUXUS X RM NUCLEUS, RM NUCLEUS X RM FLUXUS, RM SALDUS X RM NUCLEUS, RM NUCLEUS X RM SALDUS, RM LIBER X RM NUCLEUS e RM NUCLEUS X RM LIBER conforme evidência abaixo.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019327931/mceclip1.png)


2\. Saia do sistema e, caso o ambiente não seja local, solicite que os demais usuários também façam Logout.
3\. No diretório de instalação do RM (totvs\\RM.Net), localize o arquivo **RM.Host.ServiceManager.exe** e desinstale o host, marcando a flag "Apagar \_Broker.dat".

![Imagem](https://totvssuporte.zendesk.com/attachments/token/akzfyxmAt4otTlun0chGdPDwN/?name=inline605398259.png)
​

4. Reinicie o host, acesse o sistema novamente e verifique se as etapas de integração serão habilitadas nos parâmetros do tipo de movimento.
