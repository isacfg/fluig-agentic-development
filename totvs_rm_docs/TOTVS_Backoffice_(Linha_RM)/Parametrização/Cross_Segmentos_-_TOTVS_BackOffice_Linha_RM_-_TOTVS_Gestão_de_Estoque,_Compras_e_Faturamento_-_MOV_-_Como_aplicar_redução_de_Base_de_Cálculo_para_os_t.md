# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como aplicar redução de Base de Cálculo para os tributos ISS e ICMS aplicação do parâmetro Base Cheia

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034641633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-aplicar-redu%C3%A7%C3%A3o-de-Base-de-C%C3%A1lculo-para-os-tributos-ISS-e-ICMS-aplica%C3%A7%C3%A3o-do-par%C3%A2metro-Base-Cheia](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034641633-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-aplicar-redu%C3%A7%C3%A3o-de-Base-de-C%C3%A1lculo-para-os-tributos-ISS-e-ICMS-aplica%C3%A7%C3%A3o-do-par%C3%A2metro-Base-Cheia)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de setembro de 2022 às 10:11

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00 min**

**Dúvida**Como aplicar automaticamente na base de cálculo dos tributos ICMS ou ISS sua redução previamente cadastrada.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para solucionar essa dúvida, realize os seguintes passos:
1\. Acessar o cadastro de **Produto | Anexos | Tributos do Produto por Município** selecione o município em questão e informe a redução no campo **Base Redução ISS (%)**.

![screenshot_20190820_082407.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044126014/screenshot_20190820_082407.png)

2\. No cadastro de **Natureza de Operação** (CFOP) edite a **Regra de ICMS** utilizada e na aba **Dados ICMS** preencha o campo **Redução Base ICMS (%)**.

![screenshot_20190820_082459.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044987713/screenshot_20190820_082459.png)

3\. Acesse **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | [Localize o tipo de movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento) | Fis - Tributação Item** e para o tributo em questão selecione a opção **Sim** para a coluna **Base Cheia**.

![screenshot_20190820_082814.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360044987833/screenshot_20190820_082814.png)

**Informações adicionais**
Somente para os tributo ICMS e ISS este campo ficará habilitado para edição no parametrizador do tipo de movimento. Qualquer outro tributo que possua redução de Base de Cálculo deverá ser sua redução tratada em fórmula para cálculo da Base de cálculo.
