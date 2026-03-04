# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Tipo de Movimento não exibido em nenhum menu

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026070031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipo-de-Movimento-n%C3%A3o-exibido-em-nenhum-menu](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360026070031-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Tipo-de-Movimento-n%C3%A3o-exibido-em-nenhum-menu)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 25 de novembro de 2021 às 11:01

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
** Tempo aproximado para leitura: **00:01:00 min**

**Ocorrência
**O Tipo de Movimento não é exibido em nenhum menu da nova MDI mesmo que o usuário possua permissão.

**Ambiente
**Cross Segmentos - TOTVS Backoffice (Linha RM) – TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.40.

**Causa**Esta situação ocorre pois o Tipo de Movimento não possui uma **Classificação** preenchida em seus parâmetros. Ao configurar um tipo de movimento, se faz necessário que sua Classificação existente na etapa **Mov - Identificação** seja preenchida, uma vez que esta informação é quem irá definir qual menu do sistema este tipo de movimento será acessado.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Outras Movimentações**;
2\. Localize o Tipo de Movimento;
3\. Etapa **Mov - Identificação** preencha o campo **Classificação**, este campo irá definir em qual menu o tipo de movimento poderá ser acessado.

No exemplo abaixo foi definida a Classificação Solicitação de Compras (Gestão de Compras) portanto, o tipo de movimento 1.1.01 passará a ser visível apenas a essa classificação.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4414127767831/mceclip0.png)

Caso encontre dificuldades para localizar os parâmetros do tipo de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search).
