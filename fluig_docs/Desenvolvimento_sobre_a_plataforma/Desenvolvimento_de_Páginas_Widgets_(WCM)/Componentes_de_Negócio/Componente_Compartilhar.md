# Componente Compartilhar

> **Fonte:** [https://tdn.totvs.com/display/fluig/Componente+Compartilhar](https://tdn.totvs.com/display/fluig/Componente+Compartilhar)

---

# Índice



# Objetivo

* * *

Este guia é destinado aos desenvolvedores internos e externos da plataforma que desejam utilizar o componente **Compartilhar**. O objetivo é apresentar o seu funcionamento e o detalhamento de todos os parâmetros de configuração.



# Pré-requisitos

* * *

-   Conhecer os conceitos dos componentes de negócio do TOTVS Fluig Plataforma, disponíveis na página [Componentes de Negócio](https://tdn.totvs.com/pages/viewpage.action?pageId=160104507).



# Compartilhar

* * *

O componente **Compartilhar** tem como objetivo facilitar o processo de compartilhamento de conteúdo encapsulando todas as configurações básicas necessárias para o compartilhamento, restando para o desenvolvedor somente configurar o *plugin*.



## Estrutura Básica

* * *

A seguir é apresentada a estrutura básica do componente:

```
SOCIALBC.share(target, config);
```

O componente recebe dois parâmetros:

-   o primeiro, um objeto ***target*** que pode ser um objeto ou uma *string;*
-   e o segundo as configurações para o componente.

O primeiro parâmetro espera um objeto ou uma *string*:

```
// Pode ser um objeto resultante de um seletor jquery:
var obj = $('#meu_seletor');
 
// Pode ser uma string de um seletor jquery:
var obj = '#meu_seletor';
```

O segundo parâmetro espera um objeto com os valores: ***showOnlyLink**, **sourceType**, **type**, **preview**, **link*** e ***paramId***.

```
{
    showOnlyLink: "exibe apenas o link ex.:true or false,"
    sourceType: "tipo ex.:SOCIABLE,"
    type: "tipo do conteúdo ex.:POST,"
    preview: "uma miniatura do conteúdo que será compartilhado,"
    link: "url para acessar o recurso,"
    paramId: "id social"
}
```

## Utilização Básica

* * *

A utilização básica do componente é apresentada a seguir:

```
SOCIALBC.share('#seletor', {
    showOnlyLink: false,
    sourceType: 'SOCIABLE',
    type: 'POST',
    preview: '<div>Miniatura</div>',
    link: 'http://servidor/portal/p/1/post/usuario/12',
    paramId: 12
});
```

No [application.info](http://application.info) de seu *widget*, adicione o componente como dependência:

```
application.resource.component.2=social/socialshare
```

**
Tela exibida ao chamar o componente**

**
Tela exibida ao selecionar a opção compartilhar**

**
Mensagem exibida ao selecionar a opção copiar *link***

**
Tela exibida ao selecionar a opção compartilhar quando não existe o Flash no navegador**
