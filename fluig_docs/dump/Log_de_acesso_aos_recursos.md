# Log de acesso aos recursos

> **Fonte:** [https://tdn.totvs.com/display/fluig/Log+de+acesso+aos+recursos](https://tdn.totvs.com/display/fluig/Log+de+acesso+aos+recursos)

---

Fique atento!

Esta página é válida para atualizações **1.7.0-210504** e **superiores** do TOTVS Fluig.





# Objetivo

* * *

O objetivo deste guia é auxiliar o suporte e desenvolvedores da plataforma a ativar as mensagens de *log* que trazem informações relevantes sobre os acessos a algumas URLs importantes do produto. Essencialmente, esse *log* ajuda a identificar se a plataforma está lenta porque está recebendo muitas requisições.



# Pré-requisitos

* * *

Para ativar e monitorar as mensagens de *log*, é importante conhecer o procedimento de [Gestão de *logs*](https://tdn.totvs.com/pages/viewpage.action?pageId=203764136).  



# Ativando o modo DEBUG

* * *

Para habilitar, siga os passos abaixo:

**01**. Acesse o arquivo **standalone.xml** localizado em **\[diretório\_instalação\]/appserver/standalone/configuration/** e procure por:

```
<logger category="URL_ACCESS_LOG">
          <level name="WARN" />
          <handlers>
            <handler name="LOGURL" />
          </handlers>
        </logger>
```

**02**. Em seguida, altere a linha: **<level name="WARN" />** para: **<level name="DEBUG" />**.

**03**. Reinicie os serviços do Fluig.

**01**. Acesse o arquivo **domain.xml** localizado em **\[diretório\_instalação\]/appserver/domain/configuration/** e procure por:

```
<logger category="URL_ACCESS_LOG">
          <level name="WARN" />
          <handlers>
            <handler name="LOGURL" />
          </handlers>
        </logger>
```

**02**. Em seguida, altere a linha: **<level name="WARN" />** para: **<level name="DEBUG" />**.

**03**. Reinicie os serviços do Fluig.

Com isso, será criado um novo arquivo na pasta de *logs*, chamado **logurl.log**.

Importante!

A ativação do modo Debug pode causar impacto na performance da plataforma, portanto habilite-a apenas quando necessário e desative-a ao concluir a análise.
