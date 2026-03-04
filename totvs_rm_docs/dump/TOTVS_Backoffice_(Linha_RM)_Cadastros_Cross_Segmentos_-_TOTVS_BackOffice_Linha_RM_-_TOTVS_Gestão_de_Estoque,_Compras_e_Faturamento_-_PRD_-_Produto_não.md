# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Produto não é exibido na Ficha Física Financeira

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063327113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Produto-n%C3%A3o-%C3%A9-exibido-na-Ficha-F%C3%ADsica-Financeira](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360063327113-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Produto-n%C3%A3o-%C3%A9-exibido-na-Ficha-F%C3%ADsica-Financeira)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 9 de abril de 2025 às 14:35

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:04:00 min**

**Ocorrência
**Ao gerar o relatório padrão de **Ficha Física Financeira**, não é exibida **Movimentação** para o **produto**.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causas**

1.   O produto está cadastrado com o tipo **Serviço** e o sistema não esta parametrizado para consistir saldo de serviço;
2.  O **tipo de movimento** utilizado para este produto não esta parametrizado para **Afetar Estoque**;
3.  A Filial da movimentação esta definido no cadastro do produto para ser **Não Estocável**;
4.  O Campo **TITMMOV.CODFILIAL e TITMMOV.CODLOC** não estão preenchidos no movimento do produto;
5.  A data do movimento utilizado por este produto está fora do período utilizado na Ficha Física Financeira;
6.  A data do movimento utilizado por este produto esta anterior a **Data de Fechamento** **de Estoque** e a **Regeração de Saldos** **e Custos** não considerou este movimento;
7.  O movimento esta com status **faturado/recebido** e o parâmetro **Afetar Estoque após faturado/recebido** esta desmarcado;

**Solução**

1.   Definir qual deve ser o Tipo do Produto, se **Produto** **ou** **Serviço**. Se for o segundo caso deverá ser marcado o parâmetro consiste saldo de serviço na etapa de **Custos** dos parâmetros de **Gestão de Estoque**;
2.  Parametrizar o tipo de movimento para afetar estoque se for necessário.
3.  Acessar o cadastro de produto e definir como **Estocável** na aba **Informações por Filial** se necessário.
4.  Se os campos TITMMOV.CODFILIAL e TITMMOV.CODLOC não estiverem preenchidos, regrave o movimento para que os campos sejam preenchidos.
5.  Verifique se a Data do Movimento **(TMOV.DATAMOVIMENTO)** esta dentro do intervalo da Ficha Física Financeira.
6.  Alterar a data de fechamento do estoque para ser anterior a data do movimento, regerar saldos e custos marcando a opção **Forçar Regeração Total** e emita a Ficha Física Financeira novamente.
7.  Se realmente o movimento estiver com status faturado/recebido ele não irá aparecer na Ficha Física Financeira a não ser que o parâmetro Afetar Estoque após faturado/recebido esteja marcado.

**Informações Adicionais
**No caso de alterar a Data de Fechamento Estoque para posterior regeração de saldos e custo vale lembrar que a regeração com a opção Forçar Regeração Total marcada irá refazer todas as movimentações e calcular o Custo Unitário dos movimentos de entrada, e custo médio para os movimentos de saída baseado na parametrização em que a regeração esta sendo feita, ou seja, caso alguma parametrização tenha sido incluída/alterada o sistema poderá apresentar saldos e custos divergentes da última regeração, pois ele irá refazer os cálculos com a parametrização atual. Para entender o cálculo do custo médio [clique aqui.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016510112-RM-EST-Como-o-custo-m%C3%A9dio-%C3%A9-calculado-)
