# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Permite Visualização dos dados no Filtro por Usuário

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034074054-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Permite-Visualiza%C3%A7%C3%A3o-dos-dados-no-Filtro-por-Usu%C3%A1rio](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034074054-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Permite-Visualiza%C3%A7%C3%A3o-dos-dados-no-Filtro-por-Usu%C3%A1rio)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 22 de abril de 2025 às 12:10

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31582875767319)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**No módulo Gestão de Estoque, Compras e Faturamento, ao tentar acessar tela de *lookup* onde usuário possui filtro sistema não restringe a visualização dos dados restritos.


**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente ocorre pois a parametrização da coligada esta permitindo tal visualização.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

1.  Acessar o menu **Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Definições Gerais > Definições Gerais 3/3**;
2.  Desmarcar a flag **Permite Visualização dos dados no Filtro por Usuário**;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31582875770391)



3.  Solicitar ao usuário que realize o Log off/Login no sistema para que a nova parametrização tenha efeito.

**Observação**

Explicação da funcionalidade da flag:

**Permite Visualização dos Dados no Filtro por Usuário:**

-   **Desmarcando** este Parâmetro o sistema **obedecerá** as restrições de acessos indicadas no Menu Cadastros/Segurança/Usuários/Associação de Filtros.
-   **Marcando** este Parâmetro o sistema **não obedecerá** as restrições de acessos indicadas no Menu Cadastros/Segurança/Usuários/Associação de Filtros, exceto para impressões de relatórios ou outros Objetos Gerenciais que utilize campos da base.
