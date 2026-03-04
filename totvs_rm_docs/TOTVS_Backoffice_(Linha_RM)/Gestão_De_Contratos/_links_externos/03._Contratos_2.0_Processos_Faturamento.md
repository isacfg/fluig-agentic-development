# 03. Contratos 2.0 | Processos | Faturamento

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Faturamento](https://tdn.totvs.com/display/public/LRM/03.+Contratos+2.0+%7C+Processos+%7C+Faturamento)
> **Domínio:** TDN (TOTVS Developer Network)

---

-   [Faturar Contrato](#)
-   [Cancelar Faturamento do contrato](#)

Processo que possibilita o faturamento das parcelas de um ou mais contratos periódicos, de medição que podem ser por valor ou por quantidade e de arrendamento mercantil.

Para a execução deste processo é necessário a definição dos parâmetros abaixo.

1.  Intervalo de faturamento (data inicial e final):
    1.  Ao informar o intervalo de faturamento serão faturadas todas as parcelas com status de faturamento **A Faturar** que possuem data de vencimento dentro do intervalo definido.
    2.  Se a parcela é de um contrato de medição, adicionalmente verifica se tem uma medição atrelada a parcela para que ela possa ser faturada.
2.  Faturar todo o contrato:
    1.  Ao selecionar esta opção, todas as parcelas do contrato com status de faturamento **A Faturar** serão faturadas.
    2.  Esta opção tem maior prioridade do que o anterior, ou seja, caso o usuário selecione que deseja faturar todo o contrato e também informe o intervalo de faturamento, a seleção deste componente irá prevalecer e desta forma todas as parcelas pendentes serão faturadas.
    3.  Sendo um contrato de medição, somente as parcelas atreladas a uma medição serão faturadas.
3.  Considerações sobre o faturamento
    1.  A possibilidade de faturar um contrato está condicionado a configuração de faturamento do status atual do contrato.
    2.  O status deve estar configurado para permitir faturamento.
    3.  Caso tente faturar um contrato configurado para um status sem permissão de faturar, nenhum faturamento vai ser realizado, o processo vai falhar e no LOG vai ser indicado o contrato e o fato do status não permitir o faturamento.



Importante

-   Este processo só realizará o faturamento dos itens de contrato que possuem **Tipo de Faturamento** (Periódico, Medição por Valor, Medição por Quantidade e Arrendamento Mercantil) e **Tipo de movimento** (Faturamento) informados, sendo este o tipo de movimento utilizado para o faturamento do item de contrato.
-   Ao realizar o faturamento de uma parcela do contrato, a previsão financeira vinculada a ele, se existir, vai ser removida.

Será gerado um movimento para cada parcela do(s) item(s) de contrato (Periódico, Medição por Valor, Medição por Quantidade), este movimento possuirá apenas um item, as informações do movimento serão definidas de acordo com a seguinte ordem de prioridade:

1.  Informações do item do contrato.
2.  Informações do contrato.
3.  Informações default do movimento.



 Movimento

**Relação entre os Campos do Contrato e o Movimento**

Esta seção descreve como os campos informados no contrato são utilizados para compor os dados do movimento gerado a partir do faturamento.

* * *



-   [Aba Identificação](#)
-   [Aba Integrações](#)
-   [Aba Transporte](#)
-   [Aba Informações Adicionais](#)



##### Cabeçalho

-   Tipo de movimento: corresponde ao campo *Tipo de Movimento* informado na aba Faturamento do item do contrato.

-   Filial: corresponde ao campo *Filial* informado na aba Faturamento do item do contrato.

-   Local de Estoque: corresponde ao campo *Local de Estoque* informado na aba Faturamento do item do contrato.

-   Cliente: corresponde ao campo *Destinatário* informado na aba Faturamento do item do contrato. Caso este campo não esteja preenchido, será considerado o campo *Contratante/Contratado* da aba Identificação do contrato.

-   Valor Líquido: corresponde ao campo *Valor Parcela* calculado na Parcela.


##### Tabelas

##### Centro de Custo

-   -   Campo *Centro de Custo* da aba Contábil/Fiscal do item do contrato.
    -   Caso não esteja preenchido, será considerado o campo *Centro de Custo* da aba Contábil/Fiscal do contrato.

##### Departamento

-   -   Campo *Departamento* da aba Contábil/Fiscal do item do contrato.
    -   Caso não esteja preenchido, será considerado o campo *Departamento* da aba Contábil/Fiscal do contrato.

##### Tabelas de Classificação

Os campos abaixo são preenchidos conforme os dados da seção *Tabela de Faturamento* da aba Tabelas do item do contrato. Caso não estejam preenchidos, os valores considerados serão os da aba Tabelas do contrato.

-   -   CodTb1Fat

    -   CodTb2Fat

    -   CodTb3Fat

    -   CodTb4Fat

    -   CodTb5Fat


##### Tabelas de Faturamento (Opcional)

Os campos abaixo são preenchidos conforme os dados da seção *Tabela de Classificação* da aba Tabelas do item do contrato. Caso não estejam preenchidos, os valores considerados serão os da seção *Tabela de Faturamento* da aba Tabelas do contrato.

-   -   CodTb1Opcional

    -   CodTb2Opcional

    -   CodTb3Opcional

    -   CodTb4Opcional

    -   CodTb5Opcional


##### Funcionários

Preenchidos conforme os dados da seção Funcionários na aba Tabelas do contrato:

-   -   CodVen1, CodVen2, CodVen3, CodVen4

    -   Comissão correspondente a cada CodVen

    -   Cod. Representante

    -   Comissão Representante


##### Financeira

-   Condição de Pagamento: corresponde ao campo *Condição de Pagamento* informado na aba Faturamento do item do contrato.

-   Conta/Caixa: corresponde ao campo Conta/Caixa informado na aba Adicionais o Item do Contrato.

##### Fiscal

-   Código da Natureza de Operação: corresponde ao campo *Natureza de Operação* informado na aba Contábil/Fiscal do item do contrato. Caso não esteja preenchido, será considerado o campo *Natureza de Operação* da aba Contábil/Fiscal do contrato.


##### Identificação

-   Tipo de Frete: corresponde ao campo *Frete* informado na aba Faturamento do item do contrato.


##### Observações

-   Observação: corresponde ao campo *Observação* informado na aba Adicionais do contrato.

-   Histórico: O histórico de um **movimento** e de seus **itens de movimento** varia conforme a quantidade de itens ou medições envolvidas.


**Contrato Periódico:** O histórico do movimento é obtido diretamente do **histórico do contrato****.**

**Contrato por Medição**

Quando o parâmentro **Faturar item separadamente** está como **Sim**: O histórico do movimento é obtido diretamente do **histórico da medição** de cada item.

Quando o parâmentro **Faturar item separadamente** está como **Não**: 

-   Se for um único item (ou medição), o histórico do movimento é obtido diretamente do **histórico da medição.**
-   Já para múltiplos itens ou medições, o histórico do movimento é obtido diretamente do **histórico do contrato****.**

##### Campos Livres

-   CampoLivre1: campo *Campo Livre 1* da aba Adicionais do contrato.

-   CampoLivre2: campo *Campo Livre 2* da aba Adicionais do contrato.

-   CampoLivre3: campo *Campo Livre 3* da aba Adicionais do contrato.


 Item de Movimento

**Relação entre os Campos do Contrato e do Item de Movimento**

A seguir, são descritos os campos utilizados na composição do item de movimento, conforme preenchimento nas abas do contrato.

-   [Aba Identificação](#)
-   [Aba Tabelas](#)
-   [Aba Faturamento](#)
-   [Aba Integrações](#)
-   [Aba Tributos e Valores](#)
-   [Aba Informações Adicionais](#)

##### Cabeçalho:

-   Produto: corresponde ao campo *Produto/Serviço* informado na aba Identificação do item do contrato.

-   Unidade: corresponde ao campo *Unidade* informado na aba Identificação do item do contrato.

-   Quantidade: corresponde ao campo *Quantidade* informado na aba Identificação do item do contrato.

-   Preço Unitário: corresponde ao campo *Valor* informado na aba Identificação do item do contrato.




##### Tabelas de Classificação

Os campos são preenchidos conforme a seção *Tabela de Faturamento* da aba Tabelas do item do contrato. Caso não estejam preenchidos, serão considerados os campos da mesma seção na aba Tabelas do contrato.

-   CodTb1Fat

-   CodTb2Fat

-   CodTb3Fat

-   CodTb4Fat

-   CodTb5Fat


##### Tabelas de Faturamento (Opcional)

Os campos são preenchidos conforme a seção *Tabela de Classificação* da aba Tabelas do item do contrato. Caso não estejam preenchidos, serão considerados os dados da seção *Tabela de Faturamento* da aba Tabelas do contrato.

-   CodTb1Opcional

-   CodTb2Opcional

-   CodTb3Opcional

-   CodTb4Opcional

-   CodTb5Opcional


##### Funcionários

Preenchidos conforme a seção *Funcionários* da aba Tabelas do contrato.

-   CodVen1

-   Comissão (relacionada aos códigos de vendedor)

-   Representante: campo *Representante* informado na aba Tabelas do contrato.

-   Comissão Representante: campo *Comissão Representante* informado na aba Tabelas do contrato.


> Os campos abaixo podem ser informados na medição. Caso estejam preenchidos na medição, esses valores terão prioridade sobre os informados no item do contrato.

-   Código do Município

-   Código da UF (Unidade Federativa)

-   Código de Serviço


##### Contábil:

-   Centro de Custo: campo informado na aba Contábil/Fiscal do item do contrato. Se não preenchido, será considerado o valor da aba Contábil/Fiscal do contrato.

-   Departamento: campo informado na aba Contábil/Fiscal do item do contrato. Se não preenchido, será considerado o valor da aba Contábil/Fiscal do contrato.


##### Fiscal:

-   Cód. Natureza de Operação: campo *Natureza de Operação* informado na aba Contábil/Fiscal do item do contrato. Caso não preenchido, será considerado o valor da aba Contábil/Fiscal do contrato.


##### Valores:

-   Desconto: corresponde ao campo *Desconto* informado na aba Identificação do item do contrato, somado ao *Valor Abatimento* da parcela.

-   Despesa: corresponde ao campo *Despesa* informado na aba Identificação do item do contrato, somado ao *Valor Acréscimo* da parcela.

-   Natureza Orçamentária/Financeira: corresponde ao campo informado na aba Tabelas do item do contrato.


##### Observações:

-   Histórico: O histórico varia conforme a quantidade de itens ou medições envolvidas.


**No Contrato Periódico:** O histórico do item do movimento é obtido diretamente do **item do contrato** correspondente.

**No Contrato por Medição**

Quando o parâmentro **Faturar item separadamente** está como **Sim**: O histórico do item movimento é obtido diretamente do **item do contrato**.

Quando o parâmentro **Faturar item separadamente** está como **Não**: 

-   Se for um único item (ou medição), o histórico é buscado no **item do contrato**.
-   Já para múltiplos itens ou medições, prioriza-se o **histórico da medição**; caso não haja, utiliza-se o **histórico do item**.

##### Campo Livre:

Corresponde ao campo *Campo Livre 1* informado na aba Adicionais do item do contrato. É truncado em 15 caracteres.

 Agrupamento de itens ao faturar

Como regra geral, ao faturar um contrato com múltiplos itens/parcelas, o sistema gerará um único movimento por contrato.

Quando um contrato tem várias parcelas vencendo no mesmo dia, sejam elas do mesmo item ou de itens diferentes, e pertencentes ao mesmo contrato , **as parcelas podem ser agrupadas em um único movimento**.

Para que esse agrupamento aconteça, é **essencial que todos** os campos a seguir sejam idênticos entre os itens do contrato:

-   Cliente Destino do Item
-   Condição de Pagamento do Item
-   Código da Filial
-   Código do Local de Estoque
-   Natureza Fiscal (Movimento)
-   Código do Município do Item

Se houver divergência em qualquer um desses campos entre os itens, eles não serão agrupados. Em vez disso, serão gerados como movimentos separados ou agrupados apenas com outros itens que compartilhem os mesmos valores.



Para atender à necessidade de faturar itens separadamente, pode-se utilizar o parâmetro '**Faturar item separadamente**' no item do contrato. Quando este campo estiver habilitado, os itens não serão agrupados no faturamento.

Importante

 Tipo de Movimento parametrizado para conter os campos

Quando o Tipo de Movimento estiver parametrizado para conter os campos tanto no movimento quanto no item de movimento, será aplicada a mesma hierarquia descrita anteriormente, replicando os valores para os respectivos campos de movimento e item de movimento.

> **Importante:** Não é realizado mapeamento *De/Para* entre:

-   Contrato e Movimento

-   Item de Contrato e Item de Movimento



Exemplo:

Campo parametrizado para existir no movimento e no item de movimento: → Tabela de Classificação

-   Se a informação for preenchida no item do contrato, será replicada tanto no movimento quanto no item de movimento.

-   Se a informação for preenchida no contrato, será replicada tanto no movimento quanto no item de movimento.


 Rateio

O uso do rateio no faturamento depende da parametrização do Tipo de Movimento.

-   O rateio somente será considerado no faturamento se o parâmetro "Rateio C.Custo - Departamento" do Tipo de Movimento estiver configurado como:

    -   "Usa"

    -   ou "Usa Obrigatoriamente",
        tanto no rateio do movimento quanto no rateio do item.

-   Caso contrário, se o parâmetro "Usar Rateio por Centro de Custo" estiver configurado como "Não Usa", o rateio não será considerado no faturamento para esses Tipos de Movimento.


 Histórico do Contrato e Item do Contrato

O envio do Histórico do Contrato e do Item do Contrato pode ser parametrizado por meio da seguinte rota:

-   | 04.05 | Contratos > Campos Opcionais 2/2 |


 Atualização de Informações no Faturamento

Ao final do processo de faturamento, são atualizadas as seguintes informações:

-   Valor Faturado do Contrato
-   Status de Faturamento do:
    -   Contrato
    -   Item do Contrato
    -   Parcela

 Parametrização da Data de Vencimento da Parcela

A Data de Vencimento da Parcela será copiada para o campo correspondente definido no parâmetro:

-   "Copiar data de venc./medição p/ mov"


Esse parâmetro está disponível na Etapa 6 da configuração dos Parâmetros do Contrato.

Restrições de edição de campos

Quando houver movimentos com status Faturado ou Parcialmente Faturado alguns campos do contrato e item do contrato, terão a edição bloqueadas.
Para ver quais são esses campos, [clique aqui](https://tdn.totvs.com/x/iM9eNw).

Processo que possibilita o cancelamento do faturamento das parcelas de um ou mais contratos selecionados, nos modelos:

-   Periódico

-   Medição por Valor

-   Medição por Quantidade

-   Arrendamento Mercantil

* * *

⚙️ **Parâmetros Necessários**

Para a execução do processo, é necessário definir os seguintes parâmetros:

-   Intervalo de faturamento (data inicial e final):
    Ao informar um intervalo, serão excluídos todos os movimentos vinculados às parcelas com status de faturamento "Faturado", cuja data de vencimento esteja dentro do intervalo definido.

-   Cancelar todos os faturamentos do contrato:
    Ao selecionar esta opção, todos os movimentos vinculados a parcelas com status "Faturado" serão excluídos.

    > Esta opção tem prioridade sobre o intervalo de datas. Ou seja, caso o usuário selecione o cancelamento total e informe um intervalo, a opção de cancelamento total prevalecerá, excluindo todos os movimentos vinculados às parcelas.


* * *

**🧾 Funcionamento do Processo**

O processo exclui os movimentos gerados a partir do faturamento, de acordo com o tipo e status:

Tipo de Movimento

Status Excluído

1.1

Pendente

2.1

A Faturar

2.2

Faturado

Além disso, altera o status das parcelas afetadas para "A Faturar", permitindo a geração de novos faturamentos.

* * *

**Observação**

Caso seja parametrizado, na etapa Faturamento do Item do Contrato, um tipo de movimento 2.2, o status do movimento gerado será, por padrão, Faturado.
✅ Com isso, o cancelamento do faturamento das parcelas poderá ser executado com sucesso.

Documentos relacionados

**[🔗 Dados Contrato Origem](https://tdn.totvs.com/display/LRM/Dados+Contrato+Origem)**
