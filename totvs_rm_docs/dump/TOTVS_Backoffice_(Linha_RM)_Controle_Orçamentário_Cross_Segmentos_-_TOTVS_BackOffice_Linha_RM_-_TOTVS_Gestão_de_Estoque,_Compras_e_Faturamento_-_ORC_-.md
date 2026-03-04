# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - ORC - Como importar Orçamento via arquivo TXT/Excel

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-importar-Or%C3%A7amento-via-arquivo-TXT-Excel](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345847-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-ORC-Como-importar-Or%C3%A7amento-via-arquivo-TXT-Excel)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Controle Orçamentário
> **Data:** 10 de abril de 2025 às 09:20

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:08:30 min**

**Dúvida
**Como realizar a **Importação de Orçamento** e seus valores através de arquivo **txt/excel**?

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12

**Solução
**Para realizar a importação de orçamento e seus valores através de arquivo txt/excel, gentileza seguir as orientações abaixo:

O processo de Importação de Orçamento possibilitará ao usuário a criação de **Valores Orçados** automaticamente, ou a atualização de valores já cadastrados. Antes de realizar a importação, deverá realizar os vínculos obrigatórios para utilização do controle orçamentário, são eles:

-   **Vínculo do Usuário ao Centro de Custo**
-   **Vinculação da Natureza do Orçamento ao Centro de Custo**

Este processo pode ser feito via arquivo texto (.txt) e/ou planilhas excel (.xls).

**Caminho Módulo exe:** Menu Utilitários | Importações / Exportações | Importar Orçamento

![Sem tÃ­tulo.png](http://tdn.totvs.com/download/attachments/215483813/Sem%20t%C3%ADtulo.png?version=1&modificationDate=1449246449000&api=v2)

**Caminho MDI:** Menu Orçamento | Importação de Orçamento

**
![Imagem](http://tdn.totvs.com/download/attachments/215483813/menunovaMDI.PNG?version=1&modificationDate=1449236597000&api=v2)
**

Abaixo, segue layout a ser seguido para criação dos arquivos de importação:

Arquivo Texto:

**CAMPO**

**TIPO**

**TAMANHO**

**CASAS DECIMAIS**

**POSIÇÃO**

Código do Centro de Custo

A

25

\-

001 - 025

Código da Natureza Orçamentária/Financeira

A

40

\-

026 - 065

Data

Data

10

\-

066 - 075

Valor Orçado

N

20

4

076 - 095

Grupo Orçamentário

A

40

\-

 096 - 135

Tipo

A

1

\-

136

Planilha Excel:

**CAMPO**

**TIPO**

Código do Centro de Custo

Texto

Código da Natureza Orçamentária/Financeira

Texto

Data

Data

Valor Orçado

Moeda

Grupo Orçamentário

Texto

Tipo

Texto

**Observações**

1.  Os campos de **Código do Centro de Custo**, **Código da Natureza Orçamentária/Financeira** e **Grupo Orçamentário** devem ter seu tipo como **Texto**, caso contrário, se na máscara do cadastro estiver com o número 0 à esquerda (exemplo: 001), o excel irá ignorar, podendo assim criar inconsistências e erros ao importar o orçamento.
2.  A primeira linha do arquivo deverá conter o **nome das colunas**, na seguinte ordem: Código do Centro de Custo, Código da Natureza Orçamentária/Financeira, Data, Valor Orçado e Grupo Orçamentário.
3.  O campo de data deverá seguir o formato **DD/MM/AAAA**
4.  A importação pode ser feita inclusive para orçamentos que estejam bloqueados.
5.  A importação sempre afetará o valor orçado. Caso este seja zero, e, tente importar um valor negativo, deverá ser gerada uma exceção e a importação não poderá ser concluída.
6.  Importação de arquivo txt sem o campo **Tipo** será incluído como **Despesa**; - A coluna Tipo deve ser preenchida com '**R**' para **Receita** e '**D**' para **Despesa**.
7.  Valores negativos poderão ser importados, desde que este não deixe o valor orçado negativo. Exemplo:
    **Valor Orçado:** R$ 50.000,00 | **Valor a ser importado:** R$ -50.000,00 (Neste caso, o sistema irá realizar a importação, e deixará o campo de valor orçado zerado).
    **Valor Orçado:** R$ 30.000,00 | **Valor a ser importado:** R$ -31.000,00 (Neste caso, o sistema irá apresentar erro pois o valor não pode ficar negativo).

Vale lembrar que a medida que as movimentações forem sendo feitas, o valor não será exatamente igual ao que está no Valor Orçado. Nestes casos, aconselhamos que seja verificado o saldo DISPONÍVEL para o item de período a qual está tentando realizar a importação. Tal saldo pode ser visto em Consulta Valores de Orçamento.

**Importante**

-   A coluna GRUPO ORÇAMENTÁRIO somente deverá ser preenchida se nos parâmetros de Controle Orçamentário a opção de Usa Tabela de Grupo Orçamentário, estiver com os valores **usa** ou **usa obrigatoriamente**.
-   Arquivos de exemplos estão anexo ao artigo.
-   Não utilizar arquivo .csv pois este não respeitará corretamente as posições iniciais e final de cada campo quando aberto via txt.

**Saiba mais
**Para mais informações sobre controle orçamentário, acesse:
[Artigo - Controle Orçamentário](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345887-RM-CMP-Controle-Or%C3%A7ament%C3%A1rio)
