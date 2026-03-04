# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Contabilizar Movimento pelo Custo do Estoque

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022152652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabilizar-Movimento-pelo-Custo-do-Estoque](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022152652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Contabilizar-Movimento-pelo-Custo-do-Estoque)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 15 de julho de 2022 às 17:11

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00min**

**Dúvida**Como realizar a contabilização do movimento de modo que os custos do estoque sejam iguais aos valores da contabilidade gerada?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução**

**Parametrização do Tipo de Movimento**

1.  Acessar o tipo de movimento e na etapa **Contabilidade** verificar como esta definido o parâmetro **Habilita evento Contábil**, se na Natureza, Natureza Inversa ou Tipo de Movimento;
2.  Retirar o evento do local definido no item anterior, ou seja, se na Natureza do Movimento, na Natureza Inversa do Movimento ou no Tipo de Movimento;
3.  Desmarcar o parâmetro **Contabilização Obrigatória**.

**Fórmula do Evento Contábil**

1.  Criar uma fórmula que considere o valor unitário do item conforme controle de custo;
2.  Se não houve conversão de custo por filial, parâmetro **Custo por Filial** desmarcado na etapa **Custos** em **Gestão de Estoque | Definições de Estoque** e desejar contabilizar por filial, utilizar a fórmula: **KQT \* TABITM ('VALORUNITARIO' , 'V') ;**
3.  Se houve conversão de custo por filial, parâmetro **Custo por Filial** marcado na etapa **Custos** em **Gestão de Estoque | Definições de Estoque** e desejar contabilizar por filial, utilizar a fórmula: **KQT \* TABITM ('VALORUNITGERENCIAL’ , 'V') ;**
4.  Se houve conversão de custo por filial, parâmetro **Custo por Filial** marcado na Etapa **Custo** em **Gestão de Estoque - Definições de Estoque** e desejar contabilizar por local de estoque, utilizar a fórmula: **KQT \* TABITM ('VALORUNITARIO’, 'V') ;**

**Observação:** As sugestões de fórmulas não contemplam todas as informações para a composição do custo, ela contempla apenas as informações básicas, considerando o custo que será levado para o estoque.

**Evento Contábil utilizado nas movimentações de Baixa de Estoque**

1.  O item de evento responsável pela contabilização do custo do item de movimento deve ter a fórmula criada anteriormente;
2.  A origem da conta fica a critério do usuário, mas a opção **Aplicar em** deverá ser **Item**, por causa do contexto de execução.

**Procedimento utilizado para Contabilização dos Movimentos**

Após o término do período definido pela empresa/usuário para contabilização de movimentos os processos abaixo devem ser seguidos.

1.  Certificar-se que nenhum movimento anterior a data definida pela empresa ou usuário será incluído ou alterado.
2.  Regerar Saldos e Custos de todos os produtos ou dos produtos desatualizados. É recomendado marcar o parâmetro **Forçar Regeração Total.** Para maiores detalhes **[clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=237373704)**[.](https://tdn.totvs.com/pages/releaseview.action?pageId=237373704)
3.  Fechar o estoque **Data de fechamento do estoque**. Lembrando que a partir deste momento não será mais possível alterar ou incluir movimentação anteriores a esta data. Para maiores detalhes **[clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6659756946711-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-EST-Como-fechar-estoque-?source=search)**.
4.  Criar um filtro que traga todas as movimentações que não foram contabilizadas, dentro do período determinado pela empresa ou usuário, e já esteja anteriores a data de fechamento de estoque.
5.  Selecionar todos os movimentos que deseje contabilizar.
6.  Acesse o menu movimento e clique na opção **Gerar Contabilização** em seguida clique em **Sim.**
7.  Selecione o evento contábil correspondente aos movimentos e clique em ***Ok*.**

**Informações adicionais
**Evitar voltar a Data de Fechamento do estoque, uma vez que a alteração de um movimento anterior a esta data poderá gerar diferença entre os valores contabilizados e os custos do estoque.
