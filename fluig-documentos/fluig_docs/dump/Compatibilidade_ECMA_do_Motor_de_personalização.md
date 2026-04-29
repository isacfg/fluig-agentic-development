# Compatibilidade ECMA do Motor de personalização

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=757236189](https://tdn.totvs.com/pages/viewpage.action?pageId=757236189)

---

* * *



O Rhino, nosso [motor de personalização](https://tdn.totvs.com/pages/viewpage.action?pageId=757236186), é compatível com a especificação **ECMA 5**, que define a linguagem JavaScript. A ECMA 5 introduziu várias melhorias na linguagem, incluindo suporte para programação orientada a objetos, estruturas de controle avançadas e novos métodos para manipulação de arrays e strings.

Com a compatibilidade com o ECMA 5, o Rhino permite aos usuários do Fluig usar recursos avançados da linguagem JavaScript em seus processos de negócios, o que pode melhorar a eficiência e a flexibilidade das operações da empresa.

Sendo assim, apresenta incompatibilidade com o padrão ECMA 6, também conhecido como ECMAScript 2015. Isso significa que algumas funcionalidades introduzidas nesta versão, como o uso de classes, arrow functions e let/const, **não podem ser utilizadas no desenvolvimento de scripts dentro da plataforma**.

É importante ter em mente essa limitação ao planejar o desenvolvimento de processos e customizações que envolvam o uso de scripts. 

# Exemplos de código que funcionam

```
var a = "";

var b;
b = "";

c = "";

d = function() {}

var e = function() {}

function f() {}
```

# Exemplos de códigos que NÃO funcionam

```
let a = ""; // 'let' não deve ser utilizado

const b = "" // 'const' não deve ser utilizado

var c = () => {} // 'arrow functions' não devem ser utilizados
```
