# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - COLAB - Erro: Não foi possível encontrar a Coligada correspondente ao CNPJ favor verificar o cadastro de Filiais

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/35435361056279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-N%C3%A3o-foi-poss%C3%ADvel-encontrar-a-Coligada-correspondente-ao-CNPJ-favor-verificar-o-cadastro-de-Filiais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/35435361056279-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-COLAB-Erro-N%C3%A3o-foi-poss%C3%ADvel-encontrar-a-Coligada-correspondente-ao-CNPJ-favor-verificar-o-cadastro-de-Filiais)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 6 de outubro de 2025 às 11:02

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/35435361030935)
 Tempo aproximado para leitura: **00:03:00 min**

**Ocorrência**
Ao tentar importar o XML ao sistema é apresentado a mensagem de erro: **Não foi possível encontrar a Coligada correspondente ao CNPJ X, favor verificar o cadastro de Filiais.**

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa** 
Essa mensagem de erro é apresentada devido o CNPJ da filial contida no XML não está cadastrada no sistema, ou não está parametrizada para a importação.
**ATENÇÃO:** O XML não é baseado em CNPJ de coligada.

**Solução**
Para importação do XML, além de ter a filial cadastrada na GFILIAL é necessário acessar o menu: Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Integrações > Fiscal > Parâmetros por Filial > Selecionar a filial e parametrizar as etapas Importação/Envio de Arquivo XML 1/2 e Importação/Envio Arquivo XML 2/2.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35435393684375)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/35435393685015)

Observação

-   Caso a filial ainda não esteja cadastrada, será necessário realizar o cadastro primeiro para, em seguida, efetuar a parametrização.

Para mais informações sobre as parametrizações, acesse:

[MAT - Principais Parametrizações do Processo Importação de Arquivos XML](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008532827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Principais-Parametriza%C3%A7%C3%B5es-do-Processo-Importa%C3%A7%C3%A3o-de-Arquivos-XML?source=search)
