# Biblioteca WCM

> **Fonte:** [https://tdn.totvs.com/display/fluig/Biblioteca+WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM)

---

# Índice

# Objetivo

O objetivo deste guia é apresentar as características da biblioteca WCM.

# Conceito

A biblioteca WCM contém os elementos básicos que podem ser inseridos num *layout* na sua montagem, elementos tais como menu, cabeçalho e rodapé da página.

# Importação da biblioteca

Para utilizar a biblioteca WCM é necessário fazer a sua importação no *layout*. A importação é feita inserindo o seguinte código no topo do arquivo do *layout*:

```
<#import "/wcm.ftl" as wcm/>
```

Após importada, sua utilização é feita da seguinte maneira:

```
<@wcm.FUNÇÃO PARÂMETROS/>
 
Ex:
<@wcm.header authenticated="true"/>
<@wcm.menu />
```

# Funções disponíveis

As funções disponíveis na biblioteca WCM são apresentadas nos quadros a seguir:

### ***Header*** 

Insere o cabeçalho no *layout*, podendo indicar por parâmetro se é publico ou não.

```
<@wcm.header authenticated="true"/>
```

Parâmetro

Valores

Valor padrão

Obrigatório

Descrição

authenticated

true/false

false

Não

Indica se o cabeçalho é publico ou se o usuário precisa estar logado para visualizá-lo.

**Figura 1 - Cabeçalho do *layout***

### Menu

Insere o menu no *layout* e não possui parâmetros.

```
<@wcm.menu />
```

**Figura 2 - Menu lateral do *layout***

### ***RenderSlot***

Insere um *slot* no *layout*. Os parâmetros incluem o id do *slot* e se o *slot* é editável ou não.

```
<@wcm.renderSlot id="SlotA" editableSlot="true"/>
```

Parâmetro

Valores

Valor padrão

Obrigatório

Descrição

id

string

Não possui

Sim

Valor do id do *slot*. Ex.: "SlotA".

decorator

true/false

false

Não

Indica se o título do *widget* será renderizado.

editableSlot

true/false

false

Não

Indica se o *slot* é editável ou não.

class

string

Não possui

Não

Classe CSS a ser inserida no *slot*.

**Figura 2 - *Slot* do *layout***

### ***Footer***

Insere o rodapé no *layout*. Recebe por parâmetro a chave da *label* a ser exibida antes do nome do usuário.

```
<@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
```

Parâmetro

Valores

Valor padrão

Obrigatório

Descrição

layoutuserlabel

string

Não possui

Sim

Chave i18n da label a ser exibida antes do nome do usuário.

Ex.: **Usuário**: João da Silva

**Figura  4 - Rodapé do *layout***
