# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 -  Copiar Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/28950161753879-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Copiar-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/28950161753879-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Copiar-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 16:22

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/28950161729175)
 Tempo aproximado para leitura: **00:03:00 min
****
Dúvida**Como realizar a copia de contratos no Contrato 2.0?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.


**Solução**

Para a execução do processo selecione o Contrato > Ações Relacionadas > Copiar Contrato:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33885187730967)

Este processo permite que um contrato seja copiado para sua própria coligada\\filial ou para outras coligadas\\filiais (aceitando cópia de mais de uma coligada por processo). Ao realizar a cópia, um novo contrato será gerado. O novo contrato recebe do contrato original os dados cadastrais relacionados a (contrato, item do contrato e rateio por centro de custo).

Apesar do nome do processo, o destino é definido por coligada e filial, logo é possível copiar o contrato da coligada: 1, filial: 1 para a coligada: 1, filial: 1, 2, 3 e etc. de uma única vez, assim como para qualquer outra coligada e filial que estejam ativas.

O novo contrato é uma cópia do original e conta apenas com as seguintes diferenças

-   O identificador de contrato que é novo é único por contrato.
-   O nome do contrato recebe o prefixo **<<Cópia>>** para indicar que foi copiado e precisa ser verificado e ter seu nome **ajustado**.
-   O código do contrato recebe o prefixo "**\# + filial de destino**" para indicar que foi copiado e precisa ser verificado e ter seu nome ajustado.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/28950148009239)

-   Os dados cadastrais do contrato são copiados sem considerar suas parametrizações entre origem e destino, garanta a equivalência entre eles, exemplo de não equivalência entre os dados de origem e destino: Condição de Pagamento na origem: 001 - Á vista <> Condição de Pagamento no destino: 001 - 30 dias.

**Permissões**

O processo de Cópia de Contrato entre Coligadas conta com recurso de segurança e seu acesso precisa ser liberado através de permissão no perfil associado ao usuário.

**IMPORTANTE:** É necessário que o perfil do usuário também tenha permissão para Incluir contrato.

Acesse o módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Perfil > Acesso a Menus > Contratos > Gestão de Contratos > Atribuir permissão a Copia de contrato entre coligadas:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33885160101655)

**Pontos de atenção**

A cópia do contrato não verifica se as parametrizações de cada entidade são equivalentes entre a origem e o destino, cabe ao usuário garantir que o novo contrato é compatível com as necessidades da empresa.
Esse alerta é especialmente importante quando a cópia é feita para coligadas diferentes, no caso de copiar para a mesma coligada apenas os cadastros com controle por filial precisam ser validados.

1.  **Exemplo:** Na origem o cliente/fornecedor: C000001 possui o CNPJ: 00.000.000/0000-00 enquanto o cliente/fornecedor C000001 possui o CNPJ: 11.111.111/0001-11. Situação pode ocorrer quando o cliente/fornecedor não é global.
2.  **Exemplo:** Na origem a condição de pagamento 001 pode ser "a vista" enquanto 001 no destino é "30/60/90".
3.  **Exemplo:** O tipo de movimento da origem 2.2.59 pode estar configurado com regras diferentes do 2.2.59 da coligada de destino.

**IMPORTANTE:** A cópia é feita com base no código dos cadastros que serão copiados, ou seja, será validado se o código do parâmetro existe no destino e não se representam a mesma entidade.


**Cadastro Global:** Quando o cadastro é global, ambas as coligadas devem estar parametrizadas para utilização do cadastro como global. Caso a coligada de origem esteja global e a coligada de destino não, ou vice e versa, o campo não será copiado, gerando inconsistência na cópia.

**Exemplo:** Na origem, a natureza de orçamento: código: 01 com descrição: Teste, não esta parametrizado como global. No destino, a natureza de orçamento código: 01, descrição: Teste, esta parametrizado como Global. Desta forma, o código da coligada na origem é 1 e no destino é 0. Ao realizar a cópia, será apresentado mensagem de erro informando que não existe a natureza orçamentaria no destino, apesar de possuírem o mesmo código. Para gerar a copia, ambas as coligadas devem estar como global ou ambas como não global.

-   Os campos complementares associados ao contrato e ao item de contrato devem ser equivalentes inclusive em relação ao tipo e tamanho do campo para que a cópia seja realizada com sucesso!
-   As parcelas não são copiadas do contrato de origem para o contrato de destino. As parcelas sempre serão geradas com base nas informações contidas na aba **Faturamento** do item de contrato. Desta forma os valores de **Acréscimo** e **abatimento** serão desconsiderados na cópia e na geração das novas parcelas.

**
Observação**

-   Campos complementares também são copiados no entanto diferenças de nome e configuração do tipo do campo podem gerar erros ao realizar a cópia, ao copiar entre coligadas garanta que os campos complementares são **idênticos**.
-   Após a cópia do contrato para a coligada de destino, deverá editar o contrato para acerto do código do contrato, conforme a máscara parametrizada.
-   Após a cópia do contrato para a coligada de destino, deverá editar o nome do contrato.
-   **Todo o contrato copiado deverá ser revisado**, principalmente quando não se trabalha com cliente\\fornecedor global.
-   **Não** é possível realizar a cópia de contratos **Cancelados**.
-   Em caso em que se faça uma cópia para uma coligada que não é a do contexto, será necessário que se altere o contexto para a coligada pretendida, a fim de visualizar a cópia realizada.



**Saiba mais:**

[03\. Contratos 2.0 | Processos | Copiar Contratos](https://tdn.totvs.com/display/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Copiar+Contratos)
