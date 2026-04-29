# Remover menu lateral widget externa

> **Fonte:** [https://fluiggers.com.br/t/remover-menu-lateral-widget-externa/491](https://fluiggers.com.br/t/remover-menu-lateral-widget-externa/491)
> **Categoria:** Widgets
> **Criado em:** 02/06/2021, 12:06
> **Visualizações:** 1387 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Marco Comassetto** (@marcommas) — 02/06/2021, 12:06

Pessoal,
Ao criar uma widget externa e exportar ela, o menu lateral de mantém, porém, sem nada nele.

Alguém sabe como remover ele?

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 02/06/2021, 16:33

Boa tarde Marcommas

As WIDGETS são utilizadas em SLOTs de LAYOUTS. Para você remover o menu você terá que customizar um LAYOUT e utilizar em sua página ou verificar se já não existe um layout padrão que supra essa necessidade nos exemplos disponíveis pelo Fluig.

![image](https://fluiggers.com.br/uploads/default/original/1X/6476f04f5d43773939b6f79dfeda132f8bc9b57b.png)

Segue exemplo de fonte de um LAYOUT com MENU e CABEÇALHO comentados.

[https://tdn.totvs.com/display/public/fluig/Layouts](https://tdn.totvs.com/display/public/fluig/Layouts)

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Marco Comassetto** (@marcommas) — 02/06/2021, 18:34 | ❤️ 1

Valeu!!
Criei o layout e vinculei este layout a minha página.
Vou deixar o código ftl do layout caso alguém necessite:

```
<#import "/wcm.ftl" as wcm/>
<#if pageRender.isEditMode()=true>
    <@wcm.header authenticated="true"/>
</#if>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">
<#if pageRender.isEditMode()=true>
	<@wcm.menu />
</#if>
<!-- Wrapper -->
<#if pageRender.isEditMode()=true>
	<div class="wcm-all-content" >
<#else>
	<div class="wcm-all-content" style="padding: 0px 0px 0px 0px !important;">
</#if>
    <div id="wcm-content" >

        <!-- Your content here -->
		<#if pageRender.isEditMode()=true>
		<div name="formatBar" id="formatBar"></div>
		<div id="edicaoPagina" class="clearfix">
			<#else>
			<div id="visualizacaoPagina" class="clearfix">
				</#if>

				<!-- Slot 1 -->
				<div id="divSlot1" class="editable-slot slotfull layout-1-1">
					<@wcm.renderSlot id="SlotA" decorator="false" editableSlot="true" />
				</div>

			</div>
		</div>
		<#if pageRender.isEditMode()=true>
        	<@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </#if>
    </div>
</div>
```

---

## Resposta #3

**system** (@system) — 03/06/2021, 10:35

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
