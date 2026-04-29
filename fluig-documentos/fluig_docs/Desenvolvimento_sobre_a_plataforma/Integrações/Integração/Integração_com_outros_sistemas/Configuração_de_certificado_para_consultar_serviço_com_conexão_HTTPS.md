# Configuração de certificado para consultar serviço com conexão HTTPS

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=539698864](https://tdn.totvs.com/pages/viewpage.action?pageId=539698864)

---

# Índice



# Objetivo

* * *

Essa documentação apresenta os passos necessários para realizar a importação do certificado de outros sistemas nas pastas de configuração do JDK do TOTVS Fluig Plataforma.



# Visão geral

* * *

Cada JVM possui uma configuração de certificados digitais reconhecidos. Ao consumir algum serviço ou endereço disponíveis em HTTPS via JAVA, podem ocorrer falhas de *handshake* ou comunicação ao consumir um endereço com certificado não reconhecido *(PKIX)*.

Normalmente os certificados ficam armazenados no arquivo **<path>\\jdk-64\\lib\\security\\cacerts**. Atenção, cada instalação de JAVA possui um arquivo *cacerts*. Ao trabalhar com certificados na JVM, importante especificar o caminho do arquivo *cacerts* correto.

Para interagir com o arquivo *cacerts*, existe uma ferramenta padrão JAVA chamada *keytool*. Para interagir com o arquivo *cacerts* via *keytool*, é preciso especificá-lo bem como a senha de acesso.  A senha padrão é **changeit**.



# Listar os certificados instalados

* * *

A partir da atualização 1.7:

```
<path>\jdk-64\bin\keytool -list -v -keystore <path>\jdk-64\lib\security\cacerts
```

Até a atualização 1.6.5:

```
<path>\jdk-64\jre\bin\keytool -list -v -keystore <path>\jdk-64\jre\lib\security\cacerts
```

Sendo que:

-   **<path>** é o caminho da raiz de instalação do fluig (por exemplo: /opt/fluig ou C:\\fluig)

Importante!

É importante rodar o console de execução em modo administrador. A senha padrão é **changeit**.



# Adicionar certificados

* * *

A partir da atualização 1.7:

```
<path>\jdk-64\bin\keytool -import -alias <alias do certificado> -keystore <path>\jdk-64\lib\security\cacerts -file <caminho do arquivo certificado.cer>
```

Até a atualização 1.6.5:

```
<path>\jdk-64\jre\bin\keytool -import -alias <alias do certificado> -keystore <path>\jdk-64\jre\lib\security\cacerts -file <caminho do arquivo certificado.cer>
```

Sendo que:

-   **<path>** é o caminho da raiz de instalação do Fluig (por exemplo: /opt/fluig ou C:\\fluig)
-   **<alias do certificado>** é um nome para referência, por exemplo caso você precise apagar o certificado posteriormente.
-   **<caminho do arquivo certificado.cer>** é o caminho completo do arquivo de certificado que você fará importação.

Importante!

É importante rodar o console de execução em modo administrador. A senha padrão é **changeit**.

Para ter efeito, após a configuração é necessário reiniciar os serviços da plataforma.



# Remover certificados

* * *

A partir da atualização 1.7:

```
<path>\jdk-64\bin\keytool -delete -alias <alias do certificado> -keystore <path>\jdk-64\lib\security\cacerts
```

Até a atualização 1.6.5:

```
<path>\jdk-64\jre\bin\keytool -delete -alias <alias do certificado> -keystore <path>\jdk-64\jre\lib\security\cacerts
```

Sendo que:

-   **<path>** é o caminho da raiz de instalação do Fluig (por exemplo: /opt/fluig ou C:\\fluig)
-   **<alias do certificado>** é um nome para referência, por exemplo caso você precise apagar o certificado posteriormente.

Importante!

É importante rodar o console de execução em modo administrador. A senha padrão é **changeit**.



# Como obter o certificado para adicionar à keystore?

* * *

Para saber qual certificado precisa ser adicionado, siga o passo a passo abaixo:

-   Acessar a URL do serviço no Chrome e clicar no Cadeado.

-   Clicar na opção do **Certificado**, para exibir suas propriedades.

-   Na aba **Detalhes**, clicar em **Copiar para Arquivo.**

-   Exportar com a opção de binário codificado.



# Saiba mais

* * *

Mais informações podem ser obtidas em:

-   *[Keytool command examples Java - add view ssl certificate in keyStore trustStore](http://www.java67.com/2012/09/keytool-command-examples-java-add-view-certificate-ssl.html#ixzz58EuQmZFw)* (em Inglês);

-   [Resolução de inconsistência (PKIX *path validation failed*) ao cadastrar serviço](https://centraldeatendimento.fluig.com/hc/pt-br/articles/4404174167575-Fluig-Plataforma-DES-Ao-cadastrar-servi%C3%A7o-retorna-o-erro-PKIX-path-validation-failed).
