# Liberar memória JAVA - consumo excessivo

> **Fonte:** [https://fluiggers.com.br/t/liberar-memoria-java-consumo-excessivo/2909](https://fluiggers.com.br/t/liberar-memoria-java-consumo-excessivo/2909)
> **Categoria:** Ambiente Fluig
> **Criado em:** 31/07/2024, 12:44
> **Visualizações:** 69 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Rafael Rubin** (@rafaelrubin) — 31/07/2024, 12:44

Boa tarde.

Tenho algumas tarefas pesadas que utilizo via BPM, que em virtude de sua característica, me forçou a aumentar a memória disponível para uso no arquivo host.xml:

```
<server auto-start="true" group="fluig" name="fluig1">
        <jvm name="default">
            <heap max-size="12g" size="2g"/>
            <jvm-options>
                <option value="-Dfile.encoding=utf8"/>
                <option value="-XX:MaxMetaspaceSize=1024m"/>
                <option value="-Djavamelody.disabled=true"/>
            </jvm-options>
        </jvm>
    </server></servers>
```

Essa situação me resolve um problema de evitar o erro “Java Heap Space” no meio da transação. No entanto, como efeito colateral, notei que o pico de memória consumido não é liberado ao fim do processamento da thread. É possível, de forma explícita, liberar essa memória alocada ao fim do processo (como um Garbage Collector)?

---
