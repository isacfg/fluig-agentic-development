# Lidando com Mapa (Map) no Rhino

> **Fonte:** [https://tdn.totvs.com/display/fluig/Lidando+com+Mapa+%28Map%29+no+Rhino](https://tdn.totvs.com/display/fluig/Lidando+com+Mapa+%28Map%29+no+Rhino)

---

* * *



Esta página não tem como objetivo ser um guia de como programar com Rhino ou mesmo como um "aprenda a programar", mas sim para listar algumas características interessantes que serão referenciadas em outros pontos da documentação. Se você ainda não tem experiência com o desenvolvimento no Rhino, recomendamos que deixe essa documentação para o futuro.



Em vários momentos da personalização lidamos com o que chamamos de **mapa**. Mapa nada mais é que um conjunto de itens com chave/valor.

No [Rhino](https://tdn.totvs.com/pages/viewpage.action?pageId=757236186), existem duas formas de trabalhar com mapas, de forma nativa ou na forma do java. A forma nativa, nada mais é que o um objeto simples do javascript, já na forma Java é utilizando as classes Java que implementam a interface **java.util.Map** como o **java.util.HashMap**. 

Recomendamos usar sempre da forma Java por ter uma maior compatibilidade com os nossos métodos, exceto quando a documentação permitir o uso da forma nativa, o que deixara o código mais legível.

# Exemplo de um Mapa Nativo

```
var dados = {
   "nome": "João",
   "idade": 42,
   "salario": 2500.98
}

console.log("O salário de " + dados.nome + " (" + dados.idade + " anos) é de R$ " + dados.salario);
//imprime: O salário de João (42 anos) é de R$ 2500.98
```

# Exemplo de um Mapa Java

```
var dados = new java.util.HashMap();
dados.put("nome", "João");
dados.put("idade", 42);
dados.put("salario", 2500.98);

console.log("O salário de " + dados.get("nome") + " (" + dados.get("idade") + " anos) é de R$ " + dados.get("salario"));
//imprime: O salário de João (42 anos) é de R$ 2500.98
```
