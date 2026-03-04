# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Como cadastrar Grade Numerada

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039858314-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-cadastrar-Grade-Numerada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039858314-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-cadastrar-Grade-Numerada)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 9 de abril de 2025 às 14:36

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:03:00min**

**Dúvida**Como cadastrar novos produtos de **Grade Numerada**?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**A **Grade Numerada por Produto** é utilizada para se fazer um controle detalhado do estoque físico. A utilização da grade numerada por produto facilita o cadastro e controle de estoque para produtos com especificações similares. Exemplo de Produto com Grade Numerada:

![screenshot_20191212_102356.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360052902494/screenshot_20191212_102356.png)

Com a grade numerada por produto cada item de grade numerada será um produto independente, de último nível e poderá ser referenciado diretamente na inclusão do movimento.

Para utilizar o recurso de Grade Numerada siga os passos abaixo:

1.  Cadastre um novo produto como de costume e marque a flag **Base para Grade Numerada;**
2.  Acesse **Cadastros - Mais - Tabelas Auxiliares - Grade Numerada por produto** e cadastre uma nova Grade informando o produto cadastrado como Base para Grade, Nome da Linha e Nome da Coluna.
    Exemplo Produto Base = Camisa Polo,
    Coluna = Cor
    Linha = Tamanho

    ![screenshot_20191212_104801.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360052903874/screenshot_20191212_104801.png)

3.  Edite a Grade Numerada cadastrada e informe as características de cada Linha e Coluna. Exemplo: COR = Amarelo, Vermelho, Verde
    TAMANHO: P, M, G
    ![screenshot_20191212_105906.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360053800733/screenshot_20191212_105906.png)

4.  A seguir acesse o menu **Processos - Assistente Grade Numerada** e escolha a opção **Criar novos produtos de Grade Numerada -** **Avançar**, onde será apresentados os códigos dos produtos a serem inclusos, sendo que o usuário deverá marcar os desejados e clicar em Avançar o que fará com que os sub-níveis deste item principal sejam inclusos.
    Será exibida as opções abaixo:

    -   **Criar novo produto base para grade numerada:** Através desta opção será criado um novo produto base a partir de um pré-existente que já utiliza a grade numerada convencional.
    -   **Criar nova grade numerada com base em outra existente:** Através desta opção será criada uma nova grade numerada com a estrutura de outra grade, as linhas e colunas serão copiadas para a nova grade.
    -   **Criar novos produtos de grade numerada:** Através desta opção poderão ser criados novos produtos de grade numerada. Os produtos serão criados de acordo com a combinação Linha x Coluna escolhida.
    -   **Criar novo produto base para grade numerada:** Através desta opção será criado um novo produto base a partir de um pré-existente.
    -   **Copiar dados do produto base para os produtos de grade numerada:** Através desta opção serão copiados dados do cadastro do produto base para os produtos de grade numerada originados deste.


![screenshot_20191212_105649.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360053801273/screenshot_20191212_105649.png)

![screenshot_20191212_110911.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360053801313/screenshot_20191212_110911.png)

**Atenção:**

-   Os novos produtos criados serão idênticos ao produto Base diferenciados apenas pelo que definir ao cadastrar a grade em Coluna e Linha.
-   É proibida a inclusão de novos produtos de grade numerada através da visão. Uma pequena medida de grande impacto na segurança do módulo.
-   Qualquer modificação no produto base será replicada para os produtos de grade numerada, dispensando a necessidade de executar o processo de cópia através do assistente. Este comportamento reforça o nosso compromisso de que um produto de grade numerada não pode ser livremente editado e somente existe no contexto do produto base.

Para mais informações [clique aqui](https://tdn.totvs.com/display/public/LRM/Grade+Numerada+por+Produto).
