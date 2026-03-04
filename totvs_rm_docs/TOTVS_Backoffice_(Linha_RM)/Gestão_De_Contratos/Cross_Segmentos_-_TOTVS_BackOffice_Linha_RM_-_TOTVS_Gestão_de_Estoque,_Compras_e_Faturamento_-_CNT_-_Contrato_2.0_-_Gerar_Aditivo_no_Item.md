# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Gerar Aditivo no Item

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003190528663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Aditivo-no-Item](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29003190528663-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Gerar-Aditivo-no-Item)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 18:00

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29003215017367)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como gerar aditivo no item do Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

Para a execução do processo selecione o Item do Contrato > Ações Relacionadas > Gerar Aditivo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887974129303)

O processo de Aditivo do Item de Contrato tem como objetivo aditivar **Valor, Quantidade** ou **P****razo**

atualizando as parcelas conforme o tipo de aditivo realizado.


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/29003190485911)



-   Permite selecionar vários itens de contrato para aditivos simultâneos.
-   **Parcelas** com status = **Faturado** ou **Medida**, **não vai aditivar.**
-   Desconsidera parcelas associadas a medições para itens com tipo de faturamento por medição (quantidade ou valor).
-   O Aditivo pode ser executado várias vezes para o mesmo item de contrato. Nos aditivos de **Valor ou Quantidade**, os valores serão **somados.** A soma não pode ser menor (para evitar valor negativo) nem igual ao valor ou quantidade original do item (para não zerar o valor).

**Permissões**

O processo de **Gerar Aditivo no Item** conta com recurso de segurança e seu acesso precisa ser liberado através de permissão no perfil associado ao usuário.

Acesse o módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Perfil > Acesso a Menus > Contratos > Gestão de Contratos > Atribuir permissão a Gerar Aditivo no Item.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/29003190487319)

**Parâmetros comuns a todos os tipos de Aditivo:**

-   **Número**: Número do Aditivo.
-   **Data Assinatura**: Data em que o Aditivo foi assinado.
-   **Justificativa**: Descrição do aditivo;

**Para mais informação sobre cada tipo de aditivo, acesse:**

[02\. Contratos 2.0 | Processos | Aditivo](https://tdn.totvs.com/display/LRM/02.+Contratos+2.0+%7C+Processos+%7C+Aditivo)
