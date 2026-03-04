# PRD0002_Violacao_de_chave_TXPRDRED

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/PRD0002_Violacao_de_chave_TXPRDRED](https://tdn.totvs.com/display/public/LRM/PRD0002_Violacao_de_chave_TXPRDRED)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

11.82 e posteriores

**Ocorrência:**

Violação da chave TXPRDRED ao salvar o cadastro de um novo produto

**Ambiente:**

Cadastro de Produto

**Passo a passo:**

Ao salvar o cadastro de um novo produto é apresentado a mensagem:

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A11%3A9.png?version=1&modificationDate=1494868877000&api=v2)

O incidente é apresentado pois o valor atual do código reduzido é menor que o valor máximo encontrado na TPRODUTO para a coligada em questão. Com isso, ao salvar o produto o sistema está tentando gerar um valor de código reduzido automaticamente que já se encontra cadastrado na base de dados.

Para igualar os valores do MAX(CODIGOREDUZIDO) – **Maior valor encontrado para o código reduzido na coligada** - e da sequência atual nos parâmetros do sistema, basta executar a consulta abaixo:

> SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODCOLPRD = X
> \-- Onde X é o código da coligada que está cadastrando o produto.

De posse do último código reduzido, será necessário alterar a sequencial atual no parâmetro do sistema.

Segue abaixo a imagem de onde deve ser feito a alteração no parâmetro: 

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A11%3A26.png?version=1&modificationDate=1494868877000&api=v2)

Realizando essa configuração, você irá igualar o último valor encontrado na tabela **TPRODUTO** em relação a **GAUTOINC**, e a inconsistência não deverá ser mais apresentada novamente.

**IMPORTANTE**

Pode ser que mesmo após seguir o procedimento acima, a mensagem continuará a ser apresentada.

Neste caso é necessário executar a consulta T-SQL abaixo novamente:

> SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODCOLPRD = X
> \-- Onde X é o código da coligada que está cadastrando o produto.

Verificar se o retorno da consulta é = 9999. Veja o exemplo abaixo:

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A11%3A37.png?version=1&modificationDate=1494868877000&api=v2)

Caso o retorno seja o mesmo da imagem acima, não poderemos afirmar que este é o último código reduzido gerado na tabela para a coligada em questão.

Provavelmente em sua base de dados existe mais de 9999 produtos cadastrados com códigos reduzidos maiores que este valor e por isso a mensagem continua sendo apresentada.

Entretanto, a consulta T-SQL retorna este valor pois este é o maior número que pode ser gerado de acordo com a máscara definida no parâmetro.

Neste exemplo, a máscara é #### (Verificar qual é a máscara definida no seu parâmetro):

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A11%3A47.png?version=1&modificationDate=1494868877000&api=v2)

Neste caso, é necessário executar a consulta abaixo para verificar o maior código reduzido da coligada.

> SELECT MAX(CODIGOREDUZIDO) FROM TPRODUTO WHERE CODIGOREDUZIDO > 9999 AND CODCOLPRD = X
> \-- Onde X é o código da coligada que está cadastrando o produto.

Feito isso, basta colocar o valor retornado na consulta acima no parâmetro do valor atual do código reduzido para que a mensagem de chave duplicada não seja apresentada.

Veja na continuação do exemplo anterior:

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A11%3A54.png?version=1&modificationDate=1494868877000&api=v2)

Aplicando a alteração no parâmetro:

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/274318049/image2017-5-15%2014%3A10%3A53.png?version=1&modificationDate=1494868877000&api=v2)

**Observações:**

Para mais informações:

 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)

   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)

**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
