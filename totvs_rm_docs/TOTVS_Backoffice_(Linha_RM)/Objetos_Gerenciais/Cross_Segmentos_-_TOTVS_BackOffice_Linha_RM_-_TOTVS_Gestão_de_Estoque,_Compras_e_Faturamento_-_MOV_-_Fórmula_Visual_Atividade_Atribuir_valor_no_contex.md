# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Atividade Atribuir valor no contexto do Assinante/Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Atribuir-valor-no-contexto-do-Assinante-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692691-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Atividade-Atribuir-valor-no-contexto-do-Assinante-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:08

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00min**

**Dúvida**Como funciona a atividade **Atribuir valor no contexto do Assinante/Movimento** ?

**Ambiente
**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Esta atividade deverá ser utilizada exclusivamente no contexto de assinante (Subscriber) e que a alteração envolvida ocorra, exclusivamente, em uma das tabelas definidas:
\- TMOV
\- TMOVFISCAL
\- TITMMOV

Basicamente a atividade exigirá o preenchimento de 3 campos entre os 4 disponíveis:
\- TABELA: Uma das tabelas definidas acima
\- CAMPO: Uma coluna desta tabela
\- POSICAO: A posição lógica da linha do registro. Quando não preenchido considera 0 (zero)
\- VALOR: Valor a ser atribuído ao campo
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360019985212/mceclip0.png)

**Observação
**Os campos de propriedade destas atividades não permite buscar dados dinamicamente. Portanto, se houver a necessidade de percorrer os itens de movimento deverá seguir o procedimento detalhado em [RM - MOV - Fórmula Visual: Percorrer os itens de movimento utilizando as atividades no contexto de assinante](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022692671-RM-MOV-F%C3%B3rmula-Visual-Percorrer-os-itens-de-movimento-utilizando-as-atividades-no-contexto-de-assinante)
