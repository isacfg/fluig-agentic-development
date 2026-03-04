# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Usuário não cadastrado na base de dados

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025584173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Usu%C3%A1rio-n%C3%A3o-cadastrado-na-base-de-dados](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025584173-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Usu%C3%A1rio-n%C3%A3o-cadastrado-na-base-de-dados)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:22

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31293345017111)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**No módulo de Gestão de Estoque, Compras e Faturamento, ao tentar realizar Exportação da Cotação para Web é apresentada a mensagem:

**'Usuário "rm" não cadastrado na base de dados'.**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre, pois o processo exige que no cadastro de **Usuários** do sistema exista um usuário cadastrado com o código RM.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:
1\. Acesse módulo Serviços Globais > Segurança > Usuários;
2\. Inclua um novo usuário de código **RM.**
