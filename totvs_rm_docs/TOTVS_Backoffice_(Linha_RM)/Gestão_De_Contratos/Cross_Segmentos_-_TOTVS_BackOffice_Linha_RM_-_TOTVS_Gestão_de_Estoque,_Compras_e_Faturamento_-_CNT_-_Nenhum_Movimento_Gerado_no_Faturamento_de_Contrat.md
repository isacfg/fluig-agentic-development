# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Nenhum Movimento Gerado no Faturamento de Contrato

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345227-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Nenhum-Movimento-Gerado-no-Faturamento-de-Contrato](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345227-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Nenhum-Movimento-Gerado-no-Faturamento-de-Contrato)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 16:43

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23377744477335)**Tempo aproximado para leitura: **00:04:00min**

**Ocorrência
**Ao tentar realizar o processo de faturamento de contrato, nenhum movimento é gerado.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão - Todas as versões.

**Causa**  

1.  O Status do Item de Contrato não permite faturamento ou o item já foi totalmente faturado;
2.  O período de faturamento é menor que períodos já faturados;
3.  O item de contrato não permite o faturamento com lançamentos em aberto para movimentos gerados para aquele item;
4.  Campo Preço Faturamento incorreto;
5.  Consistência do campo N.F. Acompanha Boleto;
6.  Tipo de Movimento informado incorretamente;
7.  Faturamento de item no período de carência;
8.  Tipo de item incorreto entre lote e item de contrato;
9.  Filtros obrigatórios e opcionais no lote de faturamento;
10.  Mensagens de consistências no(s) movimento (s) a ser(em) criado(s);
11.  O item incluído é do tipo Produto ou Serviço.
12.  O Tipo de Faturamento do item é Por Medição, e o faturamento do Contrato está sendo feito pelo Processo > Faturar Contrato;

**Solução**

1.  Verifique se o status do item permite faturamento. Para isso clique na informação preenchida no campo Código do Status e verifique se está marcada a opção **Faturar.**
    1.2   Se o Status Faturamento for **Faturado** indica que o item já foi totalmente faturado e nesse caso **não há mais o que faturar**;
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378179738263)



2.  Se o Status de Faturamento estiver como **Parcialmente Faturado** deve-se verificar se já existem movimentos faturados para o mesmo item em períodos posteriores ao período de faturamento;
    Verifique o Anexo > Visualizar Faturamentos do Contrato.
3.  Verifique se o item de contrato já gerou movimentos anteriormente e se os lançamentos desses movimentos estão em aberto. Caso exista a necessidade de se faturar nessa situação a opção **Fatura Com Notas em Atraso** deve ser marcada no cabeçalho do item do contrato:
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378172833047)



4.  O campo **Preço de Faturamento** deve ser **maior que 0,00** (zero);

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378179785111)



5.  Se o campo **N.F. Acompanha Boleto** estiver marcado no item, ele deverá ser marcado também no lote de faturamento do contrato;
    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378179792407)



6.  Verifique se o tipo de movimento parametrizado no item de contrato é o mesmo informado durante a tentativa de faturamento, seja pela **Grid** ou pelo lote de faturamento do contrato;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378172872215)



7.  Verificar no item de contrato na pasta datas os campos **Dias de Carência e Carência Temporária**;
8.  Verificar se o tipo de item para faturamento **(Medição, Periódico, Não Periódico)** está consistente entre item e lote de faturamento;

    ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378172882967)



9.  Verificar se os itens que se deseja faturar se adéquam aos filtros informados no lote de faturamento, todas as informações devem estar consistentes;
10.  Verificar as possíveis mensagens de erro no **Log** de faturamento do lote.
11.  O movimento está parametrizado para aceitar itens **apenas** do tipo **Produto ou Serviço**. Exemplo: o item do contrato é um Serviço mas nos parâmetros do tipo de movimento, etapa Item - Identificação 1/2 está parametrizado para o tipo Produto. Deve-se alterar para o tipo **Ambos** ou **utilizar outro movimento que aceite o mesmo tipo**.
     Caminho: Ambiente > Parâmetros > Gestão de Estoque, Compras e Faturamento > Selecione a classificação do movimento envolvido no processo > Etapa > Item - Identificação 1/2 e verifique a opção **Tipo dos Itens**:

     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378179826711)



12.  Se o Tipo de Faturamento é por **Medição**, o local correto para realizar o faturamento é acessando o Anexo > Visualizar Medições do Contrato > Selecione o símbolo
     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378172896663)
      > **Faturamento Medição**:

     ![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23378179841815)
