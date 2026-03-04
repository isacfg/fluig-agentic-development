# 05. Contratos 2.0 | Conversor contrato 1.0 para 2.0

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/05.+Contratos+2.0+%7C+Conversor+contrato+1.0+para+2.0](https://tdn.totvs.com/display/public/LRM/05.+Contratos+2.0+%7C+Conversor+contrato+1.0+para+2.0)
> **Domínio:** TDN (TOTVS Developer Network)

---

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/928960449/Header%20%286%29.png?version=1&modificationDate=1745948021673&api=v2)

#### O conversor tem como objetivo acelerar a transferência dos contratos cadastrados na versão 1.0 para a versão 2.0. Ambos os contratos utilizam as mesmas tabelas no banco de dados; desta forma, o conversor faz o ajuste dos campos que mudaram de localização e finalidade, além de solicitar os novos campos necessários para a geração das parcelas.


 Pré-requisitos

-   Entender o conceito dos novos campos do Contrato 2.0 para preenchimento na conversão (Tipo de Faturamento — Medição Valor e Quantidade, Periodicidade, Dia de Vencimento e Número de Parcelas).

-   Realizar simulações em base de dados de homologação com diferentes tipos de contratos para entendimento do processo.

-   Realizar backup antes de iniciar a conversão, pois, após convertidos, os contratos só serão visualizados na versão 2.0.

-   Caso utilize previsões financeiras geradas pelo processo de contratos 1.0, estas deverão ser excluídas. Isso se faz necessário porque a regra do processo foi totalmente revisitada, não sendo possível aproveitar a anterior de forma satisfatória. O processo de exclusão de previsão financeira pode ser realizado para “n” contratos simultaneamente.


 Regras

**Apresentação dos contratos:**

A apresentação dos contratos a serem convertidos será por item do contrato. Ou seja, se o contrato tiver dois itens, serão apresentadas duas linhas para esse contrato, uma para cada item. Abaixo, alguns exemplos, sendo a primeira coluna o ID do contrato, a segunda o Código do Contrato e a terceira o NSeq. do item do contrato.

#### **
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/928960449/image-2025-3-18_8-30-51.png?version=1&modificationDate=1743527275790&api=v2)


**

 Código do Contrato

Com a mudança de tecnologia, foi necessário criar um novo campo para parametrização da máscara dos Contratos 2.0, conforme documentação: **Máscara e Expressões Regulares**.

Caso a nova regra de máscara necessite de adaptação, será necessário ajustar o código do contrato após convertê-lo. O ajuste deverá ser realizado na tela de edição do contrato e pode ser feito gradativamente.

Para auxiliar nessa mudança, foi criada a coluna **Código Contrato 1.0**, que armazenará o código do contrato conforme registrado na versão 1.0, permitindo que o usuário tenha uma referência direta do código antigo. Essa coluna poderá ser visualizada na visão de contratos; basta torná-la visível em **Gerenciar Tabela**.

 Parcelas

Com a criação do novo conceito de parcelas nos Contratos 2.0, foi necessário definir algumas regras para a geração automática das parcelas dos contratos convertidos.

As parcelas poderão receber dois status na conversão:

1.  **A Faturar**: Status inicial da parcela, antes da execução de processos como Faturar Contrato, Gerar Previsão e Gerar Medição.

2.  **Faturada**: Quando for gerado o movimento pelo processo Faturar Contrato e a parcela estiver inclusa nos parâmetros definidos.

3.  **Inativa**: Se o contrato já foi faturado, mas o número de faturamentos é maior que o de movimentos, é gerada a parcela inativa com valor R$ 0,00.


**Para Contratos Periódicos:**

As parcelas serão geradas conforme o valor do campo  **Qtde. de Faturamentos** do item do contrato 1.0.

As parcelas geradas com o status **Faturada** corresponderão ao número de movimentos faturados do item do contrato. O valor da parcela seguirá a seguinte regra:

1.  Retorna o campo **ValorBrutoItemOrig**, se preenchido. Caso contrário, realiza o seguinte cálculo: `ValorLiquido - ValorDesc + ValorDesp` do item do movimento.


