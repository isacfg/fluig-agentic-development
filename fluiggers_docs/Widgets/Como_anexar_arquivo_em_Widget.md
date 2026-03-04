# Como anexar arquivo em Widget

> **Fonte:** [https://fluiggers.com.br/t/como-anexar-arquivo-em-widget/1910](https://fluiggers.com.br/t/como-anexar-arquivo-em-widget/1910)
> **Categoria:** Widgets
> **Criado em:** 08/05/2023, 19:59
> **Visualizações:** 542 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Abilton Gadelha** (@Abilton_Gadelha) — 08/05/2023, 19:59

Não estou conseguindo abrir a janela do windows para anexar um arquivo, utilizando modo padrão de utilizar um input do type=“file” não consigo acionar o evento change, e de outra maneira foi utilizar o

```javascript
<script language="javascript">
    function showCamera(parameter) {
       JSInterface.showCamera(parameter);
    }
 </script>
```

JSInterface dá undefined :frowning:

Teria outra forma de fazer, precisando de uma força da comunidade que ainda não achei nada a respeito …

---

## Resposta #1

**Marcella Tsangos** (@marcella_tsangos) — 08/05/2023, 21:37

Tenho algo semelhante… Talvez funcione para você. No meu caso o usuário seleciona o arquivo (janela do windows) e eu gravo numa pasta no GED.

```auto
<div class="row" id="divUploadGED">
  <div class="col-md-12" style="text-align: center;">
    <a class="file-input-wrapper btn btn-info">
      <span>
        <i class="fluigicon fluigicon-upload icon-sm" aria-hidden="true"></i> Upload Document
      </span>
      <input id="fileupload" type="file" name="files" class="btn btn-info btn-sm btn-block"
        title="Search Files" />
    </a>
  </div>
</div>

$("#fileupload").on('change', function (e) {
  if (e.target.files[0]) {
    const input = $('#fileupload');
    const file = input[0].files[0];

    let fileSize = file.size;
    let fileName = file.name;

    console.log(`fileName: ${fileName}, fileSize: ${fileSize}`);

    let reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = function () {
      let fileContent = btoa(reader.result);

      //...
    }
  }
});
```

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Abilton Gadelha** (@Abilton_Gadelha) — 09/05/2023, 10:23 | ❤️ 1

Encontrei o erro, era um bloqueio em meu js do projeto estava aproveitando um projeto que tinha e dai ele em algum lugar que ainda não identifiquei… usei simples assim em outro projeto e funcionou…

```javascript
<div id="MyWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="MyWidget.instance()">
   <script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>
   <form class="form" >
       <div class="col-md-12 custom-file">
       	<input type="file" class="custom-file-input" id="inputBotaoAnexo" name="inputBotaoAnexo">
       	<label class="custom-file-label" for="inputBotaoAnexo">Anexe um documento</label>
	   	<input type="hidden" id="urlAnexo" name="urlAnexo">
	   </div>
	</form>
</div>
```

Ainda era para abrir o selecionar arquivo que tinha esse bloqueio no meu js principal. Obrigado [@marcella\_tsangos](/u/marcella_tsangos) pelo empenho de me responder.

---
