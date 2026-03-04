# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Registro de Orçamento via Planilha.NET sem Conceito

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360051540954-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Registro-de-Or%C3%A7amento-via-Planilha-NET-sem-Conceito](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360051540954-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Registro-de-Or%C3%A7amento-via-Planilha-NET-sem-Conceito)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:27

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura:**00:03:00 min**

**Dúvida**
Como registrar Orçamento em Cotação utilizando planilha de sem Conceito?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 12.1.28.

**Solução**A partir da versão 12.1.28 não se faz mais necessário a utilização de **Conceito** para registrar um orçamento via **planilha.net**. O envio da planilha ao Comunicar Fornecedores continuará sendo executado como de costume ([clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360019491211-RM-CMP-Importar-Planilha-de-Or%C3%A7amento-Negocia%C3%A7%C3%A3o)).

A grande novidade ocorre apenas no momento de Registrar o Orçamento utilizando a planilha que seu Fornecedor lhe enviou como resposta ao orçamento solicitado.

Um modelo de Planilha Net com as configurações padrões está disponível para utilização.
Para importar a Planilha Net de modelo é necessário realizar a importação da **Planilha NUCPLA0004 - Exportação de Cotação V2.PlanNetTotvs**, menu **Gestão | Planilha Net | Importação de Planilha.NET**.

A Planilha se encontra disponível na Pasta **C:\\Totvs\\CorporeRM\\ObjetosGerenciais\\Planilha** (Caminho padrão de instalação da Biblioteca RM, que pode ser alterado conforme necessidade no momento da instalação).

Para que seja possível utilizar o novo recurso siga os passos abaixo:

1.  Como dito anteriormente não será mais necessário utilizar um conceito, bastando apenas a parametrização de um caminho padrão de onde as planilhas serão buscadas para importação. Este parâmetro pode ser encontrado em **Parâmetros | Gestão de Estoque, Compras e Faturamento | Gestão Compras | Cotação | Etapa 3 - Definições Gerais 3/5 | Grupo 'Importação de Planilha'** (img01).
2.  Pelo menu **Compras e Faturamento | Compras | Cotação | Processos | Importar Planilha de Orçamento/Negociação (Novo!)** é possível realizar a importação da(s) planilha(s) devolvida(s) pelo(s) fornecedor(eres). (img02).

IMG01
![Anota__o_2020-07-27_121800.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360082616953/Anota__o_2020-07-27_121800.png)

IMG02
![Anota__o_2020-07-27_122323.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360082618513/Anota__o_2020-07-27_122323.png)


**Informações adicionais**

-   Caso a coligada esteja parametrizada para integrar com **Portal Paradigma** o novo menu não será exibido.
-   Os arquivos lidos pelo sistema não serão renomeados nem excluídos da pasta após execução do registro de orçamento.
