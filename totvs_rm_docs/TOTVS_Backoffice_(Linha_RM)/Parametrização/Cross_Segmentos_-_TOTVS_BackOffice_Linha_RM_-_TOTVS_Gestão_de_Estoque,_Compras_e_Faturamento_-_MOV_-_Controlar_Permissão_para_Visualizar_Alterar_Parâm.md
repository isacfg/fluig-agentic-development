# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Controlar Permissão para Visualizar/Alterar Parâmetros do Módulo Gestão de Estoque, Compras e Faturamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026576454-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Controlar-Permiss%C3%A3o-para-Visualizar-Alterar-Par%C3%A2metros-do-M%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026576454-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Controlar-Permiss%C3%A3o-para-Visualizar-Alterar-Par%C3%A2metros-do-M%C3%B3dulo-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de abril de 2025 às 15:47

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min**

**Dúvida**Como controlar o acesso do usuário para visualizar ou alterar os parâmetros do módulo Gestão de Estoque, Compras e Faturamento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Se o usuário não precisar visualizar ou alterar nenhum parâmetro, poderá acessar módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > editar o perfil do usuário > aba Acesso a Menus e desmarcar a permissão para acessar parâmetros do módulo **\[12.02.03.01\]**.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/JaLY0hy4dMPykKFAlnxTnfdoy/?name=inline1283389756.png)

Já se for necessário ocultar parâmetros específicos poderá editar o perfil > Anexos > **Permissões de Segurança para o Wizard de Parametrização** e desmarcar a flag **Pode Consultar**. Neste caso o usuário não poderá visualizar as etapas em questão, conforme exemplo abaixo:

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360042382213/mceclip3.png)
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360041531274/mceclip2.png)

Para que seja possível apenas visualizar o parâmetro e não altera-lo deverá manter a flag **Pode Consultar** marcada e desmarcar a flag **Pode Alterar**. Neste caso o usuário poderá visualizar as etapas desabilitadas para alteração, conforme exemplo abaixo:

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360042382513/mceclip4.png)

​
![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360042382753/mceclip5.png)

![mceclip6.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360042382833/mceclip6.png)

Observação: O anexo **Permissões de Segurança para o Wizard de Parametrização** poderá ser acessado somente ao editar o perfil, pois pela visão o mesmo não é apresentado.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360041532654/mceclip0.png)
