# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Desabilitar campo Código de Verificação da NFS-e

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971842-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Desabilitar-campo-C%C3%B3digo-de-Verifica%C3%A7%C3%A3o-da-NFS-e](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008971842-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Desabilitar-campo-C%C3%B3digo-de-Verifica%C3%A7%C3%A3o-da-NFS-e)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de fevereiro de 2022 às 13:40

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como remover o campo **Código de Verificação** da NFS-e no movimento?

**Ambiente**
Cross Segmento - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Solução**Para desabilitar o campo alguns campos devem ser verificados:

**1\. Tipo de Documento Escrituração:**

Acesse os parâmetro do tipo de movimento, etapa **Fis - Escrituração 1/2**, habilite o campo **Gerar Escrituração**, retire o tipo de documento do campo **Código Default** e desabilite o parâmetro para **Gerar Escrituração** novamente.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/pN1A1dK0Fv1RN6Nmhn6bs3I2L/?name=inline-600220251.png)

**2\. Utilização de Tributo ISS:**

Caso o Tipo de Movimento esteja parametrizado para utilizar o tributo **ISS** também será necessário retira-lo da parametrização pois o Tributo ISS caracteriza nota de serviço e assim o campo será exibido.

Acesse os parâmetros do tipo de movimento, etapa **Fis - Tributação - Item** ou **Fis - Tributação - Movimento** (dependendo da parametrização utilizada) e exclua o tributo ISS. Para excluir basta clicar sobre a linha e pressionar a tecla **Delete** do teclado.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013831421/mceclip0.png)
