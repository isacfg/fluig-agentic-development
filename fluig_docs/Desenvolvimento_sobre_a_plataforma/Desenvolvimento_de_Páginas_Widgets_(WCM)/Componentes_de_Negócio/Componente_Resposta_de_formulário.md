# Componente Resposta de formulário

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=185758540](https://tdn.totvs.com/pages/viewpage.action?pageId=185758540)

---

# Índice

# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Resposta de formulário**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Resposta de formulário

* * *

O componente **Resposta de formulário** tem como objetivo facilitar o processo de resposta de formulário, encapsulando todas as configurações básicas necessárias para a resposta de formulário e permitindo sua resposta em qualquer parte da plataforma sem perder a navegação atual, restando para o desenvolvedor somente configurar o *plugin*.

## Estrutura Básica

* * *

A seguir é apresentada a estrutura básica do componente:

```
SOCIALBC.openAnswerForm(formId);
```

O componente recebe um parâmetro, o id do formulário no ECM.

O parâmetro espera uma *string*.

```
var formId = '45';
```

## Utilização Básica

* * *

A utilização básica do componente é apresentada a seguir:

```
SOCIALBC.openAnswerForm('45');
```

No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência:

```
application.resource.component.1=social/socialformanswer
```

**Tela exibida ao chamar o componente**
