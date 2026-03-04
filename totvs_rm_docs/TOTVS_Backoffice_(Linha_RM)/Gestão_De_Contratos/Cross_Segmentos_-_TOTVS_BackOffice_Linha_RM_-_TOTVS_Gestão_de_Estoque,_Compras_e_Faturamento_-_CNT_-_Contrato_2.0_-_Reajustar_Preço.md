# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Reajustar Preço

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28958791831959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Reajustar-Pre%C3%A7o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28958791831959-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Reajustar-Pre%C3%A7o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 17:58

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28958789156887)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como reajustar preços no contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

⚠️ O Reajuste Preço só atende contratos **administrativos**, conforme a Lei nº 14.133/2021 (Nova Lei de Licitações) estabelece que o reajuste deve ser aplicado após 12 meses da data limite para apresentação da proposta ou do orçamento, e utiliza índices previamente definidos no edital e contrato.

-   **Periodicidade:** O reajuste deve ocorrer anualmente, contando a partir da data limite.
    Previsão contratual: A possibilidade de reajuste deve estar expressamente prevista no edital e no contrato, com a definição dos índices aplicáveis.

-   **Índices:** A escolha do índice (ex: INCC, IPCA, IGP-M) deve refletir a realidade do mercado e a variação dos custos do objeto do contrato.

-   **C****álculo do reajuste:** A fórmula para o cálculo geralmente envolve o valor contratual, o índice inicial (do período da proposta) e o índice atual (do período do reajuste).

Para a execução do processo selecione o Contrato > Ações Relacionadas > Reajustar Preço:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887884685079)

O processo de Reajuste de Preço do contrato tem como objetivo atualizar o valor do saldo pendente de cada item e atualizar o valor das parcelas conforme o novo valor reajustado do item.

Sobre o Reajuste de Preço:

-   Permite selecionar vários contratos para reajuste simultaneamente.
-   Ao reajustar um contrato, todos os itens são atualizados individualmente, aplicando o índice, o dia de cotação e a defasagem selecionados.
-   Apenas contratos em andamento e que foram reajustados até antes de sua data final podem ser reajustados
-   Um contrato\\Item em andamento deve ter status **diferente de faturado** e sua data fim deve ser inferior a data do último reajuste aplicado.
-   É possível realizar vários reajustes no mesmo contrato, desde que **não haja sobreposição** — ou seja, o mesmo mês não pode ser reajustado mais de uma vez.
-   Caso um reajuste seja feito com informações incorretas, é possível cancelar o reajuste de preço e refazê-lo corretamente. ( Documentação [Cancelar Reajuste Preço](https://centraldeatendimento.totvs.com/hc/pt-br/articles/29002054277143-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Cancelar-Reajuste-Pre%C3%A7o) )
-   Se houverem parcelas com valores diferentes no item do contrato, o reajuste será aplicado proporcionalmente ao valor individual de cada parcela

**Parâmetro do Processo**

Para que o processo de Reajuste de Preço seja executado, é obrigatório o preenchimento de todos os parâmetros exigidos.

Na tela do processo, é necessário informar a Data de Reajuste. A partir dessa data, o sistema buscará automaticamente, para cada item do contrato, as seguintes informações: Índice e Defasagem.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887884685719)

Os campos para preenchimento são acessados no Item do Contrato > aba Adicionais, campos do Reajuste:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887884686487)

**Importante**

-   Toda execução de processo registra no histórico de processos sua execução e parâmetros escolhidos.

**Permissões**

O processo de **Reajustar Preço** conta com recurso de segurança e seu acesso precisa ser liberado através de permissão no perfil associado ao usuário.

Acesse o módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Perfil > Acesso a Menus > Contratos > Gestão de Contratos > Atribuir permissão a Reajuste de Preços.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33887884687639)

**Saiba mais:**

**[02\. Contratos 2.0 | Processos | Reajuste Preço](https://tdn.totvs.com/pages/viewpage.action?pageId=937710134)**
