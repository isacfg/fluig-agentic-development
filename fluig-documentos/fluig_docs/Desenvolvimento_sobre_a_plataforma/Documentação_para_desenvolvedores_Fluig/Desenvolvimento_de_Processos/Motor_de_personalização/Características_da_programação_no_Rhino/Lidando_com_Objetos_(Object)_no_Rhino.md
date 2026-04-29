# Lidando com Objetos (Object) no Rhino

> **Fonte:** [https://tdn.totvs.com/display/fluig/Lidando+com+Objetos+%28Object%29+no+Rhino](https://tdn.totvs.com/display/fluig/Lidando+com+Objetos+%28Object%29+no+Rhino)

---

* * *



Esta página não tem como objetivo ser um guia de como programar com Rhino ou mesmo como um "aprenda a programar", mas sim para listar algumas características interessantes que serão referenciadas em outros pontos da documentação. Se você ainda não tem experiência com o desenvolvimento no Rhino, recomendamos que deixe essa documentação para o futuro.



Nas personalizações é normal que uma função retorne um objeto com dados de retorno. Cada função tem um retorno diferente, podendo ser número, uma string, uma lista, um mapa ou um objeto.

No caso dos objetos, é feito uma conversão do objeto Java para javascript, o que permite que seus atributos possam ser acessados tanto diretamente quanto pelas funções get como é feito no java.  Recomendamos usar sempre da forma nativa de acesso direto ao atributo por deixar o código mais legível, exceto quando a documentação explicitamente recomendar o uso no formato java.

Como exemplo, supomos que o retorno de uma função seja o objeto Example, que tenha os atributos id e name:

```
public class Example {
   private int id;
   private String name;

   public int getId() {
      return id;
   }

   public void setId(int id) {
     this.id = id;
  }

  public String getName() {
     return name;
  }
  public void setName(String name) {
     this.name = name;
  }
}
```

## Exemplo da flexibilidade do objeto:

Este é apenas um exemplo, não deve ser usado dessa forma por questões de legibilidade de código

```
var retorno = funcao(); // retorna o objeto do tipo Example com id = 1 e name = João

console.log(retorno.id); // imprime o valor 1

retorno.id++;
console.log(retorno.id); // imprime o valor 2

retorno.id = retorno.id + 1;
console.log(retorno.getId()); // imprime o valor 3

retorno.setId(4);
console.log(retorno.id); // imprime o valor 4

console.log(retorno.name); // imprime o valor João
console.log(retorno.getName()); // imprime o valor João

retorno.name = "José";
console.log(retorno.getName()); // imprime o valor José
```

## Utilização na forma nativa:

```
var retorno = funcao(); // retorna o objeto do tipo Example com id = 1 e name = João
console.log(retorno.id); // imprime o valor 1
console.log(retorno.name); // imprime o valor João

retorno.id = retorno.id + 1;
retorno.name = "José";
console.log(retorno.id); // imprime o valor 2
console.log(retorno.name); // imprime o valor José
```

## Utilização na forma Java:

```
var retorno = funcao(); // retorna o objeto do tipo Example com id = 1 e name = João
console.log(retorno.getId()); // imprime o valor 1
console.log(retorno.getName()); // imprime o valor João

retorno.setId(retorno.getId() + 1);
retorno.setName("José");
console.log(retorno.getId()); // imprime o valor 2
console.log(retorno.getName()); // imprime o valor José
```
