# Criar uma biblioteca personalizada

> **Fonte:** [https://tdn.totvs.com/display/fluig/Criar+uma+biblioteca+personalizada](https://tdn.totvs.com/display/fluig/Criar+uma+biblioteca+personalizada)

---

# Índice

# Objetivo

O objetivo deste guia é apresentar as ações necessárias para a criação de uma biblioteca personalizada.

# Visão Geral

Uma biblioteca personalizada é um arquivo com *snippets* de códigos que podem ser reaproveitados na criação de *layouts*. A [Biblioteca WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM) é parte integrante da plataforma, porém, existe a possibilidade do desenvolvedor criar a sua própria biblioteca.

# Como criar a biblioteca?

Para criar a própria biblioteca, é necessário efetuar os seguintes passos:

-   Acessar a pasta de *templates* que fica localizada em \[Instalação do fluig\]/repository/wcmdir/templates.

-   Dentro da pasta templates, criar um arquivo com a extensão ftl. Por exemplo: "custom.ftl".

O arquivo da biblioteca pode conter vários *snippets* de código.

# Como criar *snippets* novos?

Para criar *snippets* novos é necessário inserir uma macro nova no arquivo ftl da biblioteca, conforme mostrado a seguir:

```
<#macro NOME_DA_MACRO PARAMETRO1>
  <!-- Conteúdo da snippet -->
</#macro>
 
<#macro helloWorld>
  <h1>Hello world!</h1>
</#macro>
```

## *Snippet* com parâmetros

Abaixo segue um exemplo de *snippet* que utiliza um parâmetro:

```
<#macro funcao param1>
  <h1>${param1}!</h1>
</#macro>
```

# Como utilizar a biblioteca?

A importação da biblioteca personalizada segue o mesmo exemplo da importação da [Biblioteca WCM](https://tdn.totvs.com/display/fluig/Biblioteca+WCM).

No *layout*, inserir o seguinte código:

```
<#import "/NOME_DO_ARQUIVO.ftl" as NAMESPACE/>
```

Após importar, a utilização é similar ao da Biblioteca WCM.

```
<#import "/custom.ftl" as custom/>
 
<@wcm.helloWorld/>
<@wcm.funcao param1="Exemplo de importação da biblioteca customizada"/>
```

# Material para referência

Para mais informações sobre como criar *snippets* de código, acessar a [documentação do FreeMarker](http://freemarker.org/docs/dgui_misc_userdefdir.html) e/ou utilizar o código abaixo como exemplo:

```
<#macro chat>
    <div id="SlotChat" slot="true" class="slotint">
        <#list (pageRender.getInstancesIds("SlotChat"))! as id>
            ${pageRender.renderInstanceNoDecorator(id)}
        </#list>
    </div>
</#macro>
<#macro header public="false">
    <div id="wcm_header" class="wcm-header-background wcm-header">
        <div class="header-grouper-left">
            <a href="home" class="wcm_logo" title="${i18n.getTranslation('layout.label.pagetitle')}">
                <#if '${imageLogo}'=='true'>
                    <img src="${serverContextURL}/resources/images/${pageRender.user.tenantId}/logo_image.png"></img>
                <#else>
                    <img src="${serverContextURL}/resources/images/logo.png"></img>
                </#if>
            </a>
        </div>
        <div class="header-grouper-right">
            <#if "${public}" == "false">
                <!-- Container busca -->
                <div id="SlotInstantSearch" slot="true" class="slotint slot-header-actions">
                    <#list (pageRender.getInstancesIds("SlotInstantSearch"))! as id>
                        ${pageRender.renderInstanceNoDecorator(id)}
                    </#list>
                </div>

                <!-- Container alerta global-->
                <div id="SlotGlobalAlert" slot="true" class="slotint slot-header-actions">
                    <#list (pageRender.getInstancesIds("SlotGlobalAlert"))! as id>
                        ${pageRender.renderInstanceNoDecorator(id)}
                    </#list>
                </div>
            </#if>
            <!-- Container login -->
            <div id="SlotLogin" slot="true" class="slotint slot-header-actions">
                <#list (pageRender.getInstancesIds("SlotLogin"))! as id>
                    ${pageRender.renderInstanceNoDecorator(id)}
                </#list>
            </div>
        </div>
    </div>
</#macro>
<#macro menu>
    <nav class="wcm-navigation wcm-menu-background">
        <div id="SlotMenu" slot="true">
            <#list (pageRender.getInstancesIds("SlotMenu"))! as id>
                ${pageRender.renderInstanceNoDecorator(id)}
            </#list>
        </div>
    </nav>
</#macro>
<#macro renderSlot id decorator="false" editableSlot="false" class=" ">
    <#assign slot = id>
    <#assign computedClass = class>
    <#if editableSlot == "true">
        <#assign computedClass = computedClass + " slotint sortable">
    </#if>
    <div id="${slot}" slot="true" decorator="${decorator}" editableSlot="${editableSlot}" class="${computedClass}">
        <#list (pageRender.getInstancesIds(slot))! as id>
            ${pageRender.renderInstanceNoDecorator(id)}
        </#list>
    </div>
    <#nested>
</#macro>

<#macro footer layoutuserlabel>
    <div id="wcm_footer" class="wcm_footer">
        <div id="wcm_footer_interna_logo">

            <#if pageRender.isUserLogged() >
                <#if "${wcmVersionInfo.getStatus()}" == "1">
                    <div class="wcm_alert_img"
                         onmousemove="$(this).children('.wcm_alert_popup').show();"
                         onmouseout="$(this).children('.wcm_alert_popup').hide();">

                        <img src="${contextPath}/resources/images/icon_toast_alert.png">
                        <div class="wcm_alert_popup system-float-box bottom-left" style="display:none">
                            <div class="wcm_alert_popup_title">${i18n.getTranslation('warninVersion.user.title')}</div>
                            <div class="wcm_alert_popup_line"></div>
                            <div class="wcm_alert_popup_msg">${i18n.getTranslation('warninVersion.user1')}</div>
                        </div>

                    </div>
                <#elseif "${wcmVersionInfo.getStatus()}" == "2">
                    <div class="wcm_alert_img"
                         onmousemove="$(this).children('.wcm_alert_popup').show();"
                         onmouseout="$(this).children('.wcm_alert_popup').hide();">

                        <img src="${contextPath}/resources/images/icon_toast_alert.png">
                        <div class="wcm_alert_popup system-float-box bottom-left" style="display:none">
                            <div class="wcm_alert_popup_title">${i18n.getTranslation('warninVersion.user.title')}</div>
                            <div class="wcm_alert_popup_line"></div>
                            <div class="wcm_alert_popup_msg">${i18n.getTranslationP1('warninVersion.user2', wcmVersionInfo.getStatusInfo())}</div>
                        </div>

                    </div>
                <#elseif "${wcmVersionInfo.getStatus()}" == "3">
                    <div class="wcm_alert_img"
                         onmousemove="$(this).children('.wcm_alert_popup').show();"
                         onmouseout="$(this).children('.wcm_alert_popup').hide();">

                        <img src="${contextPath}/resources/images/icon_toast_erro.png">
                        <div class="wcm_alert_popup system-float-box bottom-left" style="display:none">
                            <div class="wcm_alert_popup_title">${i18n.getTranslation('warninVersion.user.title')}</div>
                            <div class="wcm_alert_popup_line"></div>
                            <div class="wcm_alert_popup_msg">${i18n.getTranslation('warninVersion.user3')}</div>
                        </div>

                    </div>
                </#if>

                <span id="ecm-version">
                    <span class="ecm-data-version">${wcmVersionInfo.getVersionName()}</span>
                    <span class="ecm-data-revision">${wcmVersionInfo.getVersionBuild()}</span>
                    - ${i18n.getTranslation('${layoutuserlabel}')}: ${user.fullName}
                </span>

                <!-- Container use policy -->
                <div id="SlotUsePolicy" slot="true" class="slotint">
                    <#list (pageRender.getInstancesIds("SlotUsePolicy"))! as id>
                        ${pageRender.renderInstanceNoDecorator(id)}
                    </#list>
                </div>
            </#if>

        </div>
    </div>
    <#nested>
</#macro>
```