As parcelas com o status **A Faturar** corresponderão à diferença entre o **Número de Parcelas** e a quantidade de parcelas com status **Faturada**. O valor da parcela seguirá a seguinte regra:

1.  `Valor Parcela = (Quantidade + Aditivo Quantidade) * (Valor + Aditivo Valor) + Despesa - Desconto` do item do contrato.


O campo **Valor Total** do item do contrato será o somatório do valor de todas as parcelas.

O campo **Valor Contrato** será o somatório do valor de todos os itens.

Os valores dos contratos após a conversão poderão apresentar diferenças entre as versões 1.0 e 2.0. Por isso, é imprescindível realizar a validação após a conversão.

Verifique os campos **Preço**, **Quantidade**, **Preço de Faturamento**, **Qtde de faturamentos** se estão correspondendo ao **Valor Total** do contrato.



**Para Contratos de Medição:**

Nos contratos de medição, não existia a tratativa de **Qtde. de Faturamentos**, pois as medições eram feitas conforme a necessidade. Após a geração das parcelas, o **Número de Parcelas** será preenchido conforme as parcelas geradas. Detalhes abaixo:

As parcelas com status **Faturada** corresponderão ao número de movimentos faturados do item. O valor da parcela seguirá a mesma regra de cálculo dos contratos periódicos.

Para o saldo restante não medido, será gerada uma única parcela com status **A Faturar**.
**Exemplo:** O item possui 3 medições, sendo que 1 já foi faturada. Serão geradas 3 parcelas, e o valor restante em uma única.

Se o valor restante for uma dízima insignificante, nenhuma parcela será gerada.
**Exemplo:** Se o saldo restante for de 0,0008 e o parâmetro de casas decimais for 2, não será gerada a parcela. Se for 3 e o sistema estiver configurado para arredondamento, será gerada uma parcela de 0,001.

Observação

Ao converter o contrato, é importante observar a quantidade:

1.  Se o item tiver quantidade unitária, converte-se para **Medição de Valor**.

2.  Se tiver mais de uma, para **Medição de Quantidade**.


 Aditivo

Os aditivos convertidos para o contrato 2.0 serão apresentados no menu Histórico de Aditivos.

No campo Memória de Cálculo, constará a mensagem:
Atenção: Aditivo realizado no Contrato 1.0, não poderá ser cancelado. 

Sempre será apresentado o valor aditivado, desconsiderando o campo percentual.

Caso o aditivo seja um aditivo de prorrogação, serão geradas parcelas adicionais no Contrato convertido até a data limite do prazo indicado no aditivo. Caso a periodicidade escolhida seja Semanal ou Quinzenal o contrato não será convertido. 

**Aditivo de Prorrogação**

Geração de Parcelas Adicionais

Quando um aditivo de prorrogação é adicionado a um contrato, ele gera **parcelas adicionais** até o limite do novo prazo estabelecido no aditivo.

**Importante:**

-   Aditivos de prorrogação **não são aplicáveis** a contratos com periodicidade de faturamento **semanal ou quinzenal**. Nestes casos, uma mensagem de erro será exibida.
-   O valor do aditivo de prorrogação sempre terá o efeito **"Aumenta"**, independentemente de estar marcado como **"Diminui"** no sistema.

Cálculo das Parcelas com Aditivo de Prorrogação

Aditivos de prorrogação resultarão em novas parcelas a prazo, cujo cálculo é baseado na soma do **valor da parcela original** com o **valor do aditivo (caso seja informado)**.

-   As **parcelas originais** do contrato permanecem inalteradas, a menos que já tenham sido faturadas.

-   Se uma parcela original já estiver **faturada**, o valor considerado para essa parcela será o **valor registrado no movimento** de faturamento, e não o valor original do contrato.


**
Exemplo Prático**

Considere um contrato com as seguintes características:

-   **Quantidade de Faturamentos:** 12

-   **Valor da Parcela Original:** R$ 500,00


Agora, vamos aplicar os aditivos de prorrogação:

