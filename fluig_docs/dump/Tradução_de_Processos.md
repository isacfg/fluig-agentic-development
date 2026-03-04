# Tradução de Processos

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=160105353](https://tdn.totvs.com/pages/viewpage.action?pageId=160105353)

---

# Índice

# Objetivo

* * *

O objetivo deste guia é demonstrar o funcionamento do sistema de tradução de processos do Fluig. Dessa forma, você pode manter seus processos e mensagens em idiomas diferentes que serão usados conforme a preferência do usuário



# Antes de começar

* * *

Por questões de padronização de encoding no fluig, mesmo nossos arquivos properties utilizam o encoding UTF-8, que é diferente da configuração padrão do eclipse. Por este motivo, é necessário fazer uma alteração na configuração do **Studio** em **Preferences** (Preferências) pesquise por **Content Types** (Tipos de conteúdo), **Text** (Texto), **Java properties file** (Arquivo de propriedade Java) e altere de ISO-8859-1 para **UTF-8**.





# Gerando arquivos de literais

* * *

Você pode gerar os arquivos ao mesmo tempo que cria o processo, gerar posteriormente após desenhar todas as etapas do processo ou ainda de forma manual.



## Criando arquivos ao criar um novo diagrama

Para gerar arquivos de literais em conjunto com a criação de um novo diagrama, basta assinalar a opção "Cria os arquivos de literais" na tela apresentada a seguir:





Ao assinalar “Cria os arquivos de literais” são criados três arquivos *properties*, onde são armazenadas as literais nos idiomas suportados pelo fluig (inglês, português e espanhol), conforme imagem a seguir:



## Criando arquivos a partir de um diagrama existente

Para gerar os arquivos de tradução de um diagrama já existente, facilitando assim que todos os componentes sejam devidamente atribuídos, clique com o botão direito em cima do arquivo do diagrama na *view* do eclipse "Package Explorer" e vá na opção "Externalizar Strings"

Ao fazer isso, será criado na pasta **literals** arquivos de tradução em português, inglês e espanhol.

Note que irá preencher automaticamente as propriedades de todas as atividades e do processo conforme o que foi configurado no próprio diagrama. Então, basta editar conforme a necessidade.

## Criando arquivos manualmente

Para projetos mais recentes, a pasta “literals” é criada automaticamente, tanto na criação de novos diagramas quanto na importação de processos com literais definidas. Para projetos e diagramas antigos, a pasta e os arquivos de propriedades podem ser criados utilizando as opções *"New Folder"* e "*New File*" do Eclipse, que também estão disponíveis no menu de contexto de *mouse* do Fluig.



Os arquivos de literais criados desta forma devem seguir a seguinte convenção:

**(Nome do diagrama) + “\_en\_US.properties”** ou **“\_es.properties”** ou **“\_pt\_BR.properties”**.

Se algum dos arquivos não for exportado, será assumido as propriedades do próprio diagrama para usuários do idioma cujo arquivo não foi criado.



# Editando o arquivo de literais

* * *

As informações gerais do processo, podem ser editadas pelas entradas:

-   **process.category** = categoria do processo;
-   **process.description** = descrição do processo;
-   **process.instructions** = instruções do processo.



E da versão do processo, em:

-   **process.version.instructions** = instruções da versão do processo;

Já  para traduzir informações das atividades, devem ser criadas literais utilizando a seguinte semântica:

**(código da atividade) + "." + campo a ser traduzido = "*string* desejada”**.

Onde:

**Código da atividade:** pode ser obtido verificando as propriedades de cada elemento do diagrama, conforme imagem a seguir:



**Campo a ser traduzido:** é o que se deseja traduzir. O campo "*name*" representa o nome e o campo "*instructions*" representa as instruções dele.

Nesta linha, ao traduzir a atividade com o código "task6" o arquivo de literal terá a seguinte atividade:

-   **6.*name* \= "*Financial approvement*"**.
-   **6.instructions = "*In this point of the process we have the financial approvoment*"**.



Para fluxos, além da propriedade "*name*", podem ser utilizadas mais duas propriedades:

-   **name:** *string* utilizada como valor do campo “Nome”;
-   **flow:** *string* utilizada como valor do campo “Ativ. Fluxo”;
-   **return:** *string* utilizada como valor do campo “Ativ. Retorno”.



# Quebra de *strings* longas em tradução de processos

* * *

Em alguns casos, as *strings* de tradução podem ficar muito longas ultrapassando o tamanho dos objetos que contém estas *strings*, conforme o exemplo abaixo:

Note na imagem acima que a *string* "Solicitação workflow inicia nesta tarefa" está ultrapassando o espaço definido para o objeto de anotação.

Para evitar este problema o desenvolvedor de processos poderá utilizar o caractere "\\n" para realização da quebra de linhas, evitando esta situação.

```
// Implementação que apresenta o problema (sem o \n)
	7.name=Solicitação workflow inicia nesta tarefa

	// Implementação corrigida.
	7.name=Solicitação workflow \n inicia nesta tarefa
```



Após aplicar o caractere de quebra de linha, o problema será corrigido conforme pode ser observado na imagem abaixo.





# Criando literais para utilizar em customizações

* * *

Você pode também fazer com que suas mensagens de erros customizadas sejam também traduzidas.  suas própria exceções.

Para isso, na implementação ao invés de retornar simplesmente:







```
throw "Informe o usuário"
```



Você pode fazer da seguinte forma. Adicionar aos arquivos de tradução a literal "validation\_name"

```
validation_user=Informe o usuário
```
```
validation_user=Informe un usuario
```
```
validation_user=Enter a User
```



E na customização, usar a função **i18n.translate** passando a chave utilizada nos arquivos de tradução:

```
throw i18n.translate("validation_name");
```
