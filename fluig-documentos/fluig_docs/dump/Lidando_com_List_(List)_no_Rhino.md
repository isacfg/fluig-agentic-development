# Lidando com List (List) no Rhino

> **Fonte:** [https://tdn.totvs.com/display/fluig/Lidando+com+List+%28List%29+no+Rhino](https://tdn.totvs.com/display/fluig/Lidando+com+List+%28List%29+no+Rhino)

---

* * *



Esta página não tem como objetivo ser um guia de como programar com Rhino ou mesmo como um "aprenda a programar", mas sim para listar algumas características interessantes que serão referenciadas em outros pontos da documentação. Se você ainda não tem experiência com o desenvolvimento no Rhino, recomendamos que deixe essa documentação para o futuro.



Em vários momentos da personalização lidamos com o que chamamos de **lista**, ou **array**. 

No [Rhino](https://tdn.totvs.com/pages/viewpage.action?pageId=757236186), existem duas formas de trabalhar com listas, de forma nativa ou na forma do java. A forma nativa, nada mais é que o um array simples do javascript, já na forma Java é utilizando as classes Java que implementam a interface **java.util.List** como o **java.util.ArrayList**. 

Recomendamos usar sempre da forma Java por ter uma maior compatibilidade com os nossos métodos, exceto quando a documentação permitir o uso da forma nativa, o que deixara o código mais legível.

# Exemplo de uma Lista Nativa

```
var pessoas = ["João", "José", "Maria", "Helena"]

console.log("A primeira pessoa é " + pessoas[0]);

console.log("Esta é a lista completa de pessoas: ");

for (var i = 0; i < pessoas.length; i++) {
   console.log((i+1) + "- " + pessoas[i]);
}
/*
imprime:
A primeira pessoa é João
Esta é a lista completa de pessoas:
1- João
2- José
3- Maria
4- Helena
*/
```

# Exemplo de uma Lista Java

```
var pessoas = new java.util.ArrayList();
pessoas.add("João");
pessoas.add("José");
pessoas.add("Maria");
pessoas.add("Helena");

console.log("A primeira pessoa é " + pessoas.get(0));

console.log("Esta é a lista completa de pessoas: ");

for (var i = 0; i < pessoas.size(); i++) {
   console.log((i+1) + "- " + pessoas.get(i));
}
/*
imprime:
A primeira pessoa é João
Esta é a lista completa de pessoas:
1- João
2- José
3- Maria
4- Helena
*/
```
