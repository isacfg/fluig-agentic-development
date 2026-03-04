# 03. Contratos 2.0 | Processos | Copiar Contratos

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Copiar+Contratos](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Copiar+Contratos)
> **Domínio:** TDN (TOTVS Developer Network)

---

Este processo possibilita a cópia de um ou mais contratos simultaneamente para sua própria coligada/filial ou para outras coligadas/filiais, permitindo a cópia para mais de uma coligada por vez. Ao realizar a cópia, um novo contrato é gerado, herdando do contrato original os dados cadastrais relacionados (contrato, item do contrato e rateio por centro de custo).

Apesar de seu nome, o processo define o destino por coligada e filial. Isso significa que é possível copiar um contrato da coligada: 1, filial: 1 para a coligada: 1, filial: 1, 2, 3, etc., de uma única vez, assim como para qualquer outra coligada ou filial ativa.

O novo contrato é uma cópia fiel do original, com as seguintes diferenças:

-   O identificador do contrato é único para cada contrato.

-   O nome do contrato recebe o prefixo "Cópia" para indicar que foi copiado, sendo necessário revisar e ajustar o nome.

-   O código do contrato recebe o prefixo "# + filial de destino" para indicar que foi copiado, também necessitando de revisão e ajuste.

-   Os dados cadastrais são copiados sem considerar as parametrizações entre origem e destino, sendo essencial garantir a equivalência entre eles. Por exemplo, a Condição de Pagamento pode ser diferente: na origem, "001 - À vista" pode não corresponder à "001 - 30 dias" no destino.



Permissões

O processo de "Cópia de Contrato entre Coligadas" possui um recurso de segurança, e seu acesso precisa ser autorizado por meio de permissão no perfil do usuário.

O perfil do usuário também deve ter permissão para Incluir contratos.



Pontos de Atenção

1.  A cópia do contrato não verifica se as parametrizações de cada entidade são equivalentes entre a origem e o destino, cabe ao usuário garantir que o novo contrato é compatível com as necessidades da empresa. 

    Esse alerta é especialmente importante quando a cópia é feita para coligadas diferentes, no caso de copiar para a mesma coligada apenas os cadastros com controle por filial precisam ser validados.

    Exemplo 01: Na origem o cliente/fornecedor: C000001 possui o CNPJ: 00.000.000/0000-00 enquanto o cliente/fornecedor C000001 possui o CNPJ: 11.111.111/0001-11. Situação pode ocorrer quando o cliente/fornecedor não é global.
    Exemplo 02: Na origem a condição de pagamento 001 pode ser "a vista" enquanto 001 no destino é "30/60/90".
    Exemplo 03: O tipo de movimento da origem 2.2.59 pode estar configurado com regras diferentes do 2.2.59 da coligada de destino.

    A cópia é feita com base no código dos cadastros que serão copiados, ou seja, será validado se o código do parâmetro existe no destino e não se representam a mesma entidade.


    Cadastro Global: Quando o cadastro é global, ambas as coligadas devem estar parametrizadas para utilização do cadastro como global. Caso a coligada de origem esteja global e a coligada de destino não, ou vice e versa, o campo não será copiado, gerando inconsistência na cópia.
    Exemplo: Na origem, a natureza de orçamento: código: 01, descrição: Teste, não esta parametrizado como global. No destino, a natureza de orçamento código: 01, descrição: Teste, esta parametrizado como Global. Desta forma, o código da coligada na origem é 1 e no destino é 0. Ao realizar a cópia, será apresentado mensagem de erro informando que não existe a natureza orçamentaria no destino, apesar de possuírem o mesmo código. Para gerar a cópia, ambas as coligadas devem estar como global ou ambas como não global.


2.  Os campos complementares associados ao contrato e ao item de contrato devem ser equivalentes inclusive em relação ao tipo e tamanho do campo para que a cópia seja realizada com sucesso!
3.  As parcelas não são copiadas do contrato de origem para o contrato de destino. As parcelas sempre serão geradas com base nas informações contidas na aba Faturamento do item de contrato. Desta forma os valores de Acréscimo e abatimento serão desconsiderados na cópia e na geração das novas parcelas.



Importante:

-   Os campos complementares também são copiados, no entanto, diferenças no nome e na configuração do tipo do campo podem gerar erros durante o processo de cópia. Ao copiar entre coligadas, é essencial garantir que os campos complementares sejam idênticos.
-   Após a cópia do contrato para a coligada de destino, será necessário editar o contrato para ajustar o código do contrato conforme a máscara parametrizada.
-   Além disso, o nome do contrato também deverá ser revisado e ajustado.
-   Todos os contratos copiados devem ser cuidadosamente revisados, especialmente quando não se trabalha com clientes/fornecedores globais.
-   Caso a cópia seja realizada para uma coligada diferente da coligada do contexto atual, será necessário alterar o contexto para a coligada pretendida a fim de visualizar a cópia realizada.

Não é possível realizar a cópia de contratos "Cancelados".