1.  **Primeiro Aditivo de Prorrogação:**

    -   **Duração:** 12 meses

    -   **Valor:** R$ 1.000,00

    -   **Resultado:** O contrato será convertido para incluir as 12 parcelas originais de R$ 500,00 e mais 12 parcelas adicionais de **R$ 1.500,00** (R$ 500,00 + R$ 1.000,00).

2.  **Segundo Aditivo de Prorrogação:**

    -   **Valor:** R$ 700,00

    -   **Resultado:** As próximas parcelas seriam geradas com o valor de **R$ 2.200,00** (R$ 1.500,00 da parcela anterior com aditivo + R$ 700,00 do novo aditivo).


Considerações Adicionais

-   Os aditivos de prorrogação são processados e aplicados na ordem cronológica de suas **datas de prorrogação**.

-   O valor de cada aditivo de prorrogação com valor é **acumulado** aos valores dos aditivos anteriores, impactando progressivamente o valor das novas parcelas.

-   O campo **"Data Fim Vigência (aditivo)"** no módulo Contrato 2.0 será automaticamente preenchido com a data de término informada no **último aditivo de prazo** registrado para o contrato.



IMPORTANTE

Aditivos convertidos não podem ser cancelados. Ao tentar, o sistema apresentará mensagem impeditiva.

 Reajuste

Os reajustes convertidos serão apresentados no menu **Histórico de Reajustes**.

No histórico:

1.  **Contrato 1.0**: O reajuste é aplicado no valor unitário do produto ou serviço.

2.  **Contrato 2.0**: O reajuste é aplicado no valor total da parcela e, consequentemente, no valor total do item.


**Exemplo:**

1.  1.  Contrato 1.0: Item de R$ 100 com quantidade 2, reajuste de 10% → R$ 100 × 2 = R$ 200 → R$ 110 × 2 = R$ 220.

    2.  Contrato 2.0: Valor total R$ 200 × 3 parcelas = R$ 600 → após reajuste de 10%: R$ 220 × 3 = R$ 660.


No campo **Memória de Cálculo**, constará a mensagem:
Atenção: Reajuste realizado no Contrato 1.0, não poderá ser cancelado.

IMPORTANTE

Reajustes convertidos não podem ser cancelados. Tentativas serão impedidas pelo sistema

 Execução do processo

Deverá ser liberado o acesso ao processo no perfil do usuário: **Contratos / Gestão de Contratos / Converter contrato 1.0 para 2.0**.

O processo está disponível em: **Contratos | Manutenção de Contrato | Processos | Conversor contrato 1.0 para 2.0.**

A execução do processo pode ser realizada para um ou mais contratos simultaneamente.

Contratos que não possuam itens não são listados na tela de processo de conversão. Tais contratos devem ser excluídos.

Ao acessar o processo de conversão de contrato, na tela do processo, são carregados alguns campos do contrato antigo (1.0). Estes campos possuem finalidade informativa e não podem ser alterados. São apresentadas, também, colunas que devem ser preenchidas para a correta conversão do contrato.

**Colunas do contrato antigo (1.0) — Não podem ser alteradas:**

-   **Id. Contrato:** Identificador do contrato.

-   **Código:** Código do contrato.

-   **NSeq. Item:** Número sequencial do item no contrato.

-   **Código do pagamento a prazo:** Aba *Cabeçalho*, do item de contrato.

-   **Código da condição de pagamento Pagamento:** Aba *Condições Gerais*, do item de contrato.

-   **Produto/Serviço:** Produto ou serviço do item de contrato.

-   **Natureza:** Informa se o contrato é de *Compra* ou *Venda* (opção *Ambos* foi descontinuada).


**Colunas do contrato novo (2.0) — Devem ser avaliadas e/ou preenchidas:**

-   **Tipo Faturamento:** Informar se o contrato será *Periódico*, *Medição valor* ou *Medição quantidade*.

-   **Periodicidade:** Informar a periodicidade do contrato: *Semanal*, *Quinzenal*, *Mensal*, *Semestral* ou *Anual*.

-   **Dia Vencimento:** Informar o dia do vencimento das parcelas.

