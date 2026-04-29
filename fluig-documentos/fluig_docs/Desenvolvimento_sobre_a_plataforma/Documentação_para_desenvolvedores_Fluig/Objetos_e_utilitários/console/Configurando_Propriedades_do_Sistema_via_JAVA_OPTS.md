# Configurando Propriedades do Sistema via JAVA_OPTS

> **Fonte:** [https://tdn.totvs.com/display/fluig/Configurando+Propriedades+do+Sistema+via+JAVA_OPTS](https://tdn.totvs.com/display/fluig/Configurando+Propriedades+do+Sistema+via+JAVA_OPTS)

---

# Objetivo

* * *

Este guia visa mostrar ajustar o comportamento do servidor, utilizamos os arquivos de script que preparam o ambiente antes da execução do Java.

# Introdução

* * *

O comportamento e a performance do Fluig são gerenciados através de scripts de configuração que preparam o ambiente da **Java Virtual Machine (JVM)** antes do servidor subir.

Embora o Fluig compartilhe a mesma lógica de negócio em diferentes plataformas, a forma como ele interage com o Sistema Operacional muda. Por isso, utilizamos os arquivos localizados em `/appserver/bin/` para definir as **Propriedades do Sistema** e parâmetros de memória. Estes arquivos garantem que as personalizações necessárias (como fuso horário, codificação de caracteres e limites de memória) sejam injetadas corretamente na variável `JAVA_OPTS` no momento da inicialização, garantindo a consistência do sistema tanto em ambientes **Windows** quanto **Linux**.

# Localização

* * *

O arquivo de configuração reside no diretório de binários do servidor (/appserver/bin/). Em ambientes Linux, deve ser utilizado o arquivo standalone.conf. Já em windows, o arquivo standalone.conf.bat.

**Arquivo**

**Sistema Operacional**

**Formato**

**`standalone.conf`**

Linux / Unix

Shell Script

**`standalone.conf.bat`**

Windows

Batch Script

# Configurando Propriedades do Sistema via JAVA\_OPTS

* * *

A variável **`JAVA_OPTS`** é um agrupador de parâmetros. Através dela, definimos as **Propriedades do Sistema** que o Java utilizará globalmente na aplicação. Sempre anexe sua configuração à variável existente para preservar as definições originais do Fluig.

```
# Exemplo: Definindo encoding como Propriedades do Sistema
JAVA_OPTS="$JAVA_OPTS -Dfile.encoding=utf8"
```
```
@rem Exemplo: Definindo encoding como Propriedades do Sistema
set "JAVA_OPTS=%JAVA_OPTS% -Dfile.encoding=utf8"
```

# Observações

* * *

-   **Sintaxe:** Toda Propriedade do Sistema deve ser precedida pelo prefixo `-D`.

-   **Memória:** Parâmetros como `-Xms` (mínimo) e `-Xmx` (máximo) também são inseridos no `JAVA_OPTS`, embora tecnicamente sejam flags de memória da JVM e não propriedades customizadas.

-   **Reinicialização:** Qualquer alteração nestes arquivos exige a **reinicialização** do Fluig para entrar em vigor.
