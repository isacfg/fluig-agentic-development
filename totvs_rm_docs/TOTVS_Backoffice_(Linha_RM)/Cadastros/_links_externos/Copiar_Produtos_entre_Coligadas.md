# Copiar Produtos entre Coligadas

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/Copiar+Produtos+entre+Coligadas](https://tdn.totvs.com/display/public/LRM/Copiar+Produtos+entre+Coligadas)
> **Domínio:** TDN (TOTVS Developer Network)

---

Na tela do Processo é possível selecionar para quais coligadas o cadastro será copiado.

Para a cópia dos registros, o sistema faz consistências, testando se parâmetros determinados em cada coligada são os mesmos. Veja a seguir quais as consistências:

-   A  máscara do produto deve ser a mesma nas coligadas.
-   A tabela de fabricante, que é uma informação obrigatória no cadastro do produto, deve ter a mesma máscara e já deve estar cadastrada com os mesmos códigos da coligada da qual se fará a cópia.
-   As tabelas de classificação, condição de pagamento, grade numerada e tipo para faturamento, se utilizadas no cadastro de produto já devem estar cadastradas nas coligadas com a mesma máscara e códigos.
-   As demais informações do cadastro de produto são copiadas desde que os campos estejam preenchidos no produto origem e habilitado no destino.



**Anexos que serão copiados:**

**Dados Fiscais do Produto:**

**Dados Fiscais por UF:**               

**Tributos do Produto por Município:**

**Produtos para Importação de XML:**

Ao copiar um produto que possua informações no Anexo | Produtos TOTVS Colaboração, essas informações serão copiadas para a Coligada de destino. Para que seja possível a cópia desses dados, o Cliente/Fornecedor associado ao produto TOTVS Colaboração deve existir com o mesmo código na coligada de destino.

**Produtos Compostos:**

Se a coligada de origem e destino trabalham com produto composto então no momento da cópia de produto entre coligadas os componentes do produto de origem substituem os componentes do produto composto na coligada de destino.

**Unidades de Medida do Produto:**

**Tributos do produto:**

**Marca**:

As marcas associadas ao produto serão incluídas\\atualizadas da Coligada Origem para Destino, tal como a marca default utilizada pela Produto.

-   -   **Cópia de Produto Global para Produto Não Global:** Serão realizadas as cópias do Anexo de Marcas do Produto da Coligada Global apenas para a Coligada Não Global.
    -   **Cópia de Produto Não Global para Global:** Será realizada a cópia do Anexo de Marcas do Produto da Coligada Não Global para a todas as Coligadas Globais.

**Histórico do Produto**: os dados de Histórico do Produto serão copiados para a coligada destino somente se existirem na coligada origem. Esta informação fica localizada na tela de edição de Produto página Detalhes \\ Observações \\ campo Histórico.



**Campos que não serão copiados:**

**Aba Identificação:**

-   Data Cadastramento;
-   Data da Última Alteração;
-   Produto Base;
-   Código Reduzido;     

**Aba Controle Estoque:**

-   Controlado por Lote

**Aba Custos:**

-   Custo Médio: Data e valor;
-   Custo Repos. A: Data e valor;
-   Custo Repos. B: Data e valor;

**Aba Classificação:**

-   Natureza Orçamentária/Financeira - (Despesa);
-   Natureza Orçamentaria/Financeira - (Receita);

**Saldos e Custos:**

-   Saldo Geral físico;
-   Saldo Geral Financeiro;
-   Recalculo Custo Médio;

**Aba Integração:**

-   Grupo de Patrimônio;

**Observação***:* É possível selecionar se o registro irá substituir o existente na Coligada destino.
