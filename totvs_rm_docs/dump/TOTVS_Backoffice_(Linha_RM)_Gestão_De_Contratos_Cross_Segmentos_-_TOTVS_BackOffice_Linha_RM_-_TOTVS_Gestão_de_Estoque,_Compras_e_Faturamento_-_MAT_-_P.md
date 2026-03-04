# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Previsão Financeira de Contrato por Medição

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039856974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Previs%C3%A3o-Financeira-de-Contrato-por-Medi%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039856974-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Previs%C3%A3o-Financeira-de-Contrato-por-Medi%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 15:34

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**Como gerar Previsão Financeira de Contrato de Medição?

**Ambiente**Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões. 

**Solução
**Tem por finalidade incluir previsão financeira para itens de contrato do tipo “Medição” e vínculo entre os dados financeiros e a medição feita no contrato.

O processo de inclusão de itens de contrato continuará sendo feito como de costume, onde o usuário deverá editar o item de contrato e fazer o processo a seguir:

**1\. Inclusão de Previsões:**
No item de contrato, acessar aba **Previsões de Medições** e preencher:

\- **Tipo Previsão de Medição:** escolher uma das opções disponíveis, Por Quantidade e Valor, Por Quantidade ou Por Valor.
\- **Condição de Pagamento:** informar condição de pagamento a ser considerada para geração das previsões financeiras.
\- Clicar em **Gerar Parcelas** para que as previsões sejam incluídas na visão, conforme exemplo abaixo:

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407504288279/mceclip1.png)

**2\. Inclusão de Previsões Financeiras:**
Acessar visão do contrato e clicar no menu Processos > Inclusão Previsão Financeira:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360053801993/mceclip0.png)

 Ao editar o item de contrato, aba Identificação o campo **Status Previsão** indicará que o item gerou previsão e poderá consultar os respectivos lançamentos, acessando a aba Informações Adicionais | Lançamentos Financeiros:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407499022615/mceclip2.png)

**Importante:**

\- Os lançamentos financeiros de previsão dos itens de contrato de medição serão gerados à partir das previsões cadastradas.
\- As datas e valores informados serão consistidos não podendo ser superior à data de vigência do item de contrato (levando em consideração a prorrogação através de aditivo contratual). Se a previsão for por quantidade esta não pode ultrapassar a quantidade total do item de contrato menos a quantidade que foi medida. Se a previsão for por valor este não pode ultrapassar ao valor total do contrato menos valor já medido (levando em consideração o aditivo contratual).

**3\. Inclusão de Medições:**

A medição pode ser incluída antes ou depois da previsão, a critério do usuário.

No item de contrato, acessar a aba **Medição** e preencher:
\- **Tipo Medição:** escolher uma das opções disponíveis, Por Quantidade e Valor, Por Quantidade ou Por Valor. 
\- Preencher os dados da medição conforme exemplo abaixo:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407504222999/mceclip0.png)

**4\. Vincular Medição à Previsão Financeira:**

\- Para vincular medição à previsão, acesse a aba **Medições**, selecione a medição desejada e clique no ícone **Previsões de Medições**, onde será apresentada janela Vinculação de Medições.
\- Selecione a previsão que será vinculada em **Previsões Não Vinculadas** e clique no ícone **[
![clip_image018](http://lh6.ggpht.com/_G7KXZLoZDsY/TKoxB7hcbsI/AAAAAAAABlo/-qHCi58iJZM/clip_image018_thumb.jpg?imgmax=800)
](http://lh5.ggpht.com/_G7KXZLoZDsY/TKoxBbzBFSI/AAAAAAAABlk/XVdttAhjSuE/s1600-h/clip_image018%5B3%5D.jpg)** . 
A informação de previsão será apresentada em **Previsões Vinculadas**.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407504591127/mceclip3.png)

**Importante:**

\- Previsões vinculadas à medições não podem ser alteradas. 
\- Para o replanejamento financeiro, será necessário excluir os lançamentos financeiros de previsão.
\- Não é permitido que uma medição seja vinculada a mais de uma previsão de medição. Da mesma forma, não é permitido que uma previsão de medição seja vinculada a mais de uma medição.
\- As previsões só poderão ser vinculadas as medições depois que os lançamentos de previsão forem gerados.
\- Previsões de medição cujas medições já foram faturadas não poderão ser vinculadas a outras medições e nem excluídas.
\- Depois de feito vínculo entre medição e previsão, ao faturar medição, o lançamento financeiro de previsão vinculado ao mesmo será excluído, sendo obedecida parametrização do tipo de movimento para o qual foi gerado faturamento de previsão.