-   **Dia Vencimento (2):** Informar o segundo dia de vencimento das parcelas, quando a periodicidade for *Quinzenal*.


**Preenchimento padrão (default):**

-   **Tipo Faturamento:** Sempre que o contrato antigo for do tipo *Periódico* ou *Não periódico*, o valor padrão será *Periódico*. Quando for do tipo *Medição*, o campo deverá ser preenchido manualmente com o tipo da medição: *Medição valor* ou *Medição* *quantidade*.

-   **Periodicidade:** Campo novo — deverá ser preenchido manualmente.

-   **Dia Vencimento:** Será preenchido com o campo *Dia do Faturamento*, que está no item *Condições Gerais*. Pode ser alterado, caso desejado.

-   **Dia Vencimento (2):** Campo novo — deverá ser preenchido manualmente.


**Consistência dos campos:**

-   **Tipo Faturamento:** Campo só pode ser alterado quando vier vazio, ou seja, quando o contrato de origem for de *Medição*.

-   **Dia Vencimento:** Campo deve ser preenchido respeitando a *Periodicidade*. Quando a periodicidade for *Semanal*, deve ser preenchido com valores de 1 a 6, sendo: 1 — Domingo, 2 — Segunda, 3 — Terça, 4 — Quarta, 5 — Quinta, 6 — Sexta e 7 — Sábado. Para as demais periodicidades, deve ser preenchido com valores de 1 a 31.

-   **Dia Vencimento (2):** Campo só pode ser preenchido quando a periodicidade for *Quinzenal*. Deve ser preenchido com valor maior que o *Dia Vencimento*.


Ao editar um campo, é possível aplicar a alteração para todos os demais registros daquela coluna. O processo permite selecionar um ou mais registros, ou aplicar a todos os registros da tela.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/928960449/image-2025-2-20_13-54-52.png?version=1&modificationDate=1743527275927&api=v2)



Para isso, clique na célula desejada, edite o valor, clique em outra célula (para que a alteração seja efetivada) e, em seguida, clique com o botão direito sobre a célula que deseja copiar e escolha o processo referente à coluna da célula selecionada que deseja aplicar a todos.

**Consistência Aplicar a Todos:**

-   **Aplicar a todos: Periodicidade:** Desde que preenchido, é aplicado a todos os registros definidos.

-   **Aplicar a todos: Natureza:** Desde que preenchido, só é aplicado a contratos que eram *Ambos*. Não é aplicado para contratos que eram de *Compra* ou *Venda*.

-   **Aplicar a todos: Tipo Faturamento:** Desde que preenchido, só é aplicado a contratos que eram *Medição*. Não é aplicado para contratos que eram do tipo *Não Periódico* ou *Periódico*.

-   **Aplicar a todos: Dia Vencimento:** Desde que preenchido, só é aplicado respeitando a periodicidade. Para periodicidade *Semanal*, o valor deve ser de 1 a 6; para as demais periodicidades, o valor deve ser de 1 a 31.

-   **Aplicar a todos: Dia Vencimento (2):** Desde que preenchido, só é aplicado caso a periodicidade seja *Quinzenal* e o valor seja maior que o *Dia Vencimento*.


**Importante:** Ao executar o processo de *Aplicar a Todos*, o valor só será aplicado às linhas que atenderem às consistências da coluna, conforme citadas acima. Caso contrário, o valor não será aplicado e o valor antigo será mantido.

**Consistência Executar:**

Ao executar o processo, se existir algum campo que não foi preenchido ou foi preenchido de forma incorreta, será apresentado um log informando os campos que devem ser preenchidos ou ajustados. O log é particionado em 30 registros. Dessa forma, caso esteja executando o processo para mais de 30 registros e todos apresentem falhas de preenchimento, será exibido o log somente para os 30 primeiros.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/928960449/image-2025-2-20_13-56-46.png?version=1&modificationDate=1743527275887&api=v2)



Atenção

O conversor é um facilitador no processo de transferência das informações, mas é necessário uma validação rigorosa dos valores convertidos.
