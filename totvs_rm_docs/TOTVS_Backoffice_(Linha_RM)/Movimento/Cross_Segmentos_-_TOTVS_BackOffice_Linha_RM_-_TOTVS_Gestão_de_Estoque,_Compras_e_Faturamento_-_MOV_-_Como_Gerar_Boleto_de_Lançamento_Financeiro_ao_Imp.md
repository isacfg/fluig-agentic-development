# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Gerar Boleto de Lançamento Financeiro ao Imprimir Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008995022-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Boleto-de-Lan%C3%A7amento-Financeiro-ao-Imprimir-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/1500008995022-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Gerar-Boleto-de-Lan%C3%A7amento-Financeiro-ao-Imprimir-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 28 de novembro de 2022 às 10:27

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
** Tempo aproximado para leitura: **00:04:00 min

****Dúvida**Como gerar o boleto para pagamento do título financeiro originado na inclusão de movimento no módulo Gestão de Estoque, Compras e Faturamento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Para impressão de boleto ao incluir o movimento, temos as seguintes premissas específicas:

1\. Parametrização do tipo de movimento:

-   Etapa **Mov - Impressão 1/2**, campo Ação ao Cadastrar Movimento = Imprime Manual Com Edição;
-   Etapa **Mov - Impressão 2/2**, flag Imprimir Boleto marcada;
-   Etapa **Fin - Faturamento 2/6**, campo Conta Caixa com opção diferente de Não Usar;
-   Etapa **Fin - Faturamento 2/6**, campo Gerar Lançamentos = A Receber.

2\. O módulo **Gestão Financeira** deve estar parametrizado previamente para geração de boleto. Para acessar a documentação completa [clique aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=4813062).

3\. Enviar a **Remessa de Cobrança** pelo menos uma vez, diretamente pelo TOTVS Gestão Financeira.

![Imagem](https://totvssuporte.zendesk.com/attachments/token/yoxh6zY1ZQnWOs9lizr5k4uew/?name=inline1134010605.png)

4\. Deverá utilizar na inclusão do movimento, aba **Integrações | Financeira** uma Conta Caixa associada ao banco com layout bancário preenchido com as informações do retorno de cobrança.

Após salvar o movimento, deverá ir em **Processos |** **Imprimir Movimentos**, selecionar o relatório, marcar a opção Destino = **Impressão** e clicar em OK.

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013901301/mceclip1.png)

O boleto será gerado automaticamente e poderá ser acessado na visão de **Lançamento Financeiro | Anexos | Boleto.** 

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500013618202/mceclip0.png)

Após a impressão, não será possível alterar nenhum campo do movimento, que apresentará mensagem **Existem boletos emitidos para os seus lançamentos***.*

**Atenção:** O boleto será gerado automaticamente no módulo Gestão Financeira ao imprimir qualquer relatório do Tipo **11 - Nota Fiscal**. Não existe relatório exemplo ou padrão da TOTVS que imprima dados do boleto como por exemplo o **Código de Barras, Nosso Número** ou **Data de Vencimento**. Nesse caso poderá customizar um relatório que busque os dados da tabela **FBOLETO**.

-   É obrigatório que seja selecionada a opção de Impressão para que o boleto seja gerado caso seja selecionada a opção **Visualização** o boleto não será gerado.
-   Quanto a impressão do boleto via tela do movimento: A tabela Master do detalhe1 deve ser a TMOV. Para o código de barras ser impresso, é fundamental relacionar as tabelas dos módulos Fluxus e Nucleus, para encontrar o registro correto. O código fica na tabela FBOLETO, campo CODIGOBARRAS.
    Essa tabela não se relaciona diretamente com a TMOV, por isso deverá relacionar a TMOVLAN com FLAN, através do campo IDLAN, a FLAN com FLANBOLETO, através do IDLAN e a FBOLETO com FLANBOLETO através do campo IDBOLETO.
