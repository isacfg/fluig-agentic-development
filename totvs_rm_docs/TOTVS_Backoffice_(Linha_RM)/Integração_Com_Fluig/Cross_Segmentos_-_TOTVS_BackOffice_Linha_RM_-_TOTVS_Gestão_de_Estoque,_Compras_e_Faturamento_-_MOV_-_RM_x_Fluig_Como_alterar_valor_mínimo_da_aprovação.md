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
