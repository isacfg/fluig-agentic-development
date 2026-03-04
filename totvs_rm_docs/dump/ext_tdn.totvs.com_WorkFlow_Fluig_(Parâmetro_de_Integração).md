# WorkFlow Fluig (Parâmetro de Integração)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938700](https://tdn.totvs.com/pages/releaseview.action?pageId=423938700)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Aprovação:** Este parâmetro define o tipo de aprovação do Fluig utilizada pelo Tipo de Movimento. As opções disponíveis são:

-   Não Utiliza: a aprovação pelo Fluig não é habilitada.
-   Utiliza no Faturamento: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser faturados.
-   Utiliza na Cotação: a aprovação pelo Fluig é habilitada para que somente itens aprovados no Fluig possam ser selecionados ao se criar uma nova cotação.
-   Utiliza em Ambos: é habilitada aprovação pelo Fluig para Faturamento e Cotação.

**Aprovação no Faturamento/Aprovação na Cotação: P**rocesso: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para o TOTVS Gestão de Estoque Compras e Faturamento estão disponíveis dois workflows de exemplo: "WorkflowNucleus" e "WorkflowItem". Agrupamento: este parâmetro define o tipo de agrupamento utilizado. As opções disponíveis são:

-   Movimento: é gerado um único workflow por movimento, contendo os dados de todos os itens de movimento, quando aprovado este workflow todos os itens do movimento estarão liberados para serem utilizados.
-   Item de Movimento: é gerado um workflow para cada item de movimento, possibilitando ao usuário que cada item seja aprovado de forma individual.
-   Estados de Aprovação: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que o movimento/item do movimento serão considerados aprovados. Exemplo: "Aprovado"; "Aprovação Automática".

***Observação***: não é possível informar estados repetidos na lista de Estados de Aprovação.
***Atenção!*** é possível utilizar somente um tipo de aprovação por Tipo de Movimento, ou seja, se estiver parametrizada a aprovação de workflow no Fluig não é possível utilizar aprovação no TOTVS Gestão de Relacionamento com o Cliente ou Aprovação por Fórmula.
***Importante!*** se o Processo selecionado no Faturamento e na Cotação forem iguais é obrigatório que os tipos de agrupamento sejam iguais. Nesta situação de Processo e Agrupamento idênticos é gerado apenas um workflow no Fluig.

* * *

-   # [Aprovação de Movimentos por Workflow no Fluig](https://tdn.totvs.com/pages/viewpage.action?pageId=423938696)
