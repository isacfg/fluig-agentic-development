# Vínculo de datasets a componentes

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=894373725](https://tdn.totvs.com/pages/viewpage.action?pageId=894373725)

---

# Índice



* * *

A central de componentes é utilizada para importar componentes e extensões de widgets suportadas na plataforma permitindo baixar ou importar componentes que podem ser ativados ou inativados quando necessário. 

O controle é realizado por empresa, na qual essa pode assumir um widget ativo, enquantooutra empresa pode compartilhar esse widget desativado. Por exemplo, o Analytics Component, pode estar desativado para a empresa **01** enquanto encontra-se ativado para a empresa **02**.

Saiba mais

Confira mais detalhes sobre a Central de componentes [**aqui**](https://tdn.totvs.com/x/Ck32Dw). 



## Evolução

* * *

Com o objetivo de ampliar a capacidade de um componente, será possível criar datasets através do *deploy* de um componente, garantindo sua integridade e segurança.

Os datasets criados serão dependentes do componente, impossibilitando que sejam desativados, ocasionando assim divergências onde quer que estejam sendo utilizados.



## Desenvolvimento atual

* * *

O desenvolvimento de apps pode ser realizado de diversas formas, porém é fornecido um modelo de projeto no qual sua estrutura auxilia na criação de apps, o projeto **[sample-component](https://git.fluig.com/projects/SAMPLES/repos/projetos/browse/sample-component).**

Na próxima seção, utilizaremos ele para exemplificar como se dará esta nova forma de desenvolvimento que irá possibilitar o vínculo de datasets.



## Criação de dataset

* * *

Hoje, em um componente já existe a possibilidade de criar e personalizar, widgets, temas, layouts e páginas.

A partir deste novo recurso, será possível a criação de datasets para que sejam utilizados dentro da plataforma das diversas formas já conhecidas, criando integrações, auxiliando em processos, facilitando preenchimento formulários, entre outros recursos.

Saiba mais

Confira mais detalhes sobre desenvolvimento de datasets [**aqui**](https://tdn.totvs.com/x/eitbB).



## Desenvolvimento de componentes com Dataset

* * *

Para ter um dataset vinculado a um componente, basta realizar algumas adições simples no código do seu componente, como recomendado, estaremos utilizando o projeto do **sample-component** como exemplo.



### Declarando dependência

* * *

Todo componente deve conter um arquivo **component.xml** onde nele é declarado diversos atributos do componente. Para que um dataset seja vinculado, basta criar uma nova tag denominada **<dependencies></dependencies>**, onde dentro da tag será adicionado as informações do seu dataset conforme exemplo abaixo:

```
<dependencies>
	<dependency>
		<code>TOTVS_customers</code>
		<file>dependencyFiles/datasets/dataset.js</file>
		<resourceType>dataset</resourceType>
	</dependency>

	<dependency>
		<code>TOTVS_orders</code>
		<file>dependencyFiles/datasets/orders.js</file>
		<resourceType>dataset</resourceType>
	</dependency>
</dependencies>
```



**Detalhando as tags**

-   **code**: Código do dataset que será criado.

Importante

Com o objetivo de não haver conflitos com datasets previamente cadastrados ou de outros desenvolvimentos, é recomendado utilizar o prefixo: *nomeEmpresa\_Componente\_FuncaoDataset*

-   **file:** Local onde se encontra o código do dataset.



-   **resourceType:** Tipo do recurso que está sendo vinculado ao componente, único valor possível neste desenvolvimento é o “**dataset**”



Importante

Um dataset pode ser associado somente a um único componente, caso haja mais de um componente, a tag **<code>** não poderá ser repetida, por isso sempre use a sugestão do prefixo ***nomeEmpresa\_Componente\_FuncaoDataset*** e tenha o código original do dataset em ambos os componentes.



Após essas configurações, basta realizar o deploy do arquivo **.ear** como de costume na central de componentes. Após receber a notificação de que o aplicativo foi instalado, basta ativá-lo na central de componentes.

Uma vez ativado, os datasets serão listados na página de **Datasets**. O ícone  ficará ao lado do menu de ações, na listagem de dataset informando quando um dataset está vinculado a um componente, ao passar o mouse no indicativo apresentado, poderá ser verificado a qual componente o dataset pertence.





## Desativando um dataset

* * *

Datasets criados a partir de um componente terão inicialmente um vínculo ao componente e só serão desativados, caso o componente seja desativado. Caso contrário não será possível fazer a desativação.

O vínculo de um dataset pode ser retirado excluindo do arquivo **componente.xml** a tag “dependency” referente ao dataset e sendo atualizado pela central de componentes - tornando assim, possível a desativação do dataset. Para criar novamente o vínculo, basta inserir a informação no arquivo.

Datasets pré-existentes na plataforma não poderão ser vinculados a um componente.



## Desativando um componente

* * *

Através da central de componentes é possível realizar a desativação de um componente, caso este possua datasets vinculados a ele. Uma modal informando quais datasets estão vinculados será exibida, conforme imagem abaixo.





Ao desativar um componente, o dataset vinculado ao mesmo também será desativado. Ao ativá-lo novamente o dataset também será reativado. Caso o dataset tenha tido seu vínculo removido, esse comportamento não será aplicado.



## Atualizando conteúdo de um dataset

* * *

Para atualizar o conteúdo de um dataset que seja dependente de um componente, basta que seu código seja modificado no arquivo físico e um novo pacote para atualização seja gerado.  Faça os passos abaixo na central de componentes:



**01.** Realize o upload do arquivo **.ear** atualizado.

**02.** Na visualização de dataset dependentes pela central de componentes, clique em **Atualizar ou Criar Datasets**. Essa visualização pode ser acessada através do ícone .

Datasets que precisam ser atualizados são identificados pela cor amarela, como na imagem abaixo.

Isso fará com que o dataset da empresa atual seja atualizado, caso existam outras empresas o administrador destas deverá realizar apenas o passo de número (02).

### Outros bloqueios

* * *

Além do bloqueio da desativação de um **dataset dependente de um aplicativo**, o usuário da plataforma não poderá:

-   Editar um dataset (Exportação estará travada)
-   Visualizar histórico de versão 
-   Restaurar versão de um  dataset
-   Visualizar seu código
-   Importar

Apenas a função de consultar ficará operante.



## Depreciação de um dataset

* * *

Caso haja um dataset com código específico que não será mais usado na plataforma e não seja possível atualizar o seu código, uma nova dependência deve ser criada com um novo code que seja único.



## Exclusão de um componente

* * *

Caso o arquivo físico do componente **(sample-component.ear)** seja deletado do diretório de instalação do fluig **(../appserver/apps)** o *undeploy* será feito e todos os datasets serão removidos da base de dados, mantendo a regra de todos os outros recursos hoje, widget, temas e layouts.
