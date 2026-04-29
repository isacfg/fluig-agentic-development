# Desenvolvendo widgets compatíveis com modo escuro

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=965446583](https://tdn.totvs.com/pages/viewpage.action?pageId=965446583)

---

# Visão geral

* * *

O Fluig agora oferece suporte nativo ao modo escuro, proporcionando uma experiência visual mais confortável em ambientes com pouca luz.

Essa funcionalidade já está disponível nas widgets da plataforma e é habilitada automaticamente de acordo com o tema escolhido pelo usuário no Fluig.

Importante:

Para que sua widget fique compatível com o modo escuro, é fundamental seguir as orientações abaixo, principalmente se a widget possui estilos customizados ou utiliza plugins de terceiros.



## Como o modo escuro funciona internamente

* * *

O modo escuro é ativado automaticamente pela plataforma quando o usuário escolhe esse tema. Internamente, isso é feito adicionando a classe `theme-dark` na tag `<html>` do widget.

Com essa classe presente, o navegador passa a utilizar as variáveis CSS definidas dentro do seletor `html.theme-dark { ... }`, substituindo as definidas em `:root`.



**Exemplo simplificado:**

```
/* Variáveis do modo claro */
:root {
  --fs-color-neutral-light-00: #ffffff; // cor branca no modo claro
  --fs-color-brand-01-base: #0079b8; // não tem diferença entre modo claro e escuro
  --fs-color-brand-01-lightest: #e3eefb; // cor de brand tom mais claro
}

/* Variáveis do modo escuro */
html.theme-dark {
  --fs-color-neutral-light-00: #1c1c1c; // inverte para uma cor escura
  --fs-color-brand-01-base: #0079b8; // não tem diferença entre modo claro e escuro
  --fs-color-brand-01-lightest: #051f31; // inverte cor de bran tom mais escuro
}
```

Quando o modo escuro está ativo, os componentes e estilos que utilizam variáveis CSS (como `var(--fs-color-neutral-light-00)`) automaticamente herdam os valores definidos dentro de `html.theme-dark`.



Informação:

Isso permite alternar entre temas sem precisar alterar nenhuma estrutura de código na widget — basta usar as variáveis CSS corretamente.





## Boas práticas

* * *

✔ Priorize sempre o uso dos componentes e estilos do Style Guide Fluig.
✔ Evite o uso de cores fixas ou hardcoded no CSS.
✔ Teste a widget tanto no tema claro quanto no modo escuro antes de publicar.
✔ Consulte periodicamente o Style Guide para novas variáveis e atualizações.



## O que já funciona automaticamente

* * *

-   **Componentes padrão do Style Guide Fluig:**
    Todos os componentes visuais do Style Guide já estão preparados para o modo escuro. Se sua widget utiliza apenas esses componentes, **nenhuma ação é necessária**.

-   **Ativação automática:**
    O modo escuro da widget acompanha automaticamente o tema selecionado pelo usuário no Fluig. Não é necessário alterar código para detectar ou ativar o tema.




## Como adaptar estilos da widget para o modo escuro

* * *

### 1\. **Revisão do CSS Customizado**

Caso sua widget tenha estilos próprios definidos via CSS, é necessário substituir cores fixas por variáveis CSS disponibilizadas pela plataforma.

### **Exemplo de substituição:**

**Antes:**

```
.custom-style {
  background-color: #ffffff;
  color: #333333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

**Depois (compatível com modo escuro):**

```
.custom-field {
  background-color: var(--fs-color-neutral-light-00);
  color: var(--fs-color-neutral-dark-90);
  box-shadow: var(--fs-shadow-sm);
}
```

### 2\. **Onde encontrar as variáveis CSS**

Todas as variáveis disponíveis estão documentadas no **Fluig** **Style Guide**, na seção: **CSS > Themes - https://<SEU\_DOMINIO>/style-guide/css.html#themes**

Ali você encontra a lista completa de variáveis para cores, sombras, bordas, backgrounds e outros aspectos visuais.

Caso seja necessário definir cores manualmente, **siga estas diretrizes:**

**Direcionamentos Gerais**

Tipo de Cor

Variável CSS a Utilizar

Cor de texto "padrão"

var(--fs-color-neutral-dark-90)

Cor de texto "padrão" hover ou focus

var(--fs-color-neutral-dark-95)

Cor de fundo (geralmente branco)

var(--fs-color-neutral-light-00)

Cor de fundo cinza claro

var(--fs-color-neutral-light-05) ou var(--fs-color-neutral-light-10)

Cor de fundo cinza com destaque maior

var(--fs-color-neutral-light-20)

Cor de borda "padrão"

var(--fs-color-neutral-light-20) ou var(--fs-color-neutral-light-30)



## Atenção com plugins de terceiros

* * *

Se a widget utiliza bibliotecas ou plugins visuais de terceiros, é necessário:

-   Verificar se o plugin suporta tema escuro nativamente.

-   Caso não suporte, sobrescrever os estilos do plugin utilizando as variáveis CSS do Fluig.




## Exemplo de formatação customizada compatível

* * *

**HTML:**

```
<div class="my-widget">
  <div class="custom-container">
    <h1 class="custom-title">Minha Widget</h1>
  </div>
</div>
```

**CSS:**

```
.my-widget .custom-container {
  background-color: var(--fs-color-brand-01-base);
  padding: 16px;
}

.my-widget .custom-title {
  color: var(--fs-color-neutral-light-00);
  font-size: 24px;
}
```

## Exemplo de estilo específico para modo claro ou escuro

* * *

Caso precise definir estilos específicos para o modo claro e para o modo escuro, siga como no exemplo abaixo:

```
/* Definições de variáveis para o modo light */
:root {
  --my-custom-color: #0000ff; // azul
}

/* Definições de variáveis para o modo dark */
html.theme-dark {
  --my-custom-color: #ff0000; // vermelho
}

/* uso aplicando a variável em algum elemento */
.my-widget .my-custom-button {
  color: var(--my-custom-color); // se for modo claro será azul, se for modo escuro será vermelho
}
```



## Dúvidas ou suporte

* * *

Em caso de dúvidas, procure o time responsável pelo Fluig ou abra um chamado pela central de suporte.
