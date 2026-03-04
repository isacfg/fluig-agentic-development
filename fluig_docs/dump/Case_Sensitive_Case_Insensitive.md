# Case Sensitive / Case Insensitive

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=754248018](https://tdn.totvs.com/pages/viewpage.action?pageId=754248018)

---

* * *

O Fluig lida com múltiplos bancos de dados e sistemas operacionais, e foi escrito em linguagens de programação que diferenciam letras maiúsculas e minúsculas (*case*) por isso deve-se sempre ficar atendo ao *case* nas consultas e no desenvolvimento.

# Case Sensitive

Por padrão, considere sempre que a função ou método diferencia letras maiúsculas de letras minúsculas, ou seja, que é *case sensitive*  (sensível a maiúsculas/minúsculas). A função "buscaDadoDoCampo" não existe no fluig, mas para exemplificar o que é a diferenciação das letras:

```
value = buscaDadoDoCampo("codigoDoCliente") // retorna o valor correto
value = buscaDadoDoCampo("codigodocliente") // retorna null
value = buscaDadoDoCampo("CODIGODOCLIENTE") // retorna null
```



# Case Insensitive

Quando especificado na função que ela é *case insensitive*, é sinal que ela não faz diferenciação entre letras maiúsculas e minúsculas, ou seja, que é insensível a maiúsculas/minúsculas. Usando o mesmo exemplo anterior, da função imaginária "buscaDadoDoCampo", mas dessa vez considerando que ela **não** diferencia as letras:

```
value = buscaDadoDoCampo("codigoDoCliente") // retorna o valor correto
value = buscaDadoDoCampo("codigodocliente") // retorna o valor correto
value = buscaDadoDoCampo("CODIGODOCLIENTE") // retorna o valor correto
```
