# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Tipo de Faturamento no Item do Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/24005170501783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Faturamento-no-Item-do-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/24005170501783-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Tipo-de-Faturamento-no-Item-do-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 19 de fevereiro de 2025 às 12:15

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/24005170477463)
 Tempo aproximado para leitura: **00:04:00 min
****
Dúvida**Qual a finalidade das opções apresentadas no Tipo de Faturamento do item do Contrato?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Explicação**

O sistema trabalha com 3 Tipos de Faturamento distintos. Sendo eles: **Periódico, Não Periódico, e Medição.**

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24005170479127)
**

Os Itens são a parte principal do Contrato. Estes podem ser apenas de aquisição, venda ou permuta, onde no mesmo contrato se encontram como itens de **Compra** ou de **Venda**. O Tipo dos itens vai depender do campo **Natureza Contrato** preenchido obrigatoriamente na aba Cabeçalho durante a inclusão do Contrato.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24005170480791)

No caso da natureza do Contrato ser **Ambos,** o valor total do contrato será a diferença entre os itens do tipo Compra e os do tipo Venda.

O Tipo de Faturamento influencia diretamente na forma em que ocorrerá o faturamento, pois serão diferentes dependendo do tipo para faturamento informado na identificação do item.

**Tipo de Faturamento: PERIÓDICO**

O Tipo Periódico é utilizado para itens que terão seu faturamento Periódico, ou seja, será **realizado mais de um faturamento**, sendo este definido a partir da Data Início, localizada na aba Condições Gerais do Item. O preenchimento desse campo obrigatório, já para o campo de Data Fim poderá ser informado manualmente pelo usuário ou então será calculado através do número informado no campo 'Qtde. de Faturamentos' localizado na Cabeçalho do item de Contrato.
Essas datas são utilizadas para identificar o Início e o Fim do faturamento do Item e não para identificar sua vigência.

Ao informar que o tipo do Item para o faturamento é Periódico, a opção **Períodos de Faturamento** será habilitada e os campos **Código do Pagamento** **a Prazo** e **Qtde. de Faturamentos** poderão ser editados. Eles definirão o Intervalo de Faturamento.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24005170481815)

**Tipo de Faturamento: NÃO PERIÓDICO**

O Tipo Não Periódico será utilizado para itens em que o Faturamento será realizado **apenas uma única vez**, porém este pode conter um ou vários vencimentos. Utilizando essa opção, será habilitada a aba **Vencimentos** nas Informações Adicionais do Item para edição do vencimento das parcelas.
Se nenhuma informação for preenchida nessa aba o sistema irá considerar a Condição de Pagamento definida na pasta "Condições Gerais" do Item.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24005170483735)

A aba Vencimentos foi criada para os casos em que exista mais de uma data de vencimento para estes itens. As parcelas podem ser geradas através da grid de edição, onde o usuário informa a data de vencimento e o valor de cada parcela ou de forma automática, a partir de uma Data Base e uma condição de pagamento. Assim o valor do item é rateado a partir da data base de acordo com a forma de pagamento informada.
Exemplo de itens Não Periódicos: Treinamento, Inscrição, Serviço de Customização etc.


**Importante**: Quando utilizado a pasta 'Vencimento', as parcelas lançadas serão responsáveis pela geração dos Lançamentos Financeiros ( caso parametrizado para tal ). No entanto, ao preencher essa aba, não será possível a utilização de adiantamento no movimento de destino. Mesmo preenchendo o valor de Adiantamento no movimento, não será gerado lançamento financeiro para o mesmo.

**Tipo de Faturamento: MEDIÇÃO**

Neste Tipo de Faturamento será permitido **faturar o mesmo item várias vezes**, porém os faturamentos das medições serão gerados de forma livre ( pois não é possível definir na inclusão deste item as datas de faturamento, os valores e quantidades para cada faturamento ). Cada Medição pode ter uma data e valores distintos, enquanto o somatório das medidas **não ultrapasse** **o Valor e/ou a Quantidade Total** preenchidos na aba Cabeçalho do Item do Contrato.
Medição então é a parte que será executada em um determinado período, para posteriormente ocorrer o seu faturamento.
É possível definir os tipos de medições, que podem ser: por **Valor,** **Quantidade** ou por **Quantidade e Valor.**

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24005751400727)
**

Utilizando Medição será apresentadas outras duas abas para que o usuário informe as **Previsões de Medição** e as efetivas **Medições** do contrato.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/24005170485399)

As **Medições** inclusas refletem o que realmente será faturado naquele período. A partir das medições é que os faturamentos são feitos, dando origem assim as movimentações do período. As **Previsões de Medição** são opcionais e podem ser inclusas a qualquer momento da vigência do contrato. Elas refletem a previsão do que será medido a cada período do contrato.

**Observação:**

-   Tanto as medições como as previsões de medições devem **respeitar** as quantidades, valores e o período de vigência do contrato.
-   Os aditivos contratuais do item são considerados tanto na inclusão das medições como na inclusão das previsões de medições.
-   Diferente do faturamento Periódico, o faturamento das Medições **NÃO** é feito através do Processos > Faturamento Contrato. Seu **correto faturamento** é executado ao selecionar no contrato a opção **Anexos > Visualizar Medições do Contrato > Processos > Faturamento Medição.**

Para mais informações dos Tipos de Faturamento descritos acima, e outras opções que podem aparecer no Contrato como por exemplo: Arrendamento Mercantil, Aditivos Contratuais, Reajuste de Itens de Contrato, etc.., a documentação abaixo possui informações mais detalhadas sobre cada processo:

**[Itens de Contrato](https://tdn.totvs.com/display/public/LRM/Itens+de+Contrato)**
