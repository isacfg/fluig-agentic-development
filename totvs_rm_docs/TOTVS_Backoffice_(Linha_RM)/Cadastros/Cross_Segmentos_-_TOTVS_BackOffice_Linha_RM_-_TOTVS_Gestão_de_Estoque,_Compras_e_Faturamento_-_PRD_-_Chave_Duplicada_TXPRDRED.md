# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Chave Duplicada TXPRDRED

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350708-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Chave-Duplicada-TXPRDRED](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000350708-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Chave-Duplicada-TXPRDRED)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 10 de abril de 2025 às 09:11

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31311408447127)**Tempo aproximado para leitura: **00:02:00min**

**Ocorrência
**

Ao cadastrar um novo produto é apresentado a mensagem: 

**Chave Duplicada**

**Possíveis Causas:**

**\- inclusão de registro cujo valor da chave primária já existe**

**\- inclusão de registro cujo valor do índice único já existe**

**
![Imagem](http://tdn.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A11%3A9.png?version=1&modificationDate=1494868877000&api=v2)
**

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da 11.80.

**Causa
**

O incidente é apresentado pois o valor atual do código reduzido é menor que o valor máximo encontrado na **TPRODUTO** para a coligada em questão. Com isso, ao salvar o produto o sistema está tentando gerar um valor de código reduzido automaticamente que já se encontra cadastrado na base de dados.

**Solução
**

Para solucionar este problema deverá acertar o valor correspondente ao campo **Código Reduzido** da tabela **GAUTOINC** com o maior valor já cadastrado de Código Reduzido.

Para igualar os valores do MAX(CODIGOREDUZIDO) – **Maior valor encontrado para o código reduzido na coligada** \- e da sequência atual nos parâmetros do módulo, basta executar a consulta abaixo:

**SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODCOLPRD = X**
**Onde X é o código da coligada que está cadastrando o produto**

De posse do último código reduzido, será necessário alterar a sequencial atual no parâmetro do módulo.

Para mais detalhes, acesse o link abaixo:
**[Violação da chave TXPRDRED ao cadastrar novo produto.](http://tdn.totvs.com/display/public/LRM/PRD0002_Violacao_de_chave_TXPRDRED)**
