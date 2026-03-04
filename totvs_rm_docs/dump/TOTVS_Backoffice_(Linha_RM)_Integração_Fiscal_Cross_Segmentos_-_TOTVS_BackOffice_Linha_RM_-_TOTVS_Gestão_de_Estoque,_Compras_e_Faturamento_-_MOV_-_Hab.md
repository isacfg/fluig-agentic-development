# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Habilitar o menu de Escrituração  no RM.exe (Processo migrado para .Net?

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360020078291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Habilitar-o-menu-de-Escritura%C3%A7%C3%A3o-no-RM-exe-Processo-migrado-para-Net](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360020078291-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Habilitar-o-menu-de-Escritura%C3%A7%C3%A3o-no-RM-exe-Processo-migrado-para-Net)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 21 de julho de 2022 às 17:57

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min.**

**Dúvida**Como Escriturar movimentos utilizado o RM.exe, já migrado para a plataforma .Net?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para realizar a escrituração é preciso atribuir a permissão ao usuário, através do perfil:
1-  Acesse o módulo Serviços Globais > Segurança > Perfil > Selecione o módulo de Gestão de Estoque, Compras e Faturamento na opção de Sistema
2 - Edite o perfil e localize a opção "\[08.01.01\] Escrituração de Lançamentos"
![Permiss_o_de_Perfil_para_escriturar.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360015813151/Permiss_o_de_Perfil_para_escriturar.png)

3 - Atribuir as devidas permissões, de acordo com a necessidade.
4 - O menu de escrituração será localizado no caminho: Módulo Gestão de Estoque Compras e Faturamento > Menu Integrações > Escrituração de Lançamentos
![Menu_de_Escriturar.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360015820791/Menu_de_Escriturar.png)

Para mais detalhes sobre o processo de escrituração migrada verifique o link: [http://tdn.totvs.com/pages/releaseview.action?pageId=269432397](http://tdn.totvs.com/pages/releaseview.action?pageId=269432397)
