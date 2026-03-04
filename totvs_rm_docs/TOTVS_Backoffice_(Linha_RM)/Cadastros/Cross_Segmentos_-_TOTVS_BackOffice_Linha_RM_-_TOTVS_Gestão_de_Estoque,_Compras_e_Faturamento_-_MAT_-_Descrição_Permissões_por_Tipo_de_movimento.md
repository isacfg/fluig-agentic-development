# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Descrição Permissões por Tipo de movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034607193-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Descri%C3%A7%C3%A3o-Permiss%C3%B5es-por-Tipo-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360034607193-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Descri%C3%A7%C3%A3o-Permiss%C3%B5es-por-Tipo-de-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 17 de abril de 2025 às 09:49

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24165071438999)**Tempo aproximado para leitura: **00:04:00 min

Dúvida**Qual a função/impacto de cada **Permissão por Tipo de Movimento** existente no anexo do Usuário?

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24166030049303)

**Ambiente**

ross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque Compras e Faturamento – A partir da versão 11.80.

**Solução**

Ao acessar o Anexo > Permissões por Tipo de Movimento para atribuir as desejadas, o sistema apresenta as opções abaixo com as seguintes descrições:

-   **Consultar:** Permite que o usuário apenas **visualize** qualquer movimento deste tipo.

-   **Alterar:** Permite ao usuário **alterar** qualquer movimento deste tipo.
-   **Incluir:** Permite ao usuário **incluir** qualquer movimento deste tipo.
-   **Excluir:** Permite ao usuário **excluir** qualquer movimento deste tipo.
-   **Ativar/Tornar Inativo:** Permite ao usuário **ativar/inativar** qualquer movimento deste tipo em **Processos | Ativar/Inativar Movimento**.
-   **Alterar após E-mail:** Permite ao usuário alterar qualquer movimento deste tipo, mesmo após o e-mail ter sido enviado em **Processos** | **Enviar E-mail do Movimento**.
-   **Cancelar:** Permite ao usuário **cancelar** qualquer movimento deste tipo.
-   **Reabrir:** Permite ao usuário executar o processo **Reabrir Financeiro** para qualquer movimento deste tipo. Este processo estará habilitado somente se o tipo de movimento for **1.2.XX** ou **2.2.XX** e possuir integração financeira.
-   **Alterar após Imprimir:** Permite ao usuário alterar qualquer movimento deste tipo, mesmo após a impressão em **Processos | Imprimir Movimentos**.
-   **Alterar Item Integrado:** Permite ao usuário alterar qualquer item de movimento deste tipo, quando o movimento foi gerado diretamente através de integração com **TOTVS Obras e Projetos (Solum)

    **
-   **Imprimir:** Permite ao usuário **imprimir** qualquer movimento deste tipo.
    Para habilitar este processo é necessário acessar os parâmetros do tipo de movimento e parametrizar a etapa **Mov - Impressão 2/2**.
-   **Copiar**: Permite ao usuário **copiar** qualquer movimento deste tipo pelo processo Cópia de Movimento a Partir de Outro Movimento.
-   **Enviar E-mail:** Permite ao usuário **enviar** qualquer movimento deste tipo por **e-mail**.
    Para habilitar este processo é necessário acessar os parâmetros do tipo de movimento, etapa **Mov - Impressão 2/2** e marcar a **flag Envia E-mail**.
-   **Gerar Contrato:** Permite ao usuário **gerar um contrato** a partir de qualquer movimento deste tipo.
    Para habilitar este processo é necessário acessar os parâmetros do tipo de movimento, **etapa Contrato**s e marcar a **flag** **Gerar Contrato**.
    Para mais informações, [Clique Aqui.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360048551213-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Gerar-Contrato-a-partir-do-Pedido-de-Compras)
-   **Lançar:** Permite ao usuário executar o processo **Gerar Financeiro** para qualquer movimento deste tipo. Este processo estará habilitado somente se o tipo de movimento for **1.2.XX** ou **2.2.XX** e possuir integração financeira.
-   **Faturar:** Permite ao usuário **faturar** qualquer movimento deste tipo, através de **Processos | Faturar/Receber**.
-   **Cotar:** Permite ao usuário incluir uma **Cotação** para qualquer movimento deste tipo. Somente Solicitações de Compra podem ser cotadas.
-   **Contabilizar:** Permite ao usuário **contabilizar** qualquer movimento deste tipo, através de **Processos | Contabilizar Movimentos**.
    Para habilitar este processo é necessário acessar os parâmetros do tipo de movimento e parametrizar a **etapa Contabilidade**.
-   **Estornar Contabilidade:** Permite ao usuário **estornar** contabilidade de qualquer movimento deste tipo, através de **Processos** | **Estornar** **Contabilidade**.
-   **Incluir por Faturamento:** Permite ao usuário **incluir** qualquer movimento deste tipo por faturamento, selecionando o movimento origem **Processos** | **Faturar/Receber**.
-   **Incluir Por Contrato:** Com este parâmetro selecionado o usuário poderá incluir um movimento por faturamento de contrato mesmo que não tenha permissão de inclusão direta do movimento. No entanto, se o parâmetro "Incluir" já estiver marcado, mesmo que o "Incluir Por Contrato" esteja desmarcado, será possível incluir movimentos via faturamento de contrato.


    **Observação:** O sistema exibe dois botões do lado inferior direito do formulário que permitem Marcar e Desmarcar todas as opções, porém só efetuam suas ações no tipo de movimento selecionado na lista \[Tipos de Movimento\]

**Informação Adicional**

Documentação com mais informações sobre atribuição de permissão ao movimento:

-   **[Como atribuir permissão ao usuário em Tipo de Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000563827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-atribuir-permiss%C3%A3o-ao-usu%C3%A1rio-em-Tipo-de-Movimento)**
