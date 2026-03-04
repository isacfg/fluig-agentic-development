# Ao selecionar um layout customizado na página inicial, o layout criado não permite a exibição do menu

> **Fonte:** [https://fluiggers.com.br/t/ao-selecionar-um-layout-customizado-na-pagina-inicial-o-layout-criado-nao-permite-a-exibicao-do-menu/2147](https://fluiggers.com.br/t/ao-selecionar-um-layout-customizado-na-pagina-inicial-o-layout-criado-nao-permite-a-exibicao-do-menu/2147)
> **Categoria:** WCM
> **Criado em:** 24/08/2023, 12:27
> **Visualizações:** 297 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Matheus** (@matheusassed) — 24/08/2023, 12:27

editei a página, selecionei o novo layout, não cheguei a salvar, esse erro acontece somente no modo de edição. A tela fica assim:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/f047e368be623cd02a74a513a7a0a710655ba456_2_690x334.png)

o código é esse:

```auto
<#import "/wcm.ftl" as wcm />
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

  <@wcm.menu/>

  <!-- Wrapper -->
  <div class="wcm-all-content">
    <div id="wcm-content" class="clearfix wcm-background">

      <body>
        <div class="fluig-style-guide">
          <div class="container">
            <div class="jumbotron">
              <h1>Hello World</h1>
              <p>Exemplo de texto para exibição em tela</p>
            </div>

            <div class="row">
              <div class="col-xs-6 col-lg-4">
                <h2>Heading</h2>
                <div class="editable-slot slotfull layout-1-1" id="slotContainer001">
                  <@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
                </div>
              </div>
              <div class="col-xs-6 col-lg-4">
                <h2>Heading</h2>
                <div class="editable-slot slotfull layout-1-1" id="slotContainer002">
                  <@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
                </div>
              </div>
              <div class="col-xs-6 col-lg-4">
                <h2>Heading</h2>
                <div class="editable-slot slotfull layout-1-1" id="slotContainer003">
                  <@wcm.renderSlot id="Slot003" decorator="false" editableSlot="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>

      <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
    </div>
  </div>
</div>
```

Alguma forma de resolver esse problema?

---
