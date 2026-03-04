# Tipos de Contratos

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Tipos+de+Contratos](https://tdn.totvs.com/display/public/LRM/Tipos+de+Contratos)
> **Domínio:** TDN (TOTVS Developer Network)

---

Por esta opção são cadastrados os tipos de contrato que serão utilizados na inclusão de novos contratos.
Como há uma variedade de tipos de contratos que uma empresa pode utilizar, foi disponibilizado no sistema a possibilidade de se cadastrar estas variações, a fim de facilitar a identificação de um contrato nos controles que a empresa utilizar. 

**Exemplos de Tipos de Contrato:** Locação de Imóveis, Compra e Venda de Imóveis, Prestação de Serviços, Representação, Contrato de Compra e Venda de produtos etc.

-   [Identificação](#)
-   [Eventos Contábeis](#)

Na tela de cadastro dos Tipos de Contratos é possível informar os seguintes campos:
**Código**: Informe o código para o tipo de Contrato (Este código não poderá ser editado após a gravação do registro).
**Descrição**: Informe uma descrição para o tipo incluído.
**Data de Validade**: Refere-se à data limite de validade para os contratos incluídos com este tipo.
**Condição de Pagamento**: Busca uma condição de pagamento cadastrada em Cadastro | Tabelas Auxiliares | Condição de Pagamento,que será utilizada como condição de pagamento default para contratos deste tipo.
***Observação***: Não será permitida a exclusão de um tipo que já esteja sendo utilizado em algum contrato.

Nessa aba é possível informar os seguintes campos:
**Evento Inclusão:** Informe o código do evento para inclusão do contrato.
**Evento Aditivo:** Informe o código do evento para aditivo do contrato.
**Evento Reajuste:** Informe o código do evento para reajuste do contrato.
**Evento Medição:** Informe o código do evento para medição do contrato.
**Evento Reclassificação:** Informe o código do evento para reclassificação do contrato.
**Evento Baixa:** Informe o código do evento para baixa do contrato.

Os campos de eventos contábeis são exclusivos para o Contrato 2.0.





 Workflow Fluig

Essa aba é habilitada somente quando o parâmetro de Workflow do Contrato, opção [Usa Aprovação](https://tdn.totvs.com/pages/viewpage.action?pageId=423938209) estiver habilitado.
Para que o tipo de contrato gere workflow no Fluig, o mesmo deve estar parametrizado com pelo menos uma das seguintes opções:

1.  **Aprovação no Item Periódico e Item Não Periódico**

Ao informar os campos nesse grupo será gerado workflow de aprovação para os itens periódicos e não periódicos do contrato, conforme as seguintes opções:

-   Nível de Aprovação: define o Nível de Aprovação utilizado. As opções disponíveis são: Contrato e Item de Contrato. Caso, seja selecionado a opção de Contrato, será gerado um único Workflow por Contrato, contendo as informações de todos os Itens de Contrato. Para a opção selecionada de Item de Contrato será incluído um workflow por Item de Contrato.
-   Processo: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para aprovação de Contratos do TOTVS Gestão de Estoque Compras e Faturamento está disponível um workflow de exemplo nomeado como "Contrato".
-   Estados de Aprovação: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que o Contrato/Item serão considerados aprovados. Exemplo: "Aprovado"; "Aprovação Automática".

***Observação***: uma vez informado o Nível de Aprovação será obrigatório informar o Processo e os Estados de Aprovação. Caso seja selecionado o Nível de Aprovação para Contrato, para dois ou mais Itens de Contrato será gerado apenas um workflow para aprovação para os mesmos, devendo respeitar a restrição de que o processo e o estado de aprovação para ambos deverá ser o idêntico.


2\. **Aprovação na Medição**

Ao informar os campos nesse grupo será gerado workflow de aprovação para os itens por medição do contrato, conforme as seguintes opções:

-   Nível de Aprovação: define o Nível de Aprovação utilizado. As opções disponíveis são Contrato, Item de Contrato e Medição. Caso, seja selecionado a opção de Contrato, será gerado um único Workflow por Contrato, contendo as informações de todos os Itens de Contrato. Para a opção selecionada de Item de Contrato será incluído um workflow por Item de Contrato, e caso seja selecionada a opção Medição será gerado um Workflow para cada medição incluída, com as suas respectivas informações.
-   Processo: este parâmetro define o processo do Fluig que será utilizado para a inclusão do Workflow. Para aprovação de Medições de Contratos do TOTVS Gestão de Estoque Compras e Faturamento está disponível um workflow de exemplo nomeado como "Contrato".
-   Estados de Aprovação: devem ser informados os estados de aprovação possíveis para o processo selecionado. Os estados de aprovação são as etapas do workflow em que a Medição será considerada aprovada. Exemplo: "Aprovado"; "Aprovação Automática".

***Observação***: uma vez informado o Nível de Aprovação será obrigatório informar o Processo e os Estados de Aprovação. Caso seja selecionado o Nível de Aprovação para Contrato, para dois ou mais Itens de Contrato será gerado apenas um workflow para aprovação para os mesmos, devendo respeitar a restrição de que o processo e o estado de aprovação para ambos deverá ser o idêntico.



* * *

-   [Processos (Tipos de Contratos)](/pages/viewpage.action?pageId=454845331)
