# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento  - MAT - Dados Bancários não são exibidos no Lançamento Financeiro

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000052182--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Dados-Banc%C3%A1rios-n%C3%A3o-s%C3%A3o-exibidos-no-Lan%C3%A7amento-Financeiro](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500000052182--Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Dados-Banc%C3%A1rios-n%C3%A3o-s%C3%A3o-exibidos-no-Lan%C3%A7amento-Financeiro)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 14 de dezembro de 2021 às 08:32

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**Ao incluir um **Movimento** observa-se que no menu **Lançamento Financeiro** os dados bancários do Cliente/Fornecedor não são carregados na aba **Integração Bancária**.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.

**Causa
**Este incidente ocorre por duas causas distintas, quando no cadastro do **Cliente/Fornecedor** não foram informados os dados bancários ou quando o sistema não foi parametrizado para buscar os dados da **Condição de Pagamento do Cliente/Fornecedor**.

![5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360101141893/5.png)

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

1\. Acessar o cadastro do Cliente/Fornecedor e preencha seus dados bancários:

![1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500000051021/1.png)

2\. Acesse os parâmetros do **Tipo de Movimento** desejado, avance até a etapa **53 - Fin-Condições de pagamento** e marque a flag **Edita condições de Pagamento do Cliente/Fornecedor:** 

![2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360098927734/2.png)

3\. Acessar o lançamento financeiro do movimento, na aba Integração Bancária onde serão exibidos os dados bancários do fornecedor ao clicar no link em azul:

**
![3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360101141853/3.png)
**

**
![4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500000052682/4.png)
**
