# Principais Mudanças de Front-end - Fluig Voyager 2.0.0

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=976127718](https://tdn.totvs.com/pages/viewpage.action?pageId=976127718)

---

## Descrição

* * *

A versão **2.0.0** do produto traz mudanças estruturais e visuais importantes no frontend, com foco em modernização de bibliotecas, otimização de carregamento, reorganização de paths e introdução de novos recursos como classes helpers, variáveis CSS e modo escuro no tema responsivo.
O objetivo é melhorar desempenho, consistência visual e preparar o produto para evoluções futuras, reduzindo dependências legadas.

Importante:

Algumas alterações afetam compatibilidade com códigos customizados e temas antigos, exigindo ajustes manuais descritos abaixo.



## Migração do Rich Editor

* * *

Agora o componente de FLUIGC.richeditor é baseado no plugin **Kendo UI**.

-   **Impactos:**

    -   Variáveis globais `CKEDITOR` e `CKEDITOR_BASEPATH` **não existem mais**.

    -   Configurações aplicadas **após** a inicialização **não terão suporte**.

    -   Plugins personalizados devem seguir a nova API do `FLUIGC.richeditor`.




**Exemplo de implementação de ação personalizada:**

```
var richeditor = FLUIGC.richeditor('docConteudoCK', {
   extraPlugins: 'fluigimage, fluigvideo, printDocument',
   addExternal: [{
       id: 'printDocument',
       title: 'Imprimir documento',
       icon: 'k-i-print',
       callback: function(editor) {
           console.log('Callback do plugin printDocument', editor);
       }
   }]
});
```



## Mudanças no Style Guide e CSS

* * *

Abaixo estão listadas as principais mudanças visuais nessa nova atualização.

### Alterações visuais e de acessibilidade

Como parte da implementação do **Animalia Design System (Animalia DS)**, realizamos ajustes visuais em diversos elementos da interface. Essas alterações têm como objetivo melhorar a **experiência do usuário** e garantir maior aderência às práticas de **acessibilidade**.

-   **Tamanhos dos elementos:** botões, campos e demais componentes foram ampliados para facilitar a interação, especialmente em dispositivos móveis e para pessoas com necessidades específicas.

-   **Cores e contrastes:** paleta de cores revisada para assegurar legibilidade e conformidade com recomendações de acessibilidade (WCAG).

-   **Outros ajustes visuais:** espaçamentos, ícones e tipografia foram atualizados para proporcionar uma interface mais consistente, clara e inclusiva.


### Manutenção de estilos legados

Para mitigar impactos em cenários específicos, os estilos visuais da versão **1.8.2 ou inferior** foram preservados em um diretório dedicado. Esses arquivos devem ser utilizados **exclusivamente em formulários** e apenas em casos excepcionais, quando a adoção imediata dos novos padrões do **Animalia Design System** não for viável.

**Arquivos disponíveis em `/old/*`:**

-   `/style-guide/css/old/fluig-style-guide.min.css` (Classic)

-   `/style-guide/css/old/fluig-style-guide-flat.min.css` (Flat)


Importante:

O uso desses estilos antigos é **temporário** e não recomendado como solução definitiva. Recomendamos planejar a migração completa para o novo padrão visual o quanto antes.

### Paths descontinuados

Alguns caminhos antigos foram removidos e não estão mais disponíveis, retornando **erro 404**:

-   `/style-guide/css/fluig-style-guide.min.css`

-   `/portal/resources/style-guide/css/fluig-style-guide-flat.min.css`

-   `/portal/resources/style-guide/css/fluig-style-guide.min.css`


### Path recomendado

O caminho oficial e suportado para utilização de estilos é:

-   `/style-guide/css/fluig-style-guide-flat.min.css`


Recomendação:

Utilize sempre o path acima em em formulários, garantindo compatibilidade com as versões atuais do produto.

### Iconografia e ícones

A utilização de ícones também passou por ajustes com a implementação do **Animalia Design System** no Fluig.

-   **Ícones antigos (Fluig Icons):** Os ícones legados (fluigicon) foram movidos para um arquivo separado. Caso ainda sejam utilizados em **formulários**, é necessário importá-los manualmente:

    -   `/style-guide/css/fluig-icons.min.css`

-   **Nova biblioteca de ícones (Animalia Icons):** O padrão recomendado são os **Animalia Icons** (animaliaicon). Assim como no caso dos ícones legados, em **formulários** eles devem ser importados manualmente:

    -   `/style-guide/css/animalia-icons.min.css`


Observação:

Essa configuração é exclusiva para formulários. Na plataforma (desenvolvimento de widgets) a importação ocorre automaticamente, não sendo necessário nenhum ajuste adicional.



## Menus

* * *

Os menus **Liquid** e **Responsive** foram atualizados e agora utilizam ícones da biblioteca **Animalia Icons**.



## Mudança de fonte padrão

* * *

No **Tema Responsivo**, a fonte padrão do sistema passou a ser **Lato Regular** (`font-family`).

Atenção:

Essa alteração pode impactar o **espaçamento** e o **alinhamento** em temas customizados. Recomenda-se revisar estilos personalizados após a atualização.



## Melhorias gerais

* * *

Foram aplicadas diversas melhorias de desempenho e organização do código:

-   **Otimização de carregamento**

    -   Inclusão de estilos críticos do sistema com `rel="preload"`

    -   Scripts secundários do sistema carregados com `defer`

-   **Novas utilitárias no Style Guide**

    -   Classes *helpers* adicionais adicionadas no Style Guide. Consulte a [documentação](https://style.fluig.com/css.html#helpers) para mais detalhes.

    -   Classes responsivas para **fontes, margens e paddings**, disponível na mesma [documentação](https://style.fluig.com/css.html#helpers).

    -   Novas variáveis de **CSS de tema**. Consulte a [documentação de temas](https://style.fluig.com/css.html#themes) para mais detalhes.
