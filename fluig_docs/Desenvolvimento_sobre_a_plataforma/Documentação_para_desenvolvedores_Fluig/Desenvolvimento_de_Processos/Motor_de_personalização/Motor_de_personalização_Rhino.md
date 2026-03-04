# Motor de personalização Rhino

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=757236186](https://tdn.totvs.com/pages/viewpage.action?pageId=757236186)

---

* * *

O Fluig utiliza como motor de personalizações no servidor o Rhino. Embora o Rhino seja um motor JavaScript que tenha sido descontinuado na versão 1.8 da OpenJDK em favor do Nashorn, o Fluig ainda usa uma versão do Rhino.

A decisão de manter o Rhino como motor foi porque muitos scripts em execução nos clientes que foram criados com o Rhino não seriam compatíveis com o Nashorn. 

Rhino é um interpretador JavaScript escrito em Java. É uma biblioteca open source que fornece um ambiente de tempo de execução JavaScript completo para desenvolvedores Java. Ele foi criado para fornecer uma implementação completa do [ECMAScript 5](https://tdn.totvs.com/pages/viewpage.action?pageId=757236189), que é uma especificação padrão para a linguagem de programação JavaScript. 

Ele é capaz de interpretar e executar o código JavaScript e a incorporação de códigos Java em tempo de execução, permitindo a execução de scripts dinâmicos. Essa característica é útil para desenvolvedores que precisam escrever código em Java e JavaScript ao mesmo tempo, permitindo a interação entre as duas linguagens no mesmo ambiente.
