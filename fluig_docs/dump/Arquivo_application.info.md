# Arquivo application.info

> **Fonte:** [https://tdn.totvs.com/display/fluig/Arquivo+application.info](https://tdn.totvs.com/display/fluig/Arquivo+application.info)

---

# Índice



# Objetivo

O objetivo desse guia é apresentar as propriedades dos componentes que fazem parte da plataforma Fluig.



# Arquivo application.info

Os componentes como *layouts* e *widgets* possuem um arquivo chamado application.info. Esse arquivo contém várias propriedades e informações importantes para o correto funcionamento dos componentes. A seguir são apresentadas as propriedades que são comuns a todos os componentes e também as específicas de cada componente.



## Propriedades comuns a todos os tipos de componentes

As propriedades apresentadas a seguir aparecem em todos os tipos de componentes.

Propriedade

Descrição

**application.type** 

O valor define qual o tipo do componente: "*widget*", "*layout*" ou "*theme*".

**application.title**

Título do seu componente. Utilizado para as telas em que é apresentado em uma lista - adição de *widgets*, por exemplo.

Esta informação também deve ser incluída nos arquivos de [internacionalização](https://tdn.totvs.com/pages/viewpage.action?pageId=185738869) (.properties) para que seja aplicada na *widget.*

**application.code**

Código único de identificação do componente. Geralmente é usado um nome que indica a função do componente.

Ex.: se o título de um *widget* for *"Teste de Qualidade"*, seu código pode ser *"testedequalidade"*, *"testequalidade"*, *"teste\_qualidade"* etc.

**application.description**

Uma breve explicação sobre a aplicação do componente. Considerando o exemplo do *widget* fictício "Teste de Qualidade", poderíamos fazer a seguinte descrição: *"Utilitário integrado às rotinas de teste de qualidade do ERP".*

O tamanho mínimo da descrição é 1 caractere e o tamanho máximo é de 255 caracteres.

**application.category**

Categoria do componente. Propriedade utilizada para filtro em determinados recursos da plataforma, como por exemplo, a tela de seleção de *widget* quando se edita uma página.

**application.renderer**

Indica o tipo de renderizador exigido. Atualmente somente o valor *"freemarker"* é suportado.

**application.icon**

Ícone para representação visual. Caso não informado, a plataforma assumirá um ícone padrão para sua representação visual.

**developer.code** 

Código do desenvolvedor. Para uso interno da plataforma.

**developer.name**

Nome do desenvolvedor. Para uso interno da plataforma.

**developer.url** 

URL do desenvolvedor. Para uso interno da plataforma.

**locale.file.base.name**

Nome base do arquivo de tradução que será seguido pelo *locale.* Ex.: prefixo\_PT\_BR e prefixo\_EN\_US. Se não informado, é usado o código do *layout*. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=185738869).

**application.resource.css.1**

Opcional. Nome do arquivo CSS a ser carregado durante a renderização. Podem ser informados vários arquivos. O número no final do nome da propriedade indica a ordem de carga. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=237386447).

**application.resource.js.2**

Opcional. Nome do arquivo JS a ser carregado durante a renderização. Podem ser informados vários arquivos. O número no final do nome da propriedade indica a ordem de carga. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=237386421).

**application.origincode**

Opcional. Usado quando se está extendendo um componente, deve ser informado o código do componente de origem.

**application.extensible**

Opcional. Define se um componente pode ser extensível ou não, por padrão seu valor é false

## Propriedades específicas para *Widgets*

A seguir são apresentadas as propriedades que são específicas dos componentes do tipo *Widget*.

Propriedade

Descrição

**edit.file**

Nome do arquivo a ser renderizado na edição do *widget*. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=237386481).

**view.file**

Nome do arquivo a ser renderizado na visualização do *widget*. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=237386463).

**simple.deploy**

(*true* ou *false*)

Quando marcado como *true*, será feito *deploy* apenas dos conteúdos estáticos do *widget*. Classes Java, por exemplo, serão ignoradas. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=237386561).

Se marcado como *false*, será feito *deploy* também das classes Java e, caso o *widget* esteja dentro de um EAR, ele será extraído.

**application.uiwidget**

(*true* ou *false*)

 Propriedade específica para a listagem de *widget* na tela de edição de páginas. Entenda melhor [aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=237386495).



## Propriedades específicas para *Layouts*

As propriedades específicas dos componentes do tipo *Layout* são descritas a seguir:

Propriedade

Descrição

**layout.file**

Nome do arquivo a ser renderizado. Se não for informado, é assumido como “layout.ftl”.

**slot.SlotMenu**

Opcional. Entretanto, quando o arquivo .ftl possuir *slot* de menu (SlotMenu), é necessário informar qual *widget* de menu deve ser utilizado. Nesse caso, *"menu"* deve ser informado. Entenda melhor [aqui](https://tdn.totvs.com/display/fluig/Layouts#Layouts-SobreSlotsNãoEditáveis).

**slot.SlotLogin**

Opcional. Entretanto, quando o arquivo .ftl possuir *slot* de *login* (SlotLogin), é necessário informar qual *widget* de *login* deve ser utilizado. Apesar de haver mais de uma opção para menu, recomendamos a utilização do valor *"sociallogin"* nesse caso. Entenda melhor [aqui](https://tdn.totvs.com/display/fluig/Layouts#Layouts-SobreSlotsNãoEditáveis).

**application.uilayout**

Opcional. Default *true* (*true* ou *false*)

 Propriedade específica para a listagem de *layouts* na tela de edição de páginas ou na tela de troca de layout.

**application.responsiveLayout=true|false**

Validação necessária para informar se o layout está escrito de forma responsivo.

A propriedade application.responsiveLayout=true|false estará disponível a partir da **release 1.8.1** do TOTVS Fluig Plataforma.

**application.newBuilder=true|false**

Validação para o carregamento no novo construtor de páginas. Entenda melhor **[aqui](https://tdn.totvs.com/x/fYP5DQ)**.

A propriedade application.newBuilder=true|false estará disponível a partir da **release 1.8.1** do TOTVS Fluig Plataforma.
