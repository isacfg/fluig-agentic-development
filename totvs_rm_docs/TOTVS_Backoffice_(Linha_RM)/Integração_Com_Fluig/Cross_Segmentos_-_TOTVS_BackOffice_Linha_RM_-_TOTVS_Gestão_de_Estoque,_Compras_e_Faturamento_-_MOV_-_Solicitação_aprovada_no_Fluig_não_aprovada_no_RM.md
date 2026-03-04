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
