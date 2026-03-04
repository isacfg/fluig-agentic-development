# Patrimônio (Parâmetro de Integração)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938845](https://tdn.totvs.com/pages/releaseview.action?pageId=423938845)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Integrar TOTVS Gestão Patrimonial:** As opções para este campo para movimentos de Entrada são:

-   Não Integrado: Os itens deste tipo de movimento não serão ativos imobilizados.
-   Compra de Imobilizado: Os itens deste movimento serão ativos imobilizados. Desta forma, ao realizar a integração deste movimento no TOTVS Gestão Patrimonial, serão gerados automaticamente os respectivos bens de acordo com as opções de integração do TOTVS Gestão Patrimonial. Para que este processo ocorra será necessário: inicialmente incluir o movimento no TOTVS Gestão de Estoques, Compras e Faturamento. Logo após, deve-se indicar no TOTVS Gestão Patrimonial, menu Utilitários/Integrações/Integração TOTVS Gestão de Estoques, Compras e Faturamento as opções de integração para a geração de bens.
-   Retorno de Imobilizado: Os itens deste movimento serão retorno de imobilizados.
-   Contrato de Leasing: No caso de Leasing Financeiro, a lei obriga a empresa a ativar os bens arrendados no seu Ativo Imobilizado e fazer a depreciação dos mesmos. Para tal, foi criado o parâmetro para que o movimento seja integrado com o TOTVS Gestão Patrimonial.

 As opções para este campo para movimentos de Saída são:

-   Não Integrado: Os itens deste tipo de movimento não serão integrados ao TOTVS Gestão Patrimonial.
-   Remessa de Imobilizado: Os itens deste tipo de movimento pertencem à empresa, mas por algum motivo não estão na empresa.

-   Exemplo*:* O item precisou ser reparado.

-   Baixa de Imobilizado: Os itens deste tipo de movimento não pertencem mais à empresa. Os mesmos deverão ser baixados no TOTVS Gestão Patrimonial.
-   As opções para este campo para movimentos de Transferência são:
-   Não Integrado: Os itens deste tipo de movimento não serão integrados ao TOTVS Gestão Patrimonial.
-   Remessa de Imobilizado: Os itens deste tipo de movimento pertencem a empresa, mas por algum motivo não estão na empresa.

-   Exemplo*:* O item precisou ser reparado.

***Observações****:***  Estes campos só aparecerão se existir integração com o TOTVS Gestão Patrimonial.

-   Para que haja a perfeita integração, é necessário que no cadastro de produtos, informe o Grupo de Contas do TOTVS Gestão Patrimonial, ao qual o produto a ser integrado pertence (isto vai indicar que este produto é um bem no TOTVS Gestão Patrimonial).
-   Desta forma, após realizar a integração no TOTVS Gestão Patrimonial dos movimentos gerados pelo TOTVS Gestão de Estoques, Compras e Faturamento, o sistema não permitirá a alteração nem exclusão de tais movimentos. Isto será possível somente se os bens forem excluídos no TOTVS Gestão Patrimonial.
-   Nos movimentos de remessa de Imobilizado, será efetuada uma saída com o bem agregado. Depois de ter realizado a integração das Compras do Imobilizado, deverá editar o bem e agregá-lo ao bem principal. Através do menu Movimentos deverá realizar a transferência física de bem, informando a localização.
-   No TOTVS Gestão de Estoques, Compras e Faturamento, ao realizar a remessa de imobilizado sendo informado o bem principal, este com seu bem agregado poderá alterar a sua localização. 
-   Se tentar movimentar 2 Produtos (TOTVS Gestão de Estoques, Compras e Faturamento), sendo um o Bem principal e outro o Bem agregado (Bonum), o sistema emitirá uma mensagem de violação de chave primária na tabela IBEMLOCAL, porque o bem agregado já é movimentado automaticamente quando o principal é movimentado. Neste caso o movimento deve conter somente o bem principal. 
-   Se tentar movimentar determinadas unidades de um Produto (Nucleus) que equivale a um único Bem (TOTVS Gestão Patrimonial) com quantidade N, o sistema emitirá uma mensagem: "Quantidade de itens no movimento deve ser igual à quantidade de bens". 
-   Para o correto funcionamento integrado TOTVS Gestão Patrimonial e TOTVS Gestão de Estoques, Compras e Faturamento, cada unidade de produto (TOTVS Gestão de Estoques, Compras e Faturamento) deve ser equivalente a um único Bem (TOTVS Gestão Patrimonial) com quantidade 1, pois não há uma conversão de unidades do Nucleus para unidades do Bonum. Neste caso, a movimentação no Nucleus deverá ser feita relacionando-se uma unidade de Produto a uma unidade de Bem.
-   Ao realizar um movimento de transferência, será gerado o histórico no Bonum com a nova Localização do Bem, C. Custo, Departamento, Datas (alteração ou saída), Usuário responsável e a Filial. 
-   A Transferência de um bem implica na movimentação automática de todos os bens a ele agregados.

**Localização (Compra Ativo Imobilizado):** Edita: habilitando esta opção, será apresentado na pasta integração do movimento o campo 'Localização', para informar qual deverá ser a localização do bem, da compra do ativo imobilizado. Não Edita: escolhendo esta opção, o campo Localização do Bem não será editado nem mostrado no movimento, portanto não será utilizado.
***Observações**:* Se no processo de compra de um ativo imobilizado for gerado através de uma cotação diretamente, nos parâmetros do tipo de movimento, a localização deverá estar como 'Edita' Mesmo que a opção 'Integração com o TOTVS Gestão Patrimonial' esteja configurada para não integrado. Na solicitação deverá informar a localização antes de realizar a cotação. Ao incluir itens de movimento de ativo imobilizado, que possuem apenas Grupo de Contas, ou apenas Grupo de Bens (será obrigatório informar a localização), nos demais produtos que não possuem estes campos preenchidos, o sistema não fará a consistência.

**Fórmula Valor do Bem:** Este campo é visível somente para integração com TOTVS Gestão Patrimonial do tipo "Compra de Imobilizado" ou "Contrato Leasing". Nele deve ser informada a fórmula a ser executada para cada item do movimento que gere imobilizado. O resultado da fórmula representará o valor de aquisição do bem, o qual será considerado pelo TOTVS Gestão Patrimonial durante a criação dos bens a partir do movimento.

**Fórmula Valor de Depreciação do Bem:** Este campo é visível somente para integração com TOTVS Gestão Patrimonial do tipo "Compra de Imobilizado" ou "Contrato Leasing". Nele deve ser informada a fórmula a ser executada para cada item do movimento que gere imobilizado. O resultado da fórmula representará o valor base de depreciação do bem, o qual será considerado pelo TOTVS Gestão Patrimonial durante a criação dos bens a partir do movimento.
