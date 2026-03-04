# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade "Consulta valor no contexto do Movimento(Assinante)"

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022504952-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Consulta-valor-no-contexto-do-Movimento-Assinante](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022504952-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Consulta-valor-no-contexto-do-Movimento-Assinante)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:06

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00min**

**Dúvida**Como funciona a atividade **Consulta valor no contexto do Movimento (Assinante)?

****Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Essa atividade deverá ser utilizada exclusivamente no contexto de assinante (Subscriber) e que a consulta envolvida ocorra, exclusivamente, em uma das tabelas definidas:
\- TMOV
\- TMOVFISCAL
\- TITMMOV

Basicamente a atividade exigirá o preenchimento de 3 campos de 4 disponíveis:
\- TABELA: Uma das tabelas definidas acima
\- CAMPO: Uma coluna desta tabela
\- POSICAO: A posição lógica da linha do registro. Quando não preenchido considera 0 (zero)
\- RETORNO: Poderá ser buscado dinamicamente em outras atividades

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019986752/mceclip0.png)

\- Em uma expressão: movConsultaValorContextSubScriberActivity1.Retorno
\- Em uma propriedade: Activity=movConsultaValorContextSubScriberActivity1, Path=Retorno

**Observação
**Os campos de propriedade destas atividades não permite buscar dados dinamicamente. Portanto, se houver a necessidade de percorrer os itens de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692671-RM-MOV-F%C3%B3rmula-Visual-Percorrer-os-itens-de-movimento-utilizando-as-atividades-no-contexto-de-assinante) para verificar o procedimento detalhado a ser seguido.
