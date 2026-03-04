# Importação de Orçamento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938015](https://tdn.totvs.com/pages/releaseview.action?pageId=423938015)
> **Domínio:** TDN (TOTVS Developer Network)

---

Para que seja possível realizar a importação do orçamento via arquivo texto (. txt) e/ou planilhas (.xls), deve-se, seguir as configurações conforme especificação abaixo: 

******
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938015/image_preview.png?version=1&modificationDate=1550007632383&api=v2)
****Importação via arquivo TXT**

A data deverá seguir o formato DD/MM/AAAA; - A importação sempre afetará o valor orçado. Caso este seja zero e tente importar um valor negativo, deverá ser gerada uma exceção e a importação não poderá ser concluída; - A importação pode ser feita inclusive para orçamentos que estejam bloqueados; - Importação de arquivo txt sem o campo **Tipo**(neste caso o orçamento deve ser incluído como **Despesa**); - A coluna Tipo deve ser preenchida com '**R**' para **Receita** e '**D**' para **Despesa**.

**CAMPO**

**TIPO**

**TAMANHO**

**DEC**

**POSIÇÃO**

Código do Centro de Custo

A

25



001 - 025

Código Natureza

A

40



026 - 065

Data

Data

10



066 - 075

Valor Orçado

N

20

4

076 - 095

Grupo Orçamentário

A

40



096 - 135

Tipo

A

1



136

***Observação*:** Caso não esteja parametrizada a edição do Grupo Orçamentário, a posição do mesmo deve ser desconsiderada e o campo **Tipo** deverá ser informado a partir da **posição 96**.

******
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938015/image_preview.png?version=1&modificationDate=1550007632383&api=v2)
****Importação via Planilha Excel**

-   Deverá ser informado o nome da planilha que se deseja importar (quando gera um arquivo novo do Excel, geralmente criam-se 3 planilhas automaticamente, a Plan1, Plan2 e a Plan3);
-   A primeira linha do arquivo deve conter o nome das colunas de acordo com a parametrização referente ao grupo orçamentário na seguinte ordem: 
-   **Usa grupo orçamentário:** CODCCUSTO, CODTBORCAMENTO, DATAORCAMENTO, VALOREFEITOORCAMENTO, CODTBGRUPOORC e TIPO; 
-   **Não usa grupo orçamentário:** CODCCUSTO, CODTBORCAMENTO, DATAORCAMENTO, VALOREFEITOORCAMENTO e TIPO;
-   O Nome das colunas podem ser alterados, ex: Centro de Custo, Data do Orçamento, etc..., mas a ordem deve ser mantida;
-   A data deve estar no formato dd/MM/yyyy, ex: 06/09/2018; - A coluna **Tipo** deve ser preenchida com '**R**' para **Receita** e '**D**' para **Despesa;**
-   Importação da planilha sem a informação na coluna **Tipo**(neste caso o orçamento deve ser incluído como **Despesa**);
-   Caso não esteja parametrizada a edição do grupo orçamentário, a coluna do mesmo deve ser desconsiderada e o campo **Tipo** deverá ser a próxima coluna.

***Importante!*** É recomendado que todos os valores estejam como texto, para que não hajam problemas na importação.
