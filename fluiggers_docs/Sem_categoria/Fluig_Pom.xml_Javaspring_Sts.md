# Fluig Pom.xml Javaspring Sts

> **Fonte:** [https://fluiggers.com.br/t/fluig-pom-xml-javaspring-sts/3246](https://fluiggers.com.br/t/fluig-pom-xml-javaspring-sts/3246)
> **Categoria:** Sem categoria
> **Criado em:** 14/04/2025, 12:09
> **Visualizações:** 83 | **Likes:** 0 | **Respostas:** 4

---

## Pergunta original

**Leonidas** (@leonidas) — 14/04/2025, 12:09

![pom](https://fluiggers.com.br/uploads/default/original/2X/e/e5d8f05e9568b1ec4b464c6f3229cd6b0d3a4ca5.png)

Não consigo fazer funcionar o Fluig no meu Pom.xml alguem poderia me ajudar, as referencias estão corretas?

```auto
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://maven.apache.org/POM/4.0.0"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
   <modelVersion>4.0.0</modelVersion>


  <groupId>com.fluig</groupId>
  <artifactId>metus</artifactId>
  <version>1.0.0</version>
  <packaging>war</packaging>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.0.3.RELEASE</version>
    <relativePath/>
  </parent>

  <name>METUS - Api Backend</name>
  <description>API responsável pelas requisições REST</description>


  <repositories>
    <repository>
      <id>nexus</id>
      <name>Fluig Nexus Repository</name>
      <url>http://nexus.fluig.com/content/groups/public</url>
    </repository>
  </repositories>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
    <java.version>1.8</java.version>
    <m2e.cdi.activation>false</m2e.cdi.activation>
    <lombok.version>1.18.2</lombok.version>
    <fluig.version>1.8.1</fluig.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-io</artifactId>
      <version>1.3.2</version>
    </dependency>
    <dependency>
      <groupId>com.h2database</groupId>
      <artifactId>h2</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>javax.el</groupId>
      <artifactId>javax.el-api</artifactId>
      <version>3.0.0</version>
    </dependency>
    <dependency>
      <groupId>org.glassfish</groupId>
      <artifactId>javax.el</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-websocket</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-messaging</artifactId>
    </dependency>
    <dependency>
      <groupId>org.webjars</groupId>
      <artifactId>webjars-locator-core</artifactId>
    </dependency>
    <dependency>
      <groupId>org.webjars</groupId>
      <artifactId>sockjs-client</artifactId>
      <version>1.0.2</version>
    </dependency>
    <dependency>
      <groupId>org.webjars</groupId>
      <artifactId>stomp-websocket</artifactId>
      <version>2.3.3</version>
    </dependency>
    <dependency>
      <groupId>org.codehaus.jackson</groupId>
      <artifactId>jackson-mapper-asl</artifactId>
      <version>1.9.13</version>
    </dependency>
    <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-databind</artifactId>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>io.springfox</groupId>
      <artifactId>springfox-swagger-ui</artifactId>
      <version>2.9.2</version>
    </dependency>
    <dependency>
      <groupId>io.springfox</groupId>
      <artifactId>springfox-swagger2</artifactId>
      <version>2.9.2</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-jpa</artifactId>
      <exclusions>
        <exclusion>
          <groupId>org.hibernate</groupId>
          <artifactId>hibernate-core</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
      <version>5.4.15.Final</version>
      <exclusions>
        <exclusion>
          <groupId>javax.persistence</groupId>
          <artifactId>javax.persistence-api</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
    <dependency>
      <groupId>org.hibernate.javax.persistence</groupId>
      <artifactId>hibernate-jpa-2.1-api</artifactId>
      <version>1.0.2.Final</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <scope>provided</scope>
    </dependency>

    <!-- Configurações para o Fluig -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Dependências para testes -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>com.microsoft.sqlserver</groupId>
      <artifactId>mssql-jdbc</artifactId>
      <scope>runtime</scope>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
    </dependency>
    <dependency>
      <groupId>com.oracle.jdbc</groupId>
      <artifactId>ojdbc8</artifactId>
      <version>12.2.0.1</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
      <optional>true</optional>
    </dependency>
    <dependency>
      <groupId>org.apache.httpcomponents</groupId>
      <artifactId>httpclient</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>com.thoughtworks.xstream</groupId>
      <artifactId>xstream</artifactId>
      <version>1.4.9</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>com.vaadin.external.google</groupId>
      <artifactId>android-json</artifactId>
      <version>0.0.20131108.vaadin1</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-test</artifactId>
      <version>2.1.6.RELEASE</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>5.1.8.RELEASE</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.json</groupId>
      <artifactId>json</artifactId>
      <version>20190722</version>
    </dependency>

    <!-- Dependências do Fluig  -->
    <dependency>
      <groupId>com.fluig</groupId>
      <artifactId>oauth-client</artifactId>
      <version>1.0</version>
    </dependency>
    <dependency>
      <groupId>com.fluig</groupId>
      <artifactId>api-client-env</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>


    <!-- Outras dependências diversas -->
    <dependency>
      <groupId>commons-fileupload</groupId>
      <artifactId>commons-fileupload</artifactId>
      <version>1.3.1</version>
    </dependency>
    <dependency>
      <groupId>commons-io</groupId>
      <artifactId>commons-io</artifactId>
      <version>2.6</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-mail</artifactId>
      <version>2.0.1.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context-support</artifactId>
      <version>5.0.1.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    <dependency>
      <groupId>io.jsonwebtoken</groupId>
      <artifactId>jjwt</artifactId>
      <version>0.9.1</version>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-amqp</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-reactor-netty</artifactId>
    </dependency>
    <dependency>
      <groupId>com.itextpdf</groupId>
      <artifactId>itextpdf</artifactId>
      <version>5.5.13.1</version>
    </dependency>
    <dependency>
      <groupId>org.apache.any23</groupId>
      <artifactId>apache-any23-csvutils</artifactId>
      <version>2.3</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <configuration>
          <skipTests>true</skipTests>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/04/2025, 13:34

Você configurou as credenciais do repositório?

---

## Resposta #2

**Leonidas** (@leonidas) — 14/04/2025, 18:10

Como isso deve ser feito? tenho que criar um arquivo settgins.xml ? onde coloca-lo? o que ele deve conter?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/04/2025, 18:46

Pois é, eu descobri isso quando fui fazer o curso [Adaptando seu componente para a TOTVS Store](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=52).

Basicamente tem que abrir um chamado pra TOTVS pedindo credenciais pra acessar o repositório Nexus do Fluig.

No `settings.xml`, que fica na pasta `conf` da instalação do Maven, tem a tag `servers`. Nela é só adicionar a configuração.

![image](https://fluiggers.com.br/uploads/default/original/2X/0/0f96c8bd63dc6c72be8b713cff210cce07c49ee1.png)

---

## Resposta #4

**Leonidas** (@leonidas) — 14/04/2025, 20:09

aparentemente resolveu quase todos os erros, ficaram alguns mas deve ser pelo fato de minhas credenciais serem invalidas, vou abrir o chamado para solicitar, obrigado por sua ajuda

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/04/2025, 22:55

Já percebi que algumas partes do repositório são acessíveis com uma senha especial/diferente.

Ao menos a credencial que me deram não permite baixar algumas coisas e nem entrar em alguns itens do repositório. Lembro que no curso o professor usava um recurso de pesquisa no repositório e quando tentei usar pedia outra senha também

---
