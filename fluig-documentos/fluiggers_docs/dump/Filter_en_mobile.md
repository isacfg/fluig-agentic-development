# Filter en mobile

> **Fonte:** [https://fluiggers.com.br/t/filter-en-mobile/798](https://fluiggers.com.br/t/filter-en-mobile/798)
> **Categoria:** Widgets
> **Tags:** `form`, `bpm`, `mobile`
> **Criado em:** 29/11/2021, 11:34
> **Visualizações:** 594 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Julio Kriger** (@Julio_Kriger) — 29/11/2021, 11:34

Hola,

Tengo un formulario de un BPM que funciona en mobile. Se ve todo bien, salvo el “filter” que se ve mal en mobile, en desktop se ve bien.

Este es el código:

```
<div class="panel panel-warning">
                <div class="panel-heading">i18n.translate("DATOS_CIRUGIA")</div>
                <div class="panel-body">
                    <div class="row">
                        <!-- CLIENTE -->
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <h4 class="text-warning">i18n.translate("CLIENTE")</h4>
                                <input class="form-control" type="text" id="CLIENTE" name="CLIENTE"/>
                                <input id="COD_CLIENTE" name="COD_CLIENTE" type="text" style="display: none;"/>
                                <input id="LOJA" name="LOJA" type="text" style="display: none;"/>
                                <input id="TIPO_CLIENTE" name="TIPO_CLIENTE" type="text"
                                       style="display: none;"/>
                                <input id="FILIAL" name="FILIAL" type="text"
                                       style="display: none;"/>
                            </div>
                        </div>
                        <!-- CIRUJANO -->
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <h4 class="text-warning">i18n.translate("CIRUJANO")</h4>
                                <input class="form-control" type="text" name="CIRUJANO" id="CIRUJANO"/>
                                <input type="text" name="COD_CIRUJANO" id="COD_CIRUJANO"
                                       style="display: none;"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- INSTITUCION -->
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <h4 class="text-warning">i18n.translate("INSTITUCION")</h4>
                                <input class="form-control" type="text" name="INSTITUCION"
                                       id="INSTITUCION"/>
                                <input type="text" name="COD_INSTITUCION"
                                       id="COD_INSTITUCION" style="display: none;"/>
                            </div>
                        </div>
                        <!-- FECHA_CIRUGIA -->
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div class="form-group">
                                <div class="form-group fs-cursor-pointer" id="FECHA_CIRUGIA">
                                    <h4 class="text-warning">i18n.translate("FECHA_CIRUGIA")</h4>
                                    <div class="input-group date">
                                        <input class="form-control" id="vFECHA_CIRUGIA"
                                               name="FECHA_CIRUGIA" type="text"> <span
                                            class="input-group-addon" readonly> <span
                                            class="fluigicon fluigicon-calendar"></span>
												</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
```

Me pueden dat una mano? Gracias!

 [/uploads/default/original/1X/953d57cfd124de7c920c5f8b95a6a82d705307ed.MOV](https://fluiggers.com.br/uploads/default/original/1X/953d57cfd124de7c920c5f8b95a6a82d705307ed.MOV)

---

## Resposta #1

**Romulo Pereira** (@romuloccomp) — 02/12/2021, 15:38

Amigo, você tentou usar o data-zoom?

Os js são bem limitados no mobile, mas acho que funciona:

[https://tdn.totvs.com/pages/releaseview.action?pageId=75270483](https://tdn.totvs.com/pages/releaseview.action?pageId=75270483)
Título: Zoom

---

## Resposta #2

**Julio Kriger** (@Julio_Kriger) — 02/12/2021, 16:34 | ❤️ 1

Hola!

No puedo usar data-zoom ya que el Filter depende de otros campos para filtrar la información a mostrar.

Estuve viendo que en Andriod se ve bien, pero en iPhone se ve mal.

Saludos,
Julio

---
