# console

> **Fonte:** [https://tdn.totvs.com/display/fluig/console](https://tdn.totvs.com/display/fluig/console)

---

O **console** é um objeto disponibilizado dentro do ambiente de execução de personalizações. Sua função é permitir que o desenvolvedor registre mensagens, variáveis e o estado de objetos para fins de depuração, rastreio ou monitoramento no log da aplicação.

Esse objeto foi incluído na **atualização 2.0**. Nas versões anteriores, o nome desse objeto é **log**.



# Descrição

* * *

A principal característica do console é a capacidade de realizar logs em diferentes níveis de necessidade e criticidade: desde logs extremamente detalhados (TRACE e DEBUG) até mensagens informativas (INFO, que inclui o log padrão), alertas de desvios não críticos (WARN) e logs de falhas graves (ERROR e FATAL).

Além de imprimir mensagens textuais simples e concatenadas, o console permite a inspeção de objetos complexos (como Mapas, Listas e Objetos) através do método *dir*(). Este método *serializa* a estrutura do objeto para uma representação JSON indentada e legível, facilitando a análise e o rastreio de dados estruturados dentro dos logs.

O objeto console é disponibilizado em todos os pontos de extensão de script do sistema, permitindo o rastreio consistente em eventos de processo, datasets, notificações e eventos globais.

As mensagens registradas através deste objeto são processadas e, dependendo da configuração de log do ambiente, serão gravadas nos arquivos de log correspondentes (por exemplo, server.log).



# Métodos da instância

* * *

[void log(Object message \[, Object message.. \] )](https://tdn.totvs.com/display/fluig/console.log)

-   Imprime uma mensagem (ou várias strings concatenadas) em nível de INFO 



void warn(Object message \[, Object message.. \] )

-   Imprime uma mensagem (ou várias strings concatenadas) em nível de WARN



void error(Object message \[, Object message.. \] )

-   Imprime uma mensagem (ou várias strings concatenadas) em nível de ERROR



void debug(Object message \[, Object message.. \] )

-   Imprime uma mensagem (ou várias strings concatenadas) em nível de DEBUG



[void dir(Object message \[, Object message.. \] )](https://tdn.totvs.com/display/fluig/console.dir)

-   Imprime um objeto (ou vários objectos concatenadas) no formato json em nível de INFO



# Limitando a linha de log

* * *

Para evitar o consumo excessivo de memória ou disco com logs muito longos, todas as mensagens geradas pelos métodos console.log, console.info, console.warn, console.error, etc., estão sujeitas a um truncamento automático.

O comprimento máximo da mensagem é definido pela propriedade de sistema com.fluig.sdk.api.log.ScriptingLog.truncateLength. Se a mensagem exceder este limite, ela será cortada e as reticências \[...\] serão adicionadas ao final. 

Para configurar esse limite de conteúdo impresso nos eventos de personalização basta adicionar na [configuração de inicialização](https://tdn.totvs.com/display/fluig/Configurando+Propriedades+do+Sistema+via+JAVA_OPTS) o parâmetro com.fluig.sdk.api.log.ScriptingLog.truncateLength:

```
JAVA_OPTS="$JAVA_OPTS -Dcom.fluig.sdk.api.log.ScriptingLog.truncateLength=500"
```
```
set "JAVA_OPTS=%JAVA_OPTS% -Dcom.fluig.sdk.api.log.ScriptingLog.truncateLength=500"
```



Se nenhum parâmetro for informado, a mensagem não será cortada. Lembre-se que isso pode apresentar um custo de processamento e I/O do servidor e pode afetar a performance do seu servidor.



# Ocultando no console do servidor

* * *

Todo os logs de eventos personalizados, por padrão, são impressos no console e no armazenados no arquivo server.log. É possível também, para economizar recursos, manter esse apenas em arquivo e não no console. Principalmente em ambientes que em que o console do servidor não é monitorado diretamente, essa é uma solução inteligente para economizar recursos. Para isso, basta editar o arquivo standalone.xml:

```
<profile>
   <subsystem xmlns="urn:jboss:domain:logging:8.0">
       <!-- ... -->
       <logger category="com.fluig.sdk.api.log.ScriptingLog" use-parent-handlers="false">
      <level name="INFO"/>
      <handlers>
          <handler name="FILE"/>
      </handlers>
       </logger>
    </subsystem>
 <profile>
```
