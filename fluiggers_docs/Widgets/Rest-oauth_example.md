# Rest-oauth example

> **Fonte:** [https://fluiggers.com.br/t/rest-oauth-example/1574](https://fluiggers.com.br/t/rest-oauth-example/1574)
> **Categoria:** Widgets
> **Criado em:** 11/01/2023, 12:59
> **Visualizações:** 1190 | **Likes:** 8 | **Respostas:** 8

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 11/01/2023, 12:59 | ❤️ 1

Boa tarde,

Alguém ja conseguiu compilar esta widget da totvs rest-oauth que tem no git-hub deles.
[Git hub da totvs](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth)

Esta dando erro de dependencias ai fica osso testar e estudar kkkkkkk.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 12/01/2023, 12:46 | ❤️ 1

Eu passei um bom tempo estudando a criação de APIs no Fluig e não tenho lembranças de nenhum dos exemplos desses repositórios que funcionou perfeitamente, a não ser aquele componente que inclusive tem um curso que você pode conferir aqui [neste link](https://academy.fluig.com/courses/adaptando-seu-componente-para-a-totvs-store).

Isso se deve ao fato de que a maioria dos repositórios de exemplos as dependências nos arquivos pom.xml não estão especificadas a versão corretamente e há muitas dependências desnecessárias se o objetivo for apenas criar um endpoint simples em uma widget ou layout.

Depois de ter passado pelo caminho das pedras, estou planejando criar uma série de vídeos abordando este assunto para ajudar os desenvolvedores Fluig.

Neste exemplo que você citou, vejo algumas coisas que você pode tentar fazer, são elas:

1.  Remover as dependências desnecessárias como:

    -   wcm-sdk-service;
    -   wcm-common;
    -   fluig-sdk-common;
    -   fluig-sdk-api.
2.  Altere a propriedade artifact.version de 1.6.5 para a versão do seu fluig, por exemplo 1.8.0;

3.  Certifique-se se você configurou o repositório nexus no seu maven, pois sem isso o maven não irá conseguir baixar as dependência do Fluig. Para configurar um repositório Nexus no Maven, você precisará fazer o seguinte:

4.  Adicione a configuração do repositório Nexus no arquivo `settings.xml` do Maven, que geralmente está localizado em `~/.m2` (usuários Linux/Mac) ou `C:\Users\username\.m2` (usuários Windows).


O arquivo `settings.xml` deve ter o seguinte conteúdo:

```auto
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <mirrors>
        <mirror>
            <id>nexus</id>
            <mirrorOf>*</mirrorOf>
            <name>Fluig Nexus Repository.</name>
            <url>http://nexus.fluig.com/content/groups/public</url>
        </mirror>
    </mirrors>
</settings>
```

Qualquer coisa, se não conseguir de forma alguma, posso procurar nos meus projetos testes um exemplo bem simples onde você consiga compilar e subir na central de componentes do Fluig.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 12/01/2023, 13:45

Boa tarde,
Se tiver um exemplo de facil compilação eu agradeço muito

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 12/01/2023, 23:53

meu colega [@Rhyan](/u/rhyan)
trabalhou bastante nesse projeto do OAUTH, tem algo pra nóis ai Soldado?

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 13/01/2023, 07:50

Bom dia [@fluigor.com.br](/u/fluigor.com.br),
Tenho medo desses exemplos do fluig que quase nunca estão completos ou funcionam.
Estou montando um endpoint no fluig para minhas aplicações externas mandarem webhooks pro fluig. Preciso apenas receber um json com as informações de que preciso e processo tudo no fluig.
Tem algum exemplo que funcione ai?

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Sérgio Machado** (@sergio.machado) — 13/01/2023, 09:28 | ❤️ 4

Opa Daniel, fui olhar todos os meus testes, e não encontrei nenhum exemplo simples para postar aqui.

Mas você pode se basear por este aqui, não lembro se esta compilando com sucesso, mas tem o básico para o que você precisa.

![](https://github.githubassets.com/favicons/favicon.svg) [github.com](https://github.com/marcommas/fluig/tree/main/wcm)

### [fluig/wcm at main · marcommas/fluig](https://github.com/marcommas/fluig/tree/main/wcm)

[main/wcm](https://github.com/marcommas/fluig/tree/main/wcm)

Contribute to marcommas/fluig development by creating an account on GitHub.

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 13/01/2023, 16:24

Deu erro de compilação por que ta antigo
Precisamos apenas atualizar para um versão do maven mais nova do maven deve resolver.
vou estudar

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 13/01/2023, 22:51

Consegui compilar o pacote.

Agora e so saber qual vai ser a pasta base desse projeto.
Pois como vou acessar o endpoint criado?

```xml
<context-root>/WSRestOAuth</context-root>
```

então deveria ser [https://meufluig.com.br/WSRestOAuth/dsConsulta](https://meufluig.com.br/WSRestOAuth/dsConsulta) ?

---

## Resposta #8

**Sérgio Machado** (@sergio.machado) — 14/01/2023, 08:35 | ❤️ 1

Para acessar o endpoint com base nesse exemplo, a url segue a seguinte estrutura:

```auto
fluig_url:port/WSRestOAuth/rest/conn/dsConsulta
```

---

## Resposta #9

**Daniel Sales** (@Daniel_Sales) — 14/01/2023, 21:42

Obrigado pela ajuda.
Testei aqui e deu bom. Nossa isso vai salvar a pele em um monte de projetos. Agora posso trabalhar com webhook de forma bem mais facil sem ter que fazer o fluig consultar algo de tempos em tempos. a consulta a um dataset falhou ainda daerro mas eu criei um endpoint get e retornou certinho. Agora e ver qual a melhor maneira de fazer o que quero e se é programar tudo em um dataset e o endpoint comsumir o dataset ou se faço o endpoint grvar direto no formulario. Agora é testar

---

## Resposta #10

**Daniel Sales** (@Daniel_Sales) — 16/01/2023, 08:02

Evoluimos bem ta funcionando a widget. So a consulta ao dataset que ta dando erro no java

```java
//Aqui força para buscar do dataset: NomeDataset
            String dataParams = (String) jsonObj.get("params");
            JSONObject jsonObjDataParam = new JSONObject( dataParams);//aqui esta dando erro json to string
            jsonObjDataParam.put("name", "ds_ml");

            String dataParameters = (String) jsonObjDataParam.toString();
```

Estou analizando o que pode ser
Se conseguir me ajudar eu agradeço.

---

## Resposta #11

**Daniel Sales** (@Daniel_Sales) — 17/01/2023, 14:52

Aos amigos aqui funcionou perfeito.

Rodando liso a consulta a um dataset agora e so adaptar ao meu negocio. Valeu [@sergio.machado](/u/sergio.machado) salvou a patria

---

## Resposta #12

**Daniel Sales** (@Daniel_Sales) — 20/01/2023, 08:09

Bom dia,
Consegui um sdk em java com as chamadas as apis que vou precisar no meu projeto para implementar o webhook. E so gerar um pacote jar e adicionar nesse projeto? Ou tenho que adicionar os fontes do sdk no projeto?

---

## Resposta #13

**Daniel Sales** (@Daniel_Sales) — 29/03/2023, 17:20

Boa tarde to usando seu pacote que você disponibilizou mas surgiu uma duvida se eu gravar um arquivo no diretorio ./nomedoarquivo.pdf como acesso esse arquivo?
É possivel?

---

## Resposta #14

**Mauricio Freitas** (@mauriciolanner) — 20/01/2025, 14:43

Amigo, como você conseguiu complilar o pacote, tentei e deu erro:
\[ERROR\] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.11.0:compile (default-compile) on projec
t WSRestOAuth: Compilation failure
\[ERROR\] /C:/Users/mauriciofreitas/Downloads/wcm/wcm/src/main/java/com/fluig/oauth/ConnectRest.java:\[34,13\] cannot access
com.fluig.oauth.OAuthClient
\[ERROR\] bad class file: C:\\Users\\mauriciofreitas.m2\\repository\\com\\fluig\\oauth-client\\1.0\\oauth-client-1.0.jar(com/fl
uig/oauth/OAuthClient.class)
\[ERROR\] class file has wrong version 55.0, should be 52.0
\[ERROR\] Please remove or make sure it appears in the correct subdirectory of the classpath.

---

## Resposta #15

**Daniel Sales** (@Daniel_Sales) — 21/01/2025, 10:29 | ❤️ 1

Sim consegui
Teve vairas mudanças e agora tem login e senha deixa te passar os acessos:
Criar um arquivo na pasta c:\\users\\seulogin.m2 chamado settings.xml









nexus
cliente-fluig
bwUamJvscYD5WHrnpz27Pk







Salvar e tentar compilar é isso.

---

## Resposta #16

**Mauricio Freitas** (@mauriciolanner) — 22/01/2025, 09:31

Eu consegui o login e senha o problema é que sempre que tendo compliar da o erro que menncionie, mesmo estando logado, parece ser alguma versão

---

## Resposta #17

**Mauricio Freitas** (@mauriciolanner) — 22/01/2025, 11:23

Consegui buildar usando a propriedade

```auto
<properties>
    <failOnMissingWebXml>false</failOnMissingWebXml>
</properties>
```

---

## Resposta #18

**Bruno Henrique** (@Bruno_Henrique) — 19/05/2025, 17:13

Daniel, como você passou os parâmetros na chamada? (por exemplo constrains)

---

## Resposta #19

**Abilton Gadelha Dias** (@Abilton_Gadelha_Dias) — 15/11/2025, 12:31

Galera usei esse forum como exemplo mais faltam bastante informação aqui…
Para ajudar vou colocar aqui meu arquivo pom.xml e settings.xml

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?><project xmlns="http://maven.apache.org/POM/4.0.0"         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <properties>        <failOnMissingWebXml>false</failOnMissingWebXml>       </properties>
    <repositories>      <repository>        <id>nexus</id>        <name>fluig Nexus Repository</name>        <!-- <url>http://nexus.fluig.com/content/groups/public/</url> -->        <url>https://nexus.fluig.com/repository/public</url>      </repository>    </repositories>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.fluig</groupId>    <artifactId>WSRestOAuth</artifactId>    <version>1.0</version>    <dependencies>        <dependency>            <groupId>com.fluig</groupId>            <artifactId>oauth-client</artifactId>            <version>1.0</version>        </dependency>        <dependency>            <groupId>javax</groupId>            <artifactId>javaee-api</artifactId>            <version>7.0</version>            <scope>provided</scope>        </dependency>        <dependency>            <groupId>com.google.code.gson</groupId>              <artifactId>gson</artifactId>              <version>2.8.6</version>            </dependency>        <dependency>              <groupId>org.json</groupId>              <artifactId>json</artifactId>              <version>20210307</version>            </dependency>           </dependencies>
    <packaging>war</packaging></project>
```

settings.xml – criei na pasta descrita aqui no forum

```auto
<?xml version="1.0" encoding="UTF-8"?>
<settings
        xmlns="http://maven.apache.org/SETTINGS/1.0.0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">

        <properties>
            <failOnMissingWebXml>false</failOnMissingWebXml>
        </properties>

        <servers>
            <!-- <server>
                <id>anypoint-exchange-v3</id>
                <username>yourAnypointPlatformUserName</username>
                <password>yourAnypointPlatformPassword</password>
            </server> -->
            <!-- <server>
                <id>MuleRepository</id>
                <username>yourMuleNexusID</username>
                <password>yourMuleNexusPassword</password>
            </server> -->
            <server>
                <id>nexus</id>
                <username>cliente-fluig</username>
                <password>bwUamJvscYD5WHrnpz27Pk</password>
            </server>
        </servers>
        <pluginGroups>
            <pluginGroup>org.mule.tools</pluginGroup>
        </pluginGroups>
        <profiles>
            <!-- <profile>
                <id>mule-extra-repos</id>
                <activation>
                    <activeByDefault>true</activeByDefault>
                </activation>
                <repositories>
                    <repository>
                        <id>mule-public</id>
                        <url>https://repository.mulesoft.org/nexus/content/repositories/public</url>
                    </repository>
                </repositories>
                <pluginRepositories>
                    <pluginRepository>
                        <id>mule-public</id>
                        <url>https://repository.mulesoft.org/nexus/content/repositories/public</url>
                    </pluginRepository>
                </pluginRepositories>
            </profile>
            <profile>
                <id>Mule</id>
                <activation>
                    <activeByDefault>true</activeByDefault>
                </activation>
                <repositories>
                    <repository>
                        <id>MuleRepository</id>
                        <name>MuleRepository</name>
                        <url>https://repository.mulesoft.org/nexus-ee/content/repositories/releases-ee/</url>
                        <layout>default</layout>
                        <releases>
                            <enabled>true</enabled>
                        </releases>
                        <snapshots>
                            <enabled>true</enabled>
                        </snapshots>
                    </repository>
                    <repository>
                        <id>MuleRepositoryPublic</id>
                        <name>MuleRepositoryPublic</name>
                        <url>https://repository.mulesoft.org/nexus/content/repositories/public</url>
                        <layout>default</layout>
                        <releases>
                            <enabled>true</enabled>
                        </releases>
                        <snapshots>
                            <enabled>true</enabled>
                        </snapshots>
                    </repository>
                </repositories>
            </profile> -->
            <profile>
                <id>nexus</id>
                <activeProfiles>
                        <activeProfile>nexus</activeProfile>
                </activeProfiles>
                <repositories>
                    <repository>
                        <id>nexus-repo</id>
                        <url>http://nexus.fluig.com/content/groups/public/repository/nexus/</url>
                        <releases>
                            <enabled>true</enabled>
                        </releases>
                        <snapshots>
                            <enabled>true</enabled>
                        </snapshots>
                    </repository>
                </repositories>
            </profile>


        </profiles>
        <!-- <mirrors>
            <mirror>
                <id>nexus</id>
                <mirrorOf>*</mirrorOf>
                <name>Fluig Nexus Repository.</name>
                <url>http://nexus.fluig.com/content/groups/public</url>
            </mirror>

        </mirrors> -->
    </settings>
```

---

## Resposta #20

**Daniel Sales** (@Daniel_Sales) — 15/11/2025, 14:49

Ja conseguimos compilar e temos este fonte funcional já

---
