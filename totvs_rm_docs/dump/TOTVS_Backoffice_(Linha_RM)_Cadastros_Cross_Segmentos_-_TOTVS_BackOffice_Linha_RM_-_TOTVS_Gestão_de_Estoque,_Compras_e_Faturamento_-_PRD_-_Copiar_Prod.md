# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Copiar Produtos entre Coligadas

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/6660659647383-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Copiar-Produtos-entre-Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/6660659647383-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Copiar-Produtos-entre-Coligadas)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 20 de fevereiro de 2025 às 16:41

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/26276538059671)
 Tempo aproximado para leitura: **00:03:00 min**

**Dúvida**
Como realizar cópia de produto entre coligadas?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**

Acesse o menu Cadastros > Produtos e Serviços > Selecione o item > Processos > **Copiar Produto entre Coligadas**:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/26276527150743)

Será aberta uma tela do processo onde deverá ser selecionado para qual coligada o cadastro será copiado

**OBS:** É possível selecionar se o registro irá substituir o existente na Coligada destino.


Para realizar a cópia dos registros o sistema faz consistências, testando se parâmetros determinados em cada coligada são os mesmos. Veja a seguir quais as consistências:

-   A **máscara do produto** deve ser a mesma entre as coligadas envolvidas no processo;
-   A **tabela de fabricante**, que é uma informação obrigatória no cadastro do produto, deve ter a mesma máscara e já deve estar cadastrada com os mesmos códigos da coligada da qual se fará a cópia;
-   As **tabelas de classificação, condição de pagamento, grade numerada e tipo para faturamento**, se utilizadas no cadastro de produto já devem estar cadastradas nas coligadas com a mesma máscara e códigos;
-   As demais informações do cadastro de produto são copiadas desde que os campos estejam preenchidos no produto origem e habilitado no destino.

Se o produto a ser copiado possuir produtos compostos, esses devem existir na coligada destino. Assim ao realizar o processo de cópia de produtos entre coligadas o sistema irá exibi-los no anexo de produtos compostos do produto copiado.

**Marca**: As marcas associadas ao produto serão incluídas\\atualizadas da Coligada Origem para Destino, tal como a marca default utilizada pela Produto.

**Produtos TOTVS Colaboração**: Ao copiar um produto que possua informações no Anexo > Produtos TOTVS Colaboração, essas informações serão copiadas para a Coligada de destino. Para que seja possível a cópia desses dados, o Cliente/Fornecedor associado ao produto TOTVS Colaboração deve existir com o mesmo código na coligada de destino.

-   **Cópia de Produto Global para Produto Não Global**: Serão realizadas as cópias do Anexo de Marcas do Produto da Coligada Global apenas para a Coligada Não Global.
-   **Cópia de Produto Não Global para Global**: Será realizada a cópia do Anexo de Marcas do Produto da Coligada Não Global para a todas as Coligadas Globais.

**Produto Composto**:

-   Se as coligadas de origem e destino trabalham com produto composto então no momento da cópia de produto entre coligadas os componentes do produto de origem substituem os componentes do produto composto na coligada de destino.

**Histórico do Produto**: os dados de Histórico do Produto serão copiados para a coligada destino somente se existirem na coligada origem. Esta informação fica localizada na tela de edição de Produto página Detalhes > Observações > campo Histórico.

**Complementar**

A cópia de qualquer cadastro entre **coligadas** que por sua vez utilize outros cadastros precisa primeiro ter esses **"Sub-cadastros"** existentes na coligada de destino.
Abaixo exemplo para melhor entendimento:

-   A coligada de origem possui um **Fabricante** informado de código 001 nome Mercur
-   A coligada de destino possui o Fabricante Mercur cadastrado mas com código 003 mas não possui um registro de código 001

No exemplo acima ao realizar a cópia de produto entre coligadas será apresentado erro informando que não foi possível encontrar o código 001.

Tal comportamento se dá pois o **Sistema** consistirá a chave primária do cadastro de Fabricante, sendo assim, mesmo que o Fabricante Mercur exista na coligada de destino o código dele não é o mesmo da coligada de origem.
Para que o erro deixe de ocorrer será necessário cadastrar um fabricante de mesmo código na coligada de destino.

Essa consistência será para todos os demais "**Sub-Cadastros**", caso contrário também ocorrerá erro com outros.


**Importante:**

-   Durante o processo da copia, se for apresentado mensagens de erro que informando que algum cadastro não existe na coligada de destino, será necessário que o mesmo seja incluído na coligada **ou** ( dependendo do campo ) ser removido do item no momento da copia apenas para não consistir o erro;
-   Alguns campos do item **não serão copiados para a coligada de destino.
    **

Para mais informações, acesse:

**[Copiar Produtos entre Coligadas](https://tdn.totvs.com/display/public/LRM/Copiar+Produtos+entre+Coligadas)**
