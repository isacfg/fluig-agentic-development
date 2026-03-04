# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Escrituração de lançamentos - Período de apuração do tributo ISS não está aberto para movimentação

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011421611-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Escritura%C3%A7%C3%A3o-de-lan%C3%A7amentos-Per%C3%ADodo-de-apura%C3%A7%C3%A3o-do-tributo-ISS-n%C3%A3o-est%C3%A1-aberto-para-movimenta%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360011421611-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Escritura%C3%A7%C3%A3o-de-lan%C3%A7amentos-Per%C3%ADodo-de-apura%C3%A7%C3%A3o-do-tributo-ISS-n%C3%A3o-est%C3%A1-aberto-para-movimenta%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 20 de fevereiro de 2025 às 16:27

---

 ***![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/30124540210839)
 Tempo aproximado para leitura: 00:03:00 min.***

**Ocorrência**No módulo RMNucleus - **Totvs** **Gestão de Estoque, Compras e Faturamento**, ao tentar realizar o processo de escrituração dos lançamentos, o sistema apresenta a mensagem: **Período de Apuração do(s) Tributo(s) ISS não está aberto para movimentação.**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Essa mensagem pode estar relacionado com a parametrização da apuração do tributo ISS, sendo necessário fazer algumas revisões no módulo RMLiber - **Totvs Gestão Fiscal**, para a correta escrituração dos movimentos e apuração do tributo.

**Solução**

É recomendado que identifique qual o tipo de movimento sendo escriturado, está apresentando a mensagem sobre o período de apuração do ISS (ou outro tributo) não está em aberto.

Revise os itens a seguir:

1\. Acesse o contexto do ERP e confirme a coligada, filial e Exercício Fiscal relacionados ao processo da Escrituração.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360008438812)

2\. Acesse o módulo do Totvs Gestão Fiscal, e posteriormente acesse o menu Obrigações Principais| Período de Apuração.

3\. Na visão do Período de Apuração crie um filtro que possibilite identificar se existe o período de apuração criado e com status em aberto, para o tributo tipo ISS, e para os demais tributos utilizados pela empresa.

4\. Caso não exista o período de apuração para o tributo ISS relacionado ao processo de escrituração, cria-o.

5\. Se existir o período criado para o tributo ISS e este esteja com status Encerrado, abra o período e mantenha-o com status em Aberto. Mantenha em Aberto todos os períodos dos tributos que estejam relacionados aos movimentos, para a escrituração.

6\. Caso a empresa trabalhe com outros tributos do tipo ISS, necessário revisar os critérios acima para os demais tributos ISS e seus respectivos períodos de apuração.

7\. É necessário que exista o período de apuração do tributo tipo ICMS, mesmo se no período não haja movimentação com o imposto.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360008441992)

8\. Acesse os parâmetros do Totvs Gestão Fiscal, menu Ambiente| Parâmetros| etapa 03.02.03 Apuração de Tributos ISS |clique em Apur. ISS por Filial | Selecione a filial, e dê dois cliques sobre a filial em questão.

9\. Acesse a etapa Datas Apuração do ISS. Defina qual a data a ser considerada para os tipos de lançamentos de Entrada, Saída (Entidade Privada e Entidade Pública).

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360008476691)

10\. Observe se os demais [itens](http://tdn.totvs.com/pages/viewpage.action?pageId=286728349) dos parâmetros estão atualizados.

11\. De acordo com a parametrização das datas item 9, o sistema fará consistência com as datas dos movimentos no Nucleus.

No Nucleus é definido a parametrização das [datas](http://wikihelp.totvs.com.br/WikiHelp/EST/EST.Datas.aspx) do movimento. É necessário confirmar qual a data parametrizada para o tipo **Data Lançamento**. Essa data precisa estar em conformidade com a parametrização do tributo ISS, revisado nos itens acima.

Acesse o sistema RMNucleus, menu Ambiente| Parâmetros| Gestão de Estoque, Compras e Faturamento| acesse o tipo de movimento utilizado| revise a etapa Mov - Datas 1/2 e etapa Mov - Data 2/2.

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360008476751)

**Saiba mais:**

-   Informações [complementares](http://tdn.totvs.com/pages/viewpage.action?pageId=269061429) do ISS.
-   [Parametrização](http://tdn.totvs.com/pages/viewpage.action?pageId=286728349) ISS.
-   [Apuração](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ApuracaoISS.aspx) ISS.
-   Datas no Tipo de [movimento](http://wikihelp.totvs.com.br/WikiHelp/EST/EST.Datas.aspx) Nucleus.
